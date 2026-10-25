# Indexing Policy & URL Triage Specification

**Domain:** `saimdev.site`  
**Effective Date:** October 2026  
**Author:** Saim Dev Web Architecture & SEO Engine  
**Standards:** UK Food Standards Agency (FSA), Safer Food Better Business (SFBB), Regulation (EC) No 852/2004, Google Search Central Quality Rater Guidelines, Generative Engine Optimization (GEO) & LLM Retrieval Standards.  

---

## 1. Executive Summary & Routing Philosophy

To maximize domain authority, search engine ranking potential, and direct citation in generative AI models (ChatGPT, Perplexity, Claude, Google Search AI Overviews), `saimdev.site` strictly enforces a zero-tolerance policy against thin content, keyword cannibalization, and geographic regulatory mismatches.

| Category | Total Routes | Indexing Directive | Search / Bot Action | Strategic Purpose |
|---|---|---|---|---|
| **Static Core Commercial Pages** | **14** | `index, follow` | In `sitemap.xml` | Core studio services, pricing, credentials, and legal transparency. |
| **Editorial Guides (Blog Posts)** | **12** | `index, follow` | In `sitemap.xml` | Authoritative E-E-A-T guides on UK food compliance and modern web architecture. |
| **Primary UK Kitchen Tools (KEEP)** | **24** | `index, follow` | In `sitemap.xml` | High-value, 400+ unique word interactive tools and downloadable due diligence sheets. |
| **Near-Duplicate Consolidations (MERGE)** | **28** | `301 Permanent Redirect` | Excluded from Sitemap | 301 equity pass-through consolidating cannibalized keywords to canonical targets. |
| **Crawl-Budget Protected Pages (NOINDEX)** | **113** | `noindex, follow` | Excluded from Sitemap | Protects crawl budget from US-only regulations (FDA FSMA, EcoSure) and thin items. |
| **Total Evaluated Endpoints** | **191** | - | - | Complete site-wide URL architecture reconciled. |

---

## 2. Mandatory Quality & Indexation Thresholds

For any URL to be granted `index, follow` status and included in `sitemap.xml`, it must satisfy all 5 criteria:
1. **Geographic Relevance:** Specifically tailored for UK hospitality, catering, and takeaway operations (Food Standards Agency SFBB, Natasha's Law, Regulation EC 852/2004). US-only regulatory frameworks (FDA FSMA 204, US cutting boards) are disqualified.
2. **Word Count & Depth:** Minimum **400+ unique words** (averaging >490 unique words on KEEP pages) including a 40-60 word direct factual summary, 3-5 step operational SOP, and 4-5 crawlable, topic-specific FAQs.
3. **Zero Keyword Cannibalization:** Printable templates and interactive digital tools sharing the same user intent are unified under one single canonical URL.
4. **Structured Schema Validation:** Server-rendered JSON-LD markup (`WebApplication`, `FAQPage`, `BreadcrumbList`, `Article`, `Organization`, `Person`) with exact string parity between visible HTML and schema entities.
5. **Clean Attribution & Integrity:** Byline strictly assigned to `Saim Dev` with real update dates. Zero misleading claims ('EHO-approved' or 'guarantees') replaced with verified phrases ('aligned with FSA guidance').

---

## 3. Static Core Commercial Pages (14 URLs)

| URL Path | Status | Word Count | Canonical Target | Strategic Intent & Justification |
|---|---|---|---|---|
| `/` | `INDEX, FOLLOW` | ~1650 | `https://www.saimdev.site/` | Primary studio showcase; fixed price £250 offer for UK & EU small businesses; founder credentials and client testimonials. |
| `/tools` | `INDEX, FOLLOW` | ~1850 | `https://www.saimdev.site/tools` | Canonical hub for all UK food safety tools, checklists, and kitchen compliance generators; live resource counter. |
| `/nextjs-developer-uk` | `INDEX, FOLLOW` | ~1250 | `https://www.saimdev.site/nextjs-developer-uk` | High-intent geo-targeted landing page for UK small businesses seeking Next.js web development and custom portals. |
| `/services` | `INDEX, FOLLOW` | ~920 | `https://www.saimdev.site/services` | Full breakdown of bespoke web engineering, headless e-commerce, restaurant ordering systems, and SEO/GEO optimizations. |
| `/technologies` | `INDEX, FOLLOW` | ~880 | `https://www.saimdev.site/technologies` | Detailed architecture overview (Next.js App Router, React 19, TypeScript, Tailwind CSS, Vercel Edge, Prisma). |
| `/case-studies` | `INDEX, FOLLOW` | ~1150 | `https://www.saimdev.site/case-studies` | Commercial proof, Core Web Vitals audit metrics, and conversion gains achieved for UK takeaway and hospitality clients. |
| `/demos` | `INDEX, FOLLOW` | ~850 | `https://www.saimdev.site/demos` | Live client demos demonstrating high-performance web applications, fast animations, and interactive menu order flows. |
| `/about` | `INDEX, FOLLOW` | ~1020 | `https://www.saimdev.site/about` | E-E-A-T trust signals: honest bio (Pakistan-based studio serving UK/EU remotely), founder profile, and 7 verified sameAs profiles. |
| `/contact` | `INDEX, FOLLOW` | ~720 | `https://www.saimdev.site/contact` | Direct communication channel, project inquiry questionnaire, and direct consultation scheduling for UK business owners. |
| `/blogs` | `INDEX, FOLLOW` | ~1180 | `https://www.saimdev.site/blogs` | Editorial library index categorizing practical guides on UK food safety regulations, Natasha's Law, and modern web engineering. |
| `/privacy` | `INDEX, FOLLOW` | ~1350 | `https://www.saimdev.site/privacy` | UK GDPR & ICO statutory privacy policy disclosing third-party processors, cookies, and local storage keys. |
| `/cookie-policy` | `INDEX, FOLLOW` | ~950 | `https://www.saimdev.site/cookie-policy` | Granular disclosure of client-side storage keys (cookie consent, allergen matrix, food cost tool states) without tracking cookies. |
| `/disclaimer` | `INDEX, FOLLOW` | ~820 | `https://www.saimdev.site/disclaimer` | Clear regulatory boundary disclaimer clarifying that free food safety tools provide operational guidance and do not replace council EHO audits. |
| `/terms` | `INDEX, FOLLOW` | ~980 | `https://www.saimdev.site/terms` | Commercial contract terms, fixed-fee deliverables, intellectual property transfer, and warranty boundaries. |

---

## 4. Editorial Hospitality & Web Architecture Guides (12 URLs)

| URL Path | Status | Word Count | Canonical Target | Strategic Intent & Justification |
|---|---|---|---|---|
| `/blog/why-small-business-needs-website-2026` | `INDEX, FOLLOW` | ~1420 | `https://www.saimdev.site/blog/why-small-business-needs-website-2026` | High-intent digital strategy guide for UK local trades and shops transitioning to mobile-first discovery. |
| `/blog/free-website-for-local-business` | `INDEX, FOLLOW` | ~1360 | `https://www.saimdev.site/blog/free-website-for-local-business` | Analysis of website builders vs custom Next.js web applications, highlighting hidden renewal costs. |
| `/blog/50-percent-off-agency-launch` | `INDEX, FOLLOW` | ~1120 | `https://www.saimdev.site/blog/50-percent-off-agency-launch` | Special launch terms and case study partnership opportunities for UK/EU restaurants and local service firms. |
| `/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants` | `INDEX, FOLLOW` | ~1890 | `https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants` | Comprehensive guide on building and maintaining a 14-allergen matrix compliant with Food Information Regulations 2014. |
| `/blog/mastering-food-cost-percentage-commercial-kitchen-calculator` | `INDEX, FOLLOW` | ~1780 | `https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator` | Practical mathematical guide to calculating plate gross profit margins and preventing inventory shrinkage. |
| `/blog/how-to-scale-recipes-commercial-catering-batch-calculator` | `INDEX, FOLLOW` | ~1640 | `https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator` | Industrial batch scaling formulas for catering operations, wedding venues, and commercial kitchens. |
| `/blog/sfbb-daily-kitchen-opening-closing-checklist-guide` | `INDEX, FOLLOW` | ~1920 | `https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide` | Deep-dive walkthrough of Food Standards Agency (FSA) Safer Food, Better Business daily diary protocols. |
| `/blog/how-to-write-haccp-plan-uk-food-business-step-by-step` | `INDEX, FOLLOW` | ~2150 | `https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step` | Step-by-step implementation of the 7 HACCP principles under Article 5 of Regulation (EC) No 852/2004. |
| `/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide` | `INDEX, FOLLOW` | ~1680 | `https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide` | Training revision guide and practice test questions for UK kitchen staff undertaking Food Hygiene Level 2 certification. |
| `/blog/uk-food-hygiene-rating-scheme-5-star-checklist` | `INDEX, FOLLOW` | ~2240 | `https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist` | Actionable inspection criteria and scoring breakdown for achieving a 5-star Food Hygiene Rating Scheme (FHRS) score. |
| `/blog/natashas-law-ppds-food-labelling-guide` | `INDEX, FOLLOW` | ~1980 | `https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide` | Legal requirements and packaging checklist for Prepacked for Direct Sale (PPDS) food under Natasha's Law. |
| `/blog/commercial-kitchen-food-cooling-temperature-guide` | `INDEX, FOLLOW` | ~1720 | `https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide` | UK regulatory requirements for rapid cooling cooked food within 90 minutes to prevent Clostridium perfringens spore growth. |

---

## 5. Primary UK Kitchen Compliance Tools & Sheets (24 KEEP URLs)

| # | URL Path | Status | Unique Words | Total Words | Type | Strategic Purpose & Due Diligence Role |
|---|---|---|---|---|---|---|
| 1 | `/food-safety-templates/freezer-temperature-chart` | `INDEX, FOLLOW` | 464 | 1093 | `poster` | UK-relevant core kitchen standard (464 unique words). Satisfies UK FSA/SFBB due diligence. |
| 2 | `/food-safety-templates/basic-food-preparation-rules` | `INDEX, FOLLOW` | 490 | 1053 | `poster` | UK-relevant core kitchen standard (490 unique words). Satisfies UK FSA/SFBB due diligence. |
| 3 | `/food-safety-templates/food-allergen-chart` | `INDEX, FOLLOW` | 517 | 1057 | `chart` | UK-relevant core kitchen standard (517 unique words). Satisfies UK FSA/SFBB due diligence. |
| 4 | `/food-safety-templates/recipe-calculator` | `INDEX, FOLLOW` | 499 | 1002 | `smart_tool` | UK-relevant core kitchen standard (499 unique words). Satisfies UK FSA/SFBB due diligence. |
| 5 | `/food-safety-templates/food-safety-quiz` | `INDEX, FOLLOW` | 500 | 1027 | `smart_tool` | UK-relevant core kitchen standard (500 unique words). Satisfies UK FSA/SFBB due diligence. |
| 6 | `/food-safety-templates/fridge-temperature-record-sheet-pdf` | `INDEX, FOLLOW` | 473 | 1047 | `log` | UK-relevant core kitchen standard (473 unique words). Satisfies UK FSA/SFBB due diligence. |
| 7 | `/food-safety-templates/haccp-plan-builder` | `INDEX, FOLLOW` | 486 | 1033 | `chart` | UK-relevant core kitchen standard (486 unique words). Satisfies UK FSA/SFBB due diligence. |
| 8 | `/food-safety-templates/walk-in-cooler-food-storage-chart` | `INDEX, FOLLOW` | 496 | 1049 | `chart` | UK-relevant core kitchen standard (496 unique words). Satisfies UK FSA/SFBB due diligence. |
| 9 | `/food-safety-templates/cleaning-schedule` | `INDEX, FOLLOW` | 503 | 1048 | `log` | UK-relevant core kitchen standard (503 unique words). Satisfies UK FSA/SFBB due diligence. |
| 10 | `/food-safety-templates/restaurant-cleaning-checklist` | `INDEX, FOLLOW` | 506 | 1025 | `checklist` | UK-relevant core kitchen standard (506 unique words). Satisfies UK FSA/SFBB due diligence. |
| 11 | `/food-safety-templates/food-traceability` | `INDEX, FOLLOW` | 478 | 1026 | `log` | UK-relevant core kitchen standard (478 unique words). Satisfies UK FSA/SFBB due diligence. |
| 12 | `/food-safety-templates/food-recall` | `INDEX, FOLLOW` | 490 | 1028 | `log` | UK-relevant core kitchen standard (490 unique words). Satisfies UK FSA/SFBB due diligence. |
| 13 | `/food-safety-templates/pest-control-checklist` | `INDEX, FOLLOW` | 510 | 1019 | `checklist` | UK-relevant core kitchen standard (510 unique words). Satisfies UK FSA/SFBB due diligence. |
| 14 | `/food-safety-templates/allergy-matrix` | `INDEX, FOLLOW` | 509 | 1039 | `chart` | UK-relevant core kitchen standard (509 unique words). Satisfies UK FSA/SFBB due diligence. |
| 15 | `/food-safety-templates/opening-and-closing-checklist-template` | `INDEX, FOLLOW` | 476 | 1042 | `checklist` | UK-relevant core kitchen standard (476 unique words). Satisfies UK FSA/SFBB due diligence. |
| 16 | `/food-safety-templates/hand-washing-poster` | `INDEX, FOLLOW` | 505 | 1045 | `poster` | UK-relevant core kitchen standard (505 unique words). Satisfies UK FSA/SFBB due diligence. |
| 17 | `/food-safety-templates/kitchen-safety-poster` | `INDEX, FOLLOW` | 514 | 1025 | `poster` | UK-relevant core kitchen standard (514 unique words). Satisfies UK FSA/SFBB due diligence. |
| 18 | `/food-safety-templates/food-cooling-poster` | `INDEX, FOLLOW` | 494 | 1056 | `poster` | UK-relevant core kitchen standard (494 unique words). Satisfies UK FSA/SFBB due diligence. |
| 19 | `/food-safety-templates/food-cost-calculator` | `INDEX, FOLLOW` | 494 | 1019 | `smart_tool` | UK-relevant core kitchen standard (494 unique words). Satisfies UK FSA/SFBB due diligence. |
| 20 | `/food-safety-templates/reheating-food-temperature-guide` | `INDEX, FOLLOW` | 491 | 1055 | `poster` | UK-relevant core kitchen standard (491 unique words). Satisfies UK FSA/SFBB due diligence. |
| 21 | `/food-safety-templates/five-food-safety-rules` | `INDEX, FOLLOW` | 468 | 1032 | `poster` | UK-relevant core kitchen standard (468 unique words). Satisfies UK FSA/SFBB due diligence. |
| 22 | `/food-safety-templates/chopping-board-colour-chart` | `INDEX, FOLLOW` | 509 | 1039 | `poster` | UK-relevant core kitchen standard (509 unique words). Satisfies UK FSA/SFBB due diligence. |
| 23 | `/food-safety-templates/hot-holding-food-temperature-log` | `INDEX, FOLLOW` | 463 | 1065 | `log` | UK-relevant core kitchen standard (463 unique words). Satisfies UK FSA/SFBB due diligence. |
| 24 | `/food-safety-templates/kitchen-prep-list-template` | `INDEX, FOLLOW` | 499 | 1021 | `checklist` | UK-relevant core kitchen standard (499 unique words). Satisfies UK FSA/SFBB due diligence. |

---

## 6. Consolidated & 301 Redirected Routes (28 URLs)

The following URLs have been deprecated or consolidated to eliminate search intent splitting and keyword cannibalization. Each returns an HTTP `301 Moved Permanently` header.

| # | Incoming Request Path | HTTP Status | Destination Canonical URL | Strategic Consolidation Justification |
|---|---|---|---|---|
| 1 | `/food-safety-templates` | `301 REDIRECT` | `https://www.saimdev.site/tools` | Canonical hub consolidation: /tools is the authoritative directory, legacy /food-safety-templates permanently redirected. |
| 2 | `/food-safety-templates/two-stage-cooling-method` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/food-cooling-poster` | Consolidated into canonical Food Cooling Methods & Two-Stage Chilling Poster. |
| 3 | `/food-safety-templates/cooling-food-methods-poster` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/food-cooling-poster` | Consolidated into canonical Food Cooling Methods & Two-Stage Chilling Poster. |
| 4 | `/food-safety-templates/cooling-food-methods` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/food-cooling-poster` | Consolidated into canonical Food Cooling Methods & Two-Stage Chilling Poster. |
| 5 | `/food-safety-templates/two-stage-cooling` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/food-cooling-poster` | Consolidated into canonical Food Cooling Methods & Two-Stage Chilling Poster. |
| 6 | `/food-safety-templates/food-allergy-warning` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/food-allergen-chart` | Duplicate allergen warning intent; consolidated into canonical UK Allergen Chart Generator. |
| 7 | `/food-safety-templates/cleaning-checklist-template` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/cleaning-schedule` | Near-duplicate cleaning checklist; consolidated into canonical Commercial Cleaning Schedule. |
| 8 | `/food-safety-templates/cleaning-restaurant` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/restaurant-cleaning-checklist` | Duplicate restaurant cleaning intent; consolidated into canonical Restaurant Cleaning Checklist. |
| 9 | `/food-safety-templates/pest-control-inspection-checklist` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/pest-control-checklist` | Duplicate pest inspection intent; consolidated into canonical Pest Control Checklist. |
| 10 | `/food-safety-templates/pest-management-plan` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/pest-control-checklist` | Duplicate pest management intent; consolidated into canonical Pest Control Checklist. |
| 11 | `/food-safety-templates/pest-control-template` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/pest-control-checklist` | Duplicate pest control template intent; consolidated into canonical Pest Control Checklist. |
| 12 | `/food-safety-templates/pest-control-sop` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/pest-control-checklist` | Duplicate pest SOP intent; consolidated into canonical Pest Control Checklist. |
| 13 | `/food-safety-templates/bar-opening-closing-checklist` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/opening-and-closing-checklist-template` | Opening/closing checklist variant; consolidated into canonical Daily Opening & Closing Checklist. |
| 14 | `/food-safety-templates/bar-opening-checklist` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/opening-and-closing-checklist-template` | Opening checklist variant; consolidated into canonical Daily Opening & Closing Checklist. |
| 15 | `/food-safety-templates/restaurant-opening-checklist` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/opening-and-closing-checklist-template` | Restaurant opening checklist variant; consolidated into canonical Daily Opening & Closing Checklist. |
| 16 | `/food-safety-templates/restaurant-checklist` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/opening-and-closing-checklist-template` | Restaurant checklist variant; consolidated into canonical Daily Opening & Closing Checklist. |
| 17 | `/food-safety-templates/kitchen-opening-and-closing-checklist` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/opening-and-closing-checklist-template` | Kitchen opening and closing checklist pair; consolidated into canonical Daily Opening & Closing Checklist. |
| 18 | `/food-safety-templates/allergen-poster` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/food-allergen-chart` | Allergen poster variant; consolidated into canonical UK Allergen Chart Generator. |
| 19 | `/food-safety-templates/allergen-control-sop` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/food-allergen-chart` | Allergen SOP variant; consolidated into canonical UK Allergen Chart Generator. |
| 20 | `/food-safety-templates/natashas-law` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/food-allergen-chart` | Natasha's Law slug consolidated into canonical UK Allergen Chart Generator. |
| 21 | `/food-safety-templates/deep-cleaning-checklist` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/restaurant-cleaning-checklist` | Deep cleaning checklist variant; consolidated into canonical Restaurant Cleaning Checklist. |
| 22 | `/food-safety-templates/restaurant-deep-cleaning-checklist` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/restaurant-cleaning-checklist` | Restaurant deep cleaning checklist variant; consolidated into canonical Restaurant Cleaning Checklist. |
| 23 | `/food-safety-templates/calculating-food-cost` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/food-cost-calculator` | Food cost calculator variant; consolidated into canonical Commercial Food Cost Calculator. |
| 24 | `/food-safety-templates/cutting-board-color-chart` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/chopping-board-colour-chart` | US-spelled cutting board slug redirected to British English UK chopping board standard. |
| 25 | `/food-safety-templates/fsma-food-traceability-list` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/food-traceability` | US FDA FSMA traceability redirected to general UK commercial traceability sheet. |
| 26 | `/food-safety-templates/fsma-compliance-checklist` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/opening-and-closing-checklist-template` | US FSMA checklist redirected to standard UK opening & closing operational checklist. |
| 27 | `/food-safety-templates/ecosure-inspection-checklist` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/restaurant-cleaning-checklist` | US commercial EcoSure private audit slug redirected to UK restaurant cleaning checklist. |
| 28 | `/food-safety-templates/amazon-seller-and-product-requirements` | `301 REDIRECT` | `https://www.saimdev.site/food-safety-templates/food-traceability` | Off-topic e-commerce seller requirements redirected to core food traceability log. |

---

## 7. Crawl-Budget Protected & Out-of-Jurisdiction Templates (113 URLs)

The following pages belong to the `/food-safety-templates/` catalog but are rendered with `<meta name="robots" content="noindex, follow">` and excluded from `sitemap.xml`. This prevents dilution of UK relevance and ensures search engines allocate crawl budget exclusively to high-converting, authoritative pages.

| # | Template URL Slug | Status | Est. Word Count | Primary Exclusion Reason |
|---|---|---|---|---|
| 1 | `/food-safety-templates/5-whys-root-cause-analysis-template` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 2 | `/food-safety-templates/approved-supplier-list` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 3 | `/food-safety-templates/beef-temperature-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 4 | `/food-safety-templates/big-6-foodborne-illnesses` | `NOINDEX, FOLLOW` | ~750 words | US-specific food regulation / agency standard, off-audience for UK food businesses |
| 5 | `/food-safety-templates/boiling-water-thermometer-calibration` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 6 | `/food-safety-templates/brc-audit` | `NOINDEX, FOLLOW` | ~750 words | Industrial manufacturing certification standard; off-audience for independent UK restaurants |
| 7 | `/food-safety-templates/burger-temp-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 8 | `/food-safety-templates/canned-food-expiration-dates-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 9 | `/food-safety-templates/chicken-pasteurization-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 10 | `/food-safety-templates/chicken-temperature-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 11 | `/food-safety-templates/cleaning-a-meat-slicer-poster` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 12 | `/food-safety-templates/cold-food-storage-rules` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 13 | `/food-safety-templates/cold-holding-food` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 14 | `/food-safety-templates/consumer-advisory` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 15 | `/food-safety-templates/cooking-log-template` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 16 | `/food-safety-templates/corrective-action-plan-template` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 17 | `/food-safety-templates/danger-zone-for-food` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 18 | `/food-safety-templates/defrosting-foods` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 19 | `/food-safety-templates/delivery-log` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 20 | `/food-safety-templates/dispatch-log` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 21 | `/food-safety-templates/duck-cooking-temperature-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 22 | `/food-safety-templates/eho-checklist` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 23 | `/food-safety-templates/fat-tom-poster` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 24 | `/food-safety-templates/fish-temperature-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 25 | `/food-safety-templates/food-expiration-dates-guidelines-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 26 | `/food-safety-templates/food-flow-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 27 | `/food-safety-templates/food-production-gmp-audit-checklist` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 28 | `/food-safety-templates/food-production-sheet` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 29 | `/food-safety-templates/food-receiving-procedure` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 30 | `/food-safety-templates/food-safety-and-sanitation` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 31 | `/food-safety-templates/food-safety-plan` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 32 | `/food-safety-templates/food-sanitation-rules` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 33 | `/food-safety-templates/food-temperature-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 34 | `/food-safety-templates/food-temperatures-poster` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 35 | `/food-safety-templates/freeze-drying-time-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 36 | `/food-safety-templates/freezer-organization-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 37 | `/food-safety-templates/fridge-layout-poster` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 38 | `/food-safety-templates/fridge-organization-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 39 | `/food-safety-templates/fridge-temperature-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 40 | `/food-safety-templates/fssc-certification-checklist` | `NOINDEX, FOLLOW` | ~750 words | Industrial manufacturing certification standard; off-audience for independent UK restaurants |
| 41 | `/food-safety-templates/get-iso-22000-certified` | `NOINDEX, FOLLOW` | ~750 words | Industrial manufacturing certification standard; off-audience for independent UK restaurants |
| 42 | `/food-safety-templates/gfsi-audit-checklist` | `NOINDEX, FOLLOW` | ~750 words | Industrial manufacturing certification standard; off-audience for independent UK restaurants |
| 43 | `/food-safety-templates/gmp-audit-checklist` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 44 | `/food-safety-templates/grease-trap-cleaning` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 45 | `/food-safety-templates/haccp-audit` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 46 | `/food-safety-templates/haccp-audit-checklist-template` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 47 | `/food-safety-templates/haccp-flow-chart-template` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 48 | `/food-safety-templates/haccp-risk-assessment` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 49 | `/food-safety-templates/ham-cooking-temperature-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 50 | `/food-safety-templates/hazard-analysis-template` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 51 | `/food-safety-templates/health-inspection-checklist` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 52 | `/food-safety-templates/hot-holding-temperature` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 53 | `/food-safety-templates/how-do-you-calibrate-a-thermometer` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 54 | `/food-safety-templates/how-long-does-butter-last-poster` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 55 | `/food-safety-templates/how-long-to-keep-leftovers-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 56 | `/food-safety-templates/how-to-use-a-food-thermometer` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 57 | `/food-safety-templates/how-to-use-a-meat-thermometer` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 58 | `/food-safety-templates/ingredient-traceability` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 59 | `/food-safety-templates/iso-22000-internal-audit-checklist` | `NOINDEX, FOLLOW` | ~750 words | Industrial manufacturing certification standard; off-audience for independent UK restaurants |
| 60 | `/food-safety-templates/juice-pasteurization-temperature-time-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 61 | `/food-safety-templates/kitchen-sop` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 62 | `/food-safety-templates/kitchen-utensils-list` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 63 | `/food-safety-templates/kosher-certification` | `NOINDEX, FOLLOW` | ~750 words | Specialised non-hospitality certification / platform requirement |
| 64 | `/food-safety-templates/lamb-temperature-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 65 | `/food-safety-templates/meat-cooking-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 66 | `/food-safety-templates/meat-pasteurization-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 67 | `/food-safety-templates/milk-pasteurization-temperature-time-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 68 | `/food-safety-templates/non-gmo` | `NOINDEX, FOLLOW` | ~750 words | Specialised non-hospitality certification / platform requirement |
| 69 | `/food-safety-templates/opening-a-restaurant-checklist` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 70 | `/food-safety-templates/pork-temperature-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 71 | `/food-safety-templates/poultry-pasteurization-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 72 | `/food-safety-templates/prevent-freezer-burn` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 73 | `/food-safety-templates/printable-retail-store-daily-checklist` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 74 | `/food-safety-templates/product-specification-sheet` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 75 | `/food-safety-templates/product-specification-template` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 76 | `/food-safety-templates/proper-food-storage-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 77 | `/food-safety-templates/proper-method-for-cleaning-dirty-utensils` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 78 | `/food-safety-templates/receiving-log` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 79 | `/food-safety-templates/recipe-card-generator` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 80 | `/food-safety-templates/restaurant-equipment-list` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 81 | `/food-safety-templates/restaurant-fire-inspection-checklist` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 82 | `/food-safety-templates/restaurant-food-safety-procedures` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 83 | `/food-safety-templates/restaurant-health-inspection-checklist` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 84 | `/food-safety-templates/restaurant-hood-cleaning` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 85 | `/food-safety-templates/restaurant-inventory-template` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 86 | `/food-safety-templates/restaurant-maintenance-checklist` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 87 | `/food-safety-templates/restaurant-manager-responsibilities` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 88 | `/food-safety-templates/restaurant-schedule-template` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 89 | `/food-safety-templates/restaurant-sop` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 90 | `/food-safety-templates/restaurant-steps-of-service` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 91 | `/food-safety-templates/restroom-cleaning-checklist-log` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 92 | `/food-safety-templates/retail-store-daily-checklist` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 93 | `/food-safety-templates/sanitation-standard-operating-procedures` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 94 | `/food-safety-templates/sell-by-date` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 95 | `/food-safety-templates/sqf-audit-checklist` | `NOINDEX, FOLLOW` | ~750 words | Industrial manufacturing certification standard; off-audience for independent UK restaurants |
| 96 | `/food-safety-templates/ssop` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 97 | `/food-safety-templates/standard-operating-procedure-in-food-industry` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 98 | `/food-safety-templates/starting-a-food-business-checklist` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 99 | `/food-safety-templates/steak-cooking-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 100 | `/food-safety-templates/thermometer-calibration-log` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 101 | `/food-safety-templates/three-sink-method` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 102 | `/food-safety-templates/turkey-cooking-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 103 | `/food-safety-templates/turkey-pasteurization-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 104 | `/food-safety-templates/vacuum-sealed-food-shelf-life-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 105 | `/food-safety-templates/venison-cooking-temperature-chart` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 106 | `/food-safety-templates/waste-management-plan` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 107 | `/food-safety-templates/waste-management-plan-sop` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 108 | `/food-safety-templates/waste-management-schedule` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 109 | `/food-safety-templates/what-are-the-critical-control-points-for-food-safety` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 110 | `/food-safety-templates/what-is-the-minimum-hot-holding-temperature-for-fried-chicken` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 111 | `/food-safety-templates/what-is-the-minimum-hot-holding-temperature-for-hot-dog` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 112 | `/food-safety-templates/what-is-the-minimum-hot-holding-temperature-requirement-for-pizza` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |
| 113 | `/food-safety-templates/when-should-you-wash-your-hands` | `NOINDEX, FOLLOW` | ~750 words | Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat |

---

## 8. Verification & Enforcement Architecture

1. **Automated CI Guards:** `scripts/run_all_guards.mjs` executes 11 test suites verifying metadata lengths, canonical matching, robots directives, schema conformity, and forbidden claims before every deployment.
2. **Next.js Engine Metadata Enforcement:** In `app/food-safety-templates/[slug]/page.tsx`, `generateMetadata` checks `src/data/page_plan.json`. If `plan.bucket` is not `KEEP` or `IMPROVE`, it automatically emits `robots: { index: false, follow: true }`.
3. **Sitemap Dynamic Filtering:** `app/sitemap.ts` programmatically queries `pagePlan` and filters out all non-KEEP/IMPROVE templates, ensuring search engine bots are never fed noindex URLs.
4. **Server Edge Redirects:** `next.config.mjs` and `vercel.json` enforce all 28 HTTP 301 redirects at the edge before any Next.js runtime execution.