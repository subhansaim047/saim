import os
import re
import json

def extract_images():
    files_to_scan = ["audit/tjm_home_rendered.html"]
    for root, _, files in os.walk("audit/raw_tjm"):
        for f in files:
            if f.endswith(".html"):
                files_to_scan.append(os.path.join(root, f))

    print(f"Scanning {len(files_to_scan)} files...", flush=True)

    # Simple patterns: strictly match double-quoted or single-quoted attributes
    attr_re = re.compile(r'(?:src|data-src|data-original|poster)=["\']([^"\']+)["\']', re.IGNORECASE)
    srcset_re = re.compile(r'(?:srcset|data-srcset)=["\']([^"\']+)["\']', re.IGNORECASE)
    css_url_re = re.compile(r'url\(["\']?([^"\'\)\s]+)["\']?\)', re.IGNORECASE)

    raw_candidates = set()

    for fp in files_to_scan:
        try:
            with open(fp, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            for m in attr_re.findall(content):
                raw_candidates.add(m)
            for m in srcset_re.findall(content):
                for part in m.split(","):
                    p = part.strip().split(" ")[0]
                    if p:
                        raw_candidates.add(p)
            for m in css_url_re.findall(content):
                raw_candidates.add(m)
        except Exception:
            pass

    print(f"Extracted {len(raw_candidates)} total attribute URLs.", flush=True)

    master_images = {}
    valid_exts = {".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"}

    for candidate in raw_candidates:
        c = candidate.strip()
        if not c or c.startswith("data:"):
            continue
        if c.startswith("//"):
            c = "https:" + c
        elif c.startswith("/"):
            c = "https://www.thejacketmaker.pk" + c

        # Only process images from the target site or cdn
        if not ("thejacketmaker." in c or "cdn.shopify.com" in c):
            continue

        # Get base path without query string
        base_path = c.split("?")[0]
        filename = base_path.split("/")[-1]
        if not filename:
            continue

        ext = os.path.splitext(filename)[1].lower()
        if ext not in valid_exts:
            continue

        # Prefer high-res version: if there's a 1024x1024 or 2048x or master, store it
        # If we already have this filename, only replace if this candidate looks higher quality
        if filename not in master_images:
            master_images[filename] = c
        else:
            if "1024x" in c or "2048x" in c or "master" in c:
                master_images[filename] = c

    print(f"Identified {len(master_images)} unique images to download.", flush=True)
    with open("audit/tjm_all_images.json", "w", encoding="utf-8") as f:
        json.dump(master_images, f, indent=2)
    print("Saved audit/tjm_all_images.json successfully!", flush=True)

if __name__ == "__main__":
    extract_images()
