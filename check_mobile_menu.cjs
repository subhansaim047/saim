const { chromium } = require('playwright');
const path = require('path');

const brainDir = 'C:\\Users\\subhan\\.gemini\\antigravity\\brain\\4f746af2-8096-428b-a0e5-b7e16c0031b4';

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true });
  await page.goto('http://127.0.0.1:8080/hotbite/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(2000);

  await page.screenshot({ path: path.join(brainDir, 'header_mobile_375.png'), clip: { x: 0, y: 0, width: 375, height: 200 } });

  // Now click hamburger button
  const burger = page.locator('.framer-1vrddk6-container');
  if (await burger.count() > 0) {
    await burger.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(brainDir, 'header_mobile_open_375.png'), clip: { x: 0, y: 0, width: 375, height: 600 } });
  }

  // Also check if clicking on "Menu" link scrolls to #Menu
  const menuLink = page.locator('nav a:has-text("Menu")').first();
  if (await menuLink.count() > 0) {
    await menuLink.click();
    await page.waitForTimeout(1500);
    const scrollY = await page.evaluate(() => window.scrollY);
    console.log('ScrollY after clicking Menu link on mobile:', scrollY);
    await page.screenshot({ path: path.join(brainDir, 'scrolled_via_nav_click_375.png') });
  }

  await browser.close();
})();
