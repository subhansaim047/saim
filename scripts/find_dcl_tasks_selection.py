import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'tasks' in l.lower() and ('const' in l or 'state' in l or 'initial' in l or 'default' in l or 'switch' in l or 'if' in l):
        print(f"L{i+1}: {l.strip()}")
