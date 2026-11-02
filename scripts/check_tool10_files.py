import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Check core_metadata.json keys
with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

matching_keys = [k for k in meta.keys() if 'basic-food-prep' in k or 'safe-food-prep' in k]
print("Matching keys in core_metadata.json:", matching_keys)
for k in matching_keys:
    print(k, "->", meta[k])

# Check saim_templates.ts
with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\saim_templates.ts', 'r', encoding='utf-8') as f:
    content = f.read()

import re
match = re.search(r"slug:\s*['\"]basic-food-preparation-rules['\"].*?category:\s*['\"](.*?)['\"].*?title:\s*['\"](.*?)['\"]", content, re.DOTALL)
if match:
    print("Found in saim_templates.ts:", match.group(0)[:300])
else:
    print("Searching basic-food-prep...")
    idx = content.find("basic-food-preparation-rules")
    if idx != -1:
        print(content[idx-100:idx+400])

# Check tool_deep_content.ts
with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts', 'r', encoding='utf-8') as f:
    deep_content = f.read()

if "basic-food-preparation-rules" in deep_content:
    print("Found in tool_deep_content.ts!")
    idx = deep_content.find("basic-food-preparation-rules")
    print(deep_content[idx:idx+500])
else:
    print("NOT found in tool_deep_content.ts")
