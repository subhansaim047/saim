import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 3891;
const PUBLIC_DIR = path.resolve('public');
const ARTIFACT_DIR = 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4';

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

// Pure Node static server
const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/thejacketmaker/index.html';
  
  let filePath = path.join(PUBLIC_DIR, reqPath);
  
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (fs.existsSync(filePath) && !fs.statSync(filePath).isDirectory()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found: ' + reqPath);
  }
});

server.listen(PORT, async () => {
  console.log(`Static server running at http://localhost:${PORT}`);
  
  const browser = await chromium.launch();
  const context = await browser.newContext();
  
  try {
    const pagesToTest = [
      { name: 'home_desktop', url: `http://localhost:${PORT}/thejacketmaker/index.html`, viewport: { width: 1440, height: 900 } },
      { name: 'home_mobile', url: `http://localhost:${PORT}/thejacketmaker/index.html`, viewport: { width: 390, height: 844 } },
      { name: 'collection_mens', url: `http://localhost:${PORT}/thejacketmaker/collections/mens-leather-jackets/index.html`, viewport: { width: 1440, height: 900 } },
      { name: 'product_ionic', url: `http://localhost:${PORT}/thejacketmaker/products/ionic-black-leather-jacket/index.html`, viewport: { width: 1440, height: 900 } },
      { name: 'page_custom', url: `http://localhost:${PORT}/thejacketmaker/pages/custom-leather-jackets/index.html`, viewport: { width: 1440, height: 900 } }
    ];

    for (const test of pagesToTest) {
      console.log(`Testing ${test.name} at ${test.url}...`);
      const page = await context.newPage();
      if (test.viewport) {
        await page.setViewportSize(test.viewport);
      }

      const consoleErrors = [];
      const failedRequests = [];
      const notFoundUrls = [];

      page.on('console', msg => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });

      page.on('response', res => {
        if (res.status() >= 400) {
          notFoundUrls.push(`${res.status()} ${res.url()}`);
        }
      });

      page.on('requestfailed', req => {
        const u = req.url();
        if (u.includes('localhost')) {
          failedRequests.push(u);
        }
      });

      await page.goto(test.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(2000);

      const shotPath = path.join('audit', `tjm_test_${test.name}.png`);
      await page.screenshot({ path: shotPath, fullPage: false });
      console.log(`Saved screenshot: ${shotPath}`);

      const artShot = path.join(ARTIFACT_DIR, `tjm_test_${test.name}.png`);
      fs.copyFileSync(shotPath, artShot);

      console.log(`[${test.name}] Console Errors: ${consoleErrors.length}, Failed local reqs: ${failedRequests.length}, 4xx/5xx responses: ${notFoundUrls.length}`);
      if (notFoundUrls.length > 0) {
        console.log(`  4xx/5xx URLs:`, notFoundUrls.slice(0, 10));
      }
      if (consoleErrors.length > 0) {
        console.log(`  Sample errors:`, consoleErrors.slice(0, 4));
      }
      if (failedRequests.length > 0) {
        console.log(`  Failed reqs:`, failedRequests.slice(0, 5));
      }
      await page.close();
    }
  } catch (err) {
    console.error('Audit error:', err);
  } finally {
    await browser.close();
    server.close();
    console.log('Server stopped and browser closed.');
    process.exit(0);
  }
});
