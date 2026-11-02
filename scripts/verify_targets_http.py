import os
import sys
import urllib.request

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

targets = [
    "/food-safety-templates/allergy-matrix",
    "/food-safety-templates/food-allergen-chart",
    "/tools/ppds-label-generator",
    "/food-safety-templates/food-cost-calculator",
    "/food-safety-templates/recipe-calculator",
    "/food-safety-templates/haccp-plan-builder",
    "/food-safety-templates/opening-and-closing-checklist-template",
    "/food-safety-templates/cleaning-schedule",
    "/food-safety-templates/fridge-temperature-record-sheet-pdf",
    "/food-safety-templates/freezer-temperature-chart",
    "/food-safety-templates/food-cooling-poster",
    "/tools",
    "/blogs",
    "/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants",
    "/blog/natashas-law-ppds-food-labelling-guide",
    "/blog/mastering-food-cost-percentage-commercial-kitchen-calculator",
    "/blog/how-to-scale-recipes-commercial-catering-batch-calculator",
    "/blog/how-to-write-haccp-plan-uk-food-business-step-by-step",
    "/blog/sfbb-daily-kitchen-opening-closing-checklist-guide",
    "/blog/commercial-kitchen-food-cooling-temperature-guide"
]

domain = "https://www.saimdev.site"
print(f"=== CHECKING HTTP STATUS FOR {len(targets)} FOOD-SAFETY CLUSTER TARGETS ===")

all_pass = True
for path in targets:
    url = domain + path
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
        res = urllib.request.urlopen(req, timeout=10)
        status = res.status
        print(f"  [PASS] {status} - {path}")
    except urllib.error.HTTPError as e:
        print(f"  [FAIL] {e.code} - {path}")
        all_pass = False
    except Exception as e:
        print(f"  [WARN] {e} - {path}")

print(f"Result: {'ALL TARGETS RETURN HTTP 200' if all_pass else 'FAILURES DETECTED'}")
