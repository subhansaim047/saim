import os
import re
import json
from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qs, urlunparse

def extract_image_urls():
    all_image_urls = set()
    files_to_scan = ["audit/tjm_home_rendered.html"]
    
    raw_dir = "audit/raw_tjm"
    for root, _, files in os.walk(raw_dir):
        for f in files:
            if f.endswith(".html"):
                files_to_scan.append(os.path.join(root, f))
                
    print(f"Scanning {len(files_to_scan)} HTML files for images...")
    
    for file_path in files_to_scan:
        try:
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
        except Exception as e:
            continue
            
        soup = BeautifulSoup(content, "html.parser")
        
        # 1. <img> tags
        for img in soup.find_all("img"):
            for attr in ["src", "data-src", "data-original", "data-srcset", "srcset"]:
                val = img.get(attr)
                if val:
                    if attr in ["srcset", "data-srcset"]:
                        parts = val.split(",")
                        for p in parts:
                            p_clean = p.strip().split(" ")[0]
                            if p_clean:
                                all_image_urls.add(p_clean)
                    else:
                        all_image_urls.add(val.strip())
                        
        # 2. <source> tags
        for src_tag in soup.find_all("source"):
            val = src_tag.get("srcset") or src_tag.get("data-srcset")
            if val:
                for p in val.split(","):
                    p_clean = p.strip().split(" ")[0]
                    if p_clean:
                        all_image_urls.add(p_clean)
                        
        # 3. CSS background-image
        css_bgs = re.findall(r'url\([\"\']?([^\"\'\)]+\.(?:png|jpg|jpeg|webp|svg|gif)[^\"\'\)]*?)[\"\']?\)', content, re.IGNORECASE)
        for bg in css_bgs:
            all_image_urls.add(bg.strip())

    print(f"Raw unique image candidates found: {len(all_image_urls)}")
    
    # Normalize & filter image URLs
    valid_images = {}
    for raw_url in all_image_urls:
        url = raw_url.strip()
        if not url or url.startswith("data:"):
            continue
        if url.startswith("//"):
            url = "https:" + url
        elif url.startswith("/"):
            url = "https://www.thejacketmaker.pk" + url
            
        # Parse URL
        parsed = urlparse(url)
        if not (parsed.netloc.endswith("thejacketmaker.pk") or parsed.netloc.endswith("thejacketmaker.com") or parsed.netloc.endswith("shopify.com") or parsed.netloc.endswith("cdn.shopify.com")):
            continue
            
        # Extract filename
        path = parsed.path
        filename = os.path.basename(path)
        if not filename or "." not in filename:
            continue
            
        # Ensure it is an image extension
        ext = os.path.splitext(filename)[1].lower()
        if ext not in [".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"]:
            continue
            
        # Upgrade resolution: remove small dimensions like _120x, _300x, _thumb, etc. to get crisp original/4K images
        # e.g., filename: ..._120x.svg -> keep master
        clean_url = url
        # If url has query params like ?v=... keep them for fetching
        valid_images[clean_url] = filename

    print(f"Valid normalized images: {len(valid_images)}")
    with open("audit/tjm_all_images.json", "w", encoding="utf-8") as f:
        json.dump(list(valid_images.keys()), f, indent=2)
    print("Saved audit/tjm_all_images.json")

if __name__ == "__main__":
    extract_image_urls()
