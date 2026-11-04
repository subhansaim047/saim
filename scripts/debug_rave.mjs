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
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml'
  };

  const server = http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    let filePath = path.join(root, 'public', reqPath);
    if (!fs.existsSync(filePath)) filePath = path.join(root, reqPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream', 'Access-Control-Allow-Origin': '*' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  });

  return new Promise((resolve) => server.listen(port, () => resolve(server)));
}

async function main() {
  const server = await createServer(4001);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  page.on('console', msg => console.log('BROWSER LOG:', msg.type(), msg.text()));

  await page.goto('http://localhost:4001/thejacketmaker/products/rave-black-leather-biker-jacket/index.html', { waitUntil: 'networkidle' });
  
  const domInfo = await page.evaluate(() => {
    const thumbs = Array.from(document.querySelectorAll('.thumbnails a'));
    const slides = Array.from(document.querySelectorAll('.product-slideshow .slide'));
    const videos = Array.from(document.querySelectorAll('video'));
    return {
      thumbsLength: thumbs.length,
      thumbsHTML: thumbs.map(t => ({ class: t.className, href: t.href, html: t.outerHTML.slice(0, 150) })),
      slidesLength: slides.length,
      slidesHTML: slides.map(s => ({ class: s.className, html: s.outerHTML.slice(0, 150) })),
      videosLength: videos.length
    };
  });
  console.log('DOM Info:', JSON.stringify(domInfo, null, 2));
  console.log('Errors:', errors);

  await browser.close();
  server.close();
}

main().catch(console.error);
