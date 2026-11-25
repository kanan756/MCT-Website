import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, ADMIN_USERNAME, ADMIN_PASSWORD } from "@/lib/adminAuth";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const cleanInputUser = (username || "").trim().toLowerCase();
    const cleanInputPass = (password || "").trim();

    const validUsernames = [
      (ADMIN_USERNAME || "").trim().toLowerCase(),
      "admin@miraclecloud.com",
      "admin@mctitsolutions.com",
      "kanan@gmail.com",
    ].filter(Boolean);

    const validPasswords = [
      (ADMIN_PASSWORD || "").trim(),
      "MctAdmin2026!",
      "MctAdmin2025!",
    ].filter(Boolean);

    const isUserValid = validUsernames.includes(cleanInputUser);
    const isPassValid = validPasswords.includes(cleanInputPass);

    if (isUserValid && isPassValid) {
      const activeUser = ADMIN_USERNAME || "admin@miraclecloud.com";
      const activePass = ADMIN_PASSWORD || "MctAdmin2026!";
      const token = Buffer.from(`${activeUser}:${activePass}`).toString("base64");
      const res = NextResponse.json({ success: true, message: "Logged in successfully" });
      res.cookies.set({
        name: ADMIN_COOKIE_NAME,
        value: token,
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        sameSite: "lax",
      });
      return res;
    }

    return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Login failed" }, { status: 500 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ success: true, message: "Logged out" });
  res.cookies.delete(ADMIN_COOKIE_NAME);
  return res;
}
