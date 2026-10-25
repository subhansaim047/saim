import os
import json
import urllib.request
from PIL import Image, ImageDraw

with open("scripts/chart_mappings.json", "r", encoding="utf-8") as f:
    mappings = json.load(f)

os.makedirs("public/templates/charts", exist_ok=True)
os.makedirs("scripts/temp_charts", exist_ok=True)

print(f"Total charts to process: {len(mappings)}")

for idx, item in enumerate(mappings):
    tid = item["id"]
    title = item["title"]
    url = item["downloadUrl"]
    method = item["method"]
    dest = item["destPath"]
    
    print(f"[{idx+1}/{len(mappings)}] Processing {tid}: {title}...")
    
    if method == "direct":
        raw_path = f"scripts/temp_charts/{tid}_raw.png"
        urllib.request.urlretrieve(url, raw_path)
        im = Image.open(raw_path).convert("RGB")
    elif method == "pdf_playwright":
        # For template-22, we already have walkin_exact.png or can use cropped version
        im = Image.open("scripts/walkin_exact.png").convert("RGB")
    
    w, h = im.size
    draw = ImageDraw.Draw(im)
    
    # Determine clear height based on dimensions
    if w >= 1500 and h >= 2200:
        # Standard High-Res A3/A4 (~1730x2580)
        clear_h = 225
        draw.rectangle([0, h - clear_h, w, h], fill=(255, 255, 255))
    elif w > h:
        # Landscape A4 (~1123x794)
        clear_h = 95
        draw.rectangle([0, h - clear_h, w, h], fill=(255, 255, 255))
    else:
        # Standard Portrait A4 (~794x1123)
        clear_h = 95
        draw.rectangle([0, h - clear_h, w, h], fill=(255, 255, 255))
        
    im.save(dest, format="PNG", optimize=True)
    print(f"    Saved cleaned chart to {dest} ({w}x{h}, cleared bottom {clear_h}px)")

print("\nAll 45 charts downloaded and cleaned successfully!")
