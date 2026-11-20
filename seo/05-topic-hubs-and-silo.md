# Phase 5: Topical Clusters & Silo Architecture (`https://www.saimdev.site`)

This document defines the **4-Hub Topical Silo Architecture** (+ Corporate E-E-A-T & Legal Governance Silo) implemented across all **55 indexable URLs** on `https://www.saimdev.site`, including the `/tools` hub and all **6 interactive browser utilities**.

---

## 1. Core Silo Engineering Rules

1. **One Cluster = One Canonical Page**: Every search-intent cluster (`CL-01` through `CL-55`) maps to exactly one indexable URL. No two pages target the same primary keyword or SERP intent.
2. **Vertical Pillar ↔ Subtopic Reciprocity**:
   - Every **Topic Hub Pillar Page** links downward to all of its supporting service pages, city hubs, interactive tools, and editorial playbooks using descriptive keyword-aligned anchor text.
   - Every **Supporting Page, Tool, and Blog Guide** links back upward to its Parent Pillar via:
     - Top breadcrumb hierarchy (`BreadcrumbList` JSON-LD + visible breadcrumb nav)
     - Contextual intro paragraph link within the first 150 words
     - The embedded `TopicSiloNavigator` (`src/components/ui/EditorialVisualPack.tsx`) and `BlogSiloNav` (`src/components/blog/BlogSiloNav.tsx`) modules.
3. **Horizontal Sibling Cross-Linking**:
   - Every service page links to 3–5 sibling services within the same hub.
   - Every city page (`/services/takeaway-web-design-london`, `-manchester`, `-birmingham`) cross-links to its 2 sibling UK city hubs and the `/services/takeaway-web-design` national pillar.
   - Every interactive tool on `/tools` links to its **1:1 companion informational blog guide** (and vice versa), ensuring transactional tool SERPs and informational how-to SERPs reinforce each other without cannibalizing.
4. **Zero Internal Redirect Hops**: All internal `<Link>` and `<a>` tags point directly to canonical `200 OK` destination URLs. Legacy and merged URLs (`/food-safety-templates/*`, `/tools/food-allergen-chart`, `/blog/why-small-business-needs-website-2026`, `/blog/50-percent-off-agency-launch`, `/blog/fhrs-food-hygiene-rating-guide-uk`) are resolved via 1-hop permanent edge redirects in `next.config.mjs` and `vercel.json` and excluded from `sitemap.xml`.

---

## 2. Visual Silo Topology

```
                                  [ / ] Brand & Agency Root
                         "custom next.js web agency uk" (CL-01)
                                            │
        ┌─────────────────────────┬─────────┴───────────────┬─────────────────────────┐
        ▼                         ▼                         ▼                         ▼
[HUB 1: NEXT.JS & APPS]   [HUB 2: E-COMMERCE & CRO]  [HUB 3: TAKEAWAY & TOOLS] [HUB 4: SEO & MIGRATION]
Pillar:                   Pillar:                    Pillar:                   Pillar:
/services/website-        /services/ecommerce-       /services/takeaway-       /services/seo-services
development (CL-17)       development (CL-19)        web-design (CL-10)        (CL-21)
```

---

## 3. Hub-by-Hub Cluster Architecture & Internal Link Matrix

### Hub 1: Next.js 16 Website Engineering & Custom Web Applications
* **Parent Pillar**: `/services/website-development` (`CL-17` — Primary Keyword: `next.js website development uk`)
* **Commercial Root & Directory**:
  * `/` (`CL-01` — `custom next.js web agency uk`)
  * `/services` (`CL-15` — `web development services uk`)
  * `/overview` (`CL-02` — `next.js website technical specifications uk`)
  * `/pricing` (`CL-28` — `fixed price website development packages uk`)
  * `/process` (`CL-27` — `web development process and milestone workflow`)
  * `/blogs` (`CL-34` — `next.js web development and uk hospitality compliance guides`)
* **Supporting Service & Geo/Role Pages**:
  * `/services/business-websites` (`CL-23` — `small business website design uk`)
  * `/services/custom-web-apps` (`CL-18` — `custom web application development uk`)
  * `/services/website-clone` (`CL-16` — `webflow and figma to next.js conversion service`)
  * `/nextjs-developer-uk` (`CL-14` — `freelance next.js developer uk`)
* **Interactive Hub 1 Tool**:
  * `/tools/website-cost-calculator` (`CL-04` — `website cost calculator uk`)
* **Supporting Editorial Guides**:
  * `/blog/nextjs-website-development-cost-uk-us` (`CL-36` — `next.js website development cost uk`)
  * `/blog/nextjs-website-development-guide-uk-us-startups` (`CL-39` — `next.js architecture guide for startups`)
  * `/blog/small-business-website-packages-guide` (`CL-42` — `small business website packages uk guide`)
  * `/blog/why-small-business-needs-website` (`CL-40` — `why small businesses need a website uk`)
  * `/blog/free-website-for-local-business` (`CL-41` — `free website for small business uk pros and cons`)

| Source Page | Links Up To Pillar | Links To Interactive Tool | Links To Supporting Siblings & Guides |Required Descriptive Anchor Text Examples |
| :--- | :--- | :--- | :--- | :--- |
| `/services/website-development` | Self (Hub 1 Pillar) | `/tools/website-cost-calculator` | `/services/business-websites`, `/services/custom-web-apps`, `/services/website-clone`, `/nextjs-developer-uk`, `/blog/nextjs-website-development-cost-uk-us` | *"interactive website cost calculator UK"*, *"custom business website design UK"*, *"freelance Next.js developer UK"* |
| `/tools/website-cost-calculator` | `/services/website-development` | Self (`CL-04`) | `/pricing`, `/blog/nextjs-website-development-cost-uk-us`, `/blog/small-business-website-packages-guide`, `/services/ecommerce-shopify` | *"Next.js 16 business websites"*, *"fixed-price website development packages UK"*, *"Next.js website development cost UK & US"* |
| `/nextjs-developer-uk` | `/services/website-development` | `/tools/website-cost-calculator` | `/services/custom-web-apps`, `/services/website-clone`, `/blog/nextjs-website-development-guide-uk-us-startups` | *"Next.js website development UK"*, *"custom web application development"*, *"1:1 Webflow & Figma to Next.js rebuilds"* |

---

### Hub 2: Headless Shopify, Custom E-Commerce & Conversion Rate Optimization (CRO)
* **Parent Pillar**: `/services/ecommerce-development` (`CL-19` — Primary Keyword: `custom next.js ecommerce development uk`)
* **Supporting Service Pages**:
  * `/services/ecommerce-shopify` (`CL-22` — `headless shopify development uk`)
  * `/services/landing-pages-cro` (`CL-25` — `high converting landing page design uk`)
* **Commercial Proof & Interactive Showcases**:
  * `/demos` (`CL-31` — `interactive business and takeaway website demos uk`)
  * `/case-studies` (`CL-30` — `next.js website performance case studies`)
* **Cross-Hub Tool & Cost Connection**:
  * `/tools/website-cost-calculator` (`CL-04` — E-Commerce TCO calculator preset)
  * `/blog/nextjs-website-development-cost-uk-us` (`CL-36` — 24-month Shopify app tax vs custom code comparison)

| Source Page | Links Up To Pillar | Links To Proof & Tools | Links To Sibling Pages | Approved Descriptive Anchor Text Examples |
| :--- | :--- | :--- | :--- | :--- |
| `/services/ecommerce-development` | Self (Hub 2 Pillar) | `/demos`, `/case-studies`, `/tools/website-cost-calculator` | `/services/ecommerce-shopify`, `/services/landing-pages-cro`, `/services/website-speed-optimization` | *"headless Shopify Storefront API development"*, *"high-converting paid ad landing pages"*, *"live interactive e-commerce demos"* |
| `/services/ecommerce-shopify` | `/services/ecommerce-development` | `/demos`, `/tools/website-cost-calculator` | `/services/landing-pages-cro`, `/services/website-speed-optimization`, `/services/website-clone` | *"custom Next.js e-commerce storefronts"*, *"Core Web Vitals speed optimization"*, *"test live headless storefront demos"* |
| `/services/landing-pages-cro` | `/services/ecommerce-development` | `/demos`, `/case-studies` | `/services/business-websites`, `/services/website-speed-optimization`, `/pricing` | *"conversion-engineered landing pages UK"*, *"sub-second mobile LCP speed optimization"* |

---

### Hub 3: Zero-Commission Takeaway Ordering Systems & UK Hospitality Tools (`/tools` Sub-Silo)
* **Parent Commercial Pillar**: `/services/takeaway-web-design` (`CL-10` — Primary Keyword: `takeaway web design uk`)
* **Interactive Tools Sub-Pillar**: `/tools` (`CL-03` — Primary Keyword: `free uk takeaway and kitchen management tools`)
* **Supporting UK City Service Clusters**:
  * `/services/takeaway-web-design-london` (`CL-11` — `takeaway website design london`)
  * `/services/takeaway-web-design-manchester` (`CL-12` — `takeaway web design manchester`)
  * `/services/takeaway-web-design-birmingham` (`CL-13` — `takeaway web design birmingham`)
* **Interactive Browser Calculators & Generators (Transactional Intent)**:
  * `/tools/commission-savings-calculator` (`CL-05` — `takeaway commission calculator uk`)
  * `/tools/allergen-matrix-generator` (`CL-06` — `14 allergen matrix generator uk`)
  * `/tools/ppds-label-generator` (`CL-07` — `ppds label generator uk`)
  * `/tools/food-cost-calculator` (`CL-08` — `food cost calculator uk`)
  * `/tools/recipe-batch-calculator` (`CL-09` — `recipe batch calculator uk`)
* **Companion Informational & Regulatory Playbooks (Informational Intent)**:
  * `/blog/zero-commission-takeaway-online-ordering-system-uk-guide` (`CL-35` — `zero commission takeaway ordering system uk`) -> *Paired with `/tools/commission-savings-calculator` & `/services/takeaway-web-design`*
  * `/blog/uk-food-hygiene-rating-scheme-5-star-checklist` (`CL-43` — `how to get a 5 star food hygiene rating uk`) -> *Paired with `/tools` & `/services/takeaway-web-design`*
  * `/blog/natashas-law-ppds-food-labelling-guide` (`CL-44` — `natashas law ppds food labelling guide uk`) -> *Paired with `/tools/ppds-label-generator`*
  * `/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants` (`CL-45` — `how to create a 14 allergen matrix uk`) -> *Paired with `/tools/allergen-matrix-generator`*
  * `/blog/commercial-kitchen-food-cooling-temperature-guide` (`CL-46` — `commercial kitchen food cooling temperature rules uk`) -> *Paired with `/blog/how-to-write-haccp-plan-uk-food-business-step-by-step`*
  * `/blog/mastering-food-cost-percentage-commercial-kitchen-calculator` (`CL-47` — `how to calculate food cost percentage uk`) -> *Paired with `/tools/food-cost-calculator`*
  * `/blog/how-to-scale-recipes-commercial-catering-batch-calculator` (`CL-48` — `how to scale recipes for commercial catering`) -> *Paired with `/tools/recipe-batch-calculator`*
  * `/blog/sfbb-daily-kitchen-opening-closing-checklist-guide` (`CL-49` — `sfbb opening and closing checklist guide uk`) -> *Paired with `/blog/uk-food-hygiene-rating-scheme-5-star-checklist`*
  * `/blog/how-to-write-haccp-plan-uk-food-business-step-by-step` (`CL-50` — `how to write a haccp plan uk food business`) -> *Paired with `/tools/allergen-matrix-generator`*
  * `/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide` (`CL-51` — `level 2 food hygiene practice test uk`) -> *Paired with `/blog/uk-food-hygiene-rating-scheme-5-star-checklist`*

| Interactive Tool (Transactional) | Companion How-To Guide (Informational) | Commercial Service Target | Anchor Text Pairing Rule |
| :--- | :--- | :--- | :--- |
| `/tools/commission-savings-calculator` | `/blog/zero-commission-takeaway-online-ordering-system-uk-guide` | `/services/takeaway-web-design` | Tool links to guide with *"Zero-Commission Takeaway Ordering Blueprint"*; Guide links to tool with *"Takeaway Commission Savings Calculator"*; both link to `/services/takeaway-web-design` with *"£250 commission-free takeaway website"*. |
| `/tools/allergen-matrix-generator` | `/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants` | `/services/takeaway-web-design` | Tool links to guide with *"how to create a compliant 14-allergen matrix guide"*; Guide links to tool with *"free 14-Allergen Matrix Generator UK"*. |
| `/tools/ppds-label-generator` | `/blog/natashas-law-ppds-food-labelling-guide` | `/services/takeaway-web-design` | Tool links to guide with *"Natasha's Law PPDS food labelling guide"*; Guide links to tool with *"free PPDS Label Generator UK"*. |
| `/tools/food-cost-calculator` | `/blog/mastering-food-cost-percentage-commercial-kitchen-calculator` | `/services/takeaway-web-design` | Tool links to guide with *"how to calculate food cost percentage & GP% guide"*; Guide links to tool with *"interactive Commercial Food Cost Calculator"*. |
| `/tools/recipe-batch-calculator` | `/blog/how-to-scale-recipes-commercial-catering-batch-calculator` | `/services/takeaway-web-design` | Tool links to guide with *"how to scale recipes for commercial catering guide"*; Guide links to tool with *"Commercial Recipe Batch Scaler"*. |

---

### Hub 4: Technical SEO Engineering, Core Web Vitals & Zero-Loss Migration
* **Parent Pillar**: `/services/seo-services` (`CL-21` — Primary Keyword: `technical seo services uk`)
* **Supporting Service Clusters**:
  * `/services/website-speed-optimization` (`CL-26` — `website speed optimization service uk`)
  * `/services/wordpress-headless-cms` (`CL-24` — `headless wordpress and sanity next.js development`)
  * `/services/website-redesign` (`CL-20` — `website redesign services uk`)
* **Technical Stack Proof**:
  * `/technologies` (`CL-29` — `next.js 16 and react 19 web development tech stack`)
* **Supporting Editorial Playbooks**:
  * `/blog/nextjs-app-router-vs-wordpress-uk-seo` (`CL-37` — `next.js vs wordpress for seo`)
  * `/blog/migrate-wordpress-webflow-to-nextjs-seo-guide` (`CL-38` — `how to migrate wordpress to next.js without losing seo`)

---

### Corporate E-E-A-T & Legal Governance Silo
* `/about` (`CL-32` — `saim dev web engineering studio`): Links out to all 4 Topic Hub Parent Pillars (`/services/website-development`, `/services/ecommerce-development`, `/services/takeaway-web-design`, `/services/seo-services`), `/tools/commission-savings-calculator`, and `/demos`.
* `/contact` (`CL-33` — `request fixed price website quote uk`): Global conversion endpoint linked from every page header, hero CTA, and footer.
* `/terms` (`CL-52`), `/privacy` (`CL-53`), `/cookie-policy` (`CL-54`), `/disclaimer` (`CL-55`): Trust, GDPR, localStorage (`saim_allergen_matrix_v1`, `saim_food_cost_v1`, `saim_recipe_calc_v1`), and FSA regulatory compliance disclosures.
