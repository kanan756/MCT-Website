"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown, Star, ChevronLeft, ChevronRight,
  MapPin, Phone, Mail, Globe, ArrowRight,
  ShieldCheck, Laptop, BarChart2, Users, Search,
  Code, Settings, Cloud, Database, Zap,
  Sparkles, Clock, CheckCircle2, AlertTriangle,
  Flame, ShieldAlert, Rocket, Layers, Workflow,
  Factory, Landmark, ShoppingCart, Truck, HeartPulse, Building,
  Calendar
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  // Testimonials strictly using user's exact provided texts & order
  const testimonials = [
    {
      name: "Sandra Skairjeh",
      company: "BlueRidge IT FZE",
      role: "Vice President",
      location: "UAE",
      quote: "“We have had a very positive experience working with MCT IT Solutions PVT Ltd. They have supported our company on several Application Development and DevOps projects, and demonstrated reliability, commitment, responsiveness, and the willingness to go the extra mile.\n\nThe MCT team is easy to work with, professional, and genuinely invested in helping us. Whenever support is needed, they respond quickly and do their best to find solutions.\n\nWe truly value the partnership and appreciate the consistent service and dedication they bring to every project. Highly recommended.”"
    },
    {
      name: "Mr.Rehman",
      company: "Techspine Business Solutions WLL",
      role: "Founder",
      location: "qatar",
      quote: "“I recommend MCT to everyone looking for app development. The developers at the company were prompt in developing the seamless mobile applications that not only fit my specifications but also exceeded my expectations. The app is not just attractive in the looks but also offers enhanced engagement to the users. I am really impressed by their talent and professionalism.”"
    },
    {
      name: "Vishal Bhavsar",
      company: "Mortgage Industry Advisory Corporation",
      role: "Director, Technology Strategies & Security",
      location: "USA",
      quote: "“MCT has been a valuable technical partner for 6+ years. On behalf of Technology Strategies Group, we thank you for your sincere & dedicated efforts with timely deliverables on each projects. We highly recommend your services.”"
    },
    {
      name: "Damjan Krivosija",
      company: "US",
      role: "",
      location: "",
      quote: "“We’re extremely satisfied with the MCT IT Solution we’ve been working with. They consistently meet deadlines, communicate clearly, and deliver high-quality code. Their proactive approach to problem-solving and willingness to accommodate our requests have made the entire process smooth and efficient. We highly recommend them to anyone seeking a reliable, knowledgeable, and dedicated development team.”"
    },
    {
      name: "liroy chauhan",
      company: "India",
      role: "",
      location: "",
      quote: "“I appreciate the professionalism and dedication your team consistently demonstrates. We are surely having a great feedback for you. Reliability: The staff you provided were punctual and dependable, which ensured our operations ran smoothly. Skills and Expertise: Their proficiency in greatly contributed to the success of the project and task. Flexibility: Team’s ability to accommodate last-minute requests or changes is commendable and greatly valued.“"
    },
    {
      name: "Smkumar Gurubarar",
      company: "India",
      role: "",
      location: "",
      quote: "“We had a fantastic engagement with MCT on our Dynamics CRM which deliverables were done presisely within the stipulated timelines. Appreciate the delivery team for their timely delivery which enables us to nurture the leads to augment the sales pipeline in quick turnover.”"
    },
    {
      name: "Mahesh Shah",
      company: "Aincloud Inc.",
      role: "Founder",
      location: "USA",
      quote: "Advanced in cloud (AIC) based in Connecticut has retain Miracle Cloud Technology (MCT) for the development of AIC’s proprietary software to manage the business of merchants of one of the biggest retailers of the USA. AIC is very happy with this development and maintaining the systems. MCT has good developer who can handle the task provided by AIC for this software development and it is using Microsoft CRM platform. AIC is very satisfied with the project development and commitments of MCT MCT also has worked for AIC clients to convert old version of Microsoft CRM system to current version of Microsoft CRM 2016/365. AIC ‘s client includes in the financial area. MCT has good knowledge of Microsoft CRM system"
    },
    {
      name: "Vincent Valentino",
      company: "CDM Inc.",
      role: "President",
      location: "USA",
      quote: "“We have been using MCT through AIC in USA, developing our automation application of the proprietary software of AIC which is developed by MCT, India since 2015. We are fine with the deliverables received from MCT/AIC for our application and business. With this efforts of MCT we have become very efficient in our operation.”"
    },
    {
      name: "D Viera",
      company: "Minuteflyer",
      role: "CEO",
      location: "France",
      quote: "“There is in MCT services, a rare dedication for work value and methodology, an understanding for client needs. A solid internal synergy that reflect into strong results. I highly recommend”"
    },
    {
      name: "Jimmy tan",
      company: "My RFQ PTE Ltd.",
      role: "Director",
      location: "singapore",
      quote: "“I am writing to thank you for the quality of service provided by your company. We sincerely appreciate your efficient, gracious customer service, the level of detail and accountability you have demonstrated on each project, and the way you conduct business as a whole. We have, and will continue to, recommend your service to other companies and contacts. Our team could not be more satisfied with your work, and we look forward to continuing this relationship.”"
    },
    {
      name: "Alan halabi",
      company: "Acceinfo",
      role: "GM",
      location: "canada,UAE",
      quote: "“When it comes to CRM solutions there’s no one better than MCT, we are very happy with our association and would like to carry it forever, thanks again for your support.”"
    },
    {
      name: "Joseph edward",
      company: "Invorg Inc.",
      role: "CIO",
      location: "canada,USA",
      quote: "“It’s great to have MCT as our technical partner, we are associated since last 4 years with them and it’s been a very good relationship in every sense.”"
    },
    {
      name: "Jack liang",
      company: "The Broom App Pte Ltd",
      role: "Project Manager",
      location: "singapore",
      quote: "“On behalf of our client and the team in Singapore, we would like to extend our appreciation to acknowledge your team hard work to materialize the broom app availability in the stores today.\n\n1st milestone cleared and let’s work together closely for V2 and eventually to finalize our vision to become the “global broadcasting platform connecting everyone”.\n\nThanks to team once again for a fabulous job done!”"
    }
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Exact FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = [
    {
      q: "What is the typical timeline for getting started with a Dynamics 365 project?",
      a: "Our team can start your Dynamics 365 project within 1-2 weeks, depending on project scope and requirements. We’ll work with you to establish the timeline."
    },
    {
      q: "How do you determine the cost of a Dynamics 365 solution, and what factors impact the budget?",
      a: "Pricing varies based on your specific needs. We assess project scope, complexity, and any additional customizations to provide a tailored budget."
    },
    {
      q: "What are the available payment options and terms for your services?",
      a: "We offer flexible payment plans, including upfront payments and installment options. Specific terms are discussed during the project scoping phase."
    },
    {
      q: "Are your solutions optimized for mobile and responsive across different devices?",
      a: "Yes, all our solutions are fully optimized for mobile, ensuring seamless performance across devices like smartphones, tablets, and desktops."
    },
    {
      q: "What ongoing support and marketing services do you offer after the app or system is launched?",
      a: "We provide ongoing support, including marketing, system updates, and performance optimization to ensure your solution continues to meet business goals."
    }
  ];

  // Structured Uniform 6 Core Services
  const uniformServices = [
    {
      title: "Microsoft Dynamics 365",
      subtitle: "CRM & Customer Experience",
      description: "Customized Sales, Customer Service, and Field Service implementations engineered to streamline end-to-end customer lifecycles and pipeline visibility.",
      icon: Search,
      badge: "CRM Platform",
      link: "/services/dynamics-365"
    },
    {
      title: "Business Central / ERP",
      subtitle: "Finance & Supply Chain",
      description: "Tailored Business Central AL development, warehouse automation, lot tracking, and regulatory financial governance for mid-market and enterprise scale.",
      icon: BarChart2,
      badge: "ERP Architecture",
      link: "/services/business-central"
    },
    {
      title: "Power Platform",
      subtitle: "Low-Code & Rapid Apps",
      description: "Enterprise Power Apps, Power Automate cloud/desktop RPA, and Power Pages customer portals delivering rapid process digitization without technical debt.",
      icon: Zap,
      badge: "Low-Code / RPA",
      link: "/services/power-apps"
    },
    {
      title: "AI & Automation",
      subtitle: "Copilot & Intelligent Workflows",
      description: "Intelligent agent architectures, Microsoft Copilot Studio integration, and cognitive automated document extraction to supercharge workforce productivity.",
      icon: Sparkles,
      badge: "Cognitive AI",
      link: "/services/ai-solutions"
    },
    {
      title: "Custom Development",
      subtitle: "Full-Stack & Cloud Integration",
      description: "Custom web applications, RESTful microservices, Azure cloud functions, and mobile apps seamlessly connected to enterprise Microsoft Dataverse backends.",
      icon: Code,
      badge: "Cloud & APIs",
      link: "/services/custom-development"
    },
    {
      title: "Support & SLA",
      subtitle: "24/7 Managed Operations",
      description: "Dedicated pod monitoring, guaranteed P0/P1 emergency response SLAs, proactive telemetry checks, and continuous platform optimization.",
      icon: ShieldCheck,
      badge: "Guaranteed SLA",
      link: "/services/managed-support"
    }
  ];

  // 4 Why us cards
  const whyUs = [
    {
      title: "PowerApps",
      desc: "Build custom business apps quickly with low-code tools to improve productivity and streamline processes.",
      icon: Laptop
    },
    {
      title: "PowerPages",
      desc: "Easily create secure, professional websites with minimal coding and intuitive design tools.",
      icon: Globe
    },
    {
      title: "Customer Engagement",
      desc: "Foster lasting relationships with your audience through personalized communication and targeted interactions.",
      icon: Users
    },
    {
      title: "BusinessCentral",
      desc: "Optimize business operations by integrating finance, sales, and supply chain management in one platform.",
      icon: BarChart2
    }
  ];

  // Clients: Client 1 to 15 + CleanMail Pro
  const clientLogos = [
    { src: "/client1.jpg", alt: "Sensiple" },
    { src: "/client2.png", alt: "BlueRidge IT" },
    { src: "/client3.png", alt: "Cygnet One" },
    { src: "/client4.png", alt: "Magic Bus" },
    { src: "/client5.png", alt: "Vistas" },
    { src: "/client6.png", alt: "Avangrid" },
    { src: "/client7.png", alt: "Intelegain Technologies" },
    { src: "/client8.png", alt: "Invorg" },
    { src: "/client9.png", alt: "Minuteflyer" },
    { src: "/client10.png", alt: "AccelInfo" },
    { src: "/client11.png", alt: "Advanced In-Cloud" },
    { src: "/client12.png", alt: "CDM Inc." },
    { src: "/client13.png", alt: "Techspine" },
    { src: "/client14.png", alt: "myRFQ" },
    { src: "/client15.png", alt: "MIAC Analytics" },
    { src: "/cleanmailpro.png", alt: "CleanMail Pro" }
  ];

  // Clients: Client 1 to 15 + CleanMail Pro

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* 1. HERO / BANNER SECTION - CLEAN SPLIT HERO LAYOUT */}
      <section className="relative w-full py-16 sm:py-20 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9] bg-[#0b1b3d]">
        {/* Background Image with Dark Professional Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-home.png"
            alt="Microsoft Dynamics 365 Architecture Background"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d] via-[#0b1b3d]/90 to-[#0b1b3d]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(#3482b9_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />
        </div>

        {/* Ambient Brand Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3482b9]/20 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5ba6db]/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content Column: Strong Corporate Headline & Value Proposition */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              {/* Strategic Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase backdrop-blur-md shadow-md shadow-[#3482b9]/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3482b9] animate-pulse" />
                <span>Enterprise Microsoft Cloud &amp; ERP Consulting</span>
              </div>

              {/* Strong Corporate Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.12] tracking-tight font-['Montserrat',sans-serif]">
                Architecting Resilient Enterprise Solutions on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] via-[#3482b9] to-sky-200">
                  Microsoft Dynamics 365
                </span>
              </h1>

              {/* Concise Business Value Proposition */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal font-['Source_Sans_3',sans-serif]">
                We help high-growth organizations and global enterprises unify finance, customer engagement, and business workflows through tailored Dynamics 365, Business Central, and Power Platform implementations.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-3 bg-[#3482b9] hover:bg-[#1f6595] text-white px-7 py-4 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-[#3482b9]/30 transition-all hover:scale-105 font-['Montserrat',sans-serif]"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-7 py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all backdrop-blur-md font-['Montserrat',sans-serif]"
                >
                  <Users className="w-4 h-4 text-[#5ba6db]" />
                  <span>Talk to Our Experts</span>
                </Link>
              </div>

              {/* Trust Indicators / Quick Metrics */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono">10+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#5ba6db] font-mono">50+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Global Clients</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">&lt; 4h</div>
                  <div className="text-[11px] text-slate-400 font-medium">Severity 1 SLA</div>
                </div>
              </div>

            </div>

            {/* Right Split Column: Clean, Relevant Enterprise Technology Visual / Dashboard Graphic */}
            <div className="lg:col-span-5 w-full">
              <div className="relative rounded-3xl p-3 bg-gradient-to-br from-white/15 via-white/5 to-white/10 border border-white/20 shadow-2xl backdrop-blur-xl">
                
                {/* Main Dashboard Window Mockup */}
                <div className="relative rounded-2xl overflow-hidden bg-[#0d224d] border border-white/10 shadow-xl">
                  
                  {/* Window Bar */}
                  <div className="px-4 py-3 bg-[#081530] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3482b9] animate-pulse" />
                      <span>Dynamics 365 Operations Hub</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 font-mono">v2026.4</span>
                  </div>

                  {/* Dashboard Graphic Content */}
                  <div className="p-5 space-y-4">
                    {/* Top Stat Row */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[11px] text-slate-400 uppercase font-semibold">ERP Data Synchronization</div>
                        <div className="text-lg font-black text-white mt-1 font-mono">99.98%</div>
                        <div className="text-[10px] text-emerald-400 mt-0.5 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Real-time active sync
                        </div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[11px] text-slate-400 uppercase font-semibold">Customer Workflows</div>
                        <div className="text-lg font-black text-[#5ba6db] mt-1 font-mono">1.2M+</div>
                        <div className="text-[10px] text-slate-300 mt-0.5">Automated transactions</div>
                      </div>
                    </div>

                    {/* Visual Graphic Representation: D365 Pipeline Overview */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#0b1b3d] to-[#122e66] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-200">Ecosystem Architecture</span>
                        <span className="text-[10px] font-mono text-sky-300 font-bold px-2 py-0.5 rounded-full bg-sky-950/80 border border-sky-400/30">Live Telemetry</span>
                      </div>

                      {/* Stream Progress Bars */}
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                            <span>Business Central Financials</span>
                            <span className="font-mono text-emerald-400 font-bold">Connected</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full w-[94%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                            <span>Dynamics 365 Sales &amp; Field Service</span>
                            <span className="font-mono text-[#5ba6db] font-bold">Optimized</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-[#3482b9] rounded-full w-[88%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                            <span>Power Platform &amp; Copilot AI</span>
                            <span className="font-mono text-purple-400 font-bold">Automated</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 rounded-full w-[96%]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Verification Footer Pill */}
                    <div className="p-3 rounded-xl bg-[#081530]/90 border border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-slate-300 text-[11px]">Microsoft Solutions Partner Ecosystem</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#5ba6db] font-['Montserrat',sans-serif]">Certified</span>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 1.2 COMPANY INTRODUCTION (Homepage 02 Requirement)            */}
      {/* ============================================================== */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Authentic Team / Delivery Visual Beside Text Block */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                <div className="relative w-full h-[320px] sm:h-[400px]">
                  <Image
                    src="/solutions-perspective.jpg"
                    alt="MCT IT Solutions Engineering and Consulting Team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/85 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Metric Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-md flex items-center justify-between">
                    <div>
                      <div className="text-xs font-black text-slate-900 uppercase font-['Montserrat',sans-serif]">MCT Delivery Practice</div>
                      <div className="text-[11px] text-slate-600 font-medium font-['Source_Sans_3',sans-serif]">Certified Dynamics 365 &amp; ERP Pods</div>
                    </div>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3482b9] hover:text-[#1f6595] font-['Montserrat',sans-serif]"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview & Concise "What We Do" Summary */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs font-bold uppercase tracking-wider font-['Montserrat',sans-serif]">
                <Users className="w-3.5 h-3.5" />
                <span>Company Introduction</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight tracking-tight font-['Montserrat',sans-serif]">
                Empowering Enterprises with High-Impact Microsoft Cloud &amp; ERP Solutions
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-['Source_Sans_3',sans-serif]">
                MCT IT Solutions Pvt Ltd is a specialized Microsoft technology partner delivering end-to-end consulting, customization, system integration, and 24/7 managed support. We architect robust enterprise workflows across <strong>Microsoft Dynamics 365, Business Central, and the Power Platform</strong>, turning fragmented processes into unified, revenue-generating operations.
              </p>

              {/* Concise "What We Do" Grid */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-['Montserrat',sans-serif]">
                  What We Do
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    { title: "Consulting & Fit-Gap", desc: "Business process mapping and architectural roadmaps." },
                    { title: "Turnkey Implementation", desc: "Clean configuration of Dynamics 365 CE and Business Central." },
                    { title: "Custom AppSource Modules", desc: "Tailored AL extensions and proprietary CRM add-ons." },
                    { title: "SLA Managed Support", desc: "Guaranteed P0/P1 emergency triage and telemetry monitoring." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1 font-['Montserrat',sans-serif]">
                        <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal pl-6 font-['Source_Sans_3',sans-serif]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* "Learn About Us" Button leading to /about */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#3482b9] hover:bg-[#1f6595] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#3482b9]/20 transition-all hover:scale-105 font-['Montserrat',sans-serif]"
                >
                  <span>Learn About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all font-['Montserrat',sans-serif]"
                >
                  <span>View All Capabilities</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 1.5 THE MCT ASSURANCE: OUR CORE DIFFERENTIATORS / USPS         */}
      {/* ============================================================== */}
      <section id="mct-assurance" className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0b1b3d] via-[#0f244e] to-[#0b1b3d] text-white relative overflow-hidden border-b border-white/10">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#3482b9]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#5ba6db] mb-4 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#3482b9]" />
              <span>Engineered for Reliability &amp; Speed</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight">
              Why Forward-Thinking Enterprises <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] via-[#3482b9] to-sky-200">
                Choose MCT IT Solutions
              </span>
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Eliminate software delivery risks, cut procurement delays, and secure high-availability support for your mission-critical Microsoft Dynamics 365 environments.
            </p>
          </div>

          {/* 3 High-Impact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">

            {/* USP 1: Rapid Prototype & Miniature POC */}
            <div className="group relative rounded-3xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-[#3482b9]/60 p-8 sm:p-9 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(52,130,185,0.25)] backdrop-blur-xl">
              <div>
                {/* Tech number & metric pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3482b9]/25 to-white/5 border border-white/15 flex items-center justify-center text-[#5ba6db] group-hover:bg-[#3482b9] group-hover:text-white transition-all duration-300 shadow-md">
                      <Rocket className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      001
                    </span>
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-3 py-1 rounded-full">
                    5–7 Day Turnaround
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 tracking-tight font-['Montserrat',sans-serif]">
                  Miniature POC Before Contract
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-['Source_Sans_3',sans-serif]">
                  Don’t commit your enterprise budget blindly. We build working, interactive miniature prototypes of your critical workflows first—validating architecture and eliminating financial surprises before formal kickoff.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pb-6 border-b border-white/10 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0" />
                    <span>Real working demo with test data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0" />
                    <span>Zero architectural guesswork</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0" />
                    <span>Executive stakeholder alignment</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 flex items-center justify-between">
                <Link
                  href="/contact?type=poc"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#5ba6db] group-hover:text-white transition-colors"
                >
                  <span>Request a 5-Day POC</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <span className="text-[11px] font-bold text-slate-400">Risk-Free</span>
              </div>
            </div>

            {/* USP 2: Industry-Leading Turnaround Time (TAT) */}
            <div className="group relative rounded-3xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-[#3482b9]/60 p-8 sm:p-9 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(52,130,185,0.25)] backdrop-blur-xl">
              <div>
                {/* Tech number & metric pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3482b9]/25 to-white/5 border border-white/15 flex items-center justify-center text-[#5ba6db] group-hover:bg-[#3482b9] group-hover:text-white transition-all duration-300 shadow-md">
                      <Clock className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      002
                    </span>
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#5ba6db] bg-[#3482b9]/20 border border-[#3482b9]/40 px-3 py-1 rounded-full">
                    2x Faster Delivery
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 tracking-tight font-['Montserrat',sans-serif]">
                  Unmatched Turnaround Time (TAT)
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-['Source_Sans_3',sans-serif]">
                  By leveraging proven reusable AL extensions, pre-built API connectors, and agile Microsoft-certified pods, we ship customizations and ERP migrations in weeks rather than dragging on for quarters.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pb-6 border-b border-white/10 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0" />
                    <span>Pre-engineered AppSource modules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0" />
                    <span>Automated CI/CD release pipelines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0" />
                    <span>Direct access to senior developers</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 flex items-center justify-between">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#5ba6db] group-hover:text-white transition-colors"
                >
                  <span>Explore Sprint Velocity</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <span className="text-[11px] font-bold text-slate-400">Agile Squads</span>
              </div>
            </div>

            {/* USP 3: P0 & P1 Rapid Response within a Few Hours */}
            <div className="group relative rounded-3xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-[#3482b9]/60 p-8 sm:p-9 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(52,130,185,0.25)] backdrop-blur-xl">
              <div>
                {/* Tech number & metric pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3482b9]/25 to-white/5 border border-white/15 flex items-center justify-center text-[#5ba6db] group-hover:bg-[#3482b9] group-hover:text-white transition-all duration-300 shadow-md">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      003
                    </span>
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 bg-amber-950/70 border border-amber-500/40 px-3 py-1 rounded-full">
                    P0 / P1 &lt; 2-4 Hours
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 tracking-tight font-['Montserrat',sans-serif]">
                  P0 / P1 Rapid Response SLA
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-['Source_Sans_3',sans-serif]">
                  When billing breaks, integrations stall, or an ERP sync halts, you can’t afford generic 48-hour help desks. Our technical escalation engineers respond to P0 and P1 severity incidents within hours with live triage.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pb-6 border-b border-white/10 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0" />
                    <span>Guaranteed rapid engineer assignment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0" />
                    <span>Real-time bridge &amp; root-cause analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3482b9] shrink-0" />
                    <span>Proactive health &amp; telemetry monitoring</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#5ba6db] group-hover:text-white transition-colors"
                >
                  <span>View Support Protocols</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <span className="text-[11px] font-bold text-slate-400">Mission-Critical</span>
              </div>
            </div>

          </div>

          {/* Bottom Trust Assurance Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-[#3482b9]/20 text-[#5ba6db] flex items-center justify-center shrink-0 hidden sm:flex">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-white font-['Montserrat',sans-serif]">
                  Have an urgent requirement or need an architectural review?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-['Source_Sans_3',sans-serif]">
                  Speak directly with our senior Microsoft Dynamics 365 consultants today. No sales pressure.
                </p>
              </div>
            </div>

            <Link
              href="/contact?type=poc"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105 shrink-0"
            >
              <span>Get Started in 24 Hours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 2. SERVICES SECTION: CLEAN, UNIFORM CARD GRID (Homepage Requirement) */}
      <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fbfcfd] via-white to-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs font-['Montserrat',sans-serif]">
              <span className="w-2 h-2 rounded-full bg-[#3482b9] animate-pulse" />
              <span>Full-Spectrum Microsoft Stack</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight uppercase font-['Montserrat',sans-serif]">
              Our Core Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-['Source_Sans_3',sans-serif]">
              Enterprise-grade implementations, custom engineering, and continuous SLA support across Microsoft Dynamics 365, Business Central, and cloud ecosystems.
            </p>
          </div>

          {/* Clean, Uniform 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {uniformServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#3482b9] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
                >
                  <div>
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-sky-50 group-hover:bg-[#3482b9] text-[#3482b9] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm p-3">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider font-mono bg-slate-100 text-slate-600 group-hover:bg-[#3482b9]/10 group-hover:text-[#3482b9] transition-colors">
                        {service.badge}
                      </span>
                    </div>

                    <div className="text-[11px] font-bold text-[#3482b9] uppercase tracking-wider font-['Montserrat',sans-serif] mb-1">
                      {service.subtitle}
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#3482b9] transition-colors tracking-tight mb-3 font-['Montserrat',sans-serif]">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Source_Sans_3',sans-serif] mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Consistent "Learn More" Button */}
                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0b1b3d] group-hover:text-[#3482b9] transition-colors uppercase tracking-wider font-['Montserrat',sans-serif]"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-[#3482b9] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2.2 STRUCTURED TECHNOLOGY EXPERTISE TILES (Homepage 04 Req)     */}
      {/* ============================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm font-['Montserrat',sans-serif]">
              <Layers className="w-3.5 h-3.5" />
              <span>Technology Ecosystem</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-4 tracking-tight uppercase font-['Montserrat',sans-serif]">
              Grouped Technology Expertise
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-['Source_Sans_3',sans-serif]">
              MCT delivers certified engineering across three clear technology pillars — ensuring resilient architecture from front-office customer engagement to backend enterprise ERP and secure cloud integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1: Business Applications */}
            <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200 hover:border-[#3482b9] transition-all duration-300 flex flex-col justify-between hover:shadow-xl group">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-[#0b1b3d] text-[#5ba6db] flex items-center justify-center mb-6 shadow-sm">
                  <Laptop className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#3482b9] uppercase tracking-wider mb-1 font-['Montserrat',sans-serif]">
                  Pillar 01
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 font-['Montserrat',sans-serif]">
                  Business Applications
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-['Source_Sans_3',sans-serif]">
                  Unified enterprise CRM and ERP platforms delivering real-time fiscal control, inventory visibility, and high-conversion customer engagement.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Dynamics 365 Sales",
                    "Dynamics 365 Customer Service",
                    "Dynamics 365 Field Service",
                    "Business Central (ERP)",
                    "Financial Management",
                    "Supply Chain & Lot Tracking"
                  ].map((item, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-500">
                <span className="font-['Montserrat',sans-serif]">Dynamics 365 &amp; Business Central</span>
                <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
              </div>
            </div>

            {/* Category 2: Automation & AI */}
            <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200 hover:border-[#3482b9] transition-all duration-300 flex flex-col justify-between hover:shadow-xl group">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-[#3482b9] text-white flex items-center justify-center mb-6 shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#3482b9] uppercase tracking-wider mb-1 font-['Montserrat',sans-serif]">
                  Pillar 02
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 font-['Montserrat',sans-serif]">
                  Automation &amp; AI
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-['Source_Sans_3',sans-serif]">
                  Accelerating operational throughput with low-code process digitization, intelligent document parsing, and enterprise Copilot AI agents.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Power Platform",
                    "Power Apps (Canvas & Model)",
                    "Power Automate Cloud/Desktop RPA",
                    "Copilot Studio & Custom Agents",
                    "Power Pages Secure Portals",
                    "Power BI Executive Analytics"
                  ].map((item, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-500">
                <span className="font-['Montserrat',sans-serif]">Power Platform &amp; Copilot Studio</span>
                <CheckCircle2 className="w-4 h-4 text-[#3482b9]" />
              </div>
            </div>

            {/* Category 3: Cloud & Integration */}
            <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200 hover:border-[#3482b9] transition-all duration-300 flex flex-col justify-between hover:shadow-xl group">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-sm">
                  <Cloud className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1 font-['Montserrat',sans-serif]">
                  Pillar 03
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 font-['Montserrat',sans-serif]">
                  Cloud &amp; Integration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-['Source_Sans_3',sans-serif]">
                  Connecting core Microsoft systems with custom enterprise applications, third-party payment gateways, tax authorities, and cloud services.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Microsoft Azure & Functions",
                    "Microsoft 365 Architecture",
                    "RESTful Web APIs & Webhooks",
                    "E-Invoicing (UAE / India Compliance)",
                    "Custom React / Node.js Apps",
                    "Mobile Endpoints (iOS & Android)"
                  ].map((item, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-500">
                <span className="font-['Montserrat',sans-serif]">Azure, Microsoft 365 &amp; APIs</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 CREDIBILITY STATS STRIP */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3482b9_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-[#5ba6db] font-mono mb-1">
                10+
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider">
                Years of Dynamics Expertise
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-[#5ba6db] font-mono mb-1">
                50+
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider">
                Global Clients Served
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-[#5ba6db] font-mono mb-1">
                5-Day
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider">
                Rapid Miniature POC TAT
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-[#5ba6db] font-mono mb-1">
                &lt; 2-4h
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider">
                P0 / P1 Severity SLA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY US? - MODERN HIGH-TECH REDESIGN */}
      <section className="w-full py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0b1b3d] via-[#0d224d] to-[#081530] text-white relative overflow-hidden border-b border-white/10">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#3482b9]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#e74c3c]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs font-bold uppercase tracking-widest text-[#5ba6db] mb-4 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#3482b9] animate-pulse"></span>
              Core Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] via-[#3482b9] to-sky-200">Us?</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#3482b9] to-[#e74c3c] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {whyUs.map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#3482b9]/60 p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(52,130,185,0.25)] backdrop-blur-xl"
              >
                {/* Glow Corner */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#3482b9]/10 rounded-full blur-2xl group-hover:bg-[#3482b9]/25 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Modern Icon Bubble */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3482b9]/20 to-white/5 border border-white/15 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#3482b9] transition-all duration-300 shadow-md">
                    <card.icon className="w-8 h-8 text-[#5ba6db] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-[#5ba6db] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-8 font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/10">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5ba6db] group-hover:text-white transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WE DELIVER SOLUTIONS AND PERSPECTIVE - MODERN DUAL COLUMN WITH VISUAL CARD */}
      <section className="w-full py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-white to-slate-50 text-slate-800 relative overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Visual Image & Card */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" duration={800}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">
                  {/* Enterprise Meeting & Dynamics 365 Image */}
                  <div className="relative w-full h-[380px] sm:h-[420px]">
                    <Image
                      src="/solutions-perspective.jpg"
                      alt="MCT IT Solutions and Perspective - Enterprise Meeting with Dynamics 365"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle gradient overlay to make float metric legible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/90 via-[#0b1b3d]/30 to-transparent" />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Exact Content */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" duration={800}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/20 text-[#3482b9] text-xs font-bold uppercase tracking-widest mb-4">
                  Solutions & Perspective
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
                  We deliver solutions and perspective
                </h2>

                <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
                  <p>
                    As MCT IT Solutions continues to grow, we are recognized for our focus on delivering innovative solutions, technical excellence, and client-driven success. We’ve consistently delivered measurable results, including a 20% increase in operational efficiency for our clients, along with improved system reliability and seamless integrations that optimize business processes.
                  </p>
                  <p>
                    We aim to build strong partnerships and nurture talent within our team of experts. Our goal is to empower businesses to thrive by offering solutions that align with their unique goals. Whether you’re a business owner seeking to enhance operations or a potential employee eager to innovate, we’re dedicated to providing the support and resources you need to succeed.
                  </p>
                  <p className="font-semibold text-slate-900 pt-2 border-l-4 border-[#3482b9] pl-4 bg-sky-50/50 py-3 rounded-r-xl">
                    At MCT IT Solutions, we don’t just offer solutions—we offer valuable insights and perspectives that help your business grow and succeed.
                  </p>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4.2 TARGET INDUSTRY SOLUTIONS (Homepage Requirement)            */}
      {/* ============================================================== */}
      <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs font-bold uppercase tracking-wider mb-3 font-['Montserrat',sans-serif]">
                <Building className="w-3.5 h-3.5" />
                <span>Industry Alignment</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight tracking-tight uppercase font-['Montserrat',sans-serif]">
                Solutions Tailored to Your Industry
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2 max-w-2xl font-['Source_Sans_3',sans-serif]">
                Delivering vertical-specific workflows, compliance modules, and deep domain capabilities across high-impact industry sectors.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#3482b9] hover:text-[#1f6595] uppercase tracking-wider shrink-0 font-['Montserrat',sans-serif]"
            >
              <span>Explore All Verticals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                id: "manufacturing",
                name: "Manufacturing",
                subtitle: "Production & Supply Chain",
                icon: Factory,
                challenge: "Shop-floor scheduling, bill of materials (BOM), and inventory bottlenecks.",
                outcome: "Unified Dynamics 365 Business Central ERP with live lot tracking."
              },
              {
                id: "financial-services",
                name: "Financial Services",
                subtitle: "Banking & Compliance",
                icon: Landmark,
                challenge: "Statutory e-invoicing, strict audit trails, and KYC verification.",
                outcome: "Compliant Dynamics 365 CRM + automated India/UAE e-invoicing."
              },
              {
                id: "healthcare-lifesciences",
                name: "Healthcare",
                subtitle: "Patient Engagement & Clinics",
                icon: HeartPulse,
                challenge: "Fragmented clinical coordination and medical equipment maintenance.",
                outcome: "Secure Power Pages portals and automated scheduling workflows."
              },
              {
                id: "retail-ecommerce",
                name: "Retail & Distribution",
                subtitle: "Omnichannel Commerce",
                icon: ShoppingCart,
                challenge: "Inventory drift across store POS, high cart abandonment, and sync lag.",
                outcome: "Real-time multi-warehouse stock sync with high-deliverability messaging."
              },
              {
                id: "professional-services",
                name: "Professional Services",
                subtitle: "Consulting, Legal & IT",
                icon: Users,
                challenge: "Time tracking, resource allocation, and delayed milestone billing.",
                outcome: "Dynamics 365 Project Operations with automated client invoicing."
              }
            ].map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={idx}
                  href={`/industries#${ind.id}`}
                  className="group p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#3482b9] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-[#3482b9] text-[#3482b9] group-hover:text-white flex items-center justify-center transition-colors mb-5 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#3482b9] mb-1 font-['Montserrat',sans-serif]">
                      {ind.subtitle}
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#3482b9] transition-colors mb-2.5 font-['Montserrat',sans-serif]">
                      {ind.name}
                    </h3>
                    <div className="space-y-2 mb-4 text-xs font-['Source_Sans_3',sans-serif]">
                      <p className="text-slate-600 leading-relaxed">
                        <strong className="text-slate-900 font-semibold">Challenge:</strong> {ind.challenge}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#3482b9]">
                    <span className="truncate text-[11px] text-emerald-700 font-semibold mr-2">
                      {ind.outcome}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4.5 FEATURED CASE STUDIES (Challenge -> Solution -> Outcome)   */}
      {/* ============================================================== */}
      <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 font-['Montserrat',sans-serif]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Demonstrated Delivery</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight tracking-tight uppercase font-['Montserrat',sans-serif]">
                Featured Case Studies
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2 max-w-2xl font-['Source_Sans_3',sans-serif]">
                Real-world project evidence showing how our engineering solves complex enterprise bottlenecks.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#3482b9] hover:text-[#1f6595] uppercase tracking-wider shrink-0 font-['Montserrat',sans-serif]"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                slug: "uae-e-invoicing-integration-dynamics-365-business-central",
                title: "UAE E-Invoicing Integration for Business Central",
                category: "Business Central Integration",
                client: "GCC Retail & Distribution Group",
                image: "/uae-einvoicing-business-central.png",
                challenge: "Manual tax reporting caused costly filing bottlenecks, invoice generation delays, and heightened non-compliance risks under strict UAE statutory regulations.",
                solution: "Engineered an automated cryptographic signing and XML payload validation extension running natively inside Business Central with instant cloud webhook sync.",
                outcome: "100% compliance with zero statutory filing penalties, 70% decrease in billing turnaround, and instant audit trail verification."
              },
              {
                slug: "pet-import-service-and-delivery-management",
                title: "Pet Import Service & Logistics Operations",
                category: "Dynamics 365 Customer Service",
                client: "UAE Logistics Client",
                image: "/pet-import-inquiry.png",
                challenge: "Fragmented multi-agency permit workflows, manual driver dispatching, and lack of real-time pet transit updates created severe customer anxiety.",
                solution: "Implemented Dynamics 365 Customer Service unified with customized driver mobile apps, barcode scanning, and automated airport customs milestone triggers.",
                outcome: "100% real-time consignment traceability, 45% reduction in client support inquiries, and seamless customs handoffs."
              },
              {
                slug: "real-estate-sales-management-automation",
                title: "Real Estate Sales Management & Automation",
                category: "Dynamics 365 Sales & Power Apps",
                client: "Global Property Developer",
                image: "/real-estate.png",
                challenge: "Unsynchronized unit availability led to accidental double-bookings, delayed broker commission payouts, and lost high-value buyer interest.",
                solution: "Deployed a centralized Dynamics 365 Sales hub coupled with Power Apps interactive floorplan view, unit hold countdown timers, and automated commission approval matrix.",
                outcome: "35% faster deal closing cycles, eliminated double-booking errors entirely, and gave 250+ external brokers real-time inventory access."
              }
            ].map((cs, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-[#3482b9] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full bg-slate-200 overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0b1b3d]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider font-['Montserrat',sans-serif]">
                      {cs.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <div className="text-[11px] font-bold text-[#3482b9] uppercase tracking-wider mb-1 font-mono">
                        {cs.client}
                      </div>
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-[#3482b9] transition-colors leading-snug font-['Montserrat',sans-serif]">
                        {cs.title}
                      </h3>
                    </div>

                    {/* Challenge -> Solution -> Outcome Flow */}
                    <div className="space-y-2.5 text-xs font-['Source_Sans_3',sans-serif]">
                      <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                        <span className="font-bold text-rose-600 uppercase tracking-wider text-[10px] block mb-0.5">Challenge</span>
                        <p className="text-slate-600 leading-relaxed">{cs.challenge}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                        <span className="font-bold text-[#3482b9] uppercase tracking-wider text-[10px] block mb-0.5">Solution</span>
                        <p className="text-slate-600 leading-relaxed">{cs.solution}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/80">
                        <span className="font-bold text-emerald-700 uppercase tracking-wider text-[10px] block mb-0.5">Outcome</span>
                        <p className="text-emerald-950 font-medium leading-relaxed">{cs.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-2">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#3482b9] group-hover:text-[#1f6595] font-['Montserrat',sans-serif]"
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLEANMAIL PRO */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-5 flex justify-center">
              <ScrollReveal direction="left" duration={800} className="w-full max-w-md">
                <div className="w-full p-4 text-center flex items-center justify-center">
                  <div className="relative w-full max-w-[380px] h-64 sm:h-72 mx-auto flex items-center justify-center">
                    <Image
                      src="/cleanmailpro.png"
                      alt="CleanMail Pro Logo"
                      width={400}
                      height={300}
                      className="object-contain w-full h-full max-h-64 scale-125 transition-transform duration-300 hover:scale-130"
                      priority
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal direction="right" duration={800}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs font-bold uppercase tracking-wider mb-3">
                  Product
                </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-4">
                CleanMail Pro
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                CleanMail Pro is an easy-to-use email validation tool that integrates directly with Microsoft Dynamics 365. It automatically checks and removes invalid email addresses from your lists, helping you improve email deliverability and reduce bounce rates. With real-time validation and seamless integration, CleanMail Pro ensures your email campaigns are more effective, saving you time and improving marketing results.
              </p>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 6. THE TEAM BEHIND EXCEPTIONAL DIGITAL EXPERIENCES */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-[#e74c3c]/25 text-[#e74c3c] text-xs font-bold uppercase tracking-wider mb-3">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-6">
            The Team Behind Exceptional Digital Experiences
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            MCT IT Solutions Pvt Ltd is an innovative and rapidly growing company, founded by experienced industry experts. We specialize in providing cutting-edge CRM and ERP solutions through Microsoft Dynamics 365, Business Central, and the Power Platform. Our dedicated team is the cornerstone of our success, driven by a passion for delivering impactful, transformative solutions that empower businesses to excel. With a focus on innovation and client success, we are committed to driving digital transformation and unlocking new opportunities across industries.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <span>Become Our Client</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. CUSTOMERS ABOUT US - CLEAN TESTIMONIAL CARDS (NO AUTO-ROTATING CAROUSEL) */}
      <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs font-bold uppercase tracking-wider mb-3 font-['Montserrat',sans-serif]">
              Validated Proof
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight uppercase font-['Montserrat',sans-serif]">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2 font-['Source_Sans_3',sans-serif]">
              Direct feedback from CTOs, Founders, and Technology Directors who trust MCT for their core Microsoft systems.
            </p>
          </div>

          {/* Clean Grid of Curated Validated Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {[
              testimonials[0], // Sandra Skairjeh (BlueRidge IT FZE, UAE)
              testimonials[1], // Mr.Rehman (Techspine, Qatar)
              testimonials[2], // Vishal Bhavsar (Mortgage Industry Advisory Corporation, USA)
              testimonials[9], // Jimmy tan (My RFQ PTE Ltd, Singapore)
              testimonials[10], // Alan halabi (Acceinfo, Canada/UAE)
              testimonials[11]  // Joseph edward (Invorg Inc., Canada/USA)
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Clean Quote */}
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-['Source_Sans_3',sans-serif] italic">
                    &ldquo;{t.quote.replace(/[“”]/g, '').trim().substring(0, 220)}...&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-['Montserrat',sans-serif]">
                      {t.name}
                    </h4>
                    <p className="text-xs text-[#3482b9] font-medium font-['Source_Sans_3',sans-serif]">
                      {t.role ? `${t.role}, ` : ""}{t.company}
                    </p>
                  </div>
                  {t.location && (
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400 px-2 py-0.5 rounded-md bg-slate-100">
                      {t.location}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Single Testimonial Reader for Full Reviews */}
          <div className="relative bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm max-w-4xl mx-auto text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-['Montserrat',sans-serif]">
                Full Testimonial Archive ({currentTestimonial + 1} of {testimonials.length})
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#3482b9] bg-white text-slate-700 hover:text-[#3482b9] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-['Source_Sans_3',sans-serif]">
              {testimonials[currentTestimonial].quote}
            </p>

            <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-base font-['Montserrat',sans-serif]">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-xs sm:text-sm text-[#3482b9] font-medium font-['Source_Sans_3',sans-serif]">
                  {testimonials[currentTestimonial].role && `${testimonials[currentTestimonial].role} · `}
                  {testimonials[currentTestimonial].company}
                  {testimonials[currentTestimonial].location && ` (${testimonials[currentTestimonial].location})`}
                </p>
              </div>
            </div>
          </div>

          {/* Exact Trustpilot Card from Original Design */}
          <div className="mt-12 flex justify-center">
            <Link
              href="https://www.trustpilot.com/review/miracle-cloudtechnology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-gray-300 hover:border-[#00b67a] rounded-xl p-6 sm:px-10 sm:py-6 shadow-sm hover:shadow-md transition-all text-center"
            >
              <h3 className="text-slate-800 font-extrabold tracking-widest text-xs uppercase mb-3 font-['Montserrat',sans-serif]">
                EXCELLENT ON TRUSTPILOT
              </h3>

              {/* 5 Green Square Stars */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-[#00b67a] flex items-center justify-center rounded-[2px] transition-transform group-hover:scale-105"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Trustpilot Brand Label */}
              <div className="flex items-center justify-center gap-1.5 text-[#00b67a] font-black text-xs tracking-widest uppercase">
                <svg className="w-4 h-4 fill-[#00b67a]" viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-[#005238] group-hover:text-[#00b67a] transition-colors">TRUSTPILOT VERIFIED</span>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* 8. OUR CLIENTS - INFINITE MARQUEE */}
      <section className="w-full py-20 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs font-bold uppercase tracking-wider mb-3">
            Clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            OUR CLIENTS
          </h2>
        </div>

        {/* Marquee Container with Gradient Fade Edges */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Left and right fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee flex items-center gap-3 sm:gap-4 py-2">
            {/* Duplicated list for seamless infinite loop */}
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <div
                key={idx}
                className="group relative flex items-center justify-center w-40 sm:w-48 md:w-52 h-28 sm:h-32 px-2 py-2 bg-transparent rounded-xl shadow-none transition-all duration-300 shrink-0"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={220}
                    height={110}
                    className="max-h-24 sm:max-h-28 max-w-[170px] sm:max-w-[190px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs font-bold uppercase tracking-wider mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-3">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              WE ARE COMMITTED TO SATISFY ALL YOUR QUERIES AND LOOK FORWARDS TO YOUR VALUABLE FEEDBACK.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base transition-colors"
                >
                  <span className="no-underline select-none">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 text-[#3482b9] ${openFaq === idx ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. FINAL STRATEGIC CTA (Crisp Conversion Banner)              */}
      {/* ============================================================== */}
      <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0b1b3d] via-[#102754] to-[#0b1b3d] text-white relative overflow-hidden border-t-2 border-[#3482b9]/40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3482b9]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs font-bold uppercase tracking-wider text-[#5ba6db] font-['Montserrat',sans-serif]">
            <Sparkles className="w-4 h-4 text-[#5ba6db]" />
            <span>Ready to Elevate Your Enterprise Architecture?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight font-['Montserrat',sans-serif]">
            Ready to Transform Your Business?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-['Source_Sans_3',sans-serif]">
            Partner with proven Microsoft Dynamics 365, Business Central, and Power Platform specialists. Get rapid miniature proof-of-concept turnaround and guaranteed response SLAs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-slate-900 hover:bg-[#3482b9] hover:text-white px-8 py-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl font-['Montserrat',sans-serif] cursor-pointer hover:scale-105 active:scale-95 group text-center"
            >
              <Mail className="w-4 h-4 text-[#3482b9] group-hover:text-white transition-colors shrink-0" />
              <span>Contact Us</span>
            </Link>

            <Link
              href="/contact?type=poc"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#3482b9]/30 transition-all duration-300 hover:scale-105 active:scale-95 font-['Montserrat',sans-serif] cursor-pointer text-center"
            >
              <Calendar className="w-4 h-4 text-sky-200 shrink-0" />
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              5-Day Miniature POC
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Microsoft Certified Pods
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Global SLA Support
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
