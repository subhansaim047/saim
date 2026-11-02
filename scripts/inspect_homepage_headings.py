from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:3017/', wait_until='domcontentloaded')
    headings = page.eval_on_selector_all('h1, h2, h3, h4, h5, h6', '''
        elements => elements.map(el => ({
            tag: el.tagName.toLowerCase(),
            text: el.innerText.trim().replace(/\\s+/g, ' '),
            parent: el.parentElement ? el.parentElement.tagName.toLowerCase() + '.' + (el.parentElement.className || '') : ''
        }))
    ''')
    print(f"Total headings: {len(headings)}")
    for idx, h in enumerate(headings, 1):
        print(f"{idx:2}. <{h['tag']}> {h['text'][:70]} (Parent: {h['parent'][:40]})")
    browser.close()
