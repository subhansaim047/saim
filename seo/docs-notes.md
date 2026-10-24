# Google Search Central Documentation Notes & Actionable Guidance

**Site Analyzed:** `https://www.saimdev.site`  
**Date:** 2026-10-25  
**Review Standard:** Official Google Search Central Documentation (developers.google.com/search) & Web.dev standards

---

## 1. Search Essentials: Technical Requirements, Spam Policies & Best Practices
- **Source URL:** https://developers.google.com/search/docs/essentials
- **Key Requirements:**
  - Return valid HTTP 200 for indexable pages, 404/410 for non-existent resources.
  - Page content must be accessible to Googlebot (no cloaking, no blocking CSS/JS in robots.txt).
  - Comply with Google Search spam policies (no hidden text, keyword stuffing, scraped content, thin affiliate/doorway pages, or deceptive rich result markup).
- **Applies to saimdev.site:** **YES**.
  - All public pages must deliver real HTML without client-only walling.
  - CSS and static JS bundles must remain unblocked in `robots.txt`.
  - Disclaimers and tool outputs must be genuine utility for UK food businesses, not thin scraped doorway pages.

---

## 2. SEO Starter Guide & Creating Helpful, Reliable, People-First Content (E-E-A-T)
- **Source URL:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content & https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- **Key Requirements:**
  - Content should demonstrate first-hand Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T).
  - Clear attribution: author/creator bio, agency contact information, transparency on business identity.
  - People-first focus: direct answers, step-by-step practical advice, clear purpose. Avoid filler text manufactured solely for search engine bots.
  - Distinct value: do not repeat identical boilerplate across 100+ template pages.
- **Applies to saimdev.site:** **YES**.
  - Tool and template pages must provide clear user instructions, step-by-step guidance, real UK Food Standards Agency (FSA) compliance context (Natasha's Law, Food Information Regulations 2014), and honest disclaimers.
  - Core trust pages (`/about`, `/contact`, `/privacy`, `/cookie-policy`, `/terms`) must provide verifiable studio identity without false claims.

---

## 3. Crawling & Indexing: Robots.txt, Sitemaps, Canonicals & Status Codes
- **Source URLs:**
  - https://developers.google.com/search/docs/crawling-indexing/robots/intro
  - https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
  - https://developers.google.com/search/docs/crawling-indexing/canonicalization
  - https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
  - https://developers.google.com/search/docs/crawling-indexing/http-network-status-codes
- **Key Requirements:**
  - `robots.txt` must link to `sitemap.xml`, allow all indexable routes, and never block CSS/JS required for layout rendering.
  - `sitemap.xml` must list only canonical, indexable URLs with HTTP 200 status (no 301s, 404s, or noindexed pages) with accurate ISO-8601 `<lastmod>`.
  - Self-referencing `rel="canonical"` on every canonical URL; duplicate or variant URLs must canonicalize to the primary URL.
  - JavaScript rendering: critical text, headings, and internal links must be present in server-rendered SSR HTML (Next.js SSR/SSG), not injected solely on user interaction.
  - Real 404 status codes for missing routes (avoid soft 404s where a 200 page renders "Not found").
- **Applies to saimdev.site:** **YES**.
  - Migrate from static `public/sitemap.xml` to dynamic `app/sitemap.ts` covering only KEEP/IMPROVE indexable routes.
  - In `robots.txt`, keep `Disallow: /api/` while explicitly allowing Googlebot and other friendly bots.
  - Ensure custom 404 returns HTTP status 404.

---

## 4. Appearance in Search: Titles, Snippets, Favicons & Site Names
- **Source URLs:**
  - https://developers.google.com/search/docs/appearance/title-link
  - https://developers.google.com/search/docs/appearance/snippet
  - https://developers.google.com/search/docs/appearance/favicon-in-search
  - https://developers.google.com/search/docs/appearance/site-names
- **Key Requirements:**
  - Title tags: concise (50–60 characters), unique per page, reflecting user intent and brand suffix (e.g. `Page Title | Saim Dev`). Avoid repetitive boilerplate and keyword stuffing.
  - Meta descriptions: informative, human-readable summaries (120–160 characters), accurately describing page content and providing a clear call to action.
  - Favicon: must be accessible to Googlebot, square (at least 48x48px or SVG/ICO multiples).
  - Site name: defined via `WebSite` structured data with `name` ("Saim Dev") and canonical `url`.
- **Applies to saimdev.site:** **YES**.
  - Standardise title and meta description templates across all core pages, tools, and blogs.
  - Ensure `WebSite` schema is present sitewide in root layout with `inLanguage: "en-GB"`.

---

## 5. Structured Data: Organization, WebSite, Breadcrumbs, WebApplication & Articles
- **Source URLs:**
  - https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
  - https://developers.google.com/search/docs/appearance/structured-data/organization
  - https://developers.google.com/search/docs/appearance/structured-data/website
  - https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
  - https://developers.google.com/search/docs/appearance/structured-data/software-app
  - https://developers.google.com/search/docs/appearance/structured-data/faqpage
  - https://developers.google.com/search/docs/appearance/structured-data/article
- **Key Requirements:**
  - **Organization:** Use standard `@type: "Organization"` with valid `name`, `url`, `logo` (ImageObject), `contactPoint`, and verified `sameAs` social profiles.
  - **WebSite:** Sitewide schema defining publisher and official site name.
  - **BreadcrumbList:** Inner pages must have structured breadcrumbs linking Home > Section > Current Page.
  - **WebApplication / SoftwareApplication:** Tool pages should declare application category (`BusinessApplication` or `UtilitiesApplication`), operating system (`All / Web Browser`), and price (`0`). Never add fabricated aggregateRating or review stars.
  - **FAQPage:** Note Google's August 2023 update: FAQ rich results are restricted to authoritative government/health websites; commercial websites generally do not receive rich snippet accordions in SERPs. Retain FAQPage schema only where genuine visible FAQs exist for semantic search understanding.
  - **Article / BlogPosting:** Blog posts should include headline, datePublished, dateModified, author, and image.
- **Applies to saimdev.site:** **YES**.
  - Correct Organization schema in `app/layout.tsx`.
  - Add BreadcrumbList to tools and template pages.
  - Add WebApplication schema to interactive tool pages.
  - Add BlogPosting schema to blog posts.

---

## 6. Page Experience & Core Web Vitals (LCP, INP, CLS)
- **Source URLs:**
  - https://developers.google.com/search/docs/appearance/page-experience
  - https://web.dev/articles/vitals
- **Key Requirements:**
  - **LCP (Largest Contentful Paint):** Target $\le 2.5\text{s}$. Preload hero images, optimize Next.js font loading, eliminate render-blocking scripts.
  - **INP (Interaction to Next Paint):** Target $\le 200\text{ms}$. Break up long tasks, avoid synchronous blocking scripts in button event handlers.
  - **CLS (Cumulative Layout Shift):** Target $\le 0.1$. Explicit `width` and `height` (or aspect-ratio) on all images, avoid inserting content dynamically above fold without reserved space (including future AdSense ad units).
  - HTTPS enforced across all connections with HSTS.
- **Applies to saimdev.site:** **YES**.
  - Reserve layout-stable CSS wrapper containers for future AdSense banners.
  - Maintain Next.js Turbopack image optimization and font preloading.
  - Enforce security headers in `vercel.json` (nosniff, strict-origin-when-cross-origin, HSTS, secure CSP).

---

## 7. International Targeting & Language
- **Source URL:** https://developers.google.com/search/docs/specialty/international/overview
- **Key Requirements:**
  - Declare `<html lang="en-GB">` for UK/Europe English target audience.
  - Do NOT implement fake or incomplete `hreflang` tags if no dedicated translated or region-specific URLs exist (Google penalizes broken/circular hreflang).
  - Use British English spelling (e.g. "optimised", "licence", "programmes") and GBP pricing (£) where relevant.
- **Applies to saimdev.site:** **YES**.
  - Ensure `lang="en-GB"` in root layout.
  - Remove any unreciprocated hreflang tags.

---

## 8. Google AdSense Readiness & Consent Requirements (UK / EEA / Switzerland)
- **Source URLs:**
  - https://support.google.com/adsense/answer/48182 (AdSense program policies)
  - https://support.google.com/adsense/answer/13554116 (Certified CMP requirements for EEA/UK)
  - https://support.google.com/adsense/answer/7532444 (ads.txt specification)
- **Key Requirements:**
  - **High-Quality Original Content:** No under-construction, thin, duplicate, or doorway pages.
  - **Clear Navigation & Transparency:** Mandatory links to About, Contact, Privacy Policy, Cookie Policy, Terms in footer.
  - **Privacy Disclosures:** Privacy policy must explicitly disclose that Google and third-party vendors use cookies to serve ads based on user visits.
  - **Consent Management Platform (CMP):** For visitors from UK and EEA, ads cannot load without consent under Google Consent Mode v2 / IAB TCF v2.2.
  - **Ads.txt:** Must be served at `https://www.saimdev.site/ads.txt`. If publisher ID is not yet assigned, provide the file stub with exact instructions so inserting the ID requires a single line edit.
  - **Ad Placement Stability:** Dedicated fixed-height ad containers with `min-height` and background styling to eliminate CLS when ads fill.
- **Applies to saimdev.site:** **YES**.
  - All requirements are implemented in this audit.
