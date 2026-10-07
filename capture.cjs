const { chromium } = require('playwright');

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  
  await page.goto('http://localhost:3000/pizzabox/index.html');
  await page.waitForLoadState('networkidle');
  
  // Wait a little extra for GSAP animations and the bg image
  await page.waitForTimeout(2000);
  
  await page.screenshot({
    path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/hero_screenshot.png',
    fullPage: false, // just the hero
  });
  
  await browser.close();
  console.log('Screenshot saved!');
}

main().catch(console.error);
