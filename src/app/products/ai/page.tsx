import type { Metadata } from "next";
import ProductsAiClient from "./ProductsAiClient";

export const metadata: Metadata = {
  title: "AI Products & Intelligent Solutions | MCT IT Solutions",
  description: "Enterprise artificial intelligence products and machine learning solutions designed to accelerate business operations and knowledge management.",
  alternates: {
    canonical: "/products/ai",
  },
  openGraph: {
    title: "AI Products & Intelligent Solutions | MCT IT Solutions",
    description: "Enterprise artificial intelligence products and machine learning solutions designed to accelerate business operations and knowledge management.",
    url: "https://www.miracle-cloudtechnology.com" + "/products/ai",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <ProductsAiClient />;
}
