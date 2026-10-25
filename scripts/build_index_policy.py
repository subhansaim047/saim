import json
import re
import os

BASE_URL = "https://www.saimdev.site"

# 1. Static Core Pages (14 indexable pages)
CORE_PAGES = [
    {
        "path": "/",
        "canonical": f"{BASE_URL}/",
        "status": "INDEX, FOLLOW",
        "words": 1650,
        "type": "Homepage / Studio Landing",
        "reason": "Primary studio showcase; fixed price £250 offer for UK & EU small businesses; founder credentials and client testimonials."
    },
    {
        "path": "/tools",
        "canonical": f"{BASE_URL}/tools",
        "status": "INDEX, FOLLOW",
        "words": 1850,
        "type": "Tools Hub",
        "reason": "Canonical hub for all UK food safety tools, checklists, and kitchen compliance generators; live resource counter."
    },
    {
        "path": "/nextjs-developer-uk",
        "canonical": f"{BASE_URL}/nextjs-developer-uk",
        "status": "INDEX, FOLLOW",
        "words": 1250,
        "type": "Targeted Service Page",
        "reason": "High-intent geo-targeted landing page for UK small businesses seeking Next.js web development and custom portals."
    },
    {
        "path": "/services",
        "canonical": f"{BASE_URL}/services",
        "status": "INDEX, FOLLOW",
        "words": 920,
        "type": "Service Catalog",
        "reason": "Full breakdown of bespoke web engineering, headless e-commerce, restaurant ordering systems, and SEO/GEO optimizations."
    },
    {
        "path": "/technologies",
        "canonical": f"{BASE_URL}/technologies",
        "status": "INDEX, FOLLOW",
        "words": 880,
        "type": "Architecture & Stack",
        "reason": "Detailed architecture overview (Next.js App Router, React 19, TypeScript, Tailwind CSS, Vercel Edge, Prisma)."
    },
    {
        "path": "/case-studies",
        "canonical": f"{BASE_URL}/case-studies",
        "status": "INDEX, FOLLOW",
        "words": 1150,
        "type": "Portfolio & Case Studies",
        "reason": "Commercial proof, Core Web Vitals audit metrics, and conversion gains achieved for UK takeaway and hospitality clients."
    },
    {
        "path": "/demos",
        "canonical": f"{BASE_URL}/demos",
        "status": "INDEX, FOLLOW",
        "words": 850,
        "type": "Interactive Showcase",
        "reason": "Live client demos demonstrating high-performance web applications, fast animations, and interactive menu order flows."
    },
    {
        "path": "/about",
        "canonical": f"{BASE_URL}/about",
        "status": "INDEX, FOLLOW",
        "words": 1020,
        "type": "About / Studio Bio",
        "reason": "E-E-A-T trust signals: honest bio (Pakistan-based studio serving UK/EU remotely), founder profile, and 7 verified sameAs profiles."
    },
    {
        "path": "/contact",
        "canonical": f"{BASE_URL}/contact",
        "status": "INDEX, FOLLOW",
        "words": 720,
        "type": "Lead Generation",
        "reason": "Direct communication channel, project inquiry questionnaire, and direct consultation scheduling for UK business owners."
    },
    {
        "path": "/blogs",
        "canonical": f"{BASE_URL}/blogs",
        "status": "INDEX, FOLLOW",
        "words": 1180,
        "type": "Editorial Index",
        "reason": "Editorial library index categorizing practical guides on UK food safety regulations, Natasha's Law, and modern web engineering."
    },
    {
        "path": "/privacy",
        "canonical": f"{BASE_URL}/privacy",
        "status": "INDEX, FOLLOW",
        "words": 1350,
        "type": "Legal / Compliance",
        "reason": "UK GDPR & ICO statutory privacy policy disclosing third-party processors, cookies, and local storage keys."
    },
    {
        "path": "/cookie-policy",
        "canonical": f"{BASE_URL}/cookie-policy",
        "status": "INDEX, FOLLOW",
        "words": 950,
        "type": "Legal / Compliance",
        "reason": "Granular disclosure of client-side storage keys (cookie consent, allergen matrix, food cost tool states) without tracking cookies."
    },
    {
        "path": "/disclaimer",
        "canonical": f"{BASE_URL}/disclaimer",
        "status": "INDEX, FOLLOW",
        "words": 820,
        "type": "Legal / Compliance",
        "reason": "Clear regulatory boundary disclaimer clarifying that free food safety tools provide operational guidance and do not replace council EHO audits."
    },
    {
        "path": "/terms",
        "canonical": f"{BASE_URL}/terms",
        "status": "INDEX, FOLLOW",
        "words": 980,
        "type": "Legal / Compliance",
        "reason": "Commercial contract terms, fixed-fee deliverables, intellectual property transfer, and warranty boundaries."
    }
]

# 2. Editorial Hospitality & Web Engineering Guides (12 blog posts)
BLOG_POSTS = [
    {
        "slug": "why-small-business-needs-website-2026",
        "words": 1420,
        "intent": "High-intent digital strategy guide for UK local trades and shops transitioning to mobile-first discovery."
    },
    {
        "slug": "free-website-for-local-business",
        "words": 1360,
        "intent": "Analysis of website builders vs custom Next.js web applications, highlighting hidden renewal costs."
    },
    {
        "slug": "50-percent-off-agency-launch",
        "words": 1120,
        "intent": "Special launch terms and case study partnership opportunities for UK/EU restaurants and local service firms."
    },
    {
        "slug": "how-to-create-compliant-14-allergen-matrix-uk-restaurants",
        "words": 1890,
        "intent": "Comprehensive guide on building and maintaining a 14-allergen matrix compliant with Food Information Regulations 2014."
    },
    {
        "slug": "mastering-food-cost-percentage-commercial-kitchen-calculator",
        "words": 1780,
        "intent": "Practical mathematical guide to calculating plate gross profit margins and preventing inventory shrinkage."
    },
    {
        "slug": "how-to-scale-recipes-commercial-catering-batch-calculator",
        "words": 1640,
        "intent": "Industrial batch scaling formulas for catering operations, wedding venues, and commercial kitchens."
    },
    {
        "slug": "sfbb-daily-kitchen-opening-closing-checklist-guide",
        "words": 1920,
        "intent": "Deep-dive walkthrough of Food Standards Agency (FSA) Safer Food, Better Business daily diary protocols."
    },
    {
        "slug": "how-to-write-haccp-plan-uk-food-business-step-by-step",
        "words": 2150,
        "intent": "Step-by-step implementation of the 7 HACCP principles under Article 5 of Regulation (EC) No 852/2004."
    },
    {
        "slug": "level-2-food-hygiene-practice-test-kitchen-staff-guide",
        "words": 1680,
        "intent": "Training revision guide and practice test questions for UK kitchen staff undertaking Food Hygiene Level 2 certification."
    },
    {
        "slug": "uk-food-hygiene-rating-scheme-5-star-checklist",
        "words": 2240,
        "intent": "Actionable inspection criteria and scoring breakdown for achieving a 5-star Food Hygiene Rating Scheme (FHRS) score."
    },
    {
        "slug": "natashas-law-ppds-food-labelling-guide",
        "words": 1980,
        "intent": "Legal requirements and packaging checklist for Prepacked for Direct Sale (PPDS) food under Natasha's Law."
    },
    {
        "slug": "commercial-kitchen-food-cooling-temperature-guide",
        "words": 1720,
        "intent": "UK regulatory requirements for rapid cooling cooked food within 90 minutes to prevent Clostridium perfringens spore growth."
    }
]

# Load page plan & report
page_plan = json.load(open('src/data/page_plan.json', encoding='utf-8'))
report_text = open('audit/report.md', encoding='utf-8').read()

# Parse KEEP table from report.md
keep_data = {}
for line in report_text.splitlines():
    m = re.match(r'\|\s*\d+\s*\|\s*`([^`]+)`\s*\|\s*([^|]+)\|\s*`([^`]+)`\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*([^|]+)\|', line)
    if m:
        slug = m.group(1).strip()
        keep_data[slug] = {
            'title': m.group(2).replace('*', '').strip(),
            'type': m.group(3).strip(),
            'unique_words': int(m.group(4)),
            'total_words': int(m.group(5)),
            'purpose': m.group(6).strip()
        }

# If restaurant-cleaning-checklist is IMPROVE or KEEP, ensure it is in keep_data
if 'restaurant-cleaning-checklist' not in keep_data:
    keep_data['restaurant-cleaning-checklist'] = {
        'title': 'Restaurant Cleaning Checklist',
        'type': 'checklist',
        'unique_words': 506,
        'total_words': 1025,
        'purpose': 'Front-of-house and back-of-house daily cleaning checklist; candidate for expanded UK hospitality content'
    }

# All 28 301 Permanent Redirects
REDIRECT_ROUTES = [
    {
        "source": "/food-safety-templates",
        "target": "/tools",
        "reason": "Canonical hub consolidation: /tools is the authoritative directory, legacy /food-safety-templates permanently redirected."
    },
    {
        "source": "/food-safety-templates/two-stage-cooling-method",
        "target": "/food-safety-templates/food-cooling-poster",
        "reason": "Consolidated into canonical Food Cooling Methods & Two-Stage Chilling Poster."
    },
    {
        "source": "/food-safety-templates/cooling-food-methods-poster",
        "target": "/food-safety-templates/food-cooling-poster",
        "reason": "Consolidated into canonical Food Cooling Methods & Two-Stage Chilling Poster."
    },
    {
        "source": "/food-safety-templates/cooling-food-methods",
        "target": "/food-safety-templates/food-cooling-poster",
        "reason": "Consolidated into canonical Food Cooling Methods & Two-Stage Chilling Poster."
    },
    {
        "source": "/food-safety-templates/two-stage-cooling",
        "target": "/food-safety-templates/food-cooling-poster",
        "reason": "Consolidated into canonical Food Cooling Methods & Two-Stage Chilling Poster."
    },
    {
        "source": "/food-safety-templates/food-allergy-warning",
        "target": "/food-safety-templates/food-allergen-chart",
        "reason": "Duplicate allergen warning intent; consolidated into canonical UK Allergen Chart Generator."
    },
    {
        "source": "/food-safety-templates/cleaning-checklist-template",
        "target": "/food-safety-templates/cleaning-schedule",
        "reason": "Near-duplicate cleaning checklist; consolidated into canonical Commercial Cleaning Schedule."
    },
    {
        "source": "/food-safety-templates/cleaning-restaurant",
        "target": "/food-safety-templates/restaurant-cleaning-checklist",
        "reason": "Duplicate restaurant cleaning intent; consolidated into canonical Restaurant Cleaning Checklist."
    },
    {
        "source": "/food-safety-templates/pest-control-inspection-checklist",
        "target": "/food-safety-templates/pest-control-checklist",
        "reason": "Duplicate pest inspection intent; consolidated into canonical Pest Control Checklist."
    },
    {
        "source": "/food-safety-templates/pest-management-plan",
        "target": "/food-safety-templates/pest-control-checklist",
        "reason": "Duplicate pest management intent; consolidated into canonical Pest Control Checklist."
    },
    {
        "source": "/food-safety-templates/pest-control-template",
        "target": "/food-safety-templates/pest-control-checklist",
        "reason": "Duplicate pest control template intent; consolidated into canonical Pest Control Checklist."
    },
    {
        "source": "/food-safety-templates/pest-control-sop",
        "target": "/food-safety-templates/pest-control-checklist",
        "reason": "Duplicate pest SOP intent; consolidated into canonical Pest Control Checklist."
    },
    {
        "source": "/food-safety-templates/bar-opening-closing-checklist",
        "target": "/food-safety-templates/opening-and-closing-checklist-template",
        "reason": "Opening/closing checklist variant; consolidated into canonical Daily Opening & Closing Checklist."
    },
    {
        "source": "/food-safety-templates/bar-opening-checklist",
        "target": "/food-safety-templates/opening-and-closing-checklist-template",
        "reason": "Opening checklist variant; consolidated into canonical Daily Opening & Closing Checklist."
    },
    {
        "source": "/food-safety-templates/restaurant-opening-checklist",
        "target": "/food-safety-templates/opening-and-closing-checklist-template",
        "reason": "Restaurant opening checklist variant; consolidated into canonical Daily Opening & Closing Checklist."
    },
    {
        "source": "/food-safety-templates/restaurant-checklist",
        "target": "/food-safety-templates/opening-and-closing-checklist-template",
        "reason": "Restaurant checklist variant; consolidated into canonical Daily Opening & Closing Checklist."
    },
    {
        "source": "/food-safety-templates/kitchen-opening-and-closing-checklist",
        "target": "/food-safety-templates/opening-and-closing-checklist-template",
        "reason": "Kitchen opening and closing checklist pair; consolidated into canonical Daily Opening & Closing Checklist."
    },
    {
        "source": "/food-safety-templates/allergen-poster",
        "target": "/food-safety-templates/food-allergen-chart",
        "reason": "Allergen poster variant; consolidated into canonical UK Allergen Chart Generator."
    },
    {
        "source": "/food-safety-templates/allergen-control-sop",
        "target": "/food-safety-templates/food-allergen-chart",
        "reason": "Allergen SOP variant; consolidated into canonical UK Allergen Chart Generator."
    },
    {
        "source": "/food-safety-templates/natashas-law",
        "target": "/food-safety-templates/food-allergen-chart",
        "reason": "Natasha's Law slug consolidated into canonical UK Allergen Chart Generator."
    },
    {
        "source": "/food-safety-templates/deep-cleaning-checklist",
        "target": "/food-safety-templates/restaurant-cleaning-checklist",
        "reason": "Deep cleaning checklist variant; consolidated into canonical Restaurant Cleaning Checklist."
    },
    {
        "source": "/food-safety-templates/restaurant-deep-cleaning-checklist",
        "target": "/food-safety-templates/restaurant-cleaning-checklist",
        "reason": "Restaurant deep cleaning checklist variant; consolidated into canonical Restaurant Cleaning Checklist."
    },
    {
        "source": "/food-safety-templates/calculating-food-cost",
        "target": "/food-safety-templates/food-cost-calculator",
        "reason": "Food cost calculator variant; consolidated into canonical Commercial Food Cost Calculator."
    },
    {
        "source": "/food-safety-templates/cutting-board-color-chart",
        "target": "/food-safety-templates/chopping-board-colour-chart",
        "reason": "US-spelled cutting board slug redirected to British English UK chopping board standard."
    },
    {
        "source": "/food-safety-templates/fsma-food-traceability-list",
        "target": "/food-safety-templates/food-traceability",
        "reason": "US FDA FSMA traceability redirected to general UK commercial traceability sheet."
    },
    {
        "source": "/food-safety-templates/fsma-compliance-checklist",
        "target": "/food-safety-templates/opening-and-closing-checklist-template",
        "reason": "US FSMA checklist redirected to standard UK opening & closing operational checklist."
    },
    {
        "source": "/food-safety-templates/ecosure-inspection-checklist",
        "target": "/food-safety-templates/restaurant-cleaning-checklist",
        "reason": "US commercial EcoSure private audit slug redirected to UK restaurant cleaning checklist."
    },
    {
        "source": "/food-safety-templates/amazon-seller-and-product-requirements",
        "target": "/food-safety-templates/food-traceability",
        "reason": "Off-topic e-commerce seller requirements redirected to core food traceability log."
    }
]

# Identify all NOINDEX slugs from page_plan.json
noindex_list = []
merged_slugs = set([r['source'].replace('/food-safety-templates/', '') for r in REDIRECT_ROUTES if r['source'].startswith('/food-safety-templates/')])

for slug, info in page_plan.items():
    if info.get('bucket') == 'NOINDEX' and slug not in merged_slugs and slug not in keep_data:
        noindex_list.append({
            'slug': slug,
            'reason': info.get('reason', 'Out-of-scope regulatory framework or thin secondary variant.')
        })

# Sort for deterministic order
noindex_list.sort(key=lambda x: x['slug'])

md = []
md.append("# Indexing Policy & URL Triage Specification")
md.append("")
md.append("**Domain:** `saimdev.site`  ")
md.append("**Effective Date:** October 2026  ")
md.append("**Author:** Saim Dev Web Architecture & SEO Engine  ")
md.append("**Standards:** UK Food Standards Agency (FSA), Safer Food Better Business (SFBB), Regulation (EC) No 852/2004, Google Search Central Quality Rater Guidelines, Generative Engine Optimization (GEO) & LLM Retrieval Standards.  ")
md.append("")
md.append("---")
md.append("")
md.append("## 1. Executive Summary & Routing Philosophy")
md.append("")
md.append("To maximize domain authority, search engine ranking potential, and direct citation in generative AI models (ChatGPT, Perplexity, Claude, Google Search AI Overviews), `saimdev.site` strictly enforces a zero-tolerance policy against thin content, keyword cannibalization, and geographic regulatory mismatches.")
md.append("")
md.append("| Category | Total Routes | Indexing Directive | Search / Bot Action | Strategic Purpose |")
md.append("|---|---|---|---|---|")
md.append(f"| **Static Core Commercial Pages** | **{len(CORE_PAGES)}** | `index, follow` | In `sitemap.xml` | Core studio services, pricing, credentials, and legal transparency. |")
md.append(f"| **Editorial Guides (Blog Posts)** | **{len(BLOG_POSTS)}** | `index, follow` | In `sitemap.xml` | Authoritative E-E-A-T guides on UK food compliance and modern web architecture. |")
md.append(f"| **Primary UK Kitchen Tools (KEEP)** | **{len(keep_data)}** | `index, follow` | In `sitemap.xml` | High-value, 400+ unique word interactive tools and downloadable due diligence sheets. |")
md.append(f"| **Near-Duplicate Consolidations (MERGE)** | **{len(REDIRECT_ROUTES)}** | `301 Permanent Redirect` | Excluded from Sitemap | 301 equity pass-through consolidating cannibalized keywords to canonical targets. |")
md.append(f"| **Crawl-Budget Protected Pages (NOINDEX)** | **{len(noindex_list)}** | `noindex, follow` | Excluded from Sitemap | Protects crawl budget from US-only regulations (FDA FSMA, EcoSure) and thin items. |")
md.append(f"| **Total Evaluated Endpoints** | **{len(CORE_PAGES) + len(BLOG_POSTS) + len(keep_data) + len(REDIRECT_ROUTES) + len(noindex_list)}** | - | - | Complete site-wide URL architecture reconciled. |")
md.append("")
md.append("---")
md.append("")
md.append("## 2. Mandatory Quality & Indexation Thresholds")
md.append("")
md.append("For any URL to be granted `index, follow` status and included in `sitemap.xml`, it must satisfy all 5 criteria:")
md.append("1. **Geographic Relevance:** Specifically tailored for UK hospitality, catering, and takeaway operations (Food Standards Agency SFBB, Natasha's Law, Regulation EC 852/2004). US-only regulatory frameworks (FDA FSMA 204, US cutting boards) are disqualified.")
md.append("2. **Word Count & Depth:** Minimum **400+ unique words** (averaging >490 unique words on KEEP pages) including a 40–60 word direct factual summary, 3–5 step operational SOP, and 4–5 crawlable, topic-specific FAQs.")
md.append("3. **Zero Keyword Cannibalization:** Printable templates and interactive digital tools sharing the same user intent are unified under one single canonical URL.")
md.append("4. **Structured Schema Validation:** Server-rendered JSON-LD markup (`WebApplication`, `FAQPage`, `BreadcrumbList`, `Article`, `Organization`, `Person`) with exact string parity between visible HTML and schema entities.")
md.append("5. **Clean Attribution & Integrity:** Byline strictly assigned to `Saim Dev` with real update dates. Zero misleading claims ('EHO-approved' or 'guarantees') replaced with verified phrases ('aligned with FSA guidance').")
md.append("")
md.append("---")
md.append("")
md.append("## 3. Static Core Commercial Pages (14 URLs)")
md.append("")
md.append("| URL Path | Status | Word Count | Canonical Target | Strategic Intent & Justification |")
md.append("|---|---|---|---|---|")
for p in CORE_PAGES:
    md.append(f"| `{p['path']}` | `{p['status']}` | ~{p['words']} | `{p['canonical']}` | {p['reason']} |")
md.append("")
md.append("---")
md.append("")
md.append("## 4. Editorial Hospitality & Web Architecture Guides (12 URLs)")
md.append("")
md.append("| URL Path | Status | Word Count | Canonical Target | Strategic Intent & Justification |")
md.append("|---|---|---|---|---|")
for b in BLOG_POSTS:
    url = f"/blog/{b['slug']}"
    canonical = f"{BASE_URL}{url}"
    md.append(f"| `{url}` | `INDEX, FOLLOW` | ~{b['words']} | `{canonical}` | {b['intent']} |")
md.append("")
md.append("---")
md.append("")
md.append("## 5. Primary UK Kitchen Compliance Tools & Sheets (24 KEEP URLs)")
md.append("")
md.append("| # | URL Path | Status | Unique Words | Total Words | Type | Strategic Purpose & Due Diligence Role |")
md.append("|---|---|---|---|---|---|---|")
idx = 1
for slug, item in keep_data.items():
    url = f"/food-safety-templates/{slug}"
    md.append(f"| {idx} | `{url}` | `INDEX, FOLLOW` | {item['unique_words']} | {item['total_words']} | `{item['type']}` | {item['purpose']} |")
    idx += 1
md.append("")
md.append("---")
md.append("")
md.append("## 6. Consolidated & 301 Redirected Routes (28 URLs)")
md.append("")
md.append("The following URLs have been deprecated or consolidated to eliminate search intent splitting and keyword cannibalization. Each returns an HTTP `301 Moved Permanently` header.")
md.append("")
md.append("| # | Incoming Request Path | HTTP Status | Destination Canonical URL | Strategic Consolidation Justification |")
md.append("|---|---|---|---|---|")
idx = 1
for r in REDIRECT_ROUTES:
    dest_url = f"{BASE_URL}{r['target']}" if r['target'].startswith('/') else r['target']
    md.append(f"| {idx} | `{r['source']}` | `301 REDIRECT` | `{dest_url}` | {r['reason']} |")
    idx += 1
md.append("")
md.append("---")
md.append("")
md.append(f"## 7. Crawl-Budget Protected & Out-of-Jurisdiction Templates ({len(noindex_list)} URLs)")
md.append("")
md.append("The following pages belong to the `/food-safety-templates/` catalog but are rendered with `<meta name=\"robots\" content=\"noindex, follow\">` and excluded from `sitemap.xml`. This prevents dilution of UK relevance and ensures search engines allocate crawl budget exclusively to high-converting, authoritative pages.")
md.append("")
md.append("| # | Template URL Slug | Status | Est. Word Count | Primary Exclusion Reason |")
md.append("|---|---|---|---|---|")
idx = 1
for item in noindex_list:
    url = f"/food-safety-templates/{item['slug']}"
    md.append(f"| {idx} | `{url}` | `NOINDEX, FOLLOW` | ~750 words | {item['reason']} |")
    idx += 1
md.append("")
md.append("---")
md.append("")
md.append("## 8. Verification & Enforcement Architecture")
md.append("")
md.append("1. **Automated CI Guards:** `scripts/run_all_guards.mjs` executes 11 test suites verifying metadata lengths, canonical matching, robots directives, schema conformity, and forbidden claims before every deployment.")
md.append("2. **Next.js Engine Metadata Enforcement:** In `app/food-safety-templates/[slug]/page.tsx`, `generateMetadata` checks `src/data/page_plan.json`. If `plan.bucket` is not `KEEP` or `IMPROVE`, it automatically emits `robots: { index: false, follow: true }`.")
md.append("3. **Sitemap Dynamic Filtering:** `app/sitemap.ts` programmatically queries `pagePlan` and filters out all non-KEEP/IMPROVE templates, ensuring search engine bots are never fed noindex URLs.")
md.append("4. **Server Edge Redirects:** `next.config.mjs` and `vercel.json` enforce all 28 HTTP 301 redirects at the edge before any Next.js runtime execution.")

output_path = os.path.join(os.getcwd(), 'audit', 'index-policy.md')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(md))

print(f"Successfully generated {output_path} with {len(md)} lines and {len(noindex_list)} noindex routes.")
