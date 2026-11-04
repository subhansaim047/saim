with open('public/thejacketmaker/collections/mens-leather-jackets/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
idx = html.find("MEN'S COLLECTION")
if idx != -1:
    print(html[idx:idx+1500])
else:
    print("MEN'S COLLECTION not found")
