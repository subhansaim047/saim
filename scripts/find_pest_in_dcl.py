import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'pest' in l.lower():
        print(f"L{i+1}: {l.strip()}")
