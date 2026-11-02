import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getLiveBlogs } from "@/lib/contentRepo";
import { ChevronRight, Calendar, User, Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog & Insights | MCT IT Solutions",
  description: "Explore the latest insights, enterprise technology case studies, and digital transformation guides from MCT IT Solutions.",
};

export default async function BlogIndexPage() {
  const blogs = await getLiveBlogs();
  const liveBlogs = blogs.filter((b) => b.published !== false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-[#3482b9] selection:text-white">
      {/* ============================================================== */}
      {/* 1. HERO BANNER: Matching mctwebsite-theta.vercel.app Theme     */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image matching About/Services */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt="MCT Blog & Knowledge Insights"
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
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Blog</span>
          </nav>

          <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 border border-[#3482b9]/40 text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase mb-8 backdrop-blur-md shadow-sm">
            MCT IT Solutions (P) Ltd.
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-6">
            Blog &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Insights
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            Explore valuable insights, operational guides, and architectural best practices in Microsoft Dynamics 365, ERP, CRM, and enterprise AI.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. BLOG POSTS GRID: Modern rounded-3xl cards matching site UI  */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {liveBlogs.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <p className="text-lg">No blog posts available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {liveBlogs.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#3482b9]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div>
                    {/* Featured Image */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative block w-full h-56 sm:h-60 overflow-hidden bg-slate-100"
                    >
                      {post.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 font-bold uppercase text-xs">
                          MCT Blog
                        </div>
                      )}

                      {/* Category Badge on top of image */}
                      {post.category && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3.5 py-1.5 rounded-full bg-[#0b1b3d]/85 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      )}
                    </Link>

                    {/* Card Content Body */}
                    <div className="p-6 sm:p-8 space-y-4">
                      {/* Meta information: Date & Read Time */}
                      <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#3482b9]" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#3482b9]" />
                          {post.readTime || "5 min read"}
                        </span>
                      </div>

                      {/* Post Title */}
                      <h2 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#3482b9] transition-colors leading-snug line-clamp-2 uppercase">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      {/* Summary Excerpt */}
                      {post.summary && (
                        <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                          {post.summary}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Card Footer with Website Button Styling */}
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#3482b9] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group-hover:scale-[1.01]"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
