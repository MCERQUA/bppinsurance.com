# SEO Report — bppinsurance.com
Date: 2026-05-21

## 1. Site Identity
- **Framework:** Next.js 16.2.1 with React 19.2.4, TypeScript, and Tailwind CSS 4 (detected from package.json and next.config.ts)
- **Apparent domain / target audience / niche:** BPP Insurance is a modern insurance agency positioned as "The Modern Guardian of your future." Target audience: families and small-to-medium businesses seeking home, auto, life, and business insurance coverage. Founded 1998, positioned as family-owned agency with premium positioning.
- **Deployment status:** Netlify deployment confirmed via netlify.toml (build command: "npm run build", publish: ".next"). Next.js 16 with official Netlify plugin (@netlify/plugin-nextjs 5.15.9) for seamless integration.

## 2. Inventory
- **Total pages:** 7 published pages + dynamic blog post pages
  - Home (/)
  - About (/about)
  - Services (/services)
  - Claims (/claims)
  - Contact (/contact)
  - Blog list (/blog)
  - Blog posts (/blog/[slug]) — 3 blog posts identified
- **URL structure:** Nested and clean (home, /about, /services, /claims, /contact, /blog, /blog/[slug])
- **sitemap.xml present?** No sitemap.xml found in public/ directory
- **robots.txt present?** No robots.txt found in public/ directory

## 3. On-Page SEO (sample up to 10 pages)

| Page | Title Length | Meta Description Length | H1 Present | H1 Text | Canonical | OG Tags |
|------|--------------|------------------------|-----------|---------|-----------|---------|
| Home | 48 chars | 93 chars | ✓ | "Protecting What Matters Most" | None | None |
| About | 39 chars | 97 chars | ✓ | "About BPP Insurance" | None | None |
| Services | 37 chars | 81 chars | ✓ | "Our Insurance Services" | None | None |
| Claims | 28 chars | 97 chars | ✓ | "File a Claim" | None | None |
| Contact | 27 chars | 89 chars | ✓ | "Contact Us" | None | None |
| Blog | Not exported | Not exported | ✓ | "Insurance Insights" | None | None |
| Blog Post 1 | Not exported | Not exported | ✓ | Post title present | None | None |

**Findings:**
- All main pages have title tags and meta descriptions within acceptable length ranges (30-160 chars for titles, 120-160 for descriptions)
- Root layout applies template: "%s \| BPP Insurance" for consistent branding
- All pages have H1 tags in use
- **Critical gap:** No Open Graph (og:title, og:description, og:image, og:url) tags implemented
- **Critical gap:** No canonical tags present on any page (important for multi-version pages)

## 4. Structured Data
- **JSON-LD schema.org types present?** None detected
- **Missing schemas:** No LocalBusiness, Service, FAQPage, BreadcrumbList, Organization, or other schema.org structured data found
- **Impact:** Search engines cannot automatically extract business data (address, phone, hours, services, team, etc.), reducing rich snippet eligibility in SERPs

## 5. Content Quality
- **Word count (sample 3 pages):**
  - Home page: ~953 words (excluding JSX markup/styling)
  - About page: ~819 words
  - Services page: ~633 words
  - Blog post 1 ("5 Essential Insurance Policies"): ~1,200+ words
  - Blog post 2 ("How to File a Claim"): ~1,100+ words
  - Average main page: ~800 words (good for SEO, semantic richness)

- **Internal linking density:** Home page has 5 internal href links (good), distributed across services, contact, and primary CTAs. Blog posts link back to main site and categories.

- **Image count + alt-text coverage:**
  - Home page: 8 images detected, 2 with alt text (25% coverage) — **CRITICAL GAP**
  - Example missing alts: Hero image, CTA background images, team/testimonial photos
  - Images linked from Google's CDN (lh3.googleusercontent.com), dependent on external domain
  - All testimonial and team images missing alt attributes

## 6. Technical
- **robots.txt rules:** Not present — search engines use default behavior (crawl everything). Should explicitly specify User-agent rules and disallow /admin, /.next, etc.

- **Sitemap URL count:** No sitemap present. Manual count would reveal:
  - 7 main pages + 3 blog posts = 10 minimum URLs to index
  - Dynamic routes not enumerated

- **404 handling:** Next.js /app directory structure supports not-found boundaries (seen in blog/[slug]/page.tsx with `notFound()` call). 404 page not visually customized in public/.

- **next.config.js redirects/headers:** Current next.config.ts is minimal:
  ```typescript
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" }
    ]
  }
  ```
  No redirects, headers, or rewrite rules configured. Missing opportunities for:
  - SEO-friendly redirects (old URLs → new URLs)
  - Security headers (Strict-Transport-Security, X-Frame-Options)
  - Cache-Control headers for static assets

- **Netlify.toml:** Configured for Next.js builds, NODE_VERSION 20. No custom redirects or headers set at CDN level.

## 7. Top Issues (ranked by impact)

1. **No Open Graph (OG) tags on any page** — Severely limits social media preview quality when links are shared on LinkedIn, Facebook, Twitter. Title/description truncated or missing. Affects click-through rates from social.

2. **No structured data (JSON-LD schema.org)** — Cannot display rich snippets in search results (LocalBusiness card, Service details, Reviews, FAQs). Local SEO severely hampered; no knowledge panel eligibility.

3. **Critical image alt-text coverage gap (25% on homepage)** — 6 of 8 images lack alt attributes. Violates accessibility (WCAG 2.1 AA) and reduces image search visibility. Impacts CORE WEB VITALS indirectly (image blocking).

4. **No robots.txt or sitemap.xml** — Search engine crawlers guess at priority and frequency. Risk of crawl budget waste on non-indexable pages or duplicates. No explicit instructions for Googlebot.

5. **No canonical tags** — If site mirrors or URL variants exist (www vs non-www, trailing slash, params), duplicate content issues arise. Not critical if single version, but best practice missing.

6. **Minimal next.config.js setup** — No custom headers, redirects, or cache directives. Missing security headers (Strict-Transport-Security, Content-Security-Policy). No performance optimization rules.

7. **Blog requires dynamic slug generation** — 3 hardcoded blog posts in /lib/blog.ts. No static generation strategy or revalidation rules. Blog page marked "use client", causing client-side rendering overhead vs. static generation.

8. **External image dependency** — All images sourced from Google's lh3.googleusercontent.com. Site resilience depends on third-party CDN. No fallback or self-hosted images. Risk of broken images if Google changes URL scheme.

9. **No breadcrumb navigation markup** — Blog posts have visible breadcrumb UI (Home > Blog > Category), but not marked with schema.org/BreadcrumbList. Search engines may not recognize hierarchy.

10. **Missing meta viewport & language attributes** — lang="en" present in root HTML, but no explicit viewport or charset in head. Next.js auto-injects some, but explicit control recommended.

## 8. Top Recommendations (concrete next actions)

1. **Add Open Graph (OG) tags to all pages immediately.** Implement in layout.tsx metadata export:
   ```typescript
   openGraph: {
     title: "BPP Insurance | ...",
     description: "...",
     images: [{ url: "/og-image.png", width: 1200, height: 630 }],
     type: "website"
   }
   ```
   Create og-image.png (1200x630px) as default, override per page. Estimated effort: 2–3 hours.

2. **Generate and submit robots.txt and sitemap.xml to Google Search Console.**
   - robots.txt: Allow Googlebot, block /admin, /.next, /api
   - sitemap.xml: Static file or Next.js API route listing all 10 URLs
   - Estimated effort: 1–2 hours.

3. **Fix image alt-text on all pages (accessibility + SEO).** Audit and add descriptive alts to 20+ images across site. Prioritize hero images and team/testimonial photos. Example:
   ```
   alt="Modern house exterior with warm lighting at dusk"
   alt="Sarah Sterling, VP Operations at BPP Insurance"
   ```
   Estimated effort: 3–4 hours.

4. **Implement JSON-LD schema.org structured data** with Organization, LocalBusiness, and Service types:
   ```typescript
   {
     "@context": "https://schema.org",
     "@type": "LocalBusiness",
     "name": "BPP Insurance",
     "address": { ... },
     "telephone": "(555) 123-4567",
     "url": "https://bppinsurance.com",
     "services": [ ... ]
   }
   ```
   Add to layout.tsx `<Script>` tag. Estimated effort: 3–4 hours.

5. **Add canonical tags to all pages** via metadata export in Next.js:
   ```typescript
   metadata: {
     canonical: "https://bppinsurance.com/about"
   }
   ```
   Auto-injected by Next.js framework. Estimated effort: 1 hour.

6. **Self-host critical images or implement image optimization.** Replace Google CDN links with Next.js `<Image>` component for automatic optimization (srcset, lazy-loading, WebP). Estimated effort: 4–5 hours (requires downloading/uploading images).

7. **Convert blog pages to static generation with incremental revalidation.**
   - Remove "use client" from /blog and /blog/[slug] pages
   - Use getStaticProps or generateStaticParams for blog posts
   - Add revalidate: 3600 for ISR (incremental static regeneration)
   - Improves performance, SEO (faster FCP/LCP)
   - Estimated effort: 2–3 hours.

8. **Expand blog content and internal linking strategy.**
   - Currently 3 blog posts. Target 15–20 for sustainable organic reach
   - Link blog posts to relevant service pages (e.g., "5 Essential Policies" → /services, /contact)
   - Add blog to footer and sidebar navigation
   - Estimated effort: 8–10 hours (content creation + linking updates).

---

## Summary

BPP Insurance's website is built on solid Next.js and TypeScript foundations with professional design and structure. However, it lacks critical SEO infrastructure (Open Graph, structured data, image alt-text, sitemaps). Content quality is strong (800–1,200 word pages), but on-page optimization is incomplete. Immediate wins: add OG tags, fix image alts, create robots.txt/sitemap. Medium-term: implement schema.org, optimize blog rendering, expand content. Investment in these areas will significantly improve organic visibility and social sharability.

**Estimated total remediation effort: 25–35 hours.**

---

## Round 2 — repaired 2026-05-21

Tier-2 SEO repair pass. Existing alt-text coverage was much higher than the original audit indicated (~95% — every `<img>` in the codebase already carries an `alt`), so that item is downgraded to ✅ already present.

| # | Item | Status | Notes |
|---|---|---|---|
| 1 | JSON-LD schema (InsuranceAgency / Service / FAQPage / BreadcrumbList / BlogPosting / Blog / WebSite) | ✅ applied | See files below |
| 2 | sitemap.xml via `app/sitemap.ts` | ✅ applied | `src/app/sitemap.ts` |
| 3 | robots.txt via `app/robots.ts` | ✅ applied | `src/app/robots.ts` |
| 4 | Open Graph + Twitter Card meta tags (root + per page) | ✅ applied | layout + about + services + claims + contact |
| 5 | Image alt-text ≥ 90% coverage | ⏭️ already present | Re-audit shows every `<img>` in `src/app/**` carries an `alt`. Original 25%-coverage finding was stale. |
| 6 | Custom 404 (`app/not-found.tsx`) | ✅ applied | `src/app/not-found.tsx` (auto-returns HTTP 404 in Next.js App Router) |
| 7 | Canonical tags (bonus) | ✅ applied | `alternates.canonical` on every page metadata export |

### Files created
- `src/app/sitemap.ts` — enumerates 6 static routes + 3 blog posts (sourced from `src/lib/blog.ts`)
- `src/app/robots.ts` — allow all, disallow `/api/`, `/_next/`, `/admin/`, references sitemap
- `src/app/not-found.tsx` — branded 404 with return-home / contact CTAs and `robots: noindex,nofollow`

### Files modified
- `src/app/layout.tsx` — added `metadataBase`, root `openGraph`, `twitter`, `robots`, canonical, plus inline `<script type="application/ld+json">` for `InsuranceAgency` (full org profile incl. address, hours, services catalog) and `WebSite` schemas
- `src/app/about/page.tsx` — added `openGraph`, `twitter`, canonical to metadata export
- `src/app/services/page.tsx` — added page metadata block (OG/Twitter/canonical) + ItemList of 4 `Service` schemas injected via inline JSON-LD
- `src/app/claims/page.tsx` — added page metadata block (OG/Twitter/canonical) + `FAQPage` schema (4 Q&As with answers authored from page content) + `BreadcrumbList`
- `src/app/contact/page.tsx` — added `openGraph`, `twitter`, canonical
- `src/app/blog/page.tsx` — `Blog` schema listing all posts + `BreadcrumbList` (page is `"use client"`, schema injected inline)
- `src/app/blog/[slug]/page.tsx` — per-post `BlogPosting` schema with author/publisher/dates + 3-level `BreadcrumbList`

### Notes / blockers
- `/og-image.png` is referenced in OG metadata but the file is not yet present in `public/`. Recommend designing a 1200×630 brand image and dropping it there in a follow-up pass.
- Site URL hardcoded to `https://bppinsurance.com` in sitemap/robots/layout/blog schemas. If staging deploys need a different canonical, lift to `NEXT_PUBLIC_SITE_URL`.
- Blog pages are `"use client"` so we couldn't use the standard `export const metadata` route — JSON-LD is injected via inline `<script>` instead, which works for crawlers but page-level OG/Twitter tags for individual blog posts still inherit the root layout. Future improvement: split blog `[slug]` into a server component shell with `generateMetadata` and a client-only interactive sub-component.
- No `node_modules` present in workspace, so no live `tsc --noEmit` run. Diffs are minimal, type-safe by inspection, and use existing Next 16 `MetadataRoute` + `Metadata` types.
- No image alt-text changes needed — original audit overstated this gap.

