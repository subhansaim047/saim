import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';

function createServer() {
  const root = path.resolve('.');
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4'
  };

  const server = http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    let filePath = path.join(root, 'public', reqPath);
    if (!fs.existsSync(filePath)) filePath = path.join(root, reqPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream', 'Access-Control-Allow-Origin': '*' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  });

  return new Promise((resolve) => server.listen(0, () => resolve(server)));
}

async function main() {
  const server = await createServer();
  const port = server.address().port;
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

  const productsToTest = ['dean-brown-leather-biker-jacket', 'rave-black-leather-biker-jacket'];

  for (const h of productsToTest) {
    console.log(`Testing ${h}...`);
    await page.goto(`http://localhost:${port}/thejacketmaker/products/${h}/index.html`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    const destThumb = `C:\\Users\\subhan\\.gemini\\antigravity\\brain\\4f746af2-8096-428b-a0e5-b7e16c0031b4\\verify_${h}_thumb.png`;
    await page.screenshot({ path: destThumb, clip: { x: 0, y: 100, width: 950, height: 800 } });

    // Click watch video
    const vThumb = page.locator('.thumbnails a:has(.watchvideo)').first();
    await vThumb.click();
    await page.waitForTimeout(2500);

    const destVideo = `C:\\Users\\subhan\\.gemini\\antigravity\\brain\\4f746af2-8096-428b-a0e5-b7e16c0031b4\\verify_${h}_video.png`;
    await page.screenshot({ path: destVideo, clip: { x: 0, y: 100, width: 950, height: 800 } });

    const status = await page.evaluate(() => {
      const v = document.querySelector('.product-slideshow video');
      return v ? { paused: v.paused, currentTime: v.currentTime, src: v.currentSrc } : null;
    });
    console.log(`${h} Video Status:`, status);
  }

  await browser.close();
  server.close();
  console.log('Done testing random products!');
}

main().catch(console.error);
