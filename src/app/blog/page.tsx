import React from "react";
import { getLiveBlogs } from "@/lib/contentRepo";
import BlogListClient from "./BlogListClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog & Insights | MCT IT Solutions",
  description: "Explore the latest insights, enterprise technology case studies, and digital transformation guides from MCT IT Solutions.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog & Insights | MCT IT Solutions",
    description: "Explore the latest insights, enterprise technology case studies, and digital transformation guides from MCT IT Solutions.",
    url: "https://www.miracle-cloudtechnology.com/blog",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default async function BlogIndexPage() {
  const blogs = await getLiveBlogs();
  const liveBlogs = blogs.filter((b) => b.published !== false);

  return <BlogListClient initialBlogs={liveBlogs} />;
}
