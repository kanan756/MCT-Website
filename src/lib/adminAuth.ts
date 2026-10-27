import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "mct_admin_session";

// You can customize the credentials here or via environment variables
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin@miraclecloud.com";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "MctAdmin2025!";

export async function verifyAdminSession(req?: NextRequest): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME);
  if (!session || !session.value) return false;

  // Expected token: simple base64 of username:password
  const expectedToken = Buffer.from(`${ADMIN_USERNAME}:${ADMIN_PASSWORD}`).toString("base64");
  return session.value === expectedToken;
}

export function createAdminAuthResponse(success: boolean) {
  if (!success) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
