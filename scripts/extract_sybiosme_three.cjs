const { chromium } = require('playwright');
const fs = require('fs');

async function extractSections() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('https://www.sybiosme.com/en', { waitUntil: 'networkidle', timeout: 30000 });

  // 1. Find Pricing Section
  // Find element containing "Pricing" or pricing cards
  const pricingData = await page.evaluate(() => {
    // Look for element with id="pricing" or heading "Pricing"
    let el = document.getElementById('pricing');
    if (!el) {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3'));
      const h = headings.find(h => /pricing|plans|rates/i.test(h.innerText));
      if (h) el = h.closest('section') || h.parentElement.parentElement;
    }
    if (el) {
      return { html: el.outerHTML, text: el.innerText };
    }
    return null;
  });

  // 2. Find FAQ Section
  const faqData = await page.evaluate(() => {
    let el = document.getElementById('faq');
    if (!el) {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3'));
      const h = headings.find(h => /faq|frequently/i.test(h.innerText));
      if (h) el = h.closest('section') || h.parentElement.parentElement;
    }
    if (el) {
      return { html: el.outerHTML, text: el.innerText };
    }
    return null;
  });

  // 3. Find Contact Section
  const contactData = await page.evaluate(() => {
    let el = document.getElementById('contact');
    if (!el) {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3'));
      const h = headings.find(h => /contact|let's talk|touch/i.test(h.innerText));
      if (h) el = h.closest('section') || h.parentElement.parentElement;
    }
    if (el) {
      return { html: el.outerHTML, text: el.innerText };
    }
    return null;
  });

  fs.writeFileSync('scripts/sybiosme_pricing.html', pricingData ? pricingData.html : 'not found');
  fs.writeFileSync('scripts/sybiosme_faq.html', faqData ? faqData.html : 'not found');
  fs.writeFileSync('scripts/sybiosme_contact.html', contactData ? contactData.html : 'not found');

  console.log('Pricing found:', !!pricingData);
  console.log('FAQ found:', !!faqData);
  console.log('Contact found:', !!contactData);

  // Take screenshots of each
  if (pricingData) {
    const el = await page.$('#pricing') || await page.$('section:has-text("Pricing")');
    if (el) await el.screenshot({ path: 'scripts/sybiosme_pricing.png' });
  }

  if (faqData) {
    const el = await page.$('#faq') || await page.$('section:has-text("Frequently")');
    if (el) await el.screenshot({ path: 'scripts/sybiosme_faq.png' });
  }

  if (contactData) {
    const el = await page.$('#contact') || await page.$('section:has-text("Contact")');
    if (el) await el.screenshot({ path: 'scripts/sybiosme_contact.png' });
  }

  await browser.close();
}

extractSections().catch(console.error);
