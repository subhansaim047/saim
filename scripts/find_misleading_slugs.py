import re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    c = f.read()

slugs = re.findall(r'slug:\s*["\']([^"\']+)["\']', c)

keywords = ['fsma', 'amazon', 'ecosure', 'cutting-board-color-chart']
matches = [s for s in slugs if any(k in s.lower() for k in keywords)]

print(f"Total matching slugs: {len(matches)}")
for s in matches:
    print(f"  - {s}")
