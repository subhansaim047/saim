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

server.listen(3463, async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3463/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // Apply fix in page
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.textContent = `
      .quotes-carousel .slick-prev-custom svg,
      .quotes-carousel .slick-next-custom svg {
        display: inline-block !important;
        width: 20px !important;
        min-width: 20px !important;
        height: 20px !important;
        min-height: 20px !important;
        stroke: #111111 !important;
        fill: none !important;
        stroke-width: 2.5px !important;
      }
      .quotes-carousel .slick-prev-custom:hover svg,
      .quotes-carousel .slick-next-custom:hover svg {
        stroke: #ffffff !important;
      }
    `;
    document.head.appendChild(style);
  });

  const svgRect = await page.$eval('.slick-prev-custom svg', el => el.getBoundingClientRect());
  console.log('Fixed svgRect:', svgRect);

  const prevBtn = await page.$('.slick-prev-custom');
  await prevBtn.screenshot({ path: 'audit/test_btn_fixed.png' });
  console.log('Saved audit/test_btn_fixed.png');

  await browser.close();
  server.close();
});
