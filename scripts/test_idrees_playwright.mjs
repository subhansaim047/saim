import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PORT = 8899;
const PUBLIC_DIR = path.resolve('public');

// MIME types
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/idreesleather' || reqPath === '/idreesleather/') {
    reqPath = '/idreesleather/index.html';
  }
  const filePath = path.join(PUBLIC_DIR, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime, 'Access-Control-Allow-Origin': '*' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    console.warn(`[404] Not Found: ${req.url} -> ${filePath}`);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, async () => {
  console.log(`Test server running at http://localhost:${PORT}/`);
  const browser = await chromium.launch({ headless: true });
  
  // Test Desktop
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  });
  const page = await desktopContext.newPage();
  
  const consoleMessages = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleMessages.push(msg.text());
    }
  });

  const failedRequests = [];
  page.on('requestfailed', req => {
    failedRequests.push(`${req.method()} ${req.url()} - ${req.failure()?.errorText}`);
  });

  console.log('Navigating to http://localhost:8899/idreesleather/index.html...');
  await page.goto(`http://localhost:${PORT}/idreesleather/index.html`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Take desktop screenshot
  const screenshotBuffer = await page.screenshot({ fullPage: false });
  fs.writeFileSync('audit/idrees_local_desktop.png', screenshotBuffer);
  console.log('Saved audit/idrees_local_desktop.png');

  // Generate webp preview at 1200x750
  await sharp(screenshotBuffer)
    .resize(1200, 750, { fit: 'cover', position: 'top' })
    .webp({ quality: 85 })
    .toFile('public/demos/previews/idrees-leather-preview.webp');
  console.log('Saved public/demos/previews/idrees-leather-preview.webp');

  // Test Mobile Viewport
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)'
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(`http://localhost:${PORT}/idreesleather/index.html`, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(2000);

  const mobileScreenshot = await mobilePage.screenshot({ fullPage: false });
  fs.writeFileSync('audit/idrees_local_mobile.png', mobileScreenshot);
  console.log('Saved audit/idrees_local_mobile.png');

  console.log('Console Errors:', consoleMessages.length, consoleMessages);
  console.log('Failed Requests:', failedRequests.length, failedRequests);

  await browser.close();
  server.close();
  process.exit(0);
});
