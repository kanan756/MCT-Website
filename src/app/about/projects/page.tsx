"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Sparkles, FolderGit2, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white min-h-[75vh]">
      
      {/* 1. Hero Banner */}
      <section className="relative w-full py-20 sm:py-24 text-white overflow-hidden border-b-4 border-[#3482b9]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt="Projects Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/88 to-[#0b1b3d]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/90 via-transparent to-[#0b1b3d]/50" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#3482b9]/25 rounded-full blur-[140px] pointer-events-none z-0" />

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

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-4 uppercase">
            Projects
          </h1>
        </div>
      </section>

      {/* 2. Coming Soon Content */}
      <section className="py-24 sm:py-32 flex-1 flex items-center justify-center bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-[#3482b9]/10 text-[#3482b9] border border-[#3482b9]/30 shadow-lg mx-auto">
            <FolderGit2 className="w-12 h-12" />
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#3482b9]/10 text-[#3482b9]">
              <Sparkles className="w-3.5 h-3.5 text-[#3482b9]" /> Under Development
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
              Project Page Coming Soon
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
              We are curating our portfolio of enterprise Dynamics 365, Power Platform, and ERP customer success stories. Stay tuned!
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/"
              className="px-8 py-3.5 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm uppercase tracking-wider transition-all duration-300"
            >
              <span>Contact Us</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
