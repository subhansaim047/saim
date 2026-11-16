# Phase 8B — Internal Linking Architecture Plan

**Core Objective:** Flow internal PageRank efficiently from SaimDev's authoritative structural hubs (`/`, `/overview`, `/services`, `/tools/commission-savings-calculator`, `/pricing`) into revenue-generating commercial pages while enforcing **zero crawl-equity leakage** into static demo clones or the excluded Direction B 160 food-safety templates cluster.

---

## 1. Immediate Broken Link & Redirect Hop Repairs (Phase 10 Execution)

| Source Location | Current Broken / Hop URL | Status Before Fix | Exact Target Replacement | Link Anchor / Context |
|---|---|---|---|---|
| `app/overview/page.tsx:827` | `/tools/commission-savings-calculator` | `404 Not Found` | `/tools/commission-savings-calculator` *(Now `200 OK` standalone calculator route)* | `"Commission Savings Audit"` card |
| `app/overview/page.tsx:833` | `/tools/sfbb-daily-diary` | `404 Not Found` | `/tools` *(or `SFBB` directory hub)* | `"SFBB & Free UK Kitchen Tools"` card |
| `app/services/takeaway-web-design-birmingham/page.tsx:205` | `/food-cost-calculator` | `404 Not Found` | `/tools/food-cost-calculator` | `"Free GP% Cost Tool"` card |
| `src/content/services/commerceTakeawayServices.ts:1508` | `/food-cost-calculator` | `404 Not Found` | `/tools/food-cost-calculator` | `"Free Kitchen Tools"` takeaway deliverable |
| `src/content/services/commerceTakeawayServices.ts:1650` | `/food-cost-calculator` | `404 Not Found` | `/tools/food-cost-calculator` | Features prose bullet |
| `src/components/SiteFooter.tsx:431` | `/food-safety-templates` | `308 Redirect` -> `/tools` | `/tools` *(direct canonical target)* | `"Food Safety Templates Hub"` footer link |
| `app/services/takeaway-web-design-birmingham/page.tsx:333` | `/food-safety-templates` | `308 Redirect` -> `/tools` | `/tools` | `"Midlands LocalBusiness Schema"` card |
| `src/content/services/coreBuildServices.ts:1700` | `/food-safety-templates` | `308 Redirect` -> `/tools` | `/tools` | `"Compliance & Template Marketplaces"` |
| `src/content/services/growthOptimizationServices.ts:1675, 1745` | `/food-safety-templates` | `308 Redirect` -> `/tools` | `/tools` | `"High-Volume Template & Directory Sites"` & case card |

---

## 2. Commercial Topic Hub-and-Spoke Flow (Direction A Only)

```text
                       [ / ] Homepage Flagship
                      /     |      |           \
                     v      v      v            v
          [ /services ] [ /overview ] [ /pricing ] [ /demos ]
          (Hub 12 svcs)  (Estimator)  (£/$ Tiers)  (Showcase)
             |    \           \
             v     \           v
   [ Pillar 1: Takeaway ]   [ Pillar 2: Next.js / WP Migration ]
   /services/takeaway-web-design   /services/wordpress-headless-cms
     ^        |         \             ^               |
     |        v          v            |               v
     |   City Spokes    [ /tools/commission-savings-calculator ]
     |   (-london,      (Free Commercial ROI Funnel -> £250 Direct Site)
     |   -birmingham,
     |   -manchester)
     |
   [ Commercial Blog Spokes ]
   - Just Eat vs Own Website Profit UK -> Commission Calculator & Takeaway Service
   - WP to Next.js Cost & 301 Guide -> wordpress-headless-cms & website-redesign
   - Webflow/Framer to Next.js Rebuild -> website-clone
```

---

## 3. Navigation, Footer & Mega-Menu Linking Rules

1. **`RhHeader` (`src/components/rh/RhHeader.tsx` & `public/rh-exact/index.html`):**
   - Keep commercial service hierarchy prominent (`Services` mega-menu -> `Next.js & React`, `SaaS & Client Portals`, `Headless CMS & WP`, `Takeaway Ordering`, `Shopify & Plus`, `Technical SEO`).
   - Optionally swap/add high-intent `"Commission Calculator"` -> `/tools/commission-savings-calculator` cleanly inside footer resources/megamenu *without* bloating header link counts or disturbing mobile menu alignment.
2. **Site Footer (`src/components/SiteFooter.tsx`):**
   - Add clean direct link to `/tools/commission-savings-calculator` (`"Takeaway ROI Calculator"`) right inside footer services/resources and eliminate the `/food-safety-templates` `308` redirect hop.
3. **Isolation of Demo Clones & Exclusion of 160 Templates:**
   - Every outgoing link to `/hq-leathercon/index.html`, `/hotbite/index.html`, `/burger-garage/index.html`, `/frenchyse/index.html`, `/anzaar/index.html`, or `/demos/*` should remain `rel="noopener"` (and served with `X-Robots-Tag: noindex, nofollow` headers) so humans can preview interactive UI craftsmanship while search bots do NOT index third-party showcase demos.
   - Leave `/food-safety-templates/*` and the 4 kitchen compliance tools' internal cross-links untouched per user rule (**"ye kam 160 tools ko chor k baqi sab pr krna h"**).
4. **`public/llms.txt` Semantic Routing Hygiene:**
   - Fix line `37`: map `Custom Web Applications & SaaS MVPs` -> `/services/custom-web-apps` cleanly (do NOT send SaaS leads to `/services/website-clone`).
   - Fix lines `52–55`: replace dead 404 paths (`/burger-garage`, `/frenchyse`, `/anzaar`, `/hotbite`) with live showcase gateway `/demos` and real `.html` paths only where appropriate, keeping SaimDev's primary service URLs and `/tools/commission-savings-calculator` + `/overview` prominently cited.
