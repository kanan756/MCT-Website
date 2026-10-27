import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Enterprise Products & Solutions | MCT IT Solutions",
  description: "Explore our proprietary business software including CleanMail Pro, SalesPro, MultiSelect Option Set, IntelliKB, and TaxInvoicePro.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Enterprise Products & Solutions | MCT IT Solutions",
    description: "Explore our proprietary business software including CleanMail Pro, SalesPro, MultiSelect Option Set, IntelliKB, and TaxInvoicePro.",
    url: "https://www.miracle-cloudtechnology.com" + "/products",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <ProductsClient />;
}
