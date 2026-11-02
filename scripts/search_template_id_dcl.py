with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
lines = text.splitlines()
for i, l in enumerate(lines):
    if 'templateId' in l:
        print(f"{i+1}: {l}")
