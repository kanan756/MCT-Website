import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLiveBlogs, getLiveBlogBySlug } from "@/lib/contentRepo";
import { Calendar, Clock, ArrowLeft, User, Tag, Share2 } from "lucide-react";

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
  if (!post) return { title: "Blog Not Found" };

  return {
    title: `${post.title} | MCT IT Solutions`,
    description: post.summary,
  };
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getLiveBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-slate-950 text-slate-100 selection:bg-[#3482b9] selection:text-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Post Meta & Title */}
        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#3482b9]/10 border border-[#3482b9]/30 text-xs font-bold text-[#3482b9] uppercase tracking-wider">
            {post.category || "Enterprise Tech"}
          </span>

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 pt-2 border-b border-slate-800 pb-6">
            <span className="flex items-center gap-2 font-medium text-slate-300">
              <User className="w-4 h-4 text-[#3482b9]" />
              {post.author || "MCT Team"}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#3482b9]" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#3482b9]" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Cover Image */}
        {post.image && (
          <div className="relative w-full h-[380px] md:h-[480px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Summary Callout */}
        {post.summary && (
          <div className="p-6 rounded-2xl bg-slate-900/80 border-l-4 border-[#3482b9] text-slate-300 text-base md:text-lg italic leading-relaxed shadow-lg">
            &ldquo;{post.summary}&rdquo;
          </div>
        )}

        {/* Content Body */}
        <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-4 whitespace-pre-wrap font-sans text-base">
          {post.content}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-[#3482b9] mr-2" />
            {post.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300"
              >
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
