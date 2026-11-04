with open('public/thejacketmaker/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')

items = soup.select('.navigation__tier-1 > .navigation__item')
print(f"Top level nav items: {len(items)}")

for it in items:
    top_link = it.find('a', class_='navigation__link')
    top_text = top_link.get_text().strip() if top_link else 'No Link'
    print(f"\n=== MENU: {top_text} ===")
    sub_links = it.select('.navigation__tier-2 a, .navigation__tier-3 a')
    for sl in sub_links:
        txt = sl.get_text().strip()
        href = sl.get('href')
        if txt and txt != 'Toggle menu':
            print(f"  '{txt}' -> {href}")
