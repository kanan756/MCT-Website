import { NextRequest, NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/adminAuth";
import { uploadImageToDrive, isGoogleConfigured } from "@/lib/googleSheets";

export async function POST(req: NextRequest) {
  const isAuth = await verifyAdminSession(req);
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isGoogleConfigured()) {
    return NextResponse.json(
      { error: "Google Service Account is not configured in .env.local yet." },
      { status: 400 }
    );
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const imageUrl = await uploadImageToDrive(buffer, file.name, file.type);

    return NextResponse.json({
      success: true,
      url: imageUrl,
      fileName: file.name,
    });
  } catch (err: any) {
    console.error("Upload failed:", err);
    return NextResponse.json({ error: err.message || "Failed to upload file to Google Drive" }, { status: 500 });
  }
}
