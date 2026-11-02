from playwright.sync_api import sync_playwright

urls = [
    'http://localhost:3017/',
    'http://localhost:3017/blogs',
    'http://localhost:3017/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
    'http://localhost:3017/blog/natashas-law-ppds-food-labelling-guide',
    'http://localhost:3017/blog/commercial-kitchen-food-cooling-temperature-guide',
    'http://localhost:3017/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants',
    'http://localhost:3017/tools',
    'http://localhost:3017/tools/ppds-label-generator',
    'http://localhost:3017/tools/allergen-matrix-generator',
    'http://localhost:3017/services/takeaway-web-design',
    'http://localhost:3017/about',
    'http://localhost:3017/contact',
    'http://localhost:3017/demos',
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    
    total_imgs = 0
    issues = []
    
    for url in urls:
        try:
            page.goto(url, wait_until='networkidle', timeout=15000)
        except Exception as e:
            print(f"Failed to load {url}: {e}")
            continue
            
        imgs = page.locator('img').all()
        total_imgs += len(imgs)
        
        for idx, img in enumerate(imgs):
            src = img.get_attribute('src') or ''
            alt = img.get_attribute('alt')
            
            if alt is None:
                issues.append((url, src, "MISSING_ALT_ATTRIBUTE"))
            elif alt.strip() == "":
                issues.append((url, src, "EMPTY_ALT_ATTRIBUTE"))

    browser.close()

print(f"\n==========================================")
print(f"Total images checked across {len(urls)} pages: {total_imgs}")
print(f"Total ALT issues found: {len(issues)}")
print(f"==========================================")

for url, src, issue_type in issues:
    print(f"[{issue_type}] Page: {url} -> img src: {src}")
