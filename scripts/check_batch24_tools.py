import json

with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

print("Batch 24 Tools (116 to 120):")
for r in tracker[115:120]:
    print(f"Rank {r.get('rank')}: {r.get('slug')} | Category: {r.get('category')} | Current Status: {r.get('status')}")
