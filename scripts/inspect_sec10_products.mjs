import { chromium } from 'playwright';

async function inspectSec10Products() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  
  await page.evaluate(() => {
    const sec10 = document.querySelectorAll('div[id^="shopify-section-"]')[10];
    if (sec10) sec10.scrollIntoView();
  });
  await page.waitForTimeout(1000);

  const productData = await page.evaluate(() => {
    const sec10 = document.querySelectorAll('div[id^="shopify-section-"]')[10];
    const products = Array.from(sec10.querySelectorAll('.product-block'));
    return products.map(p => {
      const img = p.querySelector('img');
      const title = p.querySelector('.title, .product-block__title, a.product-link');
      const r = p.getBoundingClientRect();
      return {
        title: title ? title.innerText.trim() : 'NO TITLE',
        rect: { x: r.x, y: r.y, w: r.width, h: r.height },
        img: img ? {
          src: img.src,
          naturalW: img.naturalWidth,
          naturalH: img.naturalHeight,
          computedOpacity: window.getComputedStyle(img).opacity,
          computedDisplay: window.getComputedStyle(img).display
        } : null
      };
    });
  });

  console.log("Total products in Sec 10:", productData.length);
  productData.slice(0, 8).forEach((p, i) => {
    console.log(`[${i}] "${p.title}" | rect: ${JSON.stringify(p.rect)} | img natural: ${p.img ? p.img.naturalW + 'x' + p.img.naturalH : 'none'} | opacity: ${p.img ? p.img.computedOpacity : ''}`);
  });

  await browser.close();
}

inspectSec10Products().catch(console.error);
