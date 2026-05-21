"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts, categories, getRecentPosts } from "@/lib/blog";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Categories" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const recentPosts = getRecentPosts(4);

  const siteUrl = "https://bppinsurance.com";
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "BPP Insurance Insights",
    description:
      "Expert guidance, industry news, and practical advice on insurance coverage.",
    url: `${siteUrl}/blog`,
    publisher: { "@type": "Organization", name: "BPP Insurance" },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: post.date,
      author: { "@type": "Person", name: post.author },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-32 pb-24 md:pb-32 relative overflow-hidden">
        <div className="absolute -right-20 top-0 w-1/2 h-full bg-linear-to-l from-surface-high/30 to-transparent -z-10 rounded-full blur-3xl"></div>
        <h1 className="text-6xl md:text-8xl font-black text-navy-dark tracking-tighter leading-none mb-8">
          Insurance <br />
          <span className="text-gold">Insights</span>
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
          Expert guidance, industry news, and practical advice to help you make
          informed decisions about protecting what matters most.
        </p>
        <div className="w-24 h-1.5 bg-gold rounded-full"></div>
      </section>

      {/* Blog Content */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl text-navy-dark placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-3 bg-white border border-outline-variant rounded-xl text-navy-dark appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all min-w-[200px]"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Blog Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Featured Image */}
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="aspect-[16/10] bg-surface-container overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-navy-light/20 to-gold/20 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                          <span className="material-symbols-outlined text-6xl text-navy/30">
                            article
                          </span>
                        </div>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-8">
                      {/* Category */}
                      <span className="inline-block px-3 py-1 bg-surface-low text-gold-dark text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                        {post.category}
                      </span>

                      {/* Title */}
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-xl font-bold text-navy-dark mb-3 leading-tight group-hover:text-gold transition-colors">
                          {post.title}
                        </h2>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-6 border-t border-outline-variant/30">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-gold text-sm">
                              person
                            </span>
                          </div>
                          <span className="text-sm font-medium text-navy-dark">
                            {post.author}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                          <span className="material-symbols-outlined text-sm">
                            calendar_today
                          </span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-surface-low rounded-2xl">
                <span className="material-symbols-outlined text-6xl text-outline mb-4">
                  search_off
                </span>
                <h3 className="text-xl font-bold text-navy-dark mb-2">
                  No articles found
                </h3>
                <p className="text-on-surface-variant">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Search Widget */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-navy-dark mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-gold">
                  search
                </span>
                Search
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type and hit enter..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-surface-low border border-transparent rounded-xl text-navy-dark placeholder:text-outline focus:outline-none focus:border-gold transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gold hover:text-gold-dark transition-colors">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-navy-dark mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-gold">folder</span>
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group ${
                        selectedCategory === cat
                          ? "bg-gold text-[#241a00]"
                          : "text-on-surface-variant hover:bg-surface-low hover:text-navy-dark"
                      }`}
                    >
                      <span>{cat}</span>
                      <span className="text-xs opacity-60 group-hover:opacity-100">
                        {cat === "All Categories"
                          ? blogPosts.length
                          : blogPosts.filter((p) => p.category === cat).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-navy-dark mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-gold">schedule</span>
                Recent Posts
              </h3>
              <ul className="space-y-5">
                {recentPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex gap-4 group"
                    >
                      <div className="w-16 h-16 rounded-xl bg-surface-container flex-shrink-0 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <span className="material-symbols-outlined text-navy/40 group-hover:text-gold transition-colors">
                          article
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-navy-dark leading-snug line-clamp-2 group-hover:text-gold transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-on-surface-variant mt-1">
                          {post.date}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Widget */}
            <div className="bg-navy-dark p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 text-[100px] text-gold/10 font-black select-none">
                BPP
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-gold text-4xl mb-4 block">
                  support_agent
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Need Expert Advice?
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Our insurance specialists are here to help you find the right
                  coverage for your unique needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-[#241a00] px-6 py-3 rounded-xl font-bold text-sm hover:bg-gold-light transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">
                    call
                  </span>
                  Contact Us
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
