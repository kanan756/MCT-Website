import { NextResponse } from "next/server";
import {
  isGoogleConfigured,
  getSheetsClient,
  SPREADSHEET_ID,
} from "@/lib/googleSheets";

async function ensureCommentsSheet() {
  if (!isGoogleConfigured()) return;
  const sheets = getSheetsClient();
  try {
    const meta = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
    const existing = meta.data.sheets?.map((s) => s.properties?.title) || [];
    if (!existing.includes("Comments")) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: { requests: [{ addSheet: { properties: { title: "Comments" } } }] },
      });
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: "Comments!A1",
        valueInputOption: "RAW",
        requestBody: {
          values: [["id", "slug", "name", "email", "website", "message", "submittedAt", "status"]],
        },
      });
    }
  } catch (err) {
    console.warn("Could not ensure Comments sheet:", err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug, name, email, website, message } = body;

    if (!message || !name || !email) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const comment = {
      id: `COM-${Date.now()}`,
      slug: slug || "general",
      name,
      email,
      website: website || "",
      message,
      submittedAt: new Date().toISOString(),
      status: "Approved",
    };

    // Save to Google Sheets if configured
    if (isGoogleConfigured()) {
      try {
        await ensureCommentsSheet();
        const sheets = getSheetsClient();
        await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range: "Comments!A:H",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [
              [
                comment.id,
                comment.slug,
                comment.name,
                comment.email,
                comment.website,
                comment.message,
                comment.submittedAt,
                comment.status,
              ],
            ],
          },
        });
      } catch (sheetErr) {
        console.warn("Failed to save comment to Google Sheets:", sheetErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Comment submitted successfully!",
      comment,
    });
  } catch (err: any) {
    console.error("Comment submission error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to submit comment" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!isGoogleConfigured()) {
    return NextResponse.json({ comments: [] });
  }

  try {
    await ensureCommentsSheet();
    const sheets = getSheetsClient();
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Comments!A2:H",
    });

    const rows = res.data.values || [];
    let comments = rows.map((r) => ({
      id: r[0],
      slug: r[1],
      name: r[2],
      email: r[3],
      website: r[4],
      message: r[5],
      submittedAt: r[6],
      status: r[7] || "Approved",
    }));

    if (slug) {
      comments = comments.filter((c) => c.slug === slug);
    }

    return NextResponse.json({ comments });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
