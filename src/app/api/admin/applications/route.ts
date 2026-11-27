import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { verifyAdminSession } from "@/lib/adminAuth";
import { isGoogleConfigured, getSheetRows, initializeSheetTabs, upsertSheetRow, deleteSheetRow } from "@/lib/googleSheets";
import { renderExecutiveEmailTemplate } from "@/lib/emailTemplates";

export const dynamic = "force-dynamic";

/**
 * Dispatch high-touch, executive emails to candidate upon status updates
 */
async function sendCandidateStatusEmail(application: {
  fullName: string;
  email: string;
  applyingFor: string;
  status: string;
  id?: string;
}) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.log("[Notice] SMTP not configured. Candidate status email logged to console:", {
      candidate: application.email,
      name: application.fullName,
      role: application.applyingFor,
      status: application.status,
    });
    return;
  }

  // Define subject and personalized messaging based on status
  let subject = "";
  let badgeText = "";
  let badgeBg = "#f1f5f9";
  let badgeColor = "#475569";
  let messageContent = "";

  switch (application.status) {
    case "Reviewing":
      subject = `Application Update: In Review for ${application.applyingFor} — MCT IT Solutions`;
      badgeText = "In Review";
      badgeBg = "#e0f2fe";
      badgeColor = "#0369a1";
      messageContent = `
        <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0 0 14px 0;">
          We are pleased to inform you that your application for the <strong>${application.applyingFor}</strong> role is currently being actively reviewed by our technical hiring managers.
        </p>
        <p style="color: #475569; font-size: 14px; line-height: 1.6; margin: 0;">
          Our leadership team is assessing your experience and technical qualifications against our active enterprise initiatives. We appreciate your patience and will reach out with next steps soon.
        </p>
      `;
      break;

    case "Shortlisted":
      subject = `Great News! You Have Been Shortlisted: ${application.applyingFor} — MCT IT Solutions`;
      badgeText = "Shortlisted";
      badgeBg = "#f0fdf4";
      badgeColor = "#15803d";
      messageContent = `
        <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0 0 14px 0;">
          Congratulations! Following our initial review, your profile has been <strong>shortlisted</strong> for the <strong>${application.applyingFor}</strong> position at MCT IT Solutions.
        </p>
        <div style="background: #f8fafc; border-left: 4px solid #16a34a; padding: 14px 18px; border-radius: 6px; margin: 18px 0;">
          <strong style="color: #0f172a; font-size: 13px; display: block; margin-bottom: 4px;">Next Stage: Interview Scheduling</strong>
          <span style="color: #475569; font-size: 13px; line-height: 1.5;">Our talent acquisition team will be in touch via phone or email to coordinate your technical screening interview.</span>
        </div>
      `;
      break;

    case "Interview Scheduled":
      subject = `Interview Scheduled: ${application.applyingFor} — MCT IT Solutions`;
      badgeText = "Interview Stage";
      badgeBg = "#eff6ff";
      badgeColor = "#1d4ed8";
      messageContent = `
        <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0 0 14px 0;">
          We are delighted to move forward with your candidacy for <strong>${application.applyingFor}</strong>! An interview has been marked in our recruitment schedule.
        </p>
        <div style="background: #f0f7ff; border: 1px solid #bfdbfe; padding: 16px; border-radius: 8px; margin: 16px 0;">
          <strong style="color: #1e40af; font-size: 13px; display: block; margin-bottom: 6px;">Recommended Preparation:</strong>
          <ul style="color: #334155; font-size: 13px; line-height: 1.6; margin: 0; padding-left: 18px;">
            <li>Review of previous hands-on implementation and architecture experience.</li>
            <li>Key challenges and real-world project deliveries.</li>
            <li>Questions you have about our consulting culture and technologies.</li>
          </ul>
        </div>
      `;
      break;

    case "Hired":
      subject = `Welcome to the Team! Offer Extended: ${application.applyingFor} — MCT IT Solutions`;
      badgeText = "Selected / Hired";
      badgeBg = "#f0fdf4";
      badgeColor = "#15803d";
      messageContent = `
        <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0 0 14px 0;">
          On behalf of the entire leadership team at MCT IT Solutions, we are thrilled to congratulate you on your selection for the <strong>${application.applyingFor}</strong> position!
        </p>
        <p style="color: #475569; font-size: 14px; line-height: 1.6; margin: 0;">
          Throughout the evaluation process, your technical skills, problem-solving mindset, and dedication truly stood out. Our HR department will connect with you regarding offer documentation and onboarding formalities.
        </p>
      `;
      break;

    case "Rejected":
      subject = `Application Status Update: ${application.applyingFor} — MCT IT Solutions`;
      badgeText = "Status Update";
      badgeBg = "#fef2f2";
      badgeColor = "#b91c1c";
      messageContent = `
        <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0 0 14px 0;">
          Thank you for taking the time to apply for the <strong>${application.applyingFor}</strong> role at MCT IT Solutions and for your interest in joining our team.
        </p>
        <p style="color: #475569; font-size: 14px; line-height: 1.6; margin: 0 0 14px 0;">
          After thoughtful review and consideration of all candidate profiles for this specific opening, we have decided to proceed with other candidates whose experience more closely matches our immediate project requirements at this time.
        </p>
        <p style="color: #475569; font-size: 13px; line-height: 1.6; margin: 0;">
          We were genuinely impressed by your background and will retain your resume in our talent network for upcoming opportunities that align with your skillset. We sincerely wish you the best in your professional journey.
        </p>
      `;
      break;

    default:
      return; // Do not send email for 'New' or unrecognized status
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Boolean(process.env.SMTP_SECURE === "true"),
      auth: { user, pass },
    });

    const hrReplyTo = process.env.HR_NOTIFICATION_EMAIL || process.env.CONTACT_NOTIFICATION_EMAIL || user;

    const emailHtml = renderExecutiveEmailTemplate({
      title: subject,
      badgeText,
      badgeBg,
      badgeColor,
      headerSubtitle: "Global Talent Acquisition & People Operations",
      recipientName: application.fullName,
      mainContentHtml: messageContent,
      referenceId: application.id,
      ctaButton: {
        label: "View Career Opportunities",
        url: "https://www.miracle-cloudtechnology.com/about/careers",
      },
    });

    await transporter.sendMail({
      from: `"MCT Talent Acquisition" <${user}>`,
      to: application.email,
      replyTo: hrReplyTo,
      subject,
      html: emailHtml,
    });

    console.log(`Status update email [${application.status}] dispatched to ${application.email}`);
  } catch (mailErr) {
    console.warn("Failed to dispatch status email:", mailErr);
  }
}

// GET /api/admin/applications — list all submitted job applications
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
    const rows = await getSheetRows("JobApplications");
    // Sort by submittedAt descending (newest first)
    const sorted = [...(rows || [])].reverse();
    return NextResponse.json(
      { data: sorted, source: "google_sheets", count: sorted.length },
      { headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } }
    );
  } catch (err: any) {
    console.error("GET /api/admin/applications error:", err);
    return NextResponse.json(
      { data: [], source: "empty", count: 0 },
      { headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } }
    );
  }
}

// POST /api/admin/applications — update status (e.g. New, Reviewing, Shortlisted, Interview Scheduled, Rejected, Hired)
export async function POST(req: Request) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    if (!body.id) {
      return NextResponse.json({ error: "Missing application ID" }, { status: 400 });
    }

    await initializeSheetTabs();
    await upsertSheetRow("JobApplications", "id", body.id, body);

    // Background email dispatch (non-blocking) so HTTP response returns immediately without timing out
    if (body.email && body.status && body.status !== "New") {
      sendCandidateStatusEmail({
        fullName: body.fullName || "Candidate",
        email: body.email,
        applyingFor: body.applyingFor || "Position",
        status: body.status,
        id: body.id,
      }).catch((mailErr) => {
        console.warn("Background email dispatch failed:", mailErr);
      });
    }

    return NextResponse.json({ success: true, message: `Application updated to ${body.status}` });
  } catch (err: any) {
    console.error("POST /api/admin/applications error:", err);
    return NextResponse.json({ error: err.message || "Failed to update" }, { status: 500 });
  }
}

// DELETE /api/admin/applications?id=xxx — delete an application
export async function DELETE(req: Request) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing application ID" }, { status: 400 });
  }

  try {
    await initializeSheetTabs();
    await deleteSheetRow("JobApplications", "id", id);
    return NextResponse.json({ success: true, message: "Application deleted successfully" });
  } catch (err: any) {
    console.error("DELETE /api/admin/applications error:", err);
    return NextResponse.json({ error: err.message || "Failed to delete" }, { status: 500 });
  }
}
