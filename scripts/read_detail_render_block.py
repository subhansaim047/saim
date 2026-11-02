import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(250, 320):
    if i < len(lines):
        print(f"L{i+1}: {lines[i]}", end='')
