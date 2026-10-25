import os
from PIL import Image

brain_dir = r"C:\Users\subhan\.gemini\antigravity\brain\4f746af2-8096-428b-a0e5-b7e16c0031b4"
samples = ["template-12", "template-47", "template-77", "template-138", "template-145"]

for tid in samples:
    src = f"scripts/sample_{tid}.png"
    im = Image.open(src)
    w, h = im.size
    # Crop bottom 15%
    crop_h = int(h * 0.15)
    bottom = im.crop((0, h - crop_h, w, h))
    dest = os.path.join(brain_dir, f"chart_footer_{tid}.png")
    bottom.save(dest)
    print(f"Saved {dest} ({w}x{crop_h})")
