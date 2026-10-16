import http from 'http';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const PORT = 3360;
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
  console.log(`Test server running at http://localhost:${PORT}`);
  const artifactDir = 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4';

  try {
    const browser = await chromium.launch({ channel: 'msedge' });
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`http://localhost:${PORT}/hotbite/index.html`, { waitUntil: 'domcontentloaded' });
    // Allow React hydration, image loading, and ScrollTrigger refresh
    await page.waitForTimeout(3500);

    // Get trigger info
    const triggerData = await page.evaluate(() => {
      const sec = document.querySelector('#oresto-burger-talking');
      const secRect = sec ? sec.getBoundingClientRect() : null;
      const secTop = secRect ? secRect.top + window.scrollY : null;
      const triggers = (typeof ScrollTrigger !== 'undefined') ? ScrollTrigger.getAll().filter(t => t.trigger && t.trigger.closest('#oresto-burger-talking')) : [];

      return {
        secTop,
        secHeight: secRect ? secRect.height : null,
        triggerCount: triggers.length,
        triggers: triggers.map(t => ({
          tag: t.trigger.tagName,
          classes: t.trigger.className,
          start: t.start,
          end: t.end,
          varsStart: t.vars.start,
          varsEnd: t.vars.end,
          scrub: t.vars.scrub
        }))
      };
    });

    console.log('Trigger analysis:', JSON.stringify(triggerData, null, 2));

    const secTop = triggerData.secTop;
    if (!secTop) throw new Error('Burger section not found');

    const getLayersState = async () => {
      return await page.evaluate(() => {
        const layers = Array.from(document.querySelectorAll('#oresto-burger-talking .pbmit-tween-effect'));
        return layers.map((l, idx) => ({
          layer: idx + 1,
          transform: l.style.transform || window.getComputedStyle(l).transform
        }));
      });
    };

    // ==========================================
    // Phase 1: Scroll DOWN sequence
    // ==========================================
    console.log('\n=== Testing Scroll DOWN ===');

    // 1. Well above section (e.g. 1500px above)
    const posAbove = secTop - 1200;
    await page.evaluate((pos) => window.scrollTo({ top: pos, behavior: 'instant' }), posAbove);
    await page.waitForTimeout(800);
    const stateAbove = await getLayersState();
    console.log('1. Scroll Above Section (scrollY=' + posAbove + '):');
    console.log('   Layer 1 (top bun):', stateAbove[0].transform);
    console.log('   Layer 8 (bottom bun):', stateAbove[7].transform);

    // Capture resting screenshot
    const secLoc = page.locator('#oresto-burger-talking').first();
    // Scroll so section is in resting viewport for screenshot
    await page.screenshot({ path: path.join(artifactDir, 'scroll_down_above.png') });

    // 2. Entering section (e.g. 400px above)
    const posEntering = secTop - 500;
    await page.evaluate((pos) => window.scrollTo({ top: pos, behavior: 'instant' }), posEntering);
    await page.waitForTimeout(800);
    const stateEntering = await getLayersState();
    console.log('2. Entering Section (scrollY=' + posEntering + '):');
    console.log('   Layer 1 (top bun):', stateEntering[0].transform);
    console.log('   Layer 8 (bottom bun):', stateEntering[7].transform);

    // 3. Center of section (fully exploded)
    const posCenter = secTop - 150;
    await page.evaluate((pos) => window.scrollTo({ top: pos, behavior: 'instant' }), posCenter);
    await page.waitForTimeout(800);
    const stateCenter = await getLayersState();
    console.log('3. Center of Section (scrollY=' + posCenter + '):');
    console.log('   Layer 1 (top bun):', stateCenter[0].transform);
    console.log('   Layer 8 (bottom bun):', stateCenter[7].transform);
    await secLoc.screenshot({ path: path.join(artifactDir, 'scroll_down_center_exploded.png') });

    // 4. Past section
    const posPast = secTop + 400;
    await page.evaluate((pos) => window.scrollTo({ top: pos, behavior: 'instant' }), posPast);
    await page.waitForTimeout(800);
    const statePast = await getLayersState();
    console.log('4. Past Section (scrollY=' + posPast + '):');
    console.log('   Layer 1 (top bun):', statePast[0].transform);
    console.log('   Layer 8 (bottom bun):', statePast[7].transform);

    // ==========================================
    // Phase 2: Scroll UP sequence
    // ==========================================
    console.log('\n=== Testing Scroll UP ===');

    // 5. Scroll UP back to center
    await page.evaluate((pos) => window.scrollTo({ top: pos, behavior: 'instant' }), posCenter);
    await page.waitForTimeout(800);
    const stateUpCenter = await getLayersState();
    console.log('5. Scroll UP back to Center (scrollY=' + posCenter + '):');
    console.log('   Layer 1 (top bun):', stateUpCenter[0].transform);
    console.log('   Layer 8 (bottom bun):', stateUpCenter[7].transform);

    // 6. Scroll UP back entering position
    await page.evaluate((pos) => window.scrollTo({ top: pos, behavior: 'instant' }), posEntering);
    await page.waitForTimeout(800);
    const stateUpEntering = await getLayersState();
    console.log('6. Scroll UP back Entering (scrollY=' + posEntering + '):');
    console.log('   Layer 1 (top bun):', stateUpEntering[0].transform);
    console.log('   Layer 8 (bottom bun):', stateUpEntering[7].transform);

    // 7. Scroll UP back above section (reassembled / joined)
    await page.evaluate((pos) => window.scrollTo({ top: pos, behavior: 'instant' }), posAbove);
    await page.waitForTimeout(800);
    const stateUpAbove = await getLayersState();
    console.log('7. Scroll UP back Above (scrollY=' + posAbove + '):');
    console.log('   Layer 1 (top bun):', stateUpAbove[0].transform);
    console.log('   Layer 8 (bottom bun):', stateUpAbove[7].transform);
    await secLoc.screenshot({ path: path.join(artifactDir, 'scroll_up_above_reassembled.png') });

    console.log('\nAll Scroll Physics tests completed successfully!');
    await browser.close();
  } catch (err) {
    console.error('Test error:', err);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
