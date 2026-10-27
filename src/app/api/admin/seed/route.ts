import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/adminAuth";
import {
  isGoogleConfigured,
  initializeSheetTabs,
  upsertSheetRow,
} from "@/lib/googleSheets";
import { INITIAL_BLOGS } from "@/data/blogs";
import { PROJECTS } from "@/data/projects";
import { servicesData } from "@/data/services";

export async function POST() {
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

  try {
    // 1. Ensure tabs & headers exist
    await initializeSheetTabs();

    let blogsCount = 0;
    for (const blog of INITIAL_BLOGS) {
      await upsertSheetRow("Blogs", "slug", blog.slug, blog);
      blogsCount++;
    }

    let projectsCount = 0;
    for (const project of PROJECTS) {
      await upsertSheetRow("Projects", "slug", project.slug, project);
      projectsCount++;
    }

    let servicesCount = 0;
    for (const service of servicesData) {
      await upsertSheetRow("Services", "id", service.id, service);
      servicesCount++;
    }

    return NextResponse.json({
      success: true,
      message: `Successfully seeded Google Sheet with ${blogsCount} blogs, ${projectsCount} projects, and ${servicesCount} services categories.`,
    });
  } catch (err: any) {
    console.error("Seeding error:", err);
    return NextResponse.json({ error: err.message || "Seeding failed" }, { status: 500 });
  }
}
