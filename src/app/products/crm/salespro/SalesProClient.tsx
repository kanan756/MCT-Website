"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Target,
  Users,
  Check,
  Play,
  ZoomIn,
  X,
  ExternalLink,
  MapPin,
  MailCheck,
  Database,
  TrendingUp,
  Sparkles
} from "lucide-react";

export default function SalesProClient() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const keyFeatures = [
    {
      icon: MapPin,
      title: "Smart Address Autofill",
      desc: "Simplify address entry with autofill capabilities, reducing repetitive typing and helping maintain consistent address information across CRM records."
    },
    {
      icon: MailCheck,
      title: "Email Validation",
      desc: "Help identify potentially invalid or incorrectly formatted email addresses before they affect customer communications."
    },
    {
      icon: Database,
      title: "Improved Data Accuracy",
      desc: "Promote cleaner CRM records by reducing common data-entry mistakes and supporting consistent information across customer records."
    },
    {
      icon: TrendingUp,
      title: "Increased Productivity",
      desc: "Reduce time spent on repetitive data-entry tasks so sales representatives and CRM users can focus more on customer relationships and business growth."
    },
    {
      icon: Sparkles,
      title: "Dynamics 365 Integration",
      desc: "Designed to support everyday workflows within the Microsoft Dynamics 365 ecosystem, subject to environment and configuration compatibility."
    }
  ];

  const businessBenefits = [
    {
      title: "Cleaner customer records",
      desc: "Improve consistency across address and email fields."
    },
    {
      title: "Less manual effort",
      desc: "Reduce repetitive typing and routine checking."
    },
    {
      title: "More efficient CRM workflows",
      desc: "Support users within their existing Dynamics 365 processes."
    },
    {
      title: "Better communication readiness",
      desc: "Help teams identify email records that may need review before outreach."
    },
    {
      title: "More time for customer engagement",
      desc: "Reduce avoidable administrative work for sales and business teams."
    }
  ];

  const screenWalkthroughs = [
    { src: "/salespro-screen-1.png", title: "SalesPro Interactive CRM Dashboard" },
    { src: "/salespro-screen-2.png", title: "Smart Address Autofill Verification" },
    { src: "/salespro-screen-3.png", title: "Real-Time Email Address Validation" },
    { src: "/salespro-screen-4.png", title: "Account & Lead Record Hygiene View" },
    { src: "/salespro-screen-5.png", title: "Data Accuracy & Completion Reports" },
  ];

  const faqs = [
    {
      q: "HOW DOES SALESPRO INTEGRATE WITH MICROSOFT DYNAMICS 365?",
      a: "SalesPro is built to operate directly within Microsoft Dynamics 365 CRM entity forms, enabling sales and customer service teams to access address autofill and email validation seamlessly as part of their standard data entry workflows."
    },
    {
      q: "WHAT DELIVERABLES ARE INCLUDED WITH THE SALESPRO SOLUTION?",
      a: "You receive the complete managed/unmanaged Dynamics 365 solution package, detailed technical and deployment documentation, architectural overview, and administrator configuration guide."
    },
    {
      q: "DOES EMAIL VALIDATION PROVE THAT A MAILBOX EXISTS?",
      a: "SalesPro performs rigorous syntax formatting and configured validation service checks to identify invalid or incorrectly formatted email addresses before outreach. External mailbox factors (such as full recipient inboxes or security filters) are subject to destination server states."
    },
    {
      q: "CAN SALESPRO WORK WITH CUSTOM ENTITIES IN DYNAMICS 365?",
      a: "Yes. The solution can be configured across supported standard entities (Accounts, Contacts, Leads) and extended to custom CRM entities based on your organization's specific requirements."
    }
  ];

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* Structured Schema for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SalesPro for Microsoft Dynamics 365 CRM",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Microsoft Dynamics 365, Power Platform",
            "description": "SalesPro is a productivity-focused solution for Microsoft Dynamics 365 CRM that brings together smart address autofill and email validation.",
            "offers": {
              "@type": "Offer",
              "price": "Contact for pricing",
              "priceCurrency": "USD"
            },
            "provider": {
              "@type": "Organization",
              "name": "MCT IT Solutions Pvt. Ltd.",
              "url": "https://www.miracle-cloudtechnology.com"
            }
          })
        }}
      />

      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <header className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-contact.png"
            alt="Microsoft Dynamics 365 SalesPro Productivity Solution Banner"
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
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6 font-['Montserrat',sans-serif]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/products#crm" className="hover:text-white transition-colors">CRM Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold" aria-current="page">SalesPro</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-6 backdrop-blur-md shadow-sm font-['Montserrat',sans-serif]">
            Microsoft Dynamics 365 CRM Solution
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-4 tracking-tight font-['Montserrat',sans-serif]">
            Sales{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Pro
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-semibold max-w-3xl mx-auto mb-8 font-['Source_Sans_3',sans-serif] leading-relaxed">
            Smarter Data Entry. More Accurate Customer Records.
          </p>

          {/* Primary CTA, Secondary CTA, Additional CTA */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 font-['Montserrat',sans-serif]">
            <a
              href="#video-demo"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105 flex items-center gap-2"
              title="Watch Video Demonstration of SalesPro"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Video Demo</span>
            </a>
            <a
              href="#screens"
              className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Explore Screens</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-white/15 hover:bg-white/25 text-white border border-white/30 transition-all hover:scale-105"
            >
              Request Setup
            </Link>
          </div>

        </div>
      </header>

      {/* ============================================================== */}
      {/* 2. OVERVIEW & THE CHALLENGE / THE SOLUTION                     */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Overview Section with High-Resolution sales-pro.png Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            
            {/* Left 6 cols: Overview Text */}
            <article className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#3482b9] bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block font-['Montserrat',sans-serif]">
                  Product Overview
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif] leading-tight">
                Smarter Data Entry &amp; Accurate Customer Records
              </h2>
              
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                SalesPro is a productivity-focused solution for Microsoft Dynamics 365 CRM that helps teams improve data quality and simplify everyday data entry. By bringing together address autofill and email validation capabilities, SalesPro helps users maintain more consistent customer records, reduce repetitive manual entry, and work more efficiently.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold text-slate-700 font-['Montserrat',sans-serif]">
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>Smart Address Autofill</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>Email Validation</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>Dynamics 365 Workflow</span>
                </div>
              </div>
            </article>

            {/* Right 6 cols: sales-pro.png Showcase */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(52,130,185,0.2)]">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="/sales-pro.png"
                    alt="SalesPro for Microsoft Dynamics 365 CRM - Address Autofill and Email Validation Showcase"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch max-w-6xl mx-auto">
            
            {/* Left Column: The Challenge & Who Can Benefit (with clear, readable logo) */}
            <div className="space-y-6 flex flex-col justify-between">
              
              <article className="p-7 sm:p-8 rounded-3xl bg-amber-50/70 border border-amber-200/80 space-y-3">
                <div className="flex items-center gap-2.5 text-amber-800">
                  <Target className="w-5 h-5 text-amber-700 shrink-0" />
                  <h3 className="text-xs font-black uppercase tracking-wider block font-['Montserrat',sans-serif]">
                    The Challenge
                  </h3>
                </div>
                <h4 className="text-xl font-bold text-amber-950 font-['Montserrat',sans-serif]">
                  Manual Entry Inefficiencies &amp; Inconsistent Records
                </h4>
                <p className="text-sm sm:text-base text-amber-950 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                  Sales and business teams often spend valuable time entering customer addresses and checking email data. Manual entry can introduce spelling mistakes, inconsistent address formats, and invalid email addresses, making CRM records less reliable and creating avoidable follow-up work.
                </p>
              </article>

              <article className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-5">
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Users className="w-5 h-5 text-[#3482b9] shrink-0" />
                  <h3 className="text-xs font-black uppercase tracking-wider block font-['Montserrat',sans-serif]">
                    Who Can Benefit?
                  </h3>
                </div>

                {/* Prominent, readable SalesPro Logo */}
                <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center">
                  <Image
                    src="/salespro.png"
                    alt="SalesPro Logo"
                    width={220}
                    height={110}
                    priority
                    className="w-48 sm:w-56 h-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Dynamics 365 Teams Seeking Accurate Customer Records
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                    SalesPro may benefit sales teams, customer service teams, CRM administrators, and organizations using Microsoft Dynamics 365 that want to improve address capture, maintain cleaner customer data, and reduce repetitive data-entry tasks.
                  </p>
                </div>
              </article>

            </div>

            {/* Right Column: The Solution */}
            <article className="bg-[#f8fafc] p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm space-y-6 flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#3482b9]">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  <h3 className="text-xs font-black uppercase tracking-wider font-['Montserrat',sans-serif]">
                    The Solution
                  </h3>
                </div>
                <h4 className="text-2xl font-black text-slate-900 font-['Montserrat',sans-serif]">
                  Intelligent Address Autofill &amp; Email Validation
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                  SalesPro supports data-entry workflows within the Microsoft Dynamics 365 environment with address autofill and email validation capabilities. These features can help users capture information more consistently, identify potential email-data issues, and reduce repetitive tasks while maintaining their usual CRM workflow.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/80 space-y-3.5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 font-['Montserrat',sans-serif] block">
                  Core Solution Highlights
                </span>
                
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    Streamline address entry with fast autofill and standardize formatting
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    Identify formatting issues and invalid email records before outreach
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    Operate cleanly inside standard Microsoft Dynamics 365 CRM entity forms
                  </p>
                </div>
              </div>

            </article>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. KEY FEATURES & BUSINESS BENEFITS                            */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-24 bg-[#f8fafc] border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Key Features Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#3482b9] bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block font-['Montserrat',sans-serif]">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
              Key Features
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal font-['Source_Sans_3',sans-serif]">
              Core productivity and data accuracy features engineered for Microsoft Dynamics 365.
            </p>
          </div>

          {/* 5 Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {keyFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <article
                  key={idx}
                  className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#3482b9]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center font-black group-hover:bg-[#3482b9] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif] group-hover:text-[#3482b9] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                      {feat.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Business Benefits Header & Strip */}
          <div className="pt-10 border-t border-slate-200/80 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
                Business Benefits
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-semibold font-['Montserrat',sans-serif]">
                Measurable value delivered to your enterprise CRM workflows
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {businessBenefits.map((b, bIdx) => (
                <div
                  key={bIdx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5 hover:border-[#3482b9]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#3482b9] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#3482b9]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 font-['Montserrat',sans-serif]">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Source_Sans_3',sans-serif]">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. VIDEO DEMO SECTION                                          */}
      {/* ============================================================== */}
      <section id="video-demo" aria-label="Video Demonstration" className="py-20 bg-white scroll-mt-24 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#3482b9] bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block font-['Montserrat',sans-serif]">
              Live Demonstration
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
              Watch SalesPro in Action
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-['Source_Sans_3',sans-serif]">
              See how address autofill and email validation accelerate daily customer data management in Microsoft Dynamics 365.
            </p>
          </div>

          {/* Video Player Container */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 relative">
            <div className="relative w-full aspect-video flex items-center justify-center bg-black">
              <Image
                src="/salespro-screen-3.png"
                alt="Watch SalesPro in Action"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* Centered Play Button */}
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
                    <p className="text-xs sm:text-sm font-bold leading-tight">SalesPro: Boost Sales Productivity</p>
                    <p className="text-[10px] text-slate-300">Dynamics 365 Add-On • MCT IT Solutions</p>
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

              {/* Bottom Video Controls Bar */}
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
      {/* 5. EXPLORE SCREENS WALKTHROUGH                                 */}
      {/* ============================================================== */}
      <section id="screens" aria-label="Explore Screens" className="py-20 sm:py-24 bg-[#fbfcfd] scroll-mt-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#3482b9] bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block font-['Montserrat',sans-serif]">
              Screen Walkthroughs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
              Explore SalesPro Screens
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal font-['Source_Sans_3',sans-serif]">
              Click any screenshot below to inspect the interactive address capture, validation badges, and CRM UI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
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
      {/* 6. CALL TO ACTION BANNER                                       */}
      {/* ============================================================== */}
      <section className="relative py-20 bg-[#0b1b3d] text-white overflow-hidden border-t-4 border-[#3482b9]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d] via-[#112347] to-[#0b1b3d]" />
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#3482b9]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#5ba6db] bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm inline-block font-['Montserrat',sans-serif]">
            Get Started
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-['Montserrat',sans-serif]">
            Ready to Simplify Your CRM Data Entry?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed font-['Source_Sans_3',sans-serif]">
            SalesPro helps Microsoft Dynamics 365 users simplify address entry and improve email data quality. With smart address autofill and email validation capabilities, it supports cleaner customer records, reduces repetitive manual work, and helps teams manage CRM data more efficiently.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 font-['Montserrat',sans-serif]">
            <Link
              href="/contact"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-9 py-4 rounded-full font-bold text-sm tracking-wider uppercase shadow-xl shadow-[#3482b9]/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Request Setup</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. FREQUENTLY ASKED QUESTIONS                                  */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase font-['Montserrat',sans-serif]">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-semibold uppercase tracking-wider max-w-2xl mx-auto font-['Source_Sans_3',sans-serif]">
              WE ARE COMMITTED TO SATISFY ALL YOUR QUERIES AND LOOK FORWARD TO YOUR VALUABLE FEEDBACK.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm transition-colors hover:border-[#3482b9]/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base transition-colors font-['Montserrat',sans-serif]"
                >
                  <span className="no-underline select-none uppercase tracking-wide">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 text-[#3482b9] ${openFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-gray-100 pt-4 font-normal font-['Source_Sans_3',sans-serif]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. LIGHTBOX / FULLSCREEN IMAGE MODAL                           */}
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

            <div className="relative w-full h-[65vh] sm:h-[75vh] bg-slate-950 p-4 flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

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
