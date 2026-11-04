import { chromium } from 'playwright';

async function test() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3891/thejacketmaker/index.html');
  await page.waitForTimeout(1000);

  const navItem = await page.$('.navigation__item--with-mega-menu');
  if (navItem) {
    await navItem.hover();
    await page.waitForTimeout(500);

    const images = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.navigation__tier-2-container img')).map(img => ({
        src: img.src,
        dataSrc: img.getAttribute('data-src'),
        naturalWidth: img.naturalWidth,
        classes: img.className,
        opacity: window.getComputedStyle(img).opacity
      }));
    });

    console.log('Images in mega menu count:', images.length);
    images.forEach((img, i) => console.log(i, 'src:', img.src.slice(-35), 'natW:', img.naturalWidth, 'opacity:', img.opacity));

    await page.screenshot({ path: 'audit/test_megamenu_opened.png' });
  }
  await browser.close();
}

test();
