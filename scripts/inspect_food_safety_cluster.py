import re
import json

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Match items
items = re.findall(r'\"slug\":\s*\"([^\"]+)\"', text)
print(f"Total template items found: {len(items)}")
for item in sorted(items):
    print(item)
