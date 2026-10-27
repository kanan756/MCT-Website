import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers & Opportunities | Join MCT IT Solutions",
  description: "Discover career opportunities at MCT IT Solutions. Join our dynamic team of Microsoft Dynamics 365, ERP, CRM, and cloud engineering experts.",
  alternates: {
    canonical: "/about/careers",
  },
  openGraph: {
    title: "Careers & Opportunities | Join MCT IT Solutions",
    description: "Discover career opportunities at MCT IT Solutions. Join our dynamic team of Microsoft Dynamics 365, ERP, CRM, and cloud engineering experts.",
    url: "https://www.miracle-cloudtechnology.com" + "/about/careers",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <CareersClient />;
}
