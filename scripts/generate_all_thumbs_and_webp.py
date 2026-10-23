import os
import glob
from PIL import Image

thumbs_dir = "public/templates/thumbs"
os.makedirs(thumbs_dir, exist_ok=True)

# Process all posters and charts
sources = [
    ("public/templates/posters", "public/templates/posters"),
    ("public/templates/charts", "public/templates/charts")
]

processed_count = 0

for src_dir, dest_dir in sources:
    png_files = glob.glob(os.path.join(src_dir, "template-*.png"))
    for png in png_files:
        tid = os.path.splitext(os.path.basename(png))[0]
        
        im = Image.open(png).convert("RGB")
        
        # 1. Full-size WebP
        full_webp = os.path.join(dest_dir, f"{tid}.webp")
        im.save(full_webp, format="WEBP", quality=85, method=6)
        
        # 2. Thumbnail WebP (max dimension 480px, 8-15KB)
        thumb_im = im.copy()
        thumb_im.thumbnail((480, 480), Image.Resampling.LANCZOS)
        thumb_webp = os.path.join(thumbs_dir, f"{tid}.webp")
        thumb_im.save(thumb_webp, format="WEBP", quality=80, method=6)
        
        processed_count += 1

print(f"Generated WebP full + thumbnails for {processed_count} posters and charts.")
