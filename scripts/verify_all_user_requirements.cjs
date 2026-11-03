const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath.endsWith('/')) reqPath += 'index.html';
  const filePath = path.join(process.cwd(), 'public', reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found: ' + reqPath);
  }
});

server.listen(0, async () => {
  const port = server.address().port;
  console.log('Playwright test server on port:', port);
  const browser = await chromium.launch({ headless: true });

  let allChecksPassed = true;

  async function verifyProductPage(urlPath, expectedTitleSubstr, screenshotName) {
    const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
    await page.goto('http://127.0.0.1:' + port + urlPath, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    const title = await page.locator('h1.title, h1').first().innerText();
    const price = await page.locator('.product-price__amount').first().innerText();
    const videos = await page.locator('video').count();
    const watchVideos = await page.locator('.watchvideo').count();
    const unboxing = await page.locator('text=Unboxing Experience').count();
    const pageText = await page.evaluate(() => document.body.innerText);

    const titleOk = title.toLowerCase().includes(expectedTitleSubstr.toLowerCase());
    const zeroVideos = videos === 0;
    const zeroWatchVideos = watchVideos === 0;
    const zeroUnboxing = unboxing === 0;
    const noOldBrand = !pageText.toLowerCase().includes('the jacket maker');

    console.log(`\nProduct [${urlPath}]:`);
    console.log(`  Title: "${title}" (Match: ${titleOk})`);
    console.log(`  Price: "${price}"`);
    console.log(`  Videos count: ${videos} (Pass: ${zeroVideos})`);
    console.log(`  Watch Video badges: ${watchVideos} (Pass: ${zeroWatchVideos})`);
    console.log(`  Unboxing sections: ${unboxing} (Pass: ${zeroUnboxing})`);
    console.log(`  No "The Jacket Maker" in body: ${noOldBrand}`);

    if (screenshotName) {
      const shotPath = `C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/${screenshotName}`;
      try {
        await page.screenshot({ path: shotPath, timeout: 8000 });
        console.log(`  Screenshot saved: ${shotPath}`);
      } catch (err) {
        console.log(`  Screenshot warning: ${err.message}`);
      }
    }

    if (!titleOk || !zeroVideos || !zeroWatchVideos || !zeroUnboxing || !noOldBrand) {
      allChecksPassed = false;
      console.error(`  FAIL ON: ${urlPath}`);
    }
    await page.close();
  }

  // 1. Check Homepage
  console.log('\n--- 1. Checking Homepage ---');
  const homePage = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  await homePage.goto('http://127.0.0.1:' + port + '/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await homePage.waitForTimeout(1000);

  const homeTitle = await homePage.title();
  console.log('Homepage title:', homeTitle);
  const homeBanner = await homePage.evaluate(() => {
    const b = document.querySelector('body > div:first-child');
    return b ? b.innerText : '';
  });
  console.log('Demo banner text:', homeBanner.slice(0, 100));
  try {
    await homePage.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/proof_home_hq_leathercon.png', timeout: 8000 });
  } catch (err) {
    console.log('Homepage screenshot notice:', err.message);
  }
  await homePage.close();

  // 2. Check Keychains Collection
  console.log('\n--- 2. Checking Keychains Collection ---');
  const colPage = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  await colPage.goto('http://127.0.0.1:' + port + '/thejacketmaker/collections/leather-keychains/index.html', { waitUntil: 'domcontentloaded' });
  await colPage.waitForTimeout(1000);

  const colTitle = await colPage.title();
  const colH1 = await colPage.locator('h1').first().innerText();
  console.log('Keychains col title:', colTitle, '| H1:', colH1);
  try {
    await colPage.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/proof_keychains_collection.png', timeout: 8000 });
  } catch (err) {
    console.log('Collection screenshot notice:', err.message);
  }

  // Click on first keychain link
  const firstKeychainLink = colPage.locator('.filters-adjacent .product-block a.product-link, .collection-listing .product-block a.product-link').first();
  const targetHref = await firstKeychainLink.getAttribute('href');
  console.log('First keychain link href from collection grid:', targetHref);
  await colPage.close();

  // 3. Test Products
  console.log('\n--- 3. Testing Flagship & Distinct Products ---');
  await verifyProductPage(targetHref, 'adkins', 'proof_keychain_product_page.png');
  await verifyProductPage('/thejacketmaker/products/dean-brown-leather-biker-jacket/index.html', 'dean', 'proof_dean_jacket_no_videos.png');
  await verifyProductPage('/thejacketmaker/products/ionic-black-leather-jacket/index.html', 'ionic', 'proof_ionic_jacket_no_videos.png');
  await verifyProductPage('/thejacketmaker/products/bernardi-black-leather-travel-wallet/index.html', 'bernardi', 'proof_wallet_no_videos.png');

  await browser.close();
  server.close();

  if (allChecksPassed) {
    console.log('\n===========================================');
    console.log('ALL VERIFICATIONS PASSED WITH 100% SUCCESS!');
    console.log('===========================================');
  } else {
    console.error('\nSOME CHECKS FAILED! Review logs above.');
    process.exitCode = 1;
  }
});
