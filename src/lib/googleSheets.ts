import { google } from "googleapis";
import { Readable } from "stream";

// Environment variables needed:
// GOOGLE_SERVICE_ACCOUNT_EMAIL
// GOOGLE_PRIVATE_KEY
// GOOGLE_SHEET_ID
// GOOGLE_DRIVE_FOLDER_ID (optional, for image uploads)

export function isGoogleConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY &&
    process.env.GOOGLE_SHEET_ID
  );
}

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !privateKey) {
    throw new Error("Missing Google Service Account credentials");
  }

  // Handle newline escapes in private keys in env vars
  privateKey = privateKey.replace(/\\n/g, "\n");

  return new google.auth.JWT({
    email,
    key: privateKey,
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive",
    ],
  });
}

export function getSheetsClient() {
  const auth = getAuth();
  return google.sheets({ version: "v4", auth });
}

export function getDriveClient() {
  const auth = getAuth();
  return google.drive({ version: "v3", auth });
}

export const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID || "";
export const DRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID || "";

/**
 * Ensures required tabs (Blogs, Projects, Services) exist with headers
 */
export async function initializeSheetTabs() {
  if (!isGoogleConfigured()) return;
  const sheets = getSheetsClient();
  const spreadsheetId = SPREADSHEET_ID;

  const metadata = await sheets.spreadsheets.get({ spreadsheetId });
  const existingSheets = metadata.data.sheets?.map(s => s.properties?.title) || [];

  const requiredSheets: { name: string; headers: string[] }[] = [
    {
      name: "Blogs",
      headers: ["slug", "title", "category", "author", "date", "readTime", "image", "summary", "content", "tags", "published"]
    },
    {
      name: "Projects",
      headers: ["slug", "name", "solutionCategory", "tagline", "client", "location", "duration", "year", "image", "heroImage", "tags", "summary", "overview", "businessChallenges", "solutionDelivered", "capabilities", "businessValues", "technologies"]
    },
    {
      name: "Services",
      headers: ["id", "number", "title", "slug", "badge", "tagline", "summary", "accentColor", "bgGradient", "iconName", "subgroups", "items", "additionalItems"]
    },
    {
      name: "Enquiries",
      headers: ["timestamp", "name", "email", "phone", "service", "message"]
    }
  ];

  const addSheetRequests: any[] = [];
  for (const req of requiredSheets) {
    if (!existingSheets.includes(req.name)) {
      addSheetRequests.push({
        addSheet: {
          properties: { title: req.name }
        }
      });
    }
  }

  if (addSheetRequests.length > 0) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: { requests: addSheetRequests }
    });
  }

  // Populate headers if empty
  for (const req of requiredSheets) {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${req.name}!A1:Z1`,
    });
    if (!res.data.values || res.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${req.name}!A1`,
        valueInputOption: "RAW",
        requestBody: {
          values: [req.headers]
        }
      });
    }
  }
}

/**
 * Fetch rows as array of objects mapping headers -> values
 */
export async function getSheetRows(sheetName: string): Promise<Record<string, any>[]> {
  if (!isGoogleConfigured()) return [];
  const sheets = getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A1:ZZ`,
  });

  const values = res.data.values;
  if (!values || values.length <= 1) return [];

  const headers = values[0] as string[];
  const rows: Record<string, any>[] = [];

  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    if (!row || row.length === 0 || !row[0]) continue;
    const item: Record<string, any> = { _rowIndex: i + 1 };
    headers.forEach((h, index) => {
      let val = row[index] !== undefined ? row[index] : "";
      // Parse JSON if valid
      if (typeof val === "string" && (val.startsWith("[") || val.startsWith("{"))) {
        try {
          val = JSON.parse(val);
        } catch {
          // Keep as string
        }
      } else if (val === "true") val = true;
      else if (val === "false") val = false;
      item[h] = val;
    });
    rows.push(item);
  }
  return rows;
}

/**
 * Upsert row in Google Sheet by primary key (slug or id)
 */
export async function upsertSheetRow(
  sheetName: string,
  primaryKey: string,
  primaryValue: string,
  rowData: Record<string, any>
) {
  if (!isGoogleConfigured()) {
    throw new Error("Google credentials are not configured in environment.");
  }
  const sheets = getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A1:ZZ`,
  });

  const values = res.data.values || [];
  if (values.length === 0) {
    throw new Error(`Sheet ${sheetName} has no header row.`);
  }

  const headers = values[0] as string[];
  const keyIndex = headers.indexOf(primaryKey);
  if (keyIndex === -1) {
    throw new Error(`Primary key ${primaryKey} not found in headers of ${sheetName}`);
  }

  // Find existing row index
  let foundRowIndex = -1;
  for (let i = 1; i < values.length; i++) {
    if (values[i] && values[i][keyIndex] === primaryValue) {
      foundRowIndex = i + 1; // 1-based index in sheet
      break;
    }
  }

  // Build row array according to headers
  const rowValues = headers.map(header => {
    const val = rowData[header];
    if (val === undefined || val === null) return "";
    if (typeof val === "object") return JSON.stringify(val);
    return String(val);
  });

  if (foundRowIndex > 0) {
    // Update existing row
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A${foundRowIndex}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowValues]
      }
    });
    return { action: "updated", rowIndex: foundRowIndex };
  } else {
    // Append new row
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rowValues]
      }
    });
    return { action: "created" };
  }
}

/**
 * Delete row in Google Sheet by primary key
 */
export async function deleteSheetRow(sheetName: string, primaryKey: string, primaryValue: string) {
  if (!isGoogleConfigured()) {
    throw new Error("Google credentials are not configured in environment.");
  }
  const sheets = getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A1:ZZ`,
  });

  const values = res.data.values || [];
  if (values.length <= 1) return false;

  const headers = values[0] as string[];
  const keyIndex = headers.indexOf(primaryKey);
  if (keyIndex === -1) return false;

  let rowToDeleteZeroBased = -1;
  for (let i = 1; i < values.length; i++) {
    if (values[i] && values[i][keyIndex] === primaryValue) {
      rowToDeleteZeroBased = i;
      break;
    }
  }

  if (rowToDeleteZeroBased === -1) return false;

  // Get sheetId for sheetName
  const meta = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
  const sheetObj = meta.data.sheets?.find(s => s.properties?.title === sheetName);
  const sheetId = sheetObj?.properties?.sheetId;

  if (sheetId === undefined) {
    throw new Error(`Sheet ID for ${sheetName} could not be determined.`);
  }

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: {
      requests: [
        {
          deleteDimension: {
            range: {
              sheetId,
              dimension: "ROWS",
              startIndex: rowToDeleteZeroBased,
              endIndex: rowToDeleteZeroBased + 1,
            }
          }
        }
      ]
    }
  });

  return true;
}

/**
 * Upload image file to Google Drive and return direct web view / direct content link
 */
export async function uploadImageToDrive(fileBuffer: Buffer, fileName: string, mimeType: string): Promise<string> {
  if (!isGoogleConfigured()) {
    throw new Error("Google credentials are not configured in environment.");
  }
  const drive = getDriveClient();

  const fileMetadata: any = {
    name: `${Date.now()}_${fileName}`,
  };

  if (DRIVE_FOLDER_ID) {
    fileMetadata.parents = [DRIVE_FOLDER_ID];
  }

  const media = {
    mimeType,
    body: Readable.from(fileBuffer),
  };

  const file = await drive.files.create({
    requestBody: fileMetadata,
    media,
    fields: "id, webViewLink, webContentLink",
  });

  const fileId = file.data.id;
  if (!fileId) {
    throw new Error("Failed to obtain file ID from Drive upload.");
  }

  // Make file publicly readable so it can display as image on the website
  try {
    await drive.permissions.create({
      fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });
  } catch (err) {
    console.warn("Could not set anyone-reader permission (check Drive shared folder permissions):", err);
  }

  // Direct thumbnail / preview URL for easy embedding
  return `https://lh3.googleusercontent.com/d/${fileId}`;
}
