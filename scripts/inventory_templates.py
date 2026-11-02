import re
import json

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\saim_templates.ts"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Match entries in FOOD_SAFETY_TEMPLATES
# Each item has: id, title, slug, description, category, etc.
pattern = re.compile(r'\{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*category:\s*"([^"]+)"', re.MULTILINE)
matches = pattern.findall(content)

print(f"Total structured templates matched: {len(matches)}")
if matches:
    print("First 5 templates:")
    for m in matches[:5]:
        print(f"ID: {m[0]} | Title: {m[1]} | Slug: {m[2]} | Cat: {m[4]}")
        
    print(f"Last 5 templates:")
    for m in matches[-5:]:
        print(f"ID: {m[0]} | Title: {m[1]} | Slug: {m[2]} | Cat: {m[4]}")

# Also check how many total objects in FOOD_SAFETY_TEMPLATES
ids = re.findall(r'id:\s*"([^"]+)"', content)
print(f"Total IDs in file: {len(ids)}")
