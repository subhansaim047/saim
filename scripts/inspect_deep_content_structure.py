import json
import re

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)
print('Keys in core_metadata.json:', list(meta.keys()))

with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    deep = f.read()

slugs = re.findall(r'["\']([a-z0-9\-]+)["\']:\s*\{', deep)
print('Slugs found in tool_deep_content.ts:', slugs[:25])
print('Total slugs found in tool_deep_content.ts:', len(slugs))
