import os

REPORT_PATH = os.path.join(os.getcwd(), 'audit', 'saimdev_seo_master_strategy_report.md')

final_buf = []

# Section 12: Technical SEO Implementation
final_buf.append("""
## 12. Technical SEO Implementation Specification

Below are the exact code architecture specifications implemented and recommended across SaimDev.site:

### A. Next.js Robots Configuration (`app/robots.ts`)
```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.saimdev.site';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'GPTBot',
          'CCBot',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

### B. Dynamic Sitemap Filtering (`app/sitemap.ts`)
```typescript
import { MetadataRoute } from 'next';
import { FOOD_SAFETY_TEMPLATES } from '@/data/saim_templates';
import pagePlanData from '@/data/page_plan.json';

const BASE_URL = 'https://www.saimdev.site';
const NOW = new Date().toISOString().split('T')[0];

export default function sitemap(): MetadataRoute.Sitemap {
  // Only include 14 core static pages + 12 blogs + 24 KEEP/IMPROVE templates = exactly 50 indexable URLs
  const corePages = [
    { url: `${BASE_URL}/`, lastModified: NOW, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/tools`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/nextjs-developer-uk`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/services`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    // ...
  ];
  // Filter templates: NOINDEX and MERGED routes are programmatically excluded
  const templatePages = FOOD_SAFETY_TEMPLATES
    .filter((t) => {
      const plan = (pagePlanData as any)[t.slug];
      return plan && (plan.bucket === 'KEEP' || plan.bucket === 'IMPROVE');
    })
    .map((t) => ({
      url: `${BASE_URL}/food-safety-templates/${t.slug}`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.85,
    }));

  return [...corePages, ...blogPages, ...templatePages];
}
```

### C. Server-Rendered JSON-LD Schemas (`WebApplication` & `FAQPage`)
```tsx
// Inserted on tool detail pages:
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": template.title,
  "description": template.desc,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All modern web browsers",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP"
  },
  "author": {
    "@type": "Person",
    "name": "Saim Dev",
    "url": "https://www.saimdev.site/about"
  }
};
```

---
""")

# Section 13: Internal Linking Plan
final_buf.append("""
## 13. Internal Linking Architecture Plan

SaimDev.site uses a high-equity hub-and-spoke internal linking model:
1. **Homepage (`/`) to High-Value Tool Hub:** The homepage hero and featured tools section pass equity directly to `/tools`, `/food-safety-templates/food-allergen-chart`, `/food-safety-templates/food-cost-calculator`, and `/food-safety-templates/daily-opening-closing-checklist`.
2. **Contextual Tool to Service Funnel:** Every KEEP tool page features a secondary contextual CTA linking to `/services` or `/nextjs-developer-uk` using business-oriented anchor texts (e.g., *"Custom Takeaway Websites with Built-in Allergen Filters"*, *"Cut 30% Delivery Portal Commissions"*).
3. **Blog to Tool Interlinking:** Every blog post links directly to its parent tool in the first 100 words and via a dedicated mid-article callout card.
4. **Tool to Blog Guides:** Every tool page links to its supporting long-form educational guide in its "Official Guidance & Reference Procedures" section.

---
""")

# Section 14: Conversion Optimization Plan
final_buf.append("""
## 14. Conversion Optimization (CRO) Framework

To maximize lead generation from organic visitors, SaimDev.site executes four conversion pathways:

1. **The Takeaway Commission Bridge (Highest ROI):**
   - *Target Audience:* Takeaway owners using the Food Cost Calculator or Allergen Chart.
   - *Trigger Point:* In the calculator results box: *"Losing 30% on every order to Just Eat or Deliveroo? A £250 direct ordering website pays for itself in your first 15 orders."*
   - *Action:* Direct one-click WhatsApp message pre-filled with: *"Hi Saim, I run a takeaway and want to see your £250 direct ordering website package."*
2. **The Compliance-Ready Menu Feature:**
   - *Trigger Point:* Inside the Food Allergen Chart generator: *"Want your online menu to automatically filter allergens for customers? We build fast Next.js takeaway websites with instant allergen dropdowns."*
3. **The Micro-Consultation WhatsApp Hook:**
   - Fixed, high-contrast WhatsApp button on mobile with average response time guarantee under 2 hours during UK business hours.
4. **Lead Magnet Strategy (Un-Gated Trust):**
   - We do not gate PDF downloads behind email capture forms. Instead, all PDFs include clean header/footer branding: *"Generated with Saim Dev UK Kitchen Tools — High-Speed Websites for UK Businesses: saimdev.site"*. When printed and pinned in kitchens, this builds passive brand familiarity with kitchen managers and visiting business owners.

---
""")

# Section 15: Priority Roadmap
final_buf.append("""
## 15. Prioritized Implementation Roadmap

| Priority | Task Description | Target URL / Asset | SEO Impact | Business Impact | Difficulty | Estimated Time | Dependencies |
|---|---|---|---|---|---|---|---|
| **P0** | Harmonize live build SHAs & Edge 301 redirects | Sitewide (`/tools`, `/`) | Critical | High | Low | Completed | Verified Live |
| **P0** | Enforce noindex on 113 US-only & thin templates | `/food-safety-templates/*` | Critical | Medium | Low | Completed | `page_plan.json` |
| **P1** | Add contextual takeaway website CTA banners to top 5 tools | `/food-safety-templates/food-allergen-chart` | High | Very High | Low | 2 hours | Component update |
| **P1** | Launch dedicated PPDS Food Label Generator tool | `/tools/ppds-label-generator` | High | High | Medium | 1 day | UI layout |
| **P1** | Launch standalone SFBB 4-Weekly Review tool | `/food-safety-templates/sfbb-4-weekly-review` | High | Medium | Low | 4 hours | Existing template |
| **P1** | Roll out 25-node internal linking anchors across blog guides | `/blog/*` | High | High | Low | 3 hours | Content edit |
| **P2** | Deploy UK regional landing pages (Manchester, Birmingham) | `/nextjs-developer-uk` | Medium | High | Medium | 2 days | Service layout |
| **P2** | Create geographically isolated US FDA Food Code silo | `/us/food-safety-templates/*` | Medium | Medium | Medium | 3 days | Canonical & routing |
| **P3** | Build interactive meal prep subscription cost calculator | `/food-safety-templates/meal-prep-calculator` | Low | Medium | High | 4 days | Complex logic |

---
""")

# Section 16: Measurement Plan
final_buf.append("""
## 16. Comprehensive Measurement & KPI Tracking Plan

To track progress and verify growth, implement the following measurement stack:

1. **Google Search Console (GSC):**
   - Track monthly clicks, impressions, and average position for the top 50 low-competition keywords.
   - Monitor *Coverage / Page Indexing*: confirm indexed pages remain steady at ~50 URLs and that 113 protected pages report as "Excluded by 'noindex' tag" without errors.
2. **Page-Level Conversion Attribution (GA4 / Plausible):**
   - Set up custom event tracking:
     - `tool_pdf_print`: Triggered when user clicks "Print / Save as PDF".
     - `whatsapp_click`: Triggered when user clicks the floating or inline WhatsApp CTA.
     - `contact_form_submit`: Triggered upon successful project inquiry submission.
3. **Geographic Traffic Segmentation:**
   - Filter GA4 by Country (United Kingdom vs United States vs Global) to verify that UK traffic represents >75% of primary tool and service visitors.
4. **Organic Lead Conversion Rate:**
   - Target benchmark: 2.0% conversion rate from tool users to WhatsApp inquiries or contact submissions.

---
""")

# Section 17 & 18: Risks, Assumptions & Sources
final_buf.append("""
## 17. Risks & Assumptions

1. **Search Volume Estimates:** All monthly search volume numbers are estimates derived from public UK search queries and Google Trends proxies. Actual impression volume must be verified in Google Search Console once pages rank.
2. **Regulatory Parity:** Legal advice disclaimer is mandatory. Saim Dev tools provide operational guidance and self-audit frameworks; they do not replace formal inspections by local authority Environmental Health Officers.
3. **Client-Side Storage Persistence:** Tools rely on HTML5 LocalStorage. If users clear browser cache, saved inputs reset. This is clearly communicated to users with recommendations to export clean PDFs immediately.

---

## 18. Authoritative Sources Cited

1. **UK Food Standards Agency (FSA):** *Safer Food, Better Business (SFBB) Caterers Diary Pack & Safe Methods* (`food.gov.uk`).
2. **UK Legislation:** *Food Safety Act 1990 (Section 21: Statutory Defense of Due Diligence)*, *Food Information Regulations 2014*, and *The Food (Amendment) (England) Regulations 2020 (Natasha's Law)*.
3. **European Commission (Retained UK Law):** *Regulation (EC) No 852/2004 on the Hygiene of Foodstuffs (Article 5: Hazard Analysis and Critical Control Points)*.
4. **US Food and Drug Administration (FDA):** *Food Code 2022* and *Food Allergen Labeling and Consumer Protection Act (FALCPA) + FASTER Act (Sesame Big 9)*.
5. **Google Search Central:** *Core Web Vitals Guidelines*, *Creating Helpful, Reliable, People-First Content*, and *Structured Data Specifications*.

---
""")

# Concluding Immediate Actions
final_buf.append("""
## Strategic Action Summary: Immediate Deliverables

### 1. Which 10 Pages You Should Create First
1. `/tools/ppds-label-generator` (Free Natasha's Law PPDS Food Label Template)
2. `/food-safety-templates/sfbb-4-weekly-review` (SFBB 4-Weekly Review Diary Sheet)
3. `/food-safety-templates/corrective-action-log` (Kitchen Due Diligence Corrective Action Log)
4. `/services/takeaway-web-design` (Takeaway Website Design with Built-in Allergen Menu)
5. `/food-safety-templates/chopping-board-colour-chart` (UK Colour-Coded Chopping Board Guide)
6. `/food-safety-templates/health-inspection-checklist` (UK Food Business EHO Inspection Checklist)
7. `/food-safety-templates/staff-sickness-reporting-log` (48-Hour Norovirus Food Handler Exclusion Log)
8. `/food-safety-templates/delivery-temperature-inspection-log` (Chilled & Frozen Supplier Delivery Log)
9. `/services/local-seo-uk` (Google 3-Pack Local SEO for Takeaways & Trades)
10. `/us/food-safety-templates/fda-food-code-checklist` (FDA Food Code Big 9 Allergen Checklist — Geographically Separated)

### 2. Which 10 Existing Pages You Should Optimize First
1. `/food-safety-templates/food-allergen-chart` (Add takeaway commission bridge CTA & 5-step SOP)
2. `/food-safety-templates/food-cost-calculator` (Add UK 20% VAT formula & plate margin sensitivity slider)
3. `/food-safety-templates/recipe-calculator` (Add commercial portion multiplier from 10 to 500 covers)
4. `/food-safety-templates/freezer-temperature-chart` (Expand FSA due diligence record-keeping guidance)
5. `/food-safety-templates/daily-opening-closing-checklist` (Align shift checks with SFBB diary pack)
6. `/food-safety-templates/kitchen-cleaning-checklist` (Add BS EN 1276 chemical contact times)
7. `/services` (Highlight fixed £250 Starter, £450 Business, £850 Custom tiers)
8. `/nextjs-developer-uk` (Expand local UK city targeting and speed proof)
9. `/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants` (Add direct link to interactive chart)
10. `/blog/natashas-law-ppds-food-labelling-guide` (Add download link to PPDS label template)

### 3. Which 20 Keywords You Should Target Immediately
1. `free uk takeaway allergen chart generator`
2. `ppds food label template uk free`
3. `sfbb diary template download free`
4. `commercial kitchen cleaning checklist printable uk`
5. `takeaway food cost calculator uk with vat and margin`
6. `uk restaurant fridge and freezer temperature log pdf`
7. `commercial recipe scaling calculator 10 to 500 portions`
8. `sfbb 4 weekly review diary template`
9. `sfbb corrective action log template`
10. `uk food business eho inspection checklist`
11. `uk takeaway haccp plan template free`
12. `fixed price nextjs website for uk business`
13. `nextjs developer for local businesses uk`
14. `takeaway website design uk with allergen menu`
15. `natashas law ingredients list example`
16. `14 food allergens list printable poster uk`
17. `restaurant gross profit percentage calculator uk`
18. `commercial kitchen food cooling temperature guide 90 minutes`
19. `walk in cooler food storage hierarchy chart`
20. `chopping board colour chart uk commercial kitchen standard`

### 4. What You Should Do This Week
1. **Deploy Contextual CTAs:** Add the takeaway ordering conversion banner to the 5 top tools (`food-allergen-chart`, `food-cost-calculator`, `recipe-calculator`, `freezer-temperature-chart`, `kitchen-cleaning-checklist`).
2. **Submit Sitemap in GSC:** Verify that `https://www.saimdev.site/sitemap.xml` (50 URLs) is submitted and indexed without errors in Google Search Console.
3. **Verify WhatsApp Direct Chat:** Confirm the floating mobile WhatsApp button directs inquiries directly to your phone with the pre-filled message.

### 5. What You Should Do Next Month
1. **Launch Sprint 2 Tools:** Build the dedicated `/tools/ppds-label-generator` and `/food-safety-templates/sfbb-4-weekly-review` pages.
2. **Publish Supporting Blog Guides:** Publish the updated SFBB completion walkthrough and Natasha's Law compound ingredients guide.
3. **Begin Local Authority & Trade Outreach:** Share the free allergen chart generator on UK caterer forums (NCASS community, British Baker, Catering Today) to earn natural editorial backlinks.

### 6. What Results You Should Realistically Expect
- **Months 1–2:** Search engines recrawl all 50 indexable pages. The 113 noindex pages drop from search indexation, consolidating domain authority. Impressions begin rising for long-tail queries (KD <= 15).
- **Months 3–4:** Top 20 immediate keywords begin ranking on Page 1 of Google UK. Monthly organic tool visits reach 2,500–5,000 visits. Initial inbound WhatsApp inquiries for £250–£850 websites begin arriving (estimated 2–5 qualified leads per month).
- **Months 5–6:** Flagship tools (`food-allergen-chart`, `food-cost-calculator`, `daily-opening-closing-checklist`) establish consistent top 3 organic rankings in the UK. Direct website inquiries scale to 8–15 per month, yielding £2,000–£5,000 in monthly recurring project revenue.

### 7. Which Data Still Needs Verification in GSC or Paid SEO Tools
- **Exact Impression Volume:** Public volume numbers are proxy estimates. Monitor Google Search Console *Performance > Search Results* for exact weekly impression counts.
- **Backlink Velocity:** Monitor Ahrefs or Moz to track inbound organic links earned by the free tools and identify syndication opportunities.
""")

with open(REPORT_PATH, 'a', encoding='utf-8') as f:
    f.write(''.join(final_buf))

print("Successfully completed the Master Strategy Report!")
