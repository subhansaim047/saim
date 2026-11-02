import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/core_metadata.json'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    meta = json.load(f)

slugs = [
    'product-specification-template',
    'pest-control-inspection-checklist',
    'pest-control-template',
    'bar-opening-checklist',
    'restaurant-checklist'
]

for s in slugs:
    item = meta.get(s, {})
    title = item.get('title', '')
    desc = item.get('desc', item.get('description', ''))
    print(f"\nSlug: {s}")
    print(f"Title ({len(title)}): {title}")
    print(f"Desc ({len(desc)}): {desc}")
