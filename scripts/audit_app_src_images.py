import os
import re

img_re = re.compile(r'<(?:img|Image)\s+([^>]*?)/?>', re.DOTALL | re.IGNORECASE)
alt_re = re.compile(r'alt=\{?([\"\'])(.*?)\1\}?', re.DOTALL)
src_re = re.compile(r'src=\{?([\"\']?)([^\"\'}\s]+)\1\}?', re.DOTALL)

for folder in ['app', 'src']:
    for root, dirs, files in os.walk(folder):
        for f in files:
            if f.endswith(('.tsx', '.jsx', '.ts', '.js')):
                p = os.path.join(root, f).replace('\\', '/')
                with open(p, 'r', encoding='utf-8') as fp:
                    content = fp.read()
                matches = img_re.findall(content)
                for tag in matches:
                    alt_m = alt_re.search(tag)
                    src_m = src_re.search(tag)
                    alt_text = alt_m.group(2) if alt_m else 'NO_ALT'
                    src_text = src_m.group(2) if src_m else 'NO_SRC'
                    if alt_text in ['NO_ALT', '', 'logo', 'image', 'banner'] or len(alt_text) < 15:
                        print(f"{p}: alt='{alt_text}' src='{src_text}'")
