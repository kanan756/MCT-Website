"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";

export default function ComingSoonPage({
  title = "This Page is Coming Soon",
  subtitle = "Products, Services & About Us are currently in development.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-[#fbfcfd] text-slate-800">
      <div className="max-w-xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-white border border-gray-200 shadow-xl relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#3482b9]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#e74c3c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-sky-50 text-[#3482b9] border border-sky-100 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Clock className="w-8 h-8 animate-pulse" />
        </div>

        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Under Construction
        </span>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
          {title}
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
          {subtitle} We are crafting an engaging experience tailored to MCT IT Solutions. Check back shortly or get in touch with our team directly.
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
    </div>
  );
}
