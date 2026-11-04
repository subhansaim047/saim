with open('public/thejacketmaker/collections/mens-leather-jackets/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
print("Has 'video':", len(re.findall(r'video', html, re.IGNORECASE)))
for m in re.finditer(r'[^\n]*video[^\n]*', html, re.IGNORECASE):
    line = m.group().strip()
    if len(line) < 200:
        print(line)
