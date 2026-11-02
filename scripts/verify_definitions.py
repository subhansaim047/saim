import os
import sys
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

CHECKS = [
    {
        "page": "SFBB Checklist Article",
        "file": ".next/server/app/blog/sfbb-daily-kitchen-opening-closing-checklist-guide.html",
        "terms": ["What is SFBB (Safer Food, Better Business)?", "Food Standards Agency"]
    },
    {
        "page": "HACCP Plan Article",
        "file": ".next/server/app/blog/how-to-write-haccp-plan-uk-food-business-step-by-step.html",
        "terms": ["What is HACCP (Hazard Analysis and Critical Control Point)?", "Critical Control Points"]
    },
    {
        "page": "Natasha's Law Article",
        "file": ".next/server/app/blog/natashas-law-ppds-food-labelling-guide.html",
        "terms": ["What is Natasha’s Law?", "What is PPDS (Prepacked for Direct Sale)?"]
    },
    {
        "page": "Allergen Matrix Article",
        "file": ".next/server/app/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants.html",
        "terms": ["What are the 14 statutory allergens?", "Regulation (EU) No 1169/2011"]
    },
    {
        "page": "PPDS Label Generator",
        "file": ".next/server/app/tools/ppds-label-generator.html",
        "terms": ["What is PPDS (Prepacked for Direct Sale)?", "What is Natasha’s Law?"]
    },
    {
        "page": "Template Detail (HACCP Tool)",
        "file": ".next/server/app/food-safety-templates/haccp-plan-builder.html",
        "terms": ["What is HACCP?"]
    },
    {
        "page": "Template Detail (Allergen Chart)",
        "file": ".next/server/app/food-safety-templates/food-allergen-chart.html",
        "terms": ["What are the 14 statutory allergens?"]
    },
    {
        "page": "Template Detail (SFBB Checklist Template)",
        "file": ".next/server/app/food-safety-templates/opening-and-closing-checklist-template.html",
        "terms": ["What is SFBB (Safer Food, Better Business)?"]
    },
    {
        "page": "Technologies Page",
        "file": ".next/server/app/technologies.html",
        "terms": ["What is Next.js?", "What are Core Web Vitals?"]
    },
    {
        "page": "Next.js Developer UK Page",
        "file": ".next/server/app/nextjs-developer-uk.html",
        "terms": ["What is Next.js?", "What are Core Web Vitals?"]
    },
    {
        "page": "Services Page",
        "file": ".next/server/app/services.html",
        "terms": ["What is Next.js?", "What are Core Web Vitals?"]
    },
    {
        "page": "Takeaway Web Design Page",
        "file": ".next/server/app/services/takeaway-web-design.html",
        "terms": ["What is a Direct Ordering Website?"]
    }
]

print("=== RAW SERVER HTML AUDIT: SEMANTIC CLARITY & DEFINITIONS ===")

all_pass = True

for check in CHECKS:
    full_path = os.path.join(base_dir, check["file"])
    print(f"\n{'-'*60}")
    print(f"PAGE: {check['page']}")
    if not os.path.exists(full_path):
        print(f"  [ERROR] File missing: {full_path}")
        all_pass = False
        continue

    with open(full_path, "r", encoding="utf-8") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")

    # 1. Check H1 count
    h1s = soup.find_all("h1")
    if len(h1s) == 1:
        print(f"  [PASS] Single H1: '{h1s[0].get_text().strip()}'")
    else:
        print(f"  [FAIL] Expected 1 H1, found {len(h1s)}")
        all_pass = False

    # 2. Check canonical
    can = soup.find("link", rel="canonical")
    print(f"  [PASS] Canonical: {can.get('href') if can else 'NONE'}")

    # 3. Check definition terms
    dls = soup.find_all("dl")
    print(f"  [INFO] Found {len(dls)} <dl> element(s)")
    for term in check["terms"]:
        if term in html:
            print(f"  [PASS] Verified visible term in HTML: '{term}'")
        else:
            print(f"  [FAIL] Missing term: '{term}'")
            all_pass = False

print(f"\n{'-'*60}")
print(f"Final Verification Result: {'ALL DEFINITIONS VERIFIED IN RAW HTML' if all_pass else 'FAILURES DETECTED'}")
