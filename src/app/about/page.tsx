import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | MCT IT Solutions - Certified Dynamics 365 Partners",
  description: "Learn about MCT IT Solutions, our mission, vision, certified Microsoft Dynamics 365 consultants, and our proven track record of enterprise digital transformation.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | MCT IT Solutions - Certified Dynamics 365 Partners",
    description: "Learn about MCT IT Solutions, our mission, vision, certified Microsoft Dynamics 365 consultants, and our proven track record of enterprise digital transformation.",
    url: "https://www.miracle-cloudtechnology.com" + "/about",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <AboutClient />;
}
