import type { Metadata } from "next";
import ProdCrmClient from "./ProdCrmClient";

export const metadata: Metadata = {
  title: "Microsoft Dynamics 365 CRM Products & Add-Ons | MCT IT Solutions",
  description:
    "Explore enterprise CRM solutions and add-ons built for Microsoft Dynamics 365, including CleanMail Pro, SalesPro, and MultiSelect Option Set.",
  alternates: {
    canonical: "/products/crm",
  },
  openGraph: {
    title: "Microsoft Dynamics 365 CRM Products | MCT IT Solutions",
    description: "Custom CRM and ERP enhancements for Microsoft Dynamics 365.",
    url: "https://www.miracle-cloudtechnology.com/products/crm",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <ProdCrmClient />;
}
