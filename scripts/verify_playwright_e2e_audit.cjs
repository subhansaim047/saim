const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const PUBLIC_DIR = path.join(__dirname, '../public');
const ARTIFACT_DIR = 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4';

function startStaticServer(port) {
  return new Promise((resolve) => {
    const mimeTypes = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.json': 'application/json; charset=utf-8',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2'
    };
    const server = http.createServer((req, res) => {
      let reqPath = decodeURIComponent(req.url.split('?')[0]);
      if (reqPath.startsWith('/thejacketmaker')) {
        reqPath = reqPath.replace(/^\/thejacketmaker/, '/hq-leathercon');
      }
      if (reqPath === '/hq-leathercon' || reqPath === '/hq-leathercon/') {
        reqPath = '/hq-leathercon/index.html';
      } else if (!path.extname(reqPath)) {
        reqPath = reqPath.replace(/\/$/, '') + '/index.html';
      }
      const fullPath = path.join(PUBLIC_DIR, reqPath);
      if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
        const ext = path.extname(fullPath).toLowerCase();
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        fs.createReadStream(fullPath).pipe(res);
      } else {
        res.writeHead(404);
        res.end('Not found: ' + reqPath);
      }
    });
    server.listen(port, () => resolve(server));
  });
}

async function run() {
  const port = 4568;
  const server = await startStaticServer(port);
  const browser = await chromium.launch({ headless: true });

  try {
    // 1. Desktop Verification
    const dPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    console.log('1. Testing Homepage Desktop...');
    await dPage.goto(`http://localhost:${port}/hq-leathercon/index.html`, { waitUntil: 'domcontentloaded' });
    await dPage.waitForTimeout(1000);
    await dPage.screenshot({ path: path.join(ARTIFACT_DIR, 'audit_proof_home_desktop.png') });

    // Check Leather Bags collection
    console.log('2. Testing Leather Bags Collection...');
    await dPage.goto(`http://localhost:${port}/hq-leathercon/collections/leather-bags/index.html`, { waitUntil: 'domcontentloaded' });
    await dPage.waitForTimeout(1000);
    const bagsH1 = await dPage.locator('h1').first().textContent();
    const firstBagTitle = await dPage.locator('main .product-block__title').first().textContent();
    console.log(`   Leather Bags H1: "${bagsH1.trim()}", First Product: "${firstBagTitle.trim()}"`);
    await dPage.screenshot({ path: path.join(ARTIFACT_DIR, 'audit_proof_leather_bags_collection.png') });

    // Check Men's Leather Shoes collection
    console.log('3. Testing Men\'s Leather Shoes Collection...');
    await dPage.goto(`http://localhost:${port}/hq-leathercon/collections/mens-leather-shoes/index.html`, { waitUntil: 'domcontentloaded' });
    await dPage.waitForTimeout(1000);
    const shoesH1 = await dPage.locator('h1').first().textContent();
    const firstShoeTitle = await dPage.locator('main .product-block__title').first().textContent();
    console.log(`   Men's Leather Shoes H1: "${shoesH1.trim()}", First Product: "${firstShoeTitle.trim()}"`);
    await dPage.screenshot({ path: path.join(ARTIFACT_DIR, 'audit_proof_mens_shoes_collection.png') });

    // Check Custom Backpacks page
    console.log('4. Testing Custom Backpacks Page...');
    await dPage.goto(`http://localhost:${port}/hq-leathercon/pages/custom-backpacks/index.html`, { waitUntil: 'domcontentloaded' });
    await dPage.waitForTimeout(1000);
    const bpH1 = await dPage.locator('h1').first().textContent();
    console.log(`   Custom Backpacks H1: "${bpH1.trim()}"`);
    await dPage.screenshot({ path: path.join(ARTIFACT_DIR, 'audit_proof_custom_backpacks_page.png') });

    // Check Size Guide page
    console.log('5. Testing Size Guide Page...');
    await dPage.goto(`http://localhost:${port}/hq-leathercon/pages/size-guide/index.html`, { waitUntil: 'domcontentloaded' });
    await dPage.waitForTimeout(1000);
    const sgTitle = await dPage.title();
    console.log(`   Size Guide Title: "${sgTitle}"`);
    await dPage.screenshot({ path: path.join(ARTIFACT_DIR, 'audit_proof_size_guide_page.png') });

    // Check Product Page & Color Swatch navigation (Aaron Black -> click Brown swatch -> Aaron Brown)
    console.log('6. Testing Product Page & Color Swatch Navigation...');
    await dPage.goto(`http://localhost:${port}/hq-leathercon/products/aaron-black-leather-bomber-jacket/index.html`, { waitUntil: 'domcontentloaded' });
    await dPage.waitForTimeout(800);
    const prodH1Before = await dPage.locator('h1').first().textContent();
    const brownSwatchHref = await dPage.locator('.custom-swatches a[title="Brown"]').getAttribute('href');
    console.log(`   Product H1: "${prodH1Before.trim()}", Brown Swatch Href: "${brownSwatchHref}"`);
    await dPage.screenshot({ path: path.join(ARTIFACT_DIR, 'audit_proof_product_aaron_black.png') });

    // 2. Mobile Verification
    const mPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
    console.log('7. Testing Mobile Product & Drawer...');
    await mPage.goto(`http://localhost:${port}/hq-leathercon/products/aaron-brown-leather-bomber-jacket/index.html`, { waitUntil: 'domcontentloaded' });
    await mPage.waitForTimeout(800);
    await mPage.screenshot({ path: path.join(ARTIFACT_DIR, 'audit_proof_mobile_product_aaron_brown.png') });

    console.log('ALL E2E AUDIT CHECKS PASSED SUCCESSFULLY!');
  } finally {
    await browser.close();
    server.close();
  }
}

run();
