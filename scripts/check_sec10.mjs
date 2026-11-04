import { chromium } from 'playwright';
import fs from 'fs';

async function checkSec10() {
  const browser = await chromium.launch();
  const pageLive = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await pageLive.goto('https://www.thejacketmaker.pk/', { waitUntil: 'domcontentloaded' });
  await pageLive.evaluate(() => {
    const sec = document.querySelectorAll('div[id^="shopify-section-"]')[10];
    if (sec) sec.scrollIntoView();
  });
  await pageLive.waitForTimeout(2000);

  const pageLocal = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await pageLocal.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await pageLocal.evaluate(() => {
    const sec = document.querySelectorAll('div[id^="shopify-section-"]')[10];
    if (sec) sec.scrollIntoView();
  });
  await pageLocal.waitForTimeout(2000);

  const sec10Live = (await pageLive.$$('div[id^="shopify-section-"]'))[10];
  const sec10Local = (await pageLocal.$$('div[id^="shopify-section-"]'))[10];

  await sec10Live.screenshot({ path: 'audit/sec_10_scrolled_live.png' });
  await sec10Local.screenshot({ path: 'audit/sec_10_scrolled_local.png' });

  console.log("Captured scrolled Section 10 screenshots.");
  await browser.close();
}

checkSec10().catch(console.error);
