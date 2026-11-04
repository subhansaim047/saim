import glob

script_tag = '<script defer src="/thejacketmaker/js/gallery-controller.js"></script>'

files = ['public/thejacketmaker/index.html']
files.extend(glob.glob('public/thejacketmaker/products/**/*.html', recursive=True))
files.extend(glob.glob('public/thejacketmaker/collections/**/*.html', recursive=True))

updated = 0
for f in files:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if script_tag not in c and '</body>' in c:
        c = c.replace('</body>', script_tag + '\n</body>')
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(c)
        updated += 1

print(f"Targeted update completed: {updated} files updated out of {len(files)} total files.")
