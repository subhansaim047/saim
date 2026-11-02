import os
from playwright.sync_api import sync_playwright

artifact_dir = r"C:\Users\subhan\.gemini\antigravity\brain\4f746af2-8096-428b-a0e5-b7e16c0031b4"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1400, "height": 900})
    
    # 1. Food Cost Calculator
    print("Testing Food Cost Calculator...")
    page.goto("http://localhost:3017/tools/food-cost-calculator", wait_until="networkidle", timeout=30000)
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(artifact_dir, "verify_food_cost_tool.png"), full_page=False)
    print("Saved verify_food_cost_tool.png")
    
    # 2. Allergen Matrix Generator
    print("Testing Allergen Matrix Generator...")
    page.goto("http://localhost:3017/tools/allergen-matrix-generator", wait_until="networkidle", timeout=30000)
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(artifact_dir, "verify_allergen_matrix_tool.png"), full_page=False)
    print("Saved verify_allergen_matrix_tool.png")
    
    # 3. Tools Hub with Comparison Table
    print("Testing Tools Hub...")
    page.goto("http://localhost:3017/tools", wait_until="networkidle", timeout=30000)
    page.wait_for_timeout(1000)
    # Scroll down towards comparison table
    page.evaluate("window.scrollTo(0, 3200)")
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(artifact_dir, "verify_tools_hub_comparison.png"), full_page=False)
    print("Saved verify_tools_hub_comparison.png")
    
    browser.close()
    print("All live browser verifications complete!")
