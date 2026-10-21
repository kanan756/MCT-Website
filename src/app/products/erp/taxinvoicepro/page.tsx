"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, CheckCircle2, ChevronDown, X, ZoomIn } from "lucide-react";

export default function TaxInvoiceProProductPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const faqs = [
    {
      q: "WHAT TECHNOLOGY HAS BEEN USED?",
      a: "PHP, JavaScript"
    },
    {
      q: "WHAT DELIVERABLE WILL BE PROVIDED?",
      a: "Complete setup of web app. On the servers provided, functional document, user guide"
    },
    {
      q: "CAN WE GET OUR OWN BRANDINGS DONE?",
      a: "Yes, you can provide your brandings and they can be incorporated for you."
    },
    {
      q: "BY WHAT TIME THE SYSTEM CAN BE PROVIDED?",
      a: "Within one week’s time"
    },
    {
      q: "CAN WE DO CUSTOMIZATION OVER THIS PRODUCT?",
      a: "Yes, customization can be done based on the request"
    }
  ];

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image: public/bg-contact.png with dark corporate gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-contact.png"
            alt="TaxInvoicePro Background"
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
          
          {/* Breadcrumb Navigation: Home -> Products -> ERP -> TaxInvoicePro */}
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/product/prod-desktop" className="hover:text-white transition-colors">ERP</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">TaxInvoicePro</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-8 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-6">
            TaxInvoicePro
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#overview"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              Request Solution Package
            </Link>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. OVERVIEW & FEATURES (Same layout as MultiSelect)            */}
      {/* ============================================================== */}
      <section id="overview" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Opening Paragraph Verbatim */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal">
              INTX2018 is a ahead of time ERP application which is a application which is combined with Inventory, Accounts and Taxation. The application is GST ready with calculation based on State, Central GST.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
            
            {/* Left Column: Image & Overview Paragraph */}
            <div className="space-y-6">
              
              {/* Product Image: intx.png */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#f8fafc] border border-gray-200/90 shadow-sm flex items-center justify-center overflow-hidden">
                <div className="relative w-full max-w-sm aspect-[16/10] flex items-center justify-center">
                  <Image
                    src="/intx.png"
                    alt="INTX ERP Application"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>

              {/* Second Paragraph Verbatim */}
              <div className="p-6 sm:p-7 rounded-2xl bg-sky-50/70 border border-[#3482b9]/30 space-y-3">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  INTX2018 is an advanced ERP application designed to streamline inventory, accounting, and taxation processes, with full GST compliance based on state and central tax calculations. It offers features like real-time stock tracking, purchase and sales management, automated reports, and customizable document printing, making it an ideal solution for efficient business operations.
                </p>
              </div>

            </div>

            {/* Right Column: Features of INTX (User's Exact Verbatim Copy) */}
            <div className="bg-[#f8fafc] p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm space-y-6">
              
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-1">
                  Features of INTX:
                </h3>
              </div>

              <div className="space-y-3.5">
                {/* Feature 1 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-slate-800 text-sm sm:text-base leading-relaxed">
                    Store Stock Inward, Outward, Return
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-slate-800 text-sm sm:text-base leading-relaxed">
                    Purchase Order, Purchase, Purchase Return, Quotation, Sales Invoice, Sales Return
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-slate-800 text-sm sm:text-base leading-relaxed">
                    Online current stock of the products and raw materials in manufacturing unit
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-slate-800 text-sm sm:text-base leading-relaxed">
                    Reorder level for the stocks
                  </p>
                </div>

                {/* Feature 5 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-slate-800 text-sm sm:text-base leading-relaxed">
                    Multiple GST ready printing of PO, Invoices, Quotations etc. with and without letterhead
                  </p>
                </div>

                {/* Feature 6 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-slate-800 text-sm sm:text-base leading-relaxed">
                    Various statistical &amp; analytical reports based on Accounts, Contacts &amp; Customers
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  ERP &amp; GST Ready
                </span>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#3482b9] hover:text-[#1f6595] uppercase tracking-wider inline-flex items-center gap-1"
                >
                  <span>Request Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2.5 CHECK OUR INTX ERP APPLICATION IN ACTION                   */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-24 bg-[#fbfcfd] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-[#3482b9] bg-[#3482b9]/10 mb-3">
              Screen Walkthroughs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Check Our INTX ERP application in Action
            </h2>
          </div>

          {/* 6 Images Grid (intx1.png to intx6.png) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { src: "/intx1.png", title: "Dashboard & Stock Overview" },
              { src: "/intx2.png", title: "Invoicing & Billing Engine" },
              { src: "/intx3.png", title: "Inventory & Material Flow" },
              { src: "/intx4.png", title: "Purchase & Order Tracking" },
              { src: "/intx5.png", title: "GST & Taxation Computation" },
              { src: "/intx6.png", title: "Financial & Ledger Analytics" }
            ].map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
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
                      setSelectedImage(img);
                    }}
                    className="text-[11px] font-extrabold uppercase tracking-wider text-white bg-[#3482b9] hover:bg-[#1f6595] px-3 py-1 rounded-full shadow-sm transition-all flex items-center gap-1 hover:scale-105"
                  >
                    <span>View</span>
                    <ZoomIn className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. INTERESTED IN SEEING HOW IT WORKS? CTA BANNER               */}
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
            INTX is a comprehensive ERP solution that integrates Inventory, Accounts, and Taxation, offering GST-compliant features for seamless stock management, purchasing, and invoicing.
          </p>

          <p className="text-lg sm:text-xl font-bold text-[#5ba6db] max-w-3xl mx-auto">
            Discover how INTX2018 can streamline your operations with GST-ready invoicing and real-time stock insights—book your demo today!
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
      {/* 4. FREQUENTLY ASKED QUESTIONS ACCORDION                        */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-semibold uppercase tracking-wider max-w-2xl mx-auto">
              WE ARE COMMITTED TO SATISFY ALL YOUR QUERIES AND LOOK FORWARDS TO YOUR VALUABLE FEEDBACK.
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
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base transition-colors"
                >
                  <span className="no-underline select-none uppercase tracking-wide">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 text-[#3482b9] ${openFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-gray-100 pt-4 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. LIGHTBOX / FULLSCREEN IMAGE MODAL                          */}
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
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-950/80 text-white">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3482b9] animate-pulse" />
                <h3 className="text-sm sm:text-base font-bold tracking-wide text-slate-100">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
                className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-red-400 transition-all focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Big Image Viewer Container */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] bg-slate-950/60 p-2 sm:p-4 flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 95vw, 1200px"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-white/10 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
              <span>Click outside or the close icon to dismiss</span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="px-4 py-1.5 bg-[#3482b9] hover:bg-[#1f6595] text-white font-bold rounded-full transition-colors text-xs uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
