import json
import re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Load templates
templates = {}
matches = re.finditer(r'\{[^{}]*?"slug":\s*"([^"]+)"[^{}]*?\}', text, re.DOTALL)
for m in matches:
    block = m.group(0)
    slug = m.group(1)
    title_m = re.search(r'"title":\s*"([^"]+)"', block)
    desc_m = re.search(r'"desc":\s*"([^"]+)"', block)
    type_m = re.search(r'"type":\s*"([^"]+)"', block)
    templates[slug] = {
        'title': title_m.group(1) if title_m else '',
        'desc': desc_m.group(1) if desc_m else '',
        'type': type_m.group(1) if type_m else ''
    }

with open('src/data/page_plan.json', 'r', encoding='utf-8') as f:
    plan = json.load(f)

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    core_meta = json.load(f)

from collections import defaultdict
print(f"Total parsed templates: {len(templates)}")

check_slugs = [
    'cleaning-schedule', 'cleaning-checklist-template', 'cleaning-restaurant', 'restaurant-cleaning-checklist',
    'deep-cleaning-checklist', 'restaurant-deep-cleaning-checklist',
    'kitchen-opening-and-closing-checklist', 'opening-and-closing-checklist-template',
    'pest-control-checklist', 'pest-control-inspection-checklist',
    'haccp-plan-builder', 'food-safety-plan', 'hazard-analysis-template',
    'allergy-matrix', 'food-allergen-chart', 'allergen-poster', 'food-allergy-warning',
    'chopping-board-colour-chart', 'cutting-board-color-chart',
    'fridge-temperature-chart', 'fridge-temperature-record-sheet-pdf',
    'freezer-temperature-chart',
    'health-inspection-checklist', 'restaurant-health-inspection-checklist', 'eho-checklist',
    'delivery-log', 'cooking-log-template', 'hot-holding-food-temperature-log', 'recipe-calculator'
]

for s in check_slugs:
    t = templates.get(s, {})
    p = plan.get(s, {})
    cm = core_meta.get(s, {})
    print(f"[{s}] type={t.get('type')} plan_bucket={p.get('bucket')} target={p.get('target_canonical_slug')}")
    print(f"   Title: {cm.get('title') or t.get('title')}")
    print(f"   Desc: {(cm.get('desc') or t.get('desc'))[:90]}...")
