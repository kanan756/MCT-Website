import { NextResponse } from "next/server";
import { getLiveBlogs } from "@/lib/contentRepo";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const blogs = await getLiveBlogs();
    return NextResponse.json({ data: blogs }, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
