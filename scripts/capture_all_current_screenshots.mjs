import { chromium } from 'playwright';
import path from 'path';

async function captureScreenshots() {
  const browser = await chromium.launch();
  const artDir = 'C:\\Users\\subhan\\.gemini\\antigravity\\brain\\4f746af2-8096-428b-a0e5-b7e16c0031b4';

  // Desktop
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(2000);

  // Take full screenshot
  await page.screenshot({ path: path.join(artDir, 'current_desktop_full.png'), fullPage: true });

  // Take slices
  for (let y = 0; y < 7500; y += 1000) {
    await page.evaluate((pos) => window.scrollTo(0, pos), y);
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(artDir, `current_desktop_slice_${y}.png`) });
  }

  // Mobile
  const mobContext = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
  const mobPage = await mobContext.newPage();
  await mobPage.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'load' });
  await mobPage.waitForTimeout(2000);
  await mobPage.screenshot({ path: path.join(artDir, 'current_mobile_full.png'), fullPage: true });

  await browser.close();
  console.log("Captured all screenshots to artifact directory.");
}

captureScreenshots().catch(console.error);
