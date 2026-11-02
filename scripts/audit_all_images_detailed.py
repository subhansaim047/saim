import os, glob, re

def audit_images():
    files = glob.glob('src/**/*.tsx', recursive=True) + glob.glob('app/**/*.tsx', recursive=True)
    img_tags = []
    for f in files:
        with open(f, 'r', encoding='utf-8') as fp:
            content = fp.read()
        for m in re.finditer(r'<img([\s\S]*?)>', content):
            attrs = m.group(1)
            src_m = re.search(r'src=["\']([^"\']+)["\']', attrs) or re.search(r'src=\{([^}]+)\}', attrs)
            alt_m = re.search(r'alt=["\']([^"\']*)["\']', attrs) or re.search(r'alt=\{([^}]+)\}', attrs)
            width_m = re.search(r'width=["\']?([0-9%]+)["\']?', attrs) or re.search(r'width=\{([0-9]+)\}', attrs)
            height_m = re.search(r'height=["\']?([0-9%]+)["\']?', attrs) or re.search(r'height=\{([0-9]+)\}', attrs)
            loading_m = re.search(r'loading=["\']([^"\']+)["\']', attrs)
            
            src = src_m.group(1).strip() if src_m else 'DYNAMIC'
            alt = alt_m.group(1).strip() if alt_m else 'MISSING'
            w = width_m.group(1) if width_m else 'NONE'
            h = height_m.group(1) if height_m else 'NONE'
            l = loading_m.group(1) if loading_m else 'NONE'
            
            line_no = content[:m.start()].count('\n') + 1
            img_tags.append((f, line_no, src, alt, w, h, l))
    
    print(f"Total multiline <img> tags: {len(img_tags)}")
    for f, line, src, alt, w, h, l in img_tags:
        print(f"{f}:{line} -> src={src} | alt='{alt}' | {w}x{h} | loading={l}")

if __name__ == '__main__':
    audit_images()
