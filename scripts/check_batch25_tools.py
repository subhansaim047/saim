import json

with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

print("Batch 25 Tools (121 to 125):")
for r in tracker[120:125]:
    print(f"Rank {r.get('rank')}: {r.get('slug')} | Category: {r.get('category')} | Current Status: {r.get('status')}")
