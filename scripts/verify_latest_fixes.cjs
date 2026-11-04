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
    '.svg': 'image/svg+xml'
  };
  res.writeHead(200, { 'Content-Type': mimes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(3466, async () => {
  const browser = await chromium.launch();

  // --- 1. Desktop Header Test ---
  const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktopPage.goto('http://localhost:3466/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await desktopPage.waitForTimeout(1000);

  const desktopHeader = await desktopPage.$('.logo-area');
  if (desktopHeader) {
    await desktopHeader.screenshot({ path: 'audit/verify_desktop_header_vertical_logo.png' });
    console.log('Saved audit/verify_desktop_header_vertical_logo.png');
  }

  // --- 2. Mobile Header & Homepage Test (390 x 844) ---
  const mobilePage = await browser.newPage({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1'
  });
  await mobilePage.goto('http://localhost:3466/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await mobilePage.waitForTimeout(1000);

  // Mobile Header Screenshot
  await mobilePage.screenshot({ path: 'audit/verify_mobile_header_clean.png', clip: { x: 0, y: 0, width: 390, height: 160 } });
  console.log('Saved audit/verify_mobile_header_clean.png');

  // --- 3. Mobile Product Page Test (Dean Brown) ---
  await mobilePage.goto('http://localhost:3466/thejacketmaker/products/dean-brown-leather-biker-jacket/index.html', { waitUntil: 'domcontentloaded' });
  await mobilePage.waitForTimeout(1000);

  await mobilePage.screenshot({ path: 'audit/verify_mobile_prod_gallery_clean.png', clip: { x: 0, y: 0, width: 390, height: 750 } });
  console.log('Saved audit/verify_mobile_prod_gallery_clean.png');

  // Scroll down to check options and tabs on mobile
  await mobilePage.evaluate(() => window.scrollBy(0, 500));
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({ path: 'audit/verify_mobile_prod_options_clean.png', clip: { x: 0, y: 0, width: 390, height: 750 } });
  console.log('Saved audit/verify_mobile_prod_options_clean.png');

  await browser.close();
  server.close();
  console.log('Verification finished.');
});
