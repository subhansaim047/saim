import json, re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    c = f.read()

m = re.search(r'export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*(\[[\s\S]*?\]);', c)
templates = json.loads(m.group(1))

for t in templates[:10]:
    print(f"ID: {t['id']}, Title: '{t['title']}', Slug: '{t['slug']}', Target: '{t.get('targetUrl')}'")
