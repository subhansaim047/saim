import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

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

print("=== Checking target slugs in tool_deep_content.ts ===")
for slug in target_slugs:
    if f'"{slug}":' in text or f"'{slug}':" in text:
        print(f"[{slug}] (PRESENT)")
    else:
        print(f"[{slug}] (MISSING!)")
