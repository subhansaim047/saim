import time
import os
import json

t0 = time.time()
files_to_scan = ["audit/tjm_home_rendered.html"]
for root, _, files in os.walk("audit/raw_tjm"):
    for f in files:
        if f.endswith(".html"):
            files_to_scan.append(os.path.join(root, f))

print(f"Scanning {len(files_to_scan)} files...", flush=True)

image_urls = set()
valid_exts = (".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif")

for fp in files_to_scan:
    with open(fp, "r", encoding="utf-8", errors="ignore") as f:
        text = f.read()
    
    # Fast split scanning: find all occurrences of '//' or 'https://'
    # without any catastrophic regex
    for part in text.split('"'):
        if ("cdn/shop/" in part or "cdn.shopify.com" in part) and any(ext in part.lower() for ext in valid_exts):
            clean = part.split('?')[0].strip()
            if clean.startswith("//"):
                clean = "https:" + clean
            image_urls.add(clean)

    for part in text.split("'"):
        if ("cdn/shop/" in part or "cdn.shopify.com" in part) and any(ext in part.lower() for ext in valid_exts):
            clean = part.split('?')[0].strip()
            if clean.startswith("//"):
                clean = "https:" + clean
            image_urls.add(clean)

print(f"Extracted {len(image_urls)} unique image URLs in {time.time() - t0:.2f}s!", flush=True)

with open("audit/tjm_all_images.json", "w", encoding="utf-8") as f:
    json.dump(sorted(list(image_urls)), f, indent=2)

print("Saved audit/tjm_all_images.json", flush=True)
