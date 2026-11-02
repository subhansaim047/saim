from bs4 import BeautifulSoup
import re

with open('public/hotbite/index.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

count = 0
for t in soup.find_all(string=re.compile(r'\bflavor(s)?\b', re.I)):
    if t.parent.name not in ['script', 'style']:
        new_text = re.sub(r'\bFlavor\b', 'Flavour', str(t))
        new_text = re.sub(r'\bflavor\b', 'flavour', new_text)
        new_text = re.sub(r'\bFlavors\b', 'Flavours', new_text)
        new_text = re.sub(r'\bflavors\b', 'flavours', new_text)
        t.replace_with(new_text)
        count += 1

with open('public/hotbite/index.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))

print(f'Successfully updated {count} visible text nodes in public/hotbite/index.html')
