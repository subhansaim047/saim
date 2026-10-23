import os
import json
import urllib.request
from PIL import Image, ImageDraw

with open("scripts/chart_mappings.json", "r", encoding="utf-8") as f:
    mappings = json.load(f)

os.makedirs("public/templates/charts", exist_ok=True)
os.makedirs("scripts/temp_charts", exist_ok=True)

print(f"Applying precise calibrated cleaning to all {len(mappings)} charts...")

results = []

for idx, item in enumerate(mappings):
    tid = item["id"]
    title = item["title"]
    url = item["downloadUrl"]
    method = item["method"]
    dest = item["destPath"]
    
    if method == "pdf_playwright" or tid == "template-22":
        im = Image.open("scripts/walkin_full_page.png").convert("RGB")
        w, h = im.size
        draw = ImageDraw.Draw(im)
        draw.rectangle([0, 1985, w, h], fill=(255, 255, 255))
        clear_h = h - 1985
    else:
        raw_path = f"scripts/temp_charts/{tid}_raw.png"
        if not os.path.exists(raw_path):
            urllib.request.urlretrieve(url, raw_path)
        im = Image.open(raw_path).convert("RGB")
        w, h = im.size
        draw = ImageDraw.Draw(im)
        
        if w >= 1500 and h >= 2200:
            clear_h = 225
        elif w == 1754 and h == 1240:
            clear_h = 180
        elif w == 1240 and h == 1754:
            clear_h = 155
        elif w == 1123 and h == 794:
            clear_h = 105
        elif w == 794 and h == 1123:
            clear_h = 105
        elif w == 595 and h == 842:
            clear_h = 115
        elif w > h:
            # General landscape fallback
            clear_h = int(h * 0.13)
        else:
            # General portrait fallback
            clear_h = int(h * 0.10)
            
        draw.rectangle([0, h - clear_h, w, h], fill=(255, 255, 255))
        
    im.save(dest, format="PNG", optimize=True)
    results.append({
        "id": tid,
        "title": title,
        "size": [w, h],
        "cleared_h": clear_h,
        "dest": dest
    })
    print(f"[{idx+1}/45] {tid} ({w}x{h}): Cleared bottom {clear_h}px -> {dest}")

with open("scripts/cleaned_charts_result.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print("\nAll 45 charts successfully cleaned and written to public/templates/charts/!")
