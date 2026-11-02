with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
idx = text.find('const isUtensilsTool =')
if idx != -1:
    print(text[idx:idx+350])
