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

server.listen(3464, async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3464/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // 1. Header screenshot
  const header = await page.$('.logo-area');
  if (header) {
    await header.screenshot({ path: 'audit/final_header_logo.png' });
    console.log('Saved final_header_logo.png');
  }

  // 2. Quotes section with buttons
  const quotesSec = await page.$('.section-quote-slider');
  if (quotesSec) {
    await quotesSec.screenshot({ path: 'audit/final_quotes_slider.png' });
    console.log('Saved final_quotes_slider.png');
  }

  // 3. Footer screenshot
  const footer = await page.$('#shopify-section-footer');
  if (footer) {
    await footer.screenshot({ path: 'audit/final_footer_logo.png' });
    console.log('Saved final_footer_logo.png');
  }

  // 4. Hover GIFTING
  const giftingLink = await page.$('#main-nav a[href*="gift-set"], #main-nav a[href*="gifts-for-him"]');
  if (giftingLink) {
    const parent = await giftingLink.evaluateHandle(el => el.closest('.navigation__item--with-children'));
    if (parent) {
      await parent.hover();
      await page.waitForTimeout(400);
      await page.screenshot({ path: 'audit/final_gifting_dropdown.png', clip: { x: 300, y: 120, width: 850, height: 420 } });
      console.log('Saved final_gifting_dropdown.png');
    }
  }

  await browser.close();
  server.close();
  console.log('All final screenshots captured successfully.');
});
