with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.findall(r'if\s*\([^)]*templateId[^)]*\)', text)
for item in m:
    print(item)
