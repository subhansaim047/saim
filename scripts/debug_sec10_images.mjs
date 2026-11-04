import http from 'http';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const PUBLIC_DIR = 'C:\\Users\\subhan\\.gemini\\antigravity\\scratch\\saim\\public';

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0].split('#')[0];
  if (cleanUrl === '/' || cleanUrl === '/thejacketmaker' || cleanUrl === '/thejacketmaker/') {
    cleanUrl = '/thejacketmaker/index.html';
  }
  const filePath = path.join(PUBLIC_DIR, cleanUrl.replace(/^\//, ''));
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Access-Control-Allow-Origin': '*' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3891, async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  page.on('requestfailed', req => console.log('FAILED REQUEST:', req.url(), req.failure().errorText));
  
  await page.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  const imgInfo = await page.evaluate(() => {
    const sec10 = document.querySelectorAll('div[id^="shopify-section-"]')[10];
    const imgs = Array.from(sec10.querySelectorAll('img'));
    return imgs.map((img, i) => {
      const style = window.getComputedStyle(img);
      const parentStyle = img.parentElement ? window.getComputedStyle(img.parentElement) : {};
      return {
        i,
        src: img.src,
        naturalW: img.naturalWidth,
        naturalH: img.naturalHeight,
        w: img.offsetWidth,
        h: img.offsetHeight,
        opacity: style.opacity,
        visibility: style.visibility,
        display: style.display,
        zIndex: style.zIndex,
        parentBg: parentStyle.backgroundColor
      };
    });
  });

  console.log("Section 10 img status in Playwright:");
  console.log(JSON.stringify(imgInfo.slice(0, 10), null, 2));

  // Take a direct screenshot of one specific product card in section 10
  const card = await page.$('div[id^="shopify-section-"] .product-block:nth-child(9)');
  if (card) {
    await card.screenshot({ path: 'audit/direct_card_9_screenshot.png' });
    const sz = fs.statSync('audit/direct_card_9_screenshot.png').size / 1024;
    console.log('Direct card 9 screenshot size:', sz.toFixed(1), 'KB');
  }

  await browser.close();
  server.close(() => process.exit(0));
});
