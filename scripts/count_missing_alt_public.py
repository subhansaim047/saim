import os
import re
from collections import defaultdict

img_tag_regex = re.compile(r'<img\b([^>]*?)>', re.IGNORECASE | re.DOTALL)
alt_regex = re.compile(r'\balt\s*=\s*(?:"([^"]*)"|\'([^\']*)\'|\{([^}]+)\})', re.IGNORECASE)

missing_by_dir = defaultdict(int)

for root, dirs, files in os.walk('public'):
    for file in files:
        if file.endswith(('.html', '.htm')):
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
            except Exception:
                continue
            
            for m in img_tag_regex.finditer(content):
                attrs = m.group(1)
                match_alt = alt_regex.search(attrs)
                if not match_alt:
                    # Top folder in public
                    rel = os.path.relpath(path, 'public')
                    top_folder = rel.split(os.sep)[0]
                    missing_by_dir[top_folder] += 1

for folder, count in sorted(missing_by_dir.items(), key=lambda x: -x[1]):
    print(f"public/{folder}: {count} images without alt")
