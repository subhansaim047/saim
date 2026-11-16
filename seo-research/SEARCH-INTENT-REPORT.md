# Phase 3C / Phase 4 — Search Intent Decoder Report (USA & UK)

**Methodology (`serp-intent-decoder` Skill):**  
- **SearchAtlas MCP Status:** *Not Connected.* Fallback live SERP decoder applied across 12 priority commercial non-160 keywords (`8` fresh `source=websearch` queries executed + live competitor URL type evaluation).
- **Target Business Classification:** Boutique Performance Engineering Agency & Commission-Free Takeaway Web Builder (Multi-Market: **United Kingdom** + **United States**, remote edge deployment).
- **"Near Me" Rule Applied:** Any local intent queries (e.g., `"takeaway web design near me"`) are converted to explicit target geo hubs (`"takeaway web design london"`, `"takeaway web design birmingham"`, `"takeaway web design manchester"`).
- **Winnability Filter (DA 1 / DR 0 Context):** Queries dominated by DR 60–90 directories/SaaS monopolies are flagged **"Don't Bother (Head Term)"**, routing effort strictly to long-tail commercial gaps SaimDev can realistically win.

---

## 1. Master Intent & Winnability Summary Table

| # | Keyword | Market | Primary Intent | Observed SERP Features | Winning Content Format | Winnability (`DA 1`) | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | `takeaway commission calculator uk` | UK | Commercial Investigation | `[ ]` Local Pack, `[ ]` Shopping, `[x]` PAA, `[ ]` Dominant Directories | Interactive browser calculator + savings FAQ + service CTA | **High** | **Target Now (Priority 1)** |
| 2 | `just eat alternative website uk` | UK | Commercial Investigation | `[x]` PAA, `[x]` SaaS Comparison Posts, `[ ]` Local Pack | Commercial comparison + direct £250 fixed-ownership page | **Medium-High** | **Target Now (Priority 1)** |
| 3 | `commission free takeaway website uk` | UK | Transactional | `[x]` PAA, `[ ]` Shopping, `[ ]` Forums | Dedicated service landing page (`/services/takeaway-web-design`) | **Medium** | **Optimize Existing** |
| 4 | `takeaway web design london` | UK | Local / Transactional | `[x]` Local Pack, `[x]` PAA, `[ ]` Shopping | City landing page with London zone/FHRS specifics | **Medium** | **Optimize Meta + Links** |
| 5 | `wordpress to nextjs migration cost` | UK & US | Commercial Investigation | `[x]` AI Overview (structural query), `[x]` PAA, `[x]` Agency Guides | Migration pricing breakdown + zero-downtime migration service | **High** | **Target Now (Priority 1)** |
| 6 | `1 to 1 website rebuild nextjs` | US & UK | Transactional | `[ ]` Local Pack, `[x]` Niche Agency/Freelance Pages | Productized fixed-price rebuild page (`/services/website-clone`) | **High** | **Target & Clarify Intent** |
| 7 | `webflow to nextjs migration service` | US | Commercial Investigation | `[x]` PAA, `[x]` Technical Comparisons | Comparison blog (`Webflow vs Next.js`) -> `/services/website-clone` | **Medium-High** | **Write Supporting Guide** |
| 8 | `freelance nextjs developer uk fixed price` | UK | Transactional | `[x]` Freelance Profiles, `[x]` PAA, `[ ]` Heavy Enterprise Ads | Freelancer portfolio + rate transparency page (`/nextjs-developer-uk`) | **Medium-High** | **Optimize & Differentiate** |
| 9 | `headless shopify developer affordable usa` | US | Commercial Investigation | `[x]` PAA, `[x]` High-Ticket Agency Pages | SMB/Founder headless cost page (`/services/ecommerce-shopify`) | **Medium** | **Add US USD Positioning** |
| 10 | `next js website speed optimization service` | US & UK | Transactional | `[x]` PAA, `[x]` Freelance Audits | Dedicated CWV profiling service (`/services/website-speed-optimization`) | **High** | **Target Now (Low Comp)** |
| 11 | `web design agency london` | UK | Broad Commercial | `[x]` Ads, `[x]` Clutch/Sortlist Directories, `[x]` Map Pack | High-DR local agencies (`DR 45–80`) | **Unwinnable (`DA 1`)** | **Don't Bother Directly** |
| 12 | `shopify agency usa` / `ecommerce development` | US | Broad Commercial | `[x]` Paid Ads, `[x]` Shopify Partner Directory, `[x]` Clutch | Enterprise partners (`Avex`, `Swanky`) | **Unwinnable (`DA 1`)** | **Don't Bother Directly** |

---

## 2. Deep Intent Decodes (Top Priority Opportunities)

### Decode 1 — `takeaway commission calculator uk` (United Kingdom)
- **True Intent:** **Commercial Investigation (Utility-Led).** Restaurant and takeaway owners want to quantify exact £ losses to Just Eat, Deliveroo, and Uber Eats before committing to a direct ordering website.
- **SERP Feature Checklist:**
  - `[ ]` Local Map Pack (utility query, non-local map)
  - `[ ]` Google Shopping
  - `[x]` People Also Ask (`"How much commission does Just Eat charge?"`, `"Is Direct ordering worth it?"`)
  - `[x]` Calculator / Interactive Tools (mixed SaaS blog embeds)
  - `[ ]` AI Overview dominance burying clickable tools (users still need interactive sliders)
- **Competitor Weakness:** UK competitors bury calculators behind email gates or tie calculations to £80–£150/month subscription plans.
- **Required SaimDev Angle:** Launch `/tools/commission-savings-calculator` reusing existing `CommissionSavingsCalculator.tsx` with instant interactive presets (`Fish & Chips`, `Indian/Balti`, `Burger Bar`, `Pizza Shop`), transparent net saving math, zero signup wall, and a 1-click transition to `/services/takeaway-web-design` (£250 one-off).

### Decode 2 — `wordpress to nextjs migration cost` (UK & US Dual Market)
- **True Intent:** **Commercial Investigation.** Business owners/CTOs tired of slow TTFB, Elementor bloat, and PHP plugin security patches want **budget clarity** (`$300–$1,500` vs `$15k+` enterprise agencies) AND **SEO ranking preservation assurance**.
- **SERP Feature Checklist:**
  - `[x]` AI Overview (synthesizing cost ranges + benefits)
  - `[x]` People Also Ask (`"Is moving from WordPress to Next.js worth it for SEO?"`, `"Do you lose SEO switching from WordPress?"`)
  - `[ ]` Local Map Pack
  - `[x]` Agency/Dev Guides (`madebyaris.com`, `focusreactive`, `kyln.digital`)
- **Competitor Weakness:** High-ranking consultancies rarely state sub-`$2,000` fixed turnaround pricing and speak over SMB founders with heavy jargon.
- **Required SaimDev Angle:** Optimize `/services/wordpress-headless-cms` (`<=155` char description + `US` & `UK` `areaServed`) and support it with a dedicated cost & `301 redirect` engineering guide linking to `/pricing` and `/overview`.

### Decode 3 — `just eat alternative website uk` & `zero commission restaurant ordering usa` (Split Geo Intent)
- **UK vs US Nuance (Critical Difference):**
  - **UK (`£`):** Buyers search `"Just Eat alternative"`, `"Foodhub vs own website"`, focus heavily on **Natasha's Law 14-allergen filters**, **postcode delivery zones**, and escaping **25%–32% commissions**.
  - **US (`$`):** Buyers search `"DoorDash / Uber Eats commission alternative"`, `"Toast vs custom ordering website"`, respond to **$300 / $500 fixed pricing** and avoiding `$119–$399/mo` SaaS lock-ins (`Owner.com` / `ChowNow`).
- **Required Action:** Keep UK hospitality pages authentic to UK postcodes/FHRS/allergens (`takeaway-web-design`, `-london`, `-birmingham`, `-manchester`), while unlocking US reach via global & service `areaServed` (`United States`) + transparent USD rates (`content/plans.ts` already models `$300 / $500 / $999`!).

### Decode 4 — Unwinnable SERPs Flag ("Don't Bother" List)
- **Avoid targeting directly:** `"web design agency uk"`, `"web design london"`, `"shopify agency usa"`, `"best seo agency usa"`, `"food delivery app builder"`.
- **Why:** Verified RankSEO DA (`1`) and DR (`0`) mean competing head-on with `clutch.co` and DR 60+ retainers burns crawl equity and copywriting hours with zero realistic Page-1 horizon. Win the surrounding long-tail comparisons, fixed-price rebuilds, speed fixes, and commission calculators first to build backlinks organically.
