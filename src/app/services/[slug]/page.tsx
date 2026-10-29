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
  Workflow
} from "lucide-react";
import { getAllServiceItems, getServiceItemBySlug } from "@/data/servicesHelpers";
import { getLiveServices } from "@/lib/contentRepo";

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

export default async function ServiceSubpage({ params }: ServiceSubpageProps) {
  const { slug } = await params;
  const liveCategories = await getLiveServices();
  const service = getServiceItemBySlug(slug, liveCategories);

  if (!service) {
    notFound();
  }

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
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6 tracking-wide">
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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#3482b9]" />
              <span>{service.badge}</span>
            </div>
          )}

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-5">
            {service.name}
          </h1>

          {/* Tagline */}
          {service.tagline && (
            <p className="text-base sm:text-lg md:text-xl text-[#5ba6db] max-w-3xl mx-auto font-semibold leading-relaxed mb-6">
              {service.tagline}
            </p>
          )}

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Enterprise-grade implementation, end-to-end integration, custom extension development, and SLA-backed support by MCT IT Solutions.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. OVERVIEW & SOLUTION ARCHITECTURE                            */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#3482b9]/10 text-[#3482b9]">
                <Layers className="w-3.5 h-3.5" />
                <span>{service.categoryTitle} Practice</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Empowering Business Operations with {service.name}
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {service.description}
              </p>

              {/* Technologies */}
              {service.technologies && service.technologies.length > 0 && (
                <div className="pt-4 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Technology Stack & Connectors:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Consultation Card */}
            <div className="lg:col-span-5 rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3482b9]">
                  Expert Discovery
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Ready to deploy {service.name}?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Speak directly with our technical consultants to audit your current system, design a migration path, and receive a fixed-scope proposal.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  href="/contact"
                  className="w-full py-3 px-6 rounded-full bg-[#0b1b3d] hover:bg-[#1f6595] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow transition-all hover:scale-[1.02]"
                >
                  <span>Request Solution Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+919510879991"
                  className="w-full py-3 px-6 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
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
      {/* 3. KEY DELIVERABLES & CAPABILITIES                             */}
      {/* ============================================================== */}
      {service.highlights && service.highlights.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#3482b9]/10 text-[#3482b9] mb-3">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase">
                What We Deliver
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
                Structured delivery methodology designed for rapid enterprise time-to-value and minimal operational disruption.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#3482b9]/50 hover:shadow-lg transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#3482b9]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Deliverable #{idx + 1}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* 4. BACK TO SERVICES & CTA                                      */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 bg-[#0b1b3d] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3482b9]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
          >
            <span>&larr; View All Services</span>
          </Link>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
            Let's Build Your Solution Together
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            Whether you are planning a fresh rollout or modernizing legacy infrastructure, MCT IT Solutions brings deep technical competence and business insight.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white text-sm font-bold shadow-lg transition-all hover:scale-105"
            >
              <span>Schedule Discovery Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
