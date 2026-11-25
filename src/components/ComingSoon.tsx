"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Sparkles, ChevronRight } from "lucide-react";

export default function ComingSoonPage({
  title = "This Page is Coming Soon",
  pageTitle,
  subtitle = "We are currently crafting an engaging experience tailored to MCT IT Solutions. Check back shortly or get in touch with our team directly.",
}: {
  title?: string;
  pageTitle?: string;
  subtitle?: string;
}) {
  const displayTitle = pageTitle || title;

  return (
    <div className="w-full flex flex-col bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">
      
      {/* Exact Hero Header Structure matching all MCT pages */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-contact.png"
            alt="MCT Background"
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
          
          {/* Breadcrumbs matching exact hierarchy */}
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">{displayTitle}</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-8 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-4">
            {displayTitle}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              {subtitle}
            </p>
          )}

        </div>
      </section>

      {/* Under Construction Notice Card */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-xl w-full text-center p-8 sm:p-12 rounded-3xl bg-white border border-gray-200 shadow-xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 text-[#3482b9] border border-sky-100 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Clock className="w-8 h-8 animate-pulse" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Launching Soon
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            Content Under Development
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            This module is being updated with full specifications, architecture workflows, and case studies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
