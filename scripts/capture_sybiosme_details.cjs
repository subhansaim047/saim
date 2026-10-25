const { chromium } = require('playwright');
const path = require('path');

async function captureDetailedScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://www.sybiosme.com/en', { waitUntil: 'networkidle', timeout: 30000 });

  // 1. Capture Pricing Section
  const subscriptionEl = await page.$('.subscription');
  if (subscriptionEl) {
    await subscriptionEl.screenshot({
      path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/sybiosme_pricing_exact.png'
    });
    console.log('Saved sybiosme_pricing_exact.png');
  }

  // 2. Open first few FAQ accordions and screenshot FAQ
  const faqButtons = await page.$$('.faq-group button');
  if (faqButtons.length > 0) {
    // click first 2
    try { await faqButtons[0].click(); } catch(e){}
    try { await faqButtons[1].click(); } catch(e){}
    await page.waitForTimeout(500);
  }
  const faqSection = await page.$('.faq-section');
  if (faqSection) {
    await faqSection.screenshot({
      path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/sybiosme_faq_exact.png'
    });
    console.log('Saved sybiosme_faq_exact.png');
  }

  // 3. Screenshot Contact Card specifically
  const contactEl = await page.$('#contact') || await page.$('.contact-card');
  if (contactEl) {
    await contactEl.screenshot({
      path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/sybiosme_contact_exact.png'
    });
    console.log('Saved sybiosme_contact_exact.png');
  }

  await browser.close();
}

captureDetailedScreenshots().catch(console.error);
