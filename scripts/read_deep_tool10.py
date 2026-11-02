import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('"basic-food-preparation-rules"')
if idx != -1:
    end_idx = text.find('},\n  "', idx + 30)
    if end_idx == -1:
        end_idx = text.find('};\n', idx + 30)
    print("Found entry length:", end_idx - idx)
    print(text[idx:min(idx + 1200, len(text))])
else:
    print("Not found!")
