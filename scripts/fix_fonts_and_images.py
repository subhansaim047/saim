import os
import re

FONTS_DIR = "public/thejacketmaker/fonts"
IMAGES_DIR = "public/thejacketmaker/images"
HTML_DIR = "public/thejacketmaker"

# 1. Map all available images on disk
available_images = os.listdir(IMAGES_DIR)
print(f"Total available images on disk: {len(available_images)}")

# Build lookup by base stem (lowercase, stripped of dimensions)
def clean_stem(filename):
    name, ext = os.path.splitext(filename)
    # strip suffixes like _grande, _medium, _small, _1024x1024, _120x, _300x, etc.
    s = re.sub(r'_(?:grande|medium|small|thumb|\d+x\d*|\{width\}x)', '', name, flags=re.IGNORECASE)
    return s.lower()

stem_to_file = {}
for img in available_images:
    stem = clean_stem(img)
    if stem not in stem_to_file:
        stem_to_file[stem] = img
    else:
        # prefer higher quality/larger file
        curr_path = os.path.join(IMAGES_DIR, stem_to_file[stem])
        new_path = os.path.join(IMAGES_DIR, img)
        if os.path.getsize(new_path) > os.path.getsize(curr_path):
            stem_to_file[stem] = img

def resolve_filename(requested_url_or_name):
    # Get base filename
    raw = requested_url_or_name.split('?')[0].strip()
    fname = raw.split('/')[-1]
    if not fname:
        return None
    
    # Direct match
    if fname in available_images:
        return fname
        
    # Match via clean stem
    stem = clean_stem(fname)
    if stem in stem_to_file:
        return stem_to_file[stem]
        
    return None

def process_file(file_path):
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    # 1. Replace all font references to local fonts
    content = re.sub(r'//www\.thejacketmaker\.[a-z]+/cdn/fonts/roboto/roboto_n4[^\'\"\)]+', '/thejacketmaker/fonts/roboto_n4.woff2', content)
    content = re.sub(r'//www\.thejacketmaker\.[a-z]+/cdn/fonts/roboto/roboto_n5[^\'\"\)]+', '/thejacketmaker/fonts/roboto_n5.woff2', content)
    content = re.sub(r'//www\.thejacketmaker\.[a-z]+/cdn/fonts/roboto/roboto_n6[^\'\"\)]+', '/thejacketmaker/fonts/roboto_n6.woff2', content)
    content = re.sub(r'//www\.thejacketmaker\.[a-z]+/cdn/fonts/roboto/roboto_n7[^\'\"\)]+', '/thejacketmaker/fonts/roboto_n7.woff2', content)
    content = re.sub(r'//www\.thejacketmaker\.[a-z]+/cdn/fonts/roboto/roboto_i4[^\'\"\)]+', '/thejacketmaker/fonts/roboto_i4.woff2', content)
    content = re.sub(r'//www\.thejacketmaker\.[a-z]+/cdn/fonts/roboto/roboto_i7[^\'\"\)]+', '/thejacketmaker/fonts/roboto_i7.woff2', content)
    content = re.sub(r'https?://www\.thejacketmaker\.[a-z]+/cdn/fonts/roboto/[^\'\"\)]+', '/thejacketmaker/fonts/roboto_n4.woff2', content)
    content = re.sub(r'//www\.thejacketmaker\.[a-z]+/cdn/fonts/[^\'\"\)]+', '/thejacketmaker/fonts/roboto_n4.woff2', content)

    # 2. Remove awin, shop.app, and stray tracker scripts
    content = re.sub(r'<script[^>]*src=[\"\'][^\"\']*(?:awin|lantern|shop\.app)[^\"\']*[\"\'][^>]*>\s*</script>', '', content)
    content = re.sub(r'<script[^>]*src=[\"\']/apps/[^\"\']*[\"\'][^>]*>\s*</script>', '', content)

    # 3. Fix broken image paths pointing to /thejacketmaker/images/
    def replace_image_path(match):
        full_tag = match.group(0)
        attr = match.group(1)
        path = match.group(2)
        
        # Check if file exists
        fname = path.split('/')[-1].split('?')[0]
        if fname in available_images:
            return full_tag # already good
            
        resolved = resolve_filename(fname)
        if resolved:
            return f'{attr}="/thejacketmaker/images/{resolved}"'
        else:
            # Fallback to general high quality jacket placeholder if completely missing
            fallback = "Men_s_Legacy_Black_Leather_Biker_Jacket_1.jpg"
            if fallback in available_images:
                return f'{attr}="/thejacketmaker/images/{fallback}"'
            return full_tag

    content = re.sub(r'(src|data-src)=["\'](/thejacketmaker/images/[^"\']+)["\']', replace_image_path, content)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

def main():
    count = 0
    for root, _, files in os.walk(HTML_DIR):
        for f in files:
            if f == "index.html":
                fp = os.path.join(root, f)
                process_file(fp)
                count += 1
    print(f"Successfully processed {count} HTML files for local fonts and fuzzy image resolution!")

if __name__ == "__main__":
    main()
