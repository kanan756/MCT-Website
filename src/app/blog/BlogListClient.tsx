"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Sparkles,
  BookOpen,
  Filter,
  TrendingUp,
  Tag,
  ArrowUpRight
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { BlogPost } from "@/data/blogs";

interface BlogListClientProps {
  initialBlogs: BlogPost[];
}

export default function BlogListClient({ initialBlogs }: BlogListClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(initialBlogs.map((b) => b.category).filter(Boolean)))];

  // Filtered blogs
  const filteredBlogs = initialBlogs.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = filteredBlogs[0] || initialBlogs[0];
  const gridBlogs = filteredBlogs.length > 0 ? (searchQuery ? filteredBlogs : filteredBlogs.slice(1)) : [];

  return (
    <div id="page" className="flex flex-col w-full bg-[#fbfcfd] text-slate-800 antialiased selection:bg-[#3482b9] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO BANNER: Aligned with mctwebsite-theta.vercel.app Theme */}
      {/* ============================================================== */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-b-4 border-[#3482b9]">
        {/* Background Image with Dark Professional Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-aboutus.png"
            alt="MCT IT Solutions Insights & Blog"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/88 to-[#0b1b3d]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/95 via-transparent to-[#0b1b3d]/45" />
        </div>

        {/* Ambient Brand Glows */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#3482b9]/25 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-6 tracking-wide">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3482b9]" />
            <span className="text-[#3482b9] font-bold">Blog &amp; Knowledge Base</span>
          </nav>

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase mb-5 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#3482b9]" />
            <span>MCT IT Solutions (P) Ltd.</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-5 uppercase">
            Blog &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba6db] to-[#3482b9]">
              Insights
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            Deep dives, operational guides, and architectural best practices in Microsoft Dynamics 365, Power Platform, ERP &amp; Enterprise AI.
          </p>

          {/* Search bar inside Hero banner */}
          <div className="max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, keyword, or technology..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/95 backdrop-blur-md text-slate-900 placeholder-slate-500 text-sm font-medium border border-white/40 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#3482b9]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-xs font-bold uppercase text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CATEGORY FILTER BAR: Smooth pill selectors                   */}
      {/* ============================================================== */}
      <section className="py-6 bg-white border-b border-slate-200/80 sticky top-16 z-20 backdrop-blur-md bg-white/95 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mr-2">
                <Filter className="w-3.5 h-3.5 text-[#3482b9]" />
                Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory.toLowerCase() === cat.toLowerCase()
                      ? "bg-[#3482b9] text-white shadow-md shadow-[#3482b9]/25 scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center text-xs font-semibold text-slate-500 whitespace-nowrap">
              Showing <span className="font-bold text-slate-900 mx-1">{filteredBlogs.length}</span> articles
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. FEATURED POST HERO (When not filtering by text search)       */}
      {/* ============================================================== */}
      {!searchQuery && featuredBlog && (
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" duration={700}>
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-[#0b1b3d] to-[#1b2234] text-white shadow-2xl border border-slate-800 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left: Featured Content */}
                  <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3482b9] text-white text-xs font-black uppercase tracking-wider shadow-sm">
                        <TrendingUp className="w-3.5 h-3.5" />
                        Featured Guide
                      </span>
                      <span className="text-xs text-slate-300 font-medium">
                        {featuredBlog.category}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight uppercase tracking-tight group-hover:text-sky-300 transition-colors">
                      <Link href={`/blog/${featuredBlog.slug}`}>
                        {featuredBlog.title}
                      </Link>
                    </h2>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3 font-normal">
                      {featuredBlog.summary}
                    </p>

                    <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400 font-medium pt-2">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#3482b9]" />
                        {featuredBlog.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#3482b9]" />
                        {featuredBlog.readTime}
                      </span>
                      <span>•</span>
                      <span className="text-slate-300">By {featuredBlog.author}</span>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/blog/${featuredBlog.slug}`}
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#3482b9]/30 hover:scale-105"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Featured Image */}
                  <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[320px] overflow-hidden">
                    {featuredBlog.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={featuredBlog.image}
                        alt={featuredBlog.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold uppercase">
                        MCT Featured Post
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0b1b3d] lg:via-transparent lg:to-transparent" />
                  </div>

                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* 4. ARTICLES GRID: Beautiful interactive rounded-3xl cards       */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase bg-[#3482b9]/10 text-[#3482b9] mb-3">
                All Publications
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase leading-tight">
                Latest Articles &amp; Insights
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
              Discover real-world use cases, timesheet automation guides, and Dynamics 365 implementation architectures.
            </p>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300 p-8">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800 uppercase mb-2">No Articles Found</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                We couldn&apos;t find any posts matching &ldquo;{searchQuery}&rdquo;. Try another keyword or clear your filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-2.5 rounded-full bg-[#3482b9] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1f6595] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {(searchQuery ? filteredBlogs : gridBlogs).map((post, idx) => (
                <ScrollReveal
                  key={post.slug}
                  direction="up"
                  delay={(idx % 3) * 150}
                  duration={600}
                >
                  <article className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#3482b9]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group h-full">
                    <div>
                      {/* Featured Thumbnail */}
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

                        {/* Top Category Badge */}
                        {post.category && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3.5 py-1.5 rounded-full bg-[#0b1b3d]/90 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-md">
                              {post.category}
                            </span>
                          </div>
                        )}

                        {/* Read time pill */}
                        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-700 shadow-sm flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-[#3482b9]" />
                          {post.readTime || "5 min read"}
                        </div>
                      </Link>

                      {/* Content Body */}
                      <div className="p-6 sm:p-8 space-y-4">
                        {/* Date & Author */}
                        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                          <span className="flex items-center gap-1 text-[#3482b9] font-semibold">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span>•</span>
                          <span>By {post.author}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#3482b9] transition-colors leading-snug line-clamp-2 uppercase tracking-tight">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>

                        {/* Excerpt */}
                        {post.summary && (
                          <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed font-normal">
                            {post.summary}
                          </p>
                        )}

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold flex items-center gap-1"
                              >
                                <Tag className="w-2.5 h-2.5 text-slate-400" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#3482b9] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group-hover:scale-[1.01]"
                      >
                        <span>Read Full Post</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. CTA NEWSLETTER / DEMO BANNER matching Home & About theme     */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0b1b3d] via-[#11254e] to-[#0b1b3d] text-white border-t-4 border-[#3482b9] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3482b9]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[#3482b9]/40 text-xs font-bold tracking-wider text-slate-100 uppercase backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#3482b9]" />
            <span>Accelerate Your Digital Transformation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            Ready to Streamline Your Dynamics 365 &amp; ERP Workflows?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Connect with our Microsoft-certified architects for a risk-free consultation or rapid Proof of Concept tailored to your business.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#3482b9]/30 hover:scale-105"
            >
              <span>Book an Expert Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all backdrop-blur-md"
            >
              <span>Explore Our Services</span>
              <ArrowUpRight className="w-4 h-4 text-[#3482b9]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
