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

server.listen(8098, async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  // Test collection page click on sidebar
  await page.goto('http://127.0.0.1:8098/thejacketmaker/collections/mens-leather-jackets/index.html');
  await page.waitForTimeout(1000);

  // Click Color filter toggle
  const colorToggle = page.locator('.filter-group__heading:has-text("Color")');
  console.log('Color toggle count:', await colorToggle.count());
  if (await colorToggle.count() > 0) {
    await colorToggle.first().click();
    await page.waitForTimeout(500);
    const isVisible = await page.locator('.filter-group--2').first().isVisible();
    console.log('Color filter group visible after click:', isVisible);
  }

  // Click Bomber jackets in sidebar
  const bomberLink = page.locator('a:has-text("Men\'s Bomber Jackets")').first();
  console.log('Bomber link href:', await bomberLink.getAttribute('href'));
  await bomberLink.click();
  await page.waitForTimeout(1000);
  console.log('Current URL after click:', page.url());

  // Test product page color swatches and video thumbnail
  await page.goto('http://127.0.0.1:8098/thejacketmaker/products/ionic-black-leather-jacket/index.html');
  await page.waitForTimeout(1000);
  
  // Check video thumbnail
  const videoThumb = page.locator('.product-gallery__thumb:has-text("Watch Video"), a:has-text("Watch Video"), [data-media-id]:has-text("Watch Video")');
  console.log('Video thumb count:', await videoThumb.count());

  await browser.close();
  server.close();
});
