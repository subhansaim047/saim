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

server.listen(8094, async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://127.0.0.1:8094/thejacketmaker/products/ionic-black-leather-jacket/index.html');
  await page.waitForTimeout(1000);

  const hierarchy = await page.evaluate(() => {
    const v = document.querySelector('.main-image video');
    if (!v) return 'No video';
    let el = v;
    let chain = [];
    while (el && el !== document.body) {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      chain.push({
        tag: el.tagName,
        id: el.id,
        className: el.className,
        rect: { x: rect.x, y: rect.y, w: rect.width, h: rect.height },
        style: {
          display: style.display,
          position: style.position,
          left: style.left,
          transform: style.transform,
          overflow: style.overflow
        }
      });
      el = el.parentElement;
    }
    return chain;
  });
  console.log('Video ancestor chain:', JSON.stringify(hierarchy, null, 2));

  await browser.close();
  server.close();
});
