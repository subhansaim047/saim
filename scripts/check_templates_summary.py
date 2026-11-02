with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
items = re.findall(r'"id":\s*"([^"]+)"', text)
print("Total templates found:", len(items))

types = {}
for t in re.findall(r'"type":\s*"([^"]+)"', text):
    types[t] = types.get(t, 0) + 1
print("Templates by type:", types)
