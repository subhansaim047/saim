import json

with open('src/data/page_plan.json', 'r', encoding='utf-8') as f:
    plan = json.load(f)

print("=== MERGE PAGES CHECK ===")
for slug, info in plan.items():
    if info.get('bucket') == 'MERGE':
        target = info.get('target_canonical_slug') or info.get('mergeTarget')
        print(f"Slug: {slug} -> target: {target}")
