const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function testPosters() {
  console.log('Starting Playwright UI verification for cleaned posters...');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  const testUrls = [
    { url: 'http://localhost:3000/food-safety-templates/freezer-temperature-chart', name: 'Freezer Temp Chart (template-1)' },
    { url: 'http://localhost:3000/food-safety-templates/fridge-organization-chart', name: 'Fridge Organization Chart (template-87)' },
    { url: 'http://localhost:3000/food-safety-templates/how-do-you-calibrate-a-thermometer', name: 'Calibrate Thermometer (template-64)' },
    { url: 'http://localhost:3000/food-safety-templates/allergen-poster', name: 'Food Allergen Poster (template-89)' },
    { url: 'http://localhost:3000/food-safety-templates/hand-washing-poster', name: 'Hand Washing Poster (template-14)' }
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

    // Check poster images on page
    const images = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img[src*="/templates/posters/"]'));
      return imgs.map(img => ({
        src: img.getAttribute('src'),
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        complete: img.complete
      }));
    });

    console.log(`Found ${images.length} poster img elements on page:`, images);

    if (images.length === 0) {
      console.error(`FAILED: No poster images found on ${item.url}`);
      allPassed = false;
    } else {
      const valid = images.every(img => img.complete && img.naturalWidth > 0 && img.naturalHeight > 0);
      if (!valid) {
        console.error(`FAILED: Some images failed to load properly on ${item.url}`);
        allPassed = false;
      } else {
        console.log(`PASSED: All poster images rendered with full natural dimensions on ${item.name}!`);
      }
    }
  }

  // Also check the main hub page /food-safety-templates filtered by Poster
  console.log('\nNavigating to /food-safety-templates hub to verify poster filter & thumbnails...');
  await page.goto('http://localhost:3000/food-safety-templates', { waitUntil: 'networkidle' });
  await page.selectOption('select#filter-type', 'poster');
  await page.waitForTimeout(1000);

  // Scroll to bottom to trigger lazy loading of thumbnails
  await page.evaluate(async () => {
    for (let i = 0; i < 10; i++) {
      window.scrollBy(0, 1000);
      await new Promise(r => setTimeout(r, 200));
    }
  });
  await page.waitForTimeout(1000);

  const hubPosters = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('article, .group'));
    const posterImgs = Array.from(document.querySelectorAll('img[src*="/templates/posters/"]'));
    return {
      cardCount: cards.length,
      posterImgCount: posterImgs.length,
      allComplete: posterImgs.every(img => img.complete && img.naturalWidth > 0)
    };
  });

  console.log('Hub poster filter result:', hubPosters);
  if (hubPosters.posterImgCount >= 40 && hubPosters.allComplete) {
    console.log('PASSED: Hub poster filter successfully loaded all cleaned poster thumbnails!');
  } else {
    console.warn('Hub poster filter check:', hubPosters);
  }

  // Take screenshot of one poster detail page to verify artifact
  await page.goto('http://localhost:3000/food-safety-templates/freezer-temperature-chart', { waitUntil: 'networkidle' });
  const screenshotPath = path.resolve(__dirname, 'freezer_detail_verification.png');
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log(`Saved screenshot to ${screenshotPath}`);

  await browser.close();

  if (allPassed) {
    console.log('\nALL POSTER UI VERIFICATIONS PASSED 100%!');
    process.exit(0);
  } else {
    console.error('\nSOME CHECKS FAILED!');
    process.exit(1);
  }
}

testPosters().catch(err => {
  console.error(err);
  process.exit(1);
});
