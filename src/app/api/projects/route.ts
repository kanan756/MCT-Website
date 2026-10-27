import { NextResponse } from "next/server";
import { getLiveProjects } from "@/lib/contentRepo";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const projects = await getLiveProjects();
    return NextResponse.json({ data: projects }, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
