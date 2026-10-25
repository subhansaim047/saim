import os

REPORT_PATH = os.path.join(os.getcwd(), 'audit', 'saimdev_seo_master_strategy_report.md')

buf = []

# Section 10: 90-Day Content Calendar Summary
buf.append("""
## 10. 90-Day Content & Development Calendar

The 12-week execution schedule is broken down into three focused sprints:

### Sprint 1: Weeks 1–4 (Technical Foundations & High-Priority Tools)
- **Week 1:** Production Build SHA harmonization, robots.txt verification, and Core Service Page optimization (`/services`).
- **Week 2:** Canonical Tools Hub re-architecture (`/tools`) and Flagship Allergen Tool polish (`/food-safety-templates/food-allergen-chart`).
- **Week 3:** SFBB Daily Diary page deployment (`/food-safety-templates/daily-opening-closing-checklist`) and Kitchen Cleaning Roster polish (`/food-safety-templates/kitchen-cleaning-checklist`).
- **Week 4:** Restaurant Fridge/Freezer Temperature Log PDF (`/food-safety-templates/freezer-temperature-chart`) and 25-node internal linking rollout.

### Sprint 2: Weeks 5–8 (SFBB, HACCP & Natasha's Law Compliance)
- **Week 5:** Free UK Takeaway HACCP Plan Template & Flow Chart Builder (`/food-safety-templates/haccp-plan-builder`) and 7 HACCP Principles Guide (`/blog/how-to-write-haccp-plan-uk-food-business-step-by-step`).
- **Week 6:** Launch dedicated PPDS Food Label Generator tool (`/tools/ppds-label-generator`) and update Natasha's Law Guide (`/blog/natashas-law-ppds-food-labelling-guide`).
- **Week 7:** Probe Thermometer Calibration SOP & Log Sheet (`/food-safety-templates/probe-thermometer-calibration-log`) and 90-Minute Food Cooling Protocol Guide (`/blog/commercial-kitchen-food-cooling-temperature-guide`).
- **Week 8:** Launch standalone SFBB 4-Weekly Review tool (`/food-safety-templates/sfbb-4-weekly-review`) and Corrective Actions Log (`/food-safety-templates/corrective-action-log`).

### Sprint 3: Weeks 9–12 (Catering Calculators, UK Web Services & US Silo)
- **Week 9:** Polish Takeaway Food Cost & Gross Profit Calculator (`/food-safety-templates/food-cost-calculator`) and Food Cost Percentage Formula Guide (`/blog/mastering-food-cost-percentage-commercial-kitchen-calculator`).
- **Week 10:** Polish Commercial Recipe Scaling Calculator 10 to 500 portions (`/food-safety-templates/recipe-calculator`) and Catering Batch Yield Guide (`/blog/how-to-scale-recipes-commercial-catering-batch-calculator`).
- **Week 11:** Launch UK Takeaway Web Design Pillar Page (`/services/takeaway-web-design`) and expand regional Next.js landing pages (`/nextjs-developer-uk`).
- **Week 12:** Launch geographically separated US FDA Food Code landing page (`/us/food-safety-templates/fda-food-code-checklist`) and execute quarterly technical re-audit.

*(See full spreadsheet in `audit/content_calendar_90_days.csv` and Tab 5 of the Excel workbook).*

---
""")

with open(REPORT_PATH, 'a', encoding='utf-8') as f:
    f.write(''.join(buf))

print("Appended section 10.")
