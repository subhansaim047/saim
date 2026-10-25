import re

with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    c = f.read()

m = re.search(r'"food-allergen-chart":\s*\{([\s\S]*?)\n  \},', c)
if m:
    print(m.group(0))
else:
    print('Not found')
