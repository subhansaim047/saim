# Phase 5 — Topical Authority & Content Clustering Map

**Skill Applied:** `seo-aeo-content-cluster`  
**Core Rule Enforced:** Never mix unrelated search intents into one SEO cluster. Separate **Direction A (SaimDev Web Engineering, Migration, Headless Commerce & Direct Hospitality Ordering — USA & UK)** cleanly from **Direction B (Legacy/Excluded 160 UK Food-Safety Templates & 4 Kitchen Compliance Calculators)**.

---

## 1. Strategic Separation Decision: Direction A vs Direction B

| Dimension | Direction A — Web Engineering & Commercial Takeaway Systems (USA & UK) | Direction B — UK Food-Safety Templates & Free Kitchen Utilities (**EXCLUDED FROM SCOPE**) |
|---|---|---|
| **Primary Routes** | `/`, `/overview`, `/pricing`, `/process`, `/nextjs-developer-uk`, `/services/*`, `/tools/commission-savings-calculator`, `/case-studies`, `/demos` | `/food-safety-templates/[slug]` (160 routes), `/tools`, `/tools/ppds-label-generator`, `/tools/food-cost-calculator`, `/tools/allergen-matrix-generator`, `/tools/recipe-batch-calculator`, 9 food-safety blogs |
| **User Intent** | Buying bespoke Next.js builds, WP migrations, headless Shopify stores, UI clones, or 0% commission takeaway websites | Hospitality managers downloading printable SFBB/HACCP charts, allergen matrices & recipe batch logs |
| **Domain Fit & Evidence** | 100% aligned with primary brand navigation (`Demos`, `Services`, `Pricing`, `About`), service schemas, and revenue (`£250–£1,500` / `$300–$1,800`) | High-impression top-of-funnel UK hospitality magnet *already built*; per user instruction (**"ye kam 160 tools ko chor k baqi sab pr krna h"**), **do NOT expand, rewrite, or mix these into agency clusters** |
| **Clean Bridge Policy** | Allow contextual one-way links *from* Direction B tools/blogs -> `/services/takeaway-web-design` and fix broken commercial links on `/overview` & `/services/takeaway-web-design-birmingham`. Do NOT force agency landing pages onto food-hygiene keywords or display food-hygiene nav bars on commercial dev calculators (`/tools/commission-savings-calculator`). | Kept completely isolated in `saim_templates.ts`, `core_metadata.json`, `page_plan.json` (unchanged). |

**Final Strategic Verdict:** Concentrate **100% of new SEO, AEO, schema, calculator, and editorial growth investment on Direction A** across 4 tight commercial Topic Pillars.

---

## 2. Direction A — Priority Topic Pillars & Content Cluster Architecture

### Pillar 1 — Commission-Free Direct Ordering Websites (UK Flagship + US Extension)
*Target Funnel:* Takeaway owners losing 20%–35% to Just Eat / Deliveroo / DoorDash.

- **Pillar Page (Commercial Hub):** [`/services/takeaway-web-design`](https://www.saimdev.site/services/takeaway-web-design)
  - *Primary Keyword:* `commission free takeaway website uk`
  - *Priority Tier:* **P1 (Highest Immediate ROI)**
- **Interactive Tool Hub (New High-Converting Asset):** `/tools/commission-savings-calculator`
  - *Primary Keyword:* `takeaway commission calculator uk`
  - *Role:* Utility magnet capturing mid-funnel owners comparing app commissions vs owned direct ordering.
- **Geo-Differentiated City Landing Pages (Already Live, Optimize Links/Meta):**
  - `/services/takeaway-web-design-london` (`takeaway web design london`)
  - `/services/takeaway-web-design-birmingham` (`takeaway web design birmingham`)
  - `/services/takeaway-web-design-manchester` (`takeaway web design manchester`)
- **Supporting Cluster Articles (Recommended P1/P2 Queue):**
  1. `Just Eat & Deliveroo vs Own Takeaway Website: Real UK Margin Math` -> links directly to `/tools/commission-savings-calculator` & `/services/takeaway-web-design` (**P1**)
  2. `How US Takeaways & Restaurants Replace 30% DoorDash Fees Without $200/mo SaaS` -> extends US reach into `takeaway-web-design` & `/pricing` (**P2**)

---

### Pillar 2 — WordPress / Webflow Migration & Fixed-Price Next.js Engineering (UK & US)
*Target Funnel:* SMB founders & tech leads stuck on slow WordPress/Elementor/Wix/Webflow sites with bloated plugin/app costs.

- **Pillar Page (Agency Engineering Hub):** [`/services/website-development`](https://www.saimdev.site/services/website-development) & [`/nextjs-developer-uk`](https://www.saimdev.site/nextjs-developer-uk)
  - *Differentiation Rule (Zero Cannibalization):* `/nextjs-developer-uk` owns UK freelance/fixed-quote specialist queries; `/services/website-development` owns broader UK + US full Next.js architecture builds; `/overview` owns interactive project scoping (`ProjectScopeEstimator`).
- **Core Service Spokes (P1):**
  - `/services/wordpress-headless-cms` (`wordpress to nextjs migration cost`)
  - `/services/website-clone` (`1 to 1 website rebuild nextjs`, `webflow to nextjs migration`)
  - `/services/website-redesign` (`small business website redesign cost uk`)
  - `/services/website-speed-optimization` (`next js website speed optimization service`)
- **Commercial Conversion Spokes:** `/pricing`, `/process`, `/overview`, `/contact`
- **Supporting Cluster Articles (Recommended P1/P2 Queue):**
  1. `WordPress to Next.js Migration Cost & 301 SEO Checklist (UK & US)` (**P1** -> supports `wordpress-headless-cms` & `website-redesign`)
  2. `Webflow & Framer to Clean Next.js Code: Fixed-Price Ownership vs Monthly SaaS` (**P1** -> supports `website-clone` & `/pricing`)
  3. `Why Small Businesses Are Leaving Monthly Website Subscriptions for Fixed-Fee Next.js` (**P2** -> upgrade alongside existing `/blog/why-small-business-needs-website`)

---

### Pillar 3 — Headless Shopify & Custom Stripe eCommerce (USA & UK)
*Target Funnel:* D2C founders outgrowing slow Shopify Liquid apps or bespoke product builders.

- **Pillar / Service Pages:**
  - `/services/ecommerce-shopify` (`headless shopify nextjs storefront`)
  - `/services/ecommerce-development` (`custom nextjs ecommerce stripe checkout`)
- **Supporting Interactive Proof:** `/demos` + `/case-studies` (referencing `HQ Leathercon` & `GAZU` safely via `noindex`ed visual sandboxes so demo HTML never steals SEO credit!).
- **Supporting Cluster Articles (P2):**
  1. `Headless Shopify TCO: Cutting $200+/mo Shopify App Bloat With Next.js Storefront API` (**P2**)
  2. `When to Build Custom Next.js + Stripe eCommerce Instead of Shopify Plus` (**P3**)

---

### Pillar 4 — Custom Web Apps, CRO Landing Pages & Code-Native Technical SEO (USA & UK)
*Target Funnel:* Founders launching SaaS MVPs, paid ads funnels, or technical SEO fixes.

- **Core Service Spokes:**
  - `/services/custom-web-apps` (`custom nextjs saas mvp developer fixed price`) — *fix `public/llms.txt` misrouting*
  - `/services/landing-pages-cro` (`google ads nextjs landing page cro`)
  - `/services/seo-services` (`technical seo audit nextjs schema services`)
- **Supporting Cluster Articles (P2/P3):**
  1. `How Sub-1s Next.js Landing Pages Lower Google Ads CPC via Quality Score` (**P2**)
  2. `Fixing Core Web Vitals (LCP, INP, CLS) in Next.js App Router` (**P2** -> links cleanly to `/services/website-speed-optimization`)

---

## 3. Merge, Prune, Isolate & De-Cannibalization Actions

| URL / Group | Action Required | Strategic Justification |
|---|---|---|
| `/preview-rh` & `/rh-clone/index.html` | **Apply `noindex` (DO NOT delete `/rh-clone` files without approval; just de-index via headers/meta)** | Duplicate homepage (`/` vs `/preview-rh` vs legacy `/rh-clone` with `$0 upfront` copy) splits PageRank and confuses Google entity extraction |
| `/hq-leathercon/**` (`1,510` files), `/anzaar/*`, `/frenchyse/*`, `/burger-garage/*`, `/hotbite/*` | **Isolate via `X-Robots-Tag: noindex, nofollow` + remove 404 `/burger-garage` etc. URLs from `sitemap.xml`** | Live showcases for humans & `/demos`, NOT thin/duplicate third-party canonical crawl traps bloating SaimDev's crawl budget |
| `/food-safety-templates/[slug]` (160 pages) & 4 `/tools/*` | **Preserve untouched (Direction B Isolation)** | Excluded per user directive; maintain clean internal funnel from existing compliant pages without adding more food-safety pages |
| `/nextjs-developer-uk` vs `/services/website-development` | **Differentiate Intent** | Position `/nextjs-developer-uk` for UK freelance/developer searches and `/services/website-development` for full US+UK agency builds |
| `/overview` | **Include in `sitemap.xml` + Add Schema + Fix 2 Dead Links** | Houses `ProjectScopeEstimator` + 12-service directory (`2,674` words); currently invisible in XML sitemap |
