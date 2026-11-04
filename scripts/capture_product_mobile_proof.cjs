const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const baseDir = path.resolve('public/thejacketmaker');
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath.startsWith('/thejacketmaker/')) reqPath = reqPath.slice('/thejacketmaker'.length);
  let filePath = path.join(baseDir, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) filePath = path.join(filePath, 'index.html');
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200);
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404); res.end('Not found');
  }
});

server.listen(4895, async () => {
  console.log('Server running at 4895');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  
  await page.goto('http://localhost:4895/products/evan-hart-fur-brown-leather-jacket/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // Take screenshot of quotes section on product page
  const quotesSec = await page.$('.section-quote-slider');
  if (quotesSec) {
    await quotesSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await quotesSec.screenshot({ path: 'audit/proof_mobile_product_quote_fixed.png' });
    console.log('Saved audit/proof_mobile_product_quote_fixed.png');
  }

  // Take screenshot of product options / points area
  const productOptions = await page.$('.product-detail__form');
  if (productOptions) {
    await productOptions.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await productOptions.screenshot({ path: 'audit/proof_mobile_product_points_fixed.png' });
    console.log('Saved audit/proof_mobile_product_points_fixed.png');
  }

  await browser.close();
  server.close();
  console.log('Capture finished');
});
