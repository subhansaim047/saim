path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('"health-inspection-checklist"')
start = text.rfind('  "', 0, pos - 10)
print("Entry before health-inspection-checklist:", text[start:start+100])
