"""
Update src/data/page_plan.json so all 160 templates are marked as KEEP.
"""
import json

with open('src/data/page_plan.json', 'r', encoding='utf-8') as f:
    plan = json.load(f)

for slug, data in plan.items():
    data['bucket'] = 'KEEP'
    data['target_canonical_slug'] = slug
    data['reason'] = 'Indexed as unique statutory template'

with open('src/data/page_plan.json', 'w', encoding='utf-8') as f:
    json.dump(plan, f, indent=2)

print(f"Updated all {len(plan)} entries in src/data/page_plan.json to KEEP!")
