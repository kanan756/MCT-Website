"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function ProdCrmPage() {
  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image with rich dark corporate gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-product.png"
            alt="CRM Background"
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
          
          {/* Breadcrumb Navigation matching screenshot: Home -> Products -> CRM */}
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">CRM</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-8 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-4">
            CRM
          </h1>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. OVERVIEW: CUSTOM CRM AND ERP ENHANCEMENTS FOR MICROSOFT DYNAMICS */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1d2d5b] tracking-tight leading-tight uppercase">
            CUSTOM CRM AND ERP ENHANCEMENTS FOR MICROSOFT DYNAMICS
          </h2>

          <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed text-left sm:text-center max-w-4xl mx-auto font-normal">
            <p>
              Our company specializes in enhancing CRM and ERP systems, with a primary focus on Microsoft Dynamics. We offer a range of solutions designed to optimize the performance, efficiency, and functionality of Dynamics 365. From custom integrations to advanced automation, our tools help businesses streamline their operations, improve customer relationships, and drive better decision making.
            </p>

            <p>
              With a deep understanding of Dynamics&apos; capabilities, we deliver tailored solutions that meet the unique needs of each organization, ensuring a seamless and productive experience. Whether you&apos;re looking to enhance sales processes, improve financial management, or integrate third party tools, our solutions empower your business to achieve its goals with greater ease and efficiency.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. PRODUCT SHOWCASE: MULTISELECT & CLEANMAIL PRO               */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 bg-[#fbfcfd]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">

            {/* PRODUCT 1: MULTISELECT */}
            <div className="rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-2xl hover:border-[#3482b9]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              
              <div>
                {/* Visual Header / Banner matching AppSource badge style */}
                <div className="w-full bg-[#0078d4] text-white p-8 sm:p-10 flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden group-hover:bg-[#006bbd] transition-colors">
                  <div className="flex items-center gap-3">
                    {/* Microsoft 4-square icon */}
                    <div className="grid grid-cols-2 gap-1 w-8 h-8">
                      <div className="w-3.5 h-3.5 bg-[#f25022]" />
                      <div className="w-3.5 h-3.5 bg-[#7fba00]" />
                      <div className="w-3.5 h-3.5 bg-[#00a4ef]" />
                      <div className="w-3.5 h-3.5 bg-[#ffb900]" />
                    </div>
                    <div className="text-left leading-tight">
                      <div className="text-[10px] uppercase tracking-widest font-semibold text-white/80">Available on</div>
                      <div className="text-xl sm:text-2xl font-bold tracking-tight">Microsoft AppSource</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 text-center flex flex-col items-center">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-[#3482b9] transition-colors">
                    MULTISELECT
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    For all versions of Microsoft Dynamics CRM, the option set field doesn&apos;t allow users to select multiple values. This product has solution to this problem. This product is completely developed to apply wherever you need to use multiselect in your application development.
                  </p>
                </div>
              </div>

              {/* Bottom Button */}
              <div className="pb-8 pt-2 px-8 flex justify-center">
                <Link
                  href="/products/crm/multiselect"
                  className="px-8 py-3 rounded-full border-2 border-[#3482b9] text-[#3482b9] hover:bg-[#3482b9] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>MORE INFO</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* PRODUCT 2: CLEANMAIL PRO */}
            <div className="rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-2xl hover:border-[#3482b9]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              
              <div>
                {/* Visual Header / CleanMailPro Banner */}
                <div className="w-full bg-[#f8fafc] border-b border-gray-100 p-8 sm:p-10 flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden group-hover:bg-slate-100 transition-colors">
                  <div className="relative w-48 h-28 flex items-center justify-center">
                    <Image
                      src="/cleanmailpro.png"
                      alt="CleanMailPro"
                      width={180}
                      height={90}
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 text-center flex flex-col items-center">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-[#3482b9] transition-colors">
                    CLEANMAIL PRO
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    CleanMail Pro is a simple email validation tool that integrates with Microsoft Dynamics 365. It automatically removes invalid email addresses, boosting deliverability and reducing bounce rates. With real time validation, CleanMail Pro enhances your email campaigns, saving time and improving results.
                  </p>
                </div>
              </div>

              {/* Bottom Button */}
              <div className="pb-8 pt-2 px-8 flex justify-center">
                <Link
                  href="/products/crm/cleanmail-pro"
                  className="px-8 py-3 rounded-full border-2 border-[#3482b9] text-[#3482b9] hover:bg-[#3482b9] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>MORE INFO</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
