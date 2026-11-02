import json
import re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

slugs = set(re.findall(r'["\']slug["\']\s*:\s*["\']([^"\']+)["\']', text))

check_list = [
    'kitchen-opening-and-closing-checklist',
    'opening-and-closing-checklist-template',
    'delivery-log',
    'cooking-log-template',
    'eho-checklist',
    'health-inspection-checklist',
    'restaurant-health-inspection-checklist',
    'cleaning-schedule',
    'restaurant-cleaning-checklist',
    'fridge-temperature-chart',
    'fridge-temperature-record-sheet-pdf',
    'freezer-temperature-chart',
    'chopping-board-colour-chart',
    'hand-washing-poster'
]

for s in check_list:
    print(f"{s}: exists={s in slugs}")
