import json, re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    c = f.read()

m = re.search(r'export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*(\[[\s\S]*?\]);', c)
templates = json.loads(m.group(1))

print("=== COOLING TEMPLATES ===")
for t in templates:
    if 'cool' in (t['title'] + ' ' + t['slug']).lower():
        print(f"{t['id']} [{t['type']}]: title='{t['title']}', slug='{t['slug']}', targetUrl='{t.get('targetUrl')}'")

print("\n=== PEST CONTROL TEMPLATES ===")
for t in templates:
    if 'pest' in (t['title'] + ' ' + t['slug']).lower():
        print(f"{t['id']} [{t['type']}]: title='{t['title']}', slug='{t['slug']}', targetUrl='{t.get('targetUrl')}'")

print("\n=== TEMPLATE vs SMART TOOL PAIRS ===")
# Find checklists / templates that have matching or near-matching titles
titles = [t['title'].lower() for t in templates]
for t in templates:
    t_name = t['title'].lower()
    for kw in ['checklist', 'template', 'smart tool', 'inspection']:
        t_core = t_name.replace(kw, '').strip()
    # Check if another template shares core
    matches = [o for o in templates if o['id'] != t['id'] and (t_core in o['title'].lower() and len(t_core) > 5)]
    if len(matches) > 1 and t['type'] in ['checklist', 'smart_tool']:
        print(f"{t['id']} ({t['type']}: '{t['title']}') matches {[m['id'] + ': ' + m['title'] for m in matches[:3]]}")
