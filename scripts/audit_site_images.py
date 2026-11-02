import os
import re
from collections import defaultdict

img_tag_pattern = re.compile(r'<img\s+([^>]*?)/?>', re.IGNORECASE)
alt_pattern = re.compile(r'alt=([\"\'])(.*?)\1', re.IGNORECASE)
src_pattern = re.compile(r'src=([\"\'])(.*?)\1', re.IGNORECASE)

scanned_files = 0
total_imgs = 0
missing_alt = 0
empty_alt = 0
short_or_generic_alt = 0
issues = []

GENERIC_TERMS = {'image', 'img', 'photo', 'icon', 'banner', 'logo', 'thumbnail', 'thumb', 'pic', 'picture'}

EXCLUDE_DIRS = {'node_modules', '.git', '.next', 'audit', 'dist', 'build', '.gemini'}

for root, dirs, files in os.walk('.'):
    dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
    for f in files:
        if f.endswith(('.html', '.tsx', '.jsx')):
            scanned_files += 1
            path = os.path.join(root, f).replace('\\', '/')
            with open(path, 'r', encoding='utf-8', errors='ignore') as fp:
                content = fp.read()
            for m in img_tag_pattern.finditer(content):
                total_imgs += 1
                tag_attrs = m.group(1)
                alt_m = alt_pattern.search(tag_attrs)
                src_m = src_pattern.search(tag_attrs)
                src_val = src_m.group(2) if src_m else 'unknown'
                
                if not alt_m:
                    missing_alt += 1
                    issues.append((path, 'MISSING_ALT', src_val, ''))
                else:
                    alt_val = alt_m.group(2).strip()
                    if not alt_val:
                        empty_alt += 1
                        issues.append((path, 'EMPTY_ALT', src_val, ''))
                    elif len(alt_val) < 6 or alt_val.lower() in GENERIC_TERMS:
                        short_or_generic_alt += 1
                        issues.append((path, 'GENERIC_ALT', src_val, alt_val))

print(f"Scanned {scanned_files} files.")
print(f"Total <img> tags found: {total_imgs}")
print(f"Missing alt: {missing_alt}")
print(f"Empty alt: {empty_alt}")
print(f"Generic / short alt: {short_or_generic_alt}")
print(f"Total issues: {len(issues)}")

by_file = defaultdict(list)
for path, issue_type, src_val, alt_val in issues:
    by_file[path].append((issue_type, src_val, alt_val))

print(f"\nFiles with image issues ({len(by_file)} files):")
for path, file_issues in sorted(by_file.items(), key=lambda x: len(x[1]), reverse=True)[:20]:
    print(f"  {path}: {len(file_issues)} issues")
    for itype, s, a in file_issues[:3]:
        print(f"    - [{itype}] src='{s}' alt='{a}'")
