import http from 'http';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const PUBLIC_DIR = 'C:\\Users\\subhan\\.gemini\\antigravity\\scratch\\saim\\public';
const ART_DIR = 'C:\\Users\\subhan\\.gemini\\antigravity\\brain\\4f746af2-8096-428b-a0e5-b7e16c0031b4';

// Lightweight fast mime mapper
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
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
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
  console.log('Static server listening on http://localhost:3891');
  const browser = await chromium.launch({ headless: true });

  // 1. Desktop 1440x900
  console.log('Capturing Desktop Screenshot...');
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  
  // Smooth scroll to trigger any lazy elements
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 800) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1000);

  await page.screenshot({ path: path.join(ART_DIR, 'tjm_desktop_full_4k.png'), fullPage: true });
  console.log('Saved tjm_desktop_full_4k.png');

  // Slices for hero, categories, clearance, best sellers, bespoke, bags
  const slices = [
    { name: 'hero', y: 0 },
    { name: 'categories', y: 1100 },
    { name: 'clearance', y: 2200 },
    { name: 'bestsellers', y: 4400 },
    { name: 'spotlight', y: 5500 },
    { name: 'custom_and_bags', y: 6800 }
  ];

  for (const s of slices) {
    await page.evaluate(pos => window.scrollTo(0, pos), s.y);
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(ART_DIR, `tjm_slice_${s.name}.png`) });
    console.log(`Saved tjm_slice_${s.name}.png`);
  }

  // 2. Mobile 390x844
  console.log('Capturing Mobile Screenshot...');
  const mobContext = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
  const mobPage = await mobContext.newPage();
  await mobPage.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await mobPage.waitForTimeout(1000);
  await mobPage.screenshot({ path: path.join(ART_DIR, 'tjm_mobile_full_4k.png'), fullPage: true });
  console.log('Saved tjm_mobile_full_4k.png');

  await browser.close();
  server.close(() => {
    console.log('Capture finished, server closed.');
    process.exit(0);
  });
});
