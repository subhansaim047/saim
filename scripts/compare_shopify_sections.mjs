import { chromium } from 'playwright';
import fs from 'fs';

async function inspectSections() {
  const browser = await chromium.launch();
  const pageLive = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await pageLive.goto('https://www.thejacketmaker.pk/', { waitUntil: 'domcontentloaded' });
  await pageLive.waitForTimeout(2000);

  const pageLocal = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await pageLocal.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await pageLocal.waitForTimeout(2000);

  // Compare all visible texts by section
  const liveSections = await pageLive.evaluate(() => {
    return Array.from(document.querySelectorAll('div[id^="shopify-section-"]')).map(sec => ({
      id: sec.id,
      textPreview: sec.innerText.slice(0, 150).replace(/\s+/g, ' '),
      imgCount: sec.querySelectorAll('img').length,
      height: sec.offsetHeight
    }));
  });

  const localSections = await pageLocal.evaluate(() => {
    return Array.from(document.querySelectorAll('div[id^="shopify-section-"]')).map(sec => ({
      id: sec.id,
      textPreview: sec.innerText.slice(0, 150).replace(/\s+/g, ' '),
      imgCount: sec.querySelectorAll('img').length,
      height: sec.offsetHeight
    }));
  });

  console.log("Live sections count:", liveSections.length);
  console.log("Local sections count:", localSections.length);

  for (let i = 0; i < Math.max(liveSections.length, localSections.length); i++) {
    const l = liveSections[i] || { id: 'MISSING', textPreview: '', height: 0, imgCount: 0 };
    const loc = localSections[i] || { id: 'MISSING', textPreview: '', height: 0, imgCount: 0 };
    console.log(`\n[Section ${i}]`);
    console.log(`  LIVE:  id=${l.id.slice(0, 30)} | H=${l.height} | imgs=${l.imgCount} | text: ${l.textPreview.slice(0, 50)}`);
    console.log(`  LOCAL: id=${loc.id.slice(0, 30)} | H=${loc.height} | imgs=${loc.imgCount} | text: ${loc.textPreview.slice(0, 50)}`);
    if (Math.abs(l.height - loc.height) > 100) {
      console.log(`  >>> HEIGHT MISMATCH: Live=${l.height} vs Local=${loc.height}`);
    }
    if (l.imgCount !== loc.imgCount) {
      console.log(`  >>> IMAGE COUNT MISMATCH: Live=${l.imgCount} vs Local=${loc.imgCount}`);
    }
  }

  await browser.close();
}

inspectSections().catch(console.error);
