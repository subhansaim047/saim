path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('"health-inspection-checklist"')
print("Pos:", pos)
print("Before pos:\n", text[pos-200:pos])
print("End of file:\n", text[-200:])
