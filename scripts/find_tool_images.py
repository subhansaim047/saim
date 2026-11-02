import json
with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract JSON array
import re
match = re.search(r'export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate\[\] = (\[.*?\]);', text, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    print(f"Total templates: {len(data)}")
    for item in data:
        t = item.get('title', '')
        s = item.get('slug', '')
        if any(k in t.lower() or k in s.lower() for k in ['hygiene', '5-star', 'inspection', 'checklist', 'natasha', 'allergen', 'cooling', 'temp']):
            print(f"{item.get('id')}: {t} | slug: {s} | img: {item.get('imgUrl')} | thumb: {item.get('thumbUrl')}")
