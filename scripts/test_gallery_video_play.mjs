import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.woff2': 'font/woff2',
  '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath.endsWith('/')) reqPath += 'index.html';
  const filePath = path.join(process.cwd(), 'public', reqPath.replace(/^\//, ''));
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found: ' + reqPath);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(8096, async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://127.0.0.1:8096/thejacketmaker/products/ionic-black-leather-jacket/index.html');
  await page.waitForTimeout(2000);

  // Click Watch Video thumbnail
  const videoThumb = page.locator('.thumbnails a:has-text("Watch Video")');
  console.log('Video thumb found:', await videoThumb.count());
  
  await videoThumb.first().click();
  await page.waitForTimeout(1500);

  // Check if video is visible and playing
  const videoState = await page.evaluate(() => {
    const v = document.querySelector('.main-image video');
    if (!v) return { exists: false };
    return {
      exists: true,
      src: v.querySelector('source')?.src,
      paused: v.paused,
      currentTime: v.currentTime,
      controls: v.controls,
      display: window.getComputedStyle(v).display,
      parentDisplay: window.getComputedStyle(v.closest('.slide')).display
    };
  });
  console.log('Video state after click:', JSON.stringify(videoState, null, 2));

  // Take screenshot of playing video
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/verify_product_video_playing.png' });
  console.log('Saved verify_product_video_playing.png');

  await browser.close();
  server.close();
});
