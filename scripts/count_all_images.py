import os
import sys
import glob
from collections import defaultdict
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
public_dir = os.path.join(base_dir, "public")
app_html_dir = os.path.join(base_dir, ".next/server/app")

# 1. Count image files on disk in public/
img_extensions = ('.png', '.jpg', '.jpeg', '.webp', '.svg', '.ico', '.avif', '.gif')
all_public_files = glob.glob(os.path.join(public_dir, "**/*"), recursive=True)

images_on_disk = []
by_extension = defaultdict(int)
by_directory = defaultdict(int)

for p in all_public_files:
    if os.path.isfile(p):
        ext = os.path.splitext(p)[1].lower()
        if ext in img_extensions:
            images_on_disk.append(p)
            by_extension[ext] += 1
            rel_dir = os.path.relpath(os.path.dirname(p), public_dir)
            top_dir = rel_dir.split(os.sep)[0] if rel_dir != "." else "root"
            by_directory[top_dir] += 1

print("=== IMAGES ON DISK (public/ folder) ===")
print(f"Total image files in public/: {len(images_on_disk)}")

print("\nBreakdown by format:")
for ext, count in sorted(by_extension.items(), key=lambda x: -x[1]):
    print(f"  {ext}: {count} files")

print("\nBreakdown by folder:")
for folder, count in sorted(by_directory.items(), key=lambda x: -x[1]):
    print(f"  {folder}/: {count} images")

# 2. Count image usage in rendered HTML across all pages
all_html = glob.glob(os.path.join(app_html_dir, "**/*.html"), recursive=True)

rendered_img_srcs = set()
missing_alt_images = []
broken_image_references = []

for fpath in all_html:
    with open(fpath, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")
    
    for img in soup.find_all("img"):
        src = img.get("src", "")
        alt = img.get("alt")
        
        if src:
            rendered_img_srcs.add(src)
            # Check if local image exists on disk
            if src.startswith("/"):
                disk_path = os.path.join(public_dir, src.lstrip("/"))
                if not os.path.exists(disk_path):
                    broken_image_references.append((fpath, src))
        
        if alt is None or alt.strip() == "":
            missing_alt_images.append((fpath, src))

print("\n=== IMAGES USED IN WEBSITE HTML ===")
print(f"Unique image sources referenced in HTML: {len(rendered_img_srcs)}")
print(f"Missing alt attributes: {len(missing_alt_images)}")
print(f"Broken image paths (missing on disk): {len(broken_image_references)}")

if broken_image_references:
    for f, src in broken_image_references[:10]:
        print(f"  [BROKEN IMAGE] in {os.path.basename(f)}: {src}")
