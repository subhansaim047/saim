import os
from PIL import Image

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
templates_dir = os.path.join(base_dir, "public", "templates")

compressed_count = 0
bytes_saved = 0

for root, _, files in os.walk(templates_dir):
    # Don't touch svg or thumbs
    if "svg" in root or "thumbs" in root:
        continue
    for f in files:
        if f.endswith(".webp"):
            fpath = os.path.join(root, f)
            sz = os.path.getsize(fpath)
            if sz > 180 * 1024:
                try:
                    with Image.open(fpath) as im:
                        orig_w, orig_h = im.size
                        # Max dimension 1800 is plenty for print and screen
                        if orig_w > 1800 or orig_h > 1800:
                            ratio = min(1800 / orig_w, 1800 / orig_h)
                            new_size = (int(orig_w * ratio), int(orig_h * ratio))
                            im = im.resize(new_size, Image.Resampling.LANCZOS)
                        im.save(fpath, "WEBP", quality=80, method=6)
                    new_sz = os.path.getsize(fpath)
                    saved = sz - new_sz
                    if saved > 0:
                        bytes_saved += saved
                        compressed_count += 1
                        print(f"Compressed {f}: {sz/1024:.1f} KB -> {new_sz/1024:.1f} KB (saved {saved/1024:.1f} KB)")
                except Exception as e:
                    print(f"Error on {f}: {e}")

print(f"\nTotal heavy template posters compressed: {compressed_count}")
print(f"Total bandwidth saved: {bytes_saved/1024:.1f} KB")
