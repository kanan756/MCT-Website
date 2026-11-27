/**
 * MCT IT Solutions — Executive Email Design System
 * Modern, responsive, high-deliverability HTML templates
 */

interface BaseEmailOptions {
  title: string;
  badgeText: string;
  badgeBg: string;
  badgeColor: string;
  recipientName: string;
  headerSubtitle?: string;
  mainContentHtml: string;
  referenceId?: string;
  summaryBoxHtml?: string;
  nextStepsHtml?: string;
  ctaButton?: {
    label: string;
    url: string;
  };
}

export function renderExecutiveEmailTemplate({
  title,
  badgeText,
  badgeBg,
  badgeColor,
  recipientName,
  headerSubtitle = "Enterprise Consulting & Technical Services",
  mainContentHtml,
  referenceId,
  summaryBoxHtml,
  nextStepsHtml,
  ctaButton,
}: BaseEmailOptions): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 36px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Wrapper -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03); border: 1px solid #e2e8f0;">
          
          <!-- Top Accent Gradient Line -->
          <tr>
            <td style="height: 5px; background: linear-gradient(90deg, #3482b9 0%, #5ba6db 60%, #e74c3c 100%);"></td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td style="padding: 32px 36px 24px; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); border-bottom: 1px solid #f1f5f9;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <!-- Logo / Brand Header -->
                    <div style="font-size: 22px; font-weight: 800; color: #0b1b3d; letter-spacing: -0.5px; margin: 0 0 4px 0;">
                      MCT <span style="color: #3482b9;">IT Solutions</span>
                    </div>
                    <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">
                      ${headerSubtitle}
                    </div>
                  </td>
                  <td align="right" valign="top">
                    <!-- Status Badge -->
                    <span style="display: inline-block; padding: 6px 14px; background-color: ${badgeBg}; color: ${badgeColor}; border-radius: 9999px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; border: 1px solid ${badgeColor}25;">
                      ${badgeText}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content Area -->
          <tr>
            <td style="padding: 32px 36px;">
              <!-- Greeting -->
              <p style="margin: 0 0 16px 0; font-size: 16px; font-weight: 700; color: #0f172a;">
                Dear ${recipientName},
              </p>

              <!-- Main Content -->
              <div style="font-size: 14px; line-height: 1.7; color: #334155;">
                ${mainContentHtml}
              </div>

              <!-- Summary or Highlights Box (if provided) -->
              ${
                summaryBoxHtml
                  ? `
                <div style="margin: 24px 0; padding: 20px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; border-left: 4px solid #3482b9;">
                  ${summaryBoxHtml}
                </div>
              `
                  : ""
              }

              <!-- Next Steps Roadmap (if provided) -->
              ${
                nextStepsHtml
                  ? `
                <div style="margin: 24px 0 16px 0; padding: 18px 20px; background-color: #f0fdf4; border-radius: 12px; border: 1px solid #bbf7d0;">
                  <div style="font-size: 13px; font-weight: 800; color: #166534; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                    Next Steps:
                  </div>
                  <div style="font-size: 13px; line-height: 1.6; color: #14532d;">
                    ${nextStepsHtml}
                  </div>
                </div>
              `
                  : ""
              }

              <!-- Action Button (if provided) -->
              ${
                ctaButton
                  ? `
                <div style="margin: 28px 0; text-align: center;">
                  <a href="${ctaButton.url}" target="_blank" style="display: inline-block; padding: 12px 28px; background: linear-gradient(135deg, #3482b9, #1f6595); color: #ffffff; text-decoration: none; border-radius: 10px; font-size: 13px; font-weight: 700; letter-spacing: 0.5px; box-shadow: 0 4px 12px rgba(52, 130, 185, 0.25);">
                    ${ctaButton.label} &rarr;
                  </a>
                </div>
              `
                  : ""
              }

              <!-- Reference Tag -->
              ${
                referenceId
                  ? `
                <div style="margin-top: 28px; padding-top: 14px; border-top: 1px dashed #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">Tracking Identifier:</span>
                  <span style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 12px; font-weight: 700; color: #475569; background: #f1f5f9; padding: 3px 8px; border-radius: 6px;">${referenceId}</span>
                </div>
              `
                  : ""
              }
            </td>
          </tr>

          <!-- Corporate Footer -->
          <tr>
            <td style="padding: 24px 36px 32px; background-color: #f8fafc; border-top: 1px solid #f1f5f9; text-align: left;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 13px; font-weight: 800; color: #0b1b3d; margin-bottom: 2px;">
                      MCT IT Solutions (P) Ltd.
                    </div>
                    <div style="font-size: 12px; color: #64748b; margin-bottom: 10px;">
                      Where Ideas Meet Execution &bull; ISO &amp; Enterprise Certified
                    </div>
                    <div>
                      <a href="https://www.miracle-cloudtechnology.com" target="_blank" style="font-size: 12px; font-weight: 700; color: #3482b9; text-decoration: none; margin-right: 16px;">
                        Website
                      </a>
                      <a href="https://www.miracle-cloudtechnology.com/contact" target="_blank" style="font-size: 12px; font-weight: 700; color: #3482b9; text-decoration: none; margin-right: 16px;">
                        Contact Us
                      </a>
                      <a href="https://www.miracle-cloudtechnology.com/about/careers" target="_blank" style="font-size: 12px; font-weight: 700; color: #3482b9; text-decoration: none;">
                        Careers
                      </a>
                    </div>
                  </td>
                  <td align="right" valign="bottom">
                    <span style="font-size: 11px; color: #94a3b8;">
                      &copy; ${new Date().getFullYear()} MCT IT Solutions.<br>All rights reserved.
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
