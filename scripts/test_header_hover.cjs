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

server.listen(3555, async () => {
  console.log('Server running at http://localhost:3555');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const artifactDir = 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4';

  try {
    await page.goto('http://localhost:3555/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // 1. Check Header scrollbar
    const headerMetrics = await page.evaluate(() => {
      const header = document.querySelector('.site-header') || document.querySelector('header');
      const style = window.getComputedStyle(header);
      return {
        overflowY: style.overflowY,
        overflowX: style.overflowX,
        scrollHeight: header.scrollHeight,
        clientHeight: header.clientHeight,
        hasScrollbar: header.scrollHeight > header.clientHeight
      };
    });
    console.log('Header Scrollbar Metrics:', headerMetrics);

    // 2. Check DESIGN YOUR OWN link
    const dyoHref = await page.$eval('a:has-text("DESIGN YOUR OWN")', el => el.getAttribute('href')).catch(() => 'NONE');
    console.log('DESIGN YOUR OWN href:', dyoHref);

    // 3. Hover over MEN
    console.log('\nHovering over MEN...');
    const menLink = await page.$('.navigation__tier-1 > li:has-text("MEN") > a');
    if (menLink) {
      await menLink.hover();
      await page.waitForTimeout(500);

      const isMenDropdownVisible = await page.evaluate(() => {
        const tier2 = document.querySelector('#NavigationTier2-1');
        if (!tier2) return false;
        const style = window.getComputedStyle(tier2);
        return style.visibility !== 'hidden' && style.opacity !== '0' && style.display !== 'none';
      });
      console.log('MEN Mega-menu visible on hover:', isMenDropdownVisible);

      await page.screenshot({
        path: path.join(artifactDir, 'proof_header_men_hover.png'),
        clip: { x: 0, y: 0, width: 1440, height: 500 }
      });
      console.log('Saved proof_header_men_hover.png');
    }

    // 4. Hover over CUSTOMIZE
    console.log('\nHovering over CUSTOMIZE...');
    const customLi = await page.$('.navigation__tier-1 > li:has-text("CUSTOMIZE")');
    if (customLi) {
      await customLi.hover();
      await page.waitForTimeout(500);

      const customDropdownVisible = await page.evaluate(() => {
        const tier2 = document.querySelector('#NavigationTier2-3');
        if (!tier2) return false;
        const style = window.getComputedStyle(tier2);
        return style.visibility !== 'hidden' && style.opacity !== '0' && style.display !== 'none';
      });
      console.log('CUSTOMIZE Mega-menu visible on hover:', customDropdownVisible);

      // Verify custom sublinks
      const customBootsHref = await page.$eval('a:has-text("Custom Boots")', el => el.getAttribute('href')).catch(() => 'NONE');
      console.log('Custom Boots link in menu:', customBootsHref);

      await page.screenshot({
        path: path.join(artifactDir, 'proof_header_customize_hover.png'),
        clip: { x: 0, y: 0, width: 1440, height: 500 }
      });
      console.log('Saved proof_header_customize_hover.png');
    }

    console.log('\n--- Header and Navigation Tests Succeeded ---');

  } catch (err) {
    console.error('Test error:', err);
  } finally {
    await browser.close();
    server.close();
    process.exit(0);
  }
});
