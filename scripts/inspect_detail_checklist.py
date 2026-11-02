with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'const isDigitalChecklist = (.*?);', text, re.DOTALL)
if m:
    print(m.group(0))
else:
    print("Could not find isDigitalChecklist, searching for DigitalChecklistTool in JSX")
    idx = text.find('<DigitalChecklistTool')
    if idx != -1:
        print(text[idx-500:idx+200])
