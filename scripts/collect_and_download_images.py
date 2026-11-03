import os
import re
import json
import subprocess
import urllib.parse
from concurrent.futures import ThreadPoolExecutor

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
LOCAL_IMG_DIR = "public/thejacketmaker/images"
MAPPING_FILE = "audit/tjm_image_mapping.json"

os.makedirs(LOCAL_IMG_DIR, exist_ok=True)

def normalize_image_url(raw_url):
    url = raw_url.strip()
    if not url or url.startswith("data:"):
        return None, None
    if url.startswith("//"):
        url = "https:" + url
    elif url.startswith("/"):
        url = "https://www.thejacketmaker.pk" + url
        
    if not ("thejacketmaker." in url or "cdn.shopify.com" in url):
        return None, None
        
    # Split query parameters
    base_url = url.split("?")[0]
    
    # Handle {width}x placeholder
    download_url = url.replace("{width}", "1024")
    
    # Extract filename
    raw_filename = base_url.split("/")[-1]
    if not raw_filename or "." not in raw_filename:
        return None, None
        
    ext = os.path.splitext(raw_filename)[1].lower()
    if ext not in [".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"]:
        return None, None
        
    # Clean the filename: remove _{width}x or dimensions if you want clean name
    clean_filename = re.sub(r'_(?:\{width\}|\d+)x(?:\d+)?', '', raw_filename)
    if not clean_filename.endswith(ext):
        clean_filename += ext
        
    return download_url, clean_filename

def collect_images():
    files_to_scan = ["audit/tjm_home_rendered.html"]
    for root, _, files in os.walk("audit/raw_tjm"):
        for f in files:
            if f.endswith(".html"):
                files_to_scan.append(os.path.join(root, f))
                
    print(f"Scanning {len(files_to_scan)} files for images...", flush=True)
    
    found_urls = set()
    valid_exts = (".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif")
    
    for fp in files_to_scan:
        try:
            with open(fp, "r", encoding="utf-8", errors="ignore") as f:
                text = f.read()
                
            for quote in ['"', "'"]:
                for part in text.split(quote):
                    if ("cdn/shop/" in part or "cdn.shopify.com" in part) and any(ext in part.lower() for ext in valid_exts):
                        found_urls.add(part.strip())
                        
            # Also catch background-image: url(...)
            for m in re.findall(r'url\([\"\']?([^\"\'\)]+)[\"\']?\)', text):
                if ("cdn/shop/" in m or "cdn.shopify.com" in m) and any(ext in m.lower() for ext in valid_exts):
                    found_urls.add(m.strip())
        except Exception:
            pass

    print(f"Total candidate URLs collected: {len(found_urls)}", flush=True)
    
    download_tasks = {} # clean_filename -> (download_url, [original_raw_urls])
    mapping = {} # raw_url -> local_relative_path
    
    for raw in found_urls:
        dl_url, clean_name = normalize_image_url(raw)
        if dl_url and clean_name:
            local_rel = f"/thejacketmaker/images/{clean_name}"
            mapping[raw] = local_rel
            
            # Also map the base without query
            raw_base = raw.split("?")[0]
            mapping[raw_base] = local_rel
            
            # Also map if starts with //
            if raw.startswith("//"):
                mapping["https:" + raw] = local_rel
                mapping["http:" + raw] = local_rel
            elif raw.startswith("https:"):
                mapping[raw.replace("https:", "")] = local_rel
                
            if clean_name not in download_tasks:
                download_tasks[clean_name] = dl_url
                
    print(f"Unique files to download: {len(download_tasks)}", flush=True)
    with open(MAPPING_FILE, "w", encoding="utf-8") as f:
        json.dump(mapping, f, indent=2)
        
    return download_tasks

def download_single_image(task):
    filename, url = task
    dest_path = os.path.join(LOCAL_IMG_DIR, filename)
    
    # Check if already downloaded and valid size
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 100:
        return filename, os.path.getsize(dest_path), True
        
    cmd = [
        "curl.exe", "-s", "-L",
        "-A", USER_AGENT,
        url,
        "-o", dest_path
    ]
    try:
        subprocess.run(cmd, check=True)
        size = os.path.getsize(dest_path) if os.path.exists(dest_path) else 0
        if size < 50: # Empty or error page
            # Try fallback URL without width
            fallback_url = url.split("?")[0]
            fallback_url = re.sub(r'_(?:\{width\}|\d+)x(?:\d+)?', '', fallback_url)
            subprocess.run(["curl.exe", "-s", "-L", "-A", USER_AGENT, fallback_url, "-o", dest_path], check=True)
            size = os.path.getsize(dest_path) if os.path.exists(dest_path) else 0
        return filename, size, True
    except Exception as e:
        return filename, 0, False

def main():
    download_tasks = collect_images()
    print(f"Beginning concurrent download of {len(download_tasks)} images...", flush=True)
    
    # Use 10 workers for fast network download
    with ThreadPoolExecutor(max_workers=10) as executor:
        results = list(executor.map(download_single_image, download_tasks.items()))
        
    successful = sum(1 for _, sz, ok in results if ok and sz > 100)
    print(f"Downloaded {successful}/{len(download_tasks)} images successfully!", flush=True)

if __name__ == "__main__":
    main()
