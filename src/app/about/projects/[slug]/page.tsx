import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Building2,
  Clock,
  Sparkles,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Target,
  Smartphone,
  Workflow,
  Mail,
  FileCheck,
  Award,
  Zap,
  Tag
} from "lucide-react";

import { PROJECTS, getProjectBySlug } from "@/data/projects";

interface ProjectDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | MCT IT Solutions",
    };
  }

  return {
    title: `${project.name} | MCT IT Solutions Case Study`,
    description: project.summary,
  };
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">
      {/* ============================================================== */}
      {/* 1. HERO BANNER (Matches Leadership/Careers/Testimonials style) */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt={project.name}
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
          <nav className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6 tracking-wide">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/about" className="hover:text-white transition-colors duration-200">
              About Us
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/about/projects" className="hover:text-white transition-colors duration-200">
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold truncate max-w-[200px] sm:max-w-none">
              {project.name}
            </span>
          </nav>

          <div className="max-w-4xl space-y-4">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#3482b9]" />
              <span>{project.solutionCategory}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              {project.name}
            </h1>

            {/* 1-Line Tagline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl font-normal">
              {project.tagline}
            </p>
          </div>

          {/* Quick Meta Stats Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Solution Domain</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#3482b9] shrink-0" />
                <span className="truncate">{project.solutionCategory.split("•")[0].trim()}</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Deployment Region</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#3482b9] shrink-0" />
                <span>{project.location}</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Timeline</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#3482b9] shrink-0" />
                <span>{project.duration} ({project.year})</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Delivery Status</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live in Production</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. MAIN PROJECT CASE STUDY CONTENT                             */}
      {/* Sections 1 to 9 strictly structured as provided by user         */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/about/projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#3482b9] transition-colors bg-white px-4 py-2 rounded-full border border-slate-200/80 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* LEFT / MAIN COLUMN: Detailed Information */}
            <main className="lg:col-span-8 space-y-8 sm:space-y-10">

              {/* Showcase Banner with Summary */}
              <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 bg-gradient-to-br from-[#0b1b3d] to-[#122b5e] text-white p-6 sm:p-8 md:p-10">
                <div className="space-y-3">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#5ba6db] bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                    Executive Summary
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
                    {project.name}
                  </h2>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed pt-2">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Project Screenshot Showcase */}
              <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#3482b9]" />
                    <span className="text-xs sm:text-sm font-extrabold text-slate-800 uppercase tracking-wider">
                      Application Interface Preview
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest truncate max-w-[200px]">
                    {project.solutionCategory}
                  </span>
                </div>

                <div className="relative w-full h-72 sm:h-96 md:h-[520px] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 group shadow-sm flex items-center justify-center p-2">
                  <Image
                    src={project.image}
                    alt={`${project.name} Application Screenshot`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
                <p className="text-xs text-slate-500 text-center italic">
                  Live System Interface &amp; Operational Workflow Preview: {project.name}
                </p>
              </div>

              {/* Section 2: Project Overview */}
              <article className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center font-black">
                    01
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Project Overview
                  </h3>
                </div>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {project.overview.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </article>

              {/* Section 3: Business Challenge */}
              <article className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-5 relative overflow-hidden">
                <div className="w-2 h-full bg-[#e74c3c] absolute left-0 top-0" />
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-[#e74c3c]/10 text-[#e74c3c] flex items-center justify-center font-black">
                    02
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Business Challenge
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Coordinating Multi-Stage Operations &amp; Time-Sensitive Approvals
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Managing pet imports involves multiple stages, customer information requirements, payment confirmation, government permit coordination, and time-sensitive airport pickup and delivery activities. The solution addresses the need to coordinate these activities within a structured process, including:
                </p>

                <div className="space-y-3 pt-1">
                  {project.businessChallenges.map((challenge, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 flex items-start gap-3"
                    >
                      <Target className="w-5 h-5 text-[#e74c3c] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                        {challenge}
                      </span>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 4: Solution Delivered */}
              <article className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-5 relative overflow-hidden">
                <div className="w-2 h-full bg-[#3482b9] absolute left-0 top-0" />
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center font-black">
                    03
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Solution Delivered
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Microsoft Dynamics 365 Customer Service + Connected Driver Mobile App
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  The solution combines Microsoft Dynamics 365 Customer Service (On-Premises) with a connected Driver Mobile App to manage the pet import service lifecycle. Our implementation covers the following key areas:
                </p>

                <div className="space-y-3 pt-1">
                  {project.solutionDelivered.map((sol, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                        {sol}
                      </span>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 5: Key Capabilities Delivered */}
              <article className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center font-black">
                    04
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Key Capabilities Delivered
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.capabilities.map((cap, capIdx) => (
                    <div
                      key={capIdx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#3482b9]/50 transition-colors space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#3482b9]" />
                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                          {cap.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 6: Business Value */}
              <article className="bg-gradient-to-br from-[#0b1b3d] to-[#122b5e] text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-[#3482b9]/30 space-y-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#5ba6db]">
                    Section 6
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    Business Value Delivered
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1">
                    The solution provides a structured foundation for coordinating pet import operations and customer service activities.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.businessValues.map((val, vIdx) => (
                    <div
                      key={vIdx}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#3482b9] text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 7: Technologies and Integrations Table */}
              <article className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center font-black">
                    05
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Technologies and Integrations
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Architectural components and purpose within the solution
                    </p>
                  </div>
                </div>

                {/* Responsive Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100/80 text-slate-900 uppercase font-black tracking-wider text-[11px] border-b border-slate-200">
                      <tr>
                        <th className="py-3.5 px-4 sm:px-6 w-1/2">Technology</th>
                        <th className="py-3.5 px-4 sm:px-6 w-1/2">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {project.technologies.map((tech, tIdx) => (
                        <tr key={tIdx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 align-top">
                            {tech.name}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 leading-relaxed align-top">
                            {tech.purpose}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>

            </main>

            {/* RIGHT SIDEBAR: Snapshot, Tags & CTA */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="lg:sticky lg:top-28 space-y-6">

                {/* Section 9: Website Tags */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                    <Tag className="w-5 h-5 text-[#3482b9]" />
                    <h3 className="font-black text-base text-slate-900 tracking-tight">
                      Project Tags
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 hover:border-[#3482b9] hover:text-[#3482b9] transition-colors"
                      >
                        ❖ {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Snapshot Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
                  <h3 className="font-black text-base text-slate-900 pb-3 border-b border-slate-100">
                    Project Snapshot
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Platform</span>
                      <span className="font-bold text-slate-800 text-right truncate max-w-[170px]">{project.solutionCategory}</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Client / Target</span>
                      <span className="font-bold text-slate-800 truncate max-w-[170px]">{project.client}</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Location</span>
                      <span className="font-bold text-slate-800">{project.location}</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Timeline</span>
                      <span className="font-bold text-slate-800">{project.duration} ({project.year})</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-slate-500">Delivery Status</span>
                      <span className="font-bold text-[#3482b9]">Live in Production</span>
                    </div>
                  </div>
                </div>

                {/* Direct Consultation Box */}
                <div className="bg-gradient-to-br from-[#0b1b3d] to-[#122b5e] text-white rounded-3xl p-6 shadow-md border border-[#3482b9]/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/20 border border-[#3482b9]/40 flex items-center justify-center text-[#5ba6db] mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="font-black text-base text-white">Need a Similar Solution?</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Let’s discuss your technical requirements and build a high-performance roadmap tailored for your business.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#3482b9] hover:bg-[#1f6595] text-white py-3 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Contact Our Architects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </aside>

          </div>

        </div>
      </section>
    </div>
  );
}
