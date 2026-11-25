"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  Building2,
  Cpu,
  Layers,
  MapPin,
  Filter,
  CheckCircle2,
  Clock
} from "lucide-react";

import { Project, PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  const [projectsList, setProjectsList] = useState<Project[]>(PROJECTS);
  const [loading, setLoading] = useState(true);
  const [selectedTech, setSelectedTech] = useState<string>("All");

  useEffect(() => {
    fetch("/api/projects", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((json) => {
        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          setProjectsList(json.data);
        } else {
          setProjectsList(PROJECTS);
        }
      })
      .catch((err) => {
        console.warn("Failed to fetch live projects, using fallback:", err);
        setProjectsList(PROJECTS);
      })
      .finally(() => setLoading(false));
  }, []);

  // Filter categories based on core technologies / sectors
  const techFilters = [
    { label: "All Case Studies", value: "All" },
    { label: "Customer Service (CRM)", value: "Customer Service" },
    { label: "Business Central (ERP)", value: "Business Central" },
    { label: "E-Invoicing & Compliance", value: "E-Invoicing" },
    { label: "API & Mobile Integration", value: "API" },
    { label: "Workflow Automation", value: "Workflow" },
  ];

  const filteredProjects = projectsList.filter((project) => {
    if (selectedTech === "All") return true;

    const matchesCategory = (project.solutionCategory || "").toLowerCase().includes(selectedTech.toLowerCase());
    const matchesTags = (project.tags || []).some((tag) => tag.toLowerCase().includes(selectedTech.toLowerCase()));
    const matchesTechs = (project.technologies || []).some((t) => t.name && t.name.toLowerCase().includes(selectedTech.toLowerCase()));
    const matchesName = (project.name || "").toLowerCase().includes(selectedTech.toLowerCase());

    return matchesCategory || matchesTags || matchesTechs || matchesName;
  });

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">
      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt="Case Studies Hero Background"
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
            <Link href="/about" className="hover:text-white transition-colors duration-200">
              About Us
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Case Studies &amp; Projects</span>
          </nav>

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase mb-4 backdrop-blur-md font-['Montserrat',sans-serif]">
            <Sparkles className="w-4 h-4 text-[#3482b9]" />
            <span>Proven Enterprise Delivery</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-5 uppercase font-['Montserrat',sans-serif]">
            Case Studies &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Portfolio
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed font-['Source_Sans_3',sans-serif]">
            Explore our verified track record of enterprise digital transformations, Microsoft Dynamics 365 implementations, and mission-critical automation platforms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 font-['Montserrat',sans-serif]">
            <Link
              href="/contact?type=case-study"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Discuss Your Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#portfolio"
              className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CASE STUDIES LISTING GRID & WORKING TECHNOLOGY FILTER       */}
      {/* ============================================================== */}
      <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-[#fbfcfd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-[#3482b9] font-black text-xs sm:text-sm tracking-widest uppercase bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 font-['Montserrat',sans-serif]">
              Enterprise Delivery Evidence
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
              Real Business Impact &amp; Measured Outcomes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-['Source_Sans_3',sans-serif]">
              Click on any project to review the complete business challenge, solution architecture, scope deliverables, and verified operational results.
            </p>

            {/* WORKING TECHNOLOGY & SECTOR FILTER */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {techFilters.map((tab) => {
                const isActive = selectedTech === tab.value;
                return (
                  <button
                    key={tab.value}
                    onClick={() => setSelectedTech(tab.value)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 shadow-xs flex items-center gap-2 font-['Montserrat',sans-serif] ${
                      isActive
                        ? "bg-[#3482b9] text-white shadow-md shadow-[#3482b9]/25 scale-105"
                        : "bg-white text-slate-700 hover:text-[#3482b9] hover:bg-slate-50 border border-slate-200/90"
                    }`}
                  >
                    <Cpu className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#3482b9]"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {loading && projectsList.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/90 max-w-xl mx-auto p-8 shadow-sm">
              <div className="w-8 h-8 border-3 border-[#3482b9] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-xs sm:text-sm text-slate-500">Loading case studies...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 max-w-xl mx-auto p-8 shadow-sm">
              <Layers className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-black text-slate-800 mb-1 font-['Montserrat',sans-serif]">No Case Studies Found</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6 font-['Source_Sans_3',sans-serif]">
                No projects matched &ldquo;{selectedTech}&rdquo;. Try another filter.
              </p>
              <button
                onClick={() => setSelectedTech("All")}
                className="px-6 py-2.5 rounded-full bg-[#3482b9] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1f6595] transition-colors"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProjects.map((project) => (
                <article
                  key={project.slug}
                  className="group bg-white rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_35px_-8px_rgba(52,130,185,0.18)] hover:border-[#3482b9]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Card Visual Banner */}
                  <div className="relative w-full h-56 sm:h-60 bg-slate-50 overflow-hidden border-b border-slate-100">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#0b1b3d]/90 backdrop-blur-md text-white border border-white/20 shadow-md">
                        {project.solutionCategory.split("•")[0].trim()}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      
                      {/* Location & Client meta */}
                      <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                        <span className="flex items-center gap-1.5 text-slate-700">
                          <MapPin className="w-3.5 h-3.5 text-[#3482b9]" />
                          <span>{project.location}</span>
                        </span>
                        <span className="text-slate-400">{project.duration}</span>
                      </div>

                      {/* Project Name */}
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#3482b9] transition-colors leading-snug font-['Montserrat',sans-serif]">
                        <Link href={`/case-studies/${project.slug}`}>
                          {project.name}
                        </Link>
                      </h3>

                      {/* Tagline / Brief Description */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 font-['Source_Sans_3',sans-serif]">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-[11px] font-semibold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-[11px] font-semibold text-[#3482b9]">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Explore Button */}
                    <div className="pt-2 font-['Montserrat',sans-serif]">
                      <Link
                        href={`/case-studies/${project.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#3482b9] hover:bg-[#1f6595] text-white py-3.5 px-5 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group/btn"
                      >
                        <span>View Full Case Study</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. BOTTOM CTA BANNER                                           */}
      {/* ============================================================== */}
      <section className="py-20 bg-[#0b1b3d] text-white relative overflow-hidden border-t-4 border-[#3482b9]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3482b9]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 sm:p-12 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[#5ba6db] font-bold text-xs uppercase tracking-widest font-['Montserrat',sans-serif]">
                Start Your Digital Transformation
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-['Montserrat',sans-serif]">
                Have a Complex Enterprise CRM or ERP Roadmap?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-['Source_Sans_3',sans-serif]">
                Speak directly with our technical consultants to audit your current architecture, explore relevant case studies, and receive a 5-Day POC.
              </p>
            </div>
            <div className="shrink-0 flex flex-wrap items-center justify-center gap-4 font-['Montserrat',sans-serif]">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-4 rounded-full font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact?type=poc"
                className="px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105"
              >
                Request 5-Day POC
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
