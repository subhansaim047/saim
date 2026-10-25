const { chromium } = require('playwright');
const path = require('path');

async function captureScroll() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://www.sybiosme.com/en', { waitUntil: 'networkidle', timeout: 30000 });

  // Scroll smoothly down to load all dynamic elements
  for (let i = 0; i < 15; i++) {
    await page.mouse.wheel(0, 1000);
    await page.waitForTimeout(400);
  }

  // 1. Screenshot pricing
  await page.evaluate(() => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ block: 'start' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/sybiosme_pricing_view.png' });

  // Scroll a bit more down into the cards
  await page.mouse.wheel(0, 600);
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/sybiosme_pricing_cards_view.png' });

  // 2. Screenshot FAQ
  await page.evaluate(() => {
    const el = document.getElementById('faq');
    if (el) el.scrollIntoView({ block: 'start' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/sybiosme_faq_view.png' });

  // 3. Screenshot Contact
  await page.evaluate(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ block: 'center' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/sybiosme_contact_view.png' });

  console.log('Screenshots captured successfully');
  await browser.close();
}

captureScroll().catch(console.error);
