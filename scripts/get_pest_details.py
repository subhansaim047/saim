import json, re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    c = f.read()

m = re.search(r'export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*(\[[\s\S]*?\]);', c)
templates = json.loads(m.group(1))

print("--- PEST TEMPLATES ---")
for t in templates:
    if 'pest' in (t['title'] + ' ' + t['slug']).lower():
        print(f"ID: {t['id']}")
        print(f"  Title: {t['title']}")
        print(f"  Type: {t['type']}")
        print(f"  Slug: {t['slug']}")
        print(f"  TargetUrl: {t['targetUrl']}")
        print(f"  Description: {t.get('description', '')[:80]}...")
