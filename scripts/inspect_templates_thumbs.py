import json

with open("src/data/saim_templates.ts", "r", encoding="utf-8") as f:
    text = f.read()

eq_idx = text.find("=", text.find("FOOD_SAFETY_TEMPLATES"))
start = text.find("[", eq_idx)
cat_idx = text.find("export const ALL_CATEGORIES")
end = text.rfind("];", 0, cat_idx)

templates = json.loads(text[start:end+1])

print(f"Total templates: {len(templates)}")

missing_thumb = 0
has_thumb = 0
thumb_exists_on_disk = 0

import os
base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

for t in templates:
    thumb = t.get("thumbUrl")
    img = t.get("imgUrl")
    if not thumb:
        missing_thumb += 1
    else:
        has_thumb += 1
        p = os.path.join(base_dir, "public", thumb.lstrip("/"))
        if os.path.exists(p):
            thumb_exists_on_disk += 1

print(f"Templates with thumbUrl defined: {has_thumb}")
print(f"Templates missing thumbUrl: {missing_thumb}")
print(f"Thumbnails that actually exist on disk: {thumb_exists_on_disk}")
