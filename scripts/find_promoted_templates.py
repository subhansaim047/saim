import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
for slug in ["eho-checklist", "delivery-log", "cooking-log-template"]:
    idx = text.find(f'id: "{slug}"')
    if idx != -1:
        start = max(0, idx - 50)
        end = min(len(text), idx + 800)
        print(f"=== Found {slug} ===")
        print(text[start:end])
        print("="*40)
    else:
        print(f"NOT found: {slug}")
