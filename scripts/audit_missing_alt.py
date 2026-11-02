import os
import re

img_tag_regex = re.compile(r'<img\b([^>]*?)>', re.IGNORECASE | re.DOTALL)
alt_regex = re.compile(r'\balt\s*=\s*(?:"([^"]*)"|\'([^\']*)\'|\{([^}]+)\})', re.IGNORECASE)

issues = []
empty_alts = []

scan_dirs = ['app', 'src']
for sdir in scan_dirs:
    for root, dirs, files in os.walk(sdir):
        if any(ignored in root for ignored in ['node_modules', '.next', 'dist']):
            continue
        for file in files:
            if file.endswith(('.tsx', '.jsx', '.ts', '.js')):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                except Exception as e:
                    continue
                
                for m in img_tag_regex.finditer(content):
                    tag = m.group(0)
                    attrs = m.group(1)
                    match_alt = alt_regex.search(attrs)
                    line_num = content[:m.start()].count('\n') + 1
                    
                    if not match_alt:
                        issues.append((path, line_num, tag.replace('\n', ' ')))
                    else:
                        val1, val2, val3 = match_alt.groups()
                        alt_val = val1 or val2 or val3 or ''
                        if not alt_val.strip() or alt_val.strip() in ['""', "''"]:
                            empty_alts.append((path, line_num, tag.replace('\n', ' ')))

print(f"=== IN NEXT.JS APP & SRC: MISSING ALT ATTRIBUTE ({len(issues)}) ===")
for p, l, t in issues:
    print(f"{p}:{l} -> {t[:120]}")

print(f"\n=== IN NEXT.JS APP & SRC: EMPTY ALT ATTRIBUTE ({len(empty_alts)}) ===")
for p, l, t in empty_alts:
    print(f"{p}:{l} -> {t[:120]}")
