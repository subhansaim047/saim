# SEO CHANGELOG — saimdev.site
Branch: `seo/search-central-full-audit`

## 2026-10-25

### Phase 0 — Setup
- Created branch `seo/search-central-full-audit`.
- Created `/seo/` directory.
- Created `/seo/baseline.json` recording build status, live status codes, metadata, and mobile/desktop Lighthouse metrics.

### Phase 1 — Research & Guidelines
- Created `/seo/docs-notes.md` detailing 8 core Google Search Central and Web.dev topics with URLs, actionable technical requirements, and their exact applicability to `saimdev.site`.

### Phase 2 — Audit Findings
- Created `/seo/audit.md` cataloguing Critical, High, Medium, and Low impact defects ordered by severity.

### Phase 3 — Applied Fixes
- **Crawling & Indexing:**
  - Added AI crawlers and optimized bot directives in `public/robots.txt`.
  - Created `scripts/generate_sitemap.mjs` and dynamic `app/sitemap.ts`.
  - Configured `"prebuild": "node scripts/generate_sitemap.mjs"` in `package.json`.
  - Created custom 404 page in `app/not-found.tsx` returning HTTP status 404.
  - Configured edge security headers in `vercel.json` (`nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`).
- **On-Page & Structured Data:**
  - Standardized `<html lang="en-GB">` in `app/layout.tsx`.
  - Upgraded `organizationSchema` to standard `@type: "Organization"` with `ImageObject` logo.
  - Injected global `WebSite` JSON-LD schema.
  - Added server-side `BreadcrumbList` schema and `WebApplication` / `DigitalDocument` schema in `app/food-safety-templates/[slug]/page.tsx`.
  - Added visible, semantic `<nav aria-label="Breadcrumb">` to `TemplateDetailPage.tsx`.
- **AdSense Readiness & Consent Management:**
  - Created `public/ads.txt` stub with single-line publisher ID insertion instructions.
  - Injected Google Consent Mode v2 default-denied script into `app/layout.tsx`.
  - Added Consent Mode updates (`granted`/`denied`) in `CookieBanner.tsx`.
  - Added "Cookie Settings" interactive reopener to `FooterSection.tsx` and `SiteFooter.tsx`.
  - Added `"use client";` to `SiteFooter.tsx`.
  - Updated `PrivacyPolicy.tsx` and `app/cookie-policy/page.tsx` with Google advertising and cookie disclosures.
  - Added layout-stable ad reservation slot in `TemplateDetailPage.tsx` to eliminate CLS.
- **Content Plan & Lead Funnel:**
  - Created `/seo/content-plan.md` with 20 high-intent, low-competition UK topics.
  - Implemented 3 new comprehensive pillar articles:
    1. `/blog/uk-food-hygiene-rating-scheme-5-star-checklist`
    2. `/blog/natashas-law-ppds-food-labelling-guide`
    3. `/blog/commercial-kitchen-food-cooling-temperature-guide`
  - Featured the 3 new articles in `src/components/BlogsPage.tsx`.

### Phase 4 — Verification
- `npm test` (`node scripts/run_all_guards.mjs`): All 11 quality guards passed with 0 errors.
- `npm run build`: All 191 static routes compiled successfully with code 0.
- All JSON-LD valid and verified.

### Phase 5 — Deployment
- Merged branch `seo/search-central-full-audit` into `main`.
- Pushed to remote repository triggering production Vercel edge deployment.
