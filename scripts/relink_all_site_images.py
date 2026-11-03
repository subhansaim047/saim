import os
import re
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor

IMAGES_DIR = "public/idreesleather/images"
available_images = set(os.listdir(IMAGES_DIR))
print(f"Loaded {len(available_images)} available local images.")

def clean_filename(url):
    base = url.split("?")[0].split("/")[-1]
    return re.sub(r'[^\w\.-]', '_', base)

def process_file(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            html = f.read()

        soup = BeautifulSoup(html, "html.parser")
        changed = False

        for img in soup.find_all("img"):
            src = img.get("src", "")
            if src and ("shopify.com" in src or "idreesleather.com/cdn" in src):
                cf = clean_filename(src)
                if cf in available_images:
                    img["src"] = f"/idreesleather/images/{cf}"
                    changed = True

            srcset = img.get("srcset", "")
            if srcset and ("shopify.com" in srcset or "idreesleather.com/cdn" in srcset):
                parts = []
                for p in srcset.split(","):
                    p = p.strip()
                    if not p:
                        continue
                    toks = p.split(" ")
                    u = toks[0]
                    w = " " + toks[1] if len(toks) > 1 else ""
                    cf = clean_filename(u)
                    if cf in available_images:
                        parts.append(f"/idreesleather/images/{cf}{w}")
                        changed = True
                    else:
                        parts.append(p)
                img["srcset"] = ", ".join(parts)

        if changed:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(str(soup))
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    target_files = []
    
    # 1. Homepage
    home = "public/idreesleather/index.html"
    if os.path.exists(home):
        target_files.append(home)

    # 2. Collections, pages, policies, products
    base_dir = "public/idreesleather"
    for sub in ["collections", "pages", "policies", "products"]:
        d = os.path.join(base_dir, sub)
        if os.path.exists(d):
            for root, dirs, files in os.walk(d):
                for f in files:
                    if f.endswith(".html"):
                        target_files.append(os.path.join(root, f))

    print(f"Scanning {len(target_files)} HTML pages for local image relinking...")
    updated = 0
    with ThreadPoolExecutor(max_workers=8) as executor:
        results = executor.map(process_file, target_files)
        for r in results:
            if r:
                updated += 1

    print(f"Relink complete! {updated}/{len(target_files)} pages updated with local 4K master images.")

if __name__ == "__main__":
    main()
