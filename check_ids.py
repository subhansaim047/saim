import re

with open('public/hotbite/index.html', 'r', encoding='utf-8') as f:
    c = f.read()

ids = ['Gallery', 'Order', 'Featured', 'Testimonials', 'About', 'Menu', 'Contact']
for target in ids:
    found = bool(re.search(r'id=["\']' + target + r'["\']', c))
    print(f'{target}: {found}')
