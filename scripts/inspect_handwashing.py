import json
import sys
sys.stdout.reconfigure(encoding='utf-8')

# 1. Metadata
with open(r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json", "r", encoding="utf-8") as f:
    meta = json.load(f)
print("Metadata for hand-washing-poster:")
print(json.dumps(meta.get("hand-washing-poster"), indent=2))

# 2. Template entry
with open(r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\saim_templates.ts", "r", encoding="utf-8") as f:
    text = f.read()
pos = text.find('"hand-washing-poster"')
if pos != -1:
    start = text.rfind('{', 0, pos)
    end = text.find('}', pos)
    print("\nTemplate entry:")
    print(text[start:end+1])

# 3. Deep content
with open(r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts", "r", encoding="utf-8") as f:
    content = f.read()
pos = content.find('"hand-washing-poster"')
if pos != -1:
    end = content.find('},\n  "', pos)
    print("\nDeep content:")
    print(content[pos:end+1])
else:
    print("\nNo deep content entry found for hand-washing-poster")
