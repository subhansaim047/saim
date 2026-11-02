import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('"cleaning-schedule"')
print(f"cleaning-schedule at: {idx}")
if idx != -1:
    print(text[idx-40:idx+300])
