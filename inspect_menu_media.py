import re

with open('public/hotbite/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find style block with id oresto-custom-menu-styles
m = re.search(r'<style id="oresto-custom-menu-styles">([\s\S]*?)</style>', content)
if m:
    menu_css = m.group(1)
    print("Found menu CSS, length:", len(menu_css))
    media_matches = re.findall(r'(@media[^{]+\{)', menu_css)
    for mm in media_matches:
        print("  ->", mm.strip())
else:
    print("oresto-custom-menu-styles not found")
