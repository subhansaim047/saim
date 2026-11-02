import os
import sys
import json
import re
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

PAGES_TO_VERIFY = [
    {
        "name": "1. Allergen Article",
        "file": ".next/server/app/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants.html",
        "url": "/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants",
        "required_links": [
            ("/food-safety-templates/allergy-matrix", "free 14-allergen matrix"),
            ("/food-safety-templates/food-allergen-chart", "food allergen chart"),
            ("/tools", "return to all kitchen tools"),
            ("/blogs", "return to the Saim Dev blog")
        ]
    },
    {
        "name": "2. Natasha's Law Article",
        "file": ".next/server/app/blog/natashas-law-ppds-food-labelling-guide.html",
        "url": "/blog/natashas-law-ppds-food-labelling-guide",
        "required_links": [
            ("/tools/ppds-label-generator", "PPDS label generator"),
            ("/tools", "return to all kitchen tools"),
            ("/blogs", "return to the Saim Dev blog")
        ]
    },
    {
        "name": "3. Food Cost Article",
        "file": ".next/server/app/blog/mastering-food-cost-percentage-commercial-kitchen-calculator.html",
        "url": "/blog/mastering-food-cost-percentage-commercial-kitchen-calculator",
        "required_links": [
            ("/food-safety-templates/food-cost-calculator", "commercial food cost calculator"),
            ("/tools", "return to all kitchen tools"),
            ("/blogs", "return to the Saim Dev blog")
        ]
    },
    {
        "name": "4. Recipe Scaling Article",
        "file": ".next/server/app/blog/how-to-scale-recipes-commercial-catering-batch-calculator.html",
        "url": "/blog/how-to-scale-recipes-commercial-catering-batch-calculator",
        "required_links": [
            ("/food-safety-templates/recipe-calculator", "recipe calculator"),
            ("/tools", "return to all kitchen tools"),
            ("/blogs", "return to the Saim Dev blog")
        ]
    },
    {
        "name": "5. HACCP Article",
        "file": ".next/server/app/blog/how-to-write-haccp-plan-uk-food-business-step-by-step.html",
        "url": "/blog/how-to-write-haccp-plan-uk-food-business-step-by-step",
        "required_links": [
            ("/food-safety-templates/haccp-plan-builder", "HACCP plan builder"),
            ("/tools", "return to all kitchen tools"),
            ("/blogs", "return to the Saim Dev blog")
        ]
    },
    {
        "name": "6. SFBB Checklist Article",
        "file": ".next/server/app/blog/sfbb-daily-kitchen-opening-closing-checklist-guide.html",
        "url": "/blog/sfbb-daily-kitchen-opening-closing-checklist-guide",
        "required_links": [
            ("/food-safety-templates/opening-and-closing-checklist-template", "opening and closing checklist"),
            ("/food-safety-templates/cleaning-schedule", "cleaning schedule"),
            ("/food-safety-templates/fridge-temperature-record-sheet-pdf", "kitchen temperature log"),
            ("/tools", "return to all kitchen tools"),
            ("/blogs", "return to the Saim Dev blog")
        ]
    },
    {
        "name": "7. Cooling Guide Article",
        "file": ".next/server/app/blog/commercial-kitchen-food-cooling-temperature-guide.html",
        "url": "/blog/commercial-kitchen-food-cooling-temperature-guide",
        "required_links": [
            ("/food-safety-templates/food-cooling-poster", "food cooling poster"),
            ("/food-safety-templates/fridge-temperature-record-sheet-pdf", "fridge temperature sheet"),
            ("/food-safety-templates/freezer-temperature-chart", "freezer temperature chart"),
            ("/tools", "return to all kitchen tools")
        ]
    },
    {
        "name": "8. PPDS Label Generator Tool Page",
        "file": ".next/server/app/tools/ppds-label-generator.html",
        "url": "/tools/ppds-label-generator",
        "required_links": [
            ("/tools", "return to all kitchen tools"),
            ("/blog/natashas-law-ppds-food-labelling-guide", None)
        ]
    },
    {
        "name": "9. Template Detail Sample (Allergy Matrix Tool)",
        "file": ".next/server/app/food-safety-templates/allergy-matrix.html",
        "url": "/food-safety-templates/allergy-matrix",
        "required_links": [
            ("/tools", "return to all kitchen tools"),
            ("/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants", None)
        ]
    },
    {
        "name": "10. Template Detail Sample (Food Cost Calculator Tool)",
        "file": ".next/server/app/food-safety-templates/food-cost-calculator.html",
        "url": "/food-safety-templates/food-cost-calculator",
        "required_links": [
            ("/tools", "return to all kitchen tools"),
            ("/blog/mastering-food-cost-percentage-commercial-kitchen-calculator", None)
        ]
    },
    {
        "name": "11. Template Detail Sample (HACCP Plan Builder Tool)",
        "file": ".next/server/app/food-safety-templates/haccp-plan-builder.html",
        "url": "/food-safety-templates/haccp-plan-builder",
        "required_links": [
            ("/tools", "return to all kitchen tools"),
            ("/blog/how-to-write-haccp-plan-uk-food-business-step-by-step", None)
        ]
    },
    {
        "name": "12. Template Detail Sample (Recipe Calculator Tool)",
        "file": ".next/server/app/food-safety-templates/recipe-calculator.html",
        "url": "/food-safety-templates/recipe-calculator",
        "required_links": [
            ("/tools", "return to all kitchen tools"),
            ("/blog/how-to-scale-recipes-commercial-catering-batch-calculator", None)
        ]
    }
]

print("=== RAW SERVER HTML AUDIT FOR FOOD-SAFETY CONTENT CLUSTER ===")

all_targets = set()
failures = 0

for page in PAGES_TO_VERIFY:
    full_path = os.path.join(base_dir, page["file"])
    print(f"\n{'-'*60}")
    print(f"CHECKING: {page['name']} ({page['url']})")
    if not os.path.exists(full_path):
        print(f"  [ERROR] File not found: {full_path}")
        failures += 1
        continue
    
    with open(full_path, "r", encoding="utf-8") as f:
        html = f.read()
    
    soup = BeautifulSoup(html, "html.parser")
    
    # H1
    h1s = soup.find_all("h1")
    print(f"  H1 count: {len(h1s)} | Text: '{h1s[0].get_text().strip() if h1s else 'NONE'}'")
    if len(h1s) != 1:
        print(f"  [FAIL] Expected exactly 1 H1, found {len(h1s)}")
        failures += 1
    
    # Canonical
    can = soup.find("link", rel="canonical")
    can_href = can.get("href") if can else "NONE"
    print(f"  Canonical: {can_href}")
    
    # Check Required Links
    links_on_page = soup.find_all("a")
    href_to_text = {}
    for a in links_on_page:
        href = a.get("href", "")
        txt = a.get_text().strip()
        if href:
            href_to_text.setdefault(href, []).append(txt)
            all_targets.add(href)
    
    for req_href, req_anchor in page["required_links"]:
        all_targets.add(req_href)
        if req_href in href_to_text:
            matched_anchors = href_to_text[req_href]
            if req_anchor:
                anchor_match = any(req_anchor.lower() in a.lower() for a in matched_anchors)
                if anchor_match:
                    print(f"  [PASS] Link to {req_href} (Anchor: '{matched_anchors}')")
                else:
                    print(f"  [WARN] Link to {req_href} found, but anchor text '{req_anchor}' not found in '{matched_anchors}'")
            else:
                print(f"  [PASS] Link to {req_href} (Anchor: '{matched_anchors}')")
        else:
            print(f"  [FAIL] Missing required link: {req_href}")
            failures += 1

print(f"\n{'-'*60}")
print(f"Summary: {failures} failures.")
print(f"Total unique internal target hrefs discovered: {len(all_targets)}")
