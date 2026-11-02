import json
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/page_plan.json', 'r', encoding='utf-8') as f:
    plan = json.load(f)

keep_slugs = [slug for slug, info in plan.items() if info.get('bucket') == 'KEEP']
print(f"Total KEEP slugs in page_plan.json: {len(keep_slugs)}")
for s in sorted(keep_slugs):
    print(f" - {s}")
