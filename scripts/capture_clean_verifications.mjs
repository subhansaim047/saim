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

  console.log('Navigating to Ionic page...');
  await page.goto(`http://localhost:${port}/thejacketmaker/products/ionic-black-leather-jacket/index.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  // Take screenshot of the product page upper fold (where thumbnails and main image are)
  const destPath = path.resolve('audit', 'verify_ionic_thumbnails_clean.png');
  await page.screenshot({ path: destPath, clip: { x: 0, y: 100, width: 950, height: 800 } });
  console.log('Saved screenshot to:', destPath);

  // Click Watch Video
  console.log('Clicking Watch Video thumbnail...');
  const vThumb = page.locator('.thumbnails a:has(.watchvideo)').first();
  await vThumb.click();
  await page.waitForTimeout(2500);

  const destVideoPath = path.resolve('audit', 'verify_ionic_video_playing_clean.png');
  await page.screenshot({ path: destVideoPath, clip: { x: 0, y: 100, width: 950, height: 800 } });
  console.log('Saved video screenshot to:', destVideoPath);

  // Also test a second product: Bliss Bomber Jacket
  console.log('Navigating to Bliss Bomber page...');
  await page.goto(`http://localhost:${port}/thejacketmaker/products/bliss-black-leather-bomber-jacket/index.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  const destBlissThumb = path.resolve('audit', 'verify_bliss_thumbnails_clean.png');
  await page.screenshot({ path: destBlissThumb, clip: { x: 0, y: 100, width: 950, height: 800 } });

  const vThumbBliss = page.locator('.thumbnails a:has(.watchvideo)').first();
  await vThumbBliss.click();
  await page.waitForTimeout(2500);

  const destBlissVideo = path.resolve('audit', 'verify_bliss_video_playing_clean.png');
  await page.screenshot({ path: destBlissVideo, clip: { x: 0, y: 100, width: 950, height: 800 } });

  await browser.close();
  server.close();
  console.log('All screenshots completed successfully!');
}

main().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
