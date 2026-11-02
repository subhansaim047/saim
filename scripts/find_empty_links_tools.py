from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:3017/tools', wait_until='domcontentloaded')
    
    empty_links = page.eval_on_selector_all('a[href]', '''
        elements => elements
            .filter(el => !el.innerText.trim())
            .map(el => ({
                href: el.getAttribute('href'),
                html: el.outerHTML.slice(0, 150)
            }))
    ''')
    
    print(f"Total empty links on /tools: {len(empty_links)}")
    for l in empty_links[:5]:
        print(l['href'], '-->', l['html'])
        
    browser.close()
