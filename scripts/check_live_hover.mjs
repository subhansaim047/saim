import { chromium } from 'playwright';

async function checkHover() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://www.thejacketmaker.pk/collections/mens-leather-jackets', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  const card = page.locator('.product-block').first();
  console.log('Card before hover innerHTML:', (await card.innerHTML()).slice(0, 300));
  
  await card.hover();
  await page.waitForTimeout(2000);

  const afterHoverHTML = await card.innerHTML();
  console.log('Card after hover innerHTML:', afterHoverHTML.slice(0, 300));
  console.log('Contains video after hover:', afterHoverHTML.includes('<video') || afterHoverHTML.includes('.mp4'));

  await browser.close();
}

checkHover().catch(console.error);
