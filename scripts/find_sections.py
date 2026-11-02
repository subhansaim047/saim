import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
print("Found sections in TemplateDetailPage.tsx:")
for match in re.finditer(r'<section[^>]*>|{/\*.*?\*/}', text):
    s = match.group()[:80].replace('\n', ' ')
    print(s)
