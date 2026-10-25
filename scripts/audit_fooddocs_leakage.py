import os
import re

search_terms = ['fooddocs', 'food-docs', 'food docs']
results = []

target_dirs = ['src', 'app', 'public', 'content']
TEXT_EXTS = {'.ts', '.tsx', '.json', '.js', '.mjs', '.cjs', '.html', '.svg', '.css', '.md', '.txt', '.xml'}

for tdir in target_dirs:
    if not os.path.exists(tdir):
        continue
    for root, dirs, files in os.walk(tdir):
        if 'node_modules' in root or '.next' in root:
            continue
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext not in TEXT_EXTS:
                continue
            fpath = os.path.join(root, f)
            try:
                with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
                    content = fp.read()
                for term in search_terms:
                    matches = list(re.finditer(re.escape(term), content, re.IGNORECASE))
                    if matches:
                        results.append((fpath, term, len(matches)))
            except Exception as e:
                pass

print(f"Total matches found: {len(results)}")
for path, term, count in results:
    print(f"{path}: {count} occurrences of '{term}'")

print("\n--- SNIPPETS ---")
for path, term, count in results:
    with open(path, 'r', encoding='utf-8', errors='ignore') as fp:
        lines = fp.readlines()
    for idx, l in enumerate(lines):
        if re.search(re.escape(term), l, re.IGNORECASE):
            print(f"{path}:{idx+1} -> {l.strip()[:140]}")
