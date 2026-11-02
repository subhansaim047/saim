path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('"hand-washing-poster"')
print("Found hand-washing-poster at:", pos)
if pos != -1:
    end = text.find('},\n  "', pos)
    print(text[pos:end+10])
