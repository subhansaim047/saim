import os
from playwright.sync_api import sync_playwright

artifact_dir = r"C:\Users\subhan\.gemini\antigravity\brain\4f746af2-8096-428b-a0e5-b7e16c0031b4"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1400, "height": 900})
    
    page.goto("http://localhost:3017/tools/food-cost-calculator", wait_until="networkidle", timeout=30000)
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollTo(0, 500)")
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(artifact_dir, "verify_food_cost_delivery_buffer.png"), full_page=False)
    
    browser.close()
    print("Saved verify_food_cost_delivery_buffer.png")
