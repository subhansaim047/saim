with open('src/components/tools/KitchenUtensilsTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
print("Length:", len(text))
print("Categories in KitchenUtensilsTool:")
for m in re.findall(r'id:\s*"([^"]+)",\s*name:\s*"([^"]+)"', text):
    print(" ", m)
