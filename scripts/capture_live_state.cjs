const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const baseDir = path.resolve('public');
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  let filePath = path.join(baseDir, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not found: ' + reqPath);
    return;
  }
  const ext = path.extname(filePath).toLowerCase();
  const mimes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.woff2': 'font/woff2'
  };
  res.writeHead(200, { 'Content-Type': mimes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(3456, async () => {
  console.log('Server started on port 3456');
  const browser = await chromium.launch();
  
  // 1. Desktop test
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3456/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  // Screenshot header
  const header = await page.$('.logo-area');
  if (header) {
    await header.screenshot({ path: 'audit/header_desktop_current.png' });
    console.log('Saved audit/header_desktop_current.png');
  } else {
    console.log('Logo area not found');
  }

  // Full top section
  await page.screenshot({ path: 'audit/top_section_desktop.png', clip: { x: 0, y: 0, width: 1440, height: 350 } });
  console.log('Saved audit/top_section_desktop.png');

  // Quotes / AS FEATURED IN section
  const quotesSection = await page.$('.section-quote-slider, #section-id-template--26828817039647__68a2cf05-7425-4aaf-97b1-a0c611b9edc4');
  if (quotesSection) {
    await quotesSection.screenshot({ path: 'audit/quotes_section_current.png' });
    console.log('Saved audit/quotes_section_current.png');
  } else {
    console.log('Quotes section not found');
  }

  // Footer section
  const footer = await page.$('footer, .site-footer, #shopify-section-footer');
  if (footer) {
    await footer.screenshot({ path: 'audit/footer_desktop_current.png' });
    console.log('Saved audit/footer_desktop_current.png');
  } else {
    console.log('Footer not found');
  }

  await browser.close();
  server.close();
  console.log('Done capturing live state.');
});
