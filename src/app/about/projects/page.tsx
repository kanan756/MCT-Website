import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Client Projects & Case Studies | MCT IT Solutions",
  description: "Explore our portfolio of successful Microsoft Dynamics 365 CRM, ERP, API integration, and workflow automation projects worldwide.",
  alternates: {
    canonical: "/about/projects",
  },
  openGraph: {
    title: "Client Projects & Case Studies | MCT IT Solutions",
    description: "Explore our portfolio of successful Microsoft Dynamics 365 CRM, ERP, API integration, and workflow automation projects worldwide.",
    url: "https://www.miracle-cloudtechnology.com" + "/about/projects",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <ProjectsClient />;
}
