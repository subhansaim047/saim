import sys
sys.stdout.reconfigure(encoding='utf-8')
path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('"freezer-temperature-chart"')
if pos == -1:
    pos = text.find("'freezer-temperature-chart'")
print("Found position:", pos)
if pos != -1:
    end = text.find('\n  },', pos)
    print(text[pos:end+5])
else:
    print("Not found in tool_deep_content.ts")
