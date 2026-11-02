import sys
sys.stdout.reconfigure(encoding='utf-8')

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('"haccp-plan-builder"')
if pos != -1:
    end = text.find('},\n  "', pos)
    block = text[pos:end]
    new_block = block.replace("sanitize", "sanitise").replace("sanitized", "sanitised").replace("color-coded", "colour-coded")
    text = text[:pos] + new_block + text[end:]
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    print("Polished haccp-plan-builder in tool_deep_content.ts")
else:
    print("Block not found")
