const { chromium } = require('playwright');
const fs = require('fs');

async function getComputedStyles() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://www.sybiosme.com/en', { waitUntil: 'networkidle', timeout: 30000 });

  const styles = await page.evaluate(() => {
    function pickStyles(selector, props) {
      const el = document.querySelector(selector);
      if (!el) return null;
      const cs = window.getComputedStyle(el);
      const res = {};
      props.forEach(p => res[p] = cs.getPropertyValue(p));
      return res;
    }

    return {
      planCard: pickStyles('.plan-card', ['background-color', 'border', 'border-radius', 'padding', 'box-shadow']),
      planTile: pickStyles('.plan-tile', ['background', 'background-color', 'border-radius', 'padding']),
      planTitle: pickStyles('.plan-title-row h3', ['font-family', 'font-size', 'font-weight', 'color', 'letter-spacing']),
      planPrice: pickStyles('.plan-card .num', ['font-family', 'font-size', 'font-weight', 'color']),
      faqGroup: pickStyles('.faq-group', ['background-color', 'border', 'border-radius', 'padding']),
      faqRow: pickStyles('.faq-row', ['border-bottom', 'padding']),
      faqTrigger: pickStyles('.faq-trigger', ['font-size', 'font-weight', 'color', 'padding']),
      contactCard: pickStyles('.contact-card', ['background-color', 'border', 'border-radius', 'padding', 'box-shadow', 'backdrop-filter'])
    };
  });

  console.log('Computed styles:', JSON.stringify(styles, null, 2));

  // Let's also grab all linked stylesheets from sybiosme
  const cssUrls = await page.$$eval('link[rel="stylesheet"]', links => links.map(l => l.href));
  console.log('Stylesheets:', cssUrls);

  await browser.close();
}

getComputedStyles().catch(console.error);
