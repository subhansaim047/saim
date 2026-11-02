import re

with open(r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts", "r", encoding="utf-8") as f:
    text = f.read()

m = re.search(r'\"food-safety-quiz\":\s*\{([\s\S]*?)\n  \},', text)
if m:
    print(m.group(1)[:1500])
else:
    print("Not found")
