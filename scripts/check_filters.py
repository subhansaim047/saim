with open('public/thejacketmaker/collections/mens-leather-jackets/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
idx = html.find("Color")
while idx != -1:
    if "custom-filter" in html[idx-100:idx+200] or "filter" in html[idx-100:idx+200]:
        print("FILTER COLOR AT:", idx)
        print(html[idx-100:idx+800])
        break
    idx = html.find("Color", idx+1)
