import type { Metadata } from "next";
import MultiselectClient from "./MultiselectClient";

export const metadata: Metadata = {
  title: "MultiSelect Option Set for Dynamics 365 CRM | MCT IT Solutions",
  description:
    "Select multiple values in a single Microsoft Dynamics 365 CRM field. Streamline forms, eliminate redundant fields, standardize data entry, and enhance CRM reporting without complex customization.",
  keywords: [
    "MultiSelect Option Set Dynamics 365",
    "Dynamics CRM Multi-Select",
    "Microsoft Dynamics 365 CRM fields",
    "Dynamics CRM solution import",
    "CRM data management",
    "Dynamics 365 custom controls",
    "MCT IT Solutions"
  ],
  openGraph: {
    title: "MultiSelect Option Set for Microsoft Dynamics 365 CRM",
    description:
      "Select multiple values and simplify your CRM data management. Boost productivity, reduce form clutter, and ensure data consistency in Dynamics 365.",
    url: "https://www.miracle-cloudtechnology.com/products/crm/multiselect",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/products/crm/multiselect",
  },
};

export default function Page() {
  return <MultiselectClient />;
}
