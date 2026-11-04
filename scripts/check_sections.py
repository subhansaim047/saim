with open('public/thejacketmaker/collections/mens-leather-jackets/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    h1 = f.read()

import re
matches = [m.start() for m in re.finditer(r'Dean Brown Leather Biker Jacket', h1)]
for idx in matches:
    print("MATCH AT", idx)
    # find parent section or container
    parent_section = h1[max(0, idx-1000):idx]
    last_sec = parent_section.rfind('id="shopify-section-')
    if last_sec != -1:
        print("Parent section:", parent_section[last_sec:last_sec+80])
    else:
        print("No section id found in previous 1000 chars")
