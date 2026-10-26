"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

interface TeamMember {
  name: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  { name: "Mihir Gohil" },
  { name: "Roshni Shah" },
  { name: "Rishabh Rathod" },
  { name: "Anas Shaikh" },
  { name: "Dhruv Patel" },
  { name: "Prem Mangnani" },
  { name: "Vrushti Prajapati" },
  { name: "Khushi Sheladiya" },
  { name: "Margi Gorasiya" },
  { name: "Prashant Barot" },
  { name: "Kinjal Barot" },
  { name: "Maurya Shah" },
  { name: "Rahul Pawar" },
  { name: "Shyam Parekh" },
  { name: "Umang Shrimali" },
  { name: "Kanan Patel" },
  { name: "Parth Prajapati" },
];

// Color palette for monogram initials
const MONOGRAM_COLORS = [
  "from-[#0b1b3d] to-[#3482b9]",
  "from-[#1f6595] to-[#5ba6db]",
  "from-[#0b1b3d] to-[#1f6595]",
  "from-[#3482b9] to-[#2563eb]",
  "from-[#1e293b] to-[#3482b9]",
  "from-[#0f172a] to-[#0284c7]",
];

export default function OurTeamPage() {
  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <div id="page" className="flex flex-col w-full bg-white text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-b-4 border-[#3482b9]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt="MCT Team Banner Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/88 to-[#0b1b3d]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/95 via-transparent to-[#0b1b3d]/40" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#3482b9]/20 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1d4ed8]/20 rounded-full blur-[130px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb Navigation: Home -> About Us -> Our Team */}
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Our Team</span>
          </nav>

          <div className="inline-block px-5 py-1.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase mb-4 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight max-w-3xl mx-auto mb-3 tracking-tight font-['Montserrat',sans-serif]">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Team
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal font-['Source_Sans_3',sans-serif]">
            The dedicated professionals and technology innovators driving excellence in every enterprise project.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. MEET THE TEAM MINIMALIST CIRCULAR GRID                      */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading matching website typography */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-6 max-w-4xl mx-auto">
              <div className="flex-1 h-px bg-gray-200" />
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase px-4 whitespace-nowrap font-['Montserrat',sans-serif]">
                Meet The Team
              </h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
          </div>

          {/* Team Members Grid: Row of 5 columns on desktop, clean circular portraits */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 sm:gap-x-8 gap-y-10 sm:gap-y-14 justify-center items-start max-w-6xl mx-auto">
            {TEAM_MEMBERS.map((member, idx) => {
              const bgGradient = MONOGRAM_COLORS[idx % MONOGRAM_COLORS.length];
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group cursor-default p-2"
                >
                  {/* Clean Monogram Circle Portrait with fluid responsive sizing */}
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-sm mb-3.5 sm:mb-4 transition-transform duration-300 group-hover:scale-105 border-2 border-white ring-2 ring-slate-100 flex items-center justify-center">
                    <div className={`w-full h-full bg-gradient-to-br ${bgGradient} flex flex-col items-center justify-center text-white select-none`}>
                      <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-wider font-['Montserrat',sans-serif]">
                        {getInitials(member.name)}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold text-sky-200 uppercase tracking-widest mt-0.5">
                        MCT
                      </span>
                    </div>
                  </div>

                  {/* Name in official Montserrat font */}
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 tracking-tight font-['Montserrat',sans-serif] group-hover:text-[#3482b9] transition-colors leading-snug">
                    {member.name}
                  </h3>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. CTA FOOTER SECTION                                          */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
            Interested in Joining Our Team?
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-['Source_Sans_3',sans-serif]">
            Explore exciting career opportunities across Microsoft Dynamics 365, Cloud Systems, and Enterprise Software.
          </p>
          <div className="pt-2">
            <Link
              href="/about/careers"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#3482b9] hover:bg-[#1f6595] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#3482b9]/20 font-['Montserrat',sans-serif]"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
