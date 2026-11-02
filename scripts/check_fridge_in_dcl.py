import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('fridge')
print("Found 'fridge' in DigitalChecklistTool:", idx != -1)
if idx != -1:
    print(text[max(0, idx-50):min(len(text), idx+300)])
