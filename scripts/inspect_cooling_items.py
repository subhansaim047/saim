import json, re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    c = f.read()

m = re.search(r'export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*(\[[\s\S]*?\]);', c)
templates = json.loads(m.group(1))

for t in templates:
    target = t.get('targetUrl', '')
    slug = t.get('slug', '')
    title = t.get('title', '')
    if 'food-cooling' in target or 'cooling' in target or 'cool' in slug or 'cool' in title.lower():
        print(f"{t['id']} [{t['type']}]: title='{title}', slug='{slug}', target='{target}', pdf='{t.get('pdfUrl')}'")
