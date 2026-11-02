import os
import sys
import glob
import re
from collections import defaultdict
from bs4 import BeautifulSoup
from PIL import Image

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
public_dir = os.path.join(base_dir, "public")
app_html_dir = os.path.join(base_dir, ".next/server/app")

# 1. Inspect images rendered across core public pages vs demo static sites
core_routes = [
    "/", "/about", "/contact", "/services", "/services/takeaway-web-design",
    "/nextjs-developer-uk", "/case-studies", "/blogs", "/tools",
    "/tools/ppds-label-generator", "/demos"
]

all_html = glob.glob(os.path.join(app_html_dir, "**/*.html"), recursive=True)

core_images = defaultdict(lambda: {"pages": set(), "alts": set(), "disk_path": None, "size_bytes": 0, "dimensions": None, "format": None, "loading": set()})
template_images = defaultdict(lambda: {"pages": set(), "alts": set(), "disk_path": None, "size_bytes": 0, "dimensions": None, "format": None, "loading": set()})
blog_images = defaultdict(lambda: {"pages": set(), "alts": set(), "disk_path": None, "size_bytes": 0, "dimensions": None, "format": None, "loading": set()})

for fpath in all_html:
    rel = os.path.relpath(fpath, app_html_dir).replace("\\", "/")
    if rel == "index.html":
        route = "/"
    elif rel.endswith("/index.html"):
        route = "/" + rel[:-11]
    elif rel.endswith(".html"):
        route = "/" + rel[:-5]
    else:
        route = "/" + rel

    with open(fpath, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")

    for img in soup.find_all("img"):
        src = img.get("src", "")
        alt = img.get("alt", "")
        loading = img.get("loading", "eager")
        
        if not src or not src.startswith("/"):
            continue

        disk_path = os.path.join(public_dir, src.lstrip("/"))
        exists = os.path.exists(disk_path)
        size_bytes = os.path.getsize(disk_path) if exists else 0
        
        dims = None
        fmt = None
        if exists:
            try:
                with Image.open(disk_path) as im:
                    dims = im.size
                    fmt = im.format
            except Exception:
                pass

        bucket = core_images if route in core_routes else (blog_images if route.startswith("/blog") else template_images)
        entry = bucket[src]
        entry["pages"].add(route)
        if alt:
            entry["alts"].add(alt)
        entry["disk_path"] = disk_path
        entry["size_bytes"] = size_bytes
        entry["dimensions"] = dims
        entry["format"] = fmt
        entry["loading"].add(loading)

print("=== IMAGE USAGE SUMMARY ===")
print(f"Unique images rendered in Core Pages: {len(core_images)}")
print(f"Unique images rendered in Blog Pages: {len(blog_images)}")
print(f"Unique images rendered in Template Pages: {len(template_images)}")

# Check large images (> 200 KB) in core pages
large_core = {src: data for src, data in core_images.items() if data["size_bytes"] > 200 * 1024}
print(f"\nLarge images (> 200 KB) in Core Pages: {len(large_core)}")
for src, data in sorted(large_core.items(), key=lambda x: -x[1]["size_bytes"]):
    print(f"  {src}: {data['size_bytes']/1024:.1f} KB | {data['dimensions']} | {data['format']} | alts: {list(data['alts'])}")

# Check heavy images in templates
large_templates = {src: data for src, data in template_images.items() if data["size_bytes"] > 200 * 1024}
print(f"\nLarge images (> 200 KB) in Template Pages: {len(large_templates)}")
for src, data in sorted(large_templates.items(), key=lambda x: -x[1]["size_bytes"])[:10]:
    print(f"  {src}: {data['size_bytes']/1024:.1f} KB | {data['dimensions']} | {data['format']}")

# Check unoptimized file names (e.g. hashes or generic names)
cryptic_names = []
for src in list(core_images.keys()) + list(template_images.keys()) + list(blog_images.keys()):
    fname = os.path.basename(src)
    if re.search(r'^[0-9a-f]{20,}', fname, re.IGNORECASE) or re.search(r'IMG_\d+', fname) or re.search(r'^\d+_\d+', fname):
        cryptic_names.append((src, fname))

print(f"\nCryptic or hashed filenames detected among rendered images: {len(cryptic_names)}")
for src, fname in cryptic_names[:10]:
    print(f"  {src}")
