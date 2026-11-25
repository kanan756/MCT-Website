import type { Metadata } from "next";
import CleanMailClient from "./CleanMailClient";

export const metadata: Metadata = {
  title: "CleanMail Pro for Microsoft Dynamics 365 | MCT IT Solutions",
  description:
    "Improve email data quality and support better campaign deliverability in Microsoft Dynamics 365. CleanMail Pro validates email addresses, identifies invalid records, and reduces avoidable delivery failures.",
  keywords: [
    "CleanMail Pro",
    "Dynamics 365 email validation",
    "CRM email data quality",
    "Microsoft Dynamics 365 deliverability",
    "validate email addresses Dynamics CRM",
    "reduce email bounces CRM",
    "MCT IT Solutions"
  ],
  openGraph: {
    title: "CleanMail Pro - Email Data Quality for Microsoft Dynamics 365",
    description:
      "Improve email data quality and support better campaign deliverability in Microsoft Dynamics 365 CRM. Identify invalid or unusable addresses and keep contact lists clean.",
    url: "https://www.miracle-cloudtechnology.com/products/crm/cleanmail-pro",
    siteName: "MCT IT Solutions",
    images: [
      {
        url: "/cleanmail-pro.png",
        width: 1200,
        height: 630,
        alt: "CleanMail Pro for Microsoft Dynamics 365",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/products/crm/cleanmail-pro",
  },
};

export default function Page() {
  return <CleanMailClient />;
}
