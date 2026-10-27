"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Play,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Target,
  Users,
  Check,
  ExternalLink
} from "lucide-react";

export default function CleanMailClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "HOW DOES CLEANMAIL PRO VALIDATE EMAIL ADDRESSES IN DYNAMICS 365?",
      a: "CleanMail Pro connects with Microsoft Dynamics 365 CRM to validate email address formatting, syntax, and deliverability status according to the configured validation rules, flagging records that require attention."
    },
    {
      q: "DOES CLEANMAIL PRO AUTOMATICALLY REMOVE OR FLAG INVALID EMAILS?",
      a: "Depending on your deployment settings, CleanMail Pro identifies records that need attention so marketing and sales teams can review, update, or exclude them prior to campaign launches."
    },
    {
      q: "WHERE CAN I ACCESS OR DOWNLOAD CLEANMAIL PRO?",
      a: "CleanMail Pro can be accessed directly from its dedicated portal at cleanmail.pro or requested through our team for deployment into your Microsoft Dynamics 365 environment."
    },
    {
      q: "CAN CLEANMAIL PRO PREVENT ALL EMAIL BOUNCES?",
      a: "While CleanMail Pro significantly improves email data quality by identifying invalid, incorrectly formatted, and outdated addresses, external mailbox factors (such as full recipient inboxes or temporary server outages) can still occur. It is designed to minimize avoidable delivery failures."
    }
  ];

  const keyFeatures = [
    {
      title: "Email Address Validation",
      desc: "Help identify email addresses that are incorrectly formatted or flagged by the configured validation service."
    },
    {
      title: "CRM-Focused Workflow",
      desc: "Designed to support email data quality processes within a Microsoft Dynamics 365 environment."
    },
    {
      title: "Contact Data Maintenance",
      desc: "Help teams identify records that may need review or correction, supporting cleaner contact lists."
    },
    {
      title: "Reduced Manual Checking",
      desc: "Streamline routine validation tasks and reduce the effort required to review email data."
    },
    {
      title: "Campaign Readiness",
      desc: "Support better-prepared contact lists before marketing or customer communication activities."
    },
    {
      title: "Setup and Integration Support",
      desc: "Access product information and setup assistance to help plan deployment in your CRM environment."
    }
  ];

  const businessBenefits = [
    {
      title: "Better data quality",
      desc: "Identify email records that may require correction or verification."
    },
    {
      title: "More efficient workflows",
      desc: "Reduce repetitive manual review of email addresses."
    },
    {
      title: "Fewer avoidable delivery issues",
      desc: "Help limit bounces associated with invalid or outdated addresses."
    },
    {
      title: "Improved campaign preparation",
      desc: "Give marketing and customer-facing teams cleaner lists to work with."
    },
    {
      title: "More focused communication",
      desc: "Help teams spend less time managing bad data and more time engaging customers."
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
            "name": "CleanMail Pro for Microsoft Dynamics 365",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Microsoft Dynamics 365, Power Platform",
            "description": "CleanMail Pro helps Microsoft Dynamics 365 users improve email data quality by identifying email addresses that may be invalid, incorrectly formatted, or no longer usable.",
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
            alt="CleanMail Pro Microsoft Dynamics 365 Email Validation Solution Banner"
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
            <span className="text-[#3482b9] font-bold" aria-current="page">CleanMail Pro</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-6 backdrop-blur-md shadow-sm font-['Montserrat',sans-serif]">
            Microsoft Dynamics 365 CRM Solution
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-4 tracking-tight font-['Montserrat',sans-serif]">
            CleanMail{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Pro
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-semibold max-w-3xl mx-auto mb-8 font-['Source_Sans_3',sans-serif] leading-relaxed">
            Improve Email Data Quality. Support Better Campaign Deliverability.
          </p>

          {/* Primary CTA, Secondary CTA, Additional CTA */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 font-['Montserrat',sans-serif]">
            <a
              href="#video-demo"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105 flex items-center gap-2"
              title="Watch Video Demonstration of CleanMail Pro"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Video Demo</span>
            </a>
            <a
              href="http://cleanmail.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Visit CleanMail Pro</span>
              <ExternalLink className="w-4 h-4" />
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
          
          {/* Overview Section with High-Resolution Product Showcase Illustration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            
            {/* Left 6 cols: Overview Text */}
            <article className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#3482b9] bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block font-['Montserrat',sans-serif]">
                  Overview
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif] leading-tight">
                Maintain Cleaner Email Records in Dynamics 365
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                CleanMail Pro helps Microsoft Dynamics 365 users improve email data quality by identifying email addresses that may be invalid, incorrectly formatted, or no longer usable. By helping teams maintain cleaner contact records, it supports more reliable outreach, reduces avoidable delivery failures, and helps organizations manage CRM email data more efficiently.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold text-slate-700 font-['Montserrat',sans-serif]">
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>Cleaner Contact Records</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>Reduce Delivery Failures</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>Efficient CRM Management</span>
                </div>
              </div>
            </article>

            {/* Right 6 cols: Product Showcase Illustration */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(52,130,185,0.2)]">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="/cleanmail-pro.png"
                    alt="CleanMail Pro Microsoft Dynamics 365 Email Validation Tool User Interface"
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
            
            {/* Left Column: The Challenge & Who Can Benefit */}
            <div className="space-y-6 flex flex-col justify-between">
              
              <article className="p-7 sm:p-8 rounded-3xl bg-amber-50/70 border border-amber-200/80 space-y-3">
                <div className="flex items-center gap-2.5 text-amber-800">
                  <Target className="w-5 h-5 text-amber-700 shrink-0" />
                  <h3 className="text-xs font-black uppercase tracking-wider block font-['Montserrat',sans-serif]">
                    The Challenge
                  </h3>
                </div>
                <h4 className="text-xl font-bold text-amber-950 font-['Montserrat',sans-serif]">
                  Outdated, Mistyped & Invalid Email Addresses in CRM
                </h4>
                <p className="text-sm sm:text-base text-amber-950 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                  Outdated, mistyped, or invalid email addresses in CRM records can contribute to bounced messages, wasted campaign effort, and incomplete customer communication. Manually reviewing email addresses across large contact lists can also consume valuable time and create inconsistent results.
                </p>
              </article>

              <article className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-5">
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Users className="w-5 h-5 text-[#3482b9] shrink-0" />
                  <h3 className="text-xs font-black uppercase tracking-wider block font-['Montserrat',sans-serif]">
                    Who Can Benefit?
                  </h3>
                </div>

                {/* Prominent, readable CleanMail Pro Brand Showcase */}
                <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center">
                  <Image
                    src="/cleanmailpro.png"
                    alt="CleanMail Pro - Validate Your Emails"
                    width={220}
                    height={110}
                    priority
                    className="w-48 sm:w-56 h-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Dynamics 365 Teams Managing Active Contact Lists
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                    CleanMail Pro may be useful for organizations using Microsoft Dynamics 365 that maintain sizeable contact lists and rely on email for marketing, lead generation, customer service, or business communications.
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
                  Integrated Email Validation for Dynamics 365
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                  CleanMail Pro integrates with Microsoft Dynamics 365 to help users validate and maintain email address data as part of their CRM processes. Depending on the configured validation method, it can help identify records that need attention so teams can take appropriate action before using those addresses in campaigns or other communications.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/80 space-y-3.5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 font-['Montserrat',sans-serif] block">
                  Core Solution Highlights
                </span>
                
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    Identify formatting issues, syntax errors, and flagged email records
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    Integrate directly into Microsoft Dynamics 365 CRM workflows
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    Prepare reliable contact lists before marketing and customer outreach
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
              Practical email validation and contact list maintenance tools engineered for Microsoft Dynamics 365.
            </p>
          </div>

          {/* 6 Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {keyFeatures.map((feat, idx) => (
              <article
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#3482b9]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center font-black group-hover:bg-[#3482b9] group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif] group-hover:text-[#3482b9] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                    {feat.desc}
                  </p>
                </div>
              </article>
            ))}
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
              Watch CleanMail Pro in Action
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-['Source_Sans_3',sans-serif]">
              See how CleanMail Pro validates email data and maintains clean contact records within Microsoft Dynamics 365.
            </p>
          </div>

          {/* Video Container with 16:9 ratio */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 relative">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/mjsFnbDmHpQ?rel=0&modestbranding=1"
                title="CleanMail Pro Email Validation Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. CALLS TO ACTION & OFFICIAL ACCESS BANNER                    */}
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
            Ready to Improve Your Email Data Quality?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed font-['Source_Sans_3',sans-serif]">
            CleanMail Pro helps Microsoft Dynamics 365 users identify potentially invalid email addresses and maintain cleaner CRM contact data. Streamline email validation, reduce avoidable delivery failures, and prepare more reliable contact lists for customer and marketing communications.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 font-['Montserrat',sans-serif]">
            <a
              href="http://cleanmail.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase shadow-xl shadow-[#3482b9]/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Visit CleanMail Pro</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Request Setup</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. FREQUENTLY ASKED QUESTIONS                                  */}
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

    </div>
  );
}
