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
  '.mp4': 'video/mp4',
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

server.listen(8087, async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // 1. Test Swatch Interaction on Product Page
  await page.goto('http://127.0.0.1:8087/thejacketmaker/products/ionic-black-leather-jacket/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  const swatches = page.locator('.custom-swatch a');
  console.log('Total color swatches on product page:', await swatches.count());

  // Click 3rd swatch (Brown)
  if (await swatches.count() > 2) {
    await swatches.nth(2).click();
    await page.waitForTimeout(500);
    const colorText = await page.locator('legend.label').first().textContent();
    console.log('Color label text after clicking 3rd swatch:', colorText);
  }

  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/verify_product_swatch_click.png' });
  console.log('Saved verify_product_swatch_click.png');

  // 2. Test Collection Page Category Navigation & Filter
  await page.goto('http://127.0.0.1:8087/thejacketmaker/collections/mens-leather-jackets/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // Initial products
  const initialTitles = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.filters-adjacent .product-block__title')).slice(0, 3).map(el => el.textContent.trim());
  });
  console.log('Initial collection products:', initialTitles);

  // Click Bomber Jackets in sidebar
  const bomberLink = page.locator('a:has-text("Men\'s Bomber Jackets")').first();
  await bomberLink.click();
  await page.waitForTimeout(1500);

  const bomberTitles = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.filters-adjacent .product-block__title')).slice(0, 3).map(el => el.textContent.trim());
  });
  console.log('Bomber collection products after sidebar click:', bomberTitles);

  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/verify_collection_category_switch.png' });
  console.log('Saved verify_collection_category_switch.png');

  await browser.close();
  server.close();
});
