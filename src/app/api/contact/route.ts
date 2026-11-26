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

async function sendNotificationEmail(enquiry: {
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

    await transporter.sendMail({
      from: `"MCT Website" <${user}>`,
      to: targetEmail,
      replyTo: enquiry.email,
      subject: `[MCT Lead] ${enquiry.service || "New Inquiry"} - ${enquiry.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0b1b3d; margin-top: 0;">New Business Inquiry Received</h2>
          <p style="color: #475569; font-size: 14px;">A new enquiry was submitted via the MCT IT Solutions website.</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Lead ID:</strong></td><td style="color: #0f172a;">${enquiry.id}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Full Name:</strong></td><td style="color: #0f172a;">${enquiry.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Business Email:</strong></td><td style="color: #0f172a;"><a href="mailto:${enquiry.email}">${enquiry.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td><td style="color: #0f172a;">${enquiry.phone || "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Company:</strong></td><td style="color: #0f172a;">${enquiry.company || "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Country:</strong></td><td style="color: #0f172a;">${enquiry.country || "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Service:</strong></td><td style="color: #0f172a; font-weight: bold; color: #3482b9;">${enquiry.service || "General"}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 6px; border-left: 4px solid #3482b9;">
            <strong style="color: #0b1b3d; display: block; margin-bottom: 6px;">Message:</strong>
            <p style="color: #334155; margin: 0; line-height: 1.6; white-space: pre-wrap;">${enquiry.message}</p>
          </div>
          <p style="font-size: 12px; color: #94a3b8; margin-top: 25px; text-align: center;">MCT IT Solutions • Automated Lead Notification System</p>
        </div>
      `,
    });
    console.log("Email notification dispatched successfully to", targetEmail);
  } catch (mailErr) {
    console.warn("Failed to dispatch email notification:", mailErr);
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

    // 4. Automated Notification Email dispatch
    await sendNotificationEmail(enquiry);

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
