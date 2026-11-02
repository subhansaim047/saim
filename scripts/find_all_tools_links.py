import glob
import re

found = set()
for ext in ['tsx', 'ts', 'jsx', 'js']:
    for f in glob.glob(f'app/**/*.{ext}', recursive=True) + glob.glob(f'src/**/*.{ext}', recursive=True):
        with open(f, 'r', encoding='utf-8') as fl:
            c = fl.read()
        m = re.findall(r'href=["\'](/tools/[^"\']+)["\']', c)
        for link in m:
            found.add((f, link))

for f, link in sorted(found):
    print(f"{f} -> {link}")
