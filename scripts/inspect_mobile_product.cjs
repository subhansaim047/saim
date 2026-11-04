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

server.listen(3465, async () => {
  const browser = await chromium.launch();
  // iPhone 14 viewport (390 x 844)
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1'
  });

  // Navigate to Dean Brown Leather Biker Jacket
  await page.goto('http://localhost:3465/thejacketmaker/products/dean-brown-leather-biker-jacket/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);

  // Screenshot 1: Mobile top & gallery
  await page.screenshot({ path: 'audit/mobile_prod_top.png', clip: { x: 0, y: 0, width: 390, height: 800 } });
  console.log('Saved audit/mobile_prod_top.png');

  // Screenshot 2: Mobile scroll down (product options & add to cart)
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'audit/mobile_prod_options.png', clip: { x: 0, y: 0, width: 390, height: 844 } });
  console.log('Saved audit/mobile_prod_options.png');

  // Screenshot 3: Mobile scroll down further (tabs & details)
  await page.evaluate(() => window.scrollBy(0, 800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'audit/mobile_prod_tabs.png', clip: { x: 0, y: 0, width: 390, height: 844 } });
  console.log('Saved audit/mobile_prod_tabs.png');

  // Also check homepage mobile
  await page.goto('http://localhost:3465/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'audit/mobile_home_top.png', clip: { x: 0, y: 0, width: 390, height: 800 } });
  console.log('Saved audit/mobile_home_top.png');

  await browser.close();
  server.close();
});
