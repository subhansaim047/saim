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

server.listen(8095, async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://127.0.0.1:8095/thejacketmaker/products/ionic-black-leather-jacket/index.html');
  await page.waitForTimeout(2000);

  const videoThumb = page.locator('.thumbnails a:has-text("Watch Video")');
  await videoThumb.first().click();
  await page.waitForTimeout(1000);

  const box = await page.evaluate(() => {
    const v = document.querySelector('.main-image video');
    if (!v) return null;
    const rect = v.getBoundingClientRect();
    const pRect = v.parentElement?.getBoundingClientRect();
    const slideRect = v.closest('.slide')?.getBoundingClientRect();
    return {
      vRect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
      pRect: pRect ? { x: pRect.x, y: pRect.y, width: pRect.width, height: pRect.height } : null,
      slideRect: slideRect ? { x: slideRect.x, y: slideRect.y, width: slideRect.width, height: slideRect.height } : null,
      pClass: v.parentElement?.className,
      slideStyle: v.closest('.slide')?.getAttribute('style'),
      pStyle: v.parentElement?.getAttribute('style')
    };
  });
  console.log('Video bounding boxes:', JSON.stringify(box, null, 2));

  await browser.close();
  server.close();
});
