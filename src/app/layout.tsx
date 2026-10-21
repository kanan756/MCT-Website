import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnovativeBackground from "@/components/InnovativeBackground";
import PageTransitionLoader from "@/components/PageTransitionLoader";

export const metadata: Metadata = {
  title: "MCT IT Solutions | Microsoft Dynamics 365 Partner",
  description: "MCT IT Solutions provides expert-led innovation in Microsoft Dynamics 365, Cloud Architecture, ERP, CRM, and Enterprise AI. Let us drive your digital transformation.",
  keywords: "Microsoft Dynamics 365, ERP, CRM, Power Platform, AI Integration, MCT IT Solutions",
  openGraph: {
    title: "MCT IT Solutions | Digital Transformation Experts",
    description: "Expert-led innovation in Microsoft Dynamics 365, Cloud Architecture, and Enterprise AI.",
    url: "https://www.miraclecloud-technology.com/",
    siteName: "MCT IT Solutions",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900 selection:bg-[#3482B9] selection:text-white" suppressHydrationWarning>
        <Suspense fallback={null}>
          <PageTransitionLoader />
        </Suspense>
        <InnovativeBackground />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
