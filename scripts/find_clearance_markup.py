with open('public/thejacketmaker/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
m = re.search(r'<div class="ai-media-column-akznqrwvkzhirl2yzvaigenblocked980c2h3mqjh">.*?</div>\s*</div>\s*</div>', html, re.DOTALL)
if m:
    print(m.group())
