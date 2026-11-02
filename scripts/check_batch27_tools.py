import json

with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

print("Batch 27 Tools (131 to 135):")
for r in tracker[130:135]:
    print(f"Rank {r.get('rank')}: {r.get('slug')} | Category: {r.get('category')} | Current Status: {r.get('status')}")
