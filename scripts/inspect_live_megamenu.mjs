import { chromium } from 'playwright';

async function testLive() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  console.log("Loading live site...");
  await page.goto('https://www.thejacketmaker.pk/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);

  const navItem = await page.$('.navigation__item--with-mega-menu');
  if (navItem) {
    console.log("Hovering live navItem...");
    await navItem.hover();
    await page.waitForTimeout(1000);

    const liveMegaHtml = await page.evaluate(() => {
      const el = document.querySelector('.navigation__item--show-children .navigation__tier-2-container');
      return el ? el.outerHTML : 'NOT OPEN';
    });

    console.log("Live mega menu HTML length:", liveMegaHtml.length);
    await page.screenshot({ path: 'audit/test_live_megamenu_opened.png' });
  }

  await browser.close();
}

testLive();
