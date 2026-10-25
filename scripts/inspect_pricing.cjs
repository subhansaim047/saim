const { chromium } = require('playwright');
const fs = require('fs');

async function inspectPricingStructure() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://www.sybiosme.com/en', { waitUntil: 'networkidle', timeout: 30000 });

  const structure = await page.evaluate(() => {
    const main = document.querySelector('main');
    if (!main) return [];
    return Array.from(main.children).map((child, i) => {
      return {
        index: i,
        tagName: child.tagName,
        id: child.id,
        className: child.className,
        textStart: child.innerText.slice(0, 150).replace(/\n/g, ' ')
      };
    });
  });

  console.log('Main children:', JSON.stringify(structure, null, 2));

  // Let's also extract the exact HTML of the child that contains pricing
  const pricingIndex = structure.findIndex(s => s.textStart.includes('Choose. Your plan') || s.textStart.includes('Presence') || s.id === 'pricing');
  console.log('Pricing child index:', pricingIndex);

  if (pricingIndex !== -1) {
    const pricingHTML = await page.evaluate((idx) => {
      const main = document.querySelector('main');
      return main.children[idx].outerHTML;
    }, pricingIndex);
    fs.writeFileSync('scripts/sybiosme_main_pricing_section.html', pricingHTML);
    console.log('Saved pricing section html, length:', pricingHTML.length);
  }

  await browser.close();
}

inspectPricingStructure().catch(console.error);
