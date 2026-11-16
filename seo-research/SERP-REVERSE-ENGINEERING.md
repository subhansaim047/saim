# Phase 3B / Phase 4 — SERP Reverse Engineering Report (USA & UK)

**Methodology (`dataforseo-serp` Skill Framework):**  
- **Connection Path Used:** DataForSEO MCP and `$DATAFORSEO_LOGIN`/`$DATAFORSEO_PASSWORD` are **not connected**. Per `dataforseo-serp` Step 0 (`< 10` query live fallback protocol), `8` un-personalized web searches were conducted across UK & US targets and tagged `source=websearch`. Numeric monthly search volume, KD, CPC, and paid DataForSEO AI Overview API payloads are omitted/labeled `Unavailable (API not connected)` rather than estimated.
- **Exclusion Scope:** Excludes the 160 food-safety template slugs (`/food-safety-templates/*`) and 4 existing kitchen compliance tools.

---

## 1. Workflow A — SERP URL-Overlap & Anti-Cannibalization Clusters

Google clusters queries by **shared ranking URLs / shared search intent**, not word similarity. Below are the distinct intent buckets separated so SaimDev pages stop competing against each other:

| Intent Cluster | Core Queries (`source=websearch`) | Format Google Rewards in Top-10 | Dedicated SaimDev Owner URL | Sibling Pages Kept Separate (Why) |
|---|---|---|---|---|
| **01. Direct Takeaway Ordering & Commission Escape (UK)** | `just eat alternative website uk`, `commission free takeaway website uk` | Commercial solution page + fee comparison table + live food demos | `/services/takeaway-web-design` | City pages (`/services/takeaway-web-design-london`, `birmingham`, `manchester`) target localized borough/council intent only |
| **02. Takeaway Commission ROI Tool** | `takeaway commission calculator uk`, `just eat commission savings calculator` | **Interactive browser calculator widget** above the fold (`Tools / Utility` intent) | `/tools/commission-savings-calculator` *(New standalone route wrapping existing `CommissionSavingsCalculator.tsx`)* | Separated from `/services/takeaway-web-design` so tool queries hit an interactive calculator first and link seamlessly into the £250 build CTA |
| **03. Local Geo Takeaway Design (UK Cities)** | `takeaway web design london`, `takeaway web design birmingham` | Geo-specific service landing page citing local boroughs, FHRS norms & postcode zones | `/services/takeaway-web-design-london`, `/services/takeaway-web-design-birmingham`, `/services/takeaway-web-design-manchester` | Keep distinct city benchmarks & postcode pricing tiers (already implemented cleanly) |
| **04. WordPress to Next.js Migration & Headless CMS (UK + US)** | `wordpress to nextjs migration cost`, `wordpress to nextjs migration service usa` | Comparative cost/security landing page + migration risk table (`301` safety) | `/services/wordpress-headless-cms` | Separate from `/services/website-redesign` (which targets dated non-WP custom HTML/Wix/Framer builds rather than PHP/WP plugin stacks) |
| **05. 1:1 Website Rebuild / Webflow & Figma Port (UK + US)** | `1 to 1 website rebuild nextjs`, `webflow to nextjs migration service` | Productized scope page showing before/after parity, code ownership & fixed price | `/services/website-clone` | Must NEVER be linked as SaaS MVP build (fix `public/llms.txt:37` which currently mispoints `"Custom Web Applications & SaaS MVPs"` to `/services/website-clone` instead of `/services/custom-web-apps`) |
| **06. Freelance Next.js Developer vs Full Agency Build** | `freelance nextjs developer uk fixed price` vs `nextjs website development agency` | Solo-founder technical authority & direct contact vs full agency capability & multi-tier packages | `/nextjs-developer-uk` (Freelance UK specialist) vs `/services/website-development` (Agency US/UK Next.js flagship builds) | Differentiate copy framing cleanly: `/nextjs-developer-uk` emphasizes fast freelance execution & VAT invoicing; `/services/website-development` targets broader company/US/UK engineering builds |
| **07. Headless Shopify vs Custom Stripe Storefronts** | `headless shopify nextjs store`, `custom nextjs ecommerce stripe checkout` | Platform TCO + app-fee elimination vs greenfield custom cart/configurator | `/services/ecommerce-shopify` vs `/services/ecommerce-development` | Shopify Plus merchants keeping Shopify Admin -> `ecommerce-shopify`; custom config brands avoiding SaaS fees -> `ecommerce-development` |
| **08. Interactive Agency Project Scope Estimator** | `website cost calculator nextjs`, `fixed price web development quote` | Multi-step interactive pricing/scope wizard | `/overview` (hosts `ProjectScopeEstimator` + full engineering directory) | Currently **excluded from `sitemap.xml`**, starving SaimDev of commercial calculator SERP entry |

---

## 2. Workflow B — Winning SERP Content Formats (Reverse-Engineered From Top-10)

1. **Tool Queries (`calculator`, `estimator`):** Google strongly prefers **immediately usable above-the-fold interactive UI** backed by a 300–600 word methodology breakdown and concise FAQs. Embedding `CommissionSavingsCalculator.tsx` 60% down city pages wastes its standalone ranking power.
2. **Migration Queries (`wordpress to nextjs`, `webflow to nextjs`):** Winning pages (`madebyaris.com`, `focusreactive`, `kyln.digital`) avoid vague hype and open with concrete engineering artifacts: *TTFB delta, plugin CVE elimination, CMS handoff (`Sanity` / `WPGraphQL`), and explicit `301 redirect` verification*.
3. **Hospitality Switch Queries (`just eat alternative`, `0% commission ordering`):** Incumbents (`dishonline.co.uk`, `foodoo.co.uk`, `orderingdirect.co.uk`) win clicks through **visual £ saving claims** (`£500–£2,000/mo kept`) paired with mobile ordering screenshots. However, competitors obscure ongoing SaaS fees or contract renewals — SaimDev reverses that weakness by highlighting **"Fixed £250 One-Off / 0% Commission / 100% Ownership"** in H1s, offer schemas, and interactive ROI charts.
4. **Agency Pricing Queries (`pricing`, `packages`):** In both UK (`£`) and US (`$`) SERPs, transparent fixed tier tables (`Hero Comparison Card` -> `Feature Matrix` -> `50/50 Milestone Protection` FAQ) earn higher click-through and citation likelihood than "Contact Us for a Quote" forms.

---

## 3. Workflow C — AI Overview & LLM Citation Readiness Strategy

*(DataForSEO AI Optimization endpoint unavailable locally; structural LLM citation analysis conducted directly against SaimDev's HTML, Schema `@graph`, `llms.txt`, and `robots.txt`)*

- **Current AI Crawler Allowance (`public/robots.txt`):** SaimDev explicitly permits `OAI-SearchBot`, `GPTBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, `DeepSeekBot`. **Strong readiness.**
- **Current LLM Citation Bugs Discovered in Code:**
  1. `public/llms.txt:37` misattributes **Custom Web Applications & SaaS MVPs** -> `/services/website-clone` (truncates AI assistant recommendations for `/services/custom-web-apps`).
  2. `public/llms.txt:52-55` lists **4 non-existent `404` routes** (`/burger-garage`, `/frenchyse`, `/anzaar`, `/hotbite`) — AI fetchers attempting to verify portfolio proof hit 404 errors!
  3. `app/layout.tsx`, `src/lib/serviceSchema.ts`, and `public/rh-exact/index.html` restrict `areaServed` strictly to `United Kingdom` & `European Union` (`["GB","EU"]`). When US searchers ask AI Overviews or Perplexity *"affordable Next.js web agency fixed price US"*, SaimDev's Knowledge Graph explicitly excludes US eligibility!
  4. `app/overview/page.tsx` (`2,674` words of crisp comparison tables + interactive estimator) lacks `WebPage` + `FAQPage` JSON-LD and sits outside `sitemap.xml`.

---

## 4. Workflow D — Per-Page Format & Intent Lock Rules

Before editing or writing any Tier-1 SaimDev commercial page, enforce this lock table so pages never dilute their SERP format:

| Page Route | Locked SERP Format | Mandatory Proof Element | Forbidden Content Drift |
|---|---|---|---|
| `/` (`public/rh-exact/index.html`) | Multi-market Next.js Engineering Agency Flagship (UK + US) | Hero video showcase + live interactive demo rail + £/$ transparent positioning | Never stuff food-safety template keywords onto `/` |
| `/tools/commission-savings-calculator` | Interactive Commercial ROI Calculator + Explainer | Instant interactive monthly fee recovery slider/presets + CTA to `/services/takeaway-web-design` | Do NOT mix FSA allergen/EHO kitchen compliance tools on this URL |
| `/overview` | Interactive Project Scope Estimator + Service Architecture Index | `ProjectScopeEstimator` wizard + WordPress/Wix cost comparison table | Fix broken links pointing to 404 calculator URLs |
| `/services/takeaway-web-design` | Commercial Solution Landing Page + Marketplace Comparison | Live mobile menu showcase + zero-retainer breakdown | Never let city subpages copy >70% identical text |
| `/services/wordpress-headless-cms` | Technical Migration Landing Page | Zero-downtime cutover steps + headless CMS options + 301 preservation guarantee | Trim description from `158` chars -> `<= 155` chars; include US + UK `areaServed` |
| `/services/website-clone` | Productized 1:1 Rebuild / UI Port Offer | Parity checklist + Figma/Webflow/HTML -> Next.js 16 fixed quote | Never claim ownership of demo target brands; keep demo clones strictly `noindex` |
