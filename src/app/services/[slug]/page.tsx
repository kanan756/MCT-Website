import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Phone,
  Mail,
  Layers,
  Sparkles,
  Cpu,
  Workflow,
  AlertTriangle,
  FolderGit2,
  Calendar,
  MapPin,
  ExternalLink,
  Target
} from "lucide-react";
import { getAllServiceItems, getServiceItemBySlug } from "@/data/servicesHelpers";
import { getLiveServices, getLiveProjects } from "@/lib/contentRepo";

export const dynamic = "force-dynamic";

interface ServiceSubpageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const liveCategories = await getLiveServices();
  const allServices = getAllServiceItems(liveCategories);
  return allServices.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: ServiceSubpageProps): Promise<Metadata> {
  const { slug } = await params;
  const liveCategories = await getLiveServices();
  const service = getServiceItemBySlug(slug, liveCategories);

  if (!service) {
    return {
      title: "Service Not Found | MCT IT Solutions",
    };
  }

  return {
    title: `${service.name} | MCT IT Solutions Services`,
    description: service.description,
  };
}

// Common enterprise challenges mapped by category/service context
function getCommonChallenges(serviceName: string, categoryTitle: string) {
  if (categoryTitle.toLowerCase().includes("dynamics") || serviceName.toLowerCase().includes("crm") || serviceName.toLowerCase().includes("sales")) {
    return [
      {
        title: "Disjointed Customer & Sales Data",
        desc: "Siloed communication channels and fragmented customer timelines that prevent sales teams from closing deals efficiently.",
      },
      {
        title: "Manual Overhead & Inaccurate Data",
        desc: "High volume of repetitive manual entries leading to duplicate records, missed follow-ups, and erratic forecast reporting.",
      },
      {
        title: "Rigid Workflows & Low Adoption",
        desc: "Off-the-shelf software failing to align with real-world sales stages, causing friction and low user adoption rates.",
      },
    ];
  }

  if (serviceName.toLowerCase().includes("erp") || serviceName.toLowerCase().includes("business central") || serviceName.toLowerCase().includes("finance") || serviceName.toLowerCase().includes("warehouse")) {
    return [
      {
        title: "Inventory & Fulfillment Bottlenecks",
        desc: "Lack of real-time visibility between purchase orders, warehouse bin stocks, and multi-state fulfillment schedules.",
      },
      {
        title: "Complex Multi-Entity Financial Reporting",
        desc: "Delayed month-end closings, disparate general ledgers, and cumbersome multi-currency reconciliation processes.",
      },
      {
        title: "Legacy Infrastructure Maintenance Risk",
        desc: "High cost of maintaining brittle on-premise ERP code bases with limited scalability and security upgrade paths.",
      },
    ];
  }

  if (categoryTitle.toLowerCase().includes("e-invoicing") || serviceName.toLowerCase().includes("invoice") || serviceName.toLowerCase().includes("zatca")) {
    return [
      {
        title: "Fast-Moving Government Mandates",
        desc: "Strict cryptographic hashing, Phase 2 XML formats, and QR code standards that non-compliant systems fail to generate.",
      },
      {
        title: "Data Transmission Rejections",
        desc: "Direct clearance API errors and clearance validation failures that can halt legitimate commercial trade and trigger penalties.",
      },
      {
        title: "ERP Sync Delays",
        desc: "Lag between core sales order posting in Business Central and tax authority invoice registration receipts.",
      },
    ];
  }

  return [
    {
      title: "Scalability & Architecture Limitations",
      desc: "Legacy systems unable to handle increased transactional load or multi-platform user access requirements.",
    },
    {
      title: "Inefficient Integration Pipelines",
      desc: "Manual double-entry and unmonitored point-to-point connections prone to silent failures and data discrepancies.",
    },
    {
      title: "Lack of 24/7 Mission-Critical Support",
      desc: "Prolonged incident resolution times during high-severity system outages that directly impact business revenue.",
    },
  ];
}

export default async function ServiceSubpage({ params }: ServiceSubpageProps) {
  const { slug } = await params;
  const liveCategories = await getLiveServices();
  const service = getServiceItemBySlug(slug, liveCategories);

  if (!service) {
    notFound();
  }

  // Related projects / case studies
  const allProjects = await getLiveProjects();
  const relatedProjects = allProjects.filter((p) => {
    const sName = service.name.toLowerCase();
    const cTitle = service.categoryTitle.toLowerCase();
    const tags = p.tags.map((t) => t.toLowerCase()).join(" ");
    const cat = p.solutionCategory.toLowerCase();
    return (
      tags.includes(sName) ||
      cat.includes(sName) ||
      (cTitle.includes("dynamics") && (cat.includes("dynamics") || tags.includes("dynamics"))) ||
      (cTitle.includes("invoicing") && (cat.includes("invoicing") || tags.includes("invoicing"))) ||
      (cTitle.includes("web") && (cat.includes("web") || cat.includes("app")))
    );
  }).slice(0, 2);

  const challenges = getCommonChallenges(service.name, service.categoryTitle);

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/serviceweprovide.png"
            alt={service.name}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/90 to-[#0b1b3d]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/95 via-transparent to-[#0b1b3d]/50" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#3482b9]/25 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6 tracking-wide font-['Montserrat',sans-serif]">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/services" className="hover:text-white transition-colors duration-200">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-slate-300">{service.categoryTitle}</span>
            {service.subgroupName && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
                <span className="text-slate-300">{service.subgroupName}</span>
              </>
            )}
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">{service.name}</span>
          </nav>

          {/* Badge */}
          {service.badge && (
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase mb-4 backdrop-blur-md font-['Montserrat',sans-serif]">
              <Sparkles className="w-4 h-4 text-[#3482b9]" />
              <span>{service.badge}</span>
            </div>
          )}

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-5 font-['Montserrat',sans-serif]">
            {service.name}
          </h1>

          {/* Tagline */}
          {service.tagline && (
            <p className="text-base sm:text-lg md:text-xl text-[#5ba6db] max-w-3xl mx-auto font-semibold leading-relaxed mb-6 font-['Source_Sans_3',sans-serif]">
              {service.tagline}
            </p>
          )}

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed font-['Source_Sans_3',sans-serif]">
            Enterprise-grade implementation, end-to-end integration, custom extension development, and SLA-backed support by MCT IT Solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 font-['Montserrat',sans-serif]">
            <Link
              href={`/contact?service=${encodeURIComponent(service.name)}`}
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#overview"
              className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. OVERVIEW & SOLUTION ARCHITECTURE                            */}
      {/* ============================================================== */}
      <section id="overview" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#3482b9]/10 text-[#3482b9] font-['Montserrat',sans-serif]">
                <Layers className="w-3.5 h-3.5" />
                <span>{service.categoryTitle} Practice</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight font-['Montserrat',sans-serif]">
                Empowering Business Operations with {service.name}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal font-['Source_Sans_3',sans-serif]">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-[#3482b9] font-bold text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Risk-Free Delivery</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    5–7 Day Miniature POC option before contract kickoff to validate technical feasibility.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-[#3482b9] font-bold text-xs uppercase tracking-wider">
                    <Zap className="w-4 h-4" />
                    <span>Sprint Velocity</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    2x faster deployment utilizing pre-engineered AL connectors and Power Platform workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Consultation Card */}
            <div className="lg:col-span-5 rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3482b9] font-['Montserrat',sans-serif]">
                  Expert Discovery
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  Ready to deploy {service.name}?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-['Source_Sans_3',sans-serif]">
                  Speak directly with our technical consultants to audit your current system, design a migration path, and receive a fixed-scope proposal.
                </p>
              </div>

              <div className="space-y-3 pt-2 font-['Montserrat',sans-serif]">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.name)}`}
                  className="w-full py-3.5 px-6 rounded-full bg-[#0b1b3d] hover:bg-[#1f6595] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow transition-all hover:scale-[1.02]"
                >
                  <span>Request Solution Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+919510879991"
                  className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#3482b9]" />
                  <span>Call +91 9510879991</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. COMMON CHALLENGES ADDRESSED                                  */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase text-amber-700 bg-amber-50 border border-amber-200/60 font-['Montserrat',sans-serif]">
              Operational Bottlenecks
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
              Key Challenges We Eliminate
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-['Source_Sans_3',sans-serif]">
              Enterprise friction points resolved through calibrated Microsoft architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((c, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    {c.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-5 flex items-center gap-1.5 text-xs font-bold text-amber-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>MCT Solves This</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. KEY DELIVERABLES & CAPABILITIES                             */}
      {/* ============================================================== */}
      {service.highlights && service.highlights.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#3482b9]/10 text-[#3482b9] font-['Montserrat',sans-serif]">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase font-['Montserrat',sans-serif]">
                What We Deliver
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-['Source_Sans_3',sans-serif]">
                Structured delivery methodology designed for rapid enterprise time-to-value and minimal operational disruption.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-[#3482b9]/50 hover:shadow-lg transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3482b9]/15 flex items-center justify-center text-[#3482b9]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-['Montserrat',sans-serif]">
                      Deliverable #{idx + 1}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Source_Sans_3',sans-serif]">
                      {item}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200/60 mt-3 text-[11px] font-bold text-[#3482b9] uppercase tracking-wider">
                    Scope Item
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* 5. TECHNOLOGY STACK & CONNECTORS                               */}
      {/* ============================================================== */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#3482b9]/10 text-[#3482b9] font-['Montserrat',sans-serif]">
                Architecture &amp; Tools
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
                Technology Stack &amp; Connectors
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-['Source_Sans_3',sans-serif]">
                Enterprise platforms and frameworks leveraged to build reliable, high-performance solutions.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
              {service.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="px-5 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#3482b9] hover:shadow-md transition-all flex items-center gap-2.5 font-bold text-xs sm:text-sm text-slate-800"
                >
                  <Cpu className="w-4 h-4 text-[#3482b9]" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* 6. RELATED CASE STUDIES                                        */}
      {/* ============================================================== */}
      {relatedProjects.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#3482b9]/10 text-[#3482b9] mb-2 font-['Montserrat',sans-serif]">
                  Proven Delivery
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase font-['Montserrat',sans-serif]">
                  Related Case Studies
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="text-xs sm:text-sm font-bold text-[#3482b9] hover:underline inline-flex items-center gap-1 uppercase tracking-wider"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <div
                  key={p.slug}
                  className="p-7 sm:p-8 rounded-3xl bg-[#f8fafc] border border-slate-200/90 hover:border-[#3482b9]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#3482b9] text-white">
                        {p.solutionCategory}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white border border-slate-200 text-slate-600 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#3482b9]" />
                        <span>{p.location}</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#3482b9] transition-colors font-['Montserrat',sans-serif]">
                      <Link href={`/case-studies/${p.slug}`}>
                        {p.name}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Source_Sans_3',sans-serif]">
                      {p.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.tags.slice(0, 4).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between font-['Montserrat',sans-serif]">
                    <span className="text-xs font-semibold text-slate-500">
                      Duration: {p.duration}
                    </span>
                    <Link
                      href={`/case-studies/${p.slug}`}
                      className="text-xs font-bold text-[#3482b9] hover:text-[#1f6595] uppercase tracking-wider inline-flex items-center gap-1"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* 7. BACK TO SERVICES & FINAL CONTACT CTA                        */}
      {/* ============================================================== */}
      <section className="py-20 bg-[#0b1b3d] text-white relative overflow-hidden border-t-4 border-[#3482b9]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3482b9]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors uppercase tracking-wider font-semibold font-['Montserrat',sans-serif]"
          >
            <span>&larr; View All Services</span>
          </Link>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-['Montserrat',sans-serif]">
            Let&apos;s Build Your Solution Together
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal font-['Source_Sans_3',sans-serif] leading-relaxed">
            Whether you are planning a fresh rollout or modernizing legacy infrastructure, MCT IT Solutions brings deep technical competence, agile delivery pods, and verified SLAs.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 font-['Montserrat',sans-serif]">
            <Link
              href={`/contact?service=${encodeURIComponent(service.name)}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white text-sm font-bold shadow-xl shadow-[#3482b9]/30 transition-all hover:scale-105"
            >
              <span>Schedule Discovery Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?type=poc"
              className="px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105"
            >
              Request 5-Day POC
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
