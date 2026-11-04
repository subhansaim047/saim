with open('public/thejacketmaker/collections/mens-leather-jackets/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    h1 = f.read()

import re
m = re.findall(r'class="[^"]*title[^"]*"[^>]*>([^<]+)<', h1)
print(m[:10])
