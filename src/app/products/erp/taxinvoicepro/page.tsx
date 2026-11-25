import type { Metadata } from "next";
import TaxInvoiceClient from "./TaxInvoiceClient";

export const metadata: Metadata = {
  title: "TaxInvoicePro - UAE E-Invoicing & ERP Integration | MCT IT Solutions",
  description: "TaxInvoicePro provides seamless tax invoicing, compliant e-invoicing workflows, and enterprise ERP integration for businesses.",
  alternates: {
    canonical: "/products/erp/taxinvoicepro",
  },
  openGraph: {
    title: "TaxInvoicePro - UAE E-Invoicing & ERP Integration | MCT IT Solutions",
    description: "TaxInvoicePro provides seamless tax invoicing, compliant e-invoicing workflows, and enterprise ERP integration for businesses.",
    url: "https://www.miracle-cloudtechnology.com" + "/products/erp/taxinvoicepro",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <TaxInvoiceClient />;
}
