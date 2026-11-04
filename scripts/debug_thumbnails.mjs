import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';

function createServer(port) {
  const root = path.resolve('.');
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.mjs': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf'
  };

  const server = http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    
    let filePath = path.join(root, 'public', reqPath);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(root, reqPath);
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const mime = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mime, 'Access-Control-Allow-Origin': '*' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  });

  return new Promise((resolve) => {
    server.listen(port, () => resolve(server));
  });
}

async function debugThumbnails() {
  const PORT = 3893;
  const server = await createServer(PORT);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto(`http://localhost:${PORT}/thejacketmaker/products/ionic-black-leather-jacket/index.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // Take screenshot of thumbnails area
  const thumbsBox = await page.locator('.thumbnails').boundingBox();
  if (thumbsBox) {
    await page.screenshot({
      path: 'audit/debug_thumbnails_rendered.png',
      clip: {
        x: Math.max(0, thumbsBox.x - 10),
        y: Math.max(0, thumbsBox.y - 10),
        width: Math.min(thumbsBox.width + 20, 300),
        height: Math.min(thumbsBox.height + 20, 800)
      }
    });
    console.log('Saved audit/debug_thumbnails_rendered.png');
  }

  // Inspect thumbnail elements
  const info = await page.evaluate(() => {
    const thumbs = Array.from(document.querySelectorAll('.thumbnails a'));
    return thumbs.map(t => {
      const img = t.querySelector('img');
      return {
        href: t.href,
        innerHTML: t.innerHTML,
        imgSrc: img ? img.src : null,
        imgNaturalWidth: img ? img.naturalWidth : null,
        imgComplete: img ? img.complete : null,
        imgAlt: img ? img.alt : null
      };
    });
  });

  console.log('Thumbnail inspection:', JSON.stringify(info.slice(0, 3), null, 2));

  await browser.close();
  server.close();
}

debugThumbnails();
