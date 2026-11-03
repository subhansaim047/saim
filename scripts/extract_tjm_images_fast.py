import os
import re
import json

def extract_fast():
    files_to_scan = ["audit/tjm_home_rendered.html"]
    for root, _, files in os.walk("audit/raw_tjm"):
        for f in files:
            if f.endswith(".html"):
                files_to_scan.append(os.path.join(root, f))

    print(f"Scanning {len(files_to_scan)} files with fast regex...")
    
    # Matches URLs ending with image extensions, optionally with query parameters
    img_pattern = re.compile(r'((?:https?:)?//[^\s"\'<>]+\.(?:jpg|jpeg|png|webp|svg|gif)(?:\?[^\s"\'<>]*)?)', re.IGNORECASE)
    
    all_urls = set()
    for fp in files_to_scan:
        try:
            with open(fp, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            matches = img_pattern.findall(content)
            for m in matches:
                # clean leading/trailing punctuation or backslashes
                url = m.strip().rstrip('\\')
                if url.startswith("//"):
                    url = "https:" + url
                all_urls.add(url)
        except Exception as e:
            pass

    print(f"Total raw image URLs found: {len(all_urls)}")
    
    # Filter for shopify / tjm CDNs and extract master filename
    master_images = {}
    for url in all_urls:
        if not ("thejacketmaker." in url or "cdn.shopify.com" in url):
            continue
        
        # Clean query strings to get base file
        clean_url = url.split("?")[0]
        filename = clean_url.split("/")[-1]
        if not filename or "." not in filename:
            continue
            
        ext = filename.split(".")[-1].lower()
        if ext not in ["jpg", "jpeg", "png", "webp", "svg", "gif"]:
            continue
            
        # Prioritize high-resolution URL
        # If url has query param with width, remove it or upgrade it
        # E.g., if there's _1024x1024 or _300x, we can also record the base
        if filename not in master_images:
            master_images[filename] = url

    print(f"Unique master images to download: {len(master_images)}")
    with open("audit/tjm_all_images.json", "w", encoding="utf-8") as f:
        json.dump(master_images, f, indent=2)
    print("Saved audit/tjm_all_images.json successfully!")

if __name__ == "__main__":
    extract_fast()
