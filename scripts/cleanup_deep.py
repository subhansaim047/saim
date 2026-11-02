path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# Let's remove the badly placed health-inspection-checklist
pos_bad = text.find('  "health-inspection-checklist": {')
if pos_bad != -1:
    text = text[:pos_bad].rstrip()
    # Ensure FALLBACK_DEEP_CONTENT is properly closed
    if not text.endswith("};"):
        # find the end of fallback
        text += "\n};"

print("Cleaned text ending:\n", text[-300:])
