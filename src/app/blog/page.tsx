import React from "react";
import Link from "next/link";
import { getLiveBlogs } from "@/lib/contentRepo";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Explore Valuable Tech Blogs | MCT IT Solutions",
  description: "Explore expert insights and innovative solutions on our blog to boost your business with CRM and ERP solutions with MCT IT Solutions India.",
};

export default async function BlogIndexPage() {
  const blogs = await getLiveBlogs();
  const liveBlogs = blogs.filter((b) => b.published !== false);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#3482b9] selection:text-white">
      {/* ── Page Header matching miracle-cloudtechnology.com/blog/ ── */}
      <section className="bg-[#212331] pt-28 pb-16 text-center text-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-wider uppercase mb-3 font-sans">
            BLOG
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wide">
            <Link href="/" className="text-white hover:text-[#00c9e3] transition-colors">
              Home
            </Link>
            <span className="text-slate-400">→</span>
            <span className="text-[#00c9e3] border-b-2 border-[#00c9e3] pb-0.5">
              Blog
            </span>
          </div>
        </div>
      </section>

      {/* ── Blog Grid matching the reference screenshot ── */}
      <section className="py-16 md:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {liveBlogs.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <p className="text-lg">No blog posts available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {liveBlogs.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col group"
                >
                  {/* Card Image */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block w-full h-56 overflow-hidden bg-slate-100"
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
                  </Link>

                  {/* Card Content */}
                  <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title in UPPERCASE matching reference website */}
                      <h2 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#3482b9] transition-colors uppercase leading-snug line-clamp-3 mb-4">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      {/* Brief Excerpt */}
                      {post.summary && (
                        <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6">
                          {post.summary}
                        </p>
                      )}
                    </div>

                    {/* Read more button matching reference coral/red pill button */}
                    <div className="pt-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-block px-5 py-2.5 rounded-md bg-[#ff5252] hover:bg-[#e04343] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                      >
                        Read more
                      </Link>
                    </div>
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
