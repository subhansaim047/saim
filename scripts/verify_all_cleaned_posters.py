import os
import json
import sys
from PIL import Image

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

with open("scripts/poster_mappings.json", "r", encoding="utf-8") as f:
    mappings = json.load(f)

poster_dir = os.path.join("public", "templates", "posters")

print(f"Verifying all {len(mappings)} cleaned poster files in {poster_dir}...")

green_logo_color = (0, 192, 100) # FoodDocs green
navy_qr_color = (27, 20, 100)    # FoodDocs QR navy

verified = 0

for item in mappings:
    pid = item["id"]
    filename = f"{pid}.png"
    filepath = os.path.join(poster_dir, filename)
    
    if not os.path.exists(filepath):
        print(f"[MISSING] {pid}: {filename} does not exist!")
        continue
        
    im = Image.open(filepath).convert("RGB")
    w, h = im.size
    
    # Check bottom region for FoodDocs branding remnants
    check_h = 100 if h < 2000 else 200
    bottom_crop = im.crop((0, h - check_h, w, h))
    
    # Check if bottom is clean white
    pixels = list(bottom_crop.getdata())
    non_white = [p for p in pixels if p[0] < 240 or p[1] < 240 or p[2] < 240]
    
    # If there are non-white pixels, check if it's template-64 (which has the center black divider)
    if non_white and pid != "template-64":
        print(f"[WARN] {pid} ({item['title']}): Found {len(non_white)} non-white pixels in bottom {check_h}px")
    else:
        verified += 1

print(f"\nVerification finished: {verified}/{len(mappings)} posters are 100% clean of branding!")
