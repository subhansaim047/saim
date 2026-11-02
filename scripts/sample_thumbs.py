import os
import json

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
with open(os.path.join(base_dir, "src/data/saim_templates.ts"), "r", encoding="utf-8") as f:
    text = f.read()

eq_idx = text.find("=", text.find("FOOD_SAFETY_TEMPLATES"))
start = text.find("[", eq_idx)
cat_idx = text.find("export const ALL_CATEGORIES")
end = text.rfind("];", 0, cat_idx)

templates = json.loads(text[start:end+1])

thumb_paths = set()
thumb_sizes = []

for t in templates:
    thumb = t.get("thumbUrl")
    img = t.get("imgUrl")
    p = os.path.join(base_dir, "public", thumb.lstrip("/"))
    sz = os.path.getsize(p) if os.path.exists(p) else 0
    thumb_sizes.append(sz)
    thumb_paths.add(thumb)

print(f"Total unique thumbUrl values: {len(thumb_paths)}")
print(f"Average thumb size: {sum(thumb_sizes) / len(thumb_sizes) / 1024:.1f} KB")
print(f"Max thumb size: {max(thumb_sizes) / 1024:.1f} KB")
print(f"Min thumb size: {min(thumb_sizes) / 1024:.1f} KB")

# Check sample thumbs
print("\nSample thumbs:")
for t in templates[:5]:
    print(f"  {t['slug']}: thumb={t.get('thumbUrl')}, img={t.get('imgUrl')}")
