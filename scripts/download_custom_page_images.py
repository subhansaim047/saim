import os
import re
import subprocess
import json

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
IMAGES_DIR = "public/thejacketmaker/images"

# 1. Provide stubs for cart.json, awin, and graphql
os.makedirs("public/apps/awin", exist_ok=True)
with open("public/apps/awin/90071.js", "w", encoding="utf-8") as f:
    f.write("// awin stub\n")

with open("public/cart.json", "w", encoding="utf-8") as f:
    json.dump({"token": "demo_cart", "items": [], "item_count": 0, "total_price": 0}, f)

os.makedirs("public/api/unstable", exist_ok=True)
with open("public/api/unstable/graphql.json", "w", encoding="utf-8") as f:
    json.dump({"data": {}}, f)

os.makedirs("public/api/event", exist_ok=True)
with open("public/api/event/collect", "w", encoding="utf-8") as f:
    f.write("{}")

os.makedirs("public/.well-known/shopify/monorail/unstable", exist_ok=True)
with open("public/.well-known/shopify/monorail/unstable/produce_batch", "w", encoding="utf-8") as f:
    f.write("{}")

# 2. Extract image URLs from custom-leather-jackets.html and ionic product
files_to_check = [
    "audit/raw_tjm/pages/custom-leather-jackets.html",
    "audit/raw_tjm/products/ionic-black-leather-jacket.html"
]

all_urls = set()
for fp in files_to_check:
    if os.path.exists(fp):
        with open(fp, "r", encoding="utf-8", errors="ignore") as f:
            text = f.read()
        for m in re.findall(r'[\"\'\(](https?:)?(//[^\s\"\'\)]+?\.(?:jpg|jpeg|png|webp|svg|gif)[^\s\"\'\)]*?)[\"\'\)]', text):
            u = m[1].strip()
            if u.startswith("//"):
                u = "https:" + u
            if "thejacketmaker" in u or "cdn.shopify.com" in u:
                all_urls.add(u)

print(f"Found {len(all_urls)} images in custom page & product page.")
for u in all_urls:
    raw_fname = u.split("?")[0].split("/")[-1]
    if not raw_fname:
        continue
    dest_path = os.path.join(IMAGES_DIR, raw_fname)
    clean_fname = re.sub(r'_(?:1024x1024|\{width\}x|300x|\d+x\d*)', '', raw_fname)
    clean_dest = os.path.join(IMAGES_DIR, clean_fname)

    if not os.path.exists(dest_path) or os.path.getsize(dest_path) < 100:
        actual_url = u.replace("{width}", "1024")
        subprocess.run(["curl.exe", "-s", "-L", "-A", USER_AGENT, actual_url, "-o", dest_path])
        if os.path.exists(dest_path) and os.path.getsize(dest_path) > 100:
            if not os.path.exists(clean_dest):
                try:
                    import shutil
                    shutil.copyfile(dest_path, clean_dest)
                except Exception:
                    pass

print("Finished downloading custom page & product images!")
