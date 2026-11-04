import os
import re
import glob
from bs4 import BeautifulSoup

REPO_DIR = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
IMG_DIR = os.path.join(REPO_DIR, "public", "thejacketmaker", "images")

available_files = os.listdir(IMG_DIR)
print(f"Total available images in folder: {len(available_files)}")

# Build comprehensive lookup table
lookup = {}
# Exact filename map
for f in available_files:
    lookup[f.lower()] = f
    # stem map
    stem = os.path.splitext(f)[0]
    lookup[stem.lower()] = f
    # clean stem map (without _1024x1024, _grande, _small, _{width}x)
    clean_stem = re.sub(r'_(?:\{width\}|\d+)x(?:\d+)?', '', stem)
    clean_stem = re.sub(r'_(?:grande|large|medium|small|compact|pico)', '', clean_stem)
    lookup[clean_stem.lower()] = f

def find_local_image(url_or_name):
    if not url_or_name:
        return None
    # strip query string and extract filename
    clean = url_or_name.split('?')[0].strip()
    clean = clean.split('#')[0].strip()
    fname = clean.split('/')[-1]
    
    # 1. exact match
    if fname.lower() in lookup:
        return lookup[fname.lower()]
        
    stem = os.path.splitext(fname)[0]
    if stem.lower() in lookup:
        return lookup[stem.lower()]
        
    # 2. clean stem match
    clean_stem = re.sub(r'_(?:\{width\}|\d+)x(?:\d+)?', '', stem)
    clean_stem = re.sub(r'_(?:grande|large|medium|small|compact|pico)', '', clean_stem)
    if clean_stem.lower() in lookup:
        return lookup[clean_stem.lower()]
        
    # 3. fuzzy search across all available files for stem
    if len(clean_stem) >= 6:
        clean_lower = clean_stem.lower()
        for af in available_files:
            if clean_lower in af.lower():
                return af
                
    return None

html_files = glob.glob(os.path.join(REPO_DIR, "public", "thejacketmaker", "**", "*.html"), recursive=True)
print(f"Total HTML files to process: {len(html_files)}")

total_img_fixed = 0
total_bg_fixed = 0

for hf in html_files:
    with open(hf, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")
    modified = False

    # 1. Process all <img> tags
    for img in soup.find_all("img"):
        src = img.get("src", "")
        dsrc = img.get("data-src", "")
        classes = img.get("class", [])
        
        target_name = None
        if dsrc and ("thejacketmaker" in dsrc or "{width}" in dsrc or not src):
            target_name = find_local_image(dsrc)
        if not target_name and src:
            target_name = find_local_image(src)

        if target_name:
            local_path = f"/thejacketmaker/images/{target_name}"
            if img.get("src") != local_path:
                img["src"] = local_path
                total_img_fixed += 1
                modified = True
            if dsrc and img.get("data-src") != local_path:
                img["data-src"] = local_path
                modified = True
        elif not src and dsrc:
            # Fallback to whatever dsrc was
            local_cand = find_local_image(dsrc)
            if local_cand:
                img["src"] = f"/thejacketmaker/images/{local_cand}"
                total_img_fixed += 1
                modified = True

        # Always add lazyloaded class and ensure no manual blocking
        if "lazyload--manual" in classes:
            classes.remove("lazyload--manual")
            if "lazyloaded" not in classes:
                classes.append("lazyloaded")
            img["class"] = classes
            modified = True
        elif "lazyloaded" not in classes:
            classes.append("lazyloaded")
            img["class"] = classes
            modified = True

    # 2. Process all elements with data-bgset
    for el in soup.find_all(attrs={"data-bgset": True}):
        bgset = el.get("data-bgset", "")
        # Get candidate URLs from bgset
        entries = [e.strip().split()[0] for e in bgset.split(",") if e.strip()]
        # pick highest or last/first valid candidate
        best_match = None
        for cand in reversed(entries):
            matched = find_local_image(cand)
            if matched:
                best_match = matched
                break
        if not best_match and entries:
            best_match = find_local_image(entries[0])

        if best_match:
            bg_url = f"/thejacketmaker/images/{best_match}"
            existing_style = el.get("style", "").rstrip(";")
            # remove any old background-image
            clean_style = re.sub(r'background-image:[^;]+;?', '', existing_style).strip()
            new_style = f"{clean_style}; background-image: url('{bg_url}') !important;" if clean_style else f"background-image: url('{bg_url}') !important;"
            el["style"] = new_style
            el["data-bgset"] = bg_url
            
            # ensure lazyloaded
            el_classes = el.get("class", [])
            if "lazyloaded" not in el_classes:
                el_classes.append("lazyloaded")
                el["class"] = el_classes
            total_bg_fixed += 1
            modified = True

    # 3. Clean any remaining thejacketmaker.pk image URLs in inline styles
    for el in soup.find_all(style=True):
        style = el.get("style", "")
        if "thejacketmaker.pk" in style:
            matches = re.findall(r'url\([\'\"]?(https?:)?//[^\'\"\)]+[\'\"]?\)', style)
            for m in matches:
                # extract inner url
                full_match = re.search(r'//[^\'\"\)]+', style)
                if full_match:
                    raw_u = full_match.group(0)
                    local_img = find_local_image(raw_u)
                    if local_img:
                        style = style.replace(raw_u, f"/thejacketmaker/images/{local_img}")
                        style = re.sub(r'https?://www\.thejacketmaker\.pk', '', style)
                        el["style"] = style
                        modified = True

    if modified:
        with open(hf, "w", encoding="utf-8") as f:
            f.write(str(soup))

print(f"\nProcessing Complete!")
print(f"Total img tags updated with local src: {total_img_fixed}")
print(f"Total data-bgset elements updated with inline background-image: {total_bg_fixed}")
