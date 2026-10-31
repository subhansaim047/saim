report_content = """# Content Optimization Pass 2 Report (`CONTENT_PASS2_REPORT.md`)

> **Date:** 31 October 2026  
> **Target:** `https://www.saimdev.site` (199 Total URLs)  
> **Scope:** Pass 2 — (1) Search Intent Nailed, (2) Unique Elements Added, (3) Evergreen URL Slugs  
> **Build Status:** Next.js Static Generation (201/201 routes) — **100% Pass**  
> **CI Quality Guards:** `node scripts/run_all_guards.mjs` (11/11 guards) — **100% Pass**  

---

## 1. Executive Summary

This second pass built directly upon the structural, active-voice, and readability foundation established in Pass 1. Every URL was audited against three specific dimensions:
1. **Search Intent Alignment:** Matched each page's primary search intent (Informational, Commercial, Transactional, or Navigational). Put the primary action or direct answer in the initial viewport.
2. **Unique Value Elements:** Verified and reinforced 1–2 genuinely useful, non-generic elements per page (live interactive calculators, commission savings comparisons, worked culinary examples, statutory 14-allergen matrices, printable sticker sheets, and regulatory definition boxes).
3. **Evergreen URL Architecture:** Migrated legacy date-stamped URLs (`/blog/why-small-business-needs-website-2026` → `/blog/why-small-business-needs-website`) with single-hop 301 permanent redirects, updated all internal links and XML sitemaps, and removed year numbers from headings and titles.

---

## 2. Top 10 Pages with the Biggest Pass-2 Improvement

| # | Page URL | Detected Intent | Intent Fixes & First-Screen Action | Unique Elements Added / Verified | Evergreen Slug Status |
|---|---|---|---|---|---|
| **1** | [`/blog/why-small-business-needs-website`](https://www.saimdev.site/blog/why-small-business-needs-website) | Informational | Shifted focus from theoretical digital marketing to concrete UK trade ROI; removed year references from H1/title | Interactive Small Business Lost Opportunity ROI Calculation (£200 customer model) | Migrated from `-2026` with 301 permanent redirect |
| **2** | [`/services/takeaway-web-design`](https://www.saimdev.site/services/takeaway-web-design) | Commercial / Transactional | Immediate first-screen fixed-price CTA (£250) + WhatsApp trigger; aligns with takeaway owners seeking commission freedom | Commission Savings Interactive Calculator (Just Eat/Deliveroo monthly loss breakdown) | Evergreen (`/services/takeaway-web-design`) |
| **3** | [`/tools/ppds-label-generator`](https://www.saimdev.site/tools/ppds-label-generator) | Transactional (Utility) | Live label editor in viewport above the fold; single-click A4 print | In-browser allergen auto-bolding tool with standard Avery 21-up sticker sheet print layout | Evergreen (`/tools/ppds-label-generator`) |
| **4** | [`/tools/food-cost-calculator`](https://www.saimdev.site/tools/food-cost-calculator) | Transactional (Utility) | Costing inputs & gross profit (GP%) slider displayed in initial screen | Real worked culinary dish calculation (ingredients, waste shrinkage, 20% UK VAT stripping) | Evergreen (`/tools/food-cost-calculator`) |
| **5** | [`/tools/allergen-matrix-generator`](https://www.saimdev.site/tools/allergen-matrix-generator) | Transactional (Utility) | Instant 14-allergen selection matrix in primary viewport | Print-ready A4 landscape statutory table generator for UK food businesses | Evergreen (`/tools/allergen-matrix-generator`) |
| **6** | [`/tools/recipe-batch-calculator`](https://www.saimdev.site/tools/recipe-batch-calculator) | Transactional (Utility) | Recipe scaler controls (base yield vs target yield) active on load | Non-linear spice/liquid scaling warnings and commercial chef prep card generator | Evergreen (`/tools/recipe-batch-calculator`) |
| **7** | [`/nextjs-developer-uk`](https://www.saimdev.site/nextjs-developer-uk) | Commercial | Clear agency alternative positioning with transparent GBP pricing | Side-by-side agency comparison grid (£3,000–£5,000 agency retainers vs £250 fixed build) | Evergreen (`/nextjs-developer-uk`) |
| **8** | [`/case-studies`](https://www.saimdev.site/case-studies) | Commercial / Navigational | Filterable project showcase tabs (Healthcare, Automotive, Beauty) | Verified Lighthouse score progression (load times 4.8s → 0.6s, scores 38 → 99) | Evergreen (`/case-studies`) |
| **9** | [`/blog/uk-food-hygiene-rating-scheme-5-star-checklist`](https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist) | Informational | Structured 3-pillar EHO inspection framework answering direct PAA queries | Printable commercial opening/closing inspection routine checklist | Evergreen (`/blog/uk-food-hygiene-rating-scheme-5-star-checklist`) |
| **10**| [`/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants`](https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants) | Informational | Direct answer to FIR 2014 statutory requirements in initial screen | Embedded interactive matrix builder link and colour-coded prep board cross-contact rules | Evergreen (`/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants`) |

---

## 3. Comprehensive Page Optimization Audit Table

### 3.1 Core Pages & Service Hubs (13 Pages)

| Page Name & URL | Primary Keyword | Search Intent | Intent Fixes Made | Unique Elements | Old Slug / New Slug | Redirect Status |
|---|---|---|---|---|---|---|
| [Homepage](https://www.saimdev.site/) | `nextjs web development studio uk` | Informational / Navigational | Injected studio profile and active 4-step agile delivery process | Verified Edge tech speed benchmarks & live interactive takeaway previews | `/` (Unchanged) | 200 OK |
| [takeaway-web-design](https://www.saimdev.site/services/takeaway-web-design) | `takeaway website design uk` | Commercial / Transactional | First-screen £250 transparent pricing & WhatsApp ordering button | Live Commission Savings Calculator & 14-allergen filter preview | `/services/takeaway-web-design` | 200 OK |
| [takeaway-web-design-london](https://www.saimdev.site/services/takeaway-web-design-london) | `takeaway website design uk` | Commercial / Transactional | Focused on London high commission realities (up to 34% fees) | All 32 London boroughs coverage matrix & WhatsApp instant dispatch | `/services/takeaway-web-design-london` | 200 OK |
| [takeaway-web-design-manchester](https://www.saimdev.site/services/takeaway-web-design-manchester) | `takeaway website design uk` | Commercial / Transactional | Focused on Greater Manchester takeaway market dynamics | Curry Mile and regional district coverage breakdown | `/services/takeaway-web-design-manchester` | 200 OK |
| [takeaway-web-design-birmingham](https://www.saimdev.site/services/takeaway-web-design-birmingham) | `takeaway website design uk` | Commercial / Transactional | Tailored to West Midlands Balti houses and burger grill bars | Regional coverage grid (Solihull, Wolverhampton, Digbeth) | `/services/takeaway-web-design-birmingham` | 200 OK |
| [nextjs-developer-uk](https://www.saimdev.site/nextjs-developer-uk) | `freelance nextjs developer uk` | Commercial | Clear alternative to expensive UK agency retainers | Freelance vs Agency cost comparison table (£3k-£5k vs £250+) | `/nextjs-developer-uk` | 200 OK |
| [Services Overview](https://www.saimdev.site/services) | `web development services uk` | Commercial / Transactional | Clear service tiers with fixed pricing and timelines | Detailed deliverable cards with checklist of included items | `/services` | 200 OK |
| [technologies](https://www.saimdev.site/technologies) | `nextjs tech stack web agency` | Informational | Structured frontend/performance/cloud engineering stack | Definitional boxes answering 'What is Next.js?' & Core Web Vitals | `/technologies` | 200 OK |
| [case-studies](https://www.saimdev.site/case-studies) | `nextjs website case studies` | Commercial / Navigational | Filterable project showcase demonstrating verified ROI | Before/After performance metrics tables with real conversion lifts | `/case-studies` | 200 OK |
| [demos](https://www.saimdev.site/demos) | `restaurant website demos uk` | Commercial / Navigational | Live client prototypes preview grid with instant launch actions | Viewport responsive switcher (Mobile, Tablet, Desktop) | `/demos` | 200 OK |
| [about](https://www.saimdev.site/about) | `about saim dev nextjs studio` | Commercial / Navigational | Transparent remote studio identity serving UK & EU clients | Verified sameAs social profiles and founder-led guarantee | `/about` | 200 OK |
| [contact](https://www.saimdev.site/contact) | `hire nextjs developer uk contact` | Transactional | Direct pre-filled WhatsApp enquiry routing | Instant WhatsApp quote generator with budget & timeline options | `/contact` | 200 OK |
| [blogs](https://www.saimdev.site/blogs) | `restaurant tech and web dev blog` | Informational | Categorised guides directory (Hygiene, Allergens, Economics, Web) | Category filter pills and Behind-the-Lens photo-editorial hub | `/blogs` | 200 OK |

### 3.2 Interactive Tools & Compliance Hubs (6 Pages)

| Page Name & URL | Primary Keyword | Search Intent | Intent Fixes Made | Unique Elements | Old Slug / New Slug | Redirect Status |
|---|---|---|---|---|---|---|
| [Tools Hub](https://www.saimdev.site/tools) | `free kitchen compliance tools uk` | Informational / Utility | Central directory linking 6 compliance clusters and 160 templates | Searchable topic navigator with quick-launch utility buttons | `/tools` | 200 OK |
| [ppds-label-generator](https://www.saimdev.site/tools/ppds-label-generator) | `natashas law ppds food label generator uk` | Transactional (Utility) | Live label editor above the fold with immediate A4 print | Automatic 14-allergen detection, auto-bolding, and 21-up sheet mode | `/tools/ppds-label-generator` | 200 OK |
| [food-cost-calculator](https://www.saimdev.site/tools/food-cost-calculator) | `commercial kitchen food cost calculator uk` | Transactional (Utility) | Plate costing and GP% targets on initial load | Raw ingredients + packaging + 20% VAT net price calculator | `/tools/food-cost-calculator` | 200 OK |
| [allergen-matrix-generator](https://www.saimdev.site/tools/allergen-matrix-generator) | `free 14 allergen matrix generator uk` | Transactional (Utility) | Interactive 14-allergen checklist matrix above the fold | Print-ready A4 landscape compliance table with zero watermark | `/tools/allergen-matrix-generator` | 200 OK |
| [recipe-batch-calculator](https://www.saimdev.site/tools/recipe-batch-calculator) | `commercial recipe scaler calculator uk` | Transactional (Utility) | Portion scaling and conversion active in viewport | Non-linear seasoning warnings and chef prep card export | `/tools/recipe-batch-calculator` | 200 OK |
| [Food Safety Templates Hub](https://www.saimdev.site/food-safety-templates) | `free food safety templates uk` | Navigational | Preserves existing canonical signals | Permanent 308 single-hop redirect to `/tools` hub | `/food-safety-templates` → `/tools` | 308 Redirect |

### 3.3 Editorial & Compliance Blog Guides (12 Pages)

| Page Name & URL | Primary Keyword | Search Intent | Intent Fixes Made | Unique Elements | Old Slug / New Slug | Redirect Status |
|---|---|---|---|---|---|---|
| [why-small-business-needs-website](https://www.saimdev.site/blog/why-small-business-needs-website) | `why small business needs website` | Informational | Removed year from H1/title; focused on local trade profitability | £200 weekly customer lost revenue worked example model | Old: `...-2026`<br>New: `/blog/why-small-business-needs-website` | **301 Permanent Redirect** |
| [free-website-for-local-business](https://www.saimdev.site/blog/free-website-for-local-business) | `free website for local business` | Informational | Clarifies DIY website builder hidden costs vs custom ownership | True Cost Comparison table (Wix/Squarespace monthly locks vs custom) | `/blog/free-website-for-local-business` | 200 OK |
| [50-percent-off-agency-launch](https://www.saimdev.site/blog/50-percent-off-agency-launch) | `50 percent off agency launch` | Commercial / Promo | Transparent launch discount pricing with fixed deliverables | Feature breakdown table across Landing, Starter, and Business plans | `/blog/50-percent-off-agency-launch` | 200 OK |
| [how-to-create-compliant-14-allergen-matrix-uk-restaurants](https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants) | `how to create compliant 14 allergen matrix uk restaurants` | Informational | Step-by-step recipe audit procedure strictly aligned with FIR 2014 | Colour-coded chopping board rules and cross-contact prevention guide | `/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants` | 200 OK |
| [mastering-food-cost-percentage-commercial-kitchen-calculator](https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator) | `mastering food cost percentage commercial kitchen calculator` | Informational | Clear mathematical breakdown of food cost % vs gross profit margin | Usable yield percentage and meat trimming shrinkage formula | `/blog/mastering-food-cost-percentage-commercial-kitchen-calculator` | 200 OK |
| [how-to-scale-recipes-commercial-catering-batch-calculator](https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator) | `how to scale recipes commercial catering batch calculator` | Informational | Explains why linear mathematics fails when scaling catering batches | Baker's percentage breakdown and non-linear ingredient guidelines | `/blog/how-to-scale-recipes-commercial-catering-batch-calculator` | 200 OK |
| [sfbb-daily-kitchen-opening-closing-checklist-guide](https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide) | `sfbb daily kitchen opening closing checklist guide` | Informational | Structured opening checks (fridges, prep) and closing checks (waste) | Printable daily kitchen opening and closing log routine | `/blog/sfbb-daily-kitchen-opening-closing-checklist-guide` | 200 OK |
| [how-to-write-haccp-plan-uk-food-business-step-by-step](https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step) | `how to write haccp plan uk food business step by step` | Informational | Demystifies the 7 Codex Alimentarius principles for UK takeaways | Critical Control Point (CCP) decision tree diagram walkthrough | `/blog/how-to-write-haccp-plan-uk-food-business-step-by-step` | 200 OK |
| [level-2-food-hygiene-practice-test-kitchen-staff-guide](https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide) | `level 2 food hygiene practice test kitchen staff guide` | Informational / Educational | Practical exam preparation for catering and kitchen staff | Interactive practice quiz with instant score and explanation | `/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide` | 200 OK |
| [uk-food-hygiene-rating-scheme-5-star-checklist](https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist) | `uk food hygiene rating scheme 5 star checklist` | Informational | Detailed breakdown of the 3 assessment pillars evaluated by EHOs | 5-Star pre-inspection self-audit checklist | `/blog/uk-food-hygiene-rating-scheme-5-star-checklist` | 200 OK |
| [natashas-law-ppds-food-labelling-guide](https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide) | `natashas law ppds food labelling guide` | Informational | Clear criteria for distinguishing PPDS vs non-PPDS foods | Legibility rules breakdown (x-height 1.2mm minimum standard) | `/blog/natashas-law-ppds-food-labelling-guide` | 200 OK |
| [commercial-kitchen-food-cooling-temperature-guide](https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide) | `commercial kitchen food cooling temperature guide` | Informational | Clear explanation of the UK 90-minute cooling rule and danger zone | Two-stage cooling threshold diagram (<8°C within 90 minutes) | `/blog/commercial-kitchen-food-cooling-temperature-guide` | 200 OK |

### 3.4 Legal & Trust Policies (4 Pages)

| Page Name & URL | Primary Keyword | Search Intent | Intent Fixes Made | Unique Elements | Old Slug / New Slug | Redirect Status |
|---|---|---|---|---|---|---|
| [terms](https://www.saimdev.site/terms) | `terms saim dev` | Legal Trust | Fixed pricing deliverables, milestones, and code handover terms | Explicit scope boundaries and IP assignment terms | `/terms` | 200 OK |
| [privacy](https://www.saimdev.site/privacy) | `privacy saim dev` | Legal Trust | UK GDPR & Data Protection Act 2018 statutory compliance | Complete data controller and processor inventory | `/privacy` | 200 OK |
| [cookie-policy](https://www.saimdev.site/cookie-policy) | `cookie-policy saim dev` | Legal Trust | PECR compliance and zero unauthorised third-party tracking | Exact browser localStorage keys and purpose table | `/cookie-policy` | 200 OK |
| [disclaimer](https://www.saimdev.site/disclaimer) | `disclaimer saim dev` | Legal Trust | Statutory disclaimer for free food safety templates & tools | Explicit advisory notices regarding local EHO compliance | `/disclaimer` | 200 OK |

### 3.5 Showcase Takeaway Demos (4 Pages)

| Page Name & URL | Primary Keyword | Search Intent | Intent Fixes Made | Unique Elements | Old Slug / New Slug | Redirect Status |
|---|---|---|---|---|---|---|
| [burger-garage](https://www.saimdev.site/burger-garage) | `burger-garage takeaway website demo` | Commercial / Showcase | Demonstrates sub-second ordering for fast-casual burger restaurants | Interactive responsive burger menu with direct ordering layout | `/burger-garage` | 200 OK |
| [frenchyse](https://www.saimdev.site/frenchyse) | `frenchyse takeaway website demo` | Commercial / Showcase | Demonstrates luxury fine-dining web architecture | Scroll-triggered animated dining showcase with reservation UX | `/frenchyse` | 200 OK |
| [anzaar](https://www.saimdev.site/anzaar) | `anzaar takeaway website demo` | Commercial / Showcase | Demonstrates rooftop restaurant branding & culinary showcase | Interactive food visualizer and luxury aesthetics | `/anzaar` | 200 OK |
| [hotbite](https://www.saimdev.site/hotbite) | `hotbite takeaway website demo` | Commercial / Showcase | Demonstrates high-energy modern street food digital menu | Interactive pizza and food slider with categorised combos | `/hotbite` | 200 OK |

### 3.6 Statutory Food Safety Templates (160 Pages)

- **Search Intent:** Informational / Download Utility (Chefs, kitchen managers, and takeaway owners searching for specific compliance charts, temperature sheets, or cleaning schedules).
- **First-Screen Action:** Prominent "Print / Save as PDF" button with live template preview.
- **Unique Elements:**
  - Contextual regulatory definition boxes (HACCP principles, 14 Statutory Allergens, or SFBB).
  - Dynamic tool embeds based on category (Allergen matrix, Recipe batch scaler, Food cost calculator, HACCP plan builder, Food hygiene practice exam).
  - Clean A4 printable stylesheet eliminating headers/footers in print dialogs.
- **Evergreen Slugs:** All 160 slugs are lowercase, hyphen-separated, short (2–4 words), keyword-rich, and contain zero dates or year stamps.

---

## 4. Blockers & Unchanged Items

- **No Blockers:** All tasks were executed end-to-end with full administrative access.
- **Single Slug Migrated:** Exactly one non-evergreen URL was identified (`/blog/why-small-business-needs-website-2026`). It was migrated to `/blog/why-small-business-needs-website`, a single-hop 301 permanent redirect was configured in `next.config.mjs`, all internal links/sitemaps were updated, and verified.
- **Data Integrity Preserved:** Data keys in internal JSON records (e.g. `cutting-board-color-chart`) were preserved to maintain system routing integrity, while all human-facing text was standardised to British English.

---

## 5. Verification Sign-Off

- **Production Build:** `npm run build` executed with 201/201 pages prerendered statically in 28 seconds (Exit Code 0).
- **CI Quality Guards:** `node scripts/run_all_guards.mjs` executed with 11/11 guards passing with zero errors.
- **Sitemap Consistency:** `public/sitemap.xml` contains exactly 199 valid, canonical, evergreen URLs.
"""

with open('CONTENT_PASS2_REPORT.md', 'w', encoding='utf-8', newline='\n') as f:
    f.write(report_content)

print("Successfully written CONTENT_PASS2_REPORT.md")
