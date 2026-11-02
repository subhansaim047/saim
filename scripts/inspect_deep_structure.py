import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('"basic-food-preparation-rules"')
print("Found 'basic-food-preparation-rules' at character:", idx)
# Find the next key in TOOL_DEEP_CONTENT
next_keys = []
for line in text[idx:].splitlines()[:50]:
    if line.strip().startswith('"') and line.strip().endswith('": {'):
        next_keys.append(line.strip())
print("Keys appearing in next 50 lines:", next_keys)
