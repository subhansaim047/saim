with open('public/thejacketmaker/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
matches = [m.start() for m in re.finditer(r'MEN', html)]
print(f"Total occurrences of MEN: {len(matches)}")
for idx in matches[:10]:
    print(html[idx-100:idx+200])
    print('='*50)
