import { chromium } from 'playwright';
import fs from 'fs';

async function verifyFixes() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  // 1. Screenshot Section 16 (Flat 50% Off Leather Bags)
  const sec16 = (await page.$$('div[id^="shopify-section-"]'))[16];
  if (sec16) {
    await sec16.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await sec16.screenshot({ path: 'audit/sec_16_after_fix.png' });
    const s16Size = fs.statSync('audit/sec_16_after_fix.png').size / 1024;
    console.log("Section 16 after fix screenshot size:", s16Size.toFixed(1), "KB (was 9.3 KB)");
  }

  // 2. Screenshot Section 10 (Best Sellers with products)
  const sec10 = (await page.$$('div[id^="shopify-section-"]'))[10];
  if (sec10) {
    await sec10.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await sec10.screenshot({ path: 'audit/sec_10_after_fix.png' });
    const s10Size = fs.statSync('audit/sec_10_after_fix.png').size / 1024;
    console.log("Section 10 after fix screenshot size:", s10Size.toFixed(1), "KB (was 55.1 KB)");
  }

  // 3. Capture full page screenshot
  await page.screenshot({ path: 'audit/homepage_after_all_fixes.png', fullPage: true });
  const fullSize = fs.statSync('audit/homepage_after_all_fixes.png').size / 1024;
  console.log("Full page screenshot size:", fullSize.toFixed(1), "KB");

  await browser.close();
}

verifyFixes().catch(console.error);
