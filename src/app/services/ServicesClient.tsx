"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Layers,
  FileCheck,
  Globe,
  Smartphone,
  ChevronRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Zap,
  Cpu,
  Database,
  Code2,
  FolderKanban,
  Users2,
  Compass,
  Workflow,
  Rocket,
  Clock,
  ShieldAlert
} from "lucide-react";
import { useEffect } from "react";
import { servicesData, ServiceCategory, ServiceItem } from "@/data/services";

export default function ServicesPage() {
  const [servicesList, setServicesList] = useState<ServiceCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    fetch("/api/services", { cache: "no-store" })
      .then((res) => res.json())
      .then((json) => {
        if (json.data && Array.isArray(json.data)) {
          setServicesList(json.data);
        }
      })
      .catch((err) => console.warn("Failed to fetch live services:", err))
      .finally(() => setLoading(false));
  }, []);

  const filteredCategories =
    activeCategory === "all"
      ? servicesList
      : servicesList.filter((cat) => cat.id === activeCategory);

  // Icon mapping helper
  const renderCategoryIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case "Layers":
        return <Layers className={className} />;
      case "FileCheck":
        return <FileCheck className={className} />;
      case "Globe":
        return <Globe className={className} />;
      case "Smartphone":
        return <Smartphone className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/serviceweprovide.png"
            alt="MCT Services Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/90 to-[#0b1b3d]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/95 via-transparent to-[#0b1b3d]/50" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#3482b9]/25 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6 tracking-wide">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Services</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#3482b9]" />
            <span>Enterprise Technology Capabilities</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-5 uppercase">
            Services &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Solutions
            </span>
          </h1>

          {/* Subtitle from official website */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed mb-4">
            Accelerate your growth with next-generation tailored business solutions that drive measurable results.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Whether you aim to streamline operations, enhance scalability, or boost customer engagement, MCT IT Solutions delivers proven strategies for sustainable growth across Microsoft Dynamics 365, E-Invoicing, Web, and Mobile.
          </p>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/15">
            <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="block text-2xl sm:text-3xl font-black text-white">4</span>
              <span className="text-xs text-slate-300 font-medium">Core Practices</span>
            </div>
            <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="block text-2xl sm:text-3xl font-black text-[#5ba6db]">15+</span>
              <span className="text-xs text-slate-300 font-medium">Specialized Offerings</span>
            </div>
            <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="block text-2xl sm:text-3xl font-black text-white">100%</span>
              <span className="text-xs text-slate-300 font-medium">Compliance-Ready</span>
            </div>
            <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="block text-2xl sm:text-3xl font-black text-[#5ba6db]">24/7</span>
              <span className="text-xs text-slate-300 font-medium">Dedicated Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CATEGORY FILTER TABS                                        */}
      {/* ============================================================== */}
      <section className="sticky top-20 md:top-[112px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap shrink-0 ${
                activeCategory === "all"
                  ? "bg-[#3482b9] text-white shadow-md shadow-[#3482b9]/25 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Services
            </button>
            {servicesList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-[#0b1b3d] text-white shadow-md shadow-[#0b1b3d]/25 scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. MAIN SERVICES CONTENT CONTAINER                             */}
      {/* ============================================================== */}
      <div className="py-16 sm:py-20 lg:py-24 space-y-20 lg:space-y-28">
        {loading ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/90 max-w-xl mx-auto p-8 shadow-sm">
            <div className="w-8 h-8 border-3 border-[#3482b9] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs sm:text-sm text-slate-500">Loading services...</p>
          </div>
        ) : filteredCategories.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/90 max-w-xl mx-auto p-8 shadow-sm">
            <Layers className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-black text-slate-800 mb-1">No Services Available</h3>
            <p className="text-xs sm:text-sm text-slate-500">
              No services found. Add services via the Admin panel or Google Sheets.
            </p>
          </div>
        ) : (
          filteredCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
            >
            {/* Category Header Card */}
            <div className={`relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br ${category.bgGradient} border border-slate-200/80 shadow-lg mb-10 overflow-hidden`}>
              <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-44 h-44 rounded-full bg-slate-900/5 blur-2xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-[#3482b9] font-black text-sm">
                      {category.number}
                    </span>
                    <span className="inline-block px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/80 border border-slate-200 text-slate-700">
                      {category.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                    {category.title}
                  </h2>

                  <p className="text-sm sm:text-base font-semibold text-[#3482b9]">
                    {category.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {category.summary}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0b1b3d] hover:bg-[#1f6595] text-white text-xs sm:text-sm font-bold shadow transition-all hover:scale-105"
                  >
                    <span>Consult with Experts</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Subgroups (e.g. for Dynamics 365: CRM, ERP, Warehouse, HR) */}
            {category.subgroups && category.subgroups.length > 0 && (
              <div className="space-y-12 sm:space-y-16">
                {category.subgroups.map((subgroup) => (
                  <div key={subgroup.id} className="space-y-6">
                    {/* Subgroup Label & Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b-2 border-slate-200">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#3482b9]" />
                          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
                            {subgroup.name}
                          </h3>
                        </div>
                        {subgroup.description && (
                          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl">
                            {subgroup.description}
                          </p>
                        )}
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">
                        {subgroup.items.length} {subgroup.items.length === 1 ? "Solution" : "Solutions"}
                      </span>
                    </div>

                    {/* Subgroup Items Grid: Responsive 1, 2, or 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {subgroup.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 hover:border-[#3482b9]/60 hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-1"
                        >
                          <div className="space-y-3.5">
                            {/* Card Top: Badge & Arrow */}
                            <div className="flex items-center justify-between gap-2">
                              {item.badge && (
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-sky-50 text-[#3482b9] border border-[#3482b9]/20">
                                  {item.badge}
                                </span>
                              )}
                              <Link
                                href={`/services/${item.id}`}
                                className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#3482b9] group-hover:text-white transition-colors shrink-0"
                                aria-label={`View details for ${item.name}`}
                              >
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                              </Link>
                            </div>

                            {/* Title & Tagline */}
                            <div>
                              <Link href={`/services/${item.id}`} className="block">
                                <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#3482b9] transition-colors leading-snug">
                                  {item.name}
                                </h4>
                              </Link>
                              {item.tagline && (
                                <p className="text-xs font-medium text-slate-500 mt-1">
                                  {item.tagline}
                                </p>
                              )}
                            </div>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                              {item.description}
                            </p>

                            {/* Highlights */}
                            {item.highlights && item.highlights.length > 0 && (
                              <div className="pt-2 space-y-1.5 border-t border-slate-100">
                                {item.highlights.map((point, pIdx) => (
                                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3482b9] shrink-0 mt-0.5" />
                                    <span>{point}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Technologies */}
                          {item.technologies && item.technologies.length > 0 && (
                            <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                              {item.technologies.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Additional Top-Level Items (e.g. Power Pages, Power Apps, Power Automate) */}
            {category.additionalItems && category.additionalItems.length > 0 && (
              <div className="mt-12 sm:mt-16 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b-2 border-slate-200">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3482b9]" />
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
                        Power Platform & Automation
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Low-code enterprise innovation, external portals, and hyper-automated business processes.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">
                    {category.additionalItems.length} Solutions
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.additionalItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 hover:border-[#3482b9]/60 hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-1"
                    >
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between gap-2">
                          {item.badge && (
                            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-sky-50 text-[#3482b9] border border-[#3482b9]/20">
                              {item.badge}
                            </span>
                          )}
                          <Link
                            href={`/services/${item.id}`}
                            className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#3482b9] group-hover:text-white transition-colors shrink-0"
                            aria-label={`View details for ${item.name}`}
                          >
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>

                        <div>
                          <Link href={`/services/${item.id}`} className="block">
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#3482b9] transition-colors leading-snug">
                              {item.name}
                            </h4>
                          </Link>
                          {item.tagline && (
                            <p className="text-xs font-medium text-slate-500 mt-1">
                              {item.tagline}
                            </p>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {item.description}
                        </p>

                        {item.highlights && item.highlights.length > 0 && (
                          <div className="pt-2 space-y-1.5 border-t border-slate-100">
                            {item.highlights.map((point, pIdx) => (
                              <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#3482b9] shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {item.technologies && item.technologies.length > 0 && (
                        <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                          {item.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Category Direct Items (For Categories without Subgroups: E-Invoicing & WEB) */}
            {category.items && category.items.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 hover:border-[#3482b9]/60 hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 group hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        {item.badge && (
                          <span className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200">
                            {item.badge}
                          </span>
                        )}
                        <Link
                          href={`/services/${item.id}`}
                          className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#3482b9] group-hover:text-white transition-colors shrink-0"
                          aria-label={`View details for ${item.name}`}
                        >
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>

                      <div>
                        <Link href={`/services/${item.id}`} className="block">
                          <h4 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#3482b9] transition-colors leading-tight">
                            {item.name}
                          </h4>
                        </Link>
                        {item.tagline && (
                          <p className="text-xs sm:text-sm font-semibold text-[#3482b9] mt-1.5">
                            {item.tagline}
                          </p>
                        )}
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {item.highlights && item.highlights.length > 0 && (
                        <div className="pt-3 space-y-2 border-t border-slate-100">
                          <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                            Key Deliverables:
                          </p>
                          {item.highlights.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {item.technologies && item.technologies.length > 0 && (
                      <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-2">
                        {item.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        )))}
      </div>

      {/* ============================================================== */}
      {/* 4. WHY CHOOSE MCT IT SOLUTIONS FOR SERVICES                    */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#3482b9]/10 text-[#3482b9] mb-3">
              Delivery Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
              Why Partner With MCT IT Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
              Proven Microsoft ecosystem specialists, agile delivery methodologies, and enterprise-grade SLA backing for global brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-[#3482b9]/40 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#3482b9]/10 flex items-center justify-center text-[#3482b9]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Microsoft Certified</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Certified Dynamics 365, Business Central, and Power Platform architects ensuring architecture best practices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-[#3482b9]/40 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#3482b9]/10 flex items-center justify-center text-[#3482b9]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Seamless Integration</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Turnkey API integration with government tax portals, IRP, Peppol gateways, and third-party SaaS ecosystems.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-[#3482b9]/40 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#3482b9]/10 flex items-center justify-center text-[#3482b9]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Modern Engineering</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Modern full-stack TypeScript, React, Node.js, React Native, and Swift native implementations for future-proof agility.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-[#3482b9]/40 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#3482b9]/10 flex items-center justify-center text-[#3482b9]">
                <FolderKanban className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Agile Delivery</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Transparent sprint milestones, rigorous quality assurance, automated CI/CD pipelines, and dedicated post-launch SLAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4.5 ENTERPRISE DELIVERY & INCIDENT SLA GUARANTEE               */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#0b1b3d] to-[#071329] text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3482b9]/15 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs font-bold uppercase tracking-wider text-[#5ba6db] mb-4 backdrop-blur-md">
              <ShieldAlert className="w-4 h-4 text-[#3482b9]" />
              <span>Service Level Agreements &amp; Delivery Standards</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase font-['Montserrat',sans-serif]">
              Built for Speed. Backed by Rigorous SLAs.
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-['Source_Sans_3',sans-serif]">
              Every enterprise project at MCT IT Solutions follows strict turn-around commitments, prototype validation, and mission-critical incident handling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* SLA Card 1 */}
            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#3482b9]/60 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/20 text-[#5ba6db] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#3482b9] group-hover:text-white transition-all">
                      <Rocket className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      <span className="text-[#3482b9] font-black">//</span>001
                    </span>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-3 py-1 rounded-full">
                    Pre-Kickoff
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Montserrat',sans-serif]">
                  5-Day Miniature POC
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-['Source_Sans_3',sans-serif]">
                  Before budget commitment, our consultants construct an interactive miniature prototype of your required workflow to validate feasibility, technical boundaries, and data mapping.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-2 text-xs text-[#5ba6db] font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero implementation surprise</span>
              </div>
            </div>

            {/* SLA Card 2 */}
            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#3482b9]/60 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/20 text-[#5ba6db] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#3482b9] group-hover:text-white transition-all">
                      <Clock className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      <span className="text-[#3482b9] font-black">//</span>002
                    </span>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#5ba6db] bg-[#3482b9]/20 border border-[#3482b9]/40 px-3 py-1 rounded-full">
                    Sprint Velocity
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Montserrat',sans-serif]">
                  Accelerated Turnaround (TAT)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-['Source_Sans_3',sans-serif]">
                  By utilizing modular AL extensions, reusable Power Automate flow libraries, and CI/CD pipelines, custom features ship in 2-week agile sprints without quality compromise.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-2 text-xs text-[#5ba6db] font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#5ba6db]" />
                <span>Rapid production deployment</span>
              </div>
            </div>

            {/* SLA Card 3 */}
            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#3482b9]/60 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/20 text-[#5ba6db] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#3482b9] group-hover:text-white transition-all">
                      <ShieldAlert className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      <span className="text-[#3482b9] font-black">//</span>003
                    </span>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-amber-300 bg-amber-950/70 border border-amber-500/40 px-3 py-1 rounded-full">
                    SLA &lt; 2-4 Hours
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Montserrat',sans-serif]">
                  P0 &amp; P1 Incident Escalation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-['Source_Sans_3',sans-serif]">
                  Dedicated emergency response pods for system-down or blocker scenarios. Live escalation bridge within hours to ensure maximum business continuity and revenue protection.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-2 text-xs text-amber-300 font-bold">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Immediate engineer assignment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. CALL TO ACTION                                              */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0b1b3d] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3482b9]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/10 text-slate-200 border border-white/20">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            Ready to Accelerate Your Digital Transformation?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Schedule a free discovery session with our technology consultants to evaluate your architecture, migration roadmap, or e-invoicing integration.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white text-sm font-bold shadow-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919510879991"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#3482b9]" />
              <span>+91 9510879991</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
