"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Users,
  Compass,
  Eye,
  Laptop,
  Globe,
  BarChart2,
  CheckCircle2,
  TrendingUp,
  Mail,
  Layers,
  Rocket,
  Clock,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  const whyChoosePoints = [
    {
      title: "Comprehensive Process",
      desc: "From planning and requirements definition to development, testing and delivery, we ensure every project meets and exceeds expectations.",
    },
    {
      title: "Certified Expertise",
      desc: "Our team specializes in Microsoft Dynamics 365, Business Central, Power Platform and Agile, bringing years of experience and precision to every solution.",
    },
    {
      title: "Tailored Efficiency",
      desc: "Custom solutions designed to enhance operational efficiency across multiple devices and platforms.",
    },
    {
      title: "Cross-Effective Innovation",
      desc: "Creative strategies that reduce development costs while maximizing value and ROI.",
    },
    {
      title: "Proven Results",
      desc: "Trusted by worldwide clients to deliver solutions that enhance productivity and transform businesses, resulting in measurable growth and a high ROI.",
    },
    {
      title: "Data-driven Decision-Making",
      desc: "We do not work with assumptions or gut feelings, we rely on frequent and diligent feedback from our clients to minimize the risk and deliver what they need in the first place.",
    },
  ];

  const dynamicsExperts = [
    {
      title: "Power Pages",
      desc: "Power Pages enables businesses to create dynamic, scalable websites with responsive designs and easy data integration.",
      icon: Globe,
    },
    {
      title: "Power Apps",
      desc: "Power Apps allows businesses to create custom apps that streamline processes and improve employee productivity.",
      icon: Laptop,
    },
    {
      title: "Business Central",
      desc: "Business Central integrates key business processes like finance, operations, and sales into one unified solution.",
      icon: BarChart2,
    },
    {
      title: "Customer Engagement",
      desc: "Customer Engagement helps businesses build strong, lasting relationships through personalized interactions.",
      icon: Users,
    },
  ];

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO BANNER (Identical UI & tokens as Home, Products, Contact)*/}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image: public/bg-aboutus.png */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt="About MCT IT Solutions Background"
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
          
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">About Us</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-8 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Us
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            A fast-emerging company founded by seasoned industry professionals, delivering tailored Microsoft Dynamics 365, Business Central, and Power Platform solutions.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. OVERVIEW: TWO-COLUMN CARDS WITH EXACT REFERENCE CONTENT      */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:pt-24 pb-28 sm:pb-36 md:pb-44 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch max-w-6xl mx-auto">
            
            {/* Top Left: Our Business Philosophy */}
            <div className="bg-[#f8fafc] p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#3482b9]/40 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                  OUR BUSINESS PHILOSOPHY
                </h2>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  <p>
                    At MCT IT Solutions, we believe that our clients success defines our own. This belief drives us to create cutting-edge, personalized solutions tailored to the unique challenges of today’s fast-paced marketplace. With a focus on collaboration, transparency and trust, we build strong relationships that help us truly understand our clients needs and deliver exceptional value.
                  </p>
                  <p>
                    Our dedication to continuous improvement ensures that your solutions remain adaptable and future-ready. By integrating advanced technologies and industry best practices, we empower businesses to stay ahead of trends, fostering a culture of innovation and excellence.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200/70 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#3482b9]" />
                <span>Collaboration • Transparency • Trust</span>
              </div>
            </div>

            {/* Top Right: MCT IT Solutions Pvt Ltd (Company Overview) */}
            <div className="bg-[#f8fafc] p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#3482b9]/40 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#3482b9] bg-[#3482b9]/10">
                  Company Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                  MCT IT SOLUTIONS PVT LTD
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  MCT IT Solutions Pvt Ltd is a fast-emerging company founded by seasoned industry professionals. We specialize in Microsoft Dynamics 365, Business Central, and the Power Platform providing comprehensive CRM and ERP solutions. Our team is our greatest asset, with a passion for delivering impactful and innovative solutions that drive client success.
                </p>
              </div>

              {/* Styled Quote Box matching reference */}
              <div className="p-6 rounded-2xl bg-white border-l-4 border-[#3482b9] shadow-sm relative">
                <p className="text-slate-800 italic text-sm sm:text-base font-semibold leading-relaxed">
                  “...Empowering success through innovative solutions, collaboration, and continuous improvement...”
                </p>
                <div className="text-right text-[#3482b9] text-3xl font-serif leading-none mt-2 select-none">
                  ””
                </div>
              </div>
            </div>

            {/* Bottom Left: SERVICES WE PROVIDE */}
            <div className="bg-[#f8fafc] p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#3482b9]/40 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                  SERVICES WE PROVIDE
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Comprehensive expertise in enterprise Microsoft platforms to transform and modernize your business operations:
                </p>

                {/* serviceweprovide.png image container */}
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-white border border-gray-100 p-2 shadow-sm flex items-center justify-center">
                  <Image
                    src="/serviceweprovide.png"
                    alt="Services We Provide"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200/70 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                <span>Enterprise Grade</span>
                <Link href="/services" className="text-[#3482b9] hover:underline flex items-center gap-1 font-semibold">
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Bottom Right: OUR FUTURE VISION */}
            <div className="bg-[#f8fafc] p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#3482b9]/40 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                  OUR FUTURE VISION
                </h2>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  <p>
                    As we grow, MCT IT Solutions is recognized for our commitment to innovation, technical excellence and client success. Our track record includes <span className="bg-[#3482b9] text-white px-2 py-0.5 rounded font-semibold text-xs sm:text-sm">20% operational efficiency improvement for clients, enhanced system reliability and seamless integrations</span> that transform workflows.
                  </p>
                  <p>
                    We focus on developing meaningful partnerships while nurturing talent within our expert team. Our mission is to empower customers to achieve greater market success with solutions tailored to their goals. Whether you’re business owner seeking to optimize operations, a potential employee ready to innovate, or a partner looking to collaborate, we welcome you to join us on this exciting journey.
                  </p>
                </div>
              </div>

              {/* Metric Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#3482b9]/25 shadow-sm flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#3482b9] text-white flex items-center justify-center font-black text-base shrink-0">
                  20%
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-tight">Operational Efficiency Improvement</div>
                  <div className="text-xs text-slate-500">Delivered across client enterprise workflows</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. LAPTOP SHOWCASE BANNER (HALF IN / HALF OUT OF CONTAINER)    */}
      {/* ============================================================== */}
      <section className="relative bg-[#f8fafc] border-b border-gray-100 pt-0 pb-20 sm:pb-28">
        
        {/* Floating Overlap Banner: adjusted size and margins */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-20 sm:-mt-28 md:-mt-36 mb-10 sm:mb-14">
          <div className="relative w-full max-w-2xl sm:max-w-3xl mx-auto aspect-[16/8] sm:aspect-[16/7] md:aspect-[16/8] flex items-center justify-center drop-shadow-xl">
            <Image
              src="/aboutsusbanner.png"
              alt="Dynamics 365 & Power Platform Business Process Showcase"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
          
          {/* Title Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
              DYNAMICS 365 SOLUTION EXPERTS
            </h2>
          </div>

          {/* 4 Cards Matching Reference Screenshot with Circular Badges & 'MORE INFO' */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
            {dynamicsExperts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#3482b9]/40 transition-all duration-300 p-6 flex flex-col items-center text-center justify-between space-y-6 group"
                >
                  <div className="space-y-4 flex flex-col items-center w-full">
                    {/* Circle Icon Badge matching website theme #3482b9 */}
                    <div className="w-14 h-14 rounded-2xl bg-[#3482b9]/10 border border-[#3482b9]/25 text-[#3482b9] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#3482b9] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* MORE INFO Button matching reference screenshot */}
                  <div className="pt-2 w-full flex justify-center">
                    <Link
                      href="/services"
                      className="px-6 py-2 rounded-md border border-[#3482b9] text-[#3482b9] hover:bg-[#3482b9] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs"
                    >
                      MORE INFO
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. WHY CHOOSE MCT IT SOLUTIONS                                 */}
      {/* ============================================================== */}
      <section className="relative py-20 sm:py-24 bg-white border-b border-gray-100 overflow-hidden">
        {/* Subtle world map / grid background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14 sm:space-y-16">
          
          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black text-slate-900 tracking-tight uppercase leading-tight">
              Transforming ideas into impactful solutions for a brighter business future.
            </h2>
          </div>

          {/* Two-Column Grid: Points on the left, Intro & Image on the right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
            
            {/* Left Column (7 cols): Points List */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Highlight Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs">
                WHY CHOOSE MCT IT SOLUTIONS?
              </div>

              {/* 6 Bullet Points with Chart/Growth Icon */}
              <div className="space-y-5 pt-2">
                {whyChoosePoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 group">
                    <div className="w-5 h-5 rounded-md bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#3482b9] group-hover:text-white transition-colors">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      <strong className="text-slate-900 font-bold">{item.title}</strong>
                      <span className="text-slate-500"> – </span>
                      <span>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column (5 cols): Intro paragraph + Why Choose MCT IT Solutions Graphic */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-start">
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                At MCT IT Solutions, we transform complex business challenges into innovative solutions by leveraging our expertise in Microsoft Dynamics 365 and Business Central. Our streamlined approach combines technical proficiency with a deep understanding of client needs to deliver results that drive efficiency, innovation and growth.
              </p>

              {/* Graphic Banner Card: Native 16:9 with full visibility on all screens */}
              <ScrollReveal direction="right" duration={800}>
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-gray-200/80 bg-white group hover:shadow-xl hover:border-[#3482b9]/50 transition-all duration-300">
                  <Image
                    src="/Why Choose MCT IT Solutions.png"
                    alt="Why Choose MCT IT Solutions - Reliable Solutions. Stronger Business. Lasting Impact."
                    fill
                    className="object-contain sm:object-cover sm:object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </ScrollReveal>

            </div>

          </div>

          {/* Interactive USP Delivery Model Banner */}
          <div className="pt-10 border-t border-gray-100 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#3482b9] bg-sky-50 px-3.5 py-1.5 rounded-full border border-[#3482b9]/20">
                The MCT Risk-Free Advantage
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                How Our Delivery Model Protects Your Investment
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="p-6 rounded-2xl bg-[#0b1b3d] text-white border border-[#3482b9]/40 shadow-lg relative overflow-hidden group hover:border-[#3482b9] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#3482b9]/20 text-[#5ba6db] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#3482b9] group-hover:text-white transition-all">
                  <Rocket className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold text-sky-400 uppercase tracking-widest mb-1">Pre-Contract Validation</div>
                <h4 className="text-base font-black text-white mb-2">5–7 Day Miniature POC</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Experience a working prototype with your real data schemas before signing large commitments. Zero surprise risk.
                </p>
                <Link
                  href="/contact?type=poc"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5ba6db] hover:text-white transition-colors"
                >
                  <span>Request miniature POC</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl bg-[#0b1b3d] text-white border border-[#3482b9]/40 shadow-lg relative overflow-hidden group hover:border-[#3482b9] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#3482b9]/20 text-[#5ba6db] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#3482b9] group-hover:text-white transition-all">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold text-sky-400 uppercase tracking-widest mb-1">Agile Acceleration</div>
                <h4 className="text-base font-black text-white mb-2">2x Faster Turnaround</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Leverage our pre-built Business Central AL libraries and Power Automate connectors to launch twice as fast.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5ba6db] hover:text-white transition-colors"
                >
                  <span>Explore sprint model</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-2xl bg-[#0b1b3d] text-white border border-[#3482b9]/40 shadow-lg relative overflow-hidden group hover:border-[#3482b9] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#3482b9]/20 text-[#5ba6db] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#3482b9] group-hover:text-white transition-all">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold text-sky-400 uppercase tracking-widest mb-1">Enterprise SLA Guarantee</div>
                <h4 className="text-base font-black text-white mb-2">&lt; 2–4 Hr P0/P1 SLA</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Dedicated incident command bridge responds within hours for critical pipeline blockers, guaranteed.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5ba6db] hover:text-white transition-colors"
                >
                  <span>View support terms</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. AGILE SOFTWARE DEVELOPMENT                                  */}
      {/* ============================================================== */}
      <section className="relative py-20 sm:py-24 bg-[#f8fafc] border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Image with Subtle Hover Effect and Rounded Frame */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal direction="left" duration={800}>
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-gray-200/90 bg-white group hover:shadow-2xl hover:border-[#3482b9]/40 transition-all duration-300">
                  <Image
                    src="/agile-software-development.jpg"
                    alt="MCT IT Solutions Agile Software Development Team"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Title, Paragraphs, and VIEW PROJECTS Button */}
            <div className="lg:col-span-6 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase leading-tight">
                  AGILE SOFTWARE DEVELOPMENT
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  The Agile SDLC model combines iterative and incremental processes, focusing on adaptability and customer satisfaction through rapid software delivery. Empowering self-organized teams and fostering cross-functionality is a top priority in the Agile Manifesto, encouraging teamwork, collaboration, and high-value delivery.
                </p>
                <p>
                  Agile values people over processes and tools, emphasizing individuals, interactions, and working software over comprehensive documentation. Customer collaboration ensures continuous refinement of requirements, promoting adaptability and flexibility throughout the project. Agile embraces change by responding to shifting project scopes, ensuring client-centric solutions that maximize user satisfaction through regular feedback and adaptation.
                </p>
              </div>

              {/* View Projects CTA Button matching reference */}
              <div className="pt-2">
                <Link
                  href="https://www.miracle-cloudtechnology.com/projects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-2.5 rounded-md border-2 border-[#3482b9] text-[#3482b9] hover:bg-[#3482b9] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm inline-flex items-center gap-2 group"
                >
                  <span>VIEW PROJECTS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. OUR MISSION                                                 */}
      {/* ============================================================== */}
      <section className="relative py-20 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (6 cols): Title, Intro, and 5 Checklist Points */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase leading-tight">
                  OUR MISSION
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Our mission at MCT IT Solutions is to deliver innovative, adaptable solutions that empower businesses and drive success. By leveraging cutting-edge technologies like Microsoft Dynamics 365, Business Central, and the Power Platform, we address unique client challenges with precision and care.
              </p>

              {/* 5 Mission Checklist Points */}
              <div className="space-y-3.5 pt-2">
                {[
                  "We provide personalized CRM and ERP solutions tailored to client needs.",
                  "We foster collaboration, transparency, and build strong, lasting relationships with clients.",
                  "Our commitment to continuous improvement ensures flexible, future-ready solutions.",
                  "We focus on staying ahead of emerging market trends to offer exceptional value.",
                  "Our ultimate goal is to drive customer success through innovation, service, and value.",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 rounded-md bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#3482b9] group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column (6 cols): Our Mission Graphic - Full 16:9 Aspect Ratio with Zero Cropping */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-gray-200/90 bg-slate-900 group hover:shadow-2xl hover:border-[#3482b9]/40 transition-all duration-300">
                <Image
                  src="/ourmission.png"
                  alt="MCT IT Solutions - Our Mission"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. MEET THE EXPERTS BEHIND OUR SUCCESS                         */}
      {/* ============================================================== */}
      <section className="relative py-24 sm:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image: public/meetourexpert.png with light overlay so the hands/team image is clearly visible */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/meetourexpert.png"
            alt="Meet the Experts Behind Our Success Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Lightened overlay so the background image details are crisp and visible */}
          <div className="absolute inset-0 bg-[#0b1b3d]/35 backdrop-brightness-[0.85]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/50 via-transparent to-[#0b1b3d]/55" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (5 cols): Single Prominent Leader Card - Ravi Brahmbhatt */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              {/* Leader Card: Ravi Brahmbhatt */}
              <div className="w-full max-w-sm rounded-3xl bg-[#0b1b3d]/55 backdrop-blur-md border border-white/30 p-8 flex flex-col items-center text-center space-y-5 hover:bg-[#0b1b3d]/70 hover:border-[#3482b9] transition-all duration-300 shadow-2xl group">
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/ravi-brahmbhatt.png"
                    alt="Ravi Brahmbhatt"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl font-black text-white tracking-wide uppercase drop-shadow-sm">
                    RAVI BRAHMBHATT
                  </h3>
                  <p className="text-sm text-slate-200 font-semibold drop-shadow-sm">
                    Founder India, Chairman &amp; CEO
                  </p>
                </div>
                <a
                  href="mailto:rmb@miraclecloud-technology.com"
                  className="text-xs font-semibold text-[#8dc7f0] hover:text-white transition-colors flex items-center gap-2 break-all pt-2 drop-shadow-sm"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#3482b9]" />
                  <span>rmb@miraclecloud-technology.com</span>
                </a>
              </div>
            </div>

            {/* Right Column (7 cols): Title, Description, and OUR TEAM CTA button with high-contrast text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start bg-[#0b1b3d]/30 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none p-6 lg:p-0 rounded-2xl">
              
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase leading-tight drop-shadow-md">
                  MEET THE EXPERTS BEHIND OUR SUCCESS
                </h2>
              </div>

              <div className="space-y-4 text-slate-100 text-xs sm:text-sm leading-relaxed font-normal drop-shadow-sm">
                <p>
                  At MCT IT SOLUTIONS PVT LTD, we’re proud to have a team of 30 professionals spanning design, development and strategy.
                </p>
                <p>
                  With years of experience and shared passion for technology, we work together to deliver highest possible value in half the time that will transform businesses and drive measurable success.
                </p>
                <p>
                  Our team tackle complex problems with creativity and precision, ensuring that every project is delivered according to the client’s needs.
                </p>
              </div>

              {/* OUR TEAM Button matching reference screenshot */}
              <div className="pt-2">
                <Link
                  href="/about/leadership"
                  className="px-8 py-3 rounded-md bg-[#3482b9] hover:bg-[#1f6595] text-white font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#3482b9]/30 inline-flex items-center gap-2 group"
                >
                  <span>OUR TEAM</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
