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
  Award,
  BadgeCheck,
  Sparkles,
  Target,
  Building2,
  Cpu,
  Workflow
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  const whatWeDoCapabilities = [
    {
      title: "Consulting & Architecture",
      desc: "Business-first discovery, fit-gap analysis, and architecture blueprints for enterprise digital transformations.",
      icon: Compass,
    },
    {
      title: "Implementation & Rollout",
      desc: "End-to-end deployment of Microsoft Dynamics 365, Business Central, and enterprise ERP ecosystems.",
      icon: Rocket,
    },
    {
      title: "Custom AL & Extensions",
      desc: "Bespoke development, AppSource add-ons, and tailored modules that fit complex organizational workflows.",
      icon: Cpu,
    },
    {
      title: "Integration & Automation",
      desc: "Seamless connectivity with third-party APIs, legacy databases, e-invoicing portals (ZATCA, UAE), and Power Automate.",
      icon: Workflow,
    },
    {
      title: "Dedicated SLA & Support",
      desc: "Mission-critical maintenance, P0/P1 rapid response within 2–4 hours, and ongoing functional enhancement.",
      icon: ShieldCheck,
    },
  ];

  const coreValues = [
    {
      title: "Integrity & Transparency",
      desc: "We communicate with radical honesty—offering predictable budgets, measurable timelines, and verified architectural standards.",
      icon: ShieldCheck,
    },
    {
      title: "Innovation with Precision",
      desc: "We bring modern AI, cloud-native automation, and proven engineering discipline to eliminate manual overhead.",
      icon: Sparkles,
    },
    {
      title: "Client-Centric Partnership",
      desc: "Your business outcomes dictate our success. We operate as an embedded technology arm rather than a detached vendor.",
      icon: Target,
    },
    {
      title: "Continuous Excellence",
      desc: "Our agile certified squads invest constantly in Microsoft certifications, best-in-class tooling, and iterative quality.",
      icon: Award,
    },
  ];

  const milestones = [
    {
      year: "Foundation",
      title: "Inception & India Operations",
      desc: "Founded by seasoned Microsoft enterprise specialists with a single anchor global client and a mission to deliver agile CRM solutions.",
    },
    {
      year: "Expansion",
      title: "Global Client Footprint & Business Central",
      desc: "Expanded delivery into Microsoft Dynamics 365 Business Central ERP, serving enterprise clients across India, UAE, and Singapore.",
    },
    {
      year: "Innovation",
      title: "Proprietary Product Add-ons",
      desc: "Launched CleanMail Pro, SalesPro, MultiSelect Option Set, and INTX TaxInvoicePro—expanding AppSource and enterprise software utilities.",
    },
    {
      year: "Today & Beyond",
      title: "Enterprise AI & Cloud Integrations",
      desc: "Scaling IntelliKB AI knowledge platform, automated compliance integrations (ZATCA / UAE E-Invoicing), and robust 2–4hr SLA guarantees.",
    },
  ];

  const leaders = [
    {
      name: "Ravi Brahmbhatt",
      role: "Founder India, Chairman & CEO",
      image: "/ravi-brahmbhatt.png",
      bio: "Microsoft certified leader with 8+ years of enterprise engineering experience, architecting global CRM/ERP transformations across multinational enterprises.",
      email: "rmb@miraclecloud-technology.com",
    },
    {
      name: "Nihal Bhatasna",
      role: "Chief Technology Officer",
      image: "/nihal.png",
      bio: "Leads technical strategy, architecture governance, and modern cloud platforms, driving rigorous delivery standards across all client deployments.",
      email: "nbhatasna@miraclecloud-technology.com",
    },
    {
      name: "Sunny Macwan",
      role: "Chief Information Officer",
      image: "/sunny_01.png",
      bio: "Oversees enterprise systems architecture, security infrastructure, and vendor technology alignment to ensure seamless operational continuity.",
      email: "sunnym@miraclecloud-technology.com",
    },
    {
      name: "Kaushal Lalani",
      role: "Resource Manager",
      image: "/kaushal-scaled-thegem-person.jpg",
      bio: "Specializes in talent orchestration, agile pod allocations, and sprint workload balancing to guarantee on-time project execution.",
      email: "klalani@miraclecloud-technology.com",
    },
    {
      name: "Nilesh Kalma",
      role: "Chief Financial Officer",
      image: "/nilesh-scaled-thegem-person.jpg",
      bio: "Heads corporate financial governance, capital planning, and commercial risk management to ensure long-term stability and sustainable growth.",
      email: "nkalma@miraclecloud-technology.com",
    },
  ];

  const credentials = [
    {
      badge: "Partner Ecosystem",
      title: "Microsoft Dynamics 365 & Power Platform",
      issuer: "Microsoft Certified Competency",
      desc: "Verified technical alignment in Dynamics 365 Sales, Customer Service, Business Central, and Power Automate architectures.",
    },
    {
      badge: "Delivery Discipline",
      title: "Agile SDLC & DevOps CI/CD",
      issuer: "Certified Scrum & Agile Frameworks",
      desc: "Sprint-driven deployment pipelines ensuring zero-downtime releases, automated regression testing, and code review governance.",
    },
    {
      badge: "Regulatory Readiness",
      title: "E-Invoicing & Compliance Engineering",
      issuer: "ZATCA (KSA) & UAE Tax Authorities",
      desc: "Proven cryptographic Phase 2 XML/JSON transmission, QR code generation, and official tax authority clearance integrations.",
    },
    {
      badge: "SLA Commitment",
      title: "P0 / P1 Mission-Critical Response",
      issuer: "Enterprise Service Level Guarantee",
      desc: "Contractually committed incident response under 2–4 hours for critical core operations and business-halting pipeline blockers.",
    },
  ];

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
      title: "Cost-Effective Innovation",
      desc: "Creative strategies that reduce development costs while maximizing value and ROI.",
    },
    {
      title: "Proven Results",
      desc: "Trusted by worldwide clients to deliver solutions that enhance productivity and transform businesses, resulting in measurable growth and a high ROI.",
    },
    {
      title: "Data-driven Decision-Making",
      desc: "We do not work with assumptions or gut feelings, we rely on frequent and diligent feedback from our clients to minimize risk and deliver verified value.",
    },
  ];

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
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
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6 font-['Montserrat',sans-serif]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">About Us</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-6 backdrop-blur-md shadow-sm font-['Montserrat',sans-serif]">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-6 tracking-tight font-['Montserrat',sans-serif]">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Us
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto font-normal font-['Source_Sans_3',sans-serif]">
            Founded by seasoned Microsoft enterprise specialists to deliver tailored Microsoft Dynamics 365, Business Central, and Power Platform solutions worldwide.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 font-['Montserrat',sans-serif]">
            <Link
              href="/contact"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#story"
              className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105"
            >
              Our Story &amp; Leadership
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. NARRATIVE 1: COMPANY OVERVIEW & WHO WE ARE                  */}
      {/* ============================================================== */}
      <section id="story" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            
            {/* Left Column (6 cols): Text */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#3482b9] bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block font-['Montserrat',sans-serif]">
                  Company Overview
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif] leading-tight">
                Architecting Enterprise Agility Through Microsoft Technology
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                <p>
                  MCT IT Solutions Pvt Ltd is a fast-emerging technology consulting and software engineering firm founded by seasoned industry practitioners. We engineer mission-critical CRM and ERP systems for enterprises navigating operational complexity.
                </p>
                <p>
                  Rather than imposing monolithic, one-size-fits-all software, we calibrate Microsoft Dynamics 365, Business Central, and the Power Platform to our clients&apos; exact operational logic. Our team acts as an agile engineering extension, bridging business discovery with verifiable deployment velocity.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold text-slate-700 font-['Montserrat',sans-serif]">
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>30+ Certified Technologists</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>Global Client Delivery</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                  <span>20% Efficiency Uplift</span>
                </div>
              </div>
            </div>

            {/* Right Column (6 cols): Visual Card */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="right" duration={700}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <div className="relative w-full aspect-[16/11]">
                    <Image
                      src="/aboutsusbanner.png"
                      alt="MCT IT Solutions Corporate Showcase"
                      fill
                      priority
                      className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. NARRATIVE 2: WHAT WE DO (CAPABILITIES MATRIX)               */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase text-[#3482b9] bg-sky-50 border border-sky-100 font-['Montserrat',sans-serif]">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
              End-to-End Enterprise Delivery Capabilities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-['Source_Sans_3',sans-serif]">
              From initial gap assessment to custom AL code and production SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whatWeDoCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#3482b9]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center group-hover:bg-[#3482b9] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Source_Sans_3',sans-serif]">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 mt-5 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-[#3482b9] transition-colors">
                    <span>Verified Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}

            {/* View Full Services Tile */}
            <div className="p-7 rounded-3xl bg-[#0b1b3d] text-white border border-[#3482b9]/40 shadow-xl flex flex-col justify-between group">
              <div className="space-y-4">
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-widest">
                  Full Service Catalog
                </span>
                <h3 className="text-xl font-black text-white font-['Montserrat',sans-serif]">
                  Explore All Solutions
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-['Source_Sans_3',sans-serif]">
                  Discover detailed breakdowns of Dynamics 365 CRM, Business Central ERP, Power Apps, and Automated Integrations.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href="/services"
                  className="w-full py-3 px-5 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. NARRATIVE 3: MISSION, VISION & VALUES                       */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Mission Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#f8fafc] border border-gray-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif] uppercase">
                  Our Mission
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-['Source_Sans_3',sans-serif]">
                  To empower global businesses by delivering adaptable, high-precision Microsoft Dynamics 365, Business Central, and Power Platform solutions that accelerate productivity and eliminate operational friction.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium font-['Source_Sans_3',sans-serif] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0" />
                    <span>Personalized ERP/CRM architectures tailored to business logic</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0" />
                    <span>Transparent collaboration with zero speculative budget surprises</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0" />
                    <span>Continuous improvement keeping clients future-ready</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#f8fafc] border border-gray-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/15 text-[#3482b9] flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif] uppercase">
                  Our Vision
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-['Source_Sans_3',sans-serif]">
                  To become the most dependable and value-driven Microsoft Solutions Partner, recognized internationally for engineering excellence, rapid deployment velocity, and lasting client trust.
                </p>
                <div className="p-5 rounded-2xl bg-white border border-[#3482b9]/30 shadow-xs flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#3482b9] text-white flex items-center justify-center font-black text-base shrink-0">
                    20%
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-tight">Average Operational Efficiency Uplift</div>
                    <div className="text-xs text-slate-500">Delivered across client enterprise workflows</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 4 Core Values Grid */}
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center">
              <span className="text-xs font-black uppercase tracking-widest text-[#3482b9] bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block font-['Montserrat',sans-serif]">
                Guiding Principles
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif] mt-2">
                Our Core Values
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-lg hover:border-[#3482b9]/40 transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center group-hover:bg-[#3482b9] group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 font-['Montserrat',sans-serif]">
                        {val.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-['Source_Sans_3',sans-serif]">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. NARRATIVE 4: VERIFIED MILESTONES TIMELINE                   */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase text-[#3482b9] bg-sky-50 border border-sky-100 font-['Montserrat',sans-serif]">
              Company Journey
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
              Key Milestones in Our Evolution
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-['Source_Sans_3',sans-serif]">
              A consistent trajectory of technical specialization and verified delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="relative p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#3482b9]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#3482b9] bg-[#3482b9]/10 mb-4 font-['Montserrat',sans-serif]">
                    {m.year}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-['Montserrat',sans-serif]">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    {m.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-5 flex items-center gap-1.5 text-xs font-bold text-[#3482b9]">
                  <BadgeCheck className="w-4 h-4" />
                  <span>Verified Milestone</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. EXECUTIVE LEADERSHIP SPOTLIGHT & CTA                       */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0b1b3d] via-[#132c5e] to-[#0b1b3d] text-white p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl border border-[#3482b9]/30">
            {/* Ambient background glows */}
            <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#3482b9]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Heading, Vision & Action */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-black tracking-wider uppercase text-sky-300 bg-white/10 border border-white/20 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#3482b9] animate-pulse" />
                  Executive Leadership
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                  Guided by Experienced Enterprise{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
                    Architects & Visionaries
                  </span>
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                  Our executive team combines over 25+ years of cumulative expertise across Microsoft Dynamics 365, enterprise ERP/CRM modernization, cloud infrastructure, and AI engineering. Discover the leaders shaping our technology strategy and client delivery worldwide.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
                  <Link
                    href="/about/leadership"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#3482b9]/30 hover:scale-105 active:scale-95 text-center"
                  >
                    <span>Meet the Full Leadership Team</span>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                  </Link>

                  <a
                    href="mailto:rmb@miraclecloud-technology.com"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 border border-white/20 active:scale-95 text-center"
                  >
                    <Mail className="w-4 h-4 text-sky-300 shrink-0" />
                    <span>Connect with Leadership</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Stacked Leadership Avatar Preview Showcase */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
                <div className="w-full max-w-md p-5 sm:p-7 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-5 sm:space-y-6">
                  
                  {/* Overlapping Portraits Bar */}
                  <div className="flex items-center justify-center -space-x-2.5 sm:-space-x-3 md:-space-x-4">
                    {leaders.slice(0, 5).map((l, idx) => (
                      <div
                        key={idx}
                        className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 sm:border-3 border-white shadow-lg bg-slate-100 hover:scale-110 hover:z-20 transition-transform duration-300 ring-2 ring-[#0b1b3d] shrink-0"
                        title={`${l.name} - ${l.role}`}
                      >
                        <Image
                          src={l.image}
                          alt={l.name}
                          fill
                          sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                          className="object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Summary Metric pill */}
                  <div className="text-center space-y-1 px-2">
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-sky-300">
                      5 Executive Directors & Heads
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-normal">
                      Ravi Brahmbhatt • Nihal Bhatasna • Sunny Macwan • Nilesh Kalma • Kaushal Lalani
                    </p>
                  </div>

                  {/* Link Pill */}
                  <div className="pt-1 text-center">
                    <Link
                      href="/about/leadership"
                      className="text-xs font-bold text-sky-400 hover:text-white inline-flex items-center justify-center gap-1 group transition-colors py-1"
                    >
                      <span>Read detailed executive bios & roles</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. DEDICATED CREDENTIALS & PARTNERSHIPS                        */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-24 bg-[#0b1b3d] text-white border-b-4 border-[#3482b9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase text-[#5ba6db] bg-white/10 border border-white/20 font-['Montserrat',sans-serif]">
              Verified Standards
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-['Montserrat',sans-serif]">
              Credentials &amp; Ecosystem Partnerships
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-['Source_Sans_3',sans-serif]">
              Certified technical competence, agile frameworks, and compliance standards backing every deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white/[0.05] border border-white/10 hover:border-[#3482b9]/60 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group backdrop-blur-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#5ba6db] bg-[#3482b9]/20 px-3 py-1 rounded-full border border-[#3482b9]/40">
                      {cred.badge}
                    </span>
                    <BadgeCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-base font-black text-white font-['Montserrat',sans-serif] leading-snug">
                    {cred.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-300">
                    {cred.issuer}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    {cred.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 mt-6 flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Active &amp; Verified</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. WHY CHOOSE & FINAL CONSULTATION CTA                         */}
      {/* ============================================================== */}
      <section className="relative py-20 sm:py-24 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-4xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase leading-tight font-['Montserrat',sans-serif]">
              Transforming Ideas Into Impactful Solutions for a Brighter Business Future.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs">
                Why Choose MCT IT Solutions?
              </div>
              <div className="space-y-4 pt-2">
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

            <div className="lg:col-span-5 space-y-6 flex flex-col justify-start">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                At MCT IT Solutions, we transform complex business challenges into innovative solutions by leveraging our expertise in Microsoft Dynamics 365 and Business Central. Our streamlined approach combines technical proficiency with deep client collaboration.
              </p>
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-gray-200/80 bg-white group hover:shadow-xl hover:border-[#3482b9]/50 transition-all duration-300">
                <Image
                  src="/Why Choose MCT IT Solutions.png"
                  alt="Why Choose MCT IT Solutions - Reliable Solutions. Stronger Business. Lasting Impact."
                  fill
                  className="object-contain sm:object-cover sm:object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0b1b3d] to-[#112347] text-white text-center space-y-6 shadow-2xl border border-white/10">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-['Montserrat',sans-serif]">
              Ready to Accelerate Your Business Transformation?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-['Source_Sans_3',sans-serif]">
              Schedule a technical consultation with our solution architects to evaluate your Dynamics 365, Business Central, or Power Platform roadmap.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 font-['Montserrat',sans-serif]">
              <Link
                href="/contact"
                className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-xl shadow-[#3482b9]/30 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact?type=poc"
                className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105"
              >
                Request a 5-Day POC
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
