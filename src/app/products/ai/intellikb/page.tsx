import type { Metadata } from "next";
import IntelliKBClient from "./IntelliKBClient";

export const metadata: Metadata = {
  title: "IntelliKB - AI Knowledge Base for Enterprise | MCT IT Solutions",
  description: "Empower teams with IntelliKB: smart knowledge base management, AI-driven summarization, role-based access, and conversational document retrieval.",
  alternates: {
    canonical: "/products/ai/intellikb",
  },
  openGraph: {
    title: "IntelliKB - AI Knowledge Base for Enterprise | MCT IT Solutions",
    description: "Empower teams with IntelliKB: smart knowledge base management, AI-driven summarization, role-based access, and conversational document retrieval.",
    url: "https://www.miracle-cloudtechnology.com" + "/products/ai/intellikb",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <IntelliKBClient />;
}
