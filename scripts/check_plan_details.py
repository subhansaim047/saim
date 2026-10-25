import json

with open('src/data/page_plan.json', 'r', encoding='utf-8') as f:
    plan = json.load(f)

for slug, info in plan.items():
    if any(k in slug for k in ['cool', 'pest', 'fsma', 'ecosure', 'amazon', 'cutting-board']):
        print(f"SLUG: {slug}")
        print(f"  bucket: {info.get('bucket')}")
        print(f"  mergeTarget: {info.get('mergeTarget')}")
        print(f"  canonicalTarget: {info.get('canonicalTarget')}")
        print(f"  rationale: {info.get('rationale')}")
