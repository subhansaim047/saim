import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';

// Simple static file server
function createServer(port) {
  const root = path.resolve('.');
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.mjs': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf'
  };

  const server = http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    
    // Check in public/ first, then root
    let filePath = path.join(root, 'public', reqPath);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(root, reqPath);
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const mime = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mime, 'Access-Control-Allow-Origin': '*' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  });

  return new Promise((resolve) => {
    server.listen(port, () => {
      console.log(`Test server running at http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function runTests() {
  const PORT = 3892;
  const server = await createServer(PORT);
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const baseUrl = `http://localhost:${PORT}/thejacketmaker`;

  try {
    console.log('\n--- TEST 1: Men Mega Menu Hover & Navigation ---');
    await page.goto(`${baseUrl}/index.html`, { waitUntil: 'domcontentloaded' });
    
    // Find MEN link in header and hover
    const menLink = page.getByRole('link', { name: 'MEN', exact: true }).first();
    await menLink.hover();
    await page.waitForTimeout(600);

    // Look for Varsity Jackets link under MEN
    const varsityLink = page.locator('#NavigationTier2-1 a', { hasText: 'Varsity Jackets' }).first();
    const varsityHref = await varsityLink.getAttribute('href');
    console.log(`Found Varsity Jackets link with href: ${varsityHref}`);

    await varsityLink.click();
    await page.waitForLoadState('domcontentloaded');
    console.log(`Navigated to: ${page.url()}`);
    
    const h1Text = await page.locator('h1').first().textContent();
    console.log(`Page H1: ${h1Text.trim()}`);

    const prodsCount = await page.locator('.product-block').count();
    console.log(`Products displayed in collection: ${prodsCount}`);

    await page.screenshot({ path: 'audit/verify_men_varsity_jackets.png' });
    console.log('Saved audit/verify_men_varsity_jackets.png');

    console.log('\n--- TEST 2: Women Mega Menu Hover & Navigation ---');
    // Hover on WOMEN
    const womenLink = page.getByRole('link', { name: 'WOMEN', exact: true }).first();
    await womenLink.hover();
    await page.waitForTimeout(600);

    const womenBiker = page.locator('.navigation--main a[href*="womens-biker-leather-jackets"]').first();
    const bikerHref = await womenBiker.getAttribute('href');
    console.log(`Women Biker Jackets href: ${bikerHref}`);

    await womenBiker.click();
    await page.waitForLoadState('domcontentloaded');
    console.log(`Navigated to: ${page.url()}`);

    const womenH1 = await page.locator('h1').first().textContent();
    console.log(`Page H1: ${womenH1.trim()}`);

    const womenProdsCount = await page.locator('.product-block').count();
    console.log(`Products displayed in women collection: ${womenProdsCount}`);

    await page.screenshot({ path: 'audit/verify_women_biker_jackets.png' });
    console.log('Saved audit/verify_women_biker_jackets.png');

    console.log('\n--- TEST 3: Sidebar Category Switching ---');
    // Click "Women's Bomber Jackets" from sidebar
    const sidebarBomber = page.locator('.filter-group--categories a', { hasText: "Women's Bomber Jackets" }).first();
    await sidebarBomber.click();
    await page.waitForLoadState('domcontentloaded');
    console.log(`Navigated via sidebar to: ${page.url()}`);

    const bomberH1 = await page.locator('h1').first().textContent();
    console.log(`Page H1: ${bomberH1.trim()}`);
    await page.screenshot({ path: 'audit/verify_sidebar_switch_bomber.png' });
    console.log('Saved audit/verify_sidebar_switch_bomber.png');

    console.log('\n--- TEST 4: Product Page & Video Playback ---');
    // Click the first product link in the collection listing
    const firstProduct = page.locator('.collection-listing .product-block a.product-link').first();
    const prodTitle = await page.locator('.collection-listing .product-block__title').first().textContent();
    console.log(`Clicking product: ${prodTitle.trim()}`);

    await firstProduct.click();
    await page.waitForLoadState('domcontentloaded');
    console.log(`Product page loaded: ${page.url()}`);

    const prodPageTitle = await page.locator('h1').first().textContent();
    console.log(`Product page title: ${prodPageTitle.trim()}`);

    // Check video thumbnail
    const videoThumb = page.locator('.thumbnail--media-video, .thumbnails a:has(.watchvideo)');
    const hasVideoThumb = (await videoThumb.count()) > 0;
    console.log(`Video thumbnail exists: ${hasVideoThumb}`);

    if (hasVideoThumb) {
      await videoThumb.first().click();
      await page.waitForTimeout(1500);

      const videoState = await page.evaluate(() => {
        const vids = Array.from(document.querySelectorAll('video'));
        for (const v of vids) {
          if (v.currentTime > 0 || !v.paused) {
            return {
              playing: !v.paused,
              currentTime: v.currentTime,
              duration: v.duration,
              src: v.currentSrc || v.querySelector('source')?.src
            };
          }
        }
        const anyVid = document.querySelector('video');
        return anyVid ? {
          playing: !anyVid.paused,
          currentTime: anyVid.currentTime,
          duration: anyVid.duration,
          src: anyVid.currentSrc || anyVid.querySelector('source')?.src
        } : null;
      });

      console.log('Video Playback State:', JSON.stringify(videoState, null, 2));
      await page.screenshot({ path: 'audit/verify_product_video_playing.png' });
      console.log('Saved audit/verify_product_video_playing.png');
    }

    console.log('\n--- TEST 5: Interactive Swatches & Add to Cart ---');
    const addToCart = page.locator('.quantity-submit-row__submit button, .product-form__add-button, [name="add"], .add-to-cart').first();
    if (await addToCart.isVisible()) {
      await addToCart.click();
      await page.waitForTimeout(600);
      const btnText = await addToCart.textContent();
      console.log(`Add to cart button text after click: ${btnText.trim()}`);
      await page.screenshot({ path: 'audit/verify_product_added_cart.png' });
      console.log('Saved audit/verify_product_added_cart.png');
    }

    console.log('\n=== ALL TESTS COMPLETED SUCCESSFULLY! ===');
  } catch (err) {
    console.error('Test error:', err);
  } finally {
    await browser.close();
    server.close();
  }
}

runTests();
