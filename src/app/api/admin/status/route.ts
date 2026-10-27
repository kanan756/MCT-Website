import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/adminAuth";
import { isGoogleConfigured, SPREADSHEET_ID, DRIVE_FOLDER_ID } from "@/lib/googleSheets";

export async function GET() {
  const isAuth = await verifyAdminSession();
  const configured = isGoogleConfigured();

  return NextResponse.json({
    authenticated: isAuth,
    googleConfigured: configured,
    spreadsheetId: SPREADSHEET_ID ? `${SPREADSHEET_ID.substring(0, 8)}...` : null,
    driveFolderId: DRIVE_FOLDER_ID ? `${DRIVE_FOLDER_ID.substring(0, 8)}...` : null,
  });
}
