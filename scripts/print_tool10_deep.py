import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

idx1 = text.find('"basic-food-preparation-rules"')
idx2 = text.find('"food-allergen-chart": {')

print(text[idx1:idx2])
