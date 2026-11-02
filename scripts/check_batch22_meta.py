import json

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

batch22_slugs = [
    "restaurant-opening-checklist",
    "printable-retail-store-daily-checklist",
    "opening-and-closing-checklist-template",
    "restaurant-equipment-list",
    "opening-a-restaurant-checklist"
]

for slug in batch22_slugs:
    m = meta.get(slug)
    if not m:
        print(f"Missing {slug}!")
        continue
    t = m.get("title", "")
    d = m.get("desc", "")
    print(f"\nSlug: {slug}")
    print(f"  Title ({len(t)} chars): {t}")
    print(f"  Desc ({len(d)} chars): {d}")
    print(f"  HowTo steps: {len(m.get('howTo', []))}")
