import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  isGoogleConfigured,
  getSheetsClient,
  SPREADSHEET_ID,
} from "@/lib/googleSheets";
import { renderExecutiveEmailTemplate } from "@/lib/emailTemplates";

async function sendCareersEmails(application: {
  id: string;
  applyingFor: string;
  areaOfInterest: string;
  fullName: string;
  email: string;
  phone: string;
  currentLocation: string;
  totalExperience: string;
  noticePeriod: string;
  currentCtc?: string;
  expectedCtc?: string;
  portfolioUrl?: string;
  resumeFileName?: string;
  coverNote?: string;
}) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const hrEmail = process.env.HR_NOTIFICATION_EMAIL || process.env.CONTACT_NOTIFICATION_EMAIL || "hr@miraclecloud-technology.com";

  if (!host || !user || !pass) {
    console.log("[Notice] SMTP not configured. Application emails logged to console:", {
      applicant: application.email,
      hr: hrEmail,
      role: application.applyingFor,
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

    // 1. Notification email to MCT HR / Talent Acquisition
    await transporter.sendMail({
      from: `"MCT Careers" <${user}>`,
      to: hrEmail,
      replyTo: application.email,
      subject: `[New Job Application] ${application.applyingFor} - ${application.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 10px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #3482b9; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #0b1b3d; margin: 0 0 6px 0; font-size: 20px;">New Job Application Received</h2>
            <p style="color: #64748b; font-size: 14px; margin: 0;">An applicant has submitted their profile for <strong>${application.applyingFor}</strong>.</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 160px;"><strong>Application ID:</strong></td><td style="color: #0f172a; font-weight: bold;">${application.id}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Position Applied:</strong></td><td style="color: #3482b9; font-weight: bold;">${application.applyingFor}</td></tr>
            ${application.areaOfInterest ? `<tr><td style="padding: 8px 0; color: #64748b;"><strong>Area of Interest:</strong></td><td style="color: #0f172a;">${application.areaOfInterest}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Candidate Name:</strong></td><td style="color: #0f172a; font-weight: 600;">${application.fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td><td style="color: #0f172a;"><a href="mailto:${application.email}">${application.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td><td style="color: #0f172a;"><a href="tel:${application.phone}">${application.phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Current Location:</strong></td><td style="color: #0f172a;">${application.currentLocation}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Total Experience:</strong></td><td style="color: #0f172a;">${application.totalExperience}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Notice Period:</strong></td><td style="color: #0f172a;">${application.noticePeriod}</td></tr>
            ${application.currentCtc ? `<tr><td style="padding: 8px 0; color: #64748b;"><strong>Current CTC:</strong></td><td style="color: #0f172a;">${application.currentCtc}</td></tr>` : ""}
            ${application.expectedCtc ? `<tr><td style="padding: 8px 0; color: #64748b;"><strong>Expected CTC:</strong></td><td style="color: #0f172a;">${application.expectedCtc}</td></tr>` : ""}
            ${application.portfolioUrl ? `<tr><td style="padding: 8px 0; color: #64748b;"><strong>Portfolio / LinkedIn:</strong></td><td style="color: #3482b9;"><a href="${application.portfolioUrl}" target="_blank">${application.portfolioUrl}</a></td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Resume Attached:</strong></td><td style="color: #0f172a;">${application.resumeFileName || "Not specified"}</td></tr>
          </table>

          ${application.coverNote ? `
            <div style="margin-top: 20px; padding: 14px 18px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #3482b9;">
              <strong style="color: #0b1b3d; display: block; margin-bottom: 6px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Candidate Cover Note:</strong>
              <p style="color: #334155; margin: 0; line-height: 1.6; font-size: 14px; white-space: pre-wrap;">${application.coverNote}</p>
            </div>
          ` : ""}

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
            MCT IT Solutions • Internal Talent Acquisition System
          </div>
        </div>
      `,
    });

    // 2. Automated Confirmation email to the Candidate
    const candidateConfirmHtml = renderExecutiveEmailTemplate({
      title: `Application Confirmation: ${application.applyingFor} — MCT IT Solutions`,
      badgeText: "Application Received",
      badgeBg: "#f0fdf4",
      badgeColor: "#15803d",
      headerSubtitle: "Global Talent Acquisition & People Operations",
      recipientName: application.fullName,
      mainContentHtml: `
        <p style="margin: 0 0 16px 0; font-size: 15px; color: #334155;">
          Thank you for applying to MCT IT Solutions. We have successfully registered your candidacy for the position of <strong>${application.applyingFor}</strong>.
        </p>
        <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #475569;">
          Our talent acquisition team and engineering leadership are actively screening profiles. If your background aligns with our immediate client engagements, our recruiter will contact you directly.
        </p>
      `,
      summaryBoxHtml: `
        <div style="font-size: 12px; font-weight: 800; color: #0b1b3d; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
          Application Profile Overview:
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <tr><td style="padding: 4px 0; color: #64748b; width: 140px;"><strong>Role:</strong></td><td style="color: #0f172a; font-weight: 700;">${application.applyingFor}</td></tr>
          ${application.areaOfInterest ? `<tr><td style="padding: 4px 0; color: #64748b;"><strong>Area of Interest:</strong></td><td style="color: #0f172a;">${application.areaOfInterest}</td></tr>` : ""}
          <tr><td style="padding: 4px 0; color: #64748b;"><strong>Experience:</strong></td><td style="color: #0f172a;">${application.totalExperience}</td></tr>
          <tr><td style="padding: 4px 0; color: #64748b;"><strong>Notice Period:</strong></td><td style="color: #0f172a;">${application.noticePeriod}</td></tr>
        </table>
      `,
      nextStepsHtml: `
        1. <strong>Profile Assessment:</strong> Matching against technical architecture needs.<br>
        2. <strong>Recruiter Screening:</strong> An initial discussion on your goals & experience.<br>
        3. <strong>Technical Evaluation:</strong> In-depth interaction with our practice leaders.
      `,
      referenceId: application.id,
      ctaButton: {
        label: "Discover Life & Careers at MCT",
        url: "https://www.miracle-cloudtechnology.com/about/careers",
      },
    });

    await transporter.sendMail({
      from: `"MCT Careers Team" <${user}>`,
      to: application.email,
      replyTo: hrEmail,
      subject: `Application Confirmation: ${application.applyingFor} at MCT IT Solutions`,
      html: candidateConfirmHtml,
    });

    console.log("Candidate confirmation and HR notification emails dispatched successfully for", application.id);
  } catch (err) {
    console.warn("Failed to dispatch career notification emails:", err);
  }
}

async function ensureApplicationsSheet() {
  if (!isGoogleConfigured()) return;
  const sheets = getSheetsClient();
  try {
    const meta = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
    const existing = meta.data.sheets?.map((s) => s.properties?.title) || [];
    if (!existing.includes("JobApplications")) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: { requests: [{ addSheet: { properties: { title: "JobApplications" } } }] },
      });
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: "JobApplications!A1",
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              "id",
              "applyingFor",
              "areaOfInterest",
              "fullName",
              "email",
              "phone",
              "currentLocation",
              "totalExperience",
              "noticePeriod",
              "currentCtc",
              "expectedCtc",
              "portfolioUrl",
              "resumeFileName",
              "coverNote",
              "submittedAt",
              "status"
            ]
          ],
        },
      });
    }
  } catch (err) {
    console.warn("Could not ensure JobApplications sheet:", err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      applyingFor,
      areaOfInterest,
      fullName,
      email,
      phone,
      currentLocation,
      totalExperience,
      noticePeriod,
      currentCtc,
      expectedCtc,
      portfolioUrl,
      resumeFileName,
      coverNote,
      website, // honeypot
      consent,
    } = body;

    // Honeypot spam protection
    if (website) {
      return NextResponse.json({ success: true, message: "Application received." });
    }

    if (!fullName || !email || !phone || !currentLocation || !applyingFor || !totalExperience || !noticePeriod) {
      return NextResponse.json(
        { error: "Please fill in all required fields marked with an asterisk (*)." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Please accept the privacy policy to submit your application." },
        { status: 400 }
      );
    }

    const application = {
      id: `APP-${Date.now()}`,
      applyingFor: applyingFor || "Product Manager",
      areaOfInterest: areaOfInterest || "",
      fullName,
      email,
      phone,
      currentLocation,
      totalExperience,
      noticePeriod,
      currentCtc: currentCtc || "",
      expectedCtc: expectedCtc || "",
      portfolioUrl: portfolioUrl || "",
      resumeFileName: resumeFileName || "Not attached",
      coverNote: coverNote || "",
      submittedAt: new Date().toISOString(),
      status: "New",
    };

    if (isGoogleConfigured()) {
      try {
        await ensureApplicationsSheet();
        const sheets = getSheetsClient();
        await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range: "JobApplications!A:P",
          valueInputOption: "RAW",
          insertDataOption: "INSERT_ROWS",
          requestBody: {
            values: [
              [
                application.id,
                application.applyingFor,
                application.areaOfInterest,
                application.fullName,
                application.email,
                application.phone,
                application.currentLocation,
                application.totalExperience,
                application.noticePeriod,
                application.currentCtc,
                application.expectedCtc,
                application.portfolioUrl,
                application.resumeFileName,
                application.coverNote,
                application.submittedAt,
                application.status,
              ],
            ],
          },
        });
      } catch (sheetErr) {
        console.warn("Failed to save application to Google Sheet:", sheetErr);
      }
    }

    // Trigger dual automated email delivery: candidate confirmation + HR recruiter alert
    await sendCareersEmails(application);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully! Our talent acquisition team will review your application and contact you soon.",
      data: application,
    });
  } catch (err: any) {
    console.error("Application submission error:", err);
    return NextResponse.json(
      { error: "Internal Server Error", detail: err.message },
      { status: 500 }
    );
  }
}
