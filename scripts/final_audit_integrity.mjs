import { chromium } from 'playwright';

async function finalAudit() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'load' });
  
  // scroll all the way down smoothly
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1500);

  const report = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt,
      w: img.offsetWidth,
      h: img.offsetHeight,
      naturalW: img.naturalWidth,
      naturalH: img.naturalHeight,
      opacity: window.getComputedStyle(img).opacity,
      display: window.getComputedStyle(img).display,
      visibility: window.getComputedStyle(img).visibility
    }));

    const bgEls = Array.from(document.querySelectorAll('*')).filter(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      return bg && bg !== 'none' && !bg.includes('gradient');
    }).map(el => ({
      tag: el.tagName,
      className: el.className,
      bg: window.getComputedStyle(el).backgroundImage
    }));

    const externalRequests = imgs.filter(i => i.src.includes('thejacketmaker.pk') || i.src.includes('cdn.shopify.com'));
    const brokenImgs = imgs.filter(i => i.display !== 'none' && i.w > 0 && i.naturalW === 0);
    const hiddenImgs = imgs.filter(i => i.display !== 'none' && i.w > 0 && i.opacity === '0');

    return {
      totalImages: imgs.length,
      visibleWithNaturalDimensions: imgs.filter(i => i.naturalW > 0).length,
      brokenImages: brokenImgs.length,
      brokenSample: brokenImgs.slice(0, 5),
      zeroOpacityImages: hiddenImgs.length,
      zeroOpacitySample: hiddenImgs.slice(0, 5),
      externalImages: externalRequests.length,
      totalBgElements: bgEls.length
    };
  });

  console.log("=== Final Homepage Image Integrity Audit ===");
  console.log(JSON.stringify(report, null, 2));

  await browser.close();
}

finalAudit().catch(console.error);
