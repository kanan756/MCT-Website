"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Quote, Star, ArrowUpRight, Award, Building2, Globe2 } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sandra Skairjeh",
      role: "Vice President",
      company: "BlueRidge IT FZE",
      location: "UAE",
      quote:
        "“We have had a very positive experience working with MCT IT Solutions PVT Ltd. They have supported our company on several Application Development and DevOps projects, and demonstrated reliability, commitment, responsiveness, and the willingness to go the extra mile.\n\nThe MCT team is easy to work with, professional, and genuinely invested in helping us. Whenever support is needed, they respond quickly and do their best to find solutions.\n\nWe truly value the partnership and appreciate the consistent service and dedication they bring to every project. Highly recommended.”",
    },
    {
      name: "Damjan Krivosija",
      role: "Client Partner",
      company: "Enterprise Partner",
      location: "US",
      quote:
        "“We’re extremely satisfied with the MCT IT Solution we’ve been working with. They consistently meet deadlines, communicate clearly, and deliver high-quality code. Their proactive approach to problem-solving and willingness to accommodate our requests have made the entire process smooth and efficient. We highly recommend them to anyone seeking a reliable, knowledgeable, and dedicated development team.”",
    },
    {
      name: "liroy chauhan",
      role: "Operations Lead",
      company: "Global Tech",
      location: "India",
      quote:
        "“I appreciate the professionalism and dedication your team consistently demonstrates. We are surely having a great feedback for you. Reliability: The staff you provided were punctual and dependable, which ensured our operations ran smoothly. Skills and Expertise: Their proficiency greatly contributed to the success of the project and task. Flexibility: Team’s ability to accommodate last-minute requests or changes is commendable and greatly valued.“",
    },
    {
      name: "Smkumar Gurubarar",
      role: "Sales & CRM Lead",
      company: "CRM Enterprise",
      location: "India",
      quote:
        "“We had a fantastic engagement with MCT on our Dynamics CRM which deliverables were done presisely within the stipulated timelines. Appreciate the delivery team for their timely delivery which enables us to nurture the leads to augment the sales pipeline in quick turnover.”",
    },
    {
      name: "Vincent Valentino",
      role: "President",
      company: "CDM Inc.",
      location: "USA",
      quote:
        "“We have been using MCT through AIC in USA, developing our automation application of the proprietary software of AIC which is developed by MCT, India since 2015. We are fine with the deliverables received from MCT/AIC for our application and business. With this efforts of MCT we have become very efficient in our operation.”",
    },
    {
      name: "Mahesh Shah",
      role: "Founder",
      company: "Aincloud Inc.",
      location: "USA",
      quote:
        "“Advanced in cloud (AIC) based in Connecticut has retain Miracle Cloud Technology (MCT) for the development of AIC’s proprietary software to manage the business of merchants of one of the biggest retailers of the USA. AIC is very happy with this development and maintaining the systems. MCT has good developer who can handle the task provided by AIC for this software development and it is using Microsoft CRM platform. AIC is very satisfied with the project development and commitments of MCT. MCT also has worked for AIC clients to convert old version of Microsoft CRM system to current version of Microsoft CRM 2016/365. AIC’s client includes in the financial area. MCT has good knowledge of Microsoft CRM system.”",
    },
    {
      name: "Jimmy tan",
      role: "Director",
      company: "My RFQ PTE Ltd.",
      location: "Singapore",
      quote:
        "“I am writing to thank you for the quality of service provided by your company. We sincerely appreciate your efficient, gracious customer service, the level of detail and accountability you have demonstrated on each project, and the way you conduct business as a whole. We have, and will continue to, recommend your service to other companies and contacts. Our team could not be more satisfied with your work, and we look forward to continuing this relationship.”",
    },
    {
      name: "Joseph edward",
      role: "CIO",
      company: "Invorg Inc.",
      location: "Canada, USA",
      quote:
        "“It’s great to have MCT as our technical partner, we are associated since last 4 years with them and it’s been a very good relationship in every sense.”",
    },
    {
      name: "Alan halabi",
      role: "GM",
      company: "Acceinfo",
      location: "Canada, UAE",
      quote:
        "“When it comes to CRM solutions there’s no one better than MCT, we are very happy with our association and would like to carry it forever, thanks again for your support.”",
    },
    {
      name: "Vishal Bhavsar",
      role: "Director, Technology Strategies & Security",
      company: "Mortgage Industry Advisory Corporation",
      location: "USA",
      quote:
        "“MCT has been a valuable technical partner for 6+ years. On behalf of Technology Strategies Group, we thank you for your sincere & dedicated efforts with timely deliverables on each projects. We highly recommend your services.”",
    },
    {
      name: "Mr. Rehman",
      role: "Founder",
      company: "Techspine Business Solutions WLL",
      location: "Qatar",
      quote:
        "“I recommend MCT to everyone looking for app development. The developers at the company were prompt in developing the seamless mobile applications that not only fit my specifications but also exceeded my expectations. The app is not just attractive in the looks but also offers enhanced engagement to the users. I am really impressed by their talent and professionalism.”",
    },
    {
      name: "Jack liang",
      role: "Project Manager",
      company: "The Broom App Pte Ltd",
      location: "Singapore",
      quote:
        "“On behalf of our client and the team in Singapore, we would like to extend our appreciation to acknowledge your team hard work to materialize the broom app availability in the stores today. 1st milestone cleared and let’s work together closely for V2 and eventually to finalize our vision to become the “global broadcasting platform connecting everyone”. Thanks to team once again for a fabulous job done!”",
    },
    {
      name: "D Viera",
      role: "CEO",
      company: "Minuteflyer",
      location: "France",
      quote:
        "“There is in MCT services, a rare dedication for work value and methodology, an understanding for client needs. A solid internal synergy that reflect into strong results. I highly recommend”",
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
            alt="Testimonials Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/88 to-[#0b1b3d]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/95 via-transparent to-[#0b1b3d]/40" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3482b9]/25 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#1d4ed8]/20 rounded-full blur-[130px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumb Navigation: Home -> About Us -> Testimonials */}
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Testimonials</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-6 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-4 tracking-tight">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Testimonials
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            With over 10 years of experience and more than 50 successful projects, discover why businesses worldwide trust us to turn their ideas into impactful digital solutions.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. OVERVIEW & TRUSTPILOT RATING BANNER                         */}
      {/* ============================================================== */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#f8fafc] border border-gray-200/90 p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
            
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#3482b9] bg-sky-50 border border-[#3482b9]/25">
                Our Clients Speak For Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Delivering Measurable Impact Across The Globe
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                With over 10 years of experience and more than 50 successful projects, we’ve had the privilege of partnering with businesses across various industries to deliver exceptional results. Our commitment to quality and client satisfaction drives us to exceed expectations — every single time.
              </p>
            </div>

            {/* Trustpilot Highlight Card */}
            <a
              href="https://www.trustpilot.com/review/miracle-cloudtechnology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 hover:border-[#00b67a]/50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-3 shrink-0 group min-w-[240px]"
            >
              <div className="flex items-center gap-1.5 text-[#00b67a]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00b67a]" />
                ))}
              </div>
              <div className="space-y-0.5">
                <div className="text-base font-black text-slate-900 uppercase tracking-tight flex items-center justify-center gap-1">
                  <span>Rated Excellent</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00b67a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-xs text-slate-500 font-medium">Verified on Trustpilot</div>
              </div>
              <span className="text-xs font-bold text-[#00b67a] uppercase tracking-wider group-hover:underline">
                Read Trustpilot Reviews
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. TESTIMONIALS MASONRY/GRID                                   */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-24 bg-[#f8fafc] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
              CLIENT TESTIMONIALS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Here’s what our valued clients have to say about their journey with Miracle Cloud Technology.
            </p>
          </div>

          {/* Testimonial Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl bg-white border border-gray-200/90 hover:border-[#3482b9]/60 p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(52,130,185,0.15)] hover:-translate-y-1.5 group"
              >
                {/* Top Subtle Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3482b9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="space-y-4">
                  {/* Quote Icon & 5 Stars */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#3482b9] flex items-center justify-center group-hover:bg-[#3482b9] group-hover:text-white transition-colors duration-300">
                      <Quote className="w-5 h-5 fill-current" />
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote text */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal italic">
                    {item.quote}
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-slate-900 tracking-tight group-hover:text-[#3482b9] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">
                      {item.role}{item.company && item.company !== "Enterprise Partner" && item.company !== "Global Tech" && item.company !== "CRM Enterprise" ? ` • ${item.company}` : ""}
                    </p>
                  </div>

                  {/* Location Badge */}
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold shrink-0">
                    <Globe2 className="w-3 h-3 text-[#3482b9]" />
                    <span>{item.location}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
