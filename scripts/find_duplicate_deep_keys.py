import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/tool_deep_content.ts'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all keys matching "slug": {
keys = re.findall(r'^\s*"([a-zA-Z0-9\-_]+)":\s*\{', content, re.MULTILINE)

seen = set()
duplicates = []
for k in keys:
    if k in seen:
        duplicates.append(k)
    seen.add(k)

print("Total keys found:", len(keys))
print("Duplicate keys:", duplicates)
