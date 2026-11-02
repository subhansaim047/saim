with open('src/components/tools/HaccpPlanBuilderTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
print("Length:", len(text))
for m in re.findall(r'(const \w+|interface \w+|function \w+|export const \w+)', text):
    print(" ", m)
