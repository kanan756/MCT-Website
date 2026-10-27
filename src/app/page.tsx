import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "MCT IT Solutions | Microsoft Dynamics 365, Cloud & AI Experts",
  description: "Expert-led Microsoft Dynamics 365 consulting, ERP, CRM, Power Platform, Cloud Architecture, and Enterprise AI solutions. Accelerate your digital transformation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MCT IT Solutions | Microsoft Dynamics 365, Cloud & AI Experts",
    description: "Expert-led Microsoft Dynamics 365 consulting, ERP, CRM, Power Platform, Cloud Architecture, and Enterprise AI solutions. Accelerate your digital transformation.",
    url: "https://www.miracle-cloudtechnology.com" + "/",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <HomeClient />;
}
