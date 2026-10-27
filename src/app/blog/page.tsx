import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getLiveBlogs } from "@/lib/contentRepo";
import { Calendar, Clock, ArrowRight, User, BookOpen } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog & Insights | MCT IT Solutions",
  description: "Explore the latest insights, enterprise technology case studies, and digital transformation guides from MCT IT Solutions.",
};

export default async function BlogIndexPage() {
  const blogs = await getLiveBlogs();
  const liveBlogs = blogs.filter((b) => b.published !== false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-[#3482b9] selection:text-white pt-24 pb-20">
      {/* Background radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#3482b9]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3482b9]/10 border border-[#3482b9]/30 text-[#3482b9] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>MCT Knowledge & Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Latest Thoughts, Tech Articles & Engineering Updates
          </h1>
          <p className="text-slate-400 text-base md:text-lg">
            Stay ahead of modern enterprise trends in Microsoft Dynamics 365, Cloud architecture, E-Invoicing, and digital operations.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveBlogs.map((post) => (
            <article
              key={post.slug}
              className="group bg-slate-900/60 border border-slate-800 hover:border-[#3482b9]/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <Link href={`/blog/${post.slug}`} className="relative h-52 w-full overflow-hidden block bg-slate-800">
                {post.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-500">
                    <BookOpen className="w-10 h-10" />
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-bold text-[#3482b9]">
                    {post.category || "Technology"}
                  </span>
                </div>
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#3482b9]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#3482b9]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-[#3482b9] transition-colors leading-snug line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    {post.author || "MCT Team"}
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#3482b9] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Full Post</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
