const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

// Simple static file server
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
      '.svg': 'image/svg+xml'
    };
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(3344, async () => {
  console.log('Test server running at http://localhost:3344');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

  await page.goto('http://localhost:3344/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  const homeMetrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    innerWidth: window.innerWidth,
    hasHorizontalScroll: document.documentElement.scrollWidth > window.innerWidth
  }));
  console.log('Homepage Mobile HTTP:', homeMetrics);

  await page.goto('http://localhost:3344/products/ionic-black-leather-jacket/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  const prodMetrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    innerWidth: window.innerWidth,
    hasHorizontalScroll: document.documentElement.scrollWidth > window.innerWidth
  }));
  console.log('Product Mobile HTTP:', prodMetrics);

  await browser.close();
  server.close();
  process.exit(0);
});
