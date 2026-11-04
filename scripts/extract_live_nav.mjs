import { chromium } from 'playwright';

async function extractLiveNav() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('https://www.thejacketmaker.pk', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);

  const navLinks = await page.evaluate(() => {
    const header = document.querySelector('.site-header, #shopify-section-header, header');
    if (!header) return [];
    const links = Array.from(header.querySelectorAll('a'));
    return links.map(a => ({
      text: a.textContent.trim().replace(/\s+/g, ' '),
      href: a.getAttribute('href')
    })).filter(l => l.text && l.href && l.href !== '#');
  });

  console.log(`Extracted ${navLinks.length} live nav links:`);
  console.log(JSON.stringify(navLinks, null, 2));

  await browser.close();
}

extractLiveNav().catch(console.error);
