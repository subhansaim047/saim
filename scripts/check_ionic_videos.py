with open('public/thejacketmaker/products/ionic-black-leather-jacket/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
matches = [m.start() for m in re.finditer(r'<video', html)]
print(f"Total video tags in ionic: {len(matches)}")
for idx in matches:
    print(html[idx:idx+800])
    print('---')
