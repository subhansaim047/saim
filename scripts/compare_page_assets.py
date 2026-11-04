from bs4 import BeautifulSoup

for name, path in [('Collection', 'audit/sample_collection.html'), ('Product', 'audit/sample_product.html')]:
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    css = [l.get('href') for l in soup.find_all('link', rel=lambda r: r and 'stylesheet' in r)]
    scripts = [s.get('src') for s in soup.find_all('script') if s.get('src')]
    theme_scripts = [s for s in scripts if 'idreesleather.com' in s or 'shopify' in s]
    
    print(f"=== {name} ===")
    print(f"CSS ({len(css)}):")
    for c in css:
        print("  ", c)
    print(f"Theme scripts ({len(theme_scripts)}):")
    for s in theme_scripts[:10]:
        print("  ", s)
