"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown, Star, ChevronLeft, ChevronRight,
  MapPin, Phone, Mail, Globe, ArrowRight,
  ShieldCheck, Laptop, BarChart2, Users, Search,
  Code, Settings, Cloud, Database, Zap
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

  // 8 Exact Services
  const servicesList = [
    { title: "CONSULTING", icon: Search },
    { title: "IMPLEMENTATION", icon: Code },
    { title: "INTEGRATION", icon: Settings },
    { title: "SUPPORT", icon: ShieldCheck },
    { title: "DEVELOPMENT", icon: Database },
    { title: "MIGRATION", icon: Cloud },
    { title: "POWER PLATFORM", icon: Zap },
    { title: "ANALYTICS", icon: BarChart2 }
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

  // Hero Automated Typewriter Slides (types text, pauses, deletes, moves to next slide)
  const heroSlides = [
    {
      titlePrefix: "Empower Your Business with ",
      highlight: "Dynamics 365 CRM",
      desc: "Delivering customized Microsoft Dynamics 365 CRM solutions to streamline your sales, service, and marketing processes effortlessly."
    },
    {
      titlePrefix: "Transform with ",
      highlight: "Business Central",
      desc: "Delivering tailored Microsoft Dynamics 365 Business Central solutions to optimize your business processes seamlessly."
    },
    {
      titlePrefix: "Tailored ",
      highlight: "PowerApps Solutions",
      desc: "Create custom apps to automate processes and enhance business efficiency with expert PowerApps development."
    }
  ];

  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [displayedHighlight, setDisplayedHighlight] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = heroSlides[currentHeroSlide].highlight;
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      if (displayedHighlight.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedHighlight(fullText.substring(0, displayedHighlight.length + 1));
        }, 90); // typing speed
      } else {
        // Finished typing full word - hold for 3 seconds before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3200);
      }
    } else {
      // Deleting backwards
      if (displayedHighlight.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedHighlight(fullText.substring(0, displayedHighlight.length - 1));
        }, 45); // deleting speed (faster)
      } else {
        // Finished deleting - move to next slide
        setIsDeleting(false);
        setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedHighlight, isDeleting, currentHeroSlide, heroSlides]);

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* 1. HERO / BANNER SECTION */}
      <section className="relative w-full py-24 lg:py-32 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image with Dark Professional Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-home.png"
            alt="Dynamics 365 Technology Background"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Professional High-Tech Dark Gradient Overlay so text and buttons pop vividly while showing the Dynamics 365 imagery */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/90 via-[#0b1b3d]/75 to-[#0b1b3d]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/95 via-transparent to-[#0b1b3d]/40" />
        </div>

        {/* Ambient Brand Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3482b9]/25 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#e74c3c]/15 rounded-full blur-[130px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-8 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          {/* Animated Text Content Container (min-h to prevent layout shift) */}
          <div className="min-h-[220px] sm:min-h-[190px] md:min-h-[210px] flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.2] max-w-5xl mx-auto mb-6">
                <span>{heroSlides[currentHeroSlide].titlePrefix}</span>
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9] relative">
                  {displayedHighlight}
                  <span className="inline-block w-[3px] h-[0.9em] bg-[#5ba6db] ml-1 align-middle animate-pulse" />
                </span>
              </h1>

              <p
                key={currentHeroSlide}
                className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 transition-opacity duration-500"
              >
                {heroSlides[currentHeroSlide].desc}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#3482b9]/30 transition-all hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all"
            >
              Services
            </Link>
          </div>

          {/* Slide Indicators for text slides */}
          <div className="flex items-center justify-center gap-2.5">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentHeroSlide(index);
                  setDisplayedHighlight("");
                  setIsDeleting(false);
                }}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full h-2 ${currentHeroSlide === index
                  ? "w-8 bg-[#3482b9] shadow-md shadow-[#3482b9]/50"
                  : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-4xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs font-bold uppercase tracking-wider mb-3">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-5">
              SERVICES
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              We specialize in Microsoft Dynamics 365 modules like Sales, Customer Service and Customer insight with expertise in Business Central and Power Platform.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-[#fbfcfd] border border-gray-200 hover:border-[#3482b9] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-50 group-hover:bg-[#3482b9] text-[#3482b9] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#3482b9] transition-colors tracking-wide">
                  {service.title}
                </h3>
              </div>
            ))}
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

      {/* 7. CUSTOMERS ABOUT US */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-[#3482b9]/25 text-[#3482b9] text-xs font-bold uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-12">
            CUSTOMERS ABOUT US
          </h2>

          <div className="relative bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-md text-left">
            <div className="flex items-center gap-1 mb-6 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
              {testimonials[currentTestimonial].quote}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-200 pt-6 gap-4">
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-sm text-[#3482b9] font-medium">
                  {testimonials[currentTestimonial].role && `${testimonials[currentTestimonial].role} · `}
                  {testimonials[currentTestimonial].company}
                  {testimonials[currentTestimonial].location && ` (${testimonials[currentTestimonial].location})`}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#3482b9] bg-white text-slate-700 hover:text-[#3482b9] flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white flex items-center justify-center transition-colors shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Exact Trustpilot Card from Original Design */}
          <div className="mt-12 flex justify-center">
            <Link
              href="https://www.trustpilot.com/review/miracle-cloudtechnology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-gray-300 hover:border-[#00b67a] rounded-lg p-6 sm:px-10 sm:py-7 shadow-sm hover:shadow-md transition-all text-center"
            >
              <h3 className="text-slate-800 font-extrabold tracking-widest text-xs uppercase mb-3">
                EXCELLENT
              </h3>

              {/* 5 Green Square Stars */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-9 sm:h-9 bg-[#00b67a] flex items-center justify-center rounded-[2px] transition-transform group-hover:scale-105"
                  >
                    <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-white text-white" viewBox="0 0 24 24">
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
                <span className="text-[#005238] group-hover:text-[#00b67a] transition-colors">TRUSTPILOT</span>
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



    </div>
  );
}
