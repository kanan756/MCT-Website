import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { verifyAdminSession } from "@/lib/adminAuth";
import { isGoogleConfigured, getSheetRows, initializeSheetTabs, upsertSheetRow, deleteSheetRow } from "@/lib/googleSheets";

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
      badgeText = "Application In Review";
      badgeBg = "#e0f2fe";
      badgeColor = "#0369a1";
      messageContent = `
        <p style="color: #334155; font-size: 15px; line-height: 1.6;">
          We are pleased to inform you that your application for the <strong>${application.applyingFor}</strong> role is currently being actively reviewed by our technical hiring managers.
        </p>
        <p style="color: #334155; font-size: 14px; line-height: 1.6;">
          Our leadership team is assessing your experience and technical qualifications against our active enterprise initiatives. We appreciate your patience and will reach out with next steps soon.
        </p>
      `;
      break;

    case "Shortlisted":
      subject = `Great News! You Have Been Shortlisted: ${application.applyingFor} — MCT IT Solutions`;
      badgeText = "Shortlisted for Interview";
      badgeBg = "#f0fdf4";
      badgeColor = "#15803d";
      messageContent = `
        <p style="color: #334155; font-size: 15px; line-height: 1.6;">
          Congratulations! Following our initial review, your profile has been <strong>shortlisted</strong> for the <strong>${application.applyingFor}</strong> position at MCT IT Solutions.
        </p>
        <div style="background: #f8fafc; border-left: 4px solid #16a34a; padding: 14px 18px; border-radius: 6px; margin: 18px 0;">
          <strong style="color: #0f172a; font-size: 14px; display: block; margin-bottom: 4px;">Next Step: Screening & Discussion</strong>
          <span style="color: #475569; font-size: 13px; line-height: 1.5;">Our talent acquisition team will be in touch via phone / email to coordinate an interview schedule and discuss your career trajectory with MCT.</span>
        </div>
        <p style="color: #334155; font-size: 14px; line-height: 1.6;">
          Please ensure your contact details remain up to date. If you have any updated project portfolio or certifications to share, feel free to reply directly to this email.
        </p>
      `;
      break;

    case "Interview Scheduled":
      subject = `Interview Scheduled: ${application.applyingFor} — MCT IT Solutions`;
      badgeText = "Interview Stage";
      badgeBg = "#eff6ff";
      badgeColor = "#1d4ed8";
      messageContent = `
        <p style="color: #334155; font-size: 15px; line-height: 1.6;">
          We are delighted to move forward with your candidacy for <strong>${application.applyingFor}</strong>! An interview has been marked in our recruitment schedule.
        </p>
        <div style="background: #f0f7ff; border: 1px solid #bfdbfe; padding: 16px; border-radius: 8px; margin: 18px 0;">
          <strong style="color: #1e40af; font-size: 14px; display: block; margin-bottom: 6px;">What to Prepare:</strong>
          <ul style="color: #334155; font-size: 13px; line-height: 1.6; margin: 0; padding-left: 18px;">
            <li>Review of previous hands-on implementation and architecture experience.</li>
            <li>Examples of problem-solving and business workflow challenges you have tackled.</li>
            <li>Any questions you would love to ask our engineering and consulting leaders about life at MCT.</li>
          </ul>
        </div>
        <p style="color: #334155; font-size: 14px; line-height: 1.6;">
          Our talent specialist will send calendar invites with the exact video meeting link or office coordinates.
        </p>
      `;
      break;

    case "Hired":
      subject = `Welcome to the Team! Offer Extended: ${application.applyingFor} — MCT IT Solutions`;
      badgeText = "Selected / Hired";
      badgeBg = "#f0fdf4";
      badgeColor = "#15803d";
      messageContent = `
        <p style="color: #334155; font-size: 15px; line-height: 1.6;">
          On behalf of the entire leadership team at MCT IT Solutions, we are thrilled to congratulate you on your selection for the <strong>${application.applyingFor}</strong> position!
        </p>
        <p style="color: #334155; font-size: 14px; line-height: 1.6;">
          Throughout the evaluation process, your technical skills, problem-solving mindset, and dedication truly stood out. We are excited about the value and innovation you will bring to our team and client projects.
        </p>
        <p style="color: #334155; font-size: 14px; line-height: 1.6;">
          Our HR department will connect with you regarding the formal offer documentation, onboarding schedule, and joining formalities.
        </p>
      `;
      break;

    case "Rejected":
      subject = `Application Status Update: ${application.applyingFor} — MCT IT Solutions`;
      badgeText = "Application Status Update";
      badgeBg = "#fef2f2";
      badgeColor = "#b91c1c";
      messageContent = `
        <p style="color: #334155; font-size: 15px; line-height: 1.6;">
          Thank you for taking the time to apply for the <strong>${application.applyingFor}</strong> role at MCT IT Solutions and for your interest in joining our team.
        </p>
        <p style="color: #334155; font-size: 14px; line-height: 1.6;">
          After thoughtful review and consideration of all candidate profiles for this specific opening, we have decided to proceed with other candidates whose experience more closely matches our immediate project requirements at this time.
        </p>
        <p style="color: #334155; font-size: 14px; line-height: 1.6;">
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

    await transporter.sendMail({
      from: `"MCT Talent Acquisition" <${user}>`,
      to: application.email,
      replyTo: hrReplyTo,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 28px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
          <!-- Header -->
          <div style="border-bottom: 2px solid #3482b9; padding-bottom: 16px; margin-bottom: 22px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <h2 style="color: #0b1b3d; margin: 0 0 4px 0; font-size: 20px; font-weight: 800;">MCT IT Solutions</h2>
              <span style="color: #64748b; font-size: 12px; letter-spacing: 0.5px; text-transform: uppercase;">Talent Acquisition & People Ops</span>
            </div>
          </div>

          <!-- Status Badge -->
          <div style="margin-bottom: 20px;">
            <span style="display: inline-block; background-color: ${badgeBg}; color: ${badgeColor}; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">
              ${badgeText}
            </span>
          </div>

          <!-- Greeting -->
          <p style="color: #0f172a; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
            Dear ${application.fullName},
          </p>

          <!-- Core Message -->
          ${messageContent}

          ${application.id ? `
            <div style="margin-top: 24px; padding-top: 14px; border-top: 1px dashed #e2e8f0; font-size: 12px; color: #94a3b8;">
              Application Ref ID: <span style="font-family: monospace; color: #64748b;">${application.id}</span>
            </div>
          ` : ""}

          <!-- Signature Footer -->
          <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #475569;">
            <p style="margin: 0 0 4px 0; font-weight: 700; color: #0b1b3d;">Talent Acquisition Team</p>
            <p style="margin: 0 0 2px 0;">MCT IT Solutions (P) Ltd.</p>
            <p style="margin: 0 0 8px 0; color: #64748b;">Where Ideas Meet Execution</p>
            <a href="https://www.miracle-cloudtechnology.com" style="color: #3482b9; text-decoration: none; font-size: 12px; font-weight: 600;">www.miracle-cloudtechnology.com</a>
          </div>
        </div>
      `,
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

    // If application has an email and a changed/relevant status, send automated email
    if (body.email && body.status && body.status !== "New") {
      await sendCandidateStatusEmail({
        fullName: body.fullName || "Candidate",
        email: body.email,
        applyingFor: body.applyingFor || "Position",
        status: body.status,
        id: body.id,
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
