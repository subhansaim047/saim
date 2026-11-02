import json

with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

print("Batch 28 Tools (136 to 140):")
for r in tracker[135:140]:
    print(f"Rank {r.get('rank')}: {r.get('slug')} | Category: {r.get('category')} | Current Status: {r.get('status')}")
