import os
import re
from PIL import Image

demos_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\DemosPage.tsx"
public_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\public"

with open(demos_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract demo items: id, title, previewImage
demo_blocks = re.findall(r'id:\s*"([^"]+)",[\s\S]*?title:\s*"([^"]+)",[\s\S]*?previewImage:\s*"([^"]+)"', content)

print(f"Total demos found: {len(demo_blocks)}")
for did, title, pimg in demo_blocks:
    disk_path = os.path.join(public_dir, pimg.lstrip("/"))
    if os.path.exists(disk_path):
        size_kb = os.path.getsize(disk_path) / 1024
        with Image.open(disk_path) as im:
            dims = im.size
            fmt = im.format
        print(f"[{did}] {title}\n  Image: {pimg}\n  Size: {size_kb:.1f} KB | Dims: {dims} | Format: {fmt}")
    else:
        print(f"[{did}] {title}\n  Image: {pimg} -> MISSING ON DISK!")
