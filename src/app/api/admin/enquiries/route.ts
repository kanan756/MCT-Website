import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { verifyAdminSession } from "@/lib/adminAuth";
import { isGoogleConfigured, getSheetRows, initializeSheetTabs, upsertSheetRow, deleteSheetRow } from "@/lib/googleSheets";
import { renderExecutiveEmailTemplate } from "@/lib/emailTemplates";

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

    // Map status colors & styles
    let badgeBg = "#eff6ff";
    let badgeColor = "#1d4ed8";
    let badgeText = enquiry.status || "Inquiry Update";

    if (enquiry.status === "Replied") {
      badgeBg = "#f0fdf4";
      badgeColor = "#15803d";
      badgeText = "Team Response";
    } else if (enquiry.status === "In Progress") {
      badgeBg = "#e0f2fe";
      badgeColor = "#0369a1";
      badgeText = "In Progress";
    } else if (enquiry.status === "Closed") {
      badgeBg = "#f1f5f9";
      badgeColor = "#475569";
      badgeText = "Closed";
    }

    const mainContentHtml = isDirectReply
      ? `
        <p style="margin: 0 0 16px 0; font-size: 15px; color: #334155;">
          Thank you for following up with MCT IT Solutions. Our solutions team has reviewed your query:
        </p>
        <div style="margin: 20px 0; padding: 20px 22px; background-color: #f8fafc; border-left: 4px solid #3482b9; border-radius: 8px;">
          <strong style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; margin-bottom: 8px;">Official Response:</strong>
          <p style="color: #1e293b; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${enquiry.replyMessage}</p>
        </div>
        <p style="font-size: 13px; color: #64748b; line-height: 1.6; margin: 16px 0 0 0;">
          If you require further architectural or project details, simply reply directly to this email.
        </p>
      `
      : `
        <p style="margin: 0 0 16px 0; font-size: 15px; color: #334155;">
          We are pleased to inform you that the status of your inquiry regarding <strong>${enquiry.service || "our enterprise solutions"}</strong> has been updated.
        </p>
        <div style="margin: 18px 0; padding: 16px 20px; background-color: #f0f7ff; border: 1px solid #bfdbfe; border-radius: 10px;">
          <div style="font-size: 12px; font-weight: 700; color: #1e40af; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Current Workflow Status:</div>
          <div style="font-size: 16px; font-weight: 800; color: #0b1b3d;">${enquiry.status}</div>
        </div>
        <p style="font-size: 13px; color: #64748b; line-height: 1.6; margin: 0;">
          Our technical consulting specialists are actively handling your requirements according to our enterprise service commitments.
        </p>
      `;

    const emailHtml = renderExecutiveEmailTemplate({
      title: subject,
      badgeText,
      badgeBg,
      badgeColor,
      recipientName: enquiry.name,
      mainContentHtml,
      referenceId: enquiry.id,
      ctaButton: {
        label: "Visit Client Portal & Solutions",
        url: "https://www.miracle-cloudtechnology.com",
      },
    });

    await transporter.sendMail({
      from: `"MCT Solutions Team" <${user}>`,
      to: enquiry.email,
      replyTo: process.env.CONTACT_NOTIFICATION_EMAIL || user,
      subject,
      html: emailHtml,
    });

    console.log(`Executive admin email dispatched to client ${enquiry.email} successfully.`);
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
