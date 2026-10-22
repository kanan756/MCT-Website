import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Calendar,
  Building2,
  Mail,
  MapPin,
  ChevronRight,
  ExternalLink,
  AlertCircle,
  HelpCircle,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | MCT IT Solutions Private Limited",
  description:
    "Read the terms, conditions, policies, and service terms governing your access and use of MCT IT Solutions Private Limited website and services.",
};

const SECTIONS = [
  {
    id: "overview",
    number: "00",
    title: "OVERVIEW",
    tag: "Introduction",
    paragraphs: [
      "This website is operated by MCT IT Solutions Private Limited. Throughout the site, the terms “we”, “us” and “our” refer to MCT IT Solutions Private Limited. MCT IT Solutions Private Limited offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.",
      "By visiting our site, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.",
      "Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.",
      "You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes."
    ]
  },
  {
    id: "section-1",
    number: "01",
    title: "SECTION 1 – SERVICE TERMS",
    tag: "Eligibility & Conduct",
    paragraphs: [
      "By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.",
      "You may not use our services for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).",
      "You must not transmit any worms or viruses or any code of a destructive nature.",
      "A breach or violation of any of the Terms will result in an immediate termination of your Services."
    ]
  },
  {
    id: "section-2",
    number: "02",
    title: "SECTION 2 – GENERAL CONDITIONS",
    tag: "Reservation & Rights",
    paragraphs: [
      "We reserve the right to refuse service to anyone for any reason at any time.",
      "You understand that your content, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.",
      "The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms."
    ]
  },
  {
    id: "section-3",
    number: "03",
    title: "SECTION 3 – ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION",
    tag: "Information Accuracy",
    paragraphs: [
      "We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.",
      "This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site."
    ]
  },
  {
    id: "section-4",
    number: "04",
    title: "SECTION 4 – OPTIONAL TOOLS",
    tag: "Third-Party Tools",
    paragraphs: [
      "We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.",
      "You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.",
      "Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).",
      "We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service."
    ]
  },
  {
    id: "section-5",
    number: "05",
    title: "SECTION 5 – THIRD-PARTY LINKS",
    tag: "External Links",
    paragraphs: [
      "Certain content, and services available via our Service may include services from third-parties.",
      "Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other services of third-parties."
    ]
  },
  {
    id: "section-6",
    number: "06",
    title: "SECTION 6 – USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS",
    tag: "Submissions & Feedback",
    paragraphs: [
      "If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, ‘comments’), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.",
      "We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.",
      "You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party."
    ]
  },
  {
    id: "section-7",
    number: "07",
    title: "SECTION 7 – PERSONAL INFORMATION",
    tag: "Privacy Policy",
    paragraphs: [
      "Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy."
    ]
  },
  {
    id: "section-8",
    number: "08",
    title: "SECTION 8 – ERRORS, INACCURACIES AND OMISSIONS",
    tag: "Corrections & Updates",
    paragraphs: [
      "Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).",
      "We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated."
    ]
  },
  {
    id: "section-9",
    number: "09",
    title: "SECTION 9 – PROHIBITED USES",
    tag: "Restrictions",
    paragraphs: [
      "In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses."
    ]
  },
  {
    id: "section-10",
    number: "10",
    title: "SECTION 10 – DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY",
    tag: "Liability Limits",
    paragraphs: [
      "We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.",
      "We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.",
      "You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.",
      "You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided ‘as is’ and ‘as available’ for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.",
      "In no case shall MCT IT Solutions Private Limited, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law."
    ]
  },
  {
    id: "section-11",
    number: "11",
    title: "SECTION 11 – INDEMNIFICATION",
    tag: "Indemnity",
    paragraphs: [
      "You agree to indemnify, defend and hold harmless MCT IT Solutions Private Limited and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party."
    ]
  },
  {
    id: "section-12",
    number: "12",
    title: "SECTION 12 – SEVERABILITY",
    tag: "Enforceability",
    paragraphs: [
      "In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions."
    ]
  },
  {
    id: "section-13",
    number: "13",
    title: "SECTION 13 – TERMINATION",
    tag: "Termination",
    paragraphs: [
      "The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.",
      "These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.",
      "If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof)."
    ]
  },
  {
    id: "section-14",
    number: "14",
    title: "SECTION 14 – ENTIRE AGREEMENT",
    tag: "Full Understanding",
    paragraphs: [
      "The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.",
      "These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).",
      "Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party."
    ]
  },
  {
    id: "section-15",
    number: "15",
    title: "SECTION 15 – GOVERNING LAW",
    tag: "Jurisdiction",
    paragraphs: [
      "These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of 306-307 Radhe Kishan Arista, Maninagar, Ahmedabad(Gujarat,India), Ahmedabad, India."
    ]
  },
  {
    id: "section-16",
    number: "16",
    title: "SECTION 16 – CHANGES TO TERMS OF SERVICE",
    tag: "Updates & Amendments",
    paragraphs: [
      "You can review the most current version of the Terms of Service at any time at this page.",
      "We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes."
    ]
  },
  {
    id: "section-17",
    number: "17",
    title: "SECTION 17 – CONTACT INFORMATION",
    tag: "Get in Touch",
    paragraphs: [
      "Questions about the Terms of Service should be sent to us at mct@miraclecloud-technology.com"
    ]
  }
];

export default function TermsAndConditionsPage() {
  return (
    <div id="page" className="flex flex-col w-full bg-[#f8fafc] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">
      {/* ============================================================== */}
      {/* 1. HERO / BANNER SECTION                                       */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image: public/bg-aboutus.png */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt="Terms and Conditions Background"
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
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Terms &amp; Conditions</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase mb-6 backdrop-blur-md shadow-sm">
            <Building2 className="w-4 h-4 text-[#3482b9]" />
            <span>MCT IT Solutions Private Limited</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-6">
            Terms &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3482b9] via-[#5ba6db] to-sky-300">
              Conditions
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Please read these Terms of Service carefully before accessing or using our website and digital services.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-[#3482b9]" />
              <span>Effective &amp; Current Version</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Legally Binding Agreement</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <FileText className="w-4 h-4 text-[#3482b9]" />
              <span>17 Comprehensive Sections</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. MAIN CONTENT AREA (Responsive 2-column or 1-column layout) */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* LEFT SIDEBAR: Table of Contents (Sticky on desktop, horizontal scroll on mobile) */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-28 space-y-6">
                
                {/* TOC Card */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
                    <FileText className="w-5 h-5 text-[#3482b9]" />
                    <h2 className="text-base font-extrabold text-slate-900 tracking-wide">
                      Table of Contents
                    </h2>
                  </div>

                  <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 text-xs sm:text-sm scrollbar-thin scrollbar-thumb-slate-200">
                    {SECTIONS.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="group flex items-center justify-between py-2 px-2.5 rounded-lg text-slate-600 hover:text-[#3482b9] hover:bg-slate-50 transition-colors"
                      >
                        <span className="truncate font-medium group-hover:font-semibold">
                          {sec.number}. {sec.title.replace(/^SECTION \d+\s*[–-]\s*/, "")}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#3482b9] shrink-0 ml-2" />
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Quick Contact Box in Sidebar */}
                <div className="bg-gradient-to-br from-[#0b1b3d] to-[#132c5e] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-[#3482b9]/30">
                  <div className="w-10 h-10 rounded-xl bg-[#3482b9]/20 border border-[#3482b9]/40 flex items-center justify-center text-[#5ba6db] mb-4">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-base text-white mb-2">Have Questions?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    If you have any questions about our Terms of Service, contact our legal and support team.
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

            {/* RIGHT COLUMN: The Sections */}
            <main className="lg:col-span-8 xl:col-span-9 space-y-6 sm:space-y-8">
              
              {/* Important Notice Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 flex items-start gap-3.5 shadow-sm">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm leading-relaxed">
                  <span className="font-bold">Important Notice: </span>
                  By visiting or using our website and services, you acknowledge that you have read, understood, and agree to be bound by all of the following Terms of Service.
                </div>
              </div>

              {/* Sections list */}
              {SECTIONS.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-28 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-[#3482b9]/40 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#3482b9]/10 text-[#3482b9] font-black text-sm border border-[#3482b9]/20">
                        {sec.number}
                      </span>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                        {sec.title}
                      </h2>
                    </div>
                    {sec.tag && (
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {sec.tag}
                      </span>
                    )}
                  </div>

                  <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                    {sec.paragraphs.map((p, pIdx) => {
                      // If it's the contact email line in section 17
                      if (sec.id === "section-17" && p.includes("mct@miraclecloud-technology.com")) {
                        return (
                          <div key={pIdx} className="pt-2">
                            <p className="mb-4">{p}</p>
                            <div className="inline-flex flex-wrap items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                              <div className="w-10 h-10 rounded-lg bg-[#3482b9] text-white flex items-center justify-center shrink-0">
                                <Mail className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="text-xs text-slate-500 font-medium">Direct Email Contact</div>
                                <a
                                  href="mailto:mct@miraclecloud-technology.com"
                                  className="text-sm sm:text-base font-bold text-[#3482b9] hover:underline break-all"
                                >
                                  mct@miraclecloud-technology.com
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      }

                      // If it's section 15 governing law with address
                      if (sec.id === "section-15") {
                        return (
                          <div key={pIdx} className="space-y-4">
                            <p>{p}</p>
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                              <MapPin className="w-5 h-5 text-[#3482b9] shrink-0 mt-0.5" />
                              <div className="text-xs sm:text-sm text-slate-700 font-medium">
                                306-307 Radhe Kishan Arista, Opp. Hirabhai Tower, Maninagar, Ahmedabad (Gujarat, India)
                              </div>
                            </div>
                          </div>
                        );
                      }

                      // If it's section 7 privacy policy
                      if (sec.id === "section-7") {
                        return (
                          <div key={pIdx} className="space-y-3">
                            <p>{p}</p>
                            <Link
                              href="/privacy-policy"
                              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#3482b9] hover:text-[#1f6595] transition-colors"
                            >
                              <span>View Privacy and Policy guidelines</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        );
                      }

                      return <p key={pIdx}>{p}</p>;
                    })}
                  </div>
                </article>
              ))}

              {/* Bottom Support CTA Banner */}
              <div className="bg-gradient-to-r from-[#0b1b3d] to-[#1f4381] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg border border-[#3482b9]/30">
                <div className="space-y-1.5 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-white">Need Further Assistance?</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                    Our team is always here to help you navigate our services, legal agreements, and corporate solutions.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-2 bg-[#3482b9] hover:bg-[#1f6595] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <span>Contact MCT Team</span>
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
