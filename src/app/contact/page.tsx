import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | MCT IT Solutions Global Offices",
  description: "Get in touch with MCT IT Solutions. Connect with our offices in India, USA, and UK for inquiries, consultations, and Microsoft Dynamics 365 support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | MCT IT Solutions Global Offices",
    description: "Get in touch with MCT IT Solutions. Connect with our offices in India, USA, and UK for inquiries, consultations, and Microsoft Dynamics 365 support.",
    url: "https://www.miracle-cloudtechnology.com" + "/contact",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <ContactClient />;
}
