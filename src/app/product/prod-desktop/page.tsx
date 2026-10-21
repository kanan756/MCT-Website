"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function ProdDesktopErpPage() {
  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white min-h-screen">

      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image: public/bg-product.png with rich dark corporate gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-product.png"
            alt="ERP Background"
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
          
          {/* Breadcrumb Navigation matching screenshot: Home -> Products -> ERP */}
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">ERP</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-8 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-4">
            ERP
          </h1>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. ERP PRODUCT SHOWCASE: INTX                                  */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-24 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          
          {/* INTX Product Card */}
          <div className="w-full max-w-md rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-2xl hover:border-[#3482b9]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            
            <div>
              {/* Product Visual Header / Logo Banner */}
              <div className="w-full bg-[#f8fafc] border-b border-gray-100 p-8 sm:p-10 flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden group-hover:bg-slate-50 transition-colors">
                
                {/* Clean Custom INTX Vector Logo matching Screenshot */}
                <div className="flex flex-col items-center justify-center space-y-2 select-none group-hover:scale-105 transition-transform duration-300">
                  {/* Angled IX Badge */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-[#4a3b7c] rounded-2xl flex items-center justify-center shadow-md transform -rotate-6 border-2 border-[#52b788]">
                      <span className="text-white font-black text-4xl tracking-tighter italic">IX</span>
                    </div>
                  </div>
                  
                  {/* INTX Typography */}
                  <div className="text-center pt-2">
                    <span className="text-3xl font-black tracking-widest text-[#1a1a2e] block">
                      I N T X
                    </span>
                    <span className="text-xs font-bold text-slate-700 tracking-wider uppercase block">
                      Invoicing &amp; Taxation
                    </span>
                  </div>
                </div>

              </div>

              {/* Card Body with User's Exact Verbatim Copy */}
              <div className="p-7 sm:p-8 text-center flex flex-col items-center">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-[#3482b9] transition-colors">
                  INTX
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  INTX is a ahead of time ERP application which combines Quotations, Billing, Inventory, Accounts and Taxation in one application. No need to play around different applications for your entire business needs. The application is GST ready with calculation based on State, Central GST.
                </p>
              </div>
            </div>

            {/* Bottom MORE INFO Button */}
            <div className="pb-8 pt-2 px-8 flex justify-center">
              <Link
                href="/products/erp/taxinvoicepro"
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
