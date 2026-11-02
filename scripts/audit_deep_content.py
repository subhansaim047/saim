import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Check for encoding artifacts like 
artifacts = content.count('')
print(f"Total  encoding artifacts in tool_deep_content.ts: {artifacts}")

# Check which tools are present
import re
slugs = re.findall(r'["\']([a-z0-9\-]+)["\']:\s*\{', content)
print(f"Total slugs in tool_deep_content.ts: {len(slugs)}")

# Check our 14 Tier-1 target tools:
tier_1 = [
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

print("\nTier-1 tools status in tool_deep_content.ts:")
for slug in tier_1:
    present = slug in slugs
    print(f" - {slug}: {'PRESENT' if present else 'MISSING'}")
