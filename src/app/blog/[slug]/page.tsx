import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getLiveBlogs, getLiveBlogBySlug } from "@/lib/contentRepo";
import {
  ChevronRight,
  MessageSquare,
  Share2,
  Calendar,
  User,
  Heart,
  ChevronLeft,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import BlogCommentForm from "./BlogCommentForm";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const blogs = await getLiveBlogs();
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getLiveBlogBySlug(slug);
  if (!post) return { title: "Blog Not Found | MCT IT Solutions" };

  return {
    title: `${post.title} | MCT IT Solutions`,
    description: post.summary || post.title,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | MCT IT Solutions`,
      description: post.summary || post.title,
      url: `https://www.miracle-cloudtechnology.com/blog/${slug}`,
      siteName: "MCT IT Solutions",
      type: "article",
    },
  };
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getLiveBlogBySlug(slug);
  const allBlogs = await getLiveBlogs();

  if (!post) {
    notFound();
  }

  // Previous and Next Post navigation
  const currentIndex = allBlogs.findIndex((b) => b.slug === slug);
  const prevPost = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const nextPost = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

  const recentPosts = allBlogs.filter((b) => b.published !== false && b.slug !== slug).slice(0, 5);

  // Group Categories with count
  const categoriesMap = new Map<string, number>();
  allBlogs.forEach((b) => {
    if (b.category) {
      categoriesMap.set(b.category, (categoriesMap.get(b.category) || 0) + 1);
    }
  });

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO BANNER: Aligned with mctwebsite-theta.vercel.app Theme */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image with Dark Professional Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt="MCT IT Solutions Knowledge & Insights"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/90 to-[#0b1b3d]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/95 via-transparent to-[#0b1b3d]/45" />
        </div>

        {/* Ambient Brand Glows */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#3482b9]/25 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6 tracking-wide">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/blog" className="hover:text-white transition-colors duration-200">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold line-clamp-1 max-w-xs sm:max-w-md">
              {post.category || "Article"}
            </span>
          </nav>

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#3482b9]" />
            <span>MCT Thought Leadership &amp; Engineering</span>
          </div>

          {/* Hero Category & Reading Time */}
          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-sky-300 font-semibold mb-3">
            <span>{post.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime || "5 min read"}
            </span>
          </div>

          {/* Main Title in Hero */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-5xl mx-auto uppercase">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. MAIN POST CONTENT & SIDEBAR CONTAINER                       */}
      {/* ============================================================== */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* LEFT COLUMN: ARTICLE CONTENT (9 Cols)                      */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <article className="lg:col-span-9 space-y-8">

              {/* 1. Featured Image with Dots decoration on top-left */}
              <ScrollReveal direction="up" duration={700}>
                <div className="relative">
                  {/* Top-left dotted line decorative element */}
                  <div className="text-[#3482b9] text-xs tracking-[5px] mb-2 font-mono select-none font-bold">
                    ••••••
                  </div>

                  {post.image ? (
                    <div className="w-full overflow-hidden rounded-2xl bg-slate-100 shadow-xl border border-slate-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-auto object-cover max-h-[580px]"
                      />
                    </div>
                  ) : null}
                </div>
              </ScrollReveal>

              {/* 2. Meta Bar matching exact screenshot styling */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-[13px] text-slate-500 pt-2 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span>
                    By{" "}
                    <span className="text-[#3482b9] hover:underline cursor-pointer font-bold">
                      {post.author || "admin"}
                    </span>
                  </span>
                  <span>|</span>
                  {post.category && (
                    <>
                      <span className="text-[#3482b9] hover:underline cursor-pointer font-bold">
                        {post.category}
                      </span>
                      <span>|</span>
                    </>
                  )}
                  <span className="font-medium text-slate-600">{post.date}</span>
                </div>

                {/* Right icons: Comments, Like Heart, Navigation arrows */}
                <div className="flex items-center gap-4 text-slate-500">
                  <span className="flex items-center gap-1 hover:text-[#3482b9] cursor-pointer">
                    <MessageSquare className="w-3.5 h-3.5" /> 0
                  </span>
                  <span className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> 0
                  </span>
                  <span className="flex items-center gap-1.5 pl-2 border-l border-slate-200">
                    {prevPost && (
                      <Link href={`/blog/${prevPost.slug}`} title="Previous post" className="hover:text-[#3482b9] p-1 rounded hover:bg-slate-100 transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                      </Link>
                    )}
                    {nextPost && (
                      <Link href={`/blog/${nextPost.slug}`} title="Next post" className="hover:text-[#3482b9] p-1 rounded hover:bg-slate-100 transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    )}
                  </span>
                </div>
              </div>

              {/* 3. Main Title in Large Bold Typography matching screenshot */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight leading-[1.25]">
                {post.title}
              </h2>

              {/* 4. Article Body Content with exact box borders & styling */}
              <div className="text-slate-700 text-[15px] sm:text-[16px] leading-[1.85] space-y-7 font-normal">
                {/* Introduction paragraphs */}
                <p>
                  Rework is one of the biggest hidden productivity killers in organizations.
                </p>
                <p>
                  Employees spend hours correcting rejected timesheets, rewriting unclear descriptions, or resubmitting duplicate work entries. It slows down approvals, delays payroll, and creates unnecessary frustration for both employees and managers.
                </p>
                <p>
                  This is where AI makes a real difference.
                </p>
                <p>
                  Instead of waiting for manual feedback after submission,{" "}
                  <Link href="/blog" className="text-[#3482b9] hover:underline font-bold">
                    AI
                  </Link>{" "}
                  can validate timesheet entries instantly, detect issues early, and guide employees before mistakes become rework. In our opinion, this is one of the most practical uses of AI in HRMS because it improves both employee experience and operational efficiency.
                </p>
                <p>
                  If your teams struggle with repetitive corrections, AI-driven timesheet governance can solve it.
                </p>

                {/* ── Boxed Section 1: WHY REWORK HAPPENS IN TIMESHEETS (Teal / Cyan Border #00BCD4) ── */}
                <ScrollReveal direction="up" duration={700}>
                  <div className="border-l-4 sm:border-2 border-[#00BCD4] p-8 sm:p-10 my-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">
                      WHY REWORK HAPPENS IN TIMESHEETS
                    </h3>
                    <p className="mb-4 text-slate-600 font-normal">
                      Most rework happens because employees don’t know there’s an issue until after submission.
                    </p>
                    <p className="font-bold text-slate-900 mb-2">Common reasons include:</p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                      <li>Weak or unclear descriptions</li>
                      <li>Duplicate entries</li>
                      <li>Incorrect hours logged</li>
                      <li>Policy compliance issues</li>
                    </ul>
                    <p className="mt-6 text-slate-600">
                      By the time managers reject these entries, employees have to revisit and fix them, wasting valuable time.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ── Section: HOW AI PREVENTS REWORK BEFORE IT STARTS ── */}
                <ScrollReveal direction="up" duration={700}>
                  <div className="pt-4 space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                      HOW AI PREVENTS REWORK BEFORE IT STARTS
                    </h3>

                    <div className="space-y-3">
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                        1. INSTANT QUALITY VALIDATION
                      </h4>
                      <p>
                        AI reviews work descriptions as soon as the employee submits them.
                      </p>
                      <p>
                        It checks if the description is detailed enough, aligned with the task, and follows company standards. This helps employees improve entries before they move forward.
                      </p>
                      <p className="italic font-medium text-slate-500">
                        Think of it like a real-time quality coach.
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                        2. DUPLICATE DETECTION
                      </h4>
                      <p>
                        One of the most common mistakes in{" "}
                        <Link href="/blog" className="text-[#3482b9] hover:underline font-bold">
                          timesheets
                        </Link>{" "}
                        is duplicate submissions.
                      </p>
                      <p>
                        AI can compare entries against historical records and identify semantic duplicates, even if the wording is different.
                      </p>
                      <p>
                        This prevents accidental double-logging and avoids correction cycles later.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ── Boxed Section 2: 3. RULE COMPLIANCE CHECKS (Blue / Indigo Border #1FA4E0) ── */}
                <ScrollReveal direction="up" duration={700}>
                  <div className="border-l-4 sm:border-2 border-[#1FA4E0] p-8 sm:p-10 my-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">
                      3. RULE COMPLIANCE CHECKS
                    </h3>
                    <p className="mb-4">
                      AI validates entries against governance rules like:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                      <li>Maximum work hours</li>
                      <li>Mandatory fields</li>
                      <li>Submission frequency</li>
                      <li>Task category alignment</li>
                    </ul>
                    <p className="mt-4">
                      This reduces the chances of policy-based rejection.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ── Boxed Section 3: PRACTICAL TIPS TO REDUCE REWORK FASTER (Purple Border #7668C1) ── */}
                <ScrollReveal direction="up" duration={700}>
                  <div className="border-l-4 sm:border-2 border-[#7668C1] p-8 sm:p-10 my-8 rounded-2xl bg-white space-y-5 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mb-6">
                      PRACTICAL TIPS TO REDUCE REWORK FASTER
                    </h3>

                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 uppercase">
                        KEEP DESCRIPTIONS CLEAR
                      </h4>
                      <p className="text-sm mt-1 text-slate-600">Train employees to explain work in simple, meaningful terms.</p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 uppercase">
                        USE AI FEEDBACK AS GUIDANCE
                      </h4>
                      <p className="text-sm mt-1 text-slate-600">
                        Treat{" "}
                        <Link href="/blog" className="text-[#3482b9] hover:underline font-bold">
                          AI validation
                        </Link>{" "}
                        as support, not correction.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 uppercase">
                        REVIEW PATTERNS REGULARLY
                      </h4>
                      <p className="text-sm mt-1 text-slate-600">Look for repeated rejection reasons and improve team training.</p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 uppercase">
                        KEEP HUMAN OVERSIGHT
                      </h4>
                      <p className="text-sm mt-1 text-slate-600">Managers should still review exceptions where judgment matters.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* ── 5. CONCLUSION BANNER: Dark Parallax Theme matching mctwebsite-theta ── */}
              <ScrollReveal direction="up" duration={700}>
                <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-r from-[#0b1b3d] via-[#152e5d] to-[#0b1b3d] text-white p-10 sm:p-14 my-10 shadow-2xl border border-slate-700">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#3482b9]/20 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="relative z-10 space-y-4">
                    <span className="inline-block px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-[#3482b9]/30 text-sky-300 border border-sky-400/20 mb-2">
                      Key Takeaways
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wider">
                      CONCLUSION
                    </h3>
                    <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed max-w-3xl">
                      <p>
                        AI helps employees avoid rework by catching mistakes before they become approval issues.
                      </p>
                      <p>
                        Instead of fixing rejected entries later, employees can submit cleaner, more accurate timesheets from the start. This improves productivity, reduces frustration, and speeds up the entire approval process.
                      </p>
                      <p>
                        The real benefit isn’t just faster approvals, it’s better work quality at the source.
                      </p>
                      <div className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                        <p className="text-sky-300 font-bold flex items-center gap-2">
                          <span>🚀</span>
                          <span>Want to see how AI can reduce timesheet rework in your HRMS?</span>
                        </p>
                        <p className="text-xs sm:text-sm text-slate-300 mt-1">
                          Book a personalized demo and explore smarter timesheet governance in action.
                        </p>
                      </div>
                      <div className="pt-2">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#3482b9]/30 hover:scale-105"
                        >
                          <span>Fix Rejected Timesheets with MCT</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* ── 6. LEAVE A COMMENT SECTION (Interactive form with Google Sheets sync) ── */}
              <ScrollReveal direction="up" duration={700}>
                <BlogCommentForm postSlug={slug} />
              </ScrollReveal>

            </article>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* RIGHT COLUMN: SIDEBAR (3 Cols) matching reference screenshot*/}
            {/* ═══════════════════════════════════════════════════════════ */}
            <aside className="lg:col-span-3 space-y-10">

              {/* 1. RECENT POSTS (Plain text list) */}
              <ScrollReveal direction="left" duration={600}>
                <div className="space-y-4 p-6 rounded-3xl bg-[#f8fafc] border border-slate-200/80 shadow-sm">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                    RECENT POSTS
                  </h3>
                  <ul className="space-y-3.5 text-xs text-slate-600 leading-snug">
                    {recentPosts.map((b) => (
                      <li key={b.slug} className="hover:text-[#3482b9] transition-colors">
                        <Link href={`/blog/${b.slug}`} className="line-clamp-2">
                          {b.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* 2. RECENT COMMENTS */}
              <div className="space-y-3 p-6 rounded-3xl bg-[#f8fafc] border border-slate-200/80 shadow-sm">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                  RECENT COMMENTS
                </h3>
                <p className="text-xs text-slate-400 italic">No comments to show.</p>
              </div>

              {/* 3. CATEGORIES with red accent indicator */}
              <ScrollReveal direction="left" duration={600} delay={100}>
                <div className="space-y-4 p-6 rounded-3xl bg-[#f8fafc] border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-1.5 border-b border-slate-200 pb-2">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                      CATEGORIES
                    </h3>
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  </div>

                  <div className="space-y-2">
                    {Array.from(categoriesMap.entries()).map(([cat]) => (
                      <Link
                        key={cat}
                        href="/blog"
                        className="block p-3 rounded-xl bg-white border border-slate-200 text-xs font-bold uppercase text-slate-800 hover:border-[#3482b9] hover:text-[#3482b9] transition-colors shadow-xs"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* 4. RECENT POSTS WITH THUMBNAILS (with red accent indicator) */}
              <ScrollReveal direction="left" duration={600} delay={200}>
                <div className="space-y-4 p-6 rounded-3xl bg-[#f8fafc] border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-1.5 border-b border-slate-200 pb-2">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                      RECENT POSTS
                    </h3>
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  </div>

                  <div className="space-y-4">
                    {recentPosts.slice(0, 3).map((b) => (
                      <div key={b.slug} className="flex items-center gap-3 group">
                        <Link
                          href={`/blog/${b.slug}`}
                          className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100 border border-slate-200 block"
                        >
                          {b.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={b.image}
                              alt={b.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          ) : null}
                        </Link>
                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/blog/${b.slug}`}
                            className="text-xs font-bold text-slate-800 group-hover:text-[#3482b9] line-clamp-2 transition-colors leading-snug block"
                          >
                            {b.title}
                          </Link>
                          <span className="text-[11px] text-[#3482b9] mt-0.5 block font-semibold">
                            {b.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* 5. CONTACT WIDGET (with red accent indicator) */}
              <ScrollReveal direction="left" duration={600} delay={300}>
                <div className="space-y-4 p-6 rounded-3xl bg-[#f8fafc] border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-1.5 border-b border-slate-200 pb-2">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                      CONTACT
                    </h3>
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-600 leading-relaxed">
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Address:</span>
                      <span>306-307 Radhe Kishan Arista, Maninagar, Ahmedabad (Gujarat, India)</span>
                    </div>

                    <div>
                      <span className="font-bold text-slate-900 mr-1.5">Phone:</span>
                      <a href="tel:+919510879991" className="text-[#3482b9] hover:underline font-semibold">
                        +91 9510879991
                      </a>
                    </div>

                    <div>
                      <span className="font-bold text-slate-900 mr-1.5">Email:</span>
                      <a href="mailto:mct@miraclecloud-technology.com" className="text-[#3482b9] hover:underline font-semibold">
                        mct@miraclecloud-technology.com
                      </a>
                    </div>

                    <div>
                      <span className="font-bold text-slate-900 mr-1.5">Website:</span>
                      <a href="https://www.miracle-cloudtechnology.com" target="_blank" rel="noreferrer" className="text-[#3482b9] hover:underline font-semibold">
                        www.miracle-cloudtechnology.com
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </aside>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. CTA DEMO BANNER: Matching Homepage & About footer CTA        */}
      {/* ============================================================== */}
      <section className="py-16 bg-gradient-to-r from-[#0b1b3d] via-[#11254e] to-[#0b1b3d] text-white border-t-4 border-[#3482b9] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Elevate Your Enterprise Operations With MCT
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Get in touch with our Dynamics 365, ERP, and AI experts for a free consultation or custom demo.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#3482b9]/30 hover:scale-105"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
