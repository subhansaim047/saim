with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'const isChecklistOrLog = (.*?);', text, re.DOTALL)
if m:
    print(m.group(0))
