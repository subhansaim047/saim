import { chromium } from 'playwright';

async function checkSec10Box() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  const info = await page.evaluate(() => {
    const sec10 = document.querySelectorAll('div[id^="shopify-section-"]')[10];
    const r = sec10.getBoundingClientRect();
    const isVisible = r.width > 0 && r.height > 0;
    return {
      id: sec10.id,
      rect: { x: r.x, y: r.y, w: r.width, h: r.height },
      offsetHeight: sec10.offsetHeight,
      offsetWidth: sec10.offsetWidth,
      display: window.getComputedStyle(sec10).display,
      visibility: window.getComputedStyle(sec10).visibility,
      innerImgCount: sec10.querySelectorAll('img').length,
      innerImgs: Array.from(sec10.querySelectorAll('img')).map(img => ({
        src: img.src.slice(-30),
        naturalWidth: img.naturalWidth,
        opacity: window.getComputedStyle(img).opacity,
        offsetW: img.offsetWidth,
        offsetH: img.offsetHeight
      }))
    };
  });

  console.log(JSON.stringify(info, null, 2));
  await browser.close();
}

checkSec10Box().catch(console.error);
