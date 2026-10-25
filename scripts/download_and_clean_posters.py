import urllib.request
import os
import sys
import json
from PIL import Image, ImageDraw

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

with open("scripts/poster_mappings.json", "r", encoding="utf-8") as f:
    mappings = json.load(f)

output_dir = os.path.join("public", "templates", "posters")
os.makedirs(output_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

print(f"Processing {len(mappings)} posters...")

results = []

for idx, item in enumerate(mappings, 1):
    pid = item["id"]
    slug = item["slug"]
    title = item["title"]
    url = item["posterPngUrl"]
    out_filename = f"{pid}.png"
    out_path = os.path.join(output_dir, out_filename)
    
    print(f"\n[{idx}/{len(mappings)}] Processing {title} ({pid})...")
    print(f"  URL: {url}")
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            raw_data = resp.read()
            
        temp_path = os.path.join("scripts", "temp_poster.png")
        with open(temp_path, "wb") as f:
            f.write(raw_data)
            
        im = Image.open(temp_path).convert("RGB")
        w, h = im.size
        print(f"  Size: {w}x{h}")
        
        # Sample background color in the footer area:
        # Sample at center bottom (w // 2, h - 30)
        bg_color = im.getpixel((w // 2, h - 30))
        print(f"  Detected footer center bg: {bg_color}")
        
        # If center is white or near white, use pure white (255, 255, 255)
        # Otherwise use the sampled bg_color
        if bg_color[0] >= 240 and bg_color[1] >= 240 and bg_color[2] >= 240:
            fill_color = (255, 255, 255)
        else:
            fill_color = bg_color
            
        # The branding on all Upstream posters is within the bottom 230 pixels
        draw = ImageDraw.Draw(im)
        draw.rectangle([(0, h - 230), (w, h)], fill=fill_color)
        
        # Save optimized PNG
        im.save(out_path, format="PNG", optimize=True)
        file_size = os.path.getsize(out_path)
        print(f"  [OK] Cleaned & saved: {out_filename} ({file_size} bytes)")
        
        results.append({
            "id": pid,
            "slug": slug,
            "title": title,
            "status": "success",
            "size": f"{w}x{h}",
            "fileSize": file_size,
            "imagePath": f"/templates/posters/{out_filename}"
        })
    except Exception as e:
        print(f"  [ERROR] Error processing {pid}: {e}")
        results.append({
            "id": pid,
            "slug": slug,
            "title": title,
            "status": "error",
            "error": str(e)
        })

print("\n" + "="*50)
print(f"SUMMARY: {len([r for r in results if r['status'] == 'success'])}/{len(mappings)} successfully processed.")
with open("scripts/cleaned_posters_result.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)
