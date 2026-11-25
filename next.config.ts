import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'pngimg.com',
      },
      {
        protocol: 'https',
        hostname: 'rstheme.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  serverExternalPackages: ["@opentelemetry", "framer-motion"],
  async redirects() {
    return [
      {
        source: "/about/projects",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/about/projects/:slug",
        destination: "/case-studies/:slug",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/product/prod-ai",
        destination: "/products/ai",
        permanent: true,
      },
      {
        source: "/product/prod-crm",
        destination: "/products/crm",
        permanent: true,
      },
      {
        source: "/product/prod-desktop",
        destination: "/products/erp",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
