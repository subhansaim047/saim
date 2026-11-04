with open('public/thejacketmaker/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')

items = soup.select('.navigation__item')
print(f"Total navigation items: {len(items)}")

for it in items:
    link = it.find('a', class_='navigation__link')
    if link and ('MEN' in link.get_text() or 'WOMEN' in link.get_text()):
        print("PARENT LINK:", link.get_text().strip(), "HREF:", link.get('href'))
        sublinks = it.find_all('a')
        print(f"  Sublinks count: {len(sublinks)}")
        for sa in sublinks[:15]:
            print(f"    '{sa.get_text().strip()}' -> '{sa.get('href')}'")
        print('='*50)
