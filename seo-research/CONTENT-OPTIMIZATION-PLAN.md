# Phase 8 — Content Optimization Plan & High-Priority Content Briefs

**Scope:** Non-160 commercial service pages, calculators, flagship pages, and commercial blog strategy targeting **United States** and **United Kingdom** buyers (excluding `/food-safety-templates/*` and the 4 kitchen compliance tools).

---

## Part A — Optimization Matrix for Existing Non-160 Pages

| Priority | Page URL | Specific Issues Identified | Required Optimization Actions |
|---|---|---|---|
| **High** | `/tools/commission-savings-calculator` *(New Page)* | `CommissionSavingsCalculator.tsx` only lives inside city service pages; `/overview:827` points here and `404`s | Ship dedicated Next.js wrapper matching dark/lime UI & GSAP `[data-gsap-reveal]`, interactive presets, formula methodology, FAQ accordion, `WebApplication` + `BreadcrumbList` + `FAQPage` JSON-LD |
| **High** | `/overview` | Missing from `sitemap.xml`, lacks page-level JSON-LD, broken links on `:827` & `:833` | Add `WebPage` + `FAQPage` + `BreadcrumbList` schema; fix broken tool links; index via `scripts/generate_sitemap.mjs` |
| **High** | `/services/wordpress-headless-cms` | `seoDescription` is `158` chars (truncated); schema lacks `United States` | Trim description to `<=155` chars; add `United States` to `serviceSchema.ts` `areaServed` & explicit `robots` metadata |
| **High** | `/services/takeaway-web-design-london` | Meta description is `156` chars (`>155`); lacks link to standalone commission calculator | Trim description to `<=155` chars; add explicit US/UK separation and link to `/tools/commission-savings-calculator` |
| **High** | `/services/takeaway-web-design-birmingham` | Meta description is `159` chars (`>155`); `:205` broken `/food-cost-calculator`; `:333` `308` redirect | Trim description to `<=155` chars; fix broken links `:205` & `:333` cleanly |
| **High** | `/` (`public/rh-exact/index.html`) | Meta description `119` chars (too short, omits US + SaaS/apps); schema `areaServed` omits `US`; `squire-logo.svg` wrong `alt` | Expand meta description to `~140–150` chars mentioning UK & US Next.js engineering, headless Shopify & direct ordering; add `US` to `areaServed`; fix `squire-logo.svg` alt |
| **Medium** | `/pricing` | USD rates modeled in `content/plans.ts` (`$300/$500/$999`) are under-signaled in schema (`priceCurrency: GBP` only) and `robots` omitted | Add explicit `robots: { index: true, follow: true }`; document USD offer parity in backlog briefs without disrupting fixed £ anchor pricing |
| **Medium** | `/blog/why-small-business-needs-website` | Meta description `159` chars (`>155`) | Trim meta description to `<=155` chars cleanly |
| **Medium** | `/nextjs-developer-uk` vs `/services/website-development` | Potential keyword overlap on Next.js fixed-price builds | Lock `/nextjs-developer-uk` onto *freelance developer / VAT / direct hire* intent and `/services/website-development` onto *agency multi-page UK+US flagship engineering* |
| **Low** | `/services/ecommerce-shopify`, `/services/website-clone`, `/services/custom-web-apps` | Mostly UK-only framing despite global/US demand and `US$` readiness | Add US USD context (`$300–$1,800+`) in Backlog Sprints 2–3 and fix `public/llms.txt:37` misrouting |

---

## Part B — 6 Detailed 11-Point Content Briefs (Highest Priority Opportunities)

### Brief 1 — Interactive Commercial Calculator Page (Build Now in Phase 10)
1. **Primary Keyword:** `takeaway commission calculator uk` (`source=websearch`)
2. **Secondary Keywords:** `just eat commission calculator`, `deliveroo fee savings calculator`, `uber eats commission savings calculator uk`, `direct takeaway ordering roi calculator`
3. **Search Intent:** Commercial Investigation (Utility-First Tool Intent)
4. **SERP Analysis:** Competitors bury basic percentage estimators behind lead gates or tie savings claims to £79–£149/month SaaS retainers. Google rewards an instant, interactive browser tool above the fold paired with concise payback math and FAQs.
5. **Suggested Title (`<=60` chars):** `Takeaway Commission Savings Calculator | 0% Fee ROI | Saim Dev` *(Wait: 60 chars — keep crisp: `Takeaway Commission Calculator UK | 0% Fees | Saim Dev` = 54 chars)*
6. **H1 & H2 Structure:**
   - **H1:** Stop Paying 30% Takeaway App Commissions. Calculate Your Direct Savings.
   - **H2:** Interactive UK Takeaway Commission Recovery Calculator *(mounts `<CommissionSavingsCalculator />`)*
   - **H2:** How Third-Party Delivery Commission Math Eats Takeaway Net Margin
   - **H2:** Break-Even Math: £250 One-Off Direct Site vs Ongoing SaaS Fees
   - **H2:** Commission Savings & Direct Ordering FAQs
7. **Competitor Weaknesses:** `dishonline.co.uk` and `orderingdirect.co.uk` charge recurring monthly SaaS fees and retain platform control; no competitor shows payback time vs a one-off £250 bespoke Next.js build.
8. **Unique Content Angle:** Instant click presets (`Fish & Chips`, `Balti / Curry House`, `Smash Burger`, `Artisan Pizza`), transparent fee math (`14%–35%`), zero email wall, and direct 100% source code ownership comparison.
9. **Internal Linking Targets:** `/services/takeaway-web-design`, `/services/takeaway-web-design-london`, `/services/takeaway-web-design-birmingham`, `/services/takeaway-web-design-manchester`, `/pricing`, `/hotbite/index.html` (`Live Demo`).
10. **Schema Recommendations:** `WebApplication` (`applicationCategory: BusinessApplication`, `isAccessibleForFree: true`, `offers: £0`) + `BreadcrumbList` + `FAQPage` (`JSON-LD`).
11. **Conversion Strategy:** Live annual savings counter dynamically reinforces payback speed, leading directly into primary CTA ("Launch Your £250 Direct Site" -> `/contact` + WhatsApp preview request) and secondary live food ordering demo test (`/hotbite/index.html`).

---

### Brief 2 — WordPress to Next.js Migration Cost & 301 SEO Playbook (Supporting Article — US & UK)
1. **Primary Keyword:** `wordpress to nextjs migration cost` (`source=websearch`)
2. **Secondary Keywords:** `wordpress to nextjs migration service`, `wordpress to nextjs 301 redirects seo`, `nextjs vs wordpress speed cost`, `headless wordpress nextjs small business`
3. **Search Intent:** Commercial Investigation (Budget + Risk Evaluation)
4. **SERP Analysis:** Results split between enterprise agencies hiding pricing (`focusreactive`, `kyln.digital`) and generic developer tutorials lacking 301 redirect risk checklists. AI Overviews synthesize average price tiers cleanly when formatted in HTML comparison tables.
5. **Suggested Title (`<=60` chars):** `WordPress to Next.js Migration Cost & 301 SEO Guide` *(51 chars)*
6. **H1 & H2 Structure:**
   - **H1:** WordPress to Next.js Migration Cost: Real Budgets (`£` & `$`) Without Breaking SEO
   - **H2:** WordPress Maintenance TCO vs Fixed-Price Next.js 16 Builds
   - **H2:** Realistic Migration Pricing Tiers (UK `£390–£1,500` vs US `$500–$1,800` vs Agency Retainers)
   - **H2:** What Actually Breaks SEO During Migration (And Our 301 + Schema Checklist)
   - **H2:** Headless Sanity / WPGraphQL vs Pure Static Next.js: Which Fits Your Team?
7. **Competitor Weaknesses:** Over-technical guides ignore business ROI; big agencies refuse sub-$5k transparency.
8. **Unique Content Angle:** First-hand comparison anchored by fixed UK (`£`) / US (`$`) pricing from `content/plans.ts` and an exact step-by-step zero-downtime DNS & `next.config.mjs` redirect verification workflow.
9. **Internal Linking Targets:** `/services/wordpress-headless-cms`, `/services/website-redesign`, `/overview`, `/pricing`.
10. **Schema Recommendations:** `Article` (`BlogPosting`) + `FAQPage` + `BreadcrumbList`.
11. **Conversion Strategy:** Inline sticky benchmark table + CTA to free staging migration scope via `/overview` (`ProjectScopeEstimator`) and `/services/wordpress-headless-cms`.

---

### Brief 3 — Just Eat & Deliveroo vs Own Takeaway Website Profit Guide (Supporting Article — UK)
1. **Primary Keyword:** `just eat alternative website uk` (`source=websearch`)
2. **Secondary Keywords:** `just eat vs own website`, `how to reduce deliveroo commissions uk`, `commission free takeaway ordering website`, `best direct ordering system for indian takeaway`
3. **Search Intent:** Commercial Investigation
4. **SERP Analysis:** Top-10 features aggregator complaints on Trustpilot/Reddit alongside SaaS ordering vendor blogs (`foodoo`, `dishonline`). Interactive calculator embeds + transparent £ profit scenarios win clicks.
5. **Suggested Title (`<=60` chars):** `Just Eat Alternative UK: Own Site Profit Math (£) | Saim Dev` *(59 chars)*
6. **H1 & H2 Structure:**
   - **H1:** Just Eat & Deliveroo vs Your Own Takeaway Website: Honest UK Profit Math
   - **H2:** Anatomy of a £32 Family Order (Commission, VAT, Bag Fee & Net Margin)
   - **H2:** Why Repeat Bag-QR Customers Never Needed an App Middleman
   - **H2:** Monthly SaaS Ordering Apps (`£80/mo`) vs £250 One-Off Next.js Ownership
   - **H2:** Handling 14 Statutory Allergens & Postcode Zones on Your Own Menu
7. **Competitor Weaknesses:** Food delivery SaaS vendors compare themselves only against Just Eat, hiding their own £960–£1,800/year recurring SaaS charges.
8. **Unique Content Angle:** Shows side-by-side 12-month cost (`Just Eat 30%` vs `SaaS Ordering App £99/mo + card fee` vs `SaimDev £250 one-off + Stripe direct`).
9. **Internal Linking Targets:** `/tools/commission-savings-calculator`, `/services/takeaway-web-design`, `/services/takeaway-web-design-london`, `/services/takeaway-web-design-birmingham`, `/hotbite/index.html`.
10. **Schema Recommendations:** `BlogPosting` + `FAQPage` + `BreadcrumbList`.
11. **Conversion Strategy:** Embedded link card straight into `/tools/commission-savings-calculator` + WhatsApp free menu mockup offer.

---

### Brief 4 — Webflow & Framer to Next.js 16 Rebuild Guide (Supporting Article — US & UK)
1. **Primary Keyword:** `webflow to nextjs migration service` (`source=websearch`)
2. **Secondary Keywords:** `1 to 1 website rebuild nextjs`, `export webflow to clean react code`, `stop paying webflow monthly hosting`, `figma to nextjs tailwind fixed price`
3. **Search Intent:** Commercial Investigation / Transactional
4. **SERP Analysis:** Top results are generic tutorial posts (`Webflow export limitations`) and vague agency pages. Very few offer a clear 1:1 animation-preserved rebuild guarantee with exact flat fee (`£1,500` / US equivalent).
5. **Suggested Title (`<=60` chars):** `Webflow & Framer to Next.js 16: Keep UI, Own Clean Code` *(55 chars)*
6. **H1 & H2 Structure:**
   - **H1:** Moving From Webflow or Framer to Next.js 16 Without Losing Animations
   - **H2:** Why Scaling Teams Hit Webflow CMS & Localization Paywalls
   - **H2:** How GSAP & ScrollTrigger Replicate IX2 Motion With Higher Lighthouse Scores
   - **H2:** Transparent 1:1 Port Timeline & Fixed-Price Source Ownership
7. **Competitor Weaknesses:** Export tools dump unmaintainable static HTML without Next.js routing, Metadata API, or structured JSON-LD.
8. **Unique Content Angle:** Proven on SaimDev's own architecture (`rh-exact` / GSAP / React 19 patterns) demonstrating zero visual regression alongside instant SSR SEO hygiene.
9. **Internal Linking Targets:** `/services/website-clone`, `/services/custom-web-apps`, `/demos`, `/pricing`.
10. **Schema Recommendations:** `TechArticle` + `FAQPage` + `BreadcrumbList`.
11. **Conversion Strategy:** Side-by-side "Interactive Live Demo" invitation + link directly to `/services/website-clone`.

---

### Brief 5 — Headless Shopify TCO & App-Fee Elimination Guide (US & UK D2C)
1. **Primary Keyword:** `headless shopify nextjs store fixed cost` (`source=websearch`)
2. **Secondary Keywords:** `replace expensive shopify apps nextjs`, `headless shopify developer affordable`, `shopify liquid slow lcp fix nextjs`
3. **Search Intent:** Commercial Investigation
4. **SERP Analysis:** Enterprise agencies (`avexdesigns.com`, `swankyagency.com`, `wemakewebsites`) quote `$40,000+` custom builds, leaving small 6-figure US/UK D2C stores thinking headless commerce is out of reach.
5. **Suggested Title (`<=60` chars):** `Headless Shopify With Next.js: Cut App Bloat Without $40k` *(57 chars)*
6. **H1 & H2 Structure:**
   - **H1:** Headless Shopify on a Practical Budget: Keep Shopify Admin, Ditch App Bloat
   - **H2:** The Hidden `$250–$600/mo` Shopify App Tax Slowing Your Liquid Theme
   - **H2:** What Should Stay in Shopify vs What Moves to Next.js Storefront API
   - **H2:** Custom Bundles, Filtering & Sub-Second PDPs Without Enterprise Retainers
7. **Competitor Weaknesses:** Incumbents over-engineer headless stacks for budgets below `$20k`, or fail to benchmark real Shopify App subscription savings.
8. **Unique Content Angle:** Focuses on surgical Storefront API decoupling targeting fast PDPs & zero monthly third-party bundle app fees.
9. **Internal Linking Targets:** `/services/ecommerce-shopify`, `/services/ecommerce-development`, `/case-studies`, `/overview`.
10. **Schema Recommendations:** `BlogPosting` + `BreadcrumbList` + `FAQPage`.
11. **Conversion Strategy:** ROI breakdown comparing 12 months of app fees vs fixed storefront rebuild + CTA to `/services/ecommerce-shopify`.

---

### Brief 6 — US & UK Core Service Landing Optimization (`nextjs-developer-uk` vs `website-development`)
1. **Primary Keyword:** `freelance nextjs developer uk fixed price` (for `/nextjs-developer-uk`) | `nextjs website development agency usa uk` (for `/services/website-development`)
2. **Secondary Keywords:** `hire nextjs developer fixed quote`, `nextjs business website cost usa`, `nextjs developer react 19 fixed fee`
3. **Search Intent:** Transactional / Commercial Investigation
4. **SERP Analysis:** Marketplaces (`Toptal`, `Upwork`) clutter SERPs while direct specialist freelancers (`madebyaris.com`) win via real code credibility + transparent fixed pricing + crisp Core Web Vitals proof.
5. **Suggested Title (`<=60` chars):** Keep `/nextjs-developer-uk` (`59` chars: `Freelance Next.js Developer UK | Fast Websites | Saim Dev`) & keep `/services/website-development` (`55` chars), differentiating body H1/subhead intent clearly.
6. **H1 & H2 Structure:** Differentiate `/nextjs-developer-uk` around direct solo-architect accountability (`£250–£790`, UK VAT-ready invoicing, 5–10 day sprint) while anchoring `/services/website-development` on multi-market UK + US agency delivery (`£` / `$` tiers, enterprise security, scalability).
7. **Competitor Weaknesses:** Generic agencies bundle bloat retainers (`£300/mo care plans`) or wait 2 weeks just to send a proposal.
8. **Unique Content Angle:** Interactive staging preview before final 50% milestone balance + 100% GitHub repository ownership handover.
9. **Internal Linking Targets:** `/overview` (`ProjectScopeEstimator`), `/pricing`, `/process`, `/services/wordpress-headless-cms`, `/services/website-speed-optimization`.
10. **Schema Recommendations:** Unified `ProfessionalService` + `Service` (`areaServed: GB, US, EU`) + `FAQPage` + `BreadcrumbList`.
11. **Conversion Strategy:** Interactive tier preview + direct WhatsApp / `/contact` discovery form with 24-hour response SLA.
