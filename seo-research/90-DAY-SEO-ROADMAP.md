# Phase 9 — Prioritized 90-Day SEO Execution Roadmap (USA & UK)

**Starting Baseline:** Domain age `3 months 29 days`, Moz `DA 1`, Ahrefs `DR 0`, `13` backlinks (`RankSEO PDF p. 24`); GSC & DataForSEO APIs *not connected*.  
**Scope Exclusion:** Zero modifications or scaling on `/food-safety-templates/*` (160 templates) or the 4 food-safety kitchen tools. Focus strictly on SaimDev commercial web engineering (`US` & `UK`) + `0% commission` takeaway funnels.

---

## Days 1–30 — Technical Clean-Up, Crawl Hygiene & Quick Commercial Wins *(Priority: HIGH)*

| Task | Priority | Evidence / Trigger | Expected Benefit | Effort | Dependencies |
|---|---|---|---|---|---|
| **1. Deploy Phase 10 Technical Fixes Locally & Verify** *(Broken links, sitemap 404 removal, `/overview` indexation & JSON-LD, `noindex` headers on clone sandboxes, `areaServed` US+UK, meta description lengths, `llms.txt`)* | **High** | Live `next start` HTTP crawl (`4` 404 sitemap URLs, `4` broken internal links, `1,534+` unblocked demo HTML files, US excluded from schema) | Eliminates index bloat (`1,500+` clone URLs), stops PageRank waste on `DA 1`, unlocks US Knowledge Graph eligibility, fixes GSC sitemap errors | Low-Medium (`Phase 10 script & TSX edits`) | Local build + Playwright visual verification before user push approval |
| **2. Ship Dedicated `/tools/commission-savings-calculator` Page** | **High** | `CommissionSavingsCalculator.tsx` already built; `/overview:827` currently 404s; `source=websearch` validates standalone calculator intent | Captures bottom/mid-funnel takeaway owners comparing 30% fees without fighting DR 70 SaaS directories | Low-Medium | Existing `CommissionSavingsCalculator` + `RhHeader` + `SiteFooter` |
| **3. Connect Google Search Console & GA4 Conversion Events *(User Action)*** | **High** | GSC not yet connected to workspace telemetry | Reveals true indexed vs "Discovered — currently not indexed" count, baseline queries, and conversion events (`WhatsApp click`, `/contact` submit, `Calculator` interaction) | Low (`30m` post-deploy) | User approval to deploy Phase 10 changes -> submit `https://www.saimdev.site/sitemap.xml` in GSC |
| **4. Fix Inbound Links & Differentiation on `/nextjs-developer-uk` vs `/services/website-development`** | **High** | Two flagship dev pages risk partial keyword overlap | Clear role split improves CTR and reduces query splitting across UK freelance vs US/UK agency searches | Low | Phase 10 deployment |

---

## Days 31–60 — High-Intent Content Publishing & US/UK Commercial Expansion *(Priority: HIGH / MEDIUM)*

| Task | Priority | Evidence / Trigger | Expected Benefit | Effort | Dependencies |
|---|---|---|---|---|---|
| **5. Publish Brief #2: `WordPress to Next.js Migration Cost & 301 SEO Guide (UK & US)`** | **High** | `madebyaris.com`, `focusreactive`, `kyln.digital` rank with transparent comparison guides (`source=websearch`) | Builds mid-funnel authority capturing SMB founders ready to leave WordPress plugins (`$300–$1,500` / `£250–£1,500`) | Medium (`1` well-researched engineering guide) | Verified `/services/wordpress-headless-cms` landing page live & clean |
| **6. Publish Brief #3: `Just Eat & Deliveroo vs Own Takeaway Website Profit Math (UK)`** | **High** | Competitors rely on monthly SaaS leases (`foodoo`, `dishonline`) and obscure recurring costs | Drives high-converting referral traffic into `/tools/commission-savings-calculator` and `/services/takeaway-web-design` | Medium | Live `/tools/commission-savings-calculator` |
| **7. Publish Brief #4: `Webflow & Framer to Next.js 16 Rebuild: Keep UI, Own Code`** | **Medium** | `website-clone` service (£1,500) uniquely positioned; low competition vs bloated agencies (`source=websearch`) | Attracts scaling SaaS & marketing teams hitting Webflow CMS localization limits in US & UK | Medium | Clean `public/llms.txt` mapping to `/services/website-clone` vs `/services/custom-web-apps` |
| **8. Add Transparent USD (`$300 / $500 / $999`) Surface Parity on Key Commercial Service Pages** | **Medium** | `content/plans.ts` already models USD pricing cleanly, while 11/12 service pages copy mentions UK almost exclusively | Improves US buyer conversion confidence alongside newly added `United States` Schema `areaServed` | Low-Medium | Days 1–30 schema update |

---

## Days 61–90 — Authority Building (No Spam), D2C Storefront Push & Measurement *(Priority: MEDIUM / LOW)*

| Task | Priority | Evidence / Trigger | Expected Benefit | Effort | Dependencies |
|---|---|---|---|---|---|
| **9. Legitimate Authority & Digital PR Outreach (`DA 1 -> DA 10+` Foundation)** | **High** | Domain age `3m 29d`, `13` backlinks (`RankSEO PDF`). Zero paid/PBN/spammy links allowed. | Earn natural links by submitting `/tools/commission-savings-calculator` & live demos to curated indie dev directories (Product Hunt, Fazier, Next.js showcase communities, UK hospitality supplier roundups, GitHub OSS UI kits/case breakdowns) | Ongoing (`2–4h/wk`) | Live calculator + clean non-clone indexation |
| **10. Publish Brief #5: `Headless Shopify TCO: Cut $200+/mo App Bloat Without $40k Agencies`** | **Medium** | Enterprise Shopify Plus incumbents (`Avex`, `Swanky`) ignore smaller D2C brands (`source=websearch`) | Captures US & UK Shopify merchants seeking sub-second custom stores at transparent fixed cost | Medium | US currency alignment complete |
| **11. Ship P2 Commercial Calculator (`WP-to-Next.js Speed & TCO Calculator`) — ONLY After GSC Validation** | **Medium** | `seo-programmatic` rule: launch additional tools based on proven demand & UX quality, not bulk assumptions | Adds second linkable commercial B2B asset cleanly within dark/lime GSAP design system | Medium (`1–2` days dev) | GSC query logs from Days 30–60 confirming migration impression growth |
| **12. Days 60–90 GSC + GA4 Audit & Meta CTR Iteration** | **High** | Data-driven feedback loop once live GSC data accumulates | Re-optimize titles/H2s on pages receiving high impressions with `< 2%` CTR (`15–30` impressions benchmark) | Low (`2h`) | Connected Google Search Console property |
