import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

app_dir = 'app'
pages = []
layouts = []

for root, dirs, files in os.walk(app_dir):
    for f in files:
        if f == 'page.tsx' or f == 'page.jsx' or f == 'page.js':
            rel = os.path.relpath(os.path.join(root, f), app_dir)
            pages.append(rel)
        elif f == 'layout.tsx' or f == 'layout.jsx' or f == 'layout.js':
            rel = os.path.relpath(os.path.join(root, f), app_dir)
            layouts.append(rel)

print(f"Total pages in app: {len(pages)}")
for p in sorted(pages):
    print(" -", p)

print(f"\nTotal layouts in app: {len(layouts)}")
for l in sorted(layouts):
    print(" -", l)
