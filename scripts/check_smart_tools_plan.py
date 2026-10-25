import json, re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    c = f.read()
m = re.search(r'export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*(\[[\s\S]*?\]);', c)
templates = json.loads(m.group(1))

with open('src/data/page_plan.json', 'r', encoding='utf-8') as f:
    plan = json.load(f)

print("=== SMART TOOLS IN DATASET & PLAN ===")
for t in templates:
    if t.get('type') == 'smart_tool':
        slug = t['slug']
        p = plan.get(slug, {})
        print(f"{t['id']}: '{t['title']}' (slug: {slug}) -> bucket: {p.get('bucket')}, canonicalTarget: {p.get('canonicalTarget')}")
