with open('public/thejacketmaker/products/ionic-black-leather-jacket/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
matches = [m.start() for m in re.finditer(r'category|categories|collection', html, re.IGNORECASE)]
print(f"Total matches in ionic: {len(matches)}")
for idx in matches[:10]:
    print(html[max(0, idx-50):min(len(html), idx+100)].replace('\n', ' '))
    print('---')
