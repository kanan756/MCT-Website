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
  MapPin
} from "lucide-react";

import { Project } from "@/data/projects";

export default function ProjectsPage() {
  const [projectsList, setProjectsList] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTech, setSelectedTech] = useState<string>("All");

  useEffect(() => {
    fetch("/api/projects", { cache: "no-store" })
      .then((res) => res.json())
      .then((json) => {
        if (json.data && Array.isArray(json.data)) {
          setProjectsList(json.data);
        }
      })
      .catch((err) => console.warn("Failed to fetch live projects:", err))
      .finally(() => setLoading(false));
  }, []);

  // Filter categories based on core technologies / solutions
  const techFilters = [
    { label: "All Projects", value: "All" },
    { label: "Dynamics 365 Customer Service", value: "Customer Service" },
    { label: "Dynamics 365 Business Central", value: "Business Central" },
    { label: "API & Mobile Integration", value: "API" },
    { label: "Workflow Automation", value: "Workflow" },
  ];

  const filteredProjects = projectsList.filter((project) => {
    if (selectedTech === "All") return true;

    const matchesCategory = (project.solutionCategory || "").toLowerCase().includes(selectedTech.toLowerCase());
    const matchesTags = (project.tags || []).some((tag) => tag.toLowerCase().includes(selectedTech.toLowerCase()));
    const matchesTechs = (project.technologies || []).some((t) => t.name && t.name.toLowerCase().includes(selectedTech.toLowerCase()));

    return matchesCategory || matchesTags || matchesTechs;
  });

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">
      {/* ============================================================== */}
      {/* 1. HERO BANNER (Matches Career, Testimonial, Leadership Style) */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt="Projects Hero Background"
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
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6 tracking-wide">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/about" className="hover:text-white transition-colors duration-200">
              About Us
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Projects</span>
          </nav>

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#3482b9]" />
            <span>Client Success &amp; Case Studies</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-5 uppercase">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3482b9] via-[#5ba6db] to-sky-300">
              Projects
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed">
            Explore our proven track record of enterprise digital transformations, custom Microsoft Dynamics 365 solutions, and mission-critical operational platforms.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. PROJECTS LISTING GRID & WORKING TECHNOLOGY FILTER           */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#fbfcfd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#3482b9] font-black text-xs sm:text-sm tracking-widest uppercase bg-[#3482b9]/10 px-4 py-1.5 rounded-full">
              Enterprise Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-4">
              Real Impact, Measurable Success
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Click on the project card to explore the full case study including business challenges, operational solutions, key capabilities, and architecture.
            </p>

            {/* WORKING TECHNOLOGY FILTER (Directly after the paragraph as requested) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {techFilters.map((tab) => {
                const isActive = selectedTech === tab.value;
                return (
                  <button
                    key={tab.value}
                    onClick={() => setSelectedTech(tab.value)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 shadow-sm flex items-center gap-2 ${
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

          {loading ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/90 max-w-xl mx-auto p-8 shadow-sm">
              <div className="w-8 h-8 border-3 border-[#3482b9] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-xs sm:text-sm text-slate-500">Loading projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/90 max-w-xl mx-auto p-8 shadow-sm">
              <Layers className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-black text-slate-800 mb-1">No Projects Found</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-4">
                No projects matched the selected technology filter.
              </p>
              <button
                onClick={() => setSelectedTech("All")}
                className="px-5 py-2 rounded-full bg-[#3482b9] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1f6595] transition-colors"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProjects.map((project) => (
                <div
                  key={project.slug}
                  className="group bg-white rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_35px_-8px_rgba(52,130,185,0.18)] hover:border-[#3482b9]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Card Visual Banner (Clean preview without overlays) */}
                  <div className="relative w-full h-60 bg-transparent overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      
                      {/* Location with Map Icon on the Right (as per user reference screenshot) */}
                      <div className="flex justify-end items-center">
                        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700">
                          <MapPin className="w-4 h-4 text-[#3482b9]" />
                          <span>{project.location}</span>
                        </span>
                      </div>

                      {/* 1. Project Name */}
                      <h3 className="text-xl sm:text-2xl font-black text-[#3482b9] hover:text-[#1f6595] transition-colors leading-snug">
                        {project.name}
                      </h3>

                      {/* 2. One-line Main Point Description */}
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
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

                    {/* 3. Explore Project Details Button */}
                    <div className="pt-2">
                      <Link
                        href={`/about/projects/${project.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#3482b9] hover:bg-[#1f6595] text-white py-3.5 px-5 rounded-2xl font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group/btn"
                      >
                        <span>Explore Project Details</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. BOTTOM CTA                                                  */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 bg-[#0b1b3d] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3482b9]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 sm:p-12 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[#3482b9] font-bold text-xs uppercase tracking-widest">
                Start Your Digital Transformation
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                Have a Complex CRM or Field Service Project?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with our certified Microsoft Dynamics 365 and mobile development architects to build your next custom enterprise platform.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-4 rounded-full font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
