const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 }, deviceScaleFactor: 2 });
  
  await page.goto('https://www.fooddocs.com/hubfs/HACCP_templates/PDF/Walk-in_cooler_food_storage_chart.pdf');
  await page.waitForTimeout(3000);
  
  await page.screenshot({ path: 'scripts/walkin_pdf_rendered.png', fullPage: true });
  console.log('PDF rendered via Playwright!');
  await browser.close();
})();
