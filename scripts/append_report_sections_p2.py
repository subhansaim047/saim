import os
import json
import csv

REPORT_PATH = os.path.join(os.getcwd(), 'audit', 'saimdev_seo_master_strategy_report.md')

buf = []

# Section 7: Competitor Analysis (20 Competitors across A-F)
buf.append("""
## 7. Competitor Intelligence & Landscape Analysis (20 Domains)

We analyzed 20 competing and authority domains across 6 distinct categories:

### A. UK Food Safety & Compliance Competitors
1. **Food Standards Agency (`food.gov.uk`) — Authority DR 91:** Official UK regulator. Controls generic SFBB PDFs. *Weakness:* Non-fillable static documents, dated UI. *How SaimDev beats them:* Fast, mobile-fillable browser sheets with instant vector PDF printing.
2. **High Speed Training (`highspeedtraining.co.uk`) — Commercial DR 78:** Training giant ranking for cleaning schedules and HACCP templates. *Weakness:* Templates exist solely as lead magnets to sell £25 courses; no web calculators. *How SaimDev beats them:* 100% free un-gated interactive tools.
3. **Safer Food Scores (`saferfoodscores.co.uk`) — Consultancy DR 38:** Boutique EHO consultancy. *Weakness:* Expensive consulting barrier, zero public digital tools. *How SaimDev beats them:* Free operational self-audit sheets and fixed-price takeaway website design.
4. **NCASS (`ncass.org.uk`) — Trade Association DR 62:** Catering association for street food vendors. *Weakness:* Resources locked behind £250/year membership. *How SaimDev beats them:* Open-access mobile catering HACCP templates.

### B. Allergen and Natasha's Law Competitors
5. **Natasha Allergy Research Foundation (`narf.org.uk`) — Charity DR 68:** Foundation behind the legislation. *Weakness:* Focuses on charity campaigns; lacks downloadable commercial kitchen label templates. *How SaimDev beats them:* Ready-to-print A4 PPDS label templates.
6. **FoodCore (`foodcore.io`) — B2B SaaS DR 42:** Recipe & allergen software. *Weakness:* Charges £49/month. *How SaimDev beats them:* Zero-subscription, client-side browser generator.
7. **Cook The Guide (`cooktheguide.com`) — Culinary Blog DR 34:** Chef blog. *Weakness:* Low publishing frequency, static images. *How SaimDev beats them:* Dynamic interactive tools and structured schema markup.
8. **Allergen Bureau (`allergenbureau.net`) — Global Standards DR 55:** Scientific body. *Weakness:* Academic Australian/global focus, too complex for takeaway chefs. *How SaimDev beats them:* Simple 3-minute kitchen operational matrices.

### C. Commercial Kitchen Tools and Template Competitors
9. **Paddl AI (`paddl-ai.co`) — Startup DR 29:** Hospitality compliance startup. *Weakness:* Email-gated PDF downloads only. *How SaimDev beats them:* Zero-gate instant browser printing and custom web engineering services.
10. **Gompels Healthcare (`gompels.co.uk`) — Wholesale DR 61:** Medical & catering supplies. *Weakness:* Outdated 2014 Word docs. *How SaimDev beats them:* Modern, mobile-responsive web apps.
11. **FoodDocs (`fooddocs.com`) — Enterprise SaaS DR 73:** Automated HACCP software. *Weakness:* Aggressive credit card trial gating, mixed US/EU regulations. *How SaimDev beats them:* 100% free UK-specific tools with zero regulatory confusion.
12. **SafetyCulture / iAuditor (`safetyculture.com`) — Enterprise DR 81:** Inspection app. *Weakness:* Requires mobile app download and account creation. *How SaimDev beats them:* Zero-friction web browser tools.

### D. Restaurant Costing and Calculator Competitors
13. **Menuthere (`menuthere.com`) — Niche Tool DR 31:** UK recipe cost calculator. *Weakness:* Isolated tool with dated UI, no web services. *How SaimDev beats them:* Integrated recipe scaling, allergen filtering, and custom website packages.
14. **Apicbase (`apicbase.com`) — Enterprise F&B DR 71:** Food cost management. *Weakness:* Enterprise sales call barrier. *How SaimDev beats them:* Instant public web calculators.
15. **StockTake Online (`stocktake-online.com`) — B2B Software DR 36:** Inventory software. *Weakness:* No self-serve public tools. *How SaimDev beats them:* Capture top-of-funnel traffic with free margin tools.
16. **Jelly (`getjelly.co.uk`) — Modern SaaS DR 40:** Invoice scanning & margin software. *Weakness:* High subscription cost. *How SaimDev beats them:* Target early-stage operators with free calculators and £250 website builds.

### E. Web Development and Local SEO Competitors
17. **Lightflows (`lightflows.co.uk`) — Agency DR 52:** High-end UK Next.js agency. *Weakness:* £10,000+ minimum project size. *How SaimDev beats them:* Productized £250–£850 fixed-price builds for local SMEs.
18. **Ampliflow (`ampliflow.ai`) — Studio DR 39:** Modern Next.js agency. *Weakness:* Focuses on tech startups rather than high-street shops. *How SaimDev beats them:* Dedicated takeaway and local service positioning.
19. **Oneiro Digital (`oneiro.digital`) — Studio DR 33:** Generalist web agency. *Weakness:* Lacks topical authority in any industry vertical. *How SaimDev beats them:* 160-item food safety tool hub acting as organic acquisition engine.
20. **Dean Lennard (`deanlennard.com`) — Freelancer DR 28:** Freelance Next.js engineer. *Weakness:* High hourly/daily rate (£450/day). *How SaimDev beats them:* Transparent fixed-deliverable packages with 5-day delivery.

---
""")

# Section 8: Keyword Gap Analysis (20 Opportunities)
buf.append("""
## 8. Keyword Gap Analysis (20 Opportunities)

The 20 high-leverage keyword gaps identified in Phase 5 have been mapped to specific action plans:
1. `sfbb diary completion guide for takeaways` (Target: `/blog/sfbb-daily-kitchen-opening-closing-checklist-guide`)
2. `free uk takeaway allergen chart generator` (Target: `/food-safety-templates/food-allergen-chart`)
3. `commercial kitchen cleaning checklist printable uk` (Target: `/food-safety-templates/kitchen-cleaning-checklist`)
4. `takeaway food cost calculator uk with vat and margin` (Target: `/food-safety-templates/food-cost-calculator`)
5. `commercial recipe scaling calculator 10 to 500 portions` (Target: `/food-safety-templates/recipe-calculator`)
6. `uk takeaway haccp plan template free` (Target: `/food-safety-templates/haccp-plan-builder`)
7. `ppds food label template uk free` (Target: `/tools/ppds-label-generator`)
8. `sfbb 4 weekly review diary template` (Target: `/food-safety-templates/sfbb-4-weekly-review`)
9. `mobile catering van haccp plan template` (Target: `/food-safety-templates/haccp-plan-builder`)
10. `fixed price nextjs website for uk business` (Target: `/services`)
11. `nextjs developer for local businesses uk` (Target: `/nextjs-developer-uk`)
12. `uk restaurant fridge and freezer temperature log pdf` (Target: `/food-safety-templates/freezer-temperature-chart`)
13. `uk food business eho inspection checklist` (Target: `/food-safety-templates/health-inspection-checklist`)
14. `commercial kitchen probe thermometer calibration boiling ice` (Target: `/food-safety-templates/probe-thermometer-calibration-log`)
15. `commercial kitchen food cooling temperature guide 90 minutes` (Target: `/blog/commercial-kitchen-food-cooling-temperature-guide`)
16. `sfbb opening and closing checks diary sheet` (Target: `/food-safety-templates/daily-opening-closing-checklist`)
17. `restaurant gross profit percentage calculator uk` (Target: `/food-safety-templates/food-cost-calculator`)
18. `takeaway website design uk with allergen menu` (Target: `/services`)
19. `local seo for takeaways in manchester birmingham london` (Target: `/services`)
20. `natashas law compliance checklist for cafes` (Target: `/blog/natashas-law-ppds-food-labelling-guide`)

*(See complete spreadsheet in `audit/keyword_gaps_20.csv` and Tab 4 of the Excel workbook).*

---
""")

# Section 9: Content Silos & Topical Architecture (14 Content Silos)
buf.append("""
## 9. Content Silos & Site Architecture (14 Topical Hubs)

To establish unshakeable topical authority, SaimDev.site is structured into 14 distinct topical silos:

```
[SaimDev.site Root: Domain Authority Engine]
├── /tools/ (Canonical Compliance Hub)
│   ├── /sfbb/ (Safer Food Better Business Diary & Safe Methods Silo)
│   ├── /haccp/ (7 Principles, Flow Charts & Hazard Analysis Silo)
│   ├── /allergens/ (14 Allergens & Allergen Matrix Silo)
│   ├── /natashas-law/ (Prepacked for Direct Sale PPDS Compliance Silo)
│   ├── /ppds-labels/ (Printable Label Generators & Dimensions Silo)
│   ├── /kitchen-temperature-logs/ (Chiller, Freezer, Hot-Holding & Delivery Silo)
│   └── /kitchen-cleaning-checklists/ (Daily, Deep Clean & Extraction Canopy Silo)
├── /restaurant-calculators/ (Commercial Kitchen Mathematics Hub)
│   ├── /restaurant-food-cost/ (Plate Margins, Shrinkage & 20% VAT Silo)
│   └── /recipe-scaling/ (Batch Scaling 10 to 500 Portions Silo)
├── /services/ (Commercial Agency Hub)
│   ├── /uk-restaurant-website-design/ (Direct Ordering & Allergen Filter Web Apps)
│   ├── /nextjs-developer-uk/ (Geo-Targeted UK Small Business Web Architecture)
│   └── /local-seo-uk/ (Google 3-Pack Maps Ranking for Food & Trades)
└── /us/ (Secondary Geographically Separated FDA Food Code Silo)
```

Each silo contains a dedicated Pillar Page, supporting cluster assets, breadcrumbs (`Home > Hub > Silo > Page`), strict schema markup (`DigitalDocument`, `WebApplication`, or `ProfessionalService`), and zero-cannibalization canonical rules.

---
""")

with open(REPORT_PATH, 'a', encoding='utf-8') as f:
    f.write(''.join(buf))

print("Appended sections 7-9.")
