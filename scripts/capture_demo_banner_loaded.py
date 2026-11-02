import os
from playwright.sync_api import sync_playwright

artifact_dir = r"C:\Users\subhan\.gemini\antigravity\brain\4f746af2-8096-428b-a0e5-b7e16c0031b4"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1400, "height": 900})
    
    page.goto("http://localhost:3017/burger-garage/about.html", wait_until="load", timeout=30000)
    # wait 3 seconds for preloader fade out
    page.wait_for_timeout(3500)
    page.screenshot(path=os.path.join(artifact_dir, "verify_demo_banner_desktop_loaded.png"), full_page=False)
    
    page.set_viewport_size({"width": 375, "height": 812})
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(artifact_dir, "verify_demo_banner_mobile_loaded.png"), full_page=False)
    
    browser.close()
    print("Loaded screenshots saved!")
