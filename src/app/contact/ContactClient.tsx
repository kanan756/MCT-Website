"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Globe2,
  ArrowRight,
  ChevronRight,
  Rocket,
  ShieldCheck,
  Clock,
  Sparkles
} from "lucide-react";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const isPocInquiry = searchParams.get("type") === "poc";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: isPocInquiry ? "5-Day Miniature POC" : "",
    message: isPocInquiry
      ? "Hi MCT Team, I would like to request a 5-Day Miniature POC to validate architecture and turnaround time before formal commitment."
      : "",
    isRobotChecked: false,
    inquiryType: isPocInquiry ? "poc" : "general",
  });

  useEffect(() => {
    if (isPocInquiry) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: "poc",
        service: "5-Day Miniature POC",
        message: prev.message || "Hi MCT Team, I would like to request a 5-Day Miniature POC to validate architecture and turnaround time before formal commitment.",
      }));
    }
  }, [isPocInquiry]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  // High-fidelity SVG Country Flags with identical size (w-12 h-7) and NO borders
  const branches = [
    {
      country: "INDIA",
      tag: "(HQ)",
      color: "text-[#2dd4bf]", // Mint / Teal as in screenshot
      flagSvg: (
        <svg viewBox="0 0 640 480" className="w-12 h-7 sm:w-14 sm:h-8 rounded-none object-cover shadow-sm">
          <path fill="#f93" d="M0 0h640v160H0z"/>
          <path fill="#fff" d="M0 160h640v160H0z"/>
          <path fill="#128807" d="M0 320h640v160H0z"/>
          <g transform="matrix(3.2 0 0 3.2 320 240)">
            <circle r="20" fill="none" stroke="#008" strokeWidth="2"/>
            <circle r="3" fill="#008"/>
            <path stroke="#008" strokeWidth="1" d="M0-20V20M-20 0H20M-14.1-14.1L14.1 14.1M-14.1 14.1L14.1-14.1M-7.7-18.5L7.7 18.5M-18.5-7.7L18.5 7.7M-18.5 7.7L18.5-7.7M-7.7 18.5L7.7-18.5"/>
          </g>
        </svg>
      ),
      addressLines: [
        "306-307, Radhe Kishan",
        "Arista, Opp. Hirabhai Tower,",
        "Maninagar, Ahmedabad,",
        "India."
      ],
      phone: null,
    },
    {
      country: "USA",
      tag: "(CORPORATE)",
      color: "text-[#38bdf8]", // Sky Blue
      flagSvg: (
        <svg viewBox="0 0 640 480" className="w-12 h-7 sm:w-14 sm:h-8 rounded-none object-cover shadow-sm">
          <g fill="#b22234">
            <path d="M0 0h640v37H0zm0 74h640v37H0zm0 74h640v37H0zm0 74h640v37H0zm0 73.8h640v37H0zm0 74h640v37H0zm0 74h640v37H0z"/>
          </g>
          <g fill="#fff">
            <path d="M0 37h640v37H0zm0 74h640v37H0zm0 74h640v37H0zm0 74h640v37H0zm0 73.8h640v37H0zm0 74h640v37H0z"/>
          </g>
          <path fill="#3c3b6e" d="M0 0h260v259H0z"/>
          <g fill="#fff">
            <circle cx="30" cy="30" r="6" />
            <circle cx="70" cy="30" r="6" />
            <circle cx="110" cy="30" r="6" />
            <circle cx="150" cy="30" r="6" />
            <circle cx="190" cy="30" r="6" />
            <circle cx="230" cy="30" r="6" />
            <circle cx="50" cy="65" r="6" />
            <circle cx="90" cy="65" r="6" />
            <circle cx="130" cy="65" r="6" />
            <circle cx="170" cy="65" r="6" />
            <circle cx="210" cy="65" r="6" />
            <circle cx="30" cy="100" r="6" />
            <circle cx="70" cy="100" r="6" />
            <circle cx="110" cy="100" r="6" />
            <circle cx="150" cy="100" r="6" />
            <circle cx="190" cy="100" r="6" />
            <circle cx="230" cy="100" r="6" />
            <circle cx="50" cy="135" r="6" />
            <circle cx="90" cy="135" r="6" />
            <circle cx="130" cy="135" r="6" />
            <circle cx="170" cy="135" r="6" />
            <circle cx="210" cy="135" r="6" />
            <circle cx="30" cy="170" r="6" />
            <circle cx="70" cy="170" r="6" />
            <circle cx="110" cy="170" r="6" />
            <circle cx="150" cy="170" r="6" />
            <circle cx="190" cy="170" r="6" />
            <circle cx="230" cy="170" r="6" />
            <circle cx="50" cy="205" r="6" />
            <circle cx="90" cy="205" r="6" />
            <circle cx="130" cy="205" r="6" />
            <circle cx="170" cy="205" r="6" />
            <circle cx="210" cy="205" r="6" />
          </g>
        </svg>
      ),
      addressLines: [
        "6 VENTURE ST 210,",
        "IRVINE CA 92618",
        "+1 203 286 3723"
      ],
      phone: "+1 203 286 3723",
    },
    {
      country: "CANADA",
      tag: "OFFICE",
      color: "text-[#38bdf8]", // Blue
      flagSvg: (
        <svg viewBox="0 0 640 480" className="w-12 h-7 sm:w-14 sm:h-8 rounded-none object-cover shadow-sm">
          <path fill="#f00" d="M0 0h160v480H0zm480 0h160v480H480z"/>
          <path fill="#fff" d="M160 0h320v480H160z"/>
          <path fill="#f00" d="M320 110l18 48 34-12-14 36 44 14-36 28 20 44-50-10-8 64h-16l-8-64-50 10 20-44-36-28 44-14-14-36 34 12z"/>
        </svg>
      ),
      addressLines: [
        "86 Ringwood Dr",
        "Stouffville,",
        "ON, Canada"
      ],
      phone: null,
    },
    {
      country: "SINGAPORE",
      tag: "OFFICE",
      color: "text-[#c084fc]", // Light Purple / Violet
      flagSvg: (
        <svg viewBox="0 0 640 480" className="w-12 h-7 sm:w-14 sm:h-8 rounded-none object-cover shadow-sm">
          <path fill="#ed2939" d="M0 0h640v240H0z"/>
          <path fill="#fff" d="M0 240h640v240H0z"/>
          <g fill="#fff">
            <circle cx="120" cy="120" r="65"/>
            <circle cx="145" cy="120" r="58" fill="#ed2939"/>
            <circle cx="155" cy="85" r="9"/>
            <circle cx="180" cy="105" r="9"/>
            <circle cx="170" cy="135" r="9"/>
            <circle cx="140" cy="135" r="9"/>
            <circle cx="130" cy="105" r="9"/>
          </g>
        </svg>
      ),
      addressLines: [
        "65 Ubi Crescent 06 Hola",
        "Centre Singapore",
        "408559"
      ],
      phone: null,
    },
    {
      country: "AUSTRALIA",
      tag: "OFFICE",
      color: "text-[#818cf8]", // Indigo / Blue-Purple
      flagSvg: (
        <svg viewBox="0 0 640 480" className="w-12 h-7 sm:w-14 sm:h-8 rounded-none object-cover shadow-sm">
          <path fill="#00008b" d="M0 0h640v480H0z"/>
          <g>
            <path fill="#fff" d="M0 0h320v240H0z"/>
            <path stroke="#fff" strokeWidth="48" d="M0 0l320 240M320 0L0 240"/>
            <path stroke="#cf142b" strokeWidth="24" d="M0 0l320 240M320 0L0 240"/>
            <path stroke="#fff" strokeWidth="70" d="M160 0v240M0 120h320"/>
            <path stroke="#cf142b" strokeWidth="40" d="M160 0v240M0 120h320"/>
          </g>
          <g fill="#fff">
            <polygon points="160,320 166,345 190,340 172,357 185,378 160,367 135,378 148,357 130,340 154,345" />
            <circle cx="480" cy="380" r="14"/>
            <circle cx="420" cy="240" r="14"/>
            <circle cx="480" cy="110" r="14"/>
            <circle cx="540" cy="200" r="14"/>
            <circle cx="500" cy="270" r="8"/>
          </g>
        </svg>
      ),
      addressLines: [
        "Westmead NSW 2145",
        "Australia.",
        "+61 2 88107945"
      ],
      phone: "+61 2 88107945",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    if (!formData.isRobotChecked) {
      setValidationError("Please verify that you are not a robot.");
      return;
    }
    setValidationError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "",
          service: formData.service || (formData.inquiryType === "poc" ? "5-Day Miniature POC" : "General Inquiry"),
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to send inquiry");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        inquiryType: "",
        isRobotChecked: false,
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setValidationError(err.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO / BANNER SECTION (bg-contact.png with Home Theme)       */}
      {/* ============================================================== */}
      <section className="relative w-full py-24 lg:py-32 text-white overflow-hidden border-b-4 border-[#3482b9]">
        
        {/* Background Image: public/bg-contact.png */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-contact.png"
            alt="Contact Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/92 via-[#0b1b3d]/80 to-[#0b1b3d]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/95 via-transparent to-[#0b1b3d]/40" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3482b9]/25 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#e74c3c]/15 rounded-full blur-[130px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumbs matching all inner pages */}
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Contact Us</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-8 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.2] max-w-4xl mx-auto mb-6">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Information
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            Start your App Development Journey Today! Drop us a line and let&apos;s bring your vision to life.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="#drop-us-a-line"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105"
            >
              Drop Us a Line
            </a>
            <a
              href="tel:+919510879991"
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all"
            >
              +91 9510879991
            </a>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CONTACT INFORMATION (Exact Content: Address, Phone, Email)   */}
      {/* ============================================================== */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs font-bold uppercase tracking-wider mb-3">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Contact Information
            </h2>
            <div className="w-16 h-1 bg-[#3482b9] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* ADRESS */}
            <div className="group p-8 rounded-2xl bg-[#fbfcfd] border border-gray-200 hover:border-[#3482b9] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-sky-50 group-hover:bg-[#3482b9] text-[#3482b9] group-hover:text-white flex items-center justify-center mb-5 transition-colors shadow-sm">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold uppercase tracking-widest text-slate-900 group-hover:text-[#3482b9] transition-colors mb-3">
                adress
              </h3>
              <p className="text-sm font-bold text-slate-900 group-hover:text-[#3482b9] transition-colors leading-relaxed max-w-xs">
                306-307, Radhe Kishan Arista, Opp. HirabhaiTower, Jawahar Chock, Maninagar, Ahmedabad-380008, Gujarat, India.
              </p>
            </div>

            {/* PHONE */}
            <a
              href="tel:+919510879991"
              className="group p-8 rounded-2xl bg-[#fbfcfd] border border-gray-200 hover:border-[#3482b9] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-sky-50 group-hover:bg-[#3482b9] text-[#3482b9] group-hover:text-white flex items-center justify-center mb-5 transition-colors shadow-sm">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold uppercase tracking-widest text-slate-900 group-hover:text-[#3482b9] transition-colors mb-3">
                Phone
              </h3>
              <p className="text-base font-bold text-slate-900 group-hover:text-[#3482b9] transition-colors">
                +91 9510879991
              </p>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:mct@miraclecloud-technology.com"
              className="group p-8 rounded-2xl bg-[#fbfcfd] border border-gray-200 hover:border-[#3482b9] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-sky-50 group-hover:bg-[#3482b9] text-[#3482b9] group-hover:text-white flex items-center justify-center mb-5 transition-colors shadow-sm">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold uppercase tracking-widest text-slate-900 group-hover:text-[#3482b9] transition-colors mb-3">
                email
              </h3>
              <p className="text-sm font-bold text-slate-900 group-hover:text-[#3482b9] transition-colors break-all">
                mct@miraclecloud-technology.com
              </p>
            </a>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. OUR BRANCHES (Using blurred /bg-branch.png)                 */}
      {/* ============================================================== */}
      <section className="w-full py-28 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden border-b border-white/10">
        
        {/* Background Image: public/bg-branch.png with subtle blur and balanced overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-branch.png"
            alt="MCT Branches Worldwide"
            fill
            className="object-cover object-center blur-[2px] scale-[1.02]"
          />
          {/* Subtle Dark Overlay so text is legible while map/branch artwork stays clearly recognizable */}
          <div className="absolute inset-0 bg-[#0b1b3d]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081530]/90 via-transparent to-[#0b1b3d]/70" />
        </div>

        {/* Ambient Brand Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#3482b9]/15 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#e74c3c]/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-wider">
              OUR BRANCHES
            </h2>
            <div className="w-16 h-1 bg-[#3482b9] mx-auto mt-4 rounded-full"></div>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-5 max-w-2xl mx-auto">
              We are proud to have a global presence, bringing our services closer to you. Our branches are strategically located to serve customers worldwide with the highest level of efficiency and care.
            </p>
          </div>

          {/* 5 Branches matching screenshot layout with Country Flags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 text-center items-start">
            {branches.map((branch, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-1"
              >
                {/* Real SVG Country Flag */}
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {branch.flagSvg}
                </div>

                {/* Country Name with specific colored title from screenshot */}
                <h3 className={`text-base font-black tracking-wider uppercase mb-0.5 ${branch.color}`}>
                  {branch.country}
                </h3>
                
                {/* Tag e.g. (HQ), (CORPOATE), OFFICE */}
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-4 block">
                  {branch.tag}
                </span>

                {/* Address Lines */}
                <div className="text-slate-300 text-xs leading-relaxed space-y-1 font-normal">
                  {branch.addressLines.map((line, lIdx) => (
                    <p key={lIdx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. DROP US A LINE (Exact Content & Form)                       */}
      {/* ============================================================== */}
      <section id="drop-us-a-line" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-white to-slate-50 text-slate-800 relative overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Exact User Content */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/20 text-[#3482b9] text-xs font-bold uppercase tracking-widest">
                DROP US A LINE
              </div>

              <p className="text-base font-bold text-[#3482b9]">
                Start your App Development Journey Today!
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight uppercase">
                Have a Project in Mind?
              </h2>

              <h3 className="text-lg sm:text-xl font-bold text-[#e74c3c] uppercase tracking-wide">
                Let’s Bring Your Vision to Life!
              </h3>

              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  Whether you’re starting from scratch or scaling up your existing system, we’re here to help you turn ideas into powerful digital solutions. Drop us a line, and our team will reach out to discuss vision, goals and next steps!
                </p>
                <p className="font-semibold text-slate-900 pt-2 border-l-4 border-[#3482b9] pl-4 bg-sky-50/70 py-3 rounded-r-xl">
                  Our expertise, combined with a passion for innovation, ensures that we deliver solutions that not only meet but exceed your expectations.
                </p>
              </div>

            </div>

            {/* Right Column: Name, Email, Message Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-xl">

                {/* USP Notice for Fast POC & P0/P1 SLA */}
                <div className="mb-6 p-4 rounded-2xl bg-sky-50/80 border border-[#3482b9]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3482b9] text-white flex items-center justify-center shrink-0">
                      <Rocket className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        {isPocInquiry ? "Fast 5-Day Miniature POC Request" : "Need Quick Risk-Free Validation?"}
                      </p>
                      <p className="text-xs text-slate-600">
                        Get a working miniature prototype before signing or fast 2–4h SLA triage.
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Zero Risk
                  </span>
                </div>

                {submitted ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">Thank you!</h4>
                    <p className="text-slate-600 text-sm max-w-md">
                      Your message has been sent successfully. Our team will reach out to discuss vision, goals and next steps!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-[#3482b9] focus:bg-white transition-all shadow-sm"
                      />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-[#3482b9] focus:bg-white transition-all shadow-sm"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-[#3482b9] focus:bg-white transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-[#3482b9] focus:bg-white transition-all shadow-sm"
                      >
                        <option value="">Select a Service (Optional)</option>
                        <option value="5-Day Miniature POC">5-Day Miniature POC (Fast Prototyping)</option>
                        <option value="Microsoft Dynamics 365 CRM">Microsoft Dynamics 365 CRM</option>
                        <option value="Microsoft Dynamics 365 Business Central (ERP)">Microsoft Dynamics 365 Business Central (ERP)</option>
                        <option value="Supply Chain & Warehouse Management">Supply Chain & Warehouse Management</option>
                        <option value="Human Resource Management (HRMS)">Human Resource Management (HRMS)</option>
                        <option value="E-Invoicing & Compliance (ZATCA / UAE / KSA)">E-Invoicing & Compliance (ZATCA / UAE / KSA)</option>
                        <option value="Power Platform & Automation">Power Platform & Automation</option>
                        <option value="Web & Mobile App Development">Web & Mobile App Development</option>
                        <option value="General Consultation">General Consultation</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-[#3482b9] focus:bg-white transition-all shadow-sm resize-y"
                      />
                    </div>

                    {validationError && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl font-medium animate-fade-in">
                        {validationError}
                      </div>
                    )}

                    {/* Official-Style Google reCAPTCHA v2 Widget Matching Screenshot */}
                    <div className="w-full max-w-[304px] bg-[#f9f9f9] border border-[#d3d3d3] rounded-[3px] shadow-[0_0_4px_1px_rgba(0,0,0,0.08)] p-3 flex items-center justify-between select-none">
                      
                      {/* Checkbox + "I'm not a robot" text */}
                      <label className="flex items-center gap-3.5 cursor-pointer flex-grow">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={formData.isRobotChecked}
                            onChange={(e) => {
                              setFormData({ ...formData, isRobotChecked: e.target.checked });
                              if (e.target.checked) setValidationError("");
                            }}
                            className="w-7 h-7 rounded-[2px] border-2 border-[#c1c1c1] bg-white checked:bg-[#3482b9] checked:border-[#3482b9] focus:ring-0 cursor-pointer transition-all"
                          />
                        </div>
                        <span className="text-[14px] font-normal text-[#222222] font-sans">
                          I&apos;m not a robot
                        </span>
                      </label>

                      {/* Right Logo & Branding (Exact match to screenshot) */}
                      <div className="flex flex-col items-center justify-center pl-3">
                        {/* Google reCAPTCHA 2-arrow icon (Top half blue #4285F4, bottom half grey #9e9e9e) */}
                        <div className="w-8 h-8 relative">
                          <svg viewBox="0 0 48 48" className="w-full h-full">
                            {/* Blue Top Arrow */}
                            <path
                              d="M24 4 C 14.5 4, 6.5 10.8, 4.6 20 L 9.8 20 C 11.5 13.6, 17.2 9, 24 9 C 29.3 9, 33.9 11.9, 36.4 16.2 L 31 21 L 44 21 L 44 8 L 39.5 12.5 C 36 7.3, 30.4 4, 24 4 Z"
                              fill="#4285F4"
                            />
                            {/* Grey Bottom Arrow */}
                            <path
                              d="M24 44 C 33.5 44, 41.5 37.2, 43.4 28 L 38.2 28 C 36.5 34.4, 30.8 39, 24 39 C 18.7 39, 14.1 36.1, 11.6 31.8 L 17 27 L 4 27 L 4 40 L 8.5 35.5 C 12 40.7, 17.6 44, 24 44 Z"
                              fill="#9E9E9E"
                            />
                          </svg>
                        </div>
                        <span className="text-[10px] text-[#555555] font-normal mt-0.5 tracking-tight font-sans">
                          reCAPTCHA
                        </span>
                        <div className="text-[8px] text-[#555555] flex gap-1 font-sans">
                          <a
                            href="https://www.google.com/intl/en/policies/privacy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-[#555555]"
                          >
                            Privacy
                          </a>
                          <span>-</span>
                          <a
                            href="https://www.google.com/intl/en/policies/terms/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-[#555555]"
                          >
                            Terms
                          </a>
                        </div>
                      </div>

                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#3482b9] hover:bg-[#1f6595] text-white font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>SEND</span>
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. GET IN TOUCH WITH SOCIAL ICONS: Twitter, Facebook, LinkedIn, */}
      {/*    Instagram, YouTube (Requested by user)                       */}
      {/* ============================================================== */}
      <section className="w-full py-16 bg-[#131927] text-white border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-white mb-3">
            GET IN TOUCH
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
            Join us on social media and be part of our community! Follow us for updates, exclusive offers, and the latest news.
          </p>

          {/* Social Icons matching requested order: Twitter, Facebook, LinkedIn, Instagram, YouTube */}
          <div className="flex items-center justify-center gap-5 sm:gap-6">
            
            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/MCTIT-Solution-PVT-LTD/61556353773723/?_rdr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700/80 hover:border-[#3482b9] hover:bg-[#3482b9] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-300 shadow hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/mctit/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700/80 hover:border-[#3482b9] hover:bg-[#3482b9] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-300 shadow hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 0 0 1.69-1.69 1.69 1.69 0 0 0-3.38 0c0 .93.76 1.69 1.69 1.69m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/mctitsolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700/80 hover:border-[#3482b9] hover:bg-[#3482b9] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-300 shadow hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mctitsolutionspvtltd/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700/80 hover:border-[#e74c3c] hover:bg-[#e74c3c] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-300 shadow hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@mctitsolutionspvt.ltd.mcti1287"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700/80 hover:border-[#e74c3c] hover:bg-[#e74c3c] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-300 shadow hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. OFFICE LOCATION (Interactive Google Map Embed)              */}
      {/* ============================================================== */}
      <section className="w-full bg-[#0b162c] py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-[#5ba6db] text-xs font-bold uppercase tracking-wider mb-2">
              Find us on the map
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Our Office Location
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              306-307 Radhe Kishan Arista, Opp. Hirabhai Tower, Jawahar Chock, Maninagar, Ahmedabad, Gujarat
            </p>
          </div>

          <div className="w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.916878462668!2d72.60106161129823!3d22.990083879109772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85e5f41e5e7b%3A0x9ea651458c8b61c2!2sMCT%20IT%20SOLUTIONS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1792563409819!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MCT IT Solutions Location Map"
              className="w-full h-full"
            />
          </div>

        </div>
      </section>

    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fbfcfd] flex items-center justify-center text-slate-500">Loading...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
