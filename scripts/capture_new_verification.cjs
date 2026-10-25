const { chromium } = require('playwright');
const path = require('path');

async function captureNewSybiosmeSections() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // 1. Visit Home
  await page.goto('http://localhost:3008', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // Pricing
  await page.evaluate(() => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/our_pricing_sybiosme.png' });

  // FAQ
  await page.evaluate(() => {
    const el = document.getElementById('faq');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/our_faq_sybiosme.png' });

  // Contact
  await page.evaluate(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/our_contact_sybiosme.png' });

  // 2. Visit /contact
  await page.goto('http://localhost:3008/contact', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/our_contact_page_sybiosme.png' });

  console.log('All verification screenshots captured successfully');
  await browser.close();
}

captureNewSybiosmeSections().catch(console.error);
