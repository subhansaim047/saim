import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

print("=== BATCH 4 TOOLS (16 to 20) ===")
for t in tracker[15:20]:
    print(f"Priority: {t.get('priority_rank')} | Slug: {t.get('slug')} | Category: {t.get('category')} | Score: {t.get('opportunity_score')} | Keyword: {t.get('main_keyword')}")
