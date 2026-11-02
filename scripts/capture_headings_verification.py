from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 900})
    page.goto('http://localhost:3017/', wait_until='networkidle')
    
    # 1. Benefits section
    page.locator('#benefits').screenshot(path=r'C:\Users\subhan\.gemini\antigravity\brain\4f746af2-8096-428b-a0e5-b7e16c0031b4\verify_benefits_headings.png')
    
    # 2. Kitchen tools
    page.locator('#kitchen-tools').screenshot(path=r'C:\Users\subhan\.gemini\antigravity\brain\4f746af2-8096-428b-a0e5-b7e16c0031b4\verify_tools_headings.png')
    
    # 3. Process
    page.locator('#process').screenshot(path=r'C:\Users\subhan\.gemini\antigravity\brain\4f746af2-8096-428b-a0e5-b7e16c0031b4\verify_process_headings.png')
    
    # 4. Pricing
    page.locator('#pricing').screenshot(path=r'C:\Users\subhan\.gemini\antigravity\brain\4f746af2-8096-428b-a0e5-b7e16c0031b4\verify_pricing_headings.png')
    
    # 5. FAQ
    page.locator('#faq').screenshot(path=r'C:\Users\subhan\.gemini\antigravity\brain\4f746af2-8096-428b-a0e5-b7e16c0031b4\verify_faq_headings.png')
    
    browser.close()

print("All section screenshots captured successfully!")
