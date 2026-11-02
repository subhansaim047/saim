import json

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.json', encoding='utf-8') as f:
    tracker = json.load(f)

print(f"Total tools in tracker: {len(tracker)}")
for t in tracker:
    r = t.get('priority_rank')
    if r in [81, 82, 83, 84, 85]:
        print(f"Rank {r}: slug='{t.get('slug')}', category='{t.get('category')}', status='{t.get('status')}', title='{t.get('title')}'")
