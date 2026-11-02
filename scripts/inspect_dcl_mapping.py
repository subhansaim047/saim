with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
idx = text.find('function getInitialTasks')
if idx != -1:
    print(text[idx:idx+2000])
