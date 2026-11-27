import { NextResponse } from "next/server";
import {
  isGoogleConfigured,
  getSheetsClient,
  SPREADSHEET_ID,
} from "@/lib/googleSheets";
import nodemailer from "nodemailer";

async function ensureEnquiriesSheet() {
  if (!isGoogleConfigured()) return;
  const sheets = getSheetsClient();
  try {
    const meta = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
    const existing = meta.data.sheets?.map((s) => s.properties?.title) || [];
    if (!existing.includes("Enquiries")) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: { requests: [{ addSheet: { properties: { title: "Enquiries" } } }] },
      });
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: "Enquiries!A1",
        valueInputOption: "RAW",
        requestBody: {
          values: [["id", "name", "email", "phone", "company", "country", "service", "message", "submittedAt", "status"]],
        },
      });
    }
  } catch (err) {
    console.warn("Could not ensure Enquiries sheet:", err);
  }
}

async function sendEnquiryEmails(enquiry: {
  id: string;
  name: string;
  email: string;
  company?: string;
  country?: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const targetEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "contact@miraclecloud-technology.com";

  if (!host || !user || !pass) {
    console.log("[Notice] SMTP environment variables not configured. Logging enquiry dispatch to team:", {
      to: targetEmail,
      subject: `New Enterprise Inquiry from ${enquiry.name}`,
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

    // 1. Send Internal Alert Notification to MCT Business Team
    await transporter.sendMail({
      from: `"MCT Inquiries" <${user}>`,
      to: targetEmail,
      replyTo: enquiry.email,
      subject: `[New Inquiry] ${enquiry.service || "Enterprise Service"} - ${enquiry.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 10px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #3482b9; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #0b1b3d; margin: 0 0 6px 0; font-size: 20px;">New Business Inquiry Received</h2>
            <p style="color: #64748b; font-size: 14px; margin: 0;">An inquiry was submitted via the MCT IT Solutions website.</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 150px;"><strong>Inquiry ID:</strong></td><td style="color: #0f172a; font-weight: bold;">${enquiry.id}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Full Name:</strong></td><td style="color: #0f172a; font-weight: 600;">${enquiry.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td><td style="color: #0f172a;"><a href="mailto:${enquiry.email}">${enquiry.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td><td style="color: #0f172a;">${enquiry.phone || "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Company:</strong></td><td style="color: #0f172a;">${enquiry.company || "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Country:</strong></td><td style="color: #0f172a;">${enquiry.country || "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Service:</strong></td><td style="color: #3482b9; font-weight: bold;">${enquiry.service || "General"}</td></tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #3482b9;">
            <strong style="color: #0b1b3d; display: block; margin-bottom: 6px; font-size: 13px; text-transform: uppercase;">Message:</strong>
            <p style="color: #334155; margin: 0; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${enquiry.message}</p>
          </div>

          <p style="font-size: 12px; color: #94a3b8; margin-top: 25px; text-align: center;">MCT IT Solutions • Enterprise Lead Notification</p>
        </div>
      `,
    });

    // 2. Automated Confirmation Email directly to the Client/User
    await transporter.sendMail({
      from: `"MCT IT Solutions" <${user}>`,
      to: enquiry.email,
      replyTo: targetEmail,
      subject: `Thank You for Contacting MCT IT Solutions — Ref: ${enquiry.id}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #0b1b3d; margin: 0 0 6px 0; font-size: 22px; font-weight: 800;">Thank You for Reaching Out!</h2>
            <p style="color: #64748b; font-size: 14px; margin: 0;">MCT IT Solutions (P) Ltd.</p>
          </div>

          <p style="color: #334155; font-size: 15px; line-height: 1.6;">Dear <strong>${enquiry.name}</strong>,</p>

          <p style="color: #334155; font-size: 14px; line-height: 1.6;">
            We have successfully received your inquiry regarding <strong>${enquiry.service || "our enterprise solutions"}</strong>.
          </p>

          <div style="margin: 20px 0; padding: 16px; background-color: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0;">
            <p style="margin: 0; font-size: 13px; color: #166534; font-weight: 600;">
              ✓ Inquiry Reference ID: <span style="font-family: monospace; font-size: 14px;">${enquiry.id}</span>
            </p>
          </div>

          <p style="color: #334155; font-size: 14px; line-height: 1.6;">
            Our dedicated solutions architect and enterprise consulting team are reviewing your requirements. We will connect with you within <strong>24 business hours</strong>.
          </p>

          <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-radius: 8px; font-size: 13px; color: #475569;">
            <strong style="color: #0b1b3d; display: block; margin-bottom: 6px;">Summary of submitted details:</strong>
            ${enquiry.company ? `<div>• Company: <strong>${enquiry.company}</strong></div>` : ""}
            ${enquiry.service ? `<div>• Topic: <strong>${enquiry.service}</strong></div>` : ""}
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #64748b;">
            <p style="margin: 0 0 4px 0; font-weight: bold; color: #0b1b3d;">MCT IT Solutions Team</p>
            <p style="margin: 0 0 2px 0;">Where Ideas Meet Execution</p>
            <a href="https://www.miracle-cloudtechnology.com" style="color: #3482b9; text-decoration: none; font-size: 12px; font-weight: 600;">www.miracle-cloudtechnology.com</a>
          </div>
        </div>
      `,
    });

    console.log("Inquiry emails dispatched to team and client successfully for", enquiry.id);
  } catch (mailErr) {
    console.warn("Failed to dispatch enquiry emails:", mailErr);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, country, service, message, honeypot } = body;

    // 1. Anti-spam bot honeypot detection
    if (honeypot) {
      console.warn("Bot submission trapped via honeypot field:", body);
      return NextResponse.json({ success: true, message: "Message sent" });
    }

    // 2. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Full Name is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "A valid business email address is required" }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json({ error: "Please enter a descriptive message (at least 5 characters)" }, { status: 400 });
    }

    const enquiry = {
      id: `ENQ-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: (phone || "").trim(),
      company: (company || "").trim(),
      country: (country || "").trim(),
      service: (service || "").trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
      status: "New",
    };

    // 3. Save to Google Sheets if configured
    if (isGoogleConfigured()) {
      try {
        await ensureEnquiriesSheet();
        const sheets = getSheetsClient();
        await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range: "Enquiries!A:J",
          valueInputOption: "USER_ENTERED",
          insertDataOption: "INSERT_ROWS",
          requestBody: {
            values: [[
              enquiry.id,
              enquiry.name,
              enquiry.email,
              enquiry.phone,
              enquiry.company,
              enquiry.country,
              enquiry.service,
              enquiry.message,
              enquiry.submittedAt,
              enquiry.status,
            ]],
          },
        });
      } catch (sheetErr) {
        console.warn("Could not save enquiry to Google Sheets:", sheetErr);
      }
    }

    // 4. Automated Dual Email dispatch (notification to MCT team + confirmation to client)
    await sendEnquiryEmails(enquiry);

    console.log("Contact form submission logged:", enquiry);

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!", id: enquiry.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit form. Please try again." },
      { status: 500 }
    );
  }
}
