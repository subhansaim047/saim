import os

script_tag = '<script defer src="/thejacketmaker/js/gallery-controller.js"></script>'

target_dirs = [
    'public/thejacketmaker/products',
    'public/thejacketmaker/collections',
    'public/thejacketmaker'
]

updated = 0

for tdir in target_dirs:
    for root, dirs, files in os.walk(tdir):
        for f in files:
            if f.endswith('.html'):
                filepath = os.path.join(root, f)
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as fp:
                    content = fp.read()
                
                if script_tag not in content and '</body>' in content:
                    content = content.replace('</body>', script_tag + '\n</body>')
                    with open(filepath, 'w', encoding='utf-8') as fp:
                        fp.write(content)
                    updated += 1

print(f"Injected gallery-controller.js into {updated} HTML files.")
