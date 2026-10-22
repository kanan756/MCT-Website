import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Mail,
  MapPin,
  ChevronRight,
  ExternalLink,
  Cookie,
  Server,
  Layers,
  CheckCircle,
  HelpCircle,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | MCT IT Solutions Private Limited",
  description:
    "Learn how MCT IT Solutions collects, uses, and protects your personal and device information when you visit our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div id="page" className="flex flex-col w-full bg-[#f8fafc] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">
      {/* ============================================================== */}
      {/* 1. HERO / BANNER SECTION (bg-aboutus.png with Brand Theme)     */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt="Privacy Policy Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/85 to-[#0b1b3d]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d] via-transparent to-[#0b1b3d]/50" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3482b9]/25 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e74c3c]/15 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumbs: Home -> Privacy Policy */}
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Privacy Policy</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase mb-6 backdrop-blur-md shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#3482b9]" />
            <span>MCT IT Solutions Private Limited</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-6">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3482b9] via-[#5ba6db] to-sky-300">
              Policy
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit the website of MCT.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <Lock className="w-4 h-4 text-[#3482b9]" />
              <span>Data Protection</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <Eye className="w-4 h-4 text-emerald-400" />
              <span>Transparent Collection</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <FileText className="w-4 h-4 text-[#3482b9]" />
              <span>GDPR &amp; Compliance Aware</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. MAIN CONTENT AREA (Responsive Two-Column Layout)            */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* LEFT SIDEBAR: Table of Contents & Quick Contact */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-28 space-y-6">

                {/* TOC Navigation */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
                    <FileText className="w-5 h-5 text-[#3482b9]" />
                    <h2 className="text-base font-extrabold text-slate-900 tracking-wide">
                      Contents
                    </h2>
                  </div>

                  <nav className="space-y-1 text-xs sm:text-sm">
                    {[
                      { href: "#intro", label: "Overview & Scope" },
                      { href: "#information-we-collect", label: "Information We Collect" },
                      { href: "#technologies", label: "Tracking Technologies" },
                      { href: "#how-we-use", label: "How We Use Information" },
                      { href: "#sharing", label: "Sharing Your Information" },
                      { href: "#do-not-track", label: "Do Not Track" },
                      { href: "#changes", label: "Policy Changes" },
                      { href: "#contact-us", label: "Contact Us" },
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="group flex items-center justify-between py-2 px-2.5 rounded-lg text-slate-600 hover:text-[#3482b9] hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-medium group-hover:font-semibold">{item.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#3482b9] shrink-0" />
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Quick Help Card */}
                <div className="bg-gradient-to-br from-[#0b1b3d] to-[#132c5e] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-[#3482b9]/30">
                  <div className="w-10 h-10 rounded-xl bg-[#3482b9]/20 border border-[#3482b9]/40 flex items-center justify-center text-[#5ba6db] mb-4">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-base text-white mb-2">Privacy Questions?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    If you have questions about how we handle your data or would like to request clarification, reach out to our team.
                  </p>
                  <a
                    href="mailto:mct@miraclecloud-technology.com"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#5ba6db] hover:text-white transition-colors break-all"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    <span>mct@miraclecloud-technology.com</span>
                  </a>
                </div>

              </div>
            </aside>

            {/* RIGHT COLUMN: Privacy Content Sections */}
            <main className="lg:col-span-8 xl:col-span-9 space-y-6 sm:space-y-8">

              {/* Overview & Scope Card */}
              <article
                id="intro"
                className="scroll-mt-28 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-[#3482b9]/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#3482b9]/10 text-[#3482b9] font-black text-sm border border-[#3482b9]/20">
                      01
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                      Introduction &amp; Scope
                    </h2>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    Overview
                  </span>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    This Privacy Policy describes how your personal information is collected, used, and shared when you visit the website of MCT which caters to a wide range of services like web application development services, mobile app development services, ios app development, 3D, CRM, IVRS, QA Testing.
                  </p>
                </div>
              </article>

              {/* Personal Information We Collect */}
              <article
                id="information-we-collect"
                className="scroll-mt-28 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-[#3482b9]/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#3482b9]/10 text-[#3482b9] font-black text-sm border border-[#3482b9]/20">
                      02
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                      PERSONAL INFORMATION WE COLLECT
                    </h2>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    Data Collection
                  </span>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”
                  </p>

                  <div id="technologies" className="pt-2">
                    <p className="font-bold text-slate-900 mb-3">
                      We collect Device Information using the following technologies:
                    </p>

                    <div className="grid grid-cols-1 gap-3.5">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                        <Cookie className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">“Cookies”</strong> are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit{" "}
                            <a
                              href="http://www.allaboutcookies.org"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#3482b9] font-bold underline hover:text-[#1f6595] inline-flex items-center gap-1"
                            >
                              <span>http://www.allaboutcookies.org</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                            .
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                        <Server className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">“Log files”</strong> track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                        <Layers className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">“Web beacons,” “tags,” and “pixels”</strong> are electronic files used to record information about how you browse the Site.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="pt-2">
                    When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information .
                  </p>
                </div>
              </article>

              {/* How Do We Use Your Personal Information */}
              <article
                id="how-we-use"
                className="scroll-mt-28 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-[#3482b9]/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#3482b9]/10 text-[#3482b9] font-black text-sm border border-[#3482b9]/20">
                      03
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                      HOW DO WE USE YOUR PERSONAL INFORMATION?
                    </h2>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    Usage Purpose
                  </span>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
                  </p>
                </div>
              </article>

              {/* Sharing Your Personal Information */}
              <article
                id="sharing"
                className="scroll-mt-28 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-[#3482b9]/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#3482b9]/10 text-[#3482b9] font-black text-sm border border-[#3482b9]/20">
                      04
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                      SHARING YOUR PERSONAL INFORMATION
                    </h2>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    Third Parties
                  </span>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store–you can read more about how Shopify uses your Personal Information here:{" "}
                    <a
                      href="https://www.shopify.com/legal/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3482b9] font-bold underline hover:text-[#1f6595] break-all inline-flex items-center gap-1"
                    >
                      <span>https://www.shopify.com/legal/privacy</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    . We also use Google Analytics to help us understand how our customers use the Site–you can read more about how Google uses your Personal Information here:{" "}
                    <a
                      href="https://www.google.com/intl/en/policies/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3482b9] font-bold underline hover:text-[#1f6595] break-all inline-flex items-center gap-1"
                    >
                      <span>https://www.google.com/intl/en/policies/privacy/</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    . You can also opt-out of Google Analytics here:{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3482b9] font-bold underline hover:text-[#1f6595] break-all inline-flex items-center gap-1"
                    >
                      <span>https://tools.google.com/dlpage/gaoptout</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    .
                  </p>
                  <p>
                    Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
                  </p>
                </div>
              </article>

              {/* Do Not Track */}
              <article
                id="do-not-track"
                className="scroll-mt-28 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-[#3482b9]/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#3482b9]/10 text-[#3482b9] font-black text-sm border border-[#3482b9]/20">
                      05
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                      DO NOT TRACK
                    </h2>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    Preferences
                  </span>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.
                  </p>
                </div>
              </article>

              {/* Changes */}
              <article
                id="changes"
                className="scroll-mt-28 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-[#3482b9]/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#3482b9]/10 text-[#3482b9] font-black text-sm border border-[#3482b9]/20">
                      06
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                      CHANGES
                    </h2>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    Updates
                  </span>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
                  </p>
                </div>
              </article>

              {/* Contact Us */}
              <article
                id="contact-us"
                className="scroll-mt-28 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-[#3482b9]/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#3482b9]/10 text-[#3482b9] font-black text-sm border border-[#3482b9]/20">
                      07
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                      CONTACT US
                    </h2>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    Get In Touch
                  </span>
                </div>

                <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at{" "}
                    <a
                      href="mailto:mct@miraclecloud-technology.com"
                      className="text-[#3482b9] font-bold hover:underline"
                    >
                      mct@miraclecloud-technology.com
                    </a>{" "}
                    or by mail using the details provided below:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Email Card */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-[#3482b9] text-white flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-medium">Email Address</div>
                        <a
                          href="mailto:mct@miraclecloud-technology.com"
                          className="text-sm font-bold text-[#3482b9] hover:underline break-all"
                        >
                          mct@miraclecloud-technology.com
                        </a>
                      </div>
                    </div>

                    {/* Physical Mail Address */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-[#0b1b3d] text-[#5ba6db] flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-medium">Postal Address</div>
                        <div className="text-sm font-bold text-slate-900 leading-snug">
                          306-307 Radhe Kishan Arista, Maninagar, Ahmedabad(Gujarat,India).
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Bottom Support CTA Banner */}
              <div className="bg-gradient-to-r from-[#0b1b3d] to-[#1f4381] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg border border-[#3482b9]/30">
                <div className="space-y-1.5 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-white">Have Privacy Concerns?</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                    Our team is dedicated to safeguarding your privacy and ensuring your personal information is handled with maximum care and transparency.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-2 bg-[#3482b9] hover:bg-[#1f6595] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <span>Contact Privacy Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
