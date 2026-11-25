import type { Metadata } from "next";
import ProdDesktopErpClient from "./ProdDesktopErpClient";

export const metadata: Metadata = {
  title: "ERP Solutions & Dynamics 365 Business Central Add-Ons | MCT IT Solutions",
  description:
    "Enterprise ERP solutions and Microsoft Dynamics 365 Business Central extensions, including UAE E-Invoicing and integrated accounting workflows.",
  alternates: {
    canonical: "/products/erp",
  },
  openGraph: {
    title: "ERP Solutions & Business Central Add-Ons | MCT IT Solutions",
    description: "Enterprise ERP solutions and Microsoft Dynamics 365 Business Central extensions.",
    url: "https://www.miracle-cloudtechnology.com/products/erp",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <ProdDesktopErpClient />;
}
