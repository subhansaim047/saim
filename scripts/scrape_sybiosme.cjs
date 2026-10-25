const { chromium } = require('playwright');
const fs = require('fs');

async function scrapeSybiosme() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  console.log('Navigating to https://www.sybiosme.com/en ...');
  await page.goto('https://www.sybiosme.com/en', { waitUntil: 'networkidle', timeout: 30000 });

  // Get all links
  const links = await page.$$eval('a', as => as.map(a => ({ text: a.innerText.trim(), href: a.href })));
  console.log('Found links:', links.filter(l => l.href.includes('sybiosme')));

  // Take full page screenshot
  await page.screenshot({ path: 'scripts/sybiosme_full_page.png', fullPage: true });

  // Let's inspect sections on homepage
  const sections = await page.$$eval('section, div[id]', els => els.map(el => ({
    id: el.id,
    className: el.className,
    textPreview: el.innerText.slice(0, 100).replace(/\n/g, ' ')
  })));
  console.log('Sections found:', sections);

  // Check if there are specific pages like /pricing, /faq, /contact
  const possibleUrls = [
    'https://www.sybiosme.com/en/pricing',
    'https://www.sybiosme.com/en/faq',
    'https://www.sybiosme.com/en/contact',
    'https://www.sybiosme.com/contact',
    'https://www.sybiosme.com/pricing'
  ];

  for (const url of possibleUrls) {
    try {
      const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });
      console.log(`URL ${url}: status = ${resp ? resp.status() : 'null'}`);
    } catch (e) {
      console.log(`URL ${url} failed`);
    }
  }

  await browser.close();
}

scrapeSybiosme().catch(console.error);
