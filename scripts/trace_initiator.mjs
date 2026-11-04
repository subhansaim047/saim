import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 8899;
const PUBLIC_DIR = path.resolve('public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/idreesleather' || reqPath === '/idreesleather/') {
    reqPath = '/idreesleather/index.html';
  }
  const filePath = path.join(PUBLIC_DIR, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'text/plain', 'Access-Control-Allow-Origin': '*' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Intercept request to find initiator
  page.on('request', req => {
    if (req.url().includes('checkout-web')) {
      console.log('--- Checkout request intercepted: ---');
      console.log('URL:', req.url());
      console.log('Resource Type:', req.resourceType());
      console.log('Headers:', req.headers());
    }
  });

  await page.goto(`http://localhost:${PORT}/idreesleather/index.html`, { waitUntil: 'load' });
  await page.waitForTimeout(1000);

  // Check what DOM element created it or if there is a link rel="preload"
  const preloadLinks = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('link[rel="preload"], link[rel="prefetch"]')).map(l => l.href);
  });
  console.log('Preload/Prefetch links in DOM:', preloadLinks.filter(l => l.includes('checkout-web')));

  await browser.close();
  server.close();
  process.exit(0);
});
