import { NextResponse } from "next/server";
import { isGoogleConfigured, getSheetRows, initializeSheetTabs } from "@/lib/googleSheets";
import { INITIAL_CAREERS, CareerOpening } from "@/data/careers";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    if (isGoogleConfigured()) {
      await initializeSheetTabs();
      const rows = await getSheetRows("Careers");

      const parsed = (rows || [])
        .map((row: any) => {
          let roleResponsibilities: string[] = [];
          let keyResponsibilities: string[] = [];
          let whyJoinUs: string[] = [];

          try {
            roleResponsibilities = Array.isArray(row.roleResponsibilities)
              ? row.roleResponsibilities
              : JSON.parse(row.roleResponsibilities || "[]");
          } catch {
            roleResponsibilities = typeof row.roleResponsibilities === "string" ? row.roleResponsibilities.split("\n").filter(Boolean) : [];
          }

          try {
            keyResponsibilities = Array.isArray(row.keyResponsibilities)
              ? row.keyResponsibilities
              : JSON.parse(row.keyResponsibilities || "[]");
          } catch {
            keyResponsibilities = typeof row.keyResponsibilities === "string" ? row.keyResponsibilities.split("\n").filter(Boolean) : [];
          }

          try {
            whyJoinUs = Array.isArray(row.whyJoinUs)
              ? row.whyJoinUs
              : JSON.parse(row.whyJoinUs || "[]");
          } catch {
            whyJoinUs = typeof row.whyJoinUs === "string" ? row.whyJoinUs.split("\n").filter(Boolean) : [];
          }

          let tags: string[] = [];
          try {
            tags = Array.isArray(row.tags) ? row.tags : JSON.parse(row.tags || "[]");
          } catch {
            tags = typeof row.tags === "string" ? row.tags.split(",").map((s: string) => s.trim()).filter(Boolean) : [];
          }

          // A row is considered published unless explicitly set to false or "false"
          const isPublished =
            row.published === undefined ||
            row.published === null ||
            row.published === "" ||
            row.published === true ||
            row.published === "true" ||
            row.published === "TRUE" ||
            row.published === "1" ||
            row.published === 1;

          return {
            id: row.id,
            title: row.title,
            department: row.department || "Consulting",
            tags,
            experience: row.experience,
            location: row.location,
            qualification: row.qualification,
            roleObjective: row.roleObjective,
            roleResponsibilities,
            keyResponsibilities,
            whyJoinUs,
            published: isPublished,
          } as CareerOpening;
        })
        .filter((item) => item.published);

      return NextResponse.json(parsed);
    }

    // Only fallback to static data if Google Sheets is not configured at all
    const active = INITIAL_CAREERS.filter((c) => c.published !== false);
    return NextResponse.json(active);
  } catch (err: any) {
    console.error("Public Careers GET error:", err);
    return NextResponse.json([]);
  }
}

