# Phase 6 — Programmatic SEO & Free Commercial Tools Roadmap

**Skill Applied:** `seo-programmatic` (`risk: critical`)  
**Hard Scope Constraint (User Directive):** **"ye kam 160 tools ko chor k baqi sab pr krna h"**  
Accordingly, SaimDev's existing 160 food-safety template routes (`/food-safety-templates/*`) and 4 UK food-safety tools (`/tools/ppds-label-generator`, `/tools/food-cost-calculator`, `/tools/allergen-matrix-generator`, `/tools/recipe-batch-calculator`) are **completely frozen/excluded** from expansion. Programmatic and free-tool strategy below applies strictly to **commercial B2B web engineering & hospitality ROI utilities**.

---

## 1. Anti-Bloat & Programmatic Quality Gate Assessment (`seo-programmatic` Audit)

Before launching any programmatic URL or tool, SaimDev must repair current indexation hygiene leaks discovered during live crawl testing:

1. **Immediate Index-Bloat Hazard Verified (`[200]` Unblocked Clone Trees):**
   - `public/hq-leathercon/**` (`1,510` static HTML files with external canonicals and 500-char menu `<title>`s), `/anzaar/*.html` (6 files), `/frenchyse/*.html` (6 files), `/burger-garage/*.html` (9 files), `/hotbite/*.html` (3 files), and `/rh-clone/index.html` currently serve HTTP `200` without `X-Robots-Tag: noindex, nofollow`.
   - At `DA 1 / DR 0`, wasting Googlebot crawl budget on 1,500+ non-SaimDev showcase clone pages severely suppresses crawling of revenue pages (`/services/*`, `/pricing`, `/overview`).
2. **Ban on "Mad-Libs" City Doorway Pages:**
   - SaimDev already has 3 UK takeaway city pages (`london`, `birmingham`, `manchester`) containing authentic borough/postcode/FHRS local benchmarks.
   - **Rule:** Do **NOT** programmatically spin 30–50 copy-pasted UK/US city pages (`takeaway-web-design-leeds`, `web-design-austin`, etc.) unless each location carries >40% genuinely distinct local market data, unique FAQs, and verified case proof. Scale via **genuine interactive utilities**, not thin geographic clones.

---

## 2. Evaluated Free Commercial Tools Roadmap (Zero Thin Pages)

Every tool proposed below provides real client-side math, clear UX in SaimDev's GSAP dark/lime design system (`#050505` / `#0D0D0D` / `#BAFF00`), Schema.org `WebApplication` + `FAQPage` markup, and a natural productized funnel into fixed-price services.

| Priority | Tool Concept & Target URL | Search Demand / Intent Evidence | Unique Value vs Competitors | Technical Build Status & Effort | Design & GSAP Compliance |
|---|---|---|---|---|---|
| **P1 (Build Now — Phase 10)** | **Takeaway Commission Savings Calculator**<br>`/tools/commission-savings-calculator` | Captures `takeaway commission calculator uk` & `just eat commission calculator` (`source=websearch`); **fixes verified 404 link on `/overview` L827!** | Compares exact monthly Just Eat / Deliveroo / Uber Eats commission bleed (14%–35%) against SaimDev's one-off £250 direct site with venue presets & payback period — zero signup gate or recurring SaaS trap | **Low Effort / High Impact:** `src/components/CommissionSavingsCalculator.tsx` already built and verified! Needs clean Next.js route wrapper with `RhHeader`, modern GSAP hero (`[data-gsap-reveal]`), methodology cards, FAQ accordion, and CTA to `/services/takeaway-web-design` | Uses `RhHeader`, `#000000`/`#0D0D0D`/`#F5F5F7` contrast rhythm, `#BAFF00` lime highlights, and GSAP scroll reveals (`RhGlobalGsap`) |
| **P1 (Already Live — Index & Fix)** | **Interactive Project Scope & Cost Estimator**<br>`/overview` | Captures fixed-price Next.js scoping intent (`ProjectScopeEstimator` + WP/Wix vs SaimDev TCO table, `2,674` words) | Interactive stack selector + WordPress/Wix/Agency TCO breakdown | **Quick Win:** Add `/overview` to `scripts/generate_sitemap.mjs`, fix its 2 broken links (`L827`, `L833`), and add `WebPage` + `FAQPage` + `BreadcrumbList` JSON-LD | Already modernized; preserve layout & GSAP animations untouched |
| **P2 (Phase 2 Backlog — High US/UK Value)** | **WordPress vs Next.js Speed & Annual TCO Calculator**<br>`/tools/wordpress-vs-nextjs-calculator` *(Future Build)* | Targets founders evaluating `wordpress to nextjs migration cost` & `monthly agency retainer vs fixed fee` (`source=websearch`) | Interactive slider computing 3-year WordPress maintenance (plugins, WP Engine hosting, security patches, developer retainers, revenue lost to slow LCP) vs one-off fixed-price Next.js build (`£250–£790` / `$300–$999`) | **Medium Effort (1–2 days):** Build client React calculator + `WebApplication` JSON-LD + US (`$`) / UK (`£`) toggle matching `content/plans.ts` | Styled with GSAP `[data-gsap-stagger]`, interactive toggle pills, re-using brand design tokens |
| **P3 (Phase 3 Backlog — D2C Utility)** | **Shopify App Bloat vs Headless Savings Estimator**<br>`/tools/shopify-app-savings-calculator` *(Future Build)* | Targets `headless shopify cost vs liquid apps` (`source=websearch`) | Lets merchants tick common Shopify apps (reviews, subscriptions, bundle upsells, search filters, page builders) costing `$150–$600/mo` and see break-even timeline vs `/services/ecommerce-shopify` | **Medium Effort (1–2 days):** Pure client calculator with interactive checklist + USD/GBP switch + CTA to `/services/ecommerce-shopify` | Same dark/lime architectural token system (`#0D0D0D`, `#BAFF00`) |

---

## 3. Internal Linking & Indexation Architecture for New Commercial Tools

- **Rule 1 (Clean Separation from Food-Safety Silo):** `/tools/commission-savings-calculator` MUST use `<RhHeader />` and `<SiteFooter />` rather than `<ToolsSiloNav />` (which displays the 4 kitchen compliance tabs) so hospitality tech buyers see commercial engineering positioning, NOT food hygiene inspection checklists.
- **Rule 2 (Bidirectional Commercial Linking):**
  - Inbound links to `/tools/commission-savings-calculator` from `/overview`, `/services/takeaway-web-design`, `/services/takeaway-web-design-london`, `/services/takeaway-web-design-birmingham`, `/services/takeaway-web-design-manchester`, and future comparison articles.
  - Outbound CTAs from `/tools/commission-savings-calculator` -> `/services/takeaway-web-design`, `/pricing`, and `/hotbite/index.html` (live ordering demo).
- **Rule 3 (Automated Guardrail Verification):** Adding any new commercial route must pass all 11 CI checks in `scripts/run_all_guards.mjs` and regenerate `public/sitemap.xml` automatically via `npm run prebuild`.
