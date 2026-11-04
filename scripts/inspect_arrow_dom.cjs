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

server.listen(3460, async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3460/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  const prevHtml = await page.$eval('.slick-prev-custom', el => el.outerHTML);
  const nextHtml = await page.$eval('.slick-next-custom', el => el.outerHTML);
  console.log('Prev button outerHTML:', prevHtml);
  console.log('Next button outerHTML:', nextHtml);

  // Check computed style of SVG
  const svgStyle = await page.$eval('.slick-prev-custom svg', el => {
    const cs = window.getComputedStyle(el);
    return {
      display: cs.display,
      width: cs.width,
      height: cs.height,
      stroke: cs.stroke,
      fill: cs.fill,
      visibility: cs.visibility,
      opacity: cs.opacity
    };
  });
  console.log('SVG computed style:', svgStyle);

  await browser.close();
  server.close();
});
