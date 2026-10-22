"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  Monitor,
  Users,
  Smile,
  Clock,
  GraduationCap,
  Building2,
  Sparkles,
  CheckCircle2,
  Send
} from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";

export default function CareersPage() {
  const whyJoinUs = [
    {
      title: "Work with new technologies",
      description: "You’ll work with new technologies, while they’re still new.",
      icon: Monitor,
      highlight: "Cutting-Edge Tech",
      color: "from-blue-500/10 to-[#3482b9]/20"
    },
    {
      title: "Work with a diverse team",
      description: "You’ll work with a diverse team across different regions and backgrounds.",
      icon: Users,
      highlight: "Global Collaboration",
      color: "from-sky-500/10 to-indigo-500/20"
    },
    {
      title: "Discover fun in work",
      description: "You’ll discover how to make work fun every single day.",
      icon: Smile,
      highlight: "Positive Vibes",
      color: "from-cyan-500/10 to-[#3482b9]/20"
    },
  ];

  const pillars = [
    {
      title: "Work/Life Integration at MCT IT Solutions",
      description:
        "More than half of the team at MCT IT Solutions works remotely full-time, enjoying the flexibility to manage their schedules and achieve better work-life integration. This culture is built on trust, support, and collaboration, which allows our employees to remain connected with colleagues and clients from anywhere, using advanced online communication platforms.",
      icon: Clock,
      badge: "Remote & Flexible",
    },
    {
      title: "Collaborative Culture at MCT IT Solutions",
      description:
        "At MCT IT Solutions, we encourage employees to participate in important decisions and bring fresh, creative solutions to the table, especially in the realm of Microsoft Dynamics 365. Our collaborative culture fosters innovation, enabling you to directly influence client businesses and contribute to the organization’s growth. Engage with leadership, share your ideas, and help drive digital transformation in the business world.",
      icon: Building2,
      badge: "Open Dialogue",
    },
    {
      title: "Career Development at MCT IT Solutions",
      description:
        "We are passionate about the professional growth of our employees. MCT IT Solutions supports external learning opportunities, including certifications in Microsoft Dynamics 365 and other cutting-edge technologies, as well as conferences and industry events. Employees also have access to MCT IT Solutions University, our internal platform that offers a wide range of professional courses to further their development. With a clear path to growth and continuous learning, our employees are prepared to thrive in the fast-paced world of business technology solutions.",
      icon: GraduationCap,
      badge: "Continuous Learning",
    },
  ];

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image: matching site wide style */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt="Careers Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/88 to-[#0b1b3d]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/90 via-transparent to-[#0b1b3d]/50" />
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
            <Link href="/about" className="hover:text-white transition-colors duration-200">
              About Us
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Careers</span>
          </nav>

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#3482b9]" />
            <span>Join Our Growing Team</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-5 uppercase">
            Careers
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed">
            Discover meaningful work, continuous learning, and an empowering culture where your ideas shape the future of enterprise technology.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. THE MCT IT SOLUTIONS EXPERIENCE                             */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase bg-[#3482b9]/10 text-[#3482b9] mb-4">
              Our Journey & Vision
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
              The MCT IT Solutions Experience
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#f8fafc] border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Innovation is at the heart of <strong className="text-slate-900 font-bold">MCT IT Solutions</strong>. Our dynamic environment attracts top-tier talent who thrive on being at the forefront of technology, particularly in delivering <strong className="text-[#3482b9] font-bold">Microsoft Dynamics 365 solutions</strong>. Our team makes a tangible impact each day, helping clients optimize their operations and improve business outcomes with cutting-edge technology. We believe in empowering our employees to innovate and shape the future of business technology.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#f8fafc] border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                At MCT IT Solutions, we are committed to the continuous education and professional development of our employees. We offer a wide range of programs designed to enhance skills in Microsoft Dynamics 365 and other key enterprise solutions, fostering career growth and new opportunities. Employees are encouraged to create innovative solutions and implement strategies that not only drive the success of MCT IT Solutions but also secure our clients’ success in the ever-evolving world of digital transformation. Our employees even have the opportunity to transfer across different departments within the company, expanding their expertise in various areas of IT and business solutions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. THE MCT IT SOLUTIONS CULTURE (Image + Text)                 */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left: Culture Image with Left Entry Animation */}
            <div className="lg:col-span-5 flex justify-center">
              <ScrollReveal direction="left" duration={800} className="w-full max-w-md sm:max-w-lg">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                  <Image
                    src="/The MCT IT Solutions Culture.png"
                    alt="The MCT IT Solutions Culture - Teamwork and Puzzle Integration"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/40 shadow-sm">
                    <p className="text-xs font-bold text-slate-800 text-center tracking-wide">
                      People First • Collaboration • Mutual Growth
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Culture Content with Right Entry Animation */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" duration={800} className="space-y-6">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase bg-[#3482b9]/10 text-[#3482b9]">
                  Our People First Philosophy
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
                  The MCT IT Solutions Culture
                </h2>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#3482b9]/30 shadow-sm inline-block w-full">
                  <p className="text-lg sm:text-xl font-black text-[#3482b9] italic">
                    “Our greatest asset is our people.”
                  </p>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Whether you’re just starting your career or bringing years of experience in technology, MCT IT Solutions is committed to your success and growth. We invest in our people because we understand that empowering employees is the key to driving innovation and ensuring our leadership in Microsoft Dynamics 365 solutions and beyond.
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  At MCT IT Solutions, we foster a positive and inclusive work environment, focused on recognition, teamwork, and collaboration. We understand the importance of work-life balance and offer remote work options along with generous flexible time off. Our goal is to enable our employees to excel professionally while maintaining a healthy work-life integration. We believe that when employees feel heard, valued, and supported, they can contribute their best work to the organization and our clients.
                </p>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. WORK-LIFE, COLLABORATION & CAREER DEVELOPMENT PILLARS       */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase bg-[#3482b9]/10 text-[#3482b9] mb-4">
              Empowering Every Step
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
              Life at MCT IT Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between p-8 sm:p-9 rounded-3xl bg-[#f8fafc] border border-slate-200/90 hover:border-[#3482b9]/60 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div>
                    {/* Top Icon and Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center group-hover:bg-[#3482b9] group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white group-hover:bg-[#3482b9]/10 group-hover:text-[#3482b9] px-3 py-1 rounded-full border border-slate-200 transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 leading-snug tracking-tight">
                      {item.title}
                    </h3>

                    {/* Paragraph */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#3482b9]">
                    <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
                    <span>MCT Core Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. WHY SHOULD YOU JOIN US (3 Interactive Cards)                */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase bg-[#3482b9]/10 text-[#3482b9] mb-4">
              Exciting Perks
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
              Why Should You Join Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyJoinUs.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 text-center hover:border-[#3482b9]/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-between"
                >
                  <div className="w-full flex flex-col items-center">
                    {/* Floating circular icon */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3482b9]/10 to-[#3482b9]/25 text-[#3482b9] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#3482b9] group-hover:text-white transition-all duration-300 shadow-md">
                      <Icon className="w-10 h-10" />
                    </div>

                    <span className="text-xs font-bold text-[#3482b9] uppercase tracking-wider mb-2">
                      {card.highlight}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">
                      {card.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. CALL TO ACTION: READY TO ELEVATE YOUR CAREER                */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-slate-700/40">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/bg-contact.png"
                alt="Connect Background"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/90 to-[#12284e]/90" />
            </div>

            <div className="absolute top-0 right-0 w-96 h-96 bg-[#3482b9]/20 rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-8 space-y-5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border border-[#3482b9]/40 text-slate-200">
                  <Sparkles className="w-3.5 h-3.5 text-[#3482b9]" /> Next Step
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase leading-tight">
                  Ready to Elevate Your Career with MCT IT Solutions?
                </h2>

                <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal">
                  Join our team and be part of an innovative company that specializes in Microsoft Dynamics 365 solutions and cutting-edge IT services. We offer career growth, professional development, and the opportunity to make a real impact. Take the next step and start your journey with us today!
                </p>

                <p className="text-base sm:text-lg font-bold text-[#3482b9] pt-2">
                  Sign Up Now and Begin Your Future with MCT IT Solutions!
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-start lg:items-end">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#3482b9] hover:bg-[#276e9f] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-[#3482b9]/40 hover:-translate-y-1"
                >
                  <span>Let’s Connect</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href="mailto:rmb@miraclecloud-technology.com?subject=Career%20Application%20at%20MCT"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 backdrop-blur-md"
                >
                  <Send className="w-4 h-4 text-[#3482b9]" />
                  <span>Send Resume Directly</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
