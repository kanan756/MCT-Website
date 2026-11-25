import { NextResponse } from "next/server";
import {
  isGoogleConfigured,
  getSheetsClient,
  SPREADSHEET_ID,
} from "@/lib/googleSheets";

async function ensureApplicationsSheet() {
  if (!isGoogleConfigured()) return;
  const sheets = getSheetsClient();
  try {
    const meta = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
    const existing = meta.data.sheets?.map((s) => s.properties?.title) || [];
    if (!existing.includes("JobApplications")) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: { requests: [{ addSheet: { properties: { title: "JobApplications" } } }] },
      });
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: "JobApplications!A1",
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              "id",
              "applyingFor",
              "areaOfInterest",
              "fullName",
              "email",
              "phone",
              "currentLocation",
              "totalExperience",
              "noticePeriod",
              "currentCtc",
              "expectedCtc",
              "portfolioUrl",
              "resumeFileName",
              "coverNote",
              "submittedAt",
              "status"
            ]
          ],
        },
      });
    }
  } catch (err) {
    console.warn("Could not ensure JobApplications sheet:", err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      applyingFor,
      areaOfInterest,
      fullName,
      email,
      phone,
      currentLocation,
      totalExperience,
      noticePeriod,
      currentCtc,
      expectedCtc,
      portfolioUrl,
      resumeFileName,
      coverNote,
      website, // honeypot
      consent,
    } = body;

    // Honeypot spam protection
    if (website) {
      return NextResponse.json({ success: true, message: "Application received." });
    }

    if (!fullName || !email || !phone || !currentLocation || !applyingFor || !totalExperience || !noticePeriod) {
      return NextResponse.json(
        { error: "Please fill in all required fields marked with an asterisk (*)." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Please accept the privacy policy to submit your application." },
        { status: 400 }
      );
    }

    const application = {
      id: `APP-${Date.now()}`,
      applyingFor: applyingFor || "Product Manager",
      areaOfInterest: areaOfInterest || "",
      fullName,
      email,
      phone,
      currentLocation,
      totalExperience,
      noticePeriod,
      currentCtc: currentCtc || "",
      expectedCtc: expectedCtc || "",
      portfolioUrl: portfolioUrl || "",
      resumeFileName: resumeFileName || "Not attached",
      coverNote: coverNote || "",
      submittedAt: new Date().toISOString(),
      status: "New",
    };

    if (isGoogleConfigured()) {
      try {
        await ensureApplicationsSheet();
        const sheets = getSheetsClient();
        await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range: "JobApplications!A:P",
          valueInputOption: "USER_ENTERED",
          insertDataOption: "INSERT_ROWS",
          requestBody: {
            values: [
              [
                application.id,
                application.applyingFor,
                application.areaOfInterest,
                application.fullName,
                application.email,
                application.phone,
                application.currentLocation,
                application.totalExperience,
                application.noticePeriod,
                application.currentCtc,
                application.expectedCtc,
                application.portfolioUrl,
                application.resumeFileName,
                application.coverNote,
                application.submittedAt,
                application.status,
              ],
            ],
          },
        });
      } catch (sheetErr) {
        console.warn("Failed to save application to Google Sheet:", sheetErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully! Our talent acquisition team will review your application and contact you soon.",
      data: application,
    });
  } catch (err: any) {
    console.error("Application submission error:", err);
    return NextResponse.json(
      { error: "Internal Server Error", detail: err.message },
      { status: 500 }
    );
  }
}
