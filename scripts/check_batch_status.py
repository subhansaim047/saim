import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total tools in tracker: {len(data)}")
for i, t in enumerate(data[:15]):
    slug = t.get('slug')
    status = t.get('status')
    priority = t.get('priority_rank')
    opp = t.get('opportunity_score')
    print(f"#{i+1}: slug={slug} | status={status} | priority={priority} | opp={opp}")
