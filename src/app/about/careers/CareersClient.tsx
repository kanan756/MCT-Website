"use client";

import { useState } from "react";
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
  ArrowUpRight
} from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    applyingFor: "",
    areaOfInterest: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        setErrorMessage("Resume file size must be less than 5 MB.");
        return;
      }
      setSelectedFile(file);
      setFormData((prev) => ({ ...prev, resumeFileName: file.name }));
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.currentLocation.trim()) {
      setErrorMessage("Please fill in all required personal contact details.");
      return;
    }

    if (!formData.applyingFor || !formData.totalExperience || !formData.noticePeriod) {
      setErrorMessage("Please select your role, total experience, and notice period.");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("Please agree to the privacy policy to submit your application.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application.");
      }

      setSubmitSuccess(true);
      setSelectedFile(null);
      setFormData({
        applyingFor: "",
        areaOfInterest: "",
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
        website: "",
        consent: false,
      });
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again or email your resume directly.");
    } finally {
      setIsSubmitting(false);
    }
  };
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
      {/* 5.5 APPLICATION FORM (Styled in MCT Brand Colors & Fully Responsive) */}
      {/* ============================================================== */}
      <section id="apply-form" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-t border-slate-200">
        {/* Subtle decorative brand-colored blur circles */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#3482b9]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 right-10 w-72 h-72 bg-[#0b1b3d]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3482b9]/10 border border-[#3482b9]/25 text-xs sm:text-sm font-black tracking-wider text-[#3482b9] uppercase mb-4">
              <Briefcase className="w-4 h-4 text-[#3482b9]" />
              <span>Career Opportunities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1b3d] uppercase tracking-tight font-['Montserrat',sans-serif] leading-tight">
              Apply for this Position
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-['Source_Sans_3',sans-serif] leading-relaxed">
              Take the next step in your career with MCT IT Solutions. Complete the form below to apply for our open roles or general employee openings.
            </p>
          </div>

          {/* Form Container Card - Website Brand Colors (#0b1b3d, #3482b9, White & Slate) */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-8 md:p-10 lg:p-12 shadow-[0_15px_45px_-10px_rgba(11,27,61,0.08)]">
            
            {/* Top Brand Accent Bar */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-6 rounded-xs bg-[#3482b9]" />
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0b1b3d] font-['Montserrat',sans-serif]">
                  Job Application Details
                </span>
              </div>
              <span className="text-xs text-slate-500 font-semibold font-['Source_Sans_3',sans-serif]">
                * Required Fields
              </span>
            </div>

            {/* Submission Success Alert */}
            {submitSuccess && (
              <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-black text-base font-['Montserrat',sans-serif] text-emerald-900">
                    Application Submitted Successfully!
                  </h4>
                  <p className="text-sm text-emerald-800 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    Thank you for applying to MCT IT Solutions. Our talent acquisition team will review your application and contact you soon.
                  </p>
                </div>
              </div>
            )}

            {/* Error Alert */}
            {errorMessage && (
              <div className="mb-8 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-semibold font-['Source_Sans_3',sans-serif]">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Applying for* */}
              <div className="space-y-2">
                <label htmlFor="applyingFor" className="block text-xs sm:text-sm font-bold text-[#0b1b3d] font-['Montserrat',sans-serif]">
                  Applying for<span className="text-[#3482b9] ml-1">*</span>
                </label>
                <div className="relative">
                  <select
                    id="applyingFor"
                    name="applyingFor"
                    required
                    value={formData.applyingFor}
                    onChange={handleChange}
                    className="w-full appearance-none px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 bg-slate-50/70 hover:bg-white text-slate-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#3482b9] focus:bg-white focus:border-transparent transition-all shadow-xs font-['Source_Sans_3',sans-serif]"
                  >
                    <option value="">select</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Dynamics 365 Business Central Consultant">Dynamics 365 Business Central Consultant</option>
                    <option value="Dynamics 365 Business Central AL Developer">Dynamics 365 Business Central AL Developer</option>
                    <option value="Dynamics 365 CRM / Customer Engagement Consultant">Dynamics 365 CRM / Customer Engagement Consultant</option>
                    <option value="Power Apps & Power Platform Developer">Power Apps &amp; Power Platform Developer</option>
                    <option value="Full Stack Web Developer (React.js / Node.js)">Full Stack Web Developer (React.js / Node.js)</option>
                    <option value="Mobile App Developer (React Native / iOS)">Mobile App Developer (React Native / iOS)</option>
                    <option value="Cloud Solutions & DevOps Engineer">Cloud Solutions &amp; DevOps Engineer</option>
                    <option value="QA & Enterprise Software Tester">QA &amp; Enterprise Software Tester</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Area of interest */}
              <div className="space-y-2">
                <label htmlFor="areaOfInterest" className="block text-xs sm:text-sm font-bold text-[#0b1b3d] font-['Montserrat',sans-serif]">
                  Area of interest
                </label>
                <div className="relative">
                  <select
                    id="areaOfInterest"
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                    className="w-full appearance-none px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 bg-slate-50/70 hover:bg-white text-slate-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#3482b9] focus:bg-white focus:border-transparent transition-all shadow-xs font-['Source_Sans_3',sans-serif]"
                  >
                    <option value="">select</option>
                    <option value="Dynamics 365 Business Central (ERP)">Dynamics 365 Business Central (ERP)</option>
                    <option value="Dynamics 365 Customer Engagement (CRM)">Dynamics 365 Customer Engagement (CRM)</option>
                    <option value="Power Platform (Power Apps, Automate, Pages)">Power Platform (Power Apps, Automate, Pages)</option>
                    <option value="Proprietary Products (SalesPro, CleanMail Pro, TaxInvoicePro)">Proprietary Products (SalesPro, CleanMail Pro, TaxInvoicePro)</option>
                    <option value="AI Solutions & Knowledge Base (IntelliKB)">AI Solutions &amp; Knowledge Base (IntelliKB)</option>
                    <option value="E-Invoicing Integration (India & UAE)">E-Invoicing Integration (India &amp; UAE)</option>
                    <option value="Web Development (React.js & Node.js)">Web Development (React.js &amp; Node.js)</option>
                    <option value="Mobile App Development (React Native & Swift)">Mobile App Development (React Native &amp; Swift)</option>
                    <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure &amp; DevOps</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Full name* & Email* */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-xs sm:text-sm font-bold text-[#0b1b3d] font-['Montserrat',sans-serif]">
                    Full name<span className="text-[#3482b9] ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 bg-slate-50/70 hover:bg-white text-slate-800 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#3482b9] focus:bg-white focus:border-transparent transition-all shadow-xs font-['Source_Sans_3',sans-serif]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-[#0b1b3d] font-['Montserrat',sans-serif]">
                    Email<span className="text-[#3482b9] ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@email.com"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 bg-slate-50/70 hover:bg-white text-slate-800 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#3482b9] focus:bg-white focus:border-transparent transition-all shadow-xs font-['Source_Sans_3',sans-serif]"
                  />
                </div>
              </div>

              {/* Phone* & Current location* */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-[#0b1b3d] font-['Montserrat',sans-serif]">
                    Phone<span className="text-[#3482b9] ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 bg-slate-50/70 hover:bg-white text-slate-800 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#3482b9] focus:bg-white focus:border-transparent transition-all shadow-xs font-['Source_Sans_3',sans-serif]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="currentLocation" className="block text-xs sm:text-sm font-bold text-[#0b1b3d] font-['Montserrat',sans-serif]">
                    Current location<span className="text-[#3482b9] ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="currentLocation"
                    name="currentLocation"
                    required
                    value={formData.currentLocation}
                    onChange={handleChange}
                    placeholder="City, country"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 bg-slate-50/70 hover:bg-white text-slate-800 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#3482b9] focus:bg-white focus:border-transparent transition-all shadow-xs font-['Source_Sans_3',sans-serif]"
                  />
                </div>
              </div>

              {/* Total experience* & Notice period* */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <label htmlFor="totalExperience" className="block text-xs sm:text-sm font-bold text-[#0b1b3d] font-['Montserrat',sans-serif]">
                    Total experience<span className="text-[#3482b9] ml-1">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="totalExperience"
                      name="totalExperience"
                      required
                      value={formData.totalExperience}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 bg-slate-50/70 hover:bg-white text-slate-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#3482b9] focus:bg-white focus:border-transparent transition-all shadow-xs font-['Source_Sans_3',sans-serif]"
                    >
                      <option value="">select</option>
                      <option value="Fresher / < 1 year">Fresher / &lt; 1 year</option>
                      <option value="1 - 3 years">1 - 3 years</option>
                      <option value="3 - 5 years">3 - 5 years</option>
                      <option value="5 - 8 years">5 - 8 years</option>
                      <option value="8 - 10 years">8 - 10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="noticePeriod" className="block text-xs sm:text-sm font-bold text-[#0b1b3d] font-['Montserrat',sans-serif]">
                    Notice period<span className="text-[#3482b9] ml-1">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="noticePeriod"
                      name="noticePeriod"
                      required
                      value={formData.noticePeriod}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 bg-slate-50/70 hover:bg-white text-slate-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#3482b9] focus:bg-white focus:border-transparent transition-all shadow-xs font-['Source_Sans_3',sans-serif]"
                    >
                      <option value="">select</option>
                      <option value="Immediate Joiner">Immediate Joiner</option>
                      <option value="15 Days or less">15 Days or less</option>
                      <option value="30 Days (1 Month)">30 Days (1 Month)</option>
                      <option value="45 Days">45 Days</option>
                      <option value="60 Days (2 Months)">60 Days (2 Months)</option>
                      <option value="90 Days (3 Months)">90 Days (3 Months)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current CTC (optional) & Expected CTC (optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <label htmlFor="currentCtc" className="block text-xs sm:text-sm font-bold text-[#0b1b3d] font-['Montserrat',sans-serif]">
                    Current CTC <span className="text-slate-400 font-normal text-xs">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="currentCtc"
                    name="currentCtc"
                    value={formData.currentCtc}
                    onChange={handleChange}
                    placeholder="e.g. 12 LPA"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 bg-slate-50/70 hover:bg-white text-slate-800 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#3482b9] focus:bg-white focus:border-transparent transition-all shadow-xs font-['Source_Sans_3',sans-serif]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="expectedCtc" className="block text-xs sm:text-sm font-bold text-[#0b1b3d] font-['Montserrat',sans-serif]">
                    Expected CTC <span className="text-slate-400 font-normal text-xs">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="expectedCtc"
                    name="expectedCtc"
                    value={formData.expectedCtc}
                    onChange={handleChange}
                    placeholder="e.g. 16 LPA"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 bg-slate-50/70 hover:bg-white text-slate-800 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#3482b9] focus:bg-white focus:border-transparent transition-all shadow-xs font-['Source_Sans_3',sans-serif]"
                  />
                </div>
              </div>

              {/* LinkedIn, GitHub or portfolio (optional) */}
              <div className="space-y-2">
                <label htmlFor="portfolioUrl" className="block text-xs sm:text-sm font-bold text-[#0b1b3d] font-['Montserrat',sans-serif]">
                  LinkedIn, GitHub or portfolio <span className="text-slate-400 font-normal text-xs">(optional)</span>
                </label>
                <input
                  type="url"
                  id="portfolioUrl"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  placeholder="https://"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 bg-slate-50/70 hover:bg-white text-slate-800 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#3482b9] focus:bg-white focus:border-transparent transition-all shadow-xs font-['Source_Sans_3',sans-serif]"
                />
              </div>

              {/* Resume* Drag & Drop / File Input */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-[#0b1b3d] font-['Montserrat',sans-serif]">
                  Resume<span className="text-[#3482b9] ml-1">*</span>
                </label>
                <label
                  htmlFor="resume-upload"
                  className="relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border-2 border-dashed border-[#3482b9]/40 bg-slate-50/70 hover:bg-[#3482b9]/5 hover:border-[#3482b9] text-slate-800 transition-all cursor-pointer group shadow-2xs"
                >
                  <input
                    type="file"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#3482b9]/10 text-[#3482b9] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Upload className="w-5 h-5" />
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                      {selectedFile ? (
                        <span className="text-emerald-600 font-extrabold flex items-center gap-1.5 justify-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="truncate max-w-[260px] sm:max-w-md">{selectedFile.name}</span>
                        </span>
                      ) : (
                        <>
                          <span className="underline decoration-[#3482b9] decoration-2 font-black text-[#0b1b3d]">Choose a file</span>{" "}
                          <span className="font-medium text-slate-600">or drag it here</span>
                        </>
                      )}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                      PDF, DOC or DOCX. Max 5 MB.
                    </p>
                  </div>
                </label>
              </div>

              {/* Cover note (optional) */}
              <div className="space-y-2">
                <label htmlFor="coverNote" className="block text-xs sm:text-sm font-bold text-[#0b1b3d] font-['Montserrat',sans-serif]">
                  Cover note <span className="text-slate-400 font-normal text-xs">(optional)</span>
                </label>
                <textarea
                  id="coverNote"
                  name="coverNote"
                  rows={4}
                  value={formData.coverNote}
                  onChange={handleChange}
                  placeholder="Anything you'd like the hiring team to know..."
                  className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50/70 hover:bg-white text-slate-800 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#3482b9] focus:bg-white focus:border-transparent transition-all shadow-xs resize-y font-['Source_Sans_3',sans-serif]"
                />
              </div>

              {/* Honeypot field (hidden from real users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded text-[#3482b9] focus:ring-[#3482b9] border-slate-300 shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Source_Sans_3',sans-serif]">
                    I agree that MCT IT Solutions may store and process my details to evaluate my application, as described in the{" "}
                    <Link href="/privacy-policy" className="underline hover:text-[#0b1b3d] font-semibold text-[#3482b9]">
                      Privacy Policy
                    </Link>.
                  </span>
                </label>
              </div>

              {/* Submit Application Button in Website Brand Style */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#0b1b3d] hover:bg-[#3482b9] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#0b1b3d]/15 hover:shadow-xl hover:shadow-[#3482b9]/25 hover:-translate-y-0.5 disabled:opacity-60 cursor-pointer font-['Montserrat',sans-serif]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#3482b9]" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT APPLICATION</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>

                <p className="text-[11px] sm:text-xs text-slate-500 font-['Source_Sans_3',sans-serif] text-center sm:text-right">
                  Protected by reCAPTCHA and subject to Google{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-slate-800"
                  >
                    Privacy
                  </a>{" "}
                  &amp;{" "}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-slate-800"
                  >
                    Terms
                  </a>.
                </p>
              </div>

            </form>

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
