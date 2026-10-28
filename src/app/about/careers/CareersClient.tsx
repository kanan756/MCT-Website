"use client";

import { useState, useEffect } from "react";
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
  Send,
  Briefcase,
  FileText,
  User,
  BookOpen,
  History,
  Award,
  PhoneCall,
  PenTool,
  Loader2,
  Upload,
  ArrowUpRight,
  Plus,
  Minus,
  Check,
  MapPin,
  Calendar,
  X,
  Mail
} from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { CareerOpening, INITIAL_CAREERS } from "@/data/careers";

export default function CareersPage() {
  // Career Openings state
  const [openings, setOpenings] = useState<CareerOpening[]>([]);
  const [loadingOpenings, setLoadingOpenings] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [viewJobModal, setViewJobModal] = useState<CareerOpening | null>(null);
  const [applyJobModal, setApplyJobModal] = useState<CareerOpening | null>(null);

  // Application form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentLocation: "",
    totalExperience: "",
    noticePeriod: "",
    currentCtc: "",
    expectedCtc: "",
    portfolioUrl: "",
    resumeFileName: "",
    coverNote: "",
    website: "", // honeypot
    consent: false,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("File must be smaller than 5 MB.");
        return;
      }
      setSelectedFile(file);
      setFormData((prev) => ({ ...prev, resumeFileName: file.name }));
      setErrorMessage("");
    }
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.currentLocation.trim()) {
      setErrorMessage("Please complete all required fields (*).");
      return;
    }
    if (!formData.consent) {
      setErrorMessage("Please agree to the privacy policy.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          applyingFor: applyJobModal?.title || "Career Position",
          areaOfInterest: applyJobModal?.department || "Consulting",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      setSubmitSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit. Please email your CV directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fetch dynamic openings from API
  useEffect(() => {
    async function fetchOpenings() {
      try {
        const res = await fetch("/api/careers", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            setOpenings(data);
          }
        }
      } catch (err) {
        console.error("Failed to load career openings:", err);
      } finally {
        setLoadingOpenings(false);
      }
    }
    fetchOpenings();
  }, []);

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
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            Discover meaningful work, continuous learning, and an empowering culture where your ideas shape the future of enterprise technology.
          </p>

          {/* Quick Apply Action Button */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#apply-form"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#3482b9]/30 hover:scale-105"
            >
              <Briefcase className="w-4 h-4 text-white" />
              <span>Apply for Open Roles</span>
            </a>
          </div>
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
      {/* 5.5 // CURRENT OPENINGS (Matching User's Reference Screenshots) */}
      {/* ============================================================== */}
      <section id="openings" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header: "// Current Openings" */}
          <div className="mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif] flex items-center gap-2">
              <span className="text-slate-400 font-light">//</span>
              <span>Current <strong className="font-black text-[#0b1b3d]">Openings</strong></span>
            </h2>
          </div>

          {/* Loading State */}
          {loadingOpenings && (
            <div className="flex items-center justify-center py-16 gap-3 text-slate-500 font-['Source_Sans_3',sans-serif]">
              <Loader2 className="w-6 h-6 animate-spin text-[#3482b9]" />
              <span>Loading current openings...</span>
            </div>
          )}

          {/* Empty State when no openings */}
          {!loadingOpenings && openings.length === 0 && (
            <div className="max-w-2xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 text-center shadow-xs">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto mb-5">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#0b1b3d] font-['Montserrat',sans-serif] mb-3">
                No Openings at the Moment
              </h3>
              <p className="text-slate-600 text-sm sm:text-base font-['Source_Sans_3',sans-serif] leading-relaxed max-w-lg mx-auto mb-6">
                We do not have any active openings right now, but we are always looking for exceptional talent to join our team in the future.
              </p>
              <div className="inline-flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setApplyJobModal({
                      id: "spontaneous",
                      title: "Spontaneous Application",
                      department: "General",
                      experience: "Any",
                      location: "Ahmedabad",
                      qualification: "",
                      roleObjective: "",
                      roleResponsibilities: [],
                      keyResponsibilities: [],
                      whyJoinUs: [],
                    });
                    setSubmitSuccess(false);
                    setErrorMessage("");
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0b1b3d] hover:bg-[#3482b9] text-white font-bold text-sm uppercase tracking-wider transition-colors font-['Montserrat',sans-serif] shadow-md cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Your Resume (HR)</span>
                </button>
              </div>
            </div>
          )}

          {/* Tabbed Openings Box (Aligned with MCT Brand Theme) */}
          {!loadingOpenings && openings.length > 0 && (() => {
            // Extract unique departments
            const departments = ["All", ...Array.from(new Set(openings.map((o) => o.department || "Consulting")))];
            const visibleOpenings = selectedDepartment === "All" 
              ? openings 
              : openings.filter((o) => (o.department || "Consulting") === selectedDepartment);

            return (
              <div className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-lg shadow-slate-200/40">
                <div className="grid grid-cols-1 md:grid-cols-12 min-h-[440px]">
                  
                  {/* Left Column: Count & Department Filter Tabs */}
                  <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-slate-200/80 bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      {/* Big Counter */}
                      <div className="p-6 sm:p-8 border-b border-slate-200/70 bg-gradient-to-br from-white to-slate-50">
                        <div className="text-4xl sm:text-5xl font-black text-[#0b1b3d] font-['Montserrat',sans-serif] leading-none mb-2">
                          {openings.length}
                        </div>
                        <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 font-['Montserrat',sans-serif]">
                          Open Roles
                        </div>
                      </div>

                      {/* Department List */}
                      <nav className="divide-y divide-slate-100">
                        {departments.map((dept) => {
                          const isSelected = selectedDepartment === dept;
                          const count = dept === "All" 
                            ? openings.length 
                            : openings.filter((o) => (o.department || "Consulting") === dept).length;

                          return (
                            <button
                              key={dept}
                              type="button"
                              onClick={() => setSelectedDepartment(dept)}
                              className={`w-full px-6 py-4 flex items-center justify-between text-left transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-white text-[#3482b9] font-bold border-l-4 border-[#3482b9] shadow-xs"
                                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 font-semibold"
                              }`}
                            >
                              <span className="font-['Montserrat',sans-serif] text-sm">
                                {dept === "All" ? "All Openings" : dept}
                              </span>
                              <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                                isSelected 
                                  ? "bg-[#3482b9] text-white shadow-xs" 
                                  : "bg-slate-200/70 text-slate-600"
                              }`}>
                                {String(count).padStart(2, "0")}
                              </span>
                            </button>
                          );
                        })}
                      </nav>
                    </div>

                    <div className="p-6 bg-slate-50 border-t border-slate-200/70 hidden md:block">
                      <p className="text-xs text-slate-500 leading-relaxed font-['Source_Sans_3',sans-serif]">
                        Don’t see your exact role? Send us your CV directly for future consideration.
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Roles List */}
                  <div className="md:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col divide-y divide-slate-100 bg-white">
                    {visibleOpenings.length === 0 ? (
                      <div className="py-16 text-center text-slate-400 font-['Source_Sans_3',sans-serif] text-sm">
                        No openings in this department.
                      </div>
                    ) : (
                      visibleOpenings.map((job, index) => {
                        const indexNumber = String(index + 1).padStart(2, "0");

                        return (
                          <div
                            key={job.id}
                            className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group"
                          >
                            <div className="flex items-start gap-4 flex-1 min-w-0">
                              {/* Outlined index number */}
                              <span
                                className="text-2xl sm:text-3xl font-black font-['Montserrat',sans-serif] text-slate-300 group-hover:text-[#3482b9] transition-colors shrink-0"
                                style={{
                                  WebkitTextStroke: "1.5px #3482b9",
                                  color: "transparent",
                                  opacity: 0.45,
                                }}
                              >
                                {indexNumber}
                              </span>

                              <div className="space-y-2.5 flex-1 min-w-0">
                                <h3
                                  onClick={() => setViewJobModal(job)}
                                  className="text-base sm:text-lg font-bold text-[#0b1b3d] font-['Montserrat',sans-serif] hover:text-[#3482b9] cursor-pointer transition-colors leading-snug"
                                >
                                  {job.title}
                                </h3>

                                {/* Tags (Experience, Location, Tags) */}
                                <div className="flex flex-wrap items-center gap-1.5">
                                  {(job.tags && job.tags.length > 0 ? job.tags : [job.experience, job.location]).map((tag, tIdx) => (
                                    <span
                                      key={tIdx}
                                      className="px-2.5 py-1 rounded-md bg-[#3482b9]/8 text-[#0b1b3d] border border-[#3482b9]/15 text-[11px] sm:text-xs font-semibold font-['Source_Sans_3',sans-serif]"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Actions: View Details & Apply Now */}
                            <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                              <button
                                type="button"
                                onClick={() => setViewJobModal(job)}
                                className="text-xs font-semibold text-slate-500 hover:text-[#3482b9] underline underline-offset-4 transition-colors cursor-pointer"
                              >
                                View Details
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setApplyJobModal(job);
                                  setSubmitSuccess(false);
                                  setErrorMessage("");
                                }}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0b1b3d] hover:bg-[#3482b9] text-white text-xs sm:text-sm font-bold font-['Montserrat',sans-serif] transition-all cursor-pointer shadow-xs hover:shadow-md"
                              >
                                <span>Apply Now</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5.6 JOB DETAIL MODAL (Matching MCT Brand Theme)                 */}
      {/* ============================================================== */}
      {viewJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1b3d]/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            {/* Top Close */}
            <button
              onClick={() => setViewJobModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Department bar */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-1 bg-[#3482b9] rounded-full" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3482b9] font-['Montserrat',sans-serif]">
                {viewJobModal.department || "Consulting"}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-black text-[#0b1b3d] font-['Montserrat',sans-serif] tracking-tight mb-4">
              {viewJobModal.title}
            </h2>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 pb-5 mb-6 border-b border-slate-200">
              {(viewJobModal.tags && viewJobModal.tags.length > 0 ? viewJobModal.tags : [viewJobModal.experience, viewJobModal.location]).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[#3482b9]/10 text-[#0b1b3d] border border-[#3482b9]/20 text-xs font-semibold font-['Source_Sans_3',sans-serif]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-6 text-slate-700 font-['Source_Sans_3',sans-serif] text-sm sm:text-base leading-relaxed">
              {/* About Us */}
              <div>
                <h3 className="text-sm sm:text-base font-black text-[#0b1b3d] font-['Montserrat',sans-serif] mb-2 uppercase tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3482b9]" />
                  About Us
                </h3>
                <p className="text-slate-600 pl-3.5">
                  MCT IT Solutions is a technology innovator helping global enterprises optimize business processes, cloud infrastructure, and Microsoft Dynamics 365 solutions. We create an empowering work environment where ambitious professionals build high-impact digital solutions.
                </p>
              </div>

              {/* Role Overview */}
              {viewJobModal.roleObjective && (
                <div>
                  <h3 className="text-sm sm:text-base font-black text-[#0b1b3d] font-['Montserrat',sans-serif] mb-2 uppercase tracking-wide flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3482b9]" />
                    Role Overview
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-3.5">
                    {viewJobModal.roleObjective}
                  </p>
                </div>
              )}

              {/* Key Responsibilities */}
              {((viewJobModal.keyResponsibilities && viewJobModal.keyResponsibilities.length > 0) || (viewJobModal.roleResponsibilities && viewJobModal.roleResponsibilities.length > 0)) && (
                <div>
                  <h3 className="text-sm sm:text-base font-black text-[#0b1b3d] font-['Montserrat',sans-serif] mb-2 uppercase tracking-wide flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3482b9]" />
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-2 text-slate-600 pl-3.5">
                    {(viewJobModal.keyResponsibilities?.length ? viewJobModal.keyResponsibilities : viewJobModal.roleResponsibilities).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3482b9] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements / Responsibilities */}
              {viewJobModal.roleResponsibilities && viewJobModal.roleResponsibilities.length > 0 && viewJobModal.keyResponsibilities && viewJobModal.keyResponsibilities.length > 0 && (
                <div>
                  <h3 className="text-sm sm:text-base font-black text-[#0b1b3d] font-['Montserrat',sans-serif] mb-2 uppercase tracking-wide flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3482b9]" />
                    Requirements &amp; Technical Skills
                  </h3>
                  <ul className="space-y-2 text-slate-600 pl-3.5">
                    {viewJobModal.roleResponsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3482b9] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What We Offer / Why Join Us */}
              {viewJobModal.whyJoinUs && viewJobModal.whyJoinUs.length > 0 && (
                <div>
                  <h3 className="text-sm sm:text-base font-black text-[#0b1b3d] font-['Montserrat',sans-serif] mb-2 uppercase tracking-wide flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3482b9]" />
                    What We Offer
                  </h3>
                  <ul className="space-y-2 text-slate-600 pl-3.5">
                    {viewJobModal.whyJoinUs.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Bottom Apply Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setViewJobModal(null)}
                className="text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  const job = viewJobModal;
                  setViewJobModal(null);
                  setApplyJobModal(job);
                  setSubmitSuccess(false);
                  setErrorMessage("");
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0b1b3d] hover:bg-[#3482b9] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all font-['Montserrat',sans-serif] shadow-md cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 5.7 SEND YOUR CV FORM MODAL (Matching Reference Screenshot 3)   */}
      {/* ============================================================== */}
      {applyJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full my-8 shadow-2xl border border-slate-200 overflow-hidden relative">
            
            {/* Close button */}
            <button
              onClick={() => setApplyJobModal(null)}
              className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Title & Department Info */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-semibold mb-3 font-['Montserrat',sans-serif]">
                    Careers / Send your CV
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Montserrat',sans-serif] leading-tight mb-4">
                    Send your <span className="text-[#3482b9]">CV</span>
                  </h2>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-['Source_Sans_3',sans-serif] mb-8">
                    Tell us a little about yourself. It takes about two minutes, and every application is read by our talent acquisition team.
                  </p>

                  <div className="space-y-1 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-['Montserrat',sans-serif]">
                      Department
                    </span>
                    <div className="text-sm font-bold text-slate-800 font-['Montserrat',sans-serif]">
                      {applyJobModal.department || "Consulting"}
                    </div>
                    <div className="text-xs font-semibold text-[#3482b9]">
                      Applying for: {applyJobModal.title}
                    </div>
                  </div>
                </div>

                {/* Contact helper card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 pt-4 border-t border-slate-200">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5 font-['Montserrat',sans-serif]">
                      <span className="w-1.5 h-1.5 bg-[#3482b9] rounded-xs" />
                      Recruitment
                    </span>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                      +91 97260 03000
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Join our team
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5 font-['Montserrat',sans-serif]">
                      <span className="w-1.5 h-1.5 bg-[#3482b9] rounded-xs" />
                      Email
                    </span>
                    <div className="text-xs font-bold text-slate-900 mt-1 font-mono truncate">
                      hr@miraclecloud-technology.com
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Careers inquiries
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dark Form Panel matching Screenshot 3 */}
              <div className="lg:col-span-7 bg-[#0b1b3d] p-6 sm:p-8 lg:p-10 text-white">
                
                {submitSuccess ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black font-['Montserrat',sans-serif] text-white">
                      Application Submitted!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed font-['Source_Sans_3',sans-serif]">
                      Thank you for applying for <strong>{applyJobModal.title}</strong>. Our hiring team will review your resume and contact you soon.
                    </p>
                    <button
                      type="button"
                      onClick={() => setApplyJobModal(null)}
                      className="px-6 py-2.5 rounded-xl bg-[#3482b9] hover:bg-[#286895] text-white font-bold text-xs uppercase tracking-wider font-['Montserrat',sans-serif] cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplicationSubmit} className="space-y-4 font-['Source_Sans_3',sans-serif]">
                    
                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs font-semibold">
                        {errorMessage}
                      </div>
                    )}

                    {/* Applying for* */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-200 font-['Montserrat',sans-serif]">
                        Applying for*
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={applyJobModal.title}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200 font-medium text-xs sm:text-sm focus:outline-none"
                      />
                    </div>

                    {/* Full name* & Email* */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-200 font-['Montserrat',sans-serif]">
                          Full name*
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleFormChange}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder:text-slate-500 font-medium text-xs sm:text-sm focus:outline-none focus:border-[#3482b9]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-200 font-['Montserrat',sans-serif]">
                          Email*
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="name@email.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder:text-slate-500 font-medium text-xs sm:text-sm focus:outline-none focus:border-[#3482b9]"
                        />
                      </div>
                    </div>

                    {/* Phone* & Current Location* */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-200 font-['Montserrat',sans-serif]">
                          Phone*
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder:text-slate-500 font-medium text-xs sm:text-sm focus:outline-none focus:border-[#3482b9]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-200 font-['Montserrat',sans-serif]">
                          Current location*
                        </label>
                        <input
                          type="text"
                          name="currentLocation"
                          required
                          value={formData.currentLocation}
                          onChange={handleFormChange}
                          placeholder="City, country"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder:text-slate-500 font-medium text-xs sm:text-sm focus:outline-none focus:border-[#3482b9]"
                        />
                      </div>
                    </div>

                    {/* Total experience* & Notice period* */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-200 font-['Montserrat',sans-serif]">
                          Total experience*
                        </label>
                        <select
                          name="totalExperience"
                          required
                          value={formData.totalExperience}
                          onChange={handleFormChange}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-white font-medium text-xs sm:text-sm focus:outline-none focus:border-[#3482b9]"
                        >
                          <option value="">select</option>
                          <option value="Fresher / < 1 year">Fresher / &lt; 1 year</option>
                          <option value="1 - 3 years">1 - 3 years</option>
                          <option value="3 - 5 years">3 - 5 years</option>
                          <option value="5 - 8 years">5 - 8 years</option>
                          <option value="8+ years">8+ years</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-200 font-['Montserrat',sans-serif]">
                          Notice period*
                        </label>
                        <select
                          name="noticePeriod"
                          required
                          value={formData.noticePeriod}
                          onChange={handleFormChange}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-white font-medium text-xs sm:text-sm focus:outline-none focus:border-[#3482b9]"
                        >
                          <option value="">select</option>
                          <option value="Immediate Joiner">Immediate Joiner</option>
                          <option value="15 Days or less">15 Days or less</option>
                          <option value="30 Days (1 Month)">30 Days (1 Month)</option>
                          <option value="45 Days">45 Days</option>
                          <option value="60 Days (2 Months)">60 Days (2 Months)</option>
                          <option value="90 Days">90 Days</option>
                        </select>
                      </div>
                    </div>

                    {/* Current CTC & Expected CTC */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-300 font-['Montserrat',sans-serif]">
                          Current CTC <span className="text-slate-500 font-normal">(optional)</span>
                        </label>
                        <input
                          type="text"
                          name="currentCtc"
                          value={formData.currentCtc}
                          onChange={handleFormChange}
                          placeholder="e.g. 12 LPA"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder:text-slate-500 font-medium text-xs sm:text-sm focus:outline-none focus:border-[#3482b9]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-300 font-['Montserrat',sans-serif]">
                          Expected CTC <span className="text-slate-500 font-normal">(optional)</span>
                        </label>
                        <input
                          type="text"
                          name="expectedCtc"
                          value={formData.expectedCtc}
                          onChange={handleFormChange}
                          placeholder="e.g. 16 LPA"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder:text-slate-500 font-medium text-xs sm:text-sm focus:outline-none focus:border-[#3482b9]"
                        />
                      </div>
                    </div>

                    {/* Resume* Drag & Drop / Upload */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-200 font-['Montserrat',sans-serif]">
                        Resume*
                      </label>
                      <label
                        htmlFor="cv-upload-modal"
                        className="flex flex-col items-center justify-center p-4 rounded-xl border border-dashed border-slate-600 bg-slate-800/60 hover:bg-slate-800 hover:border-[#3482b9] cursor-pointer transition-colors text-center"
                      >
                        <input
                          type="file"
                          id="cv-upload-modal"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                        <div className="text-xs font-bold text-white">
                          {selectedFile ? (
                            <span className="text-emerald-400 flex items-center gap-1.5 justify-center">
                              <Check className="w-4 h-4" />
                              <span className="truncate max-w-[240px]">{selectedFile.name}</span>
                            </span>
                          ) : (
                            <>
                              <span className="underline decoration-[#3482b9]">Choose a file</span> or drag it here
                            </>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400 mt-0.5">
                          PDF, DOC or DOCX. Max 5 MB.
                        </span>
                      </label>
                    </div>

                    {/* Cover note (optional) */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-300 font-['Montserrat',sans-serif]">
                        Cover note <span className="text-slate-500 font-normal">(optional)</span>
                      </label>
                      <textarea
                        name="coverNote"
                        rows={2}
                        value={formData.coverNote}
                        onChange={handleFormChange}
                        placeholder="Anything you'd like the hiring team to know..."
                        className="w-full p-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder:text-slate-500 font-medium text-xs sm:text-sm focus:outline-none focus:border-[#3482b9] resize-none"
                      />
                    </div>

                    {/* Consent */}
                    <div className="pt-1">
                      <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-300">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleFormChange}
                          className="mt-0.5 w-3.5 h-3.5 rounded text-[#3482b9] focus:ring-[#3482b9] border-slate-600 bg-slate-800"
                        />
                        <span>
                          I agree that MCT IT Solutions may store and process my details to evaluate my application, as described in the Privacy Policy.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white bg-white hover:bg-[#3482b9] hover:border-[#3482b9] text-slate-900 hover:text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all font-['Montserrat',sans-serif] cursor-pointer disabled:opacity-60"
                      >
                        <span className="w-2 h-2 bg-[#3482b9] rounded-xs" />
                        <span>{isSubmitting ? "Submitting..." : "Submit Application"}</span>
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>

                  </form>
                )}

              </div>

            </div>

          </div>
        </div>
      )}

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
                <a
                  href="#apply-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#3482b9] hover:bg-[#276e9f] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-[#3482b9]/40 hover:-translate-y-1 cursor-pointer"
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#apply-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 backdrop-blur-md cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#3482b9]" />
                  <span>Submit Application</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
