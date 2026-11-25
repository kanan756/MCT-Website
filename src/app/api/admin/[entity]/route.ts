import { NextRequest, NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/adminAuth";
import {
  isGoogleConfigured,
  getSheetRows,
  upsertSheetRow,
  deleteSheetRow,
  initializeSheetTabs,
} from "@/lib/googleSheets";
import { INITIAL_BLOGS } from "@/data/blogs";
import { PROJECTS } from "@/data/projects";
import { servicesData } from "@/data/services";
import { INITIAL_CAREERS } from "@/data/careers";

type Entity = "blogs" | "projects" | "services" | "careers";

const SHEET_MAP: Record<Entity, string> = {
  blogs: "Blogs",
  projects: "Projects",
  services: "Services",
  careers: "Careers",
};

const PRIMARY_KEY_MAP: Record<Entity, string> = {
  blogs: "slug",
  projects: "slug",
  services: "id",
  careers: "id",
};

const STATIC_DATA_MAP: Record<Entity, any[]> = {
  blogs: INITIAL_BLOGS,
  projects: PROJECTS,
  services: servicesData,
  careers: INITIAL_CAREERS,
};

function resolveEntity(param: string): Entity | null {
  if (param === "blogs" || param === "projects" || param === "services" || param === "careers") {
    return param as Entity;
  }
  return null;
}

export const dynamic = "force-dynamic";

// GET /api/admin/[entity] — list all items
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ entity: string }> }
) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { entity: entityParam } = await params;
  const entity = resolveEntity(entityParam);
  if (!entity) {
    return NextResponse.json({ error: "Unknown entity" }, { status: 400 });
  }

  try {
    if (isGoogleConfigured()) {
      await initializeSheetTabs();
      const rows = await getSheetRows(SHEET_MAP[entity]);
      return NextResponse.json(
        {
          data: rows || [],
          source: "google_sheets",
          count: (rows || []).length,
        },
        {
          headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate",
          },
        }
      );
    }
    // Fallback to static data ONLY if Google Sheets is not configured
    const staticData = STATIC_DATA_MAP[entity];
    return NextResponse.json(
      {
        data: staticData,
        source: "static",
        count: staticData.length,
      },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (err: any) {
    console.error(`GET /${entity} error:`, err);
    return NextResponse.json({ error: err.message || "Failed to fetch data" }, { status: 500 });
  }
}

// POST /api/admin/[entity] — create or update item
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ entity: string }> }
) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isGoogleConfigured()) {
    return NextResponse.json(
      { error: "Google Sheets is not configured in .env.local yet." },
      { status: 400 }
    );
  }

  const { entity: entityParam } = await params;
  const entity = resolveEntity(entityParam);
  if (!entity) {
    return NextResponse.json({ error: "Unknown entity" }, { status: 400 });
  }

  try {
    const body = await req.json();
    const primaryKey = PRIMARY_KEY_MAP[entity];
    const primaryValue = body[primaryKey];

    if (!primaryValue) {
      return NextResponse.json(
        { error: `Missing primary key: ${primaryKey}` },
        { status: 400 }
      );
    }

    await initializeSheetTabs();
    const result = await upsertSheetRow(SHEET_MAP[entity], primaryKey, primaryValue, body);

    return NextResponse.json({
      success: true,
      action: result.action,
      message: `${entity} ${result.action} successfully`,
    });
  } catch (err: any) {
    console.error(`POST /${entity} error:`, err);
    return NextResponse.json({ error: err.message || "Failed to save" }, { status: 500 });
  }
}

// DELETE /api/admin/[entity]?slug=xxx or ?id=xxx — delete item
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ entity: string }> }
) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isGoogleConfigured()) {
    return NextResponse.json(
      { error: "Google Sheets is not configured in .env.local yet." },
      { status: 400 }
    );
  }

  const { entity: entityParam } = await params;
  const entity = resolveEntity(entityParam);
  if (!entity) {
    return NextResponse.json({ error: "Unknown entity" }, { status: 400 });
  }

  const url = new URL(req.url);
  const primaryKey = PRIMARY_KEY_MAP[entity];
  const primaryValue = url.searchParams.get(primaryKey) || url.searchParams.get("id") || url.searchParams.get("slug");

  if (!primaryValue) {
    return NextResponse.json(
      { error: `Missing query param: ${primaryKey}` },
      { status: 400 }
    );
  }

  try {
    const deleted = await deleteSheetRow(SHEET_MAP[entity], primaryKey, primaryValue);
    if (!deleted) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: `${entity} deleted successfully` });
  } catch (err: any) {
    console.error(`DELETE /${entity} error:`, err);
    return NextResponse.json({ error: err.message || "Failed to delete" }, { status: 500 });
  }
}
