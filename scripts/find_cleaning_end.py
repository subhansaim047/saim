import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('"cleaning-schedule"')
end_idx = text.find('},\n  "', idx + 20)
print(f"cleaning-schedule ends at: {end_idx}")
print(text[end_idx-100:end_idx+200])
