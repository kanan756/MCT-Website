import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Factory,
  Landmark,
  Building,
  Truck,
  HeartPulse,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Layers,
  Cpu,
  Clock,
  MapPin,
  TrendingUp,
  FileCheck2
} from "lucide-react";
import { INDUSTRIES_DATA, getIndustryBySlug } from "@/data/industries";

interface IndustryDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const iconMap = {
  Factory,
  Landmark,
  Building,
  Truck,
  HeartPulse
};

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Not Found | MCT IT Solutions",
    };
  }

  return {
    title: `${industry.name} Solutions & Dynamics 365 Architecture | MCT IT Solutions`,
    description: industry.heroDescription,
    alternates: {
      canonical: `/industries/${slug}`,
    },
    openGraph: {
      title: `${industry.name} Industry Solutions | MCT IT Solutions`,
      description: industry.heroDescription,
      url: `https://www.miracle-cloudtechnology.com/industries/${slug}`,
      siteName: "MCT IT Solutions",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function IndustryDetailPage({ params }: IndustryDetailPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const Icon = iconMap[industry.iconName] || Factory;
  const otherIndustries = INDUSTRIES_DATA.filter((i) => i.slug !== slug);

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">
      {/* 1. HERO BANNER */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt={industry.name}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6 tracking-wide font-['Montserrat',sans-serif]">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/industries" className="hover:text-white transition-colors duration-200">
              Industries
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">{industry.name}</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase backdrop-blur-md font-['Montserrat',sans-serif]">
              <Sparkles className="w-4 h-4 text-[#3482b9]" />
              <span>Dedicated Sector Blueprint</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#3482b9] text-white flex items-center justify-center shrink-0 shadow-lg">
                <Icon className="w-8 h-8" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight font-['Montserrat',sans-serif]">
                {industry.name}
              </h1>
            </div>

            <p className="text-lg sm:text-xl font-semibold text-[#5ba6db] font-['Montserrat',sans-serif]">
              {industry.tagline}
            </p>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
              {industry.heroDescription}
            </p>
          </div>

          {/* Quick Stats Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10 font-['Montserrat',sans-serif]">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Focus Area</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3482b9] shrink-0" />
                <span className="truncate">Enterprise Grade</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Primary Ecosystem</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#3482b9] shrink-0" />
                <span className="truncate">Dynamics 365 + Azure</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Deployment Model</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#3482b9] shrink-0" />
                <span>Cloud &amp; Hybrid</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Validated Impact</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Measured Outcomes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN INDUSTRY NARRATIVE CONTAINER */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#3482b9] transition-colors bg-white px-4 py-2 rounded-full border border-slate-200/80 shadow-xs font-['Montserrat',sans-serif]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>&larr; Back to All Industries</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* MAIN CONTENT COLUMN */}
            <main className="lg:col-span-8 space-y-10">

              {/* 1. COMMON INDUSTRY BOTTLENECK */}
              <article className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-6 relative overflow-hidden">
                <div className="w-2 h-full bg-[#e74c3c] absolute left-0 top-0" />
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-[#e74c3c]/10 text-[#e74c3c] flex items-center justify-center font-black">
                    01
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
                      Common Industry Bottlenecks
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 font-['Source_Sans_3',sans-serif]">
                      Critical friction points that impede efficiency and regulatory compliance in {industry.name}.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {industry.bottlenecks.map((b, bIdx) => (
                    <div
                      key={bIdx}
                      className="p-5 rounded-2xl bg-rose-50/60 border border-rose-100 space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-[#e74c3c] shrink-0" />
                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base font-['Montserrat',sans-serif]">
                          {b.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-6 font-['Source_Sans_3',sans-serif]">
                        {b.description}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              {/* 2. MCT DYNAMICS 365 / AI SOLUTIONS */}
              <article className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-6 relative overflow-hidden">
                <div className="w-2 h-full bg-[#3482b9] absolute left-0 top-0" />
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center font-black">
                    02
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
                      MCT Dynamics 365 &amp; AI Solutions
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 font-['Source_Sans_3',sans-serif]">
                      Tailored architectural frameworks engineered to automate workflows and resolve root bottlenecks.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {industry.solutions.map((sol, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-3"
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#3482b9] shrink-0" />
                        <h3 className="font-black text-slate-900 text-base sm:text-lg font-['Montserrat',sans-serif]">
                          {sol.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-['Source_Sans_3',sans-serif]">
                        {sol.description}
                      </p>
                      
                      <div className="pt-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-2 font-['Montserrat',sans-serif]">
                          Included Capabilities:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {sol.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-sky-100">
                              <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0 mt-0.5" />
                              <span className="font-medium">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* 3. APPLICABLE TECH */}
              <article className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center font-black">
                    03
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
                      Applicable Technology Stack
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 font-['Source_Sans_3',sans-serif]">
                      Enterprise platforms and certified Microsoft cloud components deployed.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {industry.technologies.map((tCat, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
                    >
                      <h3 className="text-xs font-black uppercase tracking-wider text-[#3482b9] font-['Montserrat',sans-serif]">
                        {tCat.category}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {tCat.items.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* 4. RELEVANT CASE STUDY & MEASURED OUTCOMES */}
              <article className="bg-gradient-to-br from-[#0b1b3d] to-[#122b5e] text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-[#3482b9]/30 space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#3482b9] text-white flex items-center justify-center font-black">
                      04
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#5ba6db] font-['Montserrat',sans-serif]">
                        Real Evidence
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-white font-['Montserrat',sans-serif]">
                        Relevant Case Study &amp; Business Value
                      </h2>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Deployment
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <h3 className="text-lg sm:text-xl font-black text-white font-['Montserrat',sans-serif]">
                    {industry.caseStudy.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    <strong>Client Background:</strong> {industry.caseStudy.clientContext}
                  </p>
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm text-emerald-200">
                    <strong>Measured Result:</strong> {industry.caseStudy.outcome}
                  </div>
                  <div className="pt-2 font-['Montserrat',sans-serif]">
                    <Link
                      href={`/case-studies/${industry.caseStudy.slug}`}
                      className="inline-flex items-center gap-2 bg-[#3482b9] hover:bg-[#1f6595] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                    >
                      <span>Read Complete Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 font-['Montserrat',sans-serif]">
                    Measurable Sector Value Delivered:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.measurableBenefits.map((ben, bIdx) => (
                      <div
                        key={bIdx}
                        className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-slate-200 font-['Source_Sans_3',sans-serif]"
                      >
                        <div className="w-5 h-5 rounded-md bg-[#3482b9] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

            </main>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="lg:sticky lg:top-28 space-y-6">
                
                {/* Sector Quick Contact Box */}
                <div className="bg-gradient-to-br from-[#0b1b3d] to-[#122b5e] text-white rounded-3xl p-6 sm:p-7 shadow-md border border-[#3482b9]/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/20 border border-[#3482b9]/40 flex items-center justify-center text-[#5ba6db] mx-auto">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-black text-base text-white font-['Montserrat',sans-serif]">
                    Consult for {industry.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    Request a tailored 5-day architectural assessment to address your organization&apos;s specific bottlenecks.
                  </p>
                  <div className="pt-2 font-['Montserrat',sans-serif]">
                    <Link
                      href={`/contact?industry=${industry.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#3482b9] hover:bg-[#1f6595] text-white py-3.5 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
                    >
                      <span>Request Industry POC</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Other Industries Navigation */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
                  <h3 className="font-black text-sm text-slate-900 pb-3 border-b border-slate-100 font-['Montserrat',sans-serif]">
                    Explore Other Verticals
                  </h3>
                  <div className="space-y-2">
                    {otherIndustries.map((other) => {
                      const OtherIcon = iconMap[other.iconName] || Factory;
                      return (
                        <Link
                          key={other.slug}
                          href={`/industries/${other.slug}`}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200 text-xs font-bold text-slate-700 hover:text-[#3482b9] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <OtherIcon className="w-4 h-4 text-slate-400 group-hover:text-[#3482b9]" />
                            <span>{other.name}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

              </div>
            </aside>

          </div>

        </div>
      </section>

      {/* 3. BOTTOM CTA BANNER */}
      <section className="py-20 bg-[#0b1b3d] text-white relative overflow-hidden border-t-4 border-[#3482b9]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3482b9]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-[#5ba6db] font-bold text-xs uppercase tracking-widest font-['Montserrat',sans-serif]">
            Enterprise Modernization Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-['Montserrat',sans-serif] max-w-3xl mx-auto">
            Ready to Implement Dynamics 365 for {industry.name}?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-['Source_Sans_3',sans-serif]">
            Get in touch with our certified Microsoft solution architects to review your operational ecosystem and design a custom deployment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-['Montserrat',sans-serif]">
            <Link
              href={`/contact?industry=${industry.slug}`}
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/industries"
              className="px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105"
            >
              All Industry Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

