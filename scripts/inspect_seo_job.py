import re
import json

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Notice "slug": "..."
slugs = re.findall(r'["\']?slug["\']?\s*:\s*["\']([^"\']+)["\']', text)
print(f"Total templates in saim_templates.ts: {len(slugs)}")
print(f"Unique slugs: {len(set(slugs))}")

cluster_slugs = [
    'fridge-temperature-log', 'freezer-temperature-log', 'handwashing-poster',
    'chopping-board-guide', 'delivery-intake-log', 'opening-closing-checklist',
    'food-cost-calculator', 'recipe-calculator'
]
print("\n--- Cluster Slugs in saim_templates.ts ---")
for s in cluster_slugs:
    print(f"{s}: in saim_templates? {s in slugs}")

# Also check page_plan.json
with open('src/data/page_plan.json', 'r', encoding='utf-8') as f:
    plan = json.load(f)

print("\n--- Cluster Slugs in page_plan.json ---")
for s in cluster_slugs:
    p = plan.get(s)
    print(f"{s}: plan={p}")

# Searching matches for base keywords
print("\n--- Searching similar slugs in saim_templates.ts ---")
for s in cluster_slugs:
    parts = s.split('-')
    keyword = parts[0]
    matches = [sl for sl in slugs if keyword in sl]
    print(f"Key '{s}' -> matches for '{keyword}': {matches}")
