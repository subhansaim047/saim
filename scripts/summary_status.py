import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

completed = [t for t in tracker if t.get('status') == 'COMPLETED']
pending = [t for t in tracker if t.get('status') == 'PENDING']

print(f"Total tools: {len(tracker)}")
print(f"Completed tools: {len(completed)}")
print(f"Pending tools: {len(pending)}")
print("\nNext 10 tools to process (Batch 6 & 7):")
for t in pending[:10]:
    print(f"Priority #{t.get('priority_rank')}: {t.get('slug')} (Opp: {t.get('opportunity_score')})")
