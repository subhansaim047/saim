const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const baseDir = path.resolve('public');
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  let filePath = path.join(baseDir, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not found: ' + reqPath);
    return;
  }
  const ext = path.extname(filePath).toLowerCase();
  const mimes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp'
  };
  res.writeHead(200, { 'Content-Type': mimes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(3459, async () => {
  const browser = await chromium.launch();
  
  // 1. Desktop 1440px
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3459/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);

  // Take screenshot of header logo
  const logoElem = await page.$('.logo-area');
  if (logoElem) {
    await logoElem.screenshot({ path: 'audit/verified_header_logo_prominent.png' });
    console.log('Saved audit/verified_header_logo_prominent.png');
  }

  // Take screenshot of quotes section
  const quotesSec = await page.$('.section-quote-slider');
  if (quotesSec) {
    await quotesSec.screenshot({ path: 'audit/verified_quotes_with_arrows.png' });
    console.log('Saved audit/verified_quotes_with_arrows.png');
  }

  // Hover over GIFTING to test expanded menu
  const giftingTab = await page.$('#main-nav a[href*="gift"]');
  if (giftingTab) {
    await giftingTab.hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'audit/verified_gifting_hover.png', clip: { x: 300, y: 100, width: 900, height: 400 } });
    console.log('Saved audit/verified_gifting_hover.png');
  }

  // 2. Mobile 390px (iPhone 14)
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobilePage.goto('http://localhost:3459/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await mobilePage.waitForTimeout(1500);

  await mobilePage.screenshot({ path: 'audit/verified_mobile_header.png', clip: { x: 0, y: 0, width: 390, height: 200 } });
  console.log('Saved audit/verified_mobile_header.png');

  await browser.close();
  server.close();
  console.log('Verification run complete.');
});
