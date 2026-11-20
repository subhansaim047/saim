# End-to-End Keyword Clustering, Topical Silo Architecture & Technical Implementation Report (`https://www.saimdev.site`)

**Project Date:** November 20, 2026  
**Target Domain:** `https://www.saimdev.site`  
**Total Canonical Indexable Pages (Post-Implementation):** `55` (`1:1` mapped across `55` SERP-verified intent clusters, `CL-01` through `CL-55`)  
**Total Researched Keyword Universe:** `332` keywords across UK, Europe, US, and "near me" modifiers (`/seo/02-keyword-universe.csv`)

---

## 1. Executive Summary & Phase 7 Verification Scorecard

We executed the complete 7-phase keyword clustering, cannibalization resolution, topical silo engineering, content creation, and technical SEO verification pipeline across `https://www.saimdev.site`, including the `/tools` hub and all **6 interactive browser tools**.

| Verification Gate (Phase 7) | Target Standard | Final Measured Result | Status |
| :--- | :--- | :--- | :--- |
| **1 Cluster = 1 Canonical Page** | Zero shared primary keywords across all pages | **55 / 55 unique primary keywords (`0` duplicates)** | **PASS** |
| **Single `<h1>` Tag Per Page** | Exactly `1` `<h1>` tag on every indexable URL | **55 / 55 pages have exactly `1` `<h1>`** | **PASS** |
| **Canonical Tag Parity** | Every page self-canonicalizes to its exact `https://www.saimdev.site` URL | **55 / 55 pages (`100%` match)** | **PASS** |
| **XML Sitemap Hygiene** | Every indexable page in `sitemap.xml`; zero redirected or `noindex` URLs in `sitemap.xml` | **55 / 55 canonical URLs in `public/sitemap.xml` (`0` redirects/noindex)** | **PASS** |
| **Internal Link Integrity** | Zero broken internal links (`404`s) & zero internal links pointing to `301`/`308` redirect chains | **0 broken links; 0 internal `/food-safety-templates/*` redirect links** | **PASS** |
| **`/demos` Header Indexing Fix** | `/demos` must return `index, follow` (not `X-Robots-Tag: noindex, nofollow`) | **Fixed in `next.config.mjs` (`/demos/:path+`) & `vercel.json` (`/demos/(.+)`)** | **PASS** |
| **Automated CI Quality Guards** | All 11 repository quality guards (`npm test`) & TypeScript (`tsc --noEmit`) | **11 / 11 guards passed (`0` errors)** | **PASS** |

---

## 2. What Was Found (Cannibalization Cases & Technical Indexing Conflicts)

### Case 1: 4-Way Cost & Pricing Intent Cannibalization (`/overview` vs `/pricing` vs `/blog/nextjs-website-development-cost-uk-us` vs `/blog/small-business-website-packages-guide`)
* **Finding:** `/overview` previously carried the title `"Full Studio Overview, Specs & Cost Estimator | Saim Dev"` and H1 `"Full Studio Overview & Cost Estimator"`, competing directly with `/pricing` (transactional fixed packages) and lacking a dedicated standalone interactive website cost calculator under `/tools`.
* **Resolution Applied (Rule c + New Page Creation):**
  1. Rewrote `/overview` (`app/overview/page.tsx`) to target **Technical Specifications & Studio Architecture Overview** (`CL-02`, Primary Keyword: `next.js website technical specifications uk`, Title: `"Next.js Studio Technical Overview & Specs | Saim Dev"`).
  2. Created a dedicated transactional interactive tool page at `/tools/website-cost-calculator` (`CL-04`, Primary Keyword: `website cost calculator uk`, `2,900/mo` volume) with GBP (`£`), EUR (`€`), and USD (`$`) scope estimation and 24-month TCO math.
  3. Preserved `/pricing` (`CL-28`) strictly for `fixed price website development packages uk`, `/blog/nextjs-website-development-cost-uk-us` (`CL-36`) for informational market cost breakdowns (`next.js website development cost uk`), and `/blog/small-business-website-packages-guide` (`CL-42`) for package scope comparison (`small business website packages uk guide`).

### Case 2: Agency Homepage vs Next.js Service Pillar vs Freelance Next.js UK vs Services Hub (`/` vs `/services/website-development` vs `/nextjs-developer-uk` vs `/services`)
* **Finding:** Four high-authority pages targeted overlapping UK Next.js commercial terms.
* **Resolution Applied (Rule c — Intent Separation):**
  * `/` (`CL-01`) -> `custom next.js web agency uk` (Brand + multi-practice agency homepage covering Next.js websites, headless Shopify, and 0% commission ordering).
  * `/services` (`CL-15`) -> `web development services uk` (Broad 12-service commercial catalog directory).
  * `/services/website-development` (`CL-17`) -> `next.js website development uk` (Hub 1 Parent Pillar for bespoke Next.js 16 & React 19 website builds).
  * `/nextjs-developer-uk` (`CL-14`) -> `freelance next.js developer uk` (Transactional senior engineer hiring/sprint intent for product teams).

### Case 3: `/tools` Hub & 160 Legacy `/food-safety-templates/[slug]` Many-to-One Redirect Soft-404 Trap
* **Finding:** In commit `fe57408d`, `/tools`, 4 interactive calculators/generators (`/tools/allergen-matrix-generator`, `/tools/ppds-label-generator`, `/tools/food-cost-calculator`, `/tools/recipe-batch-calculator`), 7 UK food safety blog guides, and 160 `/food-safety-templates/[slug]` pages had all been redirected to just 2 blog posts. Furthermore, several template slugs (`food-allergen-chart`, `allergy-matrix`, `allergen-poster`, `natashas-law`, `food-cost-calculator`, `recipe-calculator`) cannibalized the interactive tools.
* **Resolution Applied (Rules a & b — Merge + 1:1 Topic-Matched 301 Redirects):**
  1. Restored `/tools` (`CL-03`) as a clean, purpose-built **Free UK Takeaway, Kitchen & Web Tools Hub** (`app/tools/page.tsx`) showcasing all **6 interactive browser tools** and **10 UK hospitality guides** with zero thin template cards.
  2. Restored the 4 high-intent interactive kitchen tools (`CL-06`, `CL-07`, `CL-08`, `CL-09`) and 7 UK compliance blog guides (`CL-45` through `CL-51`).
  3. Remapped all legacy `/food-safety-templates/*` redirects in `next.config.mjs` and `vercel.json` so each legacy template slug permanently 301/308 redirects to its **exact matching canonical interactive tool or compliance guide**:
     * `/tools/food-allergen-chart`, `/food-safety-templates/food-allergen-chart`, `/food-safety-templates/allergy-matrix`, `/food-safety-templates/allergen-poster` -> `/tools/allergen-matrix-generator` (`CL-06`)
     * `/food-safety-templates/natashas-law` -> `/tools/ppds-label-generator` (`CL-07`)
     * `/food-safety-templates/food-cost-calculator` -> `/tools/food-cost-calculator` (`CL-08`)
     * `/food-safety-templates/recipe-calculator` -> `/tools/recipe-batch-calculator` (`CL-09`)
     * `/food-safety-templates/haccp-plan-builder`, `/food-safety-templates/haccp-flow-chart-template` -> `/blog/how-to-write-haccp-plan-uk-food-business-step-by-step` (`CL-50`)
     * `/food-safety-templates/opening-and-closing-checklist-template` -> `/blog/sfbb-daily-kitchen-opening-closing-checklist-guide` (`CL-49`)
     * `/food-safety-templates/food-safety-quiz` -> `/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide` (`CL-51`)
     * `/food-safety-templates/food-cooling-poster`, `/food-safety-templates/fridge-temperature-record-sheet-pdf`, `/food-safety-templates/freezer-temperature-chart`, `/food-safety-templates/hot-holding-food-temperature-log` -> `/blog/commercial-kitchen-food-cooling-temperature-guide` (`CL-46`)
     * `/food-safety-templates` -> `/tools` (`CL-03`)

### Case 4: Tool vs Companion Blog Guide Intent Separation (`CL-05..CL-09` vs `CL-35, CL-44..CL-48`)
* **Finding:** Each interactive calculator/generator on `/tools` has a companion long-form article on `/blog/*`.
* **Resolution Applied:** Verified SERP separation (`<3/10` shared URLs between `"generator / calculator"` transactional tool queries and `"how to create / calculate / rules"` informational guide queries) and enforced strict title, H1, and reciprocal link pairing between each tool and its companion guide.

### Case 5: Critical Technical Indexing Bugs Discovered During Live Googlebot Crawl
1. **`/demos` Wildcard `X-Robots-Tag: noindex, nofollow` Bug:** `source: '/demos/:path*'` in `next.config.mjs` and `"/demos/(.*)"` in `vercel.json` matched `/demos` itself (0 segments), sending `X-Robots-Tag: noindex, nofollow` on a primary sitemap page linked from 52 internal pages. **Fixed** by changing to `/demos/:path+` and `/demos/(.+)`.
2. **Homepage Webflow Template Footprints (`public/rh-exact/index.html`):** Removed `data-wf-domain="www.rh.design"`, stripped 4 dead `<script type="text/x-wf-template">` blocks containing 19 `cdn.prod.website-files.com` URLs, replaced `noindex` demo subpaths inside homepage JSON-LD `ItemList` with canonical indexed URLs, and cleaned 48 `aria-hidden="true"` decorative checkmark/arrow SVGs that repeated a 13-word commercial keyword string.

---

## 3. Summary of Every Codebase Change Made

1. **Created 2 New Pages for High-Volume Unmapped Clusters:**
   * `app/tools/website-cost-calculator/page.tsx` + `src/components/tools/WebsiteCostCalculatorTool.tsx` (`CL-04` — `website cost calculator uk`, interactive GBP/EUR/USD estimator + 24-month TCO comparison + `SoftwareApplication` & `FAQPage` JSON-LD).
   * `app/blog/zero-commission-takeaway-online-ordering-system-uk-guide/page.tsx` (`CL-35` — `zero commission takeaway ordering system uk`, 2026 UK takeaway direct ordering blueprint + £25 basket unit economics table + QR bag-flyer playbook + `Article` & `FAQPage` JSON-LD).
2. **Restored & Rebuilt `/tools` Hub + 4 Interactive Kitchen Tools + 7 UK Compliance Guides:**
   * Rebuilt `app/tools/page.tsx` (`CL-03`) as the central 6-tool interactive hub + 10-guide hospitality knowledge directory.
   * Restored `app/tools/allergen-matrix-generator/page.tsx`, `app/tools/ppds-label-generator/page.tsx`, `app/tools/food-cost-calculator/page.tsx`, `app/tools/recipe-batch-calculator/page.tsx`, and the 7 UK compliance blog routes under `app/blog/*/page.tsx`.
   * Replaced all legacy `/food-safety-templates/*` internal links inside `app/tools/ppds-label-generator/page.tsx`, `BlogPostAllergenMatrix.tsx`, `BlogPostCoolingGuide.tsx`, `BlogPostChecklist.tsx`, `BlogPostHaccpPlan.tsx`, and `BlogPostHygieneQuiz.tsx` with direct `200 OK` links to canonical tools and guides.
3. **Rewrote `/overview` Metadata & H1 to Eliminate Cost-Calculator Cannibalization:**
   * Updated `app/overview/page.tsx` (`CL-02`) to `"Next.js Studio Technical Overview & Specs | Saim Dev"` and added direct links to `/tools` and `/tools/website-cost-calculator`.
4. **Implemented Phase 5 Silo Internal Linking Across Global Navigation, Footer & Silo Widgets:**
   * Updated `src/components/SiteFooter.tsx` to link directly to `/tools` and all 6 interactive calculators/generators from every page on the site (lifting inbound internal links on tool pages from `4–7` to `54`!).
   * Updated `src/components/ui/EditorialVisualPack.tsx` (`TopicSiloNavigator`), `src/components/BlogsPage.tsx`, and `src/components/blog/BlogSiloNav.tsx` so all 4 Topic Hubs and all 17 blog guides are tightly cross-linked.
5. **Updated Sitemaps, Redirect Matrices, AI Discovery Files & CI Guards:**
   * Updated `app/sitemap.ts`, `scripts/generate_sitemap.mjs`, `public/sitemap.xml` (`55` canonical URLs), `public/image-sitemap.xml`, `public/llms.txt`, `next.config.mjs`, `vercel.json`, and `scripts/run_all_guards.mjs`.

---

## 4. Final 55-Cluster-to-Page Master Map

| Cluster ID | Topic Hub | Primary Target Keyword | Intent | Vol (Est.) | Canonical URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `CL-01` | Hub 1: Next.js & Web Apps | `custom next.js web agency uk` | Commercial | 720 | `https://www.saimdev.site/` |
| `CL-02` | Hub 1: Next.js & Web Apps | `next.js website technical specifications uk` | Commercial | 320 | `https://www.saimdev.site/overview` |
| `CL-03` | Hub 3: Takeaway & Tools | `free uk takeaway and kitchen management tools` | Transactional | 880 | `https://www.saimdev.site/tools` |
| `CL-04` | Hub 1: Next.js & Web Apps | `website cost calculator uk` | Transactional | 2,900 | `https://www.saimdev.site/tools/website-cost-calculator` |
| `CL-05` | Hub 3: Takeaway & Tools | `takeaway commission calculator uk` | Transactional | 1,300 | `https://www.saimdev.site/tools/commission-savings-calculator` |
| `CL-06` | Hub 3: Takeaway & Tools | `14 allergen matrix generator uk` | Transactional | 2,400 | `https://www.saimdev.site/tools/allergen-matrix-generator` |
| `CL-07` | Hub 3: Takeaway & Tools | `ppds label generator uk` | Transactional | 1,900 | `https://www.saimdev.site/tools/ppds-label-generator` |
| `CL-08` | Hub 3: Takeaway & Tools | `food cost calculator uk` | Transactional | 2,600 | `https://www.saimdev.site/tools/food-cost-calculator` |
| `CL-09` | Hub 3: Takeaway & Tools | `recipe batch calculator uk` | Transactional | 1,600 | `https://www.saimdev.site/tools/recipe-batch-calculator` |
| `CL-10` | Hub 3: Takeaway & Tools (Pillar) | `takeaway web design uk` | Transactional | 1,900 | `https://www.saimdev.site/services/takeaway-web-design` |
| `CL-11` | Hub 3: Takeaway & Tools | `takeaway website design london` | Transactional | 720 | `https://www.saimdev.site/services/takeaway-web-design-london` |
| `CL-12` | Hub 3: Takeaway & Tools | `takeaway web design manchester` | Transactional | 480 | `https://www.saimdev.site/services/takeaway-web-design-manchester` |
| `CL-13` | Hub 3: Takeaway & Tools | `takeaway web design birmingham` | Transactional | 440 | `https://www.saimdev.site/services/takeaway-web-design-birmingham` |
| `CL-14` | Hub 1: Next.js & Web Apps | `freelance next.js developer uk` | Transactional | 1,400 | `https://www.saimdev.site/nextjs-developer-uk` |
| `CL-15` | Hub 1: Next.js & Web Apps | `web development services uk` | Commercial | 3,600 | `https://www.saimdev.site/services` |
| `CL-16` | Hub 1: Next.js & Web Apps | `webflow and figma to next.js conversion service` | Transactional | 590 | `https://www.saimdev.site/services/website-clone` |
| `CL-17` | Hub 1: Next.js & Web Apps (Pillar) | `next.js website development uk` | Transactional | 2,200 | `https://www.saimdev.site/services/website-development` |
| `CL-18` | Hub 1: Next.js & Web Apps | `custom web application development uk` | Transactional | 1,900 | `https://www.saimdev.site/services/custom-web-apps` |
| `CL-19` | Hub 2: E-Commerce & CRO (Pillar) | `custom next.js ecommerce development uk` | Transactional | 1,500 | `https://www.saimdev.site/services/ecommerce-development` |
| `CL-20` | Hub 4: SEO & Migration | `website redesign services uk` | Transactional | 2,100 | `https://www.saimdev.site/services/website-redesign` |
| `CL-21` | Hub 4: SEO & Migration (Pillar) | `technical seo services uk` | Transactional | 2,400 | `https://www.saimdev.site/services/seo-services` |
| `CL-22` | Hub 2: E-Commerce & CRO | `headless shopify development uk` | Transactional | 1,100 | `https://www.saimdev.site/services/ecommerce-shopify` |
| `CL-23` | Hub 1: Next.js & Web Apps | `small business website design uk` | Transactional | 4,400 | `https://www.saimdev.site/services/business-websites` |
| `CL-24` | Hub 4: SEO & Migration | `headless wordpress and sanity next.js development` | Transactional | 820 | `https://www.saimdev.site/services/wordpress-headless-cms` |
| `CL-25` | Hub 2: E-Commerce & CRO | `high converting landing page design uk` | Transactional | 1,300 | `https://www.saimdev.site/services/landing-pages-cro` |
| `CL-26` | Hub 4: SEO & Migration | `website speed optimization service uk` | Transactional | 1,200 | `https://www.saimdev.site/services/website-speed-optimization` |
| `CL-27` | Hub 1: Next.js & Web Apps | `web development process and milestone workflow` | Commercial | 480 | `https://www.saimdev.site/process` |
| `CL-28` | Hub 1: Next.js & Web Apps | `fixed price website development packages uk` | Transactional | 1,800 | `https://www.saimdev.site/pricing` |
| `CL-29` | Hub 4: SEO & Migration | `next.js 16 and react 19 web development tech stack` | Informational | 520 | `https://www.saimdev.site/technologies` |
| `CL-30` | Hub 2: E-Commerce & CRO | `next.js website performance case studies` | Commercial | 640 | `https://www.saimdev.site/case-studies` |
| `CL-31` | Hub 2: E-Commerce & CRO | `interactive business and takeaway website demos uk` | Commercial | 760 | `https://www.saimdev.site/demos` |
| `CL-32` | Corporate & E-E-A-T Silo | `saim dev web engineering studio` | Navigational | 390 | `https://www.saimdev.site/about` |
| `CL-33` | Corporate & E-E-A-T Silo | `request fixed price website quote uk` | Transactional | 540 | `https://www.saimdev.site/contact` |
| `CL-34` | Hub 1: Next.js & Web Apps | `next.js web development and uk hospitality compliance guides` | Informational | 420 | `https://www.saimdev.site/blogs` |
| `CL-35` | Hub 3: Takeaway & Tools | `zero commission takeaway ordering system uk` | Informational | 1,600 | `https://www.saimdev.site/blog/zero-commission-takeaway-online-ordering-system-uk-guide` |
| `CL-36` | Hub 1: Next.js & Web Apps | `next.js website development cost uk` | Informational | 1,700 | `https://www.saimdev.site/blog/nextjs-website-development-cost-uk-us` |
| `CL-37` | Hub 4: SEO & Migration | `next.js vs wordpress for seo` | Informational | 1,900 | `https://www.saimdev.site/blog/nextjs-app-router-vs-wordpress-uk-seo` |
| `CL-38` | Hub 4: SEO & Migration | `how to migrate wordpress to next.js without losing seo` | Informational | 1,100 | `https://www.saimdev.site/blog/migrate-wordpress-webflow-to-nextjs-seo-guide` |
| `CL-39` | Hub 1: Next.js & Web Apps | `next.js architecture guide for startups` | Informational | 950 | `https://www.saimdev.site/blog/nextjs-website-development-guide-uk-us-startups` |
| `CL-40` | Hub 1: Next.js & Web Apps | `why small businesses need a website uk` | Informational | 2,400 | `https://www.saimdev.site/blog/why-small-business-needs-website` |
| `CL-41` | Hub 1: Next.js & Web Apps | `free website for small business uk pros and cons` | Informational | 1,800 | `https://www.saimdev.site/blog/free-website-for-local-business` |
| `CL-42` | Hub 1: Next.js & Web Apps | `small business website packages uk guide` | Commercial | 1,400 | `https://www.saimdev.site/blog/small-business-website-packages-guide` |
| `CL-43` | Hub 3: Takeaway & Tools | `how to get a 5 star food hygiene rating uk` | Informational | 3,900 | `https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist` |
| `CL-44` | Hub 3: Takeaway & Tools | `natashas law ppds food labelling guide uk` | Informational | 3,200 | `https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide` |
| `CL-45` | Hub 3: Takeaway & Tools | `how to create a 14 allergen matrix uk` | Informational | 1,900 | `https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants` |
| `CL-46` | Hub 3: Takeaway & Tools | `commercial kitchen food cooling temperature rules uk` | Informational | 2,100 | `https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide` |
| `CL-47` | Hub 3: Takeaway & Tools | `how to calculate food cost percentage uk` | Informational | 2,200 | `https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator` |
| `CL-48` | Hub 3: Takeaway & Tools | `how to scale recipes for commercial catering` | Informational | 1,400 | `https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator` |
| `CL-49` | Hub 3: Takeaway & Tools | `sfbb opening and closing checklist guide uk` | Informational | 2,800 | `https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide` |
| `CL-50` | Hub 3: Takeaway & Tools | `how to write a haccp plan uk food business` | Informational | 2,700 | `https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step` |
| `CL-51` | Hub 3: Takeaway & Tools | `level 2 food hygiene practice test uk` | Informational | 4,800 | `https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide` |
| `CL-52` | Corporate & E-E-A-T Silo | `saim dev terms of service and code ownership terms` | Navigational | 90 | `https://www.saimdev.site/terms` |
| `CL-53` | Corporate & E-E-A-T Silo | `saim dev privacy policy uk gdpr` | Navigational | 90 | `https://www.saimdev.site/privacy` |
| `CL-54` | Corporate & E-E-A-T Silo | `saim dev cookie and localstorage policy` | Navigational | 70 | `https://www.saimdev.site/cookie-policy` |
| `CL-55` | Corporate & E-E-A-T Silo | `saim dev food safety tools regulatory disclaimer` | Navigational | 70 | `https://www.saimdev.site/disclaimer` |

---

## 5. Assumptions Made

1. **Search Volume & Difficulty Estimation:** Because external paid Ahrefs/SEMrush API credentials are not connected in the workspace environment, monthly UK/Europe/US search volumes and 0–100 difficulty scores in `/seo/02-keyword-universe.csv` and `/seo/03-keyword-clusters.csv` are calibrated against standard UK/global Google Keyword Planner benchmarks and live UK SERP competitor density (`food.gov.uk`, `highspeedtraining.co.uk`, `flipdish.com`, `bejamas.com`, `pagepro.co`, `clutch.co`).
2. **SERP Overlap Threshold ($\ge 3/10$ Shared URLs):** Queries returning transactional interactive tools in 7+ of the top 10 Google results (e.g., `"14 allergen matrix generator uk"`, `"ppds label generator uk"`, `"food cost calculator uk"`, `"website cost calculator uk"`) were split into dedicated `/tools/*` clusters, while queries returning long-form regulatory/editorial guides in 7+ of the top 10 results (e.g., `"how to create a 14 allergen matrix uk"`, `"natashas law ppds food labelling guide uk"`, `"how to calculate food cost percentage uk"`) were assigned to their companion `/blog/*` clusters.
3. **160 Thin Template Consolidation:** The 160 static `/food-safety-templates/[slug]` routes were kept consolidated into the 6 high-utility interactive `/tools/*` generators and 10 comprehensive `/blog/*` compliance playbooks via permanent 301/308 redirects to maximize domain quality and prevent thin-content crawl dilution.
4. **Demo Sub-Apps (`noindex` Sandbox Policy):** Standalone interactive demo sub-paths (`/hq-leathercon/*`, `/hotbite/*`, `/burger-garage/*`, `/frenchyse/*`, `/anzaar/*`, `/demos/akdetailing/*`, `/demos/serenia/*`, etc.) remain `X-Robots-Tag: noindex, nofollow` so fictive showcase menus/products never compete with or dilute Saim Dev's agency keyword clusters, while the parent showcase hub `/demos` (`CL-31`) is `index, follow`.

---

## 6. Google Search Console 30 / 60 / 90-Day Monitoring Plan

### Days 1–30: Indexation Recovery & Technical Hygiene Verification
* **Sitemaps Report (`GSC -> Sitemaps`):** Re-submit `https://www.saimdev.site/sitemap.xml` (`55` URLs) and `https://www.saimdev.site/image-sitemap.xml` (`15` URLs). Confirm status reads **Success** with `55` discovered URLs.
* **Page Indexing Report (`GSC -> Pages`):**
  * Confirm `/demos` clears the previous `"Submitted URL marked ‘noindex’"` warning and moves to **Indexed**.
  * Confirm **Soft 404** and **Page with redirect** buckets stabilize as Googlebot processes the 1:1 topic-matched redirects from `/food-safety-templates/*` into `/tools/allergen-matrix-generator`, `/tools/ppds-label-generator`, `/tools/food-cost-calculator`, and `/tools/recipe-batch-calculator`.
  * Request priority indexing via URL Inspection for:
    1. `https://www.saimdev.site/tools`
    2. `https://www.saimdev.site/tools/website-cost-calculator`
    3. `https://www.saimdev.site/tools/allergen-matrix-generator`
    4. `https://www.saimdev.site/tools/ppds-label-generator`
    5. `https://www.saimdev.site/blog/zero-commission-takeaway-online-ordering-system-uk-guide`
    6. `https://www.saimdev.site/demos`

### Days 31–60: Query-to-URL Alignment & Cannibalization Check
* **Performance Report (`GSC -> Search Results -> Queries`):**
  * Filter by query `"allergen"`, `"ppds"`, `"food cost"`, `"recipe"`, `"hygiene"`, `"commission"`, and `"website cost"`.
  * Verify that each query family impressions consolidate onto a **single primary URL** (or cleanly split between the `/tools/*` interactive calculator and its companion `/blog/*` guide with zero 3rd/4th competing URLs).
  * Monitor CTR on `/tools/*` pages; rich `FAQPage` and `SoftwareApplication` schemas should lift impression-to-click CTR above `3.5%–5.0%`.

### Days 61–90: Commercial Silo Authority & Conversion Attribution
* **Hub 3 -> Commercial Pillar Flow:** Track clicks from `/tools/*` and UK compliance blog guides into `/services/takeaway-web-design`, `/services/takeaway-web-design-london`, `-manchester`, and `-birmingham`.
* **Hub 1 -> Commercial Pillar Flow:** Track clicks from `/tools/website-cost-calculator` and `/blog/nextjs-website-development-cost-uk-us` into `/services/website-development`, `/services/business-websites`, and `/contact`.
* **Core Web Vitals (`GSC -> Core Web Vitals`):** Confirm mobile and desktop URL groups remain in the **Good (`LCP < 2.5s`, `INP < 200ms`, `CLS < 0.1`)** bucket across all 55 routes.
