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
} from "lucide-react";

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
    title: `${post.title} | Miracle Cloud Technology`,
    description: post.summary || post.title,
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
    <div className="min-h-screen bg-white text-[#3c3950] font-sans selection:bg-[#3482b9] selection:text-white">
      {/* ── Main Post Layout Container ── */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* LEFT COLUMN: ARTICLE CONTENT (9 Cols)                      */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <article className="lg:col-span-9 space-y-6">

            {/* 1. Featured Image with Dots decoration on top-left */}
            <div className="relative">
              {/* Top-left dotted line decorative element */}
              <div className="text-gray-300 text-xs tracking-[4px] mb-2 font-mono select-none">
                ••••••
              </div>

              {post.image ? (
                <div className="w-full overflow-hidden rounded-md bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto object-cover max-h-[580px]"
                  />
                </div>
              ) : null}
            </div>

            {/* 2. Meta Bar matching exact screenshot styling */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-[13px] text-[#99a9b5] pt-1 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span>
                  By{" "}
                  <span className="text-[#00c9e3] hover:underline cursor-pointer font-medium">
                    {post.author || "admin"}
                  </span>
                </span>
                <span>|</span>
                {post.category && (
                  <>
                    <span className="text-[#00c9e3] hover:underline cursor-pointer font-medium">
                      {post.category}
                    </span>
                    <span>|</span>
                  </>
                )}
                <span>{post.date}</span>
              </div>

              {/* Right icons: Comments, Like Heart, Navigation arrows */}
              <div className="flex items-center gap-3 text-[#99a9b5]">
                <span className="flex items-center gap-1 hover:text-[#00c9e3] cursor-pointer">
                  <MessageSquare className="w-3.5 h-3.5" /> 0
                </span>
                <span className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                  <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> 0
                </span>
                <span className="flex items-center gap-1">
                  {prevPost && (
                    <Link href={`/blog/${prevPost.slug}`} title="Previous post" className="hover:text-[#00c9e3]">
                      <ChevronLeft className="w-4 h-4" />
                    </Link>
                  )}
                  {nextPost && (
                    <Link href={`/blog/${nextPost.slug}`} title="Next post" className="hover:text-[#00c9e3]">
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  )}
                </span>
              </div>
            </div>

            {/* 3. Main Title in Large Bold Typography matching screenshot */}
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black text-[#212331] uppercase tracking-tight leading-[1.2] mt-4 mb-8">
              {post.title}
            </h1>

            {/* 4. Article Body Content with exact box borders & styling */}
            <div className="text-[#5f6368] text-[15px] sm:text-[16px] leading-[1.8] space-y-7">
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
                <Link href="/blog" className="text-[#00c9e3] hover:underline font-semibold">
                  AI
                </Link>{" "}
                can validate timesheet entries instantly, detect issues early, and guide employees before mistakes become rework. In my opinion, this is one of the most practical uses of AI in HRMS because it improves both employee experience and operational efficiency.
              </p>
              <p>
                If your teams struggle with repetitive corrections, AI-driven timesheet governance can solve it.
              </p>

              {/* ── Boxed Section 1: WHY REWORK HAPPENS IN TIMESHEETS (Teal / Cyan Border #00BCD4) ── */}
              <div className="border-2 border-[#00BCD4] p-8 sm:p-10 my-8 rounded-[2px] bg-white">
                <h2 className="text-2xl sm:text-3xl font-black text-[#212331] uppercase tracking-tight mb-4">
                  WHY REWORK HAPPENS IN TIMESHEETS
                </h2>
                <p className="mb-4 text-[#5f6368]">
                  Most rework happens because employees don’t know there’s an issue until after submission.
                </p>
                <p className="font-semibold text-[#212331] mb-2">Common reasons include:</p>
                <ul className="list-disc pl-6 space-y-2 text-[#5f6368]">
                  <li>Weak or unclear descriptions</li>
                  <li>Duplicate entries</li>
                  <li>Incorrect hours logged</li>
                  <li>Policy compliance issues</li>
                </ul>
                <p className="mt-6 text-[#5f6368]">
                  By the time managers reject these entries, employees have to revisit and fix them, wasting valuable time.
                </p>
              </div>

              {/* ── Section: HOW AI PREVENTS REWORK BEFORE IT STARTS ── */}
              <div className="pt-4 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-black text-[#212331] uppercase tracking-tight">
                  HOW AI PREVENTS REWORK BEFORE IT STARTS
                </h2>

                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#212331]">
                    1. INSTANT QUALITY VALIDATION
                  </h3>
                  <p>
                    AI reviews work descriptions as soon as the employee submits them.
                  </p>
                  <p>
                    It checks if the description is detailed enough, aligned with the task, and follows company standards. This helps employees improve entries before they move forward.
                  </p>
                  <p className="italic">
                    Think of it like a real-time quality coach.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#212331]">
                    2. DUPLICATE DETECTION
                  </h3>
                  <p>
                    One of the most common mistakes in{" "}
                    <Link href="/blog" className="text-[#00c9e3] hover:underline font-semibold">
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

              {/* ── Boxed Section 2: 3. RULE COMPLIANCE CHECKS (Blue / Indigo Border #1FA4E0) ── */}
              <div className="border-2 border-[#1FA4E0] p-8 sm:p-10 my-8 rounded-[2px] bg-white">
                <h3 className="text-xl sm:text-2xl font-black text-[#212331] uppercase tracking-tight mb-4">
                  3. RULE COMPLIANCE CHECKS
                </h3>
                <p className="mb-4">
                  AI validates entries against governance rules like:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#5f6368]">
                  <li>Maximum work hours</li>
                  <li>Mandatory fields</li>
                  <li>Submission frequency</li>
                  <li>Task category alignment</li>
                </ul>
                <p className="mt-4">
                  This reduces the chances of policy-based rejection.
                </p>
              </div>

              {/* ── Boxed Section 3: PRACTICAL TIPS TO REDUCE REWORK FASTER (Purple Border #7668C1) ── */}
              <div className="border-2 border-[#7668C1] p-8 sm:p-10 my-8 rounded-[2px] bg-white space-y-5">
                <h2 className="text-2xl sm:text-3xl font-black text-[#212331] uppercase tracking-tight mb-6">
                  PRACTICAL TIPS TO REDUCE REWORK FASTER
                </h2>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#212331] uppercase">
                    KEEP DESCRIPTIONS CLEAR
                  </h4>
                  <p className="text-sm mt-1">Train employees to explain work in simple, meaningful terms.</p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#212331] uppercase">
                    USE AI FEEDBACK AS GUIDANCE
                  </h4>
                  <p className="text-sm mt-1">
                    Treat{" "}
                    <Link href="/blog" className="text-[#00c9e3] hover:underline font-semibold">
                      AI validation
                    </Link>{" "}
                    as support, not correction.
                  </p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#212331] uppercase">
                    REVIEW PATTERNS REGULARLY
                  </h4>
                  <p className="text-sm mt-1">Look for repeated rejection reasons and improve team training.</p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#212331] uppercase">
                    KEEP HUMAN OVERSIGHT
                  </h4>
                  <p className="text-sm mt-1">Managers should still review exceptions where judgment matters.</p>
                </div>
              </div>
            </div>

            {/* ── 5. CONCLUSION BANNER (Parallax-style deep purple / dark block matching screenshot) ── */}
            <div className="relative w-full rounded-[3px] overflow-hidden bg-gradient-to-r from-[#212331] via-[#2d2845] to-[#1c1c28] text-white p-10 sm:p-14 my-10 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wider mb-6">
                CONCLUSION
              </h2>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                <p>
                  AI helps employees avoid rework by catching mistakes before they become approval issues.
                </p>
                <p>
                  Instead of fixing rejected entries later, employees can submit cleaner, more accurate timesheets from the start. This improves productivity, reduces frustration, and speeds up the entire approval process.
                </p>
                <p>
                  The real benefit isn’t just faster approvals, it’s better work quality at the source.
                </p>
                <p className="text-[#00c9e3] font-semibold">
                  🚀 Want to see how AI can reduce timesheet rework in your HRMS? Book a demo and explore smarter timesheet governance in action.
                </p>
                <p className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-block text-[#00c9e3] hover:underline font-bold text-sm sm:text-base"
                  >
                    How much time does your team currently spend fixing rejected timesheets? →
                  </Link>
                </p>
              </div>
            </div>

            {/* ── 6. LEAVE A COMMENT SECTION matching exact screenshot form ── */}
            <div className="pt-10 border-t border-gray-200 space-y-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#00c9e3]" />
                <h3 className="text-2xl font-black text-[#212331] tracking-tight">
                  LEAVE <span className="text-[#00c9e3]">A COMMENT</span>
                </h3>
              </div>

              <form className="space-y-4">
                <div>
                  <textarea
                    rows={6}
                    placeholder="Message *"
                    required
                    className="w-full p-4 border border-gray-300 rounded-[2px] text-sm focus:outline-none focus:border-[#00c9e3] resize-y bg-white text-slate-800"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Name *"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-[2px] text-sm focus:outline-none focus:border-[#00c9e3] bg-white text-slate-800 pr-10"
                    />
                    <User className="w-4 h-4 text-gray-400 absolute right-3 top-3.5" />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Mail *"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-[2px] text-sm focus:outline-none focus:border-[#00c9e3] bg-white text-slate-800 pr-10"
                    />
                    <Mail className="w-4 h-4 text-gray-400 absolute right-3 top-3.5" />
                  </div>

                  <div className="relative">
                    <input
                      type="url"
                      placeholder="Website"
                      className="w-full px-4 py-3 border border-gray-300 rounded-[2px] text-sm focus:outline-none focus:border-[#00c9e3] bg-white text-slate-800 pr-10"
                    />
                    <Globe className="w-4 h-4 text-gray-400 absolute right-3 top-3.5" />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <input
                    type="checkbox"
                    id="save-comment-info"
                    className="w-4 h-4 border-gray-300 rounded text-[#00c9e3] focus:ring-[#00c9e3]"
                  />
                  <label htmlFor="save-comment-info" className="cursor-pointer">
                    Save my name, email, and website in this browser for the next time I comment.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    className="px-7 py-3 rounded-[3px] bg-[#00bcd4] hover:bg-[#00acc1] text-white text-xs font-black uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    SEND COMMENT
                  </button>
                </div>
              </form>
            </div>

          </article>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* RIGHT COLUMN: SIDEBAR (3 Cols) matching reference screenshot*/}
          {/* ═══════════════════════════════════════════════════════════ */}
          <aside className="lg:col-span-3 space-y-10">

            {/* 1. RECENT POSTS (Plain text list) */}
            <div className="space-y-4">
              <h3 className="text-base font-black text-[#212331] uppercase tracking-wider">
                RECENT POSTS
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-[13px] text-[#5f6368] leading-snug">
                {recentPosts.map((b) => (
                  <li key={b.slug} className="hover:text-[#00c9e3] transition-colors">
                    <Link href={`/blog/${b.slug}`}>
                      {b.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. RECENT COMMENTS */}
            <div className="space-y-3">
              <h3 className="text-base font-black text-[#212331] uppercase tracking-wider">
                RECENT COMMENTS
              </h3>
              <p className="text-xs text-slate-400 italic">No comments to show.</p>
            </div>

            {/* 3. CATEGORIES with red accent indicator */}
            <div className="space-y-4">
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-black text-[#212331] uppercase tracking-wider">
                  CATEGORIES
                </h3>
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              </div>

              <div className="space-y-2">
                {Array.from(categoriesMap.entries()).map(([cat]) => (
                  <Link
                    key={cat}
                    href="/blog"
                    className="block p-3 border border-gray-300 rounded-[2px] text-xs font-bold uppercase text-[#212331] hover:border-[#00c9e3] hover:text-[#00c9e3] transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* 4. RECENT POSTS WITH THUMBNAILS (with red accent indicator) */}
            <div className="space-y-4">
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-black text-[#212331] uppercase tracking-wider">
                  RECENT POSTS
                </h3>
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              </div>

              <div className="space-y-4">
                {recentPosts.slice(0, 3).map((b) => (
                  <div key={b.slug} className="flex items-center gap-3 group">
                    <Link
                      href={`/blog/${b.slug}`}
                      className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-slate-100 border border-gray-200 block"
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
                        className="text-xs font-bold text-[#212331] group-hover:text-[#00c9e3] line-clamp-2 transition-colors leading-snug block"
                      >
                        {b.title}
                      </Link>
                      <span className="text-[11px] text-[#00c9e3] mt-0.5 block font-medium">
                        {b.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. CONTACT WIDGET (with red accent indicator) */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-black text-[#212331] uppercase tracking-wider">
                  CONTACT
                </h3>
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              </div>

              <div className="space-y-3.5 text-xs text-[#5f6368] leading-relaxed">
                <div>
                  <span className="font-bold text-[#212331] block mb-0.5">Address:</span>
                  <span>306-307 Radhe Kishan Arista, Maninagar, Ahmedabad (Gujarat, India)</span>
                </div>

                <div>
                  <span className="font-bold text-[#212331] mr-1.5">Phone:</span>
                  <a href="tel:+919510879991" className="text-[#00c9e3] hover:underline">
                    +91 9510879991
                  </a>
                </div>

                <div>
                  <span className="font-bold text-[#212331] mr-1.5">Email:</span>
                  <a href="mailto:mct@miraclecloud-technology.com" className="text-[#00c9e3] hover:underline">
                    mct@miraclecloud-technology.com
                  </a>
                </div>

                <div>
                  <span className="font-bold text-[#212331] mr-1.5">Website:</span>
                  <a href="https://www.miracle-cloudtechnology.com" target="_blank" rel="noreferrer" className="text-[#00c9e3] hover:underline">
                    www.miracle-cloudtechnology.com
                  </a>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
