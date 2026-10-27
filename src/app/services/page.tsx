import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Enterprise Services & IT Solutions | MCT IT Solutions",
  description: "Comprehensive Microsoft Dynamics 365 consulting, ERP implementation, CRM customization, cloud architecture, and bespoke software development.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Enterprise Services & IT Solutions | MCT IT Solutions",
    description: "Comprehensive Microsoft Dynamics 365 consulting, ERP implementation, CRM customization, cloud architecture, and bespoke software development.",
    url: "https://www.miracle-cloudtechnology.com" + "/services",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <ServicesClient />;
}
