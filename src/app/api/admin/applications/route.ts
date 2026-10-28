import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/adminAuth";
import { isGoogleConfigured, getSheetRows, initializeSheetTabs, upsertSheetRow, deleteSheetRow } from "@/lib/googleSheets";

export const dynamic = "force-dynamic";

// GET /api/admin/applications — list all submitted job applications
export async function GET() {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isGoogleConfigured()) {
    return NextResponse.json({ data: [], source: "not_configured", count: 0 });
  }

  try {
    await initializeSheetTabs();
    const rows = await getSheetRows("JobApplications");
    // Sort by submittedAt descending (newest first)
    const sorted = [...(rows || [])].reverse();
    return NextResponse.json(
      { data: sorted, source: "google_sheets", count: sorted.length },
      { headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } }
    );
  } catch (err: any) {
    console.error("GET /api/admin/applications error:", err);
    return NextResponse.json(
      { data: [], source: "empty", count: 0 },
      { headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } }
    );
  }
}

// POST /api/admin/applications — update status (e.g. New, Reviewed, Shortlisted, Rejected)
export async function POST(req: Request) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    if (!body.id) {
      return NextResponse.json({ error: "Missing application ID" }, { status: 400 });
    }

    await initializeSheetTabs();
    await upsertSheetRow("JobApplications", "id", body.id, body);
    return NextResponse.json({ success: true, message: "Application updated successfully" });
  } catch (err: any) {
    console.error("POST /api/admin/applications error:", err);
    return NextResponse.json({ error: err.message || "Failed to update" }, { status: 500 });
  }
}

// DELETE /api/admin/applications?id=xxx — delete an application
export async function DELETE(req: Request) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing application ID" }, { status: 400 });
  }

  try {
    await initializeSheetTabs();
    await deleteSheetRow("JobApplications", "id", id);
    return NextResponse.json({ success: true, message: "Application deleted successfully" });
  } catch (err: any) {
    console.error("DELETE /api/admin/applications error:", err);
    return NextResponse.json({ error: err.message || "Failed to delete" }, { status: 500 });
  }
}
