const { chromium } = require('playwright');
const path = require('path');

async function testChartsAndEbooks() {
  console.log('Starting Playwright UI verification for charts & ebook removal...');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  const testUrls = [
    { url: 'http://localhost:3000/food-safety-templates/turkey-pasteurization-chart', name: 'Turkey Pasteurization Chart (template-12)' },
    { url: 'http://localhost:3000/food-safety-templates/waste-management-plan', name: 'Waste Management Plan (template-14)' },
    { url: 'http://localhost:3000/food-safety-templates/walk-in-cooler-food-storage-chart', name: 'Walk-In Cooler Chart (template-22)' },
    { url: 'http://localhost:3000/food-safety-templates/pest-management-plan', name: 'Pest Management Plan (template-31)' },
    { url: 'http://localhost:3000/food-safety-templates/proper-food-storage-chart', name: 'Proper Food Storage Chart (template-77)' },
    { url: 'http://localhost:3000/food-safety-templates/restaurant-sop', name: 'Restaurant SOP (template-166)' }
  ];

  let allPassed = true;

  for (const item of testUrls) {
    console.log(`\nNavigating to ${item.name}: ${item.url}`);
    const res = await page.goto(item.url, { waitUntil: 'networkidle', timeout: 30000 });
    if (!res || res.status() !== 200) {
      console.error(`FAILED: HTTP status ${res ? res.status() : 'null'} for ${item.url}`);
      allPassed = false;
      continue;
    }

    const images = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img[src*="/templates/charts/"]'));
      return imgs.map(img => ({
        src: img.getAttribute('src'),
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        complete: img.complete
      }));
    });

    console.log(`Found ${images.length} chart img elements on page:`, images);

    if (images.length === 0) {
      console.error(`FAILED: No chart images found on ${item.url}`);
      allPassed = false;
    } else {
      const valid = images.every(img => img.complete && img.naturalWidth > 0 && img.naturalHeight > 0);
      if (!valid) {
        console.error(`FAILED: Some images failed to load properly on ${item.url}`);
        allPassed = false;
      } else {
        console.log(`PASSED: All chart images rendered with full natural dimensions on ${item.name}!`);
      }
    }
  }

  // Check the main hub page /food-safety-templates
  console.log('\nNavigating to /food-safety-templates hub to verify chart filter & ebook removal...');
  await page.goto('http://localhost:3000/food-safety-templates', { waitUntil: 'networkidle' });

  // 1. Verify ebook option does NOT exist
  const ebookOption = await page.$('option[value="ebook"]');
  if (ebookOption) {
    console.error('FAILED: Ebook option still present in dropdown!');
    allPassed = false;
  } else {
    console.log('PASSED: Ebook option successfully removed from dropdown.');
  }

  // 2. Filter by Chart (45)
  await page.selectOption('select#filter-type', 'chart');
  await page.waitForTimeout(1000);

  // Scroll to bottom to trigger lazy loading
  await page.evaluate(async () => {
    for (let i = 0; i < 10; i++) {
      window.scrollBy(0, 1000);
      await new Promise(r => setTimeout(r, 200));
    }
  });
  await page.waitForTimeout(1000);

  const hubCharts = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('article, .group'));
    const chartImgs = Array.from(document.querySelectorAll('img[src*="/templates/charts/"]'));
    return {
      cardCount: cards.length,
      chartImgCount: chartImgs.length,
      allComplete: chartImgs.every(img => img.complete && img.naturalWidth > 0)
    };
  });

  console.log('Hub chart filter result:', hubCharts);
  if (hubCharts.chartImgCount >= 40 && hubCharts.allComplete) {
    console.log('PASSED: Hub chart filter successfully loaded all cleaned chart thumbnails!');
  } else {
    console.error('FAILED: Hub chart filter check failed:', hubCharts);
    allPassed = false;
  }

  // Take screenshot of one chart detail page to verify artifact
  await page.goto('http://localhost:3000/food-safety-templates/walk-in-cooler-food-storage-chart', { waitUntil: 'networkidle' });
  const screenshotPath = path.resolve(__dirname, 'walkin_chart_detail_verification.png');
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log(`Saved screenshot to ${screenshotPath}`);

  await browser.close();

  if (allPassed) {
    console.log('\nALL CHARTS & EBOOK REMOVAL UI VERIFICATIONS PASSED 100%!');
    process.exit(0);
  } else {
    console.error('\nSOME CHECKS FAILED!');
    process.exit(1);
  }
}

testChartsAndEbooks().catch(err => {
  console.error(err);
  process.exit(1);
});
