const { chromium } = require('playwright');
const fs = require('fs');

async function getFullSections() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('https://www.sybiosme.com/en', { waitUntil: 'networkidle', timeout: 30000 });

  const result = await page.evaluate(() => {
    // 1. Pricing Section
    // Look at header#pricing and its parent or siblings
    const pHeader = document.getElementById('pricing');
    let pSection = null;
    if (pHeader) {
      // Find the container section
      pSection = pHeader.closest('section') || pHeader.parentElement;
    }

    // 2. FAQ Section
    const faqEl = document.querySelector('.faq-section') || document.getElementById('faq');
    const fSection = faqEl ? (faqEl.closest('section') || faqEl) : null;

    // 3. Contact Section
    const contactEl = document.getElementById('contact');
    const cSection = contactEl ? (contactEl.closest('section') || contactEl.parentElement) : null;

    return {
      pricing: pSection ? pSection.outerHTML : null,
      faq: fSection ? fSection.outerHTML : null,
      contact: cSection ? cSection.outerHTML : null
    };
  });

  if (result.pricing) fs.writeFileSync('scripts/sybiosme_pricing_full.html', result.pricing);
  if (result.faq) fs.writeFileSync('scripts/sybiosme_faq_full.html', result.faq);
  if (result.contact) fs.writeFileSync('scripts/sybiosme_contact_full.html', result.contact);

  console.log('Saved full sections:', {
    pricingLen: result.pricing ? result.pricing.length : 0,
    faqLen: result.faq ? result.faq.length : 0,
    contactLen: result.contact ? result.contact.length : 0
  });

  await browser.close();
}

getFullSections().catch(console.error);
