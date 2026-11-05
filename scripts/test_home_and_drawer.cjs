const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const baseDir = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker';
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
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml'
    };
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(4999, async () => {
  console.log('Test server running at http://localhost:4999');
  const browser = await chromium.launch();
  
  // 1. Desktop Test
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:4999/thejacketmaker/index.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const scrollYBefore = await page.evaluate(() => window.scrollY);
  console.log('ScrollY immediately after load:', scrollYBefore);

  await page.waitForTimeout(6000);
  const scrollYAfter = await page.evaluate(() => window.scrollY);
  console.log('ScrollY after 6 seconds (autoPlay interval is 4.5s):', scrollYAfter);

  const outDir = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/audit';
  await page.screenshot({ path: path.join(outDir, 'test_desktop_home_fixed.png') });

  // Hover BRAND menu to see its dropdown
  const brandNav = await page.$('.navigation--main a[href*="our-story"]');
  if (brandNav) {
    await brandNav.hover();
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(outDir, 'test_desktop_brand_hover.png') });
  }

  // 2. Mobile Drawer Test
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobilePage.goto('http://localhost:4999/thejacketmaker/index.html', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);
  
  const toggle = await mobilePage.$('.mobile-nav-toggle, [data-action="toggle-drawer"], button.mobile-nav-toggle');
  if (toggle) {
    await toggle.click();
    await mobilePage.waitForTimeout(800);
    await mobilePage.screenshot({ path: path.join(outDir, 'test_mobile_drawer_fixed.png') });
  }

  await browser.close();
  server.close();
  console.log('All tests done!');
  process.exit(0);
});
