import sys
sys.stdout.reconfigure(encoding='utf-8')

from playwright.sync_api import sync_playwright
from collections import defaultdict

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:3017/', wait_until='domcontentloaded')
    
    links = page.eval_on_selector_all('a[href]', '''
        elements => elements.map(el => ({
            text: el.innerText.trim().replace(/\\s+/g, ' '),
            href: el.getAttribute('href') || '',
            ariaLabel: el.getAttribute('aria-label') || ''
        }))
    ''')
    
    browser.close()

print(f"Total links on homepage: {len(links)}")

# Group by text
by_text = defaultdict(list)
for l in links:
    t = l['text'] or (f"[aria-label: {l['ariaLabel']}]" if l['ariaLabel'] else "[EMPTY]")
    by_text[t].append(l['href'])

print("\n=== ANCHOR TEXTS USED MORE THAN ONCE ===")
duplicates_found = 0
for text, hrefs in sorted(by_text.items(), key=lambda x: -len(x[1])):
    if len(hrefs) > 1:
        duplicates_found += 1
        unique_hrefs = set(hrefs)
        print(f"\nAnchor Text: '{text}' (Used {len(hrefs)} times)")
        for h in hrefs:
            print(f"  -> {h}")
        if len(unique_hrefs) > 1:
            print(f"  [DIFFERENT DESTINATIONS] {unique_hrefs}")
        else:
            print(f"  [SAME DESTINATION] {list(unique_hrefs)[0]}")

print(f"\nTotal duplicate anchor text groups: {duplicates_found}")
