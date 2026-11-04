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

server.listen(3461, async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3461/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  const matchedRules = await page.evaluate(() => {
    const el = document.querySelector('.slick-prev-custom svg');
    const matched = [];
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (el.matches(rule.selectorText)) {
            matched.push({ selector: rule.selectorText, cssText: rule.cssText });
          }
        }
      } catch (e) {}
    }
    return matched;
  });

  console.log('Rules matching .slick-prev-custom svg:');
  console.log(JSON.stringify(matchedRules, null, 2));

  await browser.close();
  server.close();
});
