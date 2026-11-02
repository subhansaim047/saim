import sys
sys.stdout.reconfigure(encoding='utf-8')

from playwright.sync_api import sync_playwright
from collections import defaultdict

urls = [
    'http://localhost:3017/',
    'http://localhost:3017/blogs',
    'http://localhost:3017/tools',
    'http://localhost:3017/demos',
    'http://localhost:3017/services/takeaway-web-design',
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    
    for url in urls:
        page.goto(url, wait_until='domcontentloaded')
        links = page.eval_on_selector_all('a[href]', '''
            elements => elements.map(el => ({
                text: el.innerText.trim().replace(/\\s+/g, ' '),
                href: el.getAttribute('href') || '',
                ariaLabel: el.getAttribute('aria-label') || ''
            }))
        ''')
        
        by_text = defaultdict(list)
        for l in links:
            t = l['text'] or (f"[aria-label: {l['ariaLabel']}]" if l['ariaLabel'] else "[EMPTY]")
            by_text[t].append(l['href'])
            
        print(f"\n==========================================")
        print(f"URL: {url} (Total links: {len(links)})")
        print(f"==========================================")
        
        diff_dest_count = 0
        for text, hrefs in sorted(by_text.items(), key=lambda x: -len(x[1])):
            if len(hrefs) > 1:
                unique_hrefs = set(hrefs)
                if len(unique_hrefs) > 1:
                    diff_dest_count += 1
                    print(f"  [CONFLICT] '{text}' -> {unique_hrefs}")
        if diff_dest_count == 0:
            print("  No different-destination conflicts found!")
            
    browser.close()
