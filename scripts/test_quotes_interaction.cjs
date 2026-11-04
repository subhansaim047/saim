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
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp'
  };
  res.writeHead(200, { 'Content-Type': mimes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(3457, async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3457/thejacketmaker/index.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Click next button 5 times and screenshot each
  for (let i = 1; i <= 5; i++) {
    const nextBtn = await page.$('.slick-next-custom');
    if (nextBtn) {
      await nextBtn.click();
      await page.waitForTimeout(500);
      const section = await page.$('.section-quote-slider');
      if (section) {
        await section.screenshot({ path: `audit/quote_click_${i}.png` });
        console.log(`Saved audit/quote_click_${i}.png`);
      }
    }
  }

  await browser.close();
  server.close();
  console.log('Finished testing quotes clicks.');
});
