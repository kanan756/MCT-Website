import { NextResponse } from "next/server";
import { getLiveServices } from "@/lib/contentRepo";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const services = await getLiveServices();
    return NextResponse.json(
      { data: services },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
