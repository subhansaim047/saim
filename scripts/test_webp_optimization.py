import os
import glob
from PIL import Image

test_files = [
    "public/templates/posters/template-1.png",
    "public/templates/posters/template-64.png",
    "public/templates/charts/template-12.png",
    "public/templates/charts/template-14.png",
    "public/templates/charts/template-22.png"
]

os.makedirs("scripts/test_webp", exist_ok=True)

for f in test_files:
    fname = os.path.basename(f)
    base, _ = os.path.splitext(fname)
    orig_size = os.path.getsize(f) / 1024
    
    im = Image.open(f).convert("RGB")
    
    # 1. Full-size WebP
    full_webp = f"scripts/test_webp/{base}_full.webp"
    im.save(full_webp, format="WEBP", quality=85, method=6)
    full_size = os.path.getsize(full_webp) / 1024
    
    # 2. Thumbnail WebP (max dimension 480px)
    thumb_im = im.copy()
    thumb_im.thumbnail((480, 480), Image.Resampling.LANCZOS)
    thumb_webp = f"scripts/test_webp/{base}_thumb.webp"
    thumb_im.save(thumb_webp, format="WEBP", quality=80, method=6)
    thumb_size = os.path.getsize(thumb_webp) / 1024
    
    print(f"{fname}: Original={orig_size:.1f}KB -> Full WebP={full_size:.1f}KB ({100 - full_size/orig_size*100:.0f}% smaller) -> Thumb={thumb_size:.1f}KB ({100 - thumb_size/orig_size*100:.0f}% smaller)")
