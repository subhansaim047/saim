import json
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    saim = f.read()

target_slugs = [
    "allergy-matrix",
    "food-allergen-chart",
    "food-cost-calculator",
    "haccp-plan-builder",
    "opening-and-closing-checklist-template",
    "fridge-temperature-record-sheet-pdf",
    "freezer-temperature-chart",
    "cleaning-schedule",
    "eho-checklist",
    "delivery-log",
    "hot-holding-food-temperature-log",
    "cooking-log-template",
    "recipe-calculator"
]

print("=== Checking target slugs in core_metadata.json ===")
for slug in target_slugs:
    if slug in meta:
        item = meta[slug]
        title = item.get('title', '')
        desc = item.get('desc', '')
        print(f"[{slug}] (IN core_metadata)")
        print(f"  Title ({len(title)}): {title}")
        print(f"  Desc ({len(desc)}): {desc}")
    else:
        print(f"[{slug}] (MISSING from core_metadata!)")
