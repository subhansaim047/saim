import { chromium } from 'playwright';

async function checkInView() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  
  await page.evaluate(() => {
    const sec10 = document.querySelectorAll('div[id^="shopify-section-"]')[10];
    if (sec10) sec10.scrollIntoView();
  });
  await page.waitForTimeout(1000);

  const visibleProducts = await page.evaluate(() => {
    const sec10 = document.querySelectorAll('div[id^="shopify-section-"]')[10];
    const products = Array.from(sec10.querySelectorAll('.product-block'));
    return products.map((p, idx) => {
      const r = p.getBoundingClientRect();
      const img = p.querySelector('img');
      return {
        idx,
        x: Math.round(r.x),
        w: Math.round(r.width),
        inView: r.x + r.width > 0 && r.x < 1440,
        imgSrc: img ? img.src.slice(-30) : '',
        opacity: img ? window.getComputedStyle(img).opacity : ''
      };
    }).filter(p => p.inView);
  });

  console.log('Products currently in view:', visibleProducts.length);
  visibleProducts.forEach(p => console.log(p));
  await browser.close();
}

checkInView().catch(console.error);
