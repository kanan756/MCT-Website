"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  MailCheck,
  Database,
  TrendingUp,
  Sparkles,
  Users,
  Building2,
  Check,
  Play,
  ZoomIn,
  X,
  ExternalLink,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function SalesProPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const keyFeatures = [
    {
      icon: MapPin,
      num: "1",
      title: "Smart Address Autofill",
      description:
        "Simplify address entry with intelligent autofill capabilities. Reduce repetitive typing, minimize manual entry errors, and maintain consistent address information across CRM records.",
    },
    {
      icon: MailCheck,
      num: "2",
      title: "Email Validation",
      description:
        "Improve the quality of email data by validating email addresses and helping identify potentially invalid entries before they affect business communication.",
    },
    {
      icon: Database,
      num: "3",
      title: "Improved Data Accuracy",
      description:
        "Maintain cleaner CRM records by reducing common data-entry mistakes and promoting consistent information across customer records.",
    },
    {
      icon: TrendingUp,
      num: "4",
      title: "Increased Productivity",
      description:
        "Reduce time spent on repetitive data-entry tasks, allowing sales representatives and CRM users to focus more on customer relationships and business growth.",
    },
    {
      icon: Sparkles,
      num: "5",
      title: "Seamless Dynamics 365 Experience",
      description:
        "Designed for use within the Microsoft Dynamics 365 ecosystem, SalesPro enhances everyday CRM workflows while helping organizations get more value from their existing business applications.",
    },
  ];

  const screenWalkthroughs = [
    {
      src: "/salespro-screen-1.png",
      title: "SalesPro Configuration & Setup",
      description: "Manage global settings, address autofill keys, and email validation parameters directly inside CRM.",
    },
    {
      src: "/salespro-screen-2.png",
      title: "Custom Form Integration",
      description: "Seamlessly map address and contact verification fields to any standard or custom Dynamics 365 entity.",
    },
    {
      src: "/salespro-screen-3.png",
      title: "Smart Address Predictive Lookup",
      description: "Interactive predictive address suggestions as users type, instantly completing street, city, state, and zip code.",
    },
    {
      src: "/salespro-screen-4.png",
      title: "Real-Time Email Validation & Alerting",
      description: "Instant syntax and deliverability warning tags preventing invalid or bounced email addresses upon lead creation.",
    },
    {
      src: "/salespro-screen-5.png",
      title: "Verified Customer Record Status",
      description: "Green verified status indicator ensuring accurate, dependable customer contact information across the sales pipeline.",
    },
  ];

  const businessBenefits = [
    { label: "Save time", detail: "Reduce repetitive manual data-entry work." },
    { label: "Improve data quality", detail: "Help maintain accurate and consistent customer information." },
    { label: "Support better communication", detail: "Reduce issues caused by incorrect email addresses." },
    { label: "Enhance team productivity", detail: "Enable users to focus on meaningful sales activities." },
    { label: "Maintain reliable CRM records", detail: "Support better reporting, customer management, and decision-making." },
  ];

  const targetAudiences = [
    "Sales and business development teams",
    "Customer relationship management teams",
    "CRM administrators and implementation partners",
    "Organizations managing large volumes of customer records",
    "Businesses seeking to improve CRM data quality and operational efficiency",
  ];

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image with dark corporate gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-contact.png"
            alt="SalesPro Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/88 to-[#0b1b3d]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/95 via-transparent to-[#0b1b3d]/40" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3482b9]/25 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#1d4ed8]/20 rounded-full blur-[130px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumb Navigation: Home -> Products -> CRM -> SalesPro */}
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/product/prod-crm" className="hover:text-white transition-colors">CRM</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">SalesPro</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-8 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-6">
            SalesPro
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#video-demo"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Video Demo</span>
            </a>
            <a
              href="#screens"
              className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all inline-flex items-center gap-2"
            >
              <span>Explore Screens</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. PRODUCT OVERVIEW & KEY FEATURES                             */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs font-bold uppercase tracking-wider">
              Product Overview
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Smarter Data Entry &amp; Accurate Customer Records
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal">
              SalesPro is a productivity-focused solution designed to enhance data quality and simplify everyday operations within Microsoft Dynamics 365 CRM. It helps businesses maintain accurate customer records, reduce repetitive manual data entry, and improve the reliability of their CRM data.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              By bringing together intelligent address autofill and email validation capabilities, SalesPro enables sales and business teams to work more efficiently while maintaining cleaner, more consistent customer information.
            </p>
          </div>

          {/* Side by side: Visual Logo Card + Key Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left Column: Visual SalesPro Card with Left Entry */}
            <ScrollReveal direction="left" duration={800} className="lg:col-span-5 space-y-6">
              <div className="bg-[#f8fafc] p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm flex flex-col items-center text-center space-y-6">
                <div className="relative w-56 h-56 flex items-center justify-center">
                  <Image
                    src="/salespro.png"
                    alt="SalesPro Logo"
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Seamless Dynamics 365 Integration
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Designed for use within the Microsoft Dynamics 365 ecosystem, SalesPro enhances everyday CRM workflows while helping organizations get more value from their existing business applications.
                  </p>
                </div>
              </div>

              {/* Quick Highlight Box */}
              <div className="p-6 rounded-2xl bg-sky-50/70 border border-[#3482b9]/30 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#3482b9] block">
                  Built for High Performance
                </span>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  Operates directly within CRM entity forms without requiring external third-party software overhead or interrupting user workflows.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Column: Key Features List with Right Entry */}
            <ScrollReveal direction="right" duration={800} className="lg:col-span-7 bg-[#f8fafc] p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#3482b9] block mb-1">
                  Product Capabilities
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Key Features
                </h3>
              </div>

              <div className="space-y-4">
                {keyFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start gap-4 hover:border-[#3482b9]/40 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-slate-900">
                          {feat.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-gray-200/70 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Dynamics 365 Verified
                </span>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#3482b9] hover:text-[#1f6595] uppercase tracking-wider inline-flex items-center gap-1"
                >
                  <span>Request Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2.5 WATCH SALESPRO IN ACTION (Exact Match to Reference)       */}
      {/* ============================================================== */}
      <section id="video-demo" className="py-20 sm:py-24 bg-[#fbfcfd] border-b border-gray-100 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Watch SalesPro in Action
            </h2>
          </div>

          {/* Video Player Container with 16:9 ratio and rounded dark frame */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 relative">
            <div className="relative w-full aspect-video flex items-center justify-center bg-black">
              {/* Fallback & Poster Cover */}
              <Image
                src="/salespro-screen-3.png"
                alt="Watch SalesPro in Action"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* Centered YouTube-style Play Button linking to Teams / Stream video */}
              <a
                href="https://teams.microsoft.com/l/message/19:1a5edc57-8b65-4977-88b0-9e720c9b0edb_d76ecb37-28b4-4f77-bf5a-10e6abae6c86@unq.gbl.spaces/1792660454930?context=%7B%22contextType%22%3A%22chat%22%7D"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-10 flex items-center justify-center transition-transform hover:scale-110"
                aria-label="Play SalesPro Demonstration Video"
              >
                <div className="w-20 h-14 sm:w-24 sm:h-16 rounded-2xl bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-2xl transition-colors">
                  <Play className="w-8 h-8 fill-white translate-x-0.5" />
                </div>
              </a>

              {/* Top Branding Bar */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between text-white drop-shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <img src="/mctlogo.png" alt="MCT Logo" className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold leading-tight">Rahul: Boost Sales Productivity with Sales Pro</p>
                    <p className="text-[10px] text-slate-300">Dynamics 365 Add On • MCT IT Solutions</p>
                  </div>
                </div>

                <a
                  href="https://teams.microsoft.com/l/message/19:1a5edc57-8b65-4977-88b0-9e720c9b0edb_d76ecb37-28b4-4f77-bf5a-10e6abae6c86@unq.gbl.spaces/1792660454930?context=%7B%22contextType%22%3A%22chat%22%7D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-semibold backdrop-blur-md border border-white/20 transition-all"
                >
                  <span>Open Stream</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Bottom Video Controls Bar Mock */}
              <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-white/90 drop-shadow">
                <span className="text-[11px] font-medium bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md">
                  HD • Microsoft Teams / Stream
                </span>
                <a
                  href="https://teams.microsoft.com/l/message/19:1a5edc57-8b65-4977-88b0-9e720c9b0edb_d76ecb37-28b4-4f77-bf5a-10e6abae6c86@unq.gbl.spaces/1792660454930?context=%7B%22contextType%22%3A%22chat%22%7D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-semibold text-white flex items-center gap-1"
                >
                  <span>Watch on Teams</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2.6 CHECK OUR SALESPRO IN ACTION (Exact Match to IntelliKB)    */}
      {/* ============================================================== */}
      <section id="screens" className="py-20 sm:py-24 bg-[#fbfcfd] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-[#3482b9] bg-[#3482b9]/10 mb-3">
              Screen Walkthroughs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Check Our SalesPro in Action
            </h2>
          </div>

          {/* Interactive Screen Cards matching exact IntelliKB structure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {screenWalkthroughs.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage({ src: img.src, title: img.title })}
                className="group rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-2xl hover:border-[#3482b9]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
              >
                <div className="p-4 sm:p-5 bg-white flex items-center justify-center relative">
                  <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-slate-50 border border-gray-100 flex items-center justify-center">
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Hover overlay with zoom icon */}
                    <div className="absolute inset-0 bg-[#0b1b3d]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-[#3482b9] flex items-center justify-center shadow-lg">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50/70 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight group-hover:text-[#3482b9] transition-colors">
                    {img.title}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage({ src: img.src, title: img.title });
                    }}
                    className="text-[11px] font-extrabold uppercase tracking-wider text-white bg-[#3482b9] hover:bg-[#1f6595] px-3.5 py-1.5 rounded-full shadow-sm transition-all flex items-center gap-1 hover:scale-105 shrink-0"
                  >
                    <span>VIEW</span>
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. BUSINESS BENEFITS & TARGET AUDIENCE                         */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Business Benefits */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#3482b9] block mb-1">
                  Value Delivered
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Business Benefits
                </h3>
              </div>

              <div className="space-y-3.5">
                {businessBenefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 font-bold mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 text-sm sm:text-base font-bold block">
                        {benefit.label}
                      </strong>
                      <span className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {benefit.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#3482b9] block mb-1">
                  Who It&apos;s For
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Who Can Benefit from SalesPro?
                </h3>
                <p className="text-slate-600 text-sm mt-2 font-normal">
                  SalesPro is suitable for organizations using Microsoft Dynamics 365 CRM, particularly:
                </p>
              </div>

              <div className="space-y-3">
                {targetAudiences.map((audience, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-sky-50/60 border border-[#3482b9]/20"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white border border-[#3482b9]/30 text-[#3482b9] flex items-center justify-center shrink-0 font-bold shadow-sm">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-800 text-sm sm:text-base">
                      {audience}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. INTERESTED IN SEEING HOW IT WORKS?                          */}
      {/* ============================================================== */}
      <section className="relative py-20 bg-[#0b1b3d] text-white overflow-hidden border-t-4 border-[#3482b9]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d] via-[#112347] to-[#0b1b3d]" />
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#3482b9]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Interested in seeing how it works?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Experience the power of seamless address autofill and real-time email validation in Microsoft Dynamics 365 with MCT IT Solutions. Our solution simplifies data entry, eliminates invalid records, and enhances team productivity.
          </p>

          <p className="text-lg sm:text-xl font-bold text-[#5ba6db]">
            Book your demo and check it today !
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              href="/contact"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. LIGHTBOX / FULLSCREEN IMAGE MODAL (Interactive zoom)        */}
      {/* ============================================================== */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-all duration-200 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-slate-900 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-800/90 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide truncate">
                {selectedImage.title}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] bg-slate-950 p-4 flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-800/90 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>SalesPro Dynamics 365 Verification Suite</span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="text-white hover:text-[#5ba6db] font-semibold transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
