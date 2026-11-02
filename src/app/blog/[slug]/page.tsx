import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLiveBlogs, getLiveBlogBySlug } from "@/lib/contentRepo";
import { User, Tag, Calendar, MapPin, Phone, Mail, Globe, MessageSquare } from "lucide-react";

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

  // Categories list
  const categoriesMap = new Map<string, number>();
  allBlogs.forEach((b) => {
    if (b.category) {
      categoriesMap.set(b.category, (categoriesMap.get(b.category) || 0) + 1);
    }
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#3482b9] selection:text-white">
      {/* ── Page Header / Breadcrumb Header ── */}
      <section className="bg-[#212331] pt-28 pb-12 text-center text-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide uppercase mb-3 line-clamp-2">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-slate-300">
            <Link href="/" className="hover:text-[#00c9e3] transition-colors">
              Home
            </Link>
            <span>→</span>
            <Link href="/blog" className="hover:text-[#00c9e3] transition-colors">
              Blog
            </Link>
            <span>→</span>
            <span className="text-[#00c9e3] max-w-[280px] sm:max-w-md truncate">
              {post.title}
            </span>
          </div>
        </div>
      </section>

      {/* ── Main Layout (Content on Left, Sidebar on Right) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Post Article (col-span-8) */}
          <article className="lg:col-span-8 space-y-8">
            {/* Featured Image */}
            {post.image && (
              <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto max-h-[520px] object-cover"
                />
              </div>
            )}

            {/* Post Meta Bar matching original style */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-gray-200 text-xs sm:text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <span>
                  By <strong className="text-slate-800">{post.author || "admin"}</strong>
                </span>
                <span>|</span>
                {post.category && (
                  <>
                    <span className="text-[#3482b9] font-semibold">{post.category}</span>
                    <span>|</span>
                  </>
                )}
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1 text-slate-400">
                  <MessageSquare className="w-3.5 h-3.5" /> 0
                </span>
              </div>
            </div>

            {/* Post Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight uppercase">
              {post.title}
            </h2>

            {/* Post Body (Clean typography with styled section headings) */}
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base space-y-6">
              {post.content.split("\n\n").map((para, i) => {
                const trimmed = para.trim();
                if (!trimmed) return null;

                // Section Headers
                if (trimmed.startsWith("### ")) {
                  return (
                    <div key={i} className="pt-4 border-l-4 border-[#3482b9] pl-4 my-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-tight m-0">
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
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200 transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* ── Conclusion / CTA Card matching reference ── */}
            <div className="bg-[#212331] text-white p-8 md:p-10 rounded-2xl shadow-xl space-y-4">
              <h3 className="text-xl md:text-2xl font-black uppercase text-[#00c9e3] tracking-wide">
                Conclusion
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Empower your enterprise with modern digital operations, seamless Microsoft Dynamics 365 integrations, and intelligent automation.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-md bg-[#ff5252] hover:bg-[#e04343] text-white text-xs font-extrabold uppercase tracking-wider transition-colors shadow-md"
                >
                  Contact MCT Solutions
                </Link>
              </div>
            </div>

            {/* ── Leave a Comment Form matching reference ── */}
            <div className="pt-10 border-t border-gray-200 space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#3482b9]" />
                <span>Leave a Comment</span>
              </h3>
              <form className="space-y-4">
                <div>
                  <textarea
                    rows={5}
                    placeholder="Message *"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#3482b9] bg-white resize-y"
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Name *"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#3482b9] bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Mail *"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#3482b9] bg-white"
                  />
                  <input
                    type="url"
                    placeholder="Website"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#3482b9] bg-white"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <input type="checkbox" id="save-info" className="rounded text-[#3482b9]" />
                  <label htmlFor="save-info">Save my name, email, and website in this browser for next time.</label>
                </div>
                <button
                  type="button"
                  className="px-6 py-3 rounded-md bg-[#3482b9] hover:bg-[#1f6595] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  Send Comment
                </button>
              </form>
            </div>
          </article>

          {/* Right Column: Sidebar (col-span-4) matching reference website */}
          <aside className="lg:col-span-4 space-y-10">
            {/* Widget 1: Recent Posts List with Links */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b-2 border-[#3482b9] pb-2 inline-block">
                Recent Posts
              </h3>
              <ul className="space-y-3 pt-2 text-sm">
                {recentBlogs.map((b) => (
                  <li key={b.slug} className="border-b border-gray-200/60 pb-3 last:border-0 last:pb-0">
                    <Link
                      href={`/blog/${b.slug}`}
                      className="text-slate-700 hover:text-[#3482b9] font-medium leading-snug line-clamp-2 transition-colors block"
                    >
                      {b.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 2: Categories */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b-2 border-[#ff5252] pb-2 inline-block">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {Array.from(categoriesMap.entries()).map(([cat, count]) => (
                  <Link
                    key={cat}
                    href="/blog"
                    className="px-3 py-1.5 rounded-lg border border-gray-300 bg-white hover:border-[#3482b9] text-xs font-bold text-slate-800 uppercase tracking-wider transition-all"
                  >
                    {cat} <span className="text-[#3482b9]">({count})</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget 3: Visual Recent Posts with Thumbnails */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b-2 border-[#3482b9] pb-2 inline-block">
                Featured Posts
              </h3>
              <div className="space-y-4 pt-2">
                {recentBlogs.slice(0, 3).map((b) => (
                  <div key={b.slug} className="flex items-center gap-3 group">
                    <Link
                      href={`/blog/${b.slug}`}
                      className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200 border border-gray-200 block"
                    >
                      {b.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={b.image}
                          alt={b.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-400">
                          MCT
                        </div>
                      )}
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/blog/${b.slug}`}
                        className="text-xs font-bold text-slate-900 group-hover:text-[#3482b9] line-clamp-2 transition-colors leading-snug block"
                      >
                        {b.title}
                      </Link>
                      <span className="text-[11px] text-slate-400 mt-1 block">
                        {b.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 4: Quick Contact Info matching reference */}
            <div className="bg-[#212331] text-white rounded-2xl p-6 shadow-md space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#00c9e3] border-b border-slate-700 pb-2">
                Contact MCT
              </h3>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#00c9e3] flex-shrink-0 mt-0.5" />
                  <span>306-307 Radhe Kishan Arista, Maninagar, Ahmedabad, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#00c9e3] flex-shrink-0" />
                  <a href="tel:+919510879991" className="hover:text-white transition">
                    +91 9510879991
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#00c9e3] flex-shrink-0" />
                  <a href="mailto:mct@miraclecloud-technology.com" className="hover:text-white transition">
                    mct@miraclecloud-technology.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#00c9e3] flex-shrink-0" />
                  <a href="https://www.miracle-cloudtechnology.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
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
