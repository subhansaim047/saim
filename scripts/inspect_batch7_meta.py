import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

slugs = [
    'fish-temperature-chart',
    'food-temperature-chart',
    'pork-temperature-chart',
    'allergen-control-sop',
    'haccp-audit-checklist-template'
]

for s in slugs:
    item = meta.get(s, {})
    title = item.get('title', '')
    desc = item.get('description', '')
    print(f"\nSlug: {s}")
    print(f"Title ({len(title)}): {title}")
    print(f"Desc ({len(desc)}): {desc}")
