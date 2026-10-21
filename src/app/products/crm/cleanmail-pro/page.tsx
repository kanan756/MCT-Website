"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Play, ArrowRight, ShieldCheck, CheckCircle2, ExternalLink } from "lucide-react";

export default function CleanMailProPage() {
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
            alt="CleanMail Pro Background"
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
          
          {/* Breadcrumb Navigation: Home -> Products -> CRM -> CleanMail Pro */}
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/product/prod-crm" className="hover:text-white transition-colors">CRM</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">CleanMail Pro</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-8 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-6">
            CleanMail Pro
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#video-demo"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Video Demo</span>
            </a>
            <a
              href="http://cleanmail.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all inline-flex items-center gap-2"
            >
              <span>Visit cleanmail.pro</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. VERBATIM CONTENT & SECTIONS (Same layout as MultiSelect)     */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Opening Paragraph Verbatim */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal">
              CleanMail Pro is a powerful email validation tool designed specifically for Microsoft Dynamics 365 users. It automatically scans and removes invalid or non-existent email addresses from your contact lists, ensuring that your email campaigns are sent to accurate, deliverable addresses. This process helps enhance email deliverability by reducing bounce rates, which is crucial for maintaining a good sender reputation with email service providers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
            
            {/* Left Column: Seamless CRM Integration & Microsoft Store Availability */}
            <div className="space-y-6">
              
              {/* Integration Paragraph */}
              <div className="p-6 sm:p-7 rounded-2xl bg-sky-50/70 border border-[#3482b9]/30 space-y-3">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  The tool works seamlessly with Microsoft Dynamics 365, integrating directly into your CRM system. This means no additional manual steps are required—CleanMail Pro operates in real-time, continuously validating and cleaning your email lists as new contacts are added or as updates are made. By doing so, it prevents the accumulation of outdated or incorrect data, allowing you to focus on sending messages to the right people at the right time.
                </p>
              </div>

              {/* Microsoft Store & Official Site Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#3482b9] block">
                  CleanMail Pro is now available on Microsoft Store
                </span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <a
                    href="http://cleanmail.pro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#3482b9] underline hover:text-[#1f6595]"
                  >
                    CleanMail Pro
                  </a>{" "}
                  can be easily accessed and downloaded through our official website at{" "}
                  <a
                    href="http://cleanmail.pro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#3482b9] underline hover:text-[#1f6595]"
                  >
                    cleanmail.pro
                  </a>
                  . By visiting official site, you can quickly obtain the tool and begin integrating it with your Microsoft Dynamics 365 system, allowing you to enhance the effectiveness of your email campaigns and improve overall deliverability.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-1">
                  Official website provides all the necessary information and resources to help you get started with CleanMail Pro, ensuring a smooth and efficient setup process.
                </p>
              </div>

            </div>

            {/* Right Column: Boost Your Campaigns with CleanMail Pro */}
            <div className="bg-[#f8fafc] p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm space-y-6">
              
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Boost Your Campaigns with CleanMail Pro
                </h3>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-medium">
                    This tool is incredibly useful for marketers and businesses that rely on email campaigns to engage customers, generate leads, or communicate with clients. By ensuring that only valid email addresses are used, it significantly reduces the risk of emails being flagged as spam or undelivered, which can negatively impact marketing performance and overall business communication.
                  </p>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-medium">
                    In addition to improving deliverability, this solution saves time and effort by automating the email validation process. Instead of manually checking or removing bad email addresses, the tool handles this for you, freeing up resources to focus on creating and optimizing campaigns. With its user-friendly interface and seamless integration, it is an indispensable asset for businesses looking to improve the quality of their email lists and achieve better marketing outcomes.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
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

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. VIDEO DEMO SECTION                                          */}
      {/* ============================================================== */}
      <section id="video-demo" className="py-20 bg-[#fbfcfd] scroll-mt-24 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Watch CleanMail Pro in Action
            </h2>
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

    </div>
  );
}
