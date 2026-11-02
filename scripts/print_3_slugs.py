import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
for slug in ["cooking-log-template", "eho-checklist", "delivery-log"]:
    m = re.search(rf'\{{[^{{}}]*"slug":\s*"{slug}"[^{{}}]*\}}', text)
    if m:
        print(f"=== {slug} ===")
        print(m.group())
