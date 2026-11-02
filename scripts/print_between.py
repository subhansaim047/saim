path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

pos1 = text.find('"cooking-log-template": {')
pos2 = text.find('"health-inspection-checklist": {')
print(text[pos1:pos2+100])
