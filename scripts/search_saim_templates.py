import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'id:\s*["\']([^"\']+)["\']', text)
print(f"Total templates in saim_templates.ts: {len(matches)}")

print("\nTemplates matching eho, delivery, cook, temp, intake:")
for m in matches:
    if any(k in m for k in ['eho', 'deliv', 'cook', 'intake', 'goods']):
        print(" -", m)
