import { chromium } from 'playwright';

async function checkSec13() {
  const browser = await chromium.launch();
  const pageLive = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await pageLive.goto('https://www.thejacketmaker.pk/', { waitUntil: 'domcontentloaded' });
  // Scroll down to Section 13
  await pageLive.evaluate(() => {
    const sec = document.querySelectorAll('div[id^="shopify-section-"]')[13];
    if (sec) sec.scrollIntoView();
  });
  await pageLive.waitForTimeout(2000);

  const pageLocal = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await pageLocal.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await pageLocal.evaluate(() => {
    const sec = document.querySelectorAll('div[id^="shopify-section-"]')[13];
    if (sec) sec.scrollIntoView();
  });
  await pageLocal.waitForTimeout(2000);

  const sec13Live = (await pageLive.$$('div[id^="shopify-section-"]'))[13];
  const sec13Local = (await pageLocal.$$('div[id^="shopify-section-"]'))[13];

  await sec13Live.screenshot({ path: 'audit/sec_13_scrolled_live.png' });
  await sec13Local.screenshot({ path: 'audit/sec_13_scrolled_local.png' });

  console.log("Captured scrolled Section 13 screenshots.");
  await browser.close();
}

checkSec13().catch(console.error);
