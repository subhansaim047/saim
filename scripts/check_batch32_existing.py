import json

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    deep = f.read()

batch32_slugs = [
    'boiling-water-thermometer-calibration',
    'prevent-freezer-burn',
    'restaurant-steps-of-service',
    'restaurant-food-safety-procedures',
    'restaurant-manager-responsibilities'
]

print("=== CHECKING BATCH 32 SLUGS ===")
for s in batch32_slugs:
    in_meta = s in meta
    in_deep = f'"{s}":' in deep or f"'{s}':" in deep
    print(f"Slug: {s}")
    print(f"  In core_metadata: {in_meta}")
    if in_meta:
        print(f"    title: {meta[s].get('title')} ({len(meta[s].get('title', ''))} chars)")
        print(f"    desc: {meta[s].get('desc')} ({len(meta[s].get('desc', ''))} chars)")
    print(f"  In tool_deep_content: {in_deep}")
