import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.miracle-cloudtechnology.com";
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/about/leadership",
    "/about/careers",
    "/about/projects",
    "/about/projects/appsource-real-estate-property-management-business-central",
    "/about/projects/enterprise-business-central-on-premises-development-cicd",
    "/about/projects/pet-import-service-and-delivery-management",
    "/about/projects/uae-e-invoicing-integration-dynamics-365-business-central",
    "/about/testimonials",
    "/services",
    "/products",
    "/products/crm/cleanmail-pro",
    "/products/crm/multiselect",
    "/products/crm/salespro",
    "/products/ai/intellikb",
    "/products/erp/taxinvoicepro",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route.startsWith("/products") || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/products") || route === "/services" ? 0.9 : 0.8,
  }));
}
