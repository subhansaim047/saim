with open('public/thejacketmaker/css/styles.css', 'r', encoding='utf-8', errors='ignore') as f:
    css = f.read()

import re
matches = [m.start() for m in re.finditer(r'rebuy-cart', css)]
print(f"Total rebuy-cart matches in styles.css: {len(matches)}")
for idx in matches[:5]:
    print(css[max(0, idx-50):min(len(css), idx+200)])
    print('---')
