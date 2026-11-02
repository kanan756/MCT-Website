import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getLiveBlogs, getLiveBlogBySlug } from "@/lib/contentRepo";
import {
  ChevronRight,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Tag,
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageSquare,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
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
    title: `${post.title} | MCT IT Solutions`,
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
  const recentBlogs = allBlogs
    .filter((b) => b.published !== false && b.slug !== slug)
    .slice(0, 5);

  if (!post) {
    notFound();
  }

  // Categories count calculation
  const categoriesMap = new Map<string, number>();
  allBlogs.forEach((b) => {
    if (b.category) {
      categoriesMap.set(b.category, (categoriesMap.get(b.category) || 0) + 1);
    }
  });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-[#3482b9] selection:text-white">
      {/* ============================================================== */}
      {/* 1. HERO BANNER: Matching mctwebsite-theta.vercel.app Theme     */}
      {/* ============================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-b-4 border-[#3482b9]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt="MCT Blog Header Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/88 to-[#0b1b3d]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/95 via-transparent to-[#0b1b3d]/40" />
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3482b9]/25 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold max-w-[240px] sm:max-w-md truncate">
              {post.title}
            </span>
          </nav>

          {post.category && (
            <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase mb-6 backdrop-blur-md">
              {post.category}
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl mx-auto mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#3482b9]" />
              By <strong className="text-white">{post.author || "admin"}</strong>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#3482b9]" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#3482b9]" />
              {post.readTime || "5 min read"}
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. MAIN TWO-COLUMN CONTENT & SIDEBAR                           */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Left Column: Article Body (8 cols) */}
            <article className="lg:col-span-8 bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-gray-200/90 shadow-sm space-y-8">
              
              {/* Back to Blog */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3482b9] hover:text-[#1d4ed8] transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Articles</span>
              </Link>

              {/* Cover Image */}
              {post.image && (
                <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-slate-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto max-h-[500px] object-cover"
                  />
                </div>
              )}

              {/* Summary Highlight Box */}
              {post.summary && (
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 to-slate-50 border-l-4 border-[#3482b9] text-slate-800 text-base sm:text-lg italic leading-relaxed shadow-sm">
                  &ldquo;{post.summary}&rdquo;
                </div>
              )}

              {/* Post Paragraphs */}
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base space-y-6">
                {post.content.split("\n\n").map((para, i) => {
                  const trimmed = para.trim();
                  if (!trimmed) return null;

                  if (trimmed.startsWith("### ")) {
                    return (
                      <div key={i} className="pt-4 border-l-4 border-[#3482b9] pl-4 my-6">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight m-0">
                          {trimmed.replace("### ", "")}
                        </h3>
                      </div>
                    );
                  }

                  if (trimmed.startsWith("#### ")) {
                    return (
                      <h4 key={i} className="text-lg font-bold text-slate-900 mt-6 mb-2">
                        {trimmed.replace("#### ", "")}
                      </h4>
                    );
                  }

                  if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
                    const items = trimmed.split("\n").map((line) => line.replace(/^[\*\-]\s+/, ""));
                    return (
                      <ul key={i} className="list-disc pl-6 space-y-2 text-slate-700">
                        {items.map((it, idx) => (
                          <li key={idx}>{it}</li>
                        ))}
                      </ul>
                    );
                  }

                  if (/^\d+\.\s/.test(trimmed)) {
                    const items = trimmed.split("\n").map((line) => line.replace(/^\d+\.\s+/, ""));
                    return (
                      <ol key={i} className="list-decimal pl-6 space-y-2 text-slate-700">
                        {items.map((it, idx) => (
                          <li key={idx}>{it}</li>
                        ))}
                      </ol>
                    );
                  }

                  return (
                    <p key={i} className="text-slate-700 text-base leading-relaxed">
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-slate-400" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Conclusion Banner with Website Theme */}
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0b1b3d] to-[#132a5e] text-white shadow-xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3482b9]/20 border border-[#3482b9]/40 text-[#5ba6db] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Next Steps</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  Ready to transform your enterprise operations?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Connect with MCT IT Solutions consultants to explore tailored Microsoft Dynamics 365, Business Central, ERP, and AI governance implementations.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#3482b9] hover:bg-[#2563eb] text-white text-xs sm:text-sm font-black uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
                  >
                    <span>Contact Us Today</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Leave a Comment */}
              <div className="pt-10 border-t border-gray-200 space-y-6">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#3482b9]" />
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                    Leave a Comment
                  </h3>
                </div>
                <form className="space-y-4">
                  <div>
                    <textarea
                      rows={5}
                      placeholder="Message *"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-[#3482b9] focus:bg-white transition-all shadow-sm resize-y"
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Name *"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-[#3482b9] focus:bg-white transition-all shadow-sm"
                    />
                    <input
                      type="email"
                      placeholder="Mail *"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-[#3482b9] focus:bg-white transition-all shadow-sm"
                    />
                    <input
                      type="url"
                      placeholder="Website"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-[#3482b9] focus:bg-white transition-all shadow-sm"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <input type="checkbox" id="save-info-detail" className="rounded text-[#3482b9]" />
                    <label htmlFor="save-info-detail">Save my name, email, and website in this browser for next time.</label>
                  </div>
                  <button
                    type="button"
                    className="px-6 py-3.5 rounded-xl bg-[#3482b9] hover:bg-[#1f6595] text-white text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Send Comment
                  </button>
                </form>
              </div>

            </article>

            {/* Right Column: Sidebar (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Widget 1: Recent Posts */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm space-y-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b-2 border-[#3482b9] pb-2 inline-block">
                  Recent Posts
                </h3>
                <ul className="space-y-3.5 pt-2 text-sm">
                  {recentBlogs.map((b) => (
                    <li key={b.slug} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <Link
                        href={`/blog/${b.slug}`}
                        className="text-slate-700 hover:text-[#3482b9] font-bold text-xs sm:text-sm leading-snug line-clamp-2 transition-colors block"
                      >
                        {b.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Widget 2: Categories */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm space-y-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b-2 border-[#3482b9] pb-2 inline-block">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {Array.from(categoriesMap.entries()).map(([cat, count]) => (
                    <Link
                      key={cat}
                      href="/blog"
                      className="px-3.5 py-1.5 rounded-xl border border-gray-200 bg-slate-50 hover:bg-[#3482b9]/10 hover:border-[#3482b9] text-xs font-bold text-slate-800 uppercase tracking-wider transition-all"
                    >
                      {cat} <span className="text-[#3482b9]">({count})</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Widget 3: Contact Widget with Website Navy Gradient */}
              <div className="bg-gradient-to-br from-[#0b1b3d] to-[#152e66] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#5ba6db] text-xs font-bold uppercase tracking-wider">
                  Direct Inquiries
                </div>
                <h3 className="text-lg font-black uppercase text-white tracking-wide">
                  Contact MCT Team
                </h3>
                <div className="space-y-3.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#3482b9] flex-shrink-0 mt-0.5" />
                    <span>306-307 Radhe Kishan Arista, Maninagar, Ahmedabad, India</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#3482b9] flex-shrink-0" />
                    <a href="tel:+919510879991" className="hover:text-white transition">
                      +91 9510879991
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#3482b9] flex-shrink-0" />
                    <a href="mailto:mct@miraclecloud-technology.com" className="hover:text-white transition">
                      mct@miraclecloud-technology.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-[#3482b9] flex-shrink-0" />
                    <a href="https://www.miracle-cloudtechnology.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
                      www.miracle-cloudtechnology.com
                    </a>
                  </div>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}
