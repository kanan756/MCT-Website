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
  Tag,
  Briefcase,
  AlertTriangle
} from "lucide-react";

import { PROJECTS } from "@/data/projects";
import { getLiveProjects, getLiveProjectBySlug } from "@/lib/contentRepo";

export const dynamic = "force-dynamic";

interface ProjectDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getLiveProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getLiveProjectBySlug(slug);

  if (!project) {
    return {
      title: "Case Study Not Found | MCT IT Solutions",
    };
  }

  return {
    title: `${project.name} | Case Study | MCT IT Solutions`,
    description: project.summary,
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
    openGraph: {
      title: `${project.name} | Enterprise Case Study | MCT IT Solutions`,
      description: project.summary,
      url: `https://www.miracle-cloudtechnology.com/case-studies/${slug}`,
      siteName: "MCT IT Solutions",
      type: "article",
    },
  };
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = await getLiveProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = await getLiveProjects();
  const otherProjects = allProjects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
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
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6 tracking-wide font-['Montserrat',sans-serif]">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/about" className="hover:text-white transition-colors duration-200">
              About Us
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/case-studies" className="hover:text-white transition-colors duration-200">
              Case Studies
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold truncate max-w-[200px] sm:max-w-none">
              {project.name}
            </span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase backdrop-blur-md font-['Montserrat',sans-serif]">
              <Sparkles className="w-4 h-4 text-[#3482b9]" />
              <span>{project.solutionCategory}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight font-['Montserrat',sans-serif]">
              {project.name}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl font-normal font-['Source_Sans_3',sans-serif]">
              {project.tagline}
            </p>
          </div>

          {/* Quick Meta Stats Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10 font-['Montserrat',sans-serif]">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Solution Domain</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#3482b9] shrink-0" />
                <span className="truncate">{project.solutionCategory.split("•")[0].trim()}</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Client / Region</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#3482b9] shrink-0" />
                <span>{project.location}</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Implementation Duration</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#3482b9] shrink-0" />
                <span>{project.duration} ({project.year})</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Delivery Outcome</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live in Production</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. MAIN ENTERPRISE CASE STUDY CONTAINER                         */}
      {/* Narrative: Context -> Challenge -> Solution -> Scope/Tech -> Outcome */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Action */}
          <div className="mb-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#3482b9] transition-colors bg-white px-4 py-2 rounded-full border border-slate-200/80 shadow-xs font-['Montserrat',sans-serif]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>&larr; Back to Case Studies &amp; Portfolio</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT / MAIN COLUMN: Structured Case Study Narrative */}
            <main className="lg:col-span-8 space-y-8 sm:space-y-10">

              {/* 1. EXECUTIVE SUMMARY & CLIENT CONTEXT */}
              <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 bg-gradient-to-br from-[#0b1b3d] to-[#122b5e] text-white p-6 sm:p-8 md:p-10">
                <div className="space-y-3">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#5ba6db] bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm inline-block font-['Montserrat',sans-serif]">
                    Executive Summary &amp; Client Context
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight font-['Montserrat',sans-serif]">
                    {project.name}
                  </h2>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed pt-2 font-['Source_Sans_3',sans-serif]">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* 2. PROJECT INTERFACE / ARCHITECTURE PREVIEW */}
              <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#3482b9]" />
                    <span className="text-xs sm:text-sm font-extrabold text-slate-800 uppercase tracking-wider font-['Montserrat',sans-serif]">
                      Production Solution Interface Preview
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest truncate max-w-[200px]">
                    {project.solutionCategory}
                  </span>
                </div>

                <div className="relative w-full h-72 sm:h-96 md:h-[500px] rounded-2xl overflow-hidden bg-slate-50 group flex items-center justify-center p-2 border border-slate-100">
                  <Image
                    src={project.image}
                    alt={`${project.name} Screenshot`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
                <p className="text-xs text-slate-500 text-center italic font-['Source_Sans_3',sans-serif]">
                  Production Interface &amp; Operational Flow: {project.name}
                </p>
              </div>

              {/* 3. CLIENT CONTEXT & PROJECT OVERVIEW */}
              <article className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center font-black">
                    01
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
                    Client Context &amp; Background
                  </h3>
                </div>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-['Source_Sans_3',sans-serif]">
                  {project.overview.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </article>

              {/* 4. BUSINESS CHALLENGE */}
              <article className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-5 relative overflow-hidden">
                <div className="w-2 h-full bg-[#e74c3c] absolute left-0 top-0" />
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-[#e74c3c]/10 text-[#e74c3c] flex items-center justify-center font-black">
                    02
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
                      Business Challenges &amp; Friction Points
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  {project.businessChallenges.map((challenge, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 flex items-start gap-3"
                    >
                      <AlertTriangle className="w-5 h-5 text-[#e74c3c] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-['Source_Sans_3',sans-serif]">
                        {challenge}
                      </span>
                    </div>
                  ))}
                </div>
              </article>

              {/* 5. SOLUTION DELIVERED */}
              <article className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-5 relative overflow-hidden">
                <div className="w-2 h-full bg-[#3482b9] absolute left-0 top-0" />
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center font-black">
                    03
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
                      Solution Architecture &amp; Delivery
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  {project.solutionDelivered.map((sol, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-['Source_Sans_3',sans-serif]">
                        {sol}
                      </span>
                    </div>
                  ))}
                </div>
              </article>

              {/* 6. IMPLEMENTATION SCOPE & KEY CAPABILITIES */}
              <article className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center font-black">
                    04
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
                    Implementation Scope &amp; Functional Modules
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
                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base font-['Montserrat',sans-serif]">
                          {cap.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4 font-['Source_Sans_3',sans-serif]">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              {/* 7. TECHNOLOGIES & INTEGRATION STACK */}
              <article className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center font-black">
                    05
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
                      Technologies &amp; Integrations Deployed
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-['Source_Sans_3',sans-serif]">
                      Component architecture and role within the solution ecosystem
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100/80 text-slate-900 uppercase font-black tracking-wider text-[11px] border-b border-slate-200 font-['Montserrat',sans-serif]">
                      <tr>
                        <th className="py-3.5 px-4 sm:px-6 w-1/2">Technology / Service</th>
                        <th className="py-3.5 px-4 sm:px-6 w-1/2">Purpose &amp; Integration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 font-['Source_Sans_3',sans-serif]">
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

              {/* 8. MEASURABLE BUSINESS VALUES & OUTCOMES */}
              <article className="bg-gradient-to-br from-[#0b1b3d] to-[#122b5e] text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-[#3482b9]/30 space-y-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#5ba6db] font-['Montserrat',sans-serif]">
                    Outcome &amp; Impact
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 font-['Montserrat',sans-serif]">
                    Measurable Business Outcomes
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 font-['Source_Sans_3',sans-serif]">
                    Verified operational efficiencies delivered upon live production rollout.
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
                      <span className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed font-['Source_Sans_3',sans-serif]">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </article>

            </main>

            {/* RIGHT SIDEBAR: Snapshot, Verified Tags, Contact Action */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="lg:sticky lg:top-28 space-y-6">

                {/* Project Snapshot Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
                  <h3 className="font-black text-base text-slate-900 pb-3 border-b border-slate-100 font-['Montserrat',sans-serif]">
                    Case Study Snapshot
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm font-['Source_Sans_3',sans-serif]">
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Core Platform</span>
                      <span className="font-bold text-slate-800 text-right truncate max-w-[170px]">{project.solutionCategory}</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Industry / Domain</span>
                      <span className="font-bold text-slate-800 truncate max-w-[170px]">{project.client}</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Region</span>
                      <span className="font-bold text-slate-800">{project.location}</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Delivery Period</span>
                      <span className="font-bold text-slate-800">{project.duration} ({project.year})</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-slate-500">Status</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Live in Production</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                    <Tag className="w-4 h-4 text-[#3482b9]" />
                    <h3 className="font-black text-sm text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
                      Technologies &amp; Tags
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct CTA Card */}
                <div className="bg-gradient-to-br from-[#0b1b3d] to-[#122b5e] text-white rounded-3xl p-6 sm:p-7 shadow-md border border-[#3482b9]/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#3482b9]/20 border border-[#3482b9]/40 flex items-center justify-center text-[#5ba6db] mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="font-black text-base text-white font-['Montserrat',sans-serif]">
                    Need a Similar Solution?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    Let our certified Dynamics 365 and ERP architects design an enterprise implementation roadmap tailored to your operations.
                  </p>
                  <div className="pt-2 font-['Montserrat',sans-serif]">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#3482b9] hover:bg-[#1f6595] text-white py-3.5 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
                    >
                      <span>Discuss Your Requirements</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Professional Compliance & Confidentiality Notice */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-center space-y-1.5 text-xs text-slate-500 font-['Source_Sans_3',sans-serif]">
                  <div className="flex items-center justify-center gap-1.5 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Verified Project Engagement</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-500">
                    Client names and proprietary operational metrics have been generalized to uphold strict NDA confidentiality and enterprise data compliance agreements.
                  </p>
                </div>

              </div>
            </aside>

          </div>

          {/* OTHER CASE STUDIES */}
          {otherProjects.length > 0 && (
            <div className="mt-20 pt-12 border-t border-slate-200 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#3482b9] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 font-['Montserrat',sans-serif]">
                    Related Delivery
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif] mt-2">
                    Explore Other Case Studies
                  </h3>
                </div>
                <Link
                  href="/case-studies"
                  className="text-xs sm:text-sm font-bold text-[#3482b9] hover:underline inline-flex items-center gap-1 uppercase tracking-wider font-['Montserrat',sans-serif]"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherProjects.map((p) => (
                  <div
                    key={p.slug}
                    className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#3482b9]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#3482b9] text-white">
                          {p.solutionCategory.split("•")[0].trim()}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-50 border border-slate-200 text-slate-600">
                          {p.location}
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#3482b9] transition-colors font-['Montserrat',sans-serif]">
                        <Link href={`/case-studies/${p.slug}`}>
                          {p.name}
                        </Link>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 font-['Source_Sans_3',sans-serif]">
                        {p.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-['Montserrat',sans-serif]">
                      <span className="text-xs font-semibold text-slate-500">
                        {p.duration}
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
          )}

        </div>
      </section>

    </div>
  );
}

