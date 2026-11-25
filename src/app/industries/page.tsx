import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Factory,
  Landmark,
  Building,
  Truck,
  HeartPulse,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Layers,
  Cpu
} from "lucide-react";
import { INDUSTRIES_DATA, Industry } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industry Solutions & Sector Frameworks | MCT IT Solutions",
  description:
    "Tailored Microsoft Dynamics 365, Business Central, and Power Platform solutions built for Manufacturing, Financial Services, Public Sector, Retail & Logistics, and Healthcare.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industry Solutions & Sector Frameworks | MCT IT Solutions",
    description:
      "Tailored Microsoft Dynamics 365, Business Central, and Power Platform solutions built for Manufacturing, Financial Services, Public Sector, Retail & Logistics, and Healthcare.",
    url: "https://www.miracle-cloudtechnology.com/industries",
    siteName: "MCT IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

const iconMap = {
  Factory,
  Landmark,
  Building,
  Truck,
  HeartPulse
};

export default function IndustriesOverviewPage() {
  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">
      {/* 1. HERO BANNER */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt="Industry Solutions Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/88 to-[#0b1b3d]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/90 via-transparent to-[#0b1b3d]/50" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#3482b9]/25 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6 tracking-wide font-['Montserrat',sans-serif]">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Industries</span>
          </nav>

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase mb-4 backdrop-blur-md font-['Montserrat',sans-serif]">
            <Sparkles className="w-4 h-4 text-[#3482b9]" />
            <span>Approved Vertical Blueprints</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-5 uppercase font-['Montserrat',sans-serif]">
            Specialized Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              High-Value Sectors
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed font-['Source_Sans_3',sans-serif]">
            Off-the-shelf business systems rarely resolve sector-specific nuances. We architect Microsoft Dynamics 365, Business Central, and Power Platform ecosystems configured precisely for your industry bottlenecks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 font-['Montserrat',sans-serif]">
            <Link
              href="/contact?type=industry-consultation"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Request Sector Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#industries-grid"
              className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105"
            >
              Explore 5 Sectors
            </a>
          </div>
        </div>
      </section>

      {/* 2. SECTORS OVERVIEW GRID */}
      <section id="industries-grid" className="py-16 sm:py-20 lg:py-24 bg-[#fbfcfd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#3482b9] font-black text-xs sm:text-sm tracking-widest uppercase bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 font-['Montserrat',sans-serif]">
              Target Enterprise Verticals
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
              Engineered to Overcome Critical Bottlenecks
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-['Source_Sans_3',sans-serif]">
              Explore our structured vertical frameworks linking Common Bottlenecks &rarr; MCT Dynamics 365 Solutions &rarr; Applicable Tech &rarr; Relevant Case Studies.
            </p>
          </div>

          <div className="space-y-16">
            {INDUSTRIES_DATA.map((ind, index) => {
              const Icon = iconMap[ind.iconName] || Factory;
              return (
                <div
                  key={ind.slug}
                  id={ind.slug}
                  className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-[#3482b9]/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Industry Card Header Banner */}
                  <div className="bg-gradient-to-r from-[#0b1b3d] to-[#163777] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#3482b9] text-white flex items-center justify-center shrink-0 shadow-md">
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/15 text-[#5ba6db]">
                            Sector 0{index + 1}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white font-['Montserrat',sans-serif]">
                          {ind.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 font-['Source_Sans_3',sans-serif] mt-0.5">
                          {ind.tagline}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-2 self-start md:self-center px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#3482b9] text-white border border-white/20 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm font-['Montserrat',sans-serif]"
                    >
                      <span>Explore Sector Blueprint</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* 4-Part Structured Breakdown */}
                  <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      
                      {/* PART 1: COMMON INDUSTRY BOTTLENECK */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                          <div className="w-8 h-8 rounded-xl bg-rose-50 text-[#e74c3c] flex items-center justify-center font-bold text-xs">
                            <AlertTriangle className="w-4 h-4" />
                          </div>
                          <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
                            Common Industry Bottlenecks
                          </h4>
                        </div>

                        <div className="space-y-3">
                          {ind.bottlenecks.map((b, bIdx) => (
                            <div
                              key={bIdx}
                              className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-1"
                            >
                              <div className="text-xs sm:text-sm font-bold text-slate-900 font-['Montserrat',sans-serif]">
                                {b.title}
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed font-['Source_Sans_3',sans-serif]">
                                {b.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* PART 2: MCT DYNAMICS 365 / AI SOLUTIONS */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                          <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#3482b9] flex items-center justify-center font-bold text-xs">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
                            MCT Dynamics 365 / AI Solutions
                          </h4>
                        </div>

                        <div className="space-y-3">
                          {ind.solutions.map((sol, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-2"
                            >
                              <div className="text-xs sm:text-sm font-bold text-slate-900 font-['Montserrat',sans-serif]">
                                {sol.title}
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed font-['Source_Sans_3',sans-serif]">
                                {sol.description}
                              </p>
                              <ul className="space-y-1 pt-1">
                                {sol.features.map((feat, fIdx) => (
                                  <li key={fIdx} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3482b9] shrink-0 mt-0.5" />
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* PART 3 & PART 4: APPLICABLE TECH & RELEVANT CASE STUDY */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 border-t border-slate-100 items-stretch">
                      
                      {/* PART 3: APPLICABLE TECH */}
                      <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Cpu className="w-4 h-4 text-[#3482b9]" />
                            <h5 className="text-xs font-black uppercase tracking-wider text-slate-800 font-['Montserrat',sans-serif]">
                              Applicable Enterprise Stack
                            </h5>
                          </div>
                          
                          <div className="space-y-3">
                            {ind.technologies.map((tCat, cIdx) => (
                              <div key={cIdx} className="space-y-1.5">
                                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                  {tCat.category}:
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {tCat.items.map((tech, tIdx) => (
                                    <span
                                      key={tIdx}
                                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5 font-['Source_Sans_3',sans-serif]">
                          <ShieldCheck className="w-4 h-4 text-emerald-500" />
                          <span>Enterprise Certified &bull; Cloud &amp; Hybrid Deployable</span>
                        </div>
                      </div>

                      {/* PART 4: RELEVANT CASE STUDY */}
                      <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-[#0b1b3d] to-[#122b5e] text-white flex flex-col justify-between space-y-4 shadow-md">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-[#5ba6db] border border-white/10">
                              Proven Case Study Evidence
                            </span>
                            <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Live in Production
                            </span>
                          </div>

                          <h5 className="text-base font-black text-white font-['Montserrat',sans-serif] pt-1">
                            {ind.caseStudy.title}
                          </h5>

                          <p className="text-xs text-slate-300 leading-relaxed font-['Source_Sans_3',sans-serif]">
                            {ind.caseStudy.clientContext}
                          </p>

                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-emerald-200 font-medium">
                            <strong>Measured Outcome:</strong> {ind.caseStudy.outcome}
                          </div>
                        </div>

                        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                          <Link
                            href={`/case-studies/${ind.caseStudy.slug}`}
                            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#3482b9] hover:bg-[#1f6595] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm font-['Montserrat',sans-serif]"
                          >
                            <span>Read Case Study</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            href={`/industries/${ind.slug}`}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors border border-white/15 font-['Montserrat',sans-serif]"
                          >
                            <span>Industry Deep Dive</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. BOTTOM CTA BANNER */}
      <section className="py-20 bg-[#0b1b3d] text-white relative overflow-hidden border-t-4 border-[#3482b9]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3482b9]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 sm:p-12 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[#5ba6db] font-bold text-xs uppercase tracking-widest font-['Montserrat',sans-serif]">
                Custom Architecture Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-['Montserrat',sans-serif]">
                Don&apos;t Let Generic Software Limit Your Sector Growth
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-['Source_Sans_3',sans-serif]">
                Speak with our Microsoft certified architects to review your industry workflow, audit existing legacy friction, and receive a tailored implementation plan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 font-['Montserrat',sans-serif]">
              <Link
                href="/contact?type=industry-consultation"
                className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <span>Book 45-Min Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105 text-center"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
