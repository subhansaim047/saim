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

server.listen(4899, async () => {
  console.log('Server running at http://localhost:4899');
  const browser = await chromium.launch({ headless: true });

  try {
    // 1. DESKTOP VIEWPORT (1440x900)
    const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await desktopPage.goto('http://localhost:4899/index.html', { waitUntil: 'domcontentloaded' });
    await desktopPage.waitForTimeout(1500);

    // Desktop Header
    const desktopHeader = await desktopPage.$('#shopify-section-header');
    if (desktopHeader) {
      await desktopHeader.screenshot({ path: 'audit/proof_desktop_header_final.png' });
      console.log('Saved audit/proof_desktop_header_final.png');
    }

    // Desktop Quotes Section (Initial)
    const quotesSection = await desktopPage.$('.section-quote-slider');
    if (quotesSection) {
      await quotesSection.scrollIntoViewIfNeeded();
      await desktopPage.waitForTimeout(500);
      await quotesSection.screenshot({ path: 'audit/proof_quotes_desktop_initial.png' });
      console.log('Saved audit/proof_quotes_desktop_initial.png');

      // Click Next Quote Button with force
      await desktopPage.click('#hq-quotes-carousel .slick-next-custom', { force: true });
      await desktopPage.waitForTimeout(600);
      await quotesSection.screenshot({ path: 'audit/proof_quotes_desktop_next1.png' });
      console.log('Saved audit/proof_quotes_desktop_next1.png');

      await desktopPage.click('#hq-quotes-carousel .slick-next-custom', { force: true });
      await desktopPage.waitForTimeout(600);
      await quotesSection.screenshot({ path: 'audit/proof_quotes_desktop_next2.png' });
      console.log('Saved audit/proof_quotes_desktop_next2.png');
    }

    // 2. MOBILE VIEWPORT (390x844 iPhone 14)
    const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await mobilePage.goto('http://localhost:4899/index.html', { waitUntil: 'domcontentloaded' });
    await mobilePage.waitForTimeout(1500);

    // Mobile Header
    const mobileHeader = await mobilePage.$('#shopify-section-header');
    if (mobileHeader) {
      await mobileHeader.screenshot({ path: 'audit/proof_mobile_header_final.png' });
      console.log('Saved audit/proof_mobile_header_final.png');
    }

    // Mobile Quotes Section
    const mobileQuotesSection = await mobilePage.$('.section-quote-slider');
    if (mobileQuotesSection) {
      await mobileQuotesSection.scrollIntoViewIfNeeded();
      await mobilePage.waitForTimeout(500);
      await mobileQuotesSection.screenshot({ path: 'audit/proof_quotes_mobile_initial.png' });
      console.log('Saved audit/proof_quotes_mobile_initial.png');

      // Click Next on Mobile with force
      await mobilePage.click('#hq-quotes-carousel .slick-next-custom', { force: true });
      await mobilePage.waitForTimeout(600);
      await mobileQuotesSection.screenshot({ path: 'audit/proof_quotes_mobile_next1.png' });
      console.log('Saved audit/proof_quotes_mobile_next1.png');
    }

    // 3. MOBILE PRODUCT PAGE (Verify no overlaps and clean layout)
    await mobilePage.goto('http://localhost:4899/products/evan-hart-fur-brown-leather-jacket/index.html', { waitUntil: 'domcontentloaded' });
    await mobilePage.waitForTimeout(1500);
    await mobilePage.screenshot({ path: 'audit/proof_mobile_product_final.png', fullPage: false });
    console.log('Saved audit/proof_mobile_product_final.png');

  } catch (err) {
    console.error('Error during verification:', err);
  } finally {
    await browser.close();
    server.close();
    console.log('All verification tasks finished!');
  }
});
