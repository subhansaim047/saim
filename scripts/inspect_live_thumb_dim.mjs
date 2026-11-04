import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://www.thejacketmaker.pk/products/ionic-black-leather-jacket', { waitUntil: 'domcontentloaded' });
  const r = await page.evaluate(() => {
    const th = document.querySelector('.thumbnails');
    const a = document.querySelector('.thumbnails a');
    const img = document.querySelector('.thumbnails img');
    const getCS = el => {
      if (!el) return null;
      const s = window.getComputedStyle(el);
      return { width: s.width, height: s.height, display: s.display, margin: s.margin, padding: s.padding, position: s.position, flex: s.flex, boxSizing: s.boxSizing };
    };
    return { th: getCS(th), a: getCS(a), img: getCS(img) };
  });
  console.log(JSON.stringify(r, null, 2));
  await browser.close();
}

main().catch(console.error);
