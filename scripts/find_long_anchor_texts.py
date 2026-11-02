import sys
sys.stdout.reconfigure(encoding='utf-8')

from playwright.sync_api import sync_playwright

urls = [
    'http://localhost:3017/',
    'http://localhost:3017/blogs',
    'http://localhost:3017/tools',
    'http://localhost:3017/demos',
    'http://localhost:3017/services/takeaway-web-design',
    'http://localhost:3017/about',
    'http://localhost:3017/contact',
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    
    for u in urls:
        page.goto(u, wait_until='domcontentloaded')
        links = page.eval_on_selector_all('a[href]', '''
            elements => elements.map(el => {
                const text = el.innerText.trim().replace(/\\s+/g, ' ');
                return {
                    text: text,
                    href: el.getAttribute('href') || '',
                    chars: text.length,
                    words: text ? text.split(' ').length : 0
                };
            })
        ''')
        
        long_links = [l for l in links if l['chars'] > 50 or l['words'] > 7]
        print(f"\n==========================================")
        print(f"URL: {u} (Total links: {len(links)}, Long links: {len(long_links)})")
        print(f"==========================================")
        for l in long_links[:15]:
            print(f"  [{l['words']} words, {l['chars']} chars] '{l['text']}' -> {l['href']}")
            
    browser.close()
