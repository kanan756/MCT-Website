"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Layers,
  ArrowRight,
  Database,
  Cpu,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  Check,
  Search,
  Code,
  Monitor,
  TrendingUp,
  Briefcase,
  FileText,
  ArrowUpRight
} from "lucide-react";

export default function ProductsPage() {
  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO SECTION (Our exact Home/Contact dark corporate theme)   */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Overlay: public/bg-product.png */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-product.png"
            alt="MCT Products Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/85 to-[#0b1b3d]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/95 via-transparent to-[#0b1b3d]/40" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3482b9]/25 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#1d4ed8]/20 rounded-full blur-[130px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Products</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-8 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-6">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Enterprise Products
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            Specialized extensions, productivity plug-ins, and intelligent automation built to enhance Microsoft Dynamics 365, ERP platforms, and cloud environments.
          </p>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. THREE CORE PRODUCT PILLARS (CRM, ERP, AI)                   */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* 1. CRM CARD */}
            <div id="crm" className="flex flex-col rounded-3xl bg-[#f8fafc] border border-gray-200/90 hover:border-[#3482b9]/40 hover:shadow-2xl transition-all duration-300 group overflow-hidden justify-between">
              <div>
                {/* Large Product Image Container */}
                <Link href="/product/prod-crm/" className="block w-full relative aspect-[16/10] bg-white border-b border-gray-100 p-3 sm:p-4 overflow-hidden">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/crm.png"
                      alt="CRM Solutions"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </Link>

                <div className="p-7 sm:p-8 text-center flex flex-col items-center">
                  <Link href="/product/prod-crm/">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#3482b9] transition-colors">
                      CRM
                    </h3>
                  </Link>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    A good CRM is a prerequisite for any business as customers nowadays are more enlightened and demanding. Product-centric approach has now become obsolete.
                  </p>
                </div>
              </div>

              <div className="pb-8 pt-2 px-8 flex justify-center">
                <Link
                  href="/product/prod-crm/"
                  className="w-full sm:w-auto text-center px-8 py-3 rounded-full border-2 border-[#3482b9] text-[#3482b9] hover:bg-[#3482b9] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
                >
                  MORE INFO
                </Link>
              </div>
            </div>

            {/* 2. ERP CARD */}
            <div id="erp" className="flex flex-col rounded-3xl bg-[#f8fafc] border border-gray-200/90 hover:border-[#3482b9]/40 hover:shadow-2xl transition-all duration-300 group overflow-hidden justify-between">
              <div>
                {/* Large Product Image Container */}
                <Link href="/product/prod-desktop" className="block w-full relative aspect-[16/10] bg-white border-b border-gray-100 p-3 sm:p-4 overflow-hidden">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/erp.png"
                      alt="ERP Solutions"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </Link>

                <div className="p-7 sm:p-8 text-center flex flex-col items-center">
                  <Link href="/product/prod-desktop">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#3482b9] transition-colors">
                      ERP
                    </h3>
                  </Link>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    We offer platform-specific and cross-platform ERP application development services to transform your software idea into a market success. Our applications are lightweight, easy to deploy, update, and secure.
                  </p>
                </div>
              </div>

              <div className="pb-8 pt-2 px-8 flex justify-center">
                <Link
                  href="/product/prod-desktop"
                  className="w-full sm:w-auto text-center px-8 py-3 rounded-full border-2 border-[#3482b9] text-[#3482b9] hover:bg-[#3482b9] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
                >
                  MORE INFO
                </Link>
              </div>
            </div>

            {/* 3. AI CARD */}
            <div className="flex flex-col rounded-3xl bg-[#f8fafc] border border-gray-200/90 hover:border-[#3482b9]/40 hover:shadow-2xl transition-all duration-300 group overflow-hidden justify-between">
              <div>
                {/* Large Product Image Container */}
                <div className="w-full relative aspect-[16/10] bg-white border-b border-gray-100 flex items-center justify-center p-3 sm:p-4 overflow-hidden">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/ai.png"
                      alt="AI Solutions - IntelliKB"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>

                <div className="p-7 sm:p-8 text-center flex flex-col items-center">
                  <Link href="/product/prod-ai">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#3482b9] transition-colors">
                      AI
                    </h3>
                  </Link>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    <strong className="text-slate-800">IntelliKB – AI-Powered Knowledge Management Chatbot:</strong> Effortlessly access and manage organizational knowledge with AI-driven document retrieval, summarization, and secure role-based access.
                  </p>
                </div>
              </div>

              <div className="pb-8 pt-2 px-8 flex justify-center">
                <Link
                  href="/product/prod-ai"
                  className="w-full sm:w-auto text-center px-8 py-3 rounded-full border-2 border-[#3482b9] text-[#3482b9] hover:bg-[#3482b9] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
                >
                  MORE INFO
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2.5 CUSTOM CRM SYSTEMS FOR YOUR SUCCESS (Trendy Layout)        */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-24 lg:py-28 bg-[#fbfcfd] border-b border-gray-100 relative overflow-hidden">
        {/* Soft Ambient Background Elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#3482b9]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3482b9]/10 border border-[#3482b9]/25 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3482b9]">
                <Sparkles className="w-4 h-4 text-[#3482b9]" />
                <span>Enterprise Excellence</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
                Custom CRM Systems{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f6595] to-[#3482b9]">
                  for Your Success
                </span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Our customer CRM systems are designed to address the unique needs to your business, optimizing customer relationship management with intuitive features and seamless workflows. Trusted by business across healthcare, retail, finance, property management, our solutions have helped clients achieve up to 30% increase in efficiency while enhancing customer satisfaction and driving sustainable growth.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Consult an Expert</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products/crm/multiselect"
                  className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase text-slate-700 hover:text-[#3482b9] bg-white border border-gray-200 hover:border-[#3482b9]/40 transition-all shadow-sm"
                >
                  Explore CRM Add-ons
                </Link>
              </div>
            </div>

            {/* Right Column: Dynamic Animated Image with Ambient Glows */}
            <div className="lg:col-span-5 flex justify-center relative">
              
              {/* Animated Ambient Blur Glow behind the image */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#3482b9]/25 rounded-full blur-3xl animate-pulse pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />

              {/* Main Image with Smooth Floating Micro-animation & Organic Rounded Shape */}
              <div className="relative w-full max-w-lg aspect-[16/11] sm:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#3482b9]/25 transition-all duration-700 hover:shadow-[#3482b9]/40 group hover:scale-[1.02]">
                <Image
                  src="/custom crm sytems.png"
                  alt="Custom CRM Systems for Your Success"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Subtle Glassmorphic Overlay Gradient on bottom edge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/30 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2.6 BUILDING CUSTOM CRM, DESKTOP, AND WEB APPLICATIONS        */}
      {/* ============================================================== */}
      <section className="relative py-20 sm:py-24 lg:py-28 bg-[#132852] text-white overflow-hidden border-y-4 border-[#3482b9]">
        {/* Background Image: public/bg-product1.png with lighter, vibrant overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-product1.png"
            alt="Custom Application Engineering"
            fill
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11244b]/85 via-[#18366e]/75 to-[#11244b]/85" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3482b9]/30 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#2563eb]/25 rounded-full blur-[130px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-7">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Building Custom CRM, Desktop, and Web Applications:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
                Tailored Solutions for Your Business Needs
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl mx-auto">
              Creating custom systems and applications requires a perfect blend of expertise, innovation and understanding your business. At MCT, we combine data-driven analysis, business process optimization, and intuitive user experience to craft solutions that enhance customer interactions and boost sales growth.
            </p>

            {/* 3 Responsive Cards with 100% Original Verbatim Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
              {/* Card 1 */}
              <div className="group relative rounded-2xl bg-white/[0.05] border border-white/10 p-6 sm:p-7 backdrop-blur-md hover:bg-white/[0.08] hover:border-[#3482b9]/60 transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3482b9]/20 border border-[#3482b9]/40 flex items-center justify-center text-[#5ba6db] group-hover:scale-110 transition-transform">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    Our desktop applications deliver 40% faster performance, exceptional security and integration with existing infrastructure. For web-based solutions, we use the latest front-end technologies, providing scalable, responsive systems that ensure accessibility on any device.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#5ba6db]">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>Desktop & Web</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative rounded-2xl bg-white/[0.05] border border-white/10 p-6 sm:p-7 backdrop-blur-md hover:bg-white/[0.08] hover:border-[#3482b9]/60 transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3482b9]/20 border border-[#3482b9]/40 flex items-center justify-center text-[#5ba6db] group-hover:scale-110 transition-transform">
                    <Layers className="w-6 h-6" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    Leveraging frameworks like Salesforce, Microsoft Dynamics and tools like React and Angular, our CRM systems drive measurable results, increasing operational efficiency and customer satisfaction. Whether it’s C#, Java, or responsive design, we prioritize superior functionality and user engagement.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#5ba6db]">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>Enterprise Frameworks</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative rounded-2xl bg-white/[0.05] border border-white/10 p-6 sm:p-7 backdrop-blur-md hover:bg-white/[0.08] hover:border-[#3482b9]/60 transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3482b9]/20 border border-[#3482b9]/40 flex items-center justify-center text-[#5ba6db] group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    With an Agile approach, through an iterative and incremental value delivery (Sprints), continuous improvement and frequent and diligent feedback we maximize the ROI and ensure that customers get what they needed in the first place.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#5ba6db]">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>Agile Value Delivery</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105"
              >
                <span>Discuss Your Project with MCT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. CASE STUDIES SECTION (MIAC Finance, Customer360, CDM, Musicometre) */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-[#3482b9] bg-[#3482b9]/10 mb-3">
              Real-World Impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Case Studies
            </h2>
          </div>

          {/* 4 Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* 1. MIAC Finance */}
            <div className="group rounded-3xl bg-[#f8fafc] border border-gray-200/90 hover:border-[#3482b9]/60 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/10 border border-[#3482b9]/20 flex items-center justify-center text-[#3482b9] mb-6 group-hover:bg-[#3482b9] group-hover:text-white transition-all">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#3482b9] transition-colors mb-4">
                  MIAC Finance
                </h3>
              </div>
              <div className="pt-6 border-t border-gray-200/70 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                <span>Enterprise Case</span>
                <ArrowRight className="w-4 h-4 text-[#3482b9] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 2. Customer360 */}
            <div className="group rounded-3xl bg-[#f8fafc] border border-gray-200/90 hover:border-[#3482b9]/60 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/10 border border-[#3482b9]/20 flex items-center justify-center text-[#3482b9] mb-6 group-hover:bg-[#3482b9] group-hover:text-white transition-all">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#3482b9] transition-colors mb-4">
                  Customer360
                </h3>
              </div>
              <div className="pt-6 border-t border-gray-200/70 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                <span>Enterprise Case</span>
                <ArrowRight className="w-4 h-4 text-[#3482b9] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 3. CDM(R2D2s) */}
            <div className="group rounded-3xl bg-[#f8fafc] border border-gray-200/90 hover:border-[#3482b9]/60 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/10 border border-[#3482b9]/20 flex items-center justify-center text-[#3482b9] mb-6 group-hover:bg-[#3482b9] group-hover:text-white transition-all">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#3482b9] transition-colors mb-4">
                  CDM(R2D2s)
                </h3>
              </div>
              <div className="pt-6 border-t border-gray-200/70 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                <span>Enterprise Case</span>
                <ArrowRight className="w-4 h-4 text-[#3482b9] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 4. Musicometre */}
            <div className="group rounded-3xl bg-[#f8fafc] border border-gray-200/90 hover:border-[#3482b9]/60 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/10 border border-[#3482b9]/20 flex items-center justify-center text-[#3482b9] mb-6 group-hover:bg-[#3482b9] group-hover:text-white transition-all">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#3482b9] transition-colors mb-4">
                  Musicometre
                </h3>
              </div>
              <div className="pt-6 border-t border-gray-200/70 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                <span>Enterprise Case</span>
                <ArrowRight className="w-4 h-4 text-[#3482b9] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
