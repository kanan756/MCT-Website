import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies & Project Portfolio | MCT IT Solutions",
  description:
    "Explore our enterprise case studies across Microsoft Dynamics 365, Business Central, E-Invoicing integrations, and workflow automation.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies & Project Portfolio | MCT IT Solutions",
    description:
      "Explore our enterprise case studies across Microsoft Dynamics 365, Business Central, E-Invoicing integrations, and workflow automation.",
    url: "https://www.miracle-cloudtechnology.com/case-studies",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
