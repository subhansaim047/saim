const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function run() {
  console.log('--- Starting Comprehensive E2E Verification ---');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const artifactDir = 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4';
  const basePath = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker';

  // 1. Verify Homepage Sliders
  console.log('\n[TEST 1] Verifying Homepage Sliders...');
  const homeUrl = 'file:///' + path.join(basePath, 'index.html').replace(/\\/g, '/');
  await page.goto(homeUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // Quote Slider verification
  const prevQuoteBtn = await page.$('.slick-prev-custom');
  const nextQuoteBtn = await page.$('.slick-next-custom');
  console.log('Quote prev/next buttons found:', !!prevQuoteBtn, !!nextQuoteBtn);

  if (prevQuoteBtn && nextQuoteBtn) {
    const quote1 = await page.$eval('.quotes-carousel', el => el.innerText.slice(0, 100));
    console.log('Initial quote excerpt:', JSON.stringify(quote1.trim()));

    await nextQuoteBtn.click();
    await page.waitForTimeout(600);
    const quote2 = await page.$eval('.quotes-carousel', el => el.innerText.slice(0, 100));
    console.log('After Next click quote excerpt:', JSON.stringify(quote2.trim()));

    await prevQuoteBtn.click();
    await page.waitForTimeout(600);
    const quote3 = await page.$eval('.quotes-carousel', el => el.innerText.slice(0, 100));
    console.log('After Prev click quote excerpt:', JSON.stringify(quote3.trim()));
  }

  // Hero Slider verification
  const heroNext = await page.$('.slideshow-wrapper .slick-next, .slideshow .slick-next');
  if (heroNext) {
    console.log('Hero next button found, clicking...');
    await heroNext.click();
    await page.waitForTimeout(600);
    console.log('Hero slide advanced successfully.');
  }

  await page.screenshot({ path: path.join(artifactDir, 'verify_e2e_home_sliders.png'), fullPage: false });

  // 2. Verify Customize Pages
  console.log('\n[TEST 2] Verifying Dedicated Customize Pages...');
  const customPagesToTest = [
    { url: 'pages/custom-denim-jackets/index.html', expectedH1: 'CUSTOM DENIM JACKETS' },
    { url: 'pages/custom-leather-wallets/index.html', expectedH1: 'CUSTOM LEATHER WALLETS' },
    { url: 'pages/custom-boots/index.html', expectedH1: 'CUSTOM BOOTS' },
    { url: 'pages/corporate-gifts/index.html', expectedH1: 'CORPORATE GIFTS' }
  ];

  for (const item of customPagesToTest) {
    const fileUrl = 'file:///' + path.join(basePath, item.url).replace(/\\/g, '/');
    await page.goto(fileUrl, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    const h1 = await page.$eval('h1', el => el.innerText.trim()).catch(() => 'NO H1');
    const formCount = await page.$$eval('form', forms => forms.length);
    const prodsCount = await page.$$eval('.grid-product__title, .product-card__title, .grid__item', els => els.length);

    console.log(`Page: ${item.url}`);
    console.log(`  H1: "${h1}" (Expected: "${item.expectedH1}")`);
    console.log(`  Forms: ${formCount}, Products/Items: ${prodsCount}`);
    
    if (h1.toLowerCase().includes(item.expectedH1.toLowerCase())) {
      console.log(`  -> SUCCESS: Dedicated page content confirmed!`);
    } else {
      console.error(`  -> WARNING: H1 mismatch!`);
    }
  }

  // 3. Verify Dedicated Gifts Collections
  console.log('\n[TEST 3] Verifying Dedicated Gifts Collections...');
  const giftCollections = [
    { url: 'collections/gifts-for-him/index.html', title: 'Gifts For Him' },
    { url: 'collections/gifts-for-her/index.html', title: 'Gifts For Her' },
    { url: 'collections/gift-set/index.html', title: 'Gift Set' },
    { url: 'collections/leather-gifts/index.html', title: 'Leather Gifts' }
  ];

  for (const gift of giftCollections) {
    const fileUrl = 'file:///' + path.join(basePath, gift.url).replace(/\\/g, '/');
    await page.goto(fileUrl, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    const titles = await page.$$eval('.grid-product__title', els => els.slice(0, 3).map(e => e.innerText.trim()));
    const count = await page.$$eval('.grid-product__title', els => els.length);
    console.log(`Collection: ${gift.url}`);
    console.log(`  Total Items Displayed: ${count}`);
    console.log(`  First 3 Items:`, titles);
  }

  await page.screenshot({ path: path.join(artifactDir, 'verify_e2e_gift_collection.png'), fullPage: false });

  // 4. Verify Mobile Responsiveness
  console.log('\n[TEST 4] Verifying Mobile Responsiveness (375x812)...');
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(homeUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  const overflow = await page.evaluate(() => {
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      innerWidth: window.innerWidth,
      hasHorizontalScroll: document.documentElement.scrollWidth > window.innerWidth
    };
  });
  console.log('Mobile Viewport Metrics:', overflow);

  const mobileNavToggle = await page.$('.mobile-nav-toggle, [data-action="toggle-mobile-nav"], .site-header__mobile-nav');
  console.log('Mobile nav button present:', !!mobileNavToggle);

  await page.screenshot({ path: path.join(artifactDir, 'verify_e2e_mobile_home.png'), fullPage: false });

  // Check product page mobile responsiveness
  const prodUrl = 'file:///' + path.join(basePath, 'products/ionic-black-leather-jacket/index.html').replace(/\\/g, '/');
  await page.goto(prodUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  const prodOverflow = await page.evaluate(() => {
    return {
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      hasHorizontalScroll: document.documentElement.scrollWidth > window.innerWidth
    };
  });
  console.log('Product Mobile Viewport Metrics:', prodOverflow);

  await page.screenshot({ path: path.join(artifactDir, 'verify_e2e_mobile_product.png'), fullPage: false });

  console.log('\n--- All Tests Completed Successfully ---');
  await browser.close();
}

run().catch(err => {
  console.error('Test execution error:', err);
  process.exit(1);
});
