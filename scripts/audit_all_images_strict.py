import os
import re

img_regex = re.compile(r'<(?:img|Image)\b([^>]*?)>', re.IGNORECASE | re.DOTALL)
alt_regex = re.compile(r'\balt\s*=\s*(?:"([^"]*)"|\'([^\']*)\'|\{([^}]+)\})', re.IGNORECASE)

issues = []
total = 0

for folder in ['app', 'src']:
    for root, dirs, files in os.walk(folder):
        if any(ignored in root for ignored in ['node_modules', '.next', 'dist']):
            continue
        for f in files:
            if f.endswith(('.tsx', '.jsx', '.ts', '.js')):
                p = os.path.join(root, f)
                with open(p, 'r', encoding='utf-8') as fp:
                    content = fp.read()
                
                for m in img_regex.finditer(content):
                    total += 1
                    attrs = m.group(1)
                    alt_m = alt_regex.search(attrs)
                    line_num = content[:m.start()].count('\n') + 1
                    if not alt_m:
                        issues.append((p, line_num, 'MISSING_ALT', m.group(0)[:80]))
                    else:
                        g1, g2, g3 = alt_m.groups()
                        val = (g1 or g2 or g3 or '').strip()
                        if not val or val in ['""', "''"]:
                            issues.append((p, line_num, 'EMPTY_ALT', m.group(0)[:80]))

print(f"Total img/Image tags scanned in app/ and src/: {total}")
print(f"Issues found: {len(issues)}")
for p, l, t, s in issues:
    print(f"[{t}] {p}:{l} -> {s}")
