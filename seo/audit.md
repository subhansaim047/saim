# Comprehensive Technical SEO Audit & Defect Log

**Target Domain:** https://www.saimdev.site  
**Audit Date:** 2026-10-25  
**Auditor:** Principal Technical SEO & Full-Stack Architect  
**Architecture:** Next.js 16.3.5 (Turbopack, App Router, React 19) on Vercel Edge  

---

## Executive Summary
This audit evaluates `saimdev.site` against Google Search Essentials, Search Central documentation, Core Web Vitals, Google AdSense compliance policies, and UK E-E-A-T quality guidelines.

---

## 1. Critical Impact Issues (Immediate Crawl & Indexing Risk)

### [CRIT-01] Static Sitemap Lacks Dynamic Indexable Route Generation
- **Affected URL:** `https://www.saimdev.site/sitemap.xml`
- **Root Cause:** A hardcoded `public/sitemap.xml` was present in the repo, containing only 30 entries and missing the full range of KEEP & IMPROVE food-safety tools. If static routes were added or updated, `lastmod` remained stale.
- **Impact:** Googlebot cannot discover new indexable pages or determine accurate update timestamps.
- **Fix:** Replaced with dynamic `app/sitemap.ts` that automatically calculates `lastmod` from build dates and renders all canonical indexable pages directly.

### [CRIT-02] Invalid Schema.org Type for Organization in Root Layout
- **Affected File:** `app/layout.tsx`
- **Root Cause:** Schema declared `"@type": "ProfessionalService"` with unstandardised property fields, causing Schema validators to flag type warnings.
- **Impact:** Rich result suppression and potential semantic entity confusion in Google's Knowledge Graph.
- **Fix:** Upgraded to standard `"@type": "Organization"` with formal `ImageObject` logo, contactPoint, and explicit social entity `sameAs` properties.

### [CRIT-03] Missing Site-Wide WebSite Structured Data
- **Affected File:** `app/layout.tsx`
- **Root Cause:** No `WebSite` JSON-LD schema was declared. Google requires this for brand site-name extraction in mobile and desktop SERP header snippets.
- **Impact:** Google SERPs may default to displaying the raw domain `saimdev.site` instead of the clean brand name `Saim Dev`.
- **Fix:** Injected global `WebSite` schema in root layout with `inLanguage: "en-GB"` and publisher entity reference.

---

## 2. High Impact Issues (AdSense Readiness, E-E-A-T & Tool Funnel)

### [HIGH-01] Missing ads.txt File at Site Root
- **Affected URL:** `https://www.saimdev.site/ads.txt`
- **Root Cause:** No `ads.txt` file existed in `public/`.
- **Impact:** Google AdSense account approval will immediately fail during crawler validation.
- **Fix:** Created `public/ads.txt` stub formatted according to IAB Tech Lab standards, pre-configured with instructions for instant insertion of the publisher ID.

### [HIGH-02] Lack of WebApplication / SoftwareApplication Schema on Interactive Tools
- **Affected File:** `src/components/TemplateDetailPage.tsx` & `app/tools/page.tsx`
- **Root Cause:** Interactive tools (Allergen Matrix, Food Cost Calculator, Recipe Scaler, HACCP Builder, Quiz) lacked `WebApplication` schema markup.
- **Impact:** Misses Google Search rich app classification and feature entity categorization.
- **Fix:** Inject structured `WebApplication` JSON-LD on all interactive tool pages with `applicationCategory: "BusinessApplication"`, `operatingSystem: "All / Web Browser"`, and zero-cost offer.

### [HIGH-03] Missing Structured BreadcrumbList on Inner Pages
- **Affected Files:** `app/food-safety-templates/[slug]/page.tsx`, `app/tools/page.tsx`, `app/blog/[slug]/page.tsx`
- **Root Cause:** No `BreadcrumbList` JSON-LD was emitted on deep tool or blog pages.
- **Impact:** Google SERPs cannot display structured navigational breadcrumbs in search snippet paths.
- **Fix:** Add dynamic `BreadcrumbList` schema on all template and inner tool routes.

### [HIGH-04] Thin Content Risk on Utility Pages
- **Affected URLs:** 120+ low-utility poster pages.
- **Root Cause:** Template pages with low textual content could trigger Google's "Helpful Content" thin page demotion.
- **Impact:** Site-wide quality score dilution.
- **Fix:** Maintained strict `NOINDEX` on thin/duplicate templates via `page_plan.json` and `isRouteNeedsReplacement`, while enriching indexable KEEP/IMPROVE pages with comprehensive UK guidance, step-by-step instructions, and disclaimers.

---

## 3. Medium Impact Issues (Performance, Security Headers & Metadata)

### [MED-01] Missing Security & Quality Headers
- **Affected File:** `vercel.json`
- **Root Cause:** No explicit security headers configured for Vercel edge deployment.
- **Impact:** Lowered best practices rating, lack of protection against MIME sniffing and clickjacking.
- **Fix:** Configured `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, and modern Cache-Control rules.

### [MED-02] Language Tag Was Generic `en` Instead of Target Audience `en-GB`
- **Affected File:** `app/layout.tsx`
- **Root Cause:** `<html lang="en">` declared instead of `en-GB`.
- **Impact:** Ambiguity for UK geographic search targeting.
- **Fix:** Updated to `<html lang="en-GB">`.

### [MED-03] Reserved Ad Slots (CLS Prevention)
- **Affected Components:** Tool templates
- **Root Cause:** Loading future AdSense units without pre-allocated CSS height causes severe layout shifts (CLS > 0.1).
- **Impact:** Degraded Core Web Vitals score.
- **Fix:** Prepared layout-stable ad containers with `min-h-[280px]` and subtle placeholder styling.

---

## 4. Low Impact Issues (Minor Enhancements)
- **[LOW-01] Trailing Slash Normalization:** Next.js defaults to non-trailing slash; ensured all sitemap entries and canonical links strictly omit trailing slashes.
- **[LOW-02] AI Bot Crawling:** Added explicit `Allow: /` for ClaudeBot, GPTBot, and PerplexityBot in `robots.txt` to encourage AI engine citations.
