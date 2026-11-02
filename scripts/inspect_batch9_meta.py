import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

slugs = [
    'consumer-advisory',
    'food-allergy-warning',
    'waste-management-schedule',
    'food-flow-chart',
    'food-safety-plan'
]

for s in slugs:
    item = meta.get(s, {})
    title = item.get('title', '')
    desc = item.get('desc', item.get('description', ''))
    print(f"\nSlug: {s}")
    print(f"Title ({len(title)}): {title}")
    print(f"Desc ({len(desc)}): {desc}")
