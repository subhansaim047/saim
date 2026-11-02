import json

with open('src/data/page_plan.json', 'r', encoding='utf-8') as f:
    plan = json.load(f)

keep = [k for k, v in plan.items() if v.get('bucket') in ('KEEP', 'IMPROVE')]
print("Current KEEP & IMPROVE slugs (count=" + str(len(keep)) + "):")
for k in sorted(keep):
    print(f"  {k}: {plan[k].get('reason')}")
