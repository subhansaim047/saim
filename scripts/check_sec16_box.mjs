import { chromium } from 'playwright';

async function checkSec16Box() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  const info = await page.evaluate(() => {
    const sec16 = document.querySelectorAll('div[id^="shopify-section-"]')[16];
    const r = sec16.getBoundingClientRect();
    const bgEl = sec16.querySelector('.rimage-outer-wrapper, .fixed-height-item');
    return {
      id: sec16.id,
      rect: { x: r.x, y: r.y, w: r.width, h: r.height },
      offsetHeight: sec16.offsetHeight,
      offsetWidth: sec16.offsetWidth,
      bgStyle: bgEl ? window.getComputedStyle(bgEl).backgroundImage : 'NO BG EL',
      bgHtml: bgEl ? bgEl.outerHTML.slice(0, 300) : ''
    };
  });

  console.log(JSON.stringify(info, null, 2));
  await browser.close();
}

checkSec16Box().catch(console.error);
