import { NextResponse } from "next/server";
import {
  isGoogleConfigured,
  getSheetsClient,
  SPREADSHEET_ID,
  initializeSheetTabs,
} from "@/lib/googleSheets";

async function ensureEnquiriesSheet() {
  if (!isGoogleConfigured()) return;
  const sheets = getSheetsClient();
  try {
    const meta = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
    const existing = meta.data.sheets?.map((s) => s.properties?.title) || [];
    if (!existing.includes("Enquiries")) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: { requests: [{ addSheet: { properties: { title: "Enquiries" } } }] },
      });
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: "Enquiries!A1",
        valueInputOption: "RAW",
        requestBody: {
          values: [["id", "name", "email", "phone", "service", "message", "submittedAt", "status"]],
        },
      });
    }
  } catch (err) {
    console.warn("Could not ensure Enquiries sheet:", err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const enquiry = {
      id: `ENQ-${Date.now()}`,
      name,
      email,
      phone: phone || "",
      service: service || "",
      message,
      submittedAt: new Date().toISOString(),
      status: "New",
    };

    // Save to Google Sheets if configured
    if (isGoogleConfigured()) {
      try {
        await ensureEnquiriesSheet();
        const sheets = getSheetsClient();
        await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range: "Enquiries!A1",
          valueInputOption: "USER_ENTERED",
          insertDataOption: "INSERT_ROWS",
          requestBody: {
            values: [[
              enquiry.id,
              enquiry.name,
              enquiry.email,
              enquiry.phone,
              enquiry.service,
              enquiry.message,
              enquiry.submittedAt,
              enquiry.status,
            ]],
          },
        });
      } catch (sheetErr) {
        console.warn("Could not save enquiry to Google Sheets:", sheetErr);
      }
    }

    console.log("Contact form submission:", enquiry);

    return NextResponse.json(
      { success: true, message: "Message sent successfully", id: enquiry.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
