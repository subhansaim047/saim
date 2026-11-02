import sys
sys.stdout.reconfigure(encoding='utf-8')

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# Replace sanitize with sanitise in restaurant-cleaning-checklist block
pos = text.find('"restaurant-cleaning-checklist"')
if pos != -1:
    end = text.find('},\n  "', pos)
    block = text[pos:end]
    new_block = block.replace("sanitize", "sanitise").replace("sanitized", "sanitised").replace("customized", "customised")
    text = text[:pos] + new_block + text[end:]
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    print("Replaced American spellings in restaurant-cleaning-checklist deep content")
else:
    print("Block not found")
