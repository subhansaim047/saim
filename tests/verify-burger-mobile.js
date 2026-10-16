import http from 'http';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const PORT = 3348;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') reqPath = '/hotbite/index.html';
  if (reqPath.endsWith('/')) reqPath += 'index.html';

  const fullPath = path.join(process.cwd(), 'public', reqPath.replace(/^\//, ''));

  if (!fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }

  const ext = path.extname(fullPath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(fullPath).pipe(res);
});

server.listen(PORT, async () => {
  console.log(`Mobile test server running at http://localhost:${PORT}`);

  try {
    const browser = await chromium.launch({ channel: 'msedge' });
    const artifactDir = 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4';

    console.log('Testing Mobile Viewport (390x844)...');
    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
    });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(`http://localhost:${PORT}/hotbite/index.html`, { waitUntil: 'domcontentloaded' });

    // Wait for hydration to settle
    await mobilePage.waitForTimeout(4000);

    // Scroll into view using browser evaluate
    await mobilePage.evaluate(() => {
      const sec = document.getElementById('oresto-burger-talking');
      if (sec) {
        sec.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    });
    await mobilePage.waitForTimeout(1500);

    // Get bounding box
    await mobilePage.screenshot({
      path: path.join(artifactDir, 'burger_mobile.png')
    });
    console.log('Captured burger_mobile.png successfully!');

    // Check for horizontal overflow on mobile
    const scrollWidth = await mobilePage.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await mobilePage.evaluate(() => document.documentElement.clientWidth);
    console.log(`Mobile dimensions - scrollWidth: ${scrollWidth}, clientWidth: ${clientWidth}`);
    if (scrollWidth <= clientWidth) {
      console.log('PASS: Zero horizontal overflow on mobile!');
    } else {
      console.warn(`WARNING: Horizontal overflow detected: ${scrollWidth} > ${clientWidth}`);
    }

    await browser.close();
    console.log('Mobile verification completed successfully!');
  } catch (err) {
    console.error('Test error:', err);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
