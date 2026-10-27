import type { Metadata } from "next";
import LeadershipClient from "./LeadershipClient";

export const metadata: Metadata = {
  title: "Leadership Team | MCT IT Solutions",
  description: "Meet the executive leadership and senior technology consultants driving digital transformation and Microsoft Dynamics 365 excellence at MCT IT Solutions.",
  alternates: {
    canonical: "/about/leadership",
  },
  openGraph: {
    title: "Leadership Team | MCT IT Solutions",
    description: "Meet the executive leadership and senior technology consultants driving digital transformation and Microsoft Dynamics 365 excellence at MCT IT Solutions.",
    url: "https://www.miracle-cloudtechnology.com" + "/about/leadership",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <LeadershipClient />;
}
