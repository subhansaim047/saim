import json

with open('src/data/page_plan.json', 'r', encoding='utf-8') as f:
    plan = json.load(f)

buckets = {}
for slug, item in plan.items():
    b = item.get('bucket', 'UNKNOWN')
    buckets.setdefault(b, []).append(slug)

print("Page plan buckets summary:")
for b, slugs in buckets.items():
    print(f"  {b}: {len(slugs)} slugs")

print("\nSample KEEP/IMPROVE:")
print(slugs[:10])
