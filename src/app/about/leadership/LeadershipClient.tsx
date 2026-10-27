"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Mail, User } from "lucide-react";

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Ravi Brahmbhatt",
      role: "Founder India, Chairman & CEO",
      image: "/ravi-brahmbhatt.png",
      bio: "Ravi is a B.Tech. graduate in computer science and a Microsoft certified with 8+ yrs of experience in providing enterprise level of solutions to various MNC’s across the globe. With his leadership vision he founded India office 4 years ago with only one client on board. With his vision, leadership and guidance MCT IT Solutions Pvt. Ltd. has reached many heights with branches across the globe.",
      email: "rmb@miraclecloud-technology.com",
    },
    {
      name: "Nihal Bhatasna",
      role: "Chief Technology Officer",
      image: "/nihal.png",
      bio: "Nihal is the Chief Technology Officer at MCT IT Solutions. Lead the strategy for technology platforms, partnerships and external relationships. Represent the technological agenda in staff meetings and when making hiring decisions. Identify, compare, select and implement technology solutions to meet current and future needs. Develop, track and control the development of annual operating and capital budgets for purchasing, staffing and operations. Manage and optimize infrastructure assets to satisfy internal financial targets.",
      email: "nbhatasna@miraclecloud-technology.com",
    },
    {
      name: "Sunny Macwan",
      role: "Chief Information Officer",
      image: "/sunny_01.png",
      bio: "Sunny is the Chief Information Officer at MCT IT Solutions. Communicates goals, projects, and timelines of the company to the department; plans ways to execute those goals within the department. Researching new systems to improve infrastructure. Selecting and implementing suitable technology to streamline all internal operations and help optimize their strategic benefits. Designing and customizing technological systems and platforms to improve customer experience. Collaborating with vendors and suppliers to acquire the best business solutions.",
      email: "sunnym@miraclecloud-technology.com",
    },
    {
      name: "Kaushal Lalani",
      role: "Resource Manager",
      image: "/kaushal-scaled-thegem-person.jpg",
      bio: "Kaushal is the Resource Manager at MCT IT Solutions. Assigning available staff to projects based on their skills and experience. Providing project managers with ongoing resource management and related support. Monitoring employee utilization, workload. Collaborating on resource management with internal departments. Documenting processes and maintaining records.",
      email: "klalani@miraclecloud-technology.com",
    },
    {
      name: "Nilesh Kalma",
      role: "Chief Financial Officer",
      image: "/nilesh-scaled-thegem-person.jpg",
      bio: "Nilesh is the Chief Financial Officer at MCT IT Solutions. Manage the company’s financial planning. Plan and perform risk management duties. Analyze and manage the organization’s liabilities and investments. Plan, implement and manage investment strategies. Prepare current reports. Adhere to the law and company’s policies. Driving our company’s financial planning. Deciding on investment strategies by considering cash and liquidity risks.",
      email: "nkalma@miraclecloud-technology.com",
    },
  ];

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image: public/bg-aboutus.png */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt="Leadership Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/88 to-[#0b1b3d]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/95 via-transparent to-[#0b1b3d]/40" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3482b9]/25 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#1d4ed8]/20 rounded-full blur-[130px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Breadcrumb Navigation: Home -> Leadership */}
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Leadership</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-6 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-4 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Leadership
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            Visionary leaders driving enterprise excellence, Microsoft Dynamics specialization, and forward-thinking engineering.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. OUR TEAM: 3-COLUMN LEADER CARDS GRID                        */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

          {/* Section Divider Header: OUR TEAM */}
          <div className="flex items-center justify-center gap-6 max-w-4xl mx-auto">
            <div className="flex-1 h-px bg-gray-200" />
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase px-4 whitespace-nowrap">
              OUR LEADERS
            </h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Leaders Grid: Unique Modern Executive Card Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl bg-gradient-to-b from-white via-slate-50/50 to-white border border-slate-200/90 hover:border-[#3482b9]/60 p-8 flex flex-col justify-between items-center text-center transition-all duration-500 hover:shadow-[0_20px_50px_rgba(52,130,185,0.18)] hover:-translate-y-2 group overflow-hidden"
              >
                {/* Top Subtle Gradient Accent Glow */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#3482b9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#3482b9]/10 rounded-full blur-2xl group-hover:bg-[#3482b9]/25 transition-all duration-500 pointer-events-none" />

                <div className="space-y-5 flex flex-col items-center w-full relative z-10">
                  {/* Executive Portrait with Double Ring & Brand Glow */}
                  <div className="relative group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#3482b9] to-sky-300 blur-sm opacity-40 group-hover:opacity-80 transition-opacity" />
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100 shrink-0 ring-2 ring-slate-100 group-hover:ring-[#3482b9]/40 transition-all flex items-center justify-center">
                      {leader.image && leader.image !== "/" ? (
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#0b1b3d] to-[#3482b9] flex flex-col items-center justify-center text-white">
                          <span className="text-2xl font-black tracking-wider">
                            {leader.name.split(" ").map(n => n[0]).join("")}
                          </span>
                          <span className="text-[10px] font-bold text-sky-200 uppercase tracking-widest mt-0.5">MCT</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Name & Role Badge */}
                  <div className="space-y-2 w-full">
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-[#3482b9] transition-colors">
                      {leader.name}
                    </h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[11px] sm:text-xs font-bold text-[#1f6595] tracking-wide">
                      {leader.role}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-center font-normal pt-1">
                    {leader.bio}
                  </p>
                </div>

                {/* Email Footer Link with Button Capsule */}
                <div className="pt-6 border-t border-slate-200/80 w-full flex justify-center relative z-10 mt-6">
                  <a
                    href={`mailto:${leader.email}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-white border border-slate-200 hover:border-[#3482b9] hover:bg-sky-50/70 text-xs font-bold text-[#3482b9] hover:text-[#1f6595] transition-all duration-300 flex items-center justify-center gap-2 shadow-xs group/btn break-all"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-[#3482b9] group-hover/btn:scale-110 transition-transform" />
                    <span className="truncate">{leader.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
