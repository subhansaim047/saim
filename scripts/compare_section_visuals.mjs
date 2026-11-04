import { chromium } from 'playwright';

async function checkVisuals() {
  const browser = await chromium.launch();
  const pageLive = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await pageLive.goto('https://www.thejacketmaker.pk/', { waitUntil: 'domcontentloaded' });
  await pageLive.waitForTimeout(2000);

  const pageLocal = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await pageLocal.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await pageLocal.waitForTimeout(2000);

  // Compare background images across all elements
  const getBgImages = () => {
    const els = Array.from(document.querySelectorAll('*'));
    return els.filter(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      return bg && bg !== 'none' && !bg.includes('gradient');
    }).map(el => ({
      tag: el.tagName,
      id: el.id,
      className: el.className,
      bg: window.getComputedStyle(el).backgroundImage
    }));
  };

  const liveBg = await pageLive.evaluate(getBgImages);
  const localBg = await pageLocal.evaluate(getBgImages);

  console.log("Live elements with background-image:", liveBg.length);
  console.log("Local elements with background-image:", localBg.length);

  console.log("\nSample Live background images:");
  liveBg.slice(0, 10).forEach(x => console.log(x.id || x.className.slice(0, 30), '-->', x.bg.slice(0, 80)));

  console.log("\nSample Local background images:");
  localBg.slice(0, 10).forEach(x => console.log(x.id || x.className.slice(0, 30), '-->', x.bg.slice(0, 80)));

  // Check section screenshots comparison
  const sectionsToCheck = [4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 16, 18, 20];
  for (const sIdx of sectionsToCheck) {
    const liveSec = (await pageLive.$$('div[id^="shopify-section-"]'))[sIdx];
    const localSec = (await pageLocal.$$('div[id^="shopify-section-"]'))[sIdx];
    if (liveSec && localSec) {
      await liveSec.screenshot({ path: `audit/sec_${sIdx}_live.png` });
      await localSec.screenshot({ path: `audit/sec_${sIdx}_local.png` });
    }
  }

  console.log("\nSaved screenshots for sections:", sectionsToCheck);
  await browser.close();
}

checkVisuals().catch(console.error);
