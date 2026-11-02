import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'"slug":\s*["\']([^"\']+)["\']', text)
print(f"Total slugs in saim_templates.ts: {len(matches)}")

print("\nMatching eho, delivery, cook, temp, intake, check:")
for m in matches:
    if any(k in m for k in ['eho', 'deliv', 'cook', 'intake', 'goods']):
        print(" -", m)
