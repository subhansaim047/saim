with open('public/thejacketmaker/products/don-long-black-leather-coat/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
m = re.search(r'<video[^>]*>.*?</video>', html, re.DOTALL | re.IGNORECASE)
if m:
    print("MATCH FULL:")
    print(m.group())
else:
    print("NO VIDEO TAG FOUND")
