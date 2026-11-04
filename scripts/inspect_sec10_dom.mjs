import { chromium } from 'playwright';

async function inspectSec10() {
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

  const liveDetails = await pageLive.evaluate(() => {
    const sec = document.querySelectorAll('div[id^="shopify-section-"]')[10];
    if (!sec) return 'NO SEC 10';
    const imgs = Array.from(sec.querySelectorAll('img')).map(img => ({
      src: img.src,
      width: img.offsetWidth,
      height: img.offsetHeight,
      naturalWidth: img.naturalWidth,
      opacity: window.getComputedStyle(img).opacity,
      display: window.getComputedStyle(img).display,
      visibility: window.getComputedStyle(img).visibility,
      classes: img.className
    }));
    return {
      classes: sec.className,
      id: sec.id,
      imgCount: imgs.length,
      sampleImages: imgs.slice(0, 5)
    };
  });

  const localDetails = await pageLocal.evaluate(() => {
    const sec = document.querySelectorAll('div[id^="shopify-section-"]')[10];
    if (!sec) return 'NO SEC 10';
    const imgs = Array.from(sec.querySelectorAll('img')).map(img => ({
      src: img.src,
      width: img.offsetWidth,
      height: img.offsetHeight,
      naturalWidth: img.naturalWidth,
      opacity: window.getComputedStyle(img).opacity,
      display: window.getComputedStyle(img).display,
      visibility: window.getComputedStyle(img).visibility,
      classes: img.className
    }));
    return {
      classes: sec.className,
      id: sec.id,
      imgCount: imgs.length,
      sampleImages: imgs.slice(0, 5)
    };
  });

  console.log('LIVE SEC 10:');
  console.log(JSON.stringify(liveDetails, null, 2));

  console.log('\nLOCAL SEC 10:');
  console.log(JSON.stringify(localDetails, null, 2));

  await browser.close();
}

inspectSec10().catch(console.error);
