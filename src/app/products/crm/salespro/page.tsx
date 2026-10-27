import type { Metadata } from "next";
import SalesProClient from "./SalesProClient";

export const metadata: Metadata = {
  title: "SalesPro for Microsoft Dynamics 365 CRM | MCT IT Solutions",
  description:
    "SalesPro helps Microsoft Dynamics 365 users simplify address entry and improve email data quality. With smart address autofill and email validation capabilities, it supports cleaner customer records.",
  keywords: [
    "SalesPro Dynamics 365",
    "Dynamics CRM address autofill",
    "CRM email validation",
    "Microsoft Dynamics 365 data quality",
    "SalesPro MCT IT Solutions",
    "Dynamics 365 CRM productivity add-on",
    "customer record accuracy CRM"
  ],
  openGraph: {
    title: "SalesPro - Smarter Data Entry for Microsoft Dynamics 365",
    description:
      "Smarter Data Entry. More Accurate Customer Records. Address autofill and email validation for Dynamics 365.",
    url: "https://www.miracle-cloudtechnology.com/products/crm/salespro",
    siteName: "MCT IT Solutions",
    images: [
      {
        url: "/sales-pro.png",
        width: 1200,
        height: 630,
        alt: "SalesPro for Microsoft Dynamics 365 CRM",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/products/crm/salespro",
  },
};

export default function Page() {
  return <SalesProClient />;
}
