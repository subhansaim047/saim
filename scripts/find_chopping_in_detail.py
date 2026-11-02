import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
for m in re.finditer(r'isChoppingBoardTool', text):
    start = max(0, m.start() - 50)
    end = min(len(text), m.end() + 80)
    print("Found:", text[start:end].replace('\n', ' '))
