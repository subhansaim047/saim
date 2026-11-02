import json

with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

print("Batch 29 Tools (141 to 145):")
for r in tracker[140:145]:
    print(f"Rank {r.get('rank')}: {r.get('slug')} | Category: {r.get('category')} | Current Status: {r.get('status')}")
