import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal | MCT IT Solutions",
  description: "Secure Admin Management Portal for MCT IT Solutions",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
