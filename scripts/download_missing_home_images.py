import os
import re
import json
import subprocess

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
IMAGES_DIR = "public/thejacketmaker/images"

# 1. Provide browsing_context_suggestions.json
suggestions = {
    "detected_values": {
        "country": {"name": "Pakistan", "handle": "PK"},
        "currency": {"name": "Pakistani Rupee", "iso_code": "PKR", "symbol": "Rs."}
    }
}
with open("public/browsing_context_suggestions.json", "w", encoding="utf-8") as f:
    json.dump(suggestions, f, indent=2)
print("Wrote public/browsing_context_suggestions.json")

# 2. Extract all image URLs from tjm_home_rendered.html
with open("audit/tjm_home_rendered.html", "r", encoding="utf-8", errors="ignore") as f:
    html = f.read()

# Find all image links
matches = re.findall(r'[\"\'\(](https?:)?(//[^\s\"\'\)]+?\.(?:jpg|jpeg|png|webp|svg|gif)[^\s\"\'\)]*?)[\"\'\)]', html)
home_img_urls = set()
for m in matches:
    url = m[1].strip()
    if url.startswith("//"):
        url = "https:" + url
    if "thejacketmaker" in url or "cdn.shopify.com" in url:
        home_img_urls.add(url)

print(f"Found {len(home_img_urls)} unique image URLs on homepage.")

def download_img(url):
    raw_fname = url.split("?")[0].split("/")[-1]
    if not raw_fname:
        return
        
    dest_path = os.path.join(IMAGES_DIR, raw_fname)
    
    # Clean fname (e.g. without _1024x1024 or _{width}x)
    clean_fname = re.sub(r'_(?:1024x1024|\{width\}x|300x|\d+x\d*)', '', raw_fname)
    clean_dest = os.path.join(IMAGES_DIR, clean_fname)

    if not os.path.exists(dest_path) or os.path.getsize(dest_path) < 100:
        actual_url = url.replace("{width}", "1024")
        cmd = ["curl.exe", "-s", "-L", "-A", USER_AGENT, actual_url, "-o", dest_path]
        subprocess.run(cmd)

    # Also ensure clean_dest exists
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 100:
        if not os.path.exists(clean_dest) or os.path.getsize(clean_dest) < 100:
            try:
                import shutil
                shutil.copyfile(dest_path, clean_dest)
            except Exception:
                pass

print("Downloading homepage images...")
for u in home_img_urls:
    download_img(u)

print("Finished downloading homepage images!")
