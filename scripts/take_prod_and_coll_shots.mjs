import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath.endsWith('/')) reqPath += 'index.html';
  const filePath = path.join(process.cwd(), 'public', reqPath.replace(/^\//, ''));
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found: ' + reqPath);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(8099, async () => {
  console.log('Server started on 8099');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 2500 } });
  
  await page.goto('http://127.0.0.1:8099/thejacketmaker/products/ionic-black-leather-jacket/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/inspect_product_page.png', fullPage: false });
  console.log('Product page screenshot taken');

  // Also check collection page
  await page.goto('http://127.0.0.1:8099/thejacketmaker/collections/mens-leather-jackets/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/inspect_collection_page.png', fullPage: false });
  console.log('Collection page screenshot taken');

  await browser.close();
  server.close();
});
