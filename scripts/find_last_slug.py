import re
path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('"health-inspection-checklist"')
matches = list(re.finditer(r'["\']([a-z0-9-]+)["\']:\s*\{', text[:pos]))
if matches:
    last_match = matches[-1]
    print("Last slug:", last_match.group(1))
    print(text[last_match.start():last_match.start()+200])
