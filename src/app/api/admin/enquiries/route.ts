import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { verifyAdminSession } from "@/lib/adminAuth";
import { isGoogleConfigured, getSheetRows, initializeSheetTabs, upsertSheetRow, deleteSheetRow } from "@/lib/googleSheets";

export const dynamic = "force-dynamic";

// Send direct email response or status update to the client
async function sendAdminReplyEmail(enquiry: {
  name: string;
  email: string;
  replyMessage?: string;
  status?: string;
  service?: string;
  id?: string;
}) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.log("[Notice] SMTP not configured. Admin inquiry email logged to console:", {
      recipient: enquiry.email,
      replyMessage: enquiry.replyMessage,
      status: enquiry.status,
    });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Boolean(process.env.SMTP_SECURE === "true"),
      auth: { user, pass },
    });

    const isDirectReply = Boolean(enquiry.replyMessage && enquiry.replyMessage.trim().length > 0);

    const subject = isDirectReply
      ? `Re: Inquiry Response — MCT IT Solutions [${enquiry.id || "MCT"}]`
      : `Update on your Inquiry: Status marked as ${enquiry.status} — MCT IT Solutions`;

    await transporter.sendMail({
      from: `"MCT Solutions Team" <${user}>`,
      to: enquiry.email,
      replyTo: process.env.CONTACT_NOTIFICATION_EMAIL || user,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 28px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #3482b9; padding-bottom: 14px; margin-bottom: 20px;">
            <h2 style="color: #0b1b3d; margin: 0 0 4px 0; font-size: 20px; font-weight: 800;">MCT IT Solutions</h2>
            <span style="color: #64748b; font-size: 12px; letter-spacing: 0.5px; text-transform: uppercase;">Enterprise Consulting &amp; Technical Services</span>
          </div>

          <p style="color: #0f172a; font-size: 15px; font-weight: 600; margin: 0 0 16px 0;">
            Dear ${enquiry.name},
          </p>

          ${
            isDirectReply
              ? `
            <div style="margin: 20px 0; padding: 18px 20px; background-color: #f8fafc; border-left: 4px solid #3482b9; border-radius: 6px;">
              <p style="color: #334155; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${enquiry.replyMessage}</p>
            </div>
            `
              : `
            <p style="color: #334155; font-size: 14px; line-height: 1.6;">
              We would like to notify you that the status of your inquiry regarding <strong>${enquiry.service || "our services"}</strong> has been updated to:
            </p>
            <div style="margin: 16px 0; display: inline-block; padding: 6px 14px; background-color: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 13px; border-radius: 20px;">
              Status: ${enquiry.status}
            </div>
            `
          }

          <p style="color: #475569; font-size: 13px; line-height: 1.6; margin-top: 20px;">
            If you have any further questions, feel free to reply directly to this email or reach us at <a href="mailto:${process.env.CONTACT_NOTIFICATION_EMAIL || "contact@miraclecloud-technology.com"}" style="color: #3482b9;">${process.env.CONTACT_NOTIFICATION_EMAIL || "contact@miraclecloud-technology.com"}</a>.
          </p>

          ${
            enquiry.id
              ? `
            <div style="margin-top: 24px; padding-top: 14px; border-top: 1px dashed #e2e8f0; font-size: 12px; color: #94a3b8;">
              Inquiry Reference ID: <span style="font-family: monospace; color: #64748b;">${enquiry.id}</span>
            </div>
          `
              : ""
          }

          <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #475569;">
            <p style="margin: 0 0 4px 0; font-weight: 700; color: #0b1b3d;">MCT IT Solutions (P) Ltd.</p>
            <p style="margin: 0 0 2px 0;">Where Ideas Meet Execution</p>
            <a href="https://www.miracle-cloudtechnology.com" style="color: #3482b9; text-decoration: none; font-size: 12px; font-weight: 600;">www.miracle-cloudtechnology.com</a>
          </div>
        </div>
      `,
    });

    console.log(`Admin email dispatched to client ${enquiry.email} successfully.`);
  } catch (err) {
    console.warn("Failed to dispatch admin inquiry email:", err);
  }
}

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
    await initializeSheetTabs();
    const rows = await getSheetRows("Enquiries");
    // Sort newest first
    const sorted = [...(rows || [])].reverse();
    return NextResponse.json(
      { data: sorted, source: "google_sheets", count: sorted.length },
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

// POST /api/admin/enquiries — update status or send an email reply
export async function POST(req: Request) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    if (!body.id) {
      return NextResponse.json({ error: "Missing enquiry ID" }, { status: 400 });
    }

    await initializeSheetTabs();
    await upsertSheetRow("Enquiries", "id", body.id, body);

    // If a direct email reply was written or status was changed, send email to client
    if (body.email && (body.replyMessage || (body.status && body.status !== "New"))) {
      sendAdminReplyEmail({
        id: body.id,
        name: body.name || "Client",
        email: body.email,
        replyMessage: body.replyMessage,
        status: body.status,
        service: body.service,
      }).catch((mailErr) => {
        console.warn("Background admin reply email dispatch error:", mailErr);
      });
    }

    return NextResponse.json({
      success: true,
      message: body.replyMessage ? "Reply sent to client successfully!" : `Status updated to ${body.status}`,
    });
  } catch (err: any) {
    console.error("POST /api/admin/enquiries error:", err);
    return NextResponse.json({ error: err.message || "Failed to update enquiry" }, { status: 500 });
  }
}

// DELETE /api/admin/enquiries?id=xxx — delete an enquiry
export async function DELETE(req: Request) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing enquiry ID" }, { status: 400 });
  }

  try {
    await initializeSheetTabs();
    await deleteSheetRow("Enquiries", "id", id);
    return NextResponse.json({ success: true, message: "Enquiry deleted successfully" });
  } catch (err: any) {
    console.error("DELETE /api/admin/enquiries error:", err);
    return NextResponse.json({ error: err.message || "Failed to delete enquiry" }, { status: 500 });
  }
}
