import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('https://www.thejacketmaker.pk/products/ionic-black-leather-jacket', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  const liveGallery = await page.evaluate(() => {
    const g = document.querySelector('.gallery');
    const inner = document.querySelector('.gallery__inner');
    const mi = document.querySelector('.main-image');
    const th = document.querySelector('.thumbnails');
    const firstA = document.querySelector('.thumbnails a');
    return {
      galleryClasses: g?.className,
      innerClasses: inner?.className,
      innerStyle: inner ? window.getComputedStyle(inner).display : null,
      gStyle: g ? {
        display: window.getComputedStyle(g).display,
        flexDirection: window.getComputedStyle(g).flexDirection,
        width: window.getComputedStyle(g).width,
      } : null,
      thStyle: th ? {
        display: window.getComputedStyle(th).display,
        position: window.getComputedStyle(th).position,
        width: window.getComputedStyle(th).width,
        height: window.getComputedStyle(th).height,
        visibility: window.getComputedStyle(th).visibility,
        overflow: window.getComputedStyle(th).overflow
      } : null,
      firstAStyle: firstA ? {
        display: window.getComputedStyle(firstA).display,
        width: window.getComputedStyle(firstA).width,
        height: window.getComputedStyle(firstA).height,
        visibility: window.getComputedStyle(firstA).visibility,
      } : null,
      htmlStructure: g ? g.outerHTML.slice(0, 800) : null
    };
  });

  console.log('Live Gallery Structure:', JSON.stringify(liveGallery, null, 2));

  // Also take screenshot of live gallery
  const liveGEl = await page.$('.gallery');
  if (liveGEl) {
    await liveGEl.screenshot({ path: 'audit/live_gallery_reference.png' });
    console.log('Saved live_gallery_reference.png');
  }

  await browser.close();
}

main().catch(console.error);
