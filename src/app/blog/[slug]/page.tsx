"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = getPostBySlug(slug);
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, post.category, 3);

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      copy: "",
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    } else {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-dark text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-navy via-navy-dark to-navy-light"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-gold truncate max-w-[200px]">{post.category}</span>
          </nav>

          {/* Category */}
          <span className="inline-block px-4 py-1.5 bg-gold text-[#241a00] text-xs font-bold uppercase tracking-wider rounded-full mb-6">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-8 max-w-4xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-gold text-sm">
                  person
                </span>
              </div>
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <p className="text-xs text-slate-400">{post.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="w-full bg-surface-container">
        <div className="max-w-7xl mx-auto px-8 -mt-12">
          <div className="aspect-[21/9] bg-gradient-to-br from-navy-light/30 to-gold/20 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
            <span className="material-symbols-outlined text-[120px] text-navy/20">
              article
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-8">
            {/* Share Buttons */}
            <div className="flex items-center gap-3 mb-12 pb-8 border-b border-outline-variant/30">
              <span className="text-sm font-medium text-on-surface-variant mr-2">
                Share:
              </span>
              <button
                onClick={() => handleShare("twitter")}
                className="w-10 h-10 rounded-full bg-surface-low flex items-center justify-center text-on-surface-variant hover:bg-gold hover:text-[#241a00] transition-all"
                aria-label="Share on Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button
                onClick={() => handleShare("facebook")}
                className="w-10 h-10 rounded-full bg-surface-low flex items-center justify-center text-on-surface-variant hover:bg-gold hover:text-[#241a00] transition-all"
                aria-label="Share on Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="w-10 h-10 rounded-full bg-surface-low flex items-center justify-center text-on-surface-variant hover:bg-gold hover:text-[#241a00] transition-all"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
              <button
                onClick={() => handleShare("copy")}
                className="w-10 h-10 rounded-full bg-surface-low flex items-center justify-center text-on-surface-variant hover:bg-gold hover:text-[#241a00] transition-all"
                aria-label="Copy link"
              >
                <span className="material-symbols-outlined text-sm">link</span>
              </button>
            </div>

            {/* Article Body */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-navy-dark prose-headings:font-bold prose-p:text-on-surface-variant prose-p:leading-relaxed prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-navy-dark prose-ul:text-on-surface-variant prose-li:text-on-surface-variant prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Box */}
            <div className="mt-16 p-8 bg-surface-low rounded-2xl flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-gold text-2xl">
                  person
                </span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gold font-bold mb-1">
                  Written by
                </p>
                <h4 className="text-xl font-bold text-navy-dark mb-1">
                  {post.author}
                </h4>
                <p className="text-sm text-on-surface-variant">{post.authorRole}</p>
              </div>
            </div>

            {/* Comments Form */}
            <div className="mt-16 pt-12 border-t border-outline-variant/30">
              <h3 className="text-2xl font-bold text-navy-dark mb-2 flex items-center gap-3">
                <span className="material-symbols-outlined text-gold">
                  chat_bubble
                </span>
                Leave a Comment
              </h3>
              <p className="text-on-surface-variant mb-8">
                Have questions or thoughts? Share them below.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                  <span className="material-symbols-outlined text-emerald-500 text-5xl mb-4 block">
                    check_circle
                  </span>
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">
                    Thank you!
                  </h4>
                  <p className="text-emerald-700">
                    Your comment has been submitted for review.
                  </p>
                </div>
              ) : (
                <form
                  name="blog-comment"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={() => setFormSubmitted(true)}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="blog-comment" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <input type="hidden" name="post-slug" value={post.slug} />
                  <input type="hidden" name="post-title" value={post.title} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-on-surface-variant font-medium">
                        Full Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white border border-outline-variant rounded-xl text-navy-dark placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-on-surface-variant font-medium">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-white border border-outline-variant rounded-xl text-navy-dark placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-on-surface-variant font-medium">
                      Comment
                    </label>
                    <textarea
                      name="comment"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-outline-variant rounded-xl text-navy-dark placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-none"
                      placeholder="Share your thoughts..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-linear-to-r from-gold to-gold-dark text-[#241a00] px-8 py-4 rounded-xl font-bold text-sm hover:shadow-lg transition-all active:scale-95"
                  >
                    Submit Comment
                  </button>
                </form>
              )}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white p-8 rounded-2xl shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-navy-dark mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-gold">article</span>
                  Related Articles
                </h3>
                <ul className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <li key={relatedPost.slug}>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="flex gap-4 group"
                      >
                        <div className="w-20 h-20 rounded-xl bg-surface-container flex-shrink-0 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                          <span className="material-symbols-outlined text-navy/40 group-hover:text-gold transition-colors">
                            article
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs text-gold font-medium uppercase tracking-wider">
                            {relatedPost.category}
                          </span>
                          <h4 className="text-sm font-semibold text-navy-dark leading-snug mt-1 line-clamp-2 group-hover:text-gold transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-on-surface-variant mt-1">
                            {relatedPost.readTime}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Categories */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-navy-dark mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-gold">folder</span>
                Categories
              </h3>
              <ul className="space-y-2">
                {[
                  "Business Insurance",
                  "Claims Guide",
                  "Workers Compensation",
                  "Home Insurance",
                  "Auto Insurance",
                  "Life Insurance",
                ].map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/blog?category=${encodeURIComponent(cat)}`}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-on-surface-variant hover:bg-surface-low hover:text-navy-dark transition-all"
                    >
                      <span>{cat}</span>
                      <span className="material-symbols-outlined text-xs">
                        chevron_right
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-navy-dark p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 text-[80px] text-gold/10 font-black select-none">
                BPP
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-gold text-3xl mb-4 block">
                  verified_user
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Need Coverage Help?
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Our experts can help you find the perfect insurance solution
                  for your needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-[#241a00] px-6 py-3 rounded-xl font-bold text-sm hover:bg-gold-light transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                  Get a Quote
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="bg-surface-low py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-navy-dark font-bold hover:text-gold transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to All Articles
          </Link>
        </div>
      </section>
    </>
  );
}
