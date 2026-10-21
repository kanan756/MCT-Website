"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function ProdAiPage() {
  return (
    <div id="page" className="flex flex-col w-full min-h-screen bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image with rich dark corporate gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-product.png"
            alt="AI Background"
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
          
          {/* Breadcrumb Navigation: Home -> Products -> AI */}
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">AI</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-8 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-4">
            AI
          </h1>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. AI PRODUCT SHOWCASE: INTELLIKB                               */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-24 bg-white flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center">
          
          {/* INTELLIKB Product Card */}
          <div className="w-full max-w-md rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-2xl hover:border-[#3482b9]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            
            <div>
              {/* Product Visual Header / Logo Banner */}
              <div className="w-full bg-[#f8fafc] border-b border-gray-100 p-6 sm:p-8 flex items-center justify-center min-h-[240px] relative overflow-hidden group-hover:bg-slate-50 transition-colors">
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/intelikb.jpg"
                    alt="IntelliKB AI Solution"
                    fill
                    className="object-contain p-2"
                    sizes="240px"
                    priority
                  />
                </div>
              </div>

              {/* Card Body with Exact Verbatim Copy from User's Screenshot */}
              <div className="p-7 sm:p-8 text-center flex flex-col items-center">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase mb-4 group-hover:text-[#3482b9] transition-colors">
                  INTELLIKB
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  An AI-powered chatbot with an integrated admin panel for secure, role-based access to organizational knowledge and documents. It features AI-driven document summarization, dynamic tone adjustment, and seamless user management to enhance productivity and collaboration.
                </p>
              </div>
            </div>

            {/* Bottom MORE INFO Button */}
            <div className="pb-8 pt-2 px-8 flex justify-center">
              <Link
                href="/products/ai/intellikb"
                className="px-8 py-3 rounded-full border-2 border-[#3482b9] text-[#3482b9] hover:bg-[#3482b9] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 inline-flex items-center gap-2"
              >
                <span>MORE INFO</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
