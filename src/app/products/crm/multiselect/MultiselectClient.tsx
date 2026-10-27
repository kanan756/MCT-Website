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
  Layers,
  Sparkles
} from "lucide-react";

export default function MultiselectClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "WHAT TECHNOLOGY HAS BEEN USED IN THIS MULTISELECT OPTION SET SOLUTION?",
      a: "The solution is built using standard JavaScript, C#, .NET, and Microsoft Dynamics 365 SDK / Power Platform framework, ensuring high compatibility, seamless performance, and zero bloat."
    },
    {
      q: "WHAT DELIVERABLES WILL BE PROVIDED UPON REQUEST?",
      a: "You will receive a complete, production-ready Dynamics 365 managed/unmanaged solution package, functional deployment documentation, architectural overview, and a step-by-step user administration guide."
    },
    {
      q: "BY WHAT TIME CAN THE MULTISELECT SOLUTION BE DEPLOYED?",
      a: "Deployment is immediate. The package imports directly into your Dynamics 365 CRM environment via the standard solution import process."
    },
    {
      q: "CAN WE DO CUSTOMIZATION OR EXTEND ENTITY COVERAGE?",
      a: "Yes. The MultiSelect Option Set solution can be tailored to accommodate custom entities, specific business validation rules, and unique multi-value CRM workflows upon request."
    }
  ];

  const keyFeatures = [
    {
      title: "Flexible Multi-Selection",
      desc: "Allow users to select multiple values within a single field, based on the solution's supported configuration."
    },
    {
      title: "Entity-Level Flexibility",
      desc: "Configure the solution for supported fields and entities to accommodate different business scenarios."
    },
    {
      title: "Solution Import and Deployment",
      desc: "Deploy the solution through the Dynamics 365 solution import process, subject to environment and version compatibility."
    },
    {
      title: "Improved Data Capture",
      desc: "Reduce the need for multiple single-select fields when a multi-value selection is more appropriate."
    },
    {
      title: "Simplified User Experience",
      desc: "Help CRM users record and maintain information through a more intuitive selection experience."
    },
    {
      title: "Compatibility Assessment",
      desc: "Confirm compatibility with the target Dynamics 365 environment, including version, interface, and customization requirements."
    }
  ];

  const businessBenefits = [
    {
      title: "Improved productivity",
      desc: "Make routine CRM data entry easier and faster for sales, customer support, and operational teams."
    },
    {
      title: "Better data consistency",
      desc: "Standardize how multiple values are captured across records without duplicate text fields."
    },
    {
      title: "Simplified forms",
      desc: "Reduce unnecessary fields where multi-selection is suitable, keeping forms clean and intuitive."
    },
    {
      title: "Greater flexibility",
      desc: "Support business scenarios involving multiple classifications, service categories, or tag groups."
    },
    {
      title: "Reduced development effort",
      desc: "Address multi-selection requirements through the solution where supported, cutting custom code costs."
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
            "name": "MCT MultiSelect Option Set for Dynamics 365",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Microsoft Dynamics 365, Power Apps",
            "description": "MultiSelect Option Set solution enabling users to select and manage multiple values within a single Dynamics 365 CRM field.",
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
            alt="Microsoft Dynamics 365 MultiSelect Option Set Solution Banner"
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
            <span className="text-[#3482b9] font-bold" aria-current="page">MultiSelect Option Set</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-6 backdrop-blur-md shadow-sm font-['Montserrat',sans-serif]">
            Microsoft Dynamics 365 CRM Solution
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-4 tracking-tight font-['Montserrat',sans-serif]">
            MultiSelect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Option Set
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-semibold max-w-3xl mx-auto mb-8 font-['Source_Sans_3',sans-serif] leading-relaxed">
            Select Multiple Values. Simplify Your CRM Data Management.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 font-['Montserrat',sans-serif]">
            <a
              href="#video-demo"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105 flex items-center gap-2"
              title="Watch Video Demonstration of MultiSelect Option Set"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Video Demo</span>
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105"
            >
              Request Solution Package
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
            <article className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <span className="text-xs font-black uppercase tracking-widest text-[#3482b9] bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block font-['Montserrat',sans-serif]">
                Product Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif] leading-tight">
                Enhance Dynamics 365 with Multi-Value Fields
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                Enhance Microsoft Dynamics 365 CRM with a MultiSelect Option Set solution that enables users to select and manage multiple values within a single field. Simplify data entry, improve data consistency, and support more flexible reporting without unnecessary customization.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold text-slate-700 font-['Montserrat',sans-serif]">
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>Manage Multiple Values</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>Simplify Data Entry</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>Improve Reporting</span>
                </div>
              </div>
            </article>

            {/* Right 6 cols: Product Showcase Illustration */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(52,130,185,0.2)]">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="/multiselect-showcase.jpg"
                    alt="MultiSelect Option Set for Microsoft Dynamics 365 CRM User Interface Preview"
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
                  Single-Selection Constraints in Traditional Dynamics CRM
                </h4>
                <p className="text-sm sm:text-base text-amber-950 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                  Traditional option-set fields in Microsoft Dynamics 365 typically allow users to select only one value. When business processes require multiple selections, organizations may need additional fields or custom development. This can make forms more complex and increase ongoing maintenance effort.
                </p>
              </article>

              <article className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Users className="w-5 h-5 text-[#3482b9] shrink-0" />
                  <h3 className="text-xs font-black uppercase tracking-wider block font-['Montserrat',sans-serif]">
                    Who Can Benefit?
                  </h3>
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  Enterprise Organizations Capturing Multi-Value Data
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                  This solution is suitable for organizations using Microsoft Dynamics 365 that need to capture multiple classifications, service preferences, business categories, or other multi-value attributes within their CRM records.
                </p>
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
                  The MCT MultiSelect Option Set Solution
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                  The MCT MultiSelect Option Set solution provides a convenient way to capture multiple selections in one field. It helps organizations streamline CRM forms, improve data collection, and adapt their CRM experience to evolving business requirements.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/80 space-y-3.5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 font-['Montserrat',sans-serif] block">
                  Core Solution Highlights
                </span>
                
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    Streamline CRM forms by consolidating multi-value selections into a single field
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    Deploy cleanly through the standard Dynamics 365 solution import process
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    Improve reporting accuracy and eliminate redundant single-select fields
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
              Purpose-built capabilities engineered to provide an intuitive multi-selection experience within Dynamics 365.
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
              Watch MultiSelect Option Set in Action
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-['Source_Sans_3',sans-serif]">
              See how easily multi-select option sets integrate into Microsoft Dynamics 365 entities.
            </p>
          </div>

          {/* Video Container with 16:9 ratio */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 relative">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/KOaVhV5MvPE?rel=0&modestbranding=1"
                title="MCT MultiSelect Option Set for Dynamics CRM Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. READY TO ENHANCE YOUR CRM? CTA BANNER                       */}
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
            Ready to Enhance Your CRM?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed font-['Source_Sans_3',sans-serif]">
            Discover how the MCT MultiSelect Option Set solution can help make your Dynamics 365 data capture more flexible and efficient.
          </p>

          <div className="pt-4 flex justify-center font-['Montserrat',sans-serif]">
            <Link
              href="/contact"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-9 py-4 rounded-full font-bold text-sm tracking-wider uppercase shadow-xl shadow-[#3482b9]/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>REQUEST THE SOLUTION PACKAGE</span>
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
