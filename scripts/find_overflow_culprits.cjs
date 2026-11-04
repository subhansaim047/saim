const { chromium } = require('playwright');
const path = require('path');

async function checkOverflow() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

  const homeUrl = 'file:///C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html';
  await page.goto(homeUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  const culprits = await page.evaluate(() => {
    const list = [];
    const docWidth = document.documentElement.clientWidth;
    const all = document.querySelectorAll('*');
    for (const el of all) {
      const rect = el.getBoundingClientRect();
      if (rect.right > docWidth + 2) {
        list.push({
          tag: el.tagName,
          className: el.className,
          id: el.id,
          width: rect.width,
          right: rect.right
        });
      }
    }
    return list.slice(0, 15);
  });

  console.log('Top overflow culprits on home page:', JSON.stringify(culprits, null, 2));

  // Now check product page
  const prodUrl = 'file:///C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/products/ionic-black-leather-jacket/index.html';
  await page.goto(prodUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  const prodCulprits = await page.evaluate(() => {
    const list = [];
    const docWidth = document.documentElement.clientWidth;
    const all = document.querySelectorAll('*');
    for (const el of all) {
      const rect = el.getBoundingClientRect();
      if (rect.right > docWidth + 2) {
        list.push({
          tag: el.tagName,
          className: el.className,
          id: el.id,
          width: rect.width,
          right: rect.right
        });
      }
    }
    return list.slice(0, 15);
  });

  console.log('Top overflow culprits on product page:', JSON.stringify(prodCulprits, null, 2));

  await browser.close();
}

checkOverflow().catch(console.error);
