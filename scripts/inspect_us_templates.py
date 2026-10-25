import json, re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    c = f.read()

m = re.search(r'export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*(\[[\s\S]*?\]);', c)
templates = json.loads(m.group(1))

target_ids = ['template-106', 'template-110', 'template-129', 'template-136', 'template-149']
for t in templates:
    if t['id'] in target_ids:
        print(f"=== {t['id']} ===")
        print(f"Title: {t['title']}")
        print(f"Slug: {t['slug']}")
        print(f"Type: {t['type']}")
        print(f"Preheader: {t.get('preheader')}")
        print(f"Desc: {t.get('desc')}")
        print(f"Summary: {t.get('summary')}")
