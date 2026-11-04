const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const baseDir = path.resolve('public/thejacketmaker');
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath.startsWith('/thejacketmaker/')) {
    reqPath = reqPath.slice('/thejacketmaker'.length);
  }
  let filePath = path.join(baseDir, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml'
    };
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found: ' + req.url);
  }
});

server.listen(4897, async () => {
  console.log('Mobile server running at http://localhost:4897');
  const browser = await chromium.launch({ headless: true });

  try {
    // 390x844 (iPhone 14)
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto('http://localhost:4897/index.html', { timeout: 15000, waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Mobile Header
    const header = await page.$('#shopify-section-header');
    if (header) {
      await header.screenshot({ path: 'audit/proof_mobile_header_clean_final.png' });
      console.log('Saved audit/proof_mobile_header_clean_final.png');
    }

    // Mobile Quotes Section
    const quotes = await page.$('.section-quote-slider');
    if (quotes) {
      await quotes.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await quotes.screenshot({ path: 'audit/proof_mobile_quotes_clean_final.png' });
      console.log('Saved audit/proof_mobile_quotes_clean_final.png');

      // Click Next on Mobile
      await page.click('#hq-quotes-carousel .slick-next-custom', { force: true });
      await page.waitForTimeout(600);
      await quotes.screenshot({ path: 'audit/proof_mobile_quotes_next_final.png' });
      console.log('Saved audit/proof_mobile_quotes_next_final.png');
    }

    // Mobile Product Page
    await page.goto('http://localhost:4897/products/evan-hart-fur-brown-leather-jacket/index.html', { timeout: 15000, waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'audit/proof_mobile_product_clean_final.png' });
    console.log('Saved audit/proof_mobile_product_clean_final.png');

  } catch (err) {
    console.error('Mobile verification error:', err);
  } finally {
    await browser.close();
    server.close();
    console.log('Mobile verification done!');
  }
});
