with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'const ([A-Z_]+_TASKS):', text)
print("Available task lists in DigitalChecklistTool:")
for m in matches:
    print(f" - {m}")
