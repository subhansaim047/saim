const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const baseDir = path.resolve('public/thejacketmaker');
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath.startsWith('/thejacketmaker/')) {
    reqPath = reqPath.slice('/thejacketmaker'.length);
  }
  let filePath = path.join(baseDir, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml'
    };
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found: ' + req.url);
  }
});

server.listen(3456, async () => {
  console.log('Server running at http://localhost:3456');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const artifactDir = 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4';

  try {
    // 1. TEST AS FEATURED IN (QUOTE SLIDER)
    console.log('\n--- VERIFYING QUOTE SLIDER ---');
    await page.goto('http://localhost:3456/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Scroll to AS FEATURED IN
    const quoteSection = await page.$('.quotes-carousel');
    if (quoteSection) {
      await quoteSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const quote1 = await page.$eval('.quotes-carousel .slick-current', el => el.innerText.trim()).catch(() => 'NONE');
      console.log('Initial Centered Quote:', JSON.stringify(quote1));

      // Click next
      const nextBtn = await page.$('.slick-next-custom');
      if (nextBtn) {
        await nextBtn.click();
        await page.waitForTimeout(600);
        const quote2 = await page.$eval('.quotes-carousel .slick-current', el => el.innerText.trim()).catch(() => 'NONE');
        console.log('After Next Click Quote:', JSON.stringify(quote2));
      }

      const qBox = await quoteSection.boundingBox();
      if (qBox) {
        await page.screenshot({
          path: path.join(artifactDir, 'proof_quote_slider_centered.png'),
          clip: {
            x: Math.max(0, qBox.x - 20),
            y: Math.max(0, qBox.y - 40),
            width: Math.min(1440, qBox.width + 40),
            height: qBox.height + 120
          }
        });
        console.log('Saved proof_quote_slider_centered.png');
      }
    }

    // 2. TEST HERO SLIDESHOW
    console.log('\n--- VERIFYING HERO SLIDESHOW ---');
    await page.goto('http://localhost:3456/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    const slide1Title = await page.$eval('.slideshow .slide.slick-current h2', el => el.innerText.trim()).catch(() => 'NONE');
    console.log('Hero Slide 1 Title:', slide1Title);

    // Click next on Hero
    const heroNext = await page.$('.slideshow .slick-next');
    if (heroNext) {
      await heroNext.click();
      await page.waitForTimeout(600);
      const slide2Title = await page.$eval('.slideshow .slide.slick-current h2', el => el.innerText.trim()).catch(() => 'NONE');
      console.log('Hero Slide 2 Title after click:', slide2Title);
    }

    await page.screenshot({
      path: path.join(artifactDir, 'proof_hero_slide2.png'),
      clip: { x: 0, y: 0, width: 1440, height: 600 }
    });
    console.log('Saved proof_hero_slide2.png');

    // 3. TEST KEYCHAIN COLLECTION AND PRODUCT
    console.log('\n--- VERIFYING KEYCHAIN COLLECTION & PRODUCT ---');
    await page.goto('http://localhost:3456/collections/leather-keychains/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    const kcCards = await page.$$eval('.card__heading a', els => els.map(e => ({ text: e.innerText.trim(), href: e.getAttribute('href') })));
    console.log('Keychain collection items found:', kcCards.length);
    console.log('Sample keychain items:', kcCards.slice(0, 4));

    await page.screenshot({
      path: path.join(artifactDir, 'proof_keychains_collection_fixed.png'),
      clip: { x: 0, y: 0, width: 1440, height: 900 }
    });
    console.log('Saved proof_keychains_collection_fixed.png');

    // Click first keychain
    await page.goto('http://localhost:3456/products/adkins-black-leather-keychain/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    const prodTitle = await page.$eval('h1', el => el.innerText.trim()).catch(() => 'NONE');
    console.log('Keychain Product Page H1:', prodTitle);

    const mainImgSrc = await page.$eval('.main-image img', el => el.getAttribute('src')).catch(() => 'NONE');
    console.log('Keychain Product Main Image:', mainImgSrc);

    const hasJacketText = await page.evaluate(() => {
      const text = document.body.innerText;
      return text.includes('Cuffs Style: Zipper') || text.includes('Band with snap button');
    });
    console.log('Has Erroneous Jacket Text:', hasJacketText);

    await page.screenshot({
      path: path.join(artifactDir, 'proof_keychain_product_fixed.png'),
      clip: { x: 0, y: 0, width: 1440, height: 900 }
    });
    console.log('Saved proof_keychain_product_fixed.png');

  } catch (err) {
    console.error('Error during test:', err);
  } finally {
    await browser.close();
    server.close();
    process.exit(0);
  }
});
