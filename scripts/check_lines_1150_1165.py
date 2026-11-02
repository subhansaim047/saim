path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

for i in range(1148, min(len(lines), 1165)):
    print(f"{i+1}: {repr(lines[i])}")
