const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3005/cottage/index.html');
    
    // Wait for the menu section
    await page.waitForSelector('.pbmit-menu-tab2');

    // Click the second tab (Burgers)
    await page.click('.pbmit-tab-link[data-pbmit-tab="2"]');
    await page.waitForTimeout(500); // wait for animation
    
    await page.locator('.pbmit-menu-tab2').screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/menu_section_burgers.png' });
    
    // Click the first tab (Pizza)
    await page.click('.pbmit-tab-link[data-pbmit-tab="1"]');
    await page.waitForTimeout(500);
    
    await page.locator('.pbmit-menu-tab2').screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/menu_section_pizza.png' });

    await browser.close();
})();
