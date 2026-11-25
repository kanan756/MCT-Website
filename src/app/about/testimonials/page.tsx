import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | MCT IT Solutions",
  description: "Read genuine reviews and testimonials from our global partners and clients about their experience working with MCT IT Solutions.",
  alternates: {
    canonical: "/about/testimonials",
  },
  openGraph: {
    title: "Client Testimonials & Reviews | MCT IT Solutions",
    description: "Read genuine reviews and testimonials from our global partners and clients about their experience working with MCT IT Solutions.",
    url: "https://www.miracle-cloudtechnology.com" + "/about/testimonials",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <TestimonialsClient />;
}
