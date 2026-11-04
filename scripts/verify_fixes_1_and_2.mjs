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

server.listen(8097, async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://127.0.0.1:8097/thejacketmaker/index.html');
  await page.waitForTimeout(2000);

  // 1. Screenshot Clearance Sale section
  const clearanceSection = page.locator('.ai-media-product-section-akznqrwvkzhirl2yzvaigenblocked980c2h3mqjh');
  if (await clearanceSection.count() > 0) {
    await clearanceSection.first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await clearanceSection.first().screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/verify_clearance_section.png' });
    console.log('Saved verify_clearance_section.png');
  }

  // 2. Screenshot bottom of the page (footer)
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/verify_footer_no_leak.png' });
  console.log('Saved verify_footer_no_leak.png');

  await browser.close();
  server.close();
});
