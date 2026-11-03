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
  let filePath = path.join(PUBLIC_DIR, reqPath);
  
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime, 'Access-Control-Allow-Origin': '*' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PAGES_TO_TEST = [
  { name: 'Homepage', path: '/idreesleather/index.html' },
  { name: 'Collection', path: '/idreesleather/collections/leather-jackets/index.html' },
  { name: 'Product', path: '/idreesleather/products/mens-brown-cafe-racer-leather-jacket-pakistan/index.html' },
  { name: 'Contact Page', path: '/idreesleather/pages/contact/index.html' },
  { name: 'Policy Page', path: '/idreesleather/policies/privacy-policy/index.html' }
];

server.listen(PORT, async () => {
  console.log(`Multi-page verification server running at http://localhost:${PORT}/`);
  const browser = await chromium.launch({ headless: true });
  
  const results = [];

  for (const pageInfo of PAGES_TO_TEST) {
    console.log(`\n--- Testing ${pageInfo.name} (${pageInfo.path}) ---`);
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    });
    const page = await context.newPage();

    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    const failedRequests = [];
    page.on('requestfailed', req => {
      if (req.failure()?.errorText !== 'net::ERR_ABORTED') {
        failedRequests.push(`${req.method()} ${req.url()} - ${req.failure()?.errorText}`);
      }
    });

    try {
      const url = `http://localhost:${PORT}${pageInfo.path}`;
      await page.goto(url, { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(2000);

      const banner = await page.$('#saimdev-demo-banner');
      const hasBanner = banner !== null;
      const title = await page.title();
      const imagesCount = await page.evaluate(() => document.querySelectorAll('img').length);

      const safeName = pageInfo.name.toLowerCase().replace(/\s+/g, '_');
      const ssPath = `audit/test_${safeName}_desktop.png`;
      await page.screenshot({ path: ssPath, fullPage: false });

      console.log(`✓ ${pageInfo.name} rendered successfully!`);
      console.log(`  Title: ${title}`);
      console.log(`  Images on page: ${imagesCount}`);
      console.log(`  Banner visible: ${hasBanner}`);
      console.log(`  Console errors: ${consoleErrors.length}`);
      console.log(`  Failed requests: ${failedRequests.length}`);
      console.log(`  Screenshot saved to ${ssPath}`);

      results.push({
        page: pageInfo.name,
        path: pageInfo.path,
        status: 'PASS',
        hasBanner,
        imagesCount,
        consoleErrors: consoleErrors.length,
        failedRequests: failedRequests.length
      });
    } catch (err) {
      console.error(`✗ Error testing ${pageInfo.name}:`, err.message);
      results.push({
        page: pageInfo.name,
        path: pageInfo.path,
        status: 'FAIL',
        error: err.message
      });
    } finally {
      await context.close();
    }
  }

  // Also test mobile for Product page
  console.log(`\n--- Testing Product Page Mobile (390x844) ---`);
  try {
    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)'
    });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(`http://localhost:${PORT}/idreesleather/products/mens-brown-cafe-racer-leather-jacket-pakistan/index.html`, { waitUntil: 'load', timeout: 30000 });
    await mobilePage.waitForTimeout(2000);
    await mobilePage.screenshot({ path: 'audit/test_product_mobile.png', fullPage: false });
    console.log(`✓ Product mobile screenshot saved to audit/test_product_mobile.png`);
    await mobileContext.close();
  } catch (err) {
    console.error('Error on mobile test:', err.message);
  }

  await browser.close();
  server.close();

  console.log('\n=== MULTI-PAGE AUDIT SUMMARY ===');
  console.table(results);
  process.exit(0);
});
