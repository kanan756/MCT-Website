import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/adminAuth";
import { isGoogleConfigured, getSheetRows } from "@/lib/googleSheets";

export const dynamic = "force-dynamic";

// GET /api/admin/enquiries — list all contact form submissions
export async function GET() {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isGoogleConfigured()) {
    return NextResponse.json({ data: [], source: "not_configured", count: 0 });
  }

  try {
    const { initializeSheetTabs } = await import("@/lib/googleSheets");
    await initializeSheetTabs();
    const rows = await getSheetRows("Enquiries");
    return NextResponse.json(
      { data: rows || [], source: "google_sheets", count: (rows || []).length },
      { headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } }
    );
  } catch (err: any) {
    console.error("GET /enquiries error:", err);
    return NextResponse.json(
      { data: [], source: "empty", count: 0 },
      { headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } }
    );
  }
}
