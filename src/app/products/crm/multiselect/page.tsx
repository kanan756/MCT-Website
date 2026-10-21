"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Play, ArrowRight, ShieldCheck, CheckCircle2, ChevronDown } from "lucide-react";

export default function MultiselectProductPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "WHAT TECHNOLOGY HAS BEEN USED?",
      a: "JavaScript, C#, .Net, MS Dynamics"
    },
    {
      q: "WHAT DELIVERABLE WILL BE PROVIDED?",
      a: "Complete setup, functional document & user guide"
    },
    {
      q: "BY WHAT TIME THE SYSTEM CAN BE PROVIDED?",
      a: "Immediate"
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
            alt="MultiSelect Background"
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
          
          {/* Breadcrumb Navigation: Home -> Products -> CRM -> Multiselect */}
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/product/prod-crm" className="hover:text-white transition-colors">CRM</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Multiselect</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-8 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-6">
            MultiSelect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Option Set
            </span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#video-demo"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Video Demo</span>
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
      {/* 2. VERBATIM CONTENT & FEATURES                                 */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Opening Paragraph Verbatim */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal">
              This solution not only provides seamless integration for MultiSelectOptionSet functionality but also ensures that users can leverage it without extensive customization or technical expertise. Additionally, the solution enhances user experience by allowing intuitive selection of multiple values within a single field, improving data collection and reporting accuracy. With MCT IT Solution’s offering, businesses can easily align their CRM system with modern functionality, ensuring smoother workflows and more effective management of complex data.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
            
            {/* Left Column: Limitations & How MCT IT Solution Helps */}
            <div className="space-y-6">
              
              {/* Limitation 1 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800 block">
                  Current limitation for MultiSelect Option set in MS Dynamics CRM:
                </span>
                <p className="text-sm sm:text-base text-amber-950 leading-relaxed font-medium">
                  For all versions of Microsoft Dynamics CRM, the option-set field doesn’t allow users to select multiple values. At present selecting multiple values isn’t supported.
                </p>
              </div>

              {/* Limitation 2 / Context */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block">
                  MultiSelect Option Set
                </span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Dynamics 365 does provide multi-select option-set but any existing or earlier dynamics CRM solution even if upgraded, the field would not support multi-select option set and would still require creating a new field.
                </p>
              </div>

              {/* MCT IT Solution Helps */}
              <div className="p-6 sm:p-7 rounded-2xl bg-sky-50/70 border border-[#3482b9]/30 space-y-3">
                <h3 className="font-black text-slate-900 text-base sm:text-lg flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#3482b9]" />
                  <span>MCT IT Solution helps:</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  The solution is built in a way that Dynamics CRM 2016 system or upgraded 365 system is compatible to use this multi-select option-set feature easily, by just importing this solution in the CRM system.
                </p>
              </div>

            </div>

            {/* Right Column: Features with User's Exact Verbatim Copy */}
            <div className="bg-[#f8fafc] p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm space-y-6">
              
              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  Features:
                </h3>
              </div>

              <div className="space-y-4">
                {/* Feature 1 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-slate-800 text-sm sm:text-base leading-relaxed">
                    MultiSelectOptionset can be added to any entity in the CRM
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-slate-800 text-sm sm:text-base leading-relaxed">
                    MultiSelectOptionset can be imported
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-slate-800 text-sm sm:text-base leading-relaxed">
                    User can put the MultiSelectOptionset control on any field in any entity of the CRM and can achieve multi selection.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. VIDEO DEMO SECTION                                          */}
      {/* ============================================================== */}
      <section id="video-demo" className="py-20 bg-[#fbfcfd] scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Watch MultiSelect Option Set in Action
            </h2>
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
            Experience the power of seamless MultiSelect Option Sets in your Dynamics CRM with MCT IT Solution. Our solution makes it simple to enable multi-selection capabilities across any entity, boosting productivity and improving data management.
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
      {/* 5. FREQUENTLY ASKED QUESTIONS                                  */}
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

    </div>
  );
}
