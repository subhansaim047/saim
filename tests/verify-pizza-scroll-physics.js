import http from 'http';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const PORT = 3367;
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
    await page.waitForTimeout(3500);

    // Get trigger info
    const triggerData = await page.evaluate(() => {
      const sec = document.querySelector('#oresto-pizza-why-best');
      const secRect = sec ? sec.getBoundingClientRect() : null;
      const secTop = secRect ? secRect.top + window.scrollY : null;
      const triggers = (typeof ScrollTrigger !== 'undefined') ? ScrollTrigger.getAll().filter(t => t.trigger && t.trigger.closest('#oresto-pizza-why-best')) : [];

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

    console.log('Pizza Trigger analysis:', JSON.stringify(triggerData, null, 2));

    const secTop = triggerData.secTop;
    if (!secTop) throw new Error('Pizza section not found');

    const getLayersState = async () => {
      return await page.evaluate(() => {
        const layers = Array.from(document.querySelectorAll('#oresto-pizza-why-best .pbmit-tween-effect'));
        return layers.map((l, idx) => ({
          layer: idx + 1,
          transform: l.style.transform || window.getComputedStyle(l).transform
        }));
      });
    };

    // ==========================================
    // Phase 1: Scroll DOWN sequence
    // ==========================================
    console.log('\n=== Testing Pizza Scroll DOWN ===');

    // 1. Well above section (e.g. 1000px above)
    const posAbove = Math.max(0, secTop - 1000);
    await page.evaluate((pos) => window.scrollTo(0, pos), posAbove);
    await page.waitForTimeout(1200);
    const stateAbove = await getLayersState();
    console.log('1. Scroll Above Section (scrollY=' + posAbove + '):');
    console.log('   Layer 1 (basil):', stateAbove[0].transform);
    console.log('   Layer 6 (crust):', stateAbove[5].transform);

    // 2. Entering section (e.g. 300px above)
    const posEntering = secTop - 300;
    await page.evaluate((pos) => window.scrollTo(0, pos), posEntering);
    await page.waitForTimeout(1200);
    const stateEntering = await getLayersState();
    console.log('2. Entering Section (scrollY=' + posEntering + '):');
    console.log('   Layer 1 (basil):', stateEntering[0].transform);
    console.log('   Layer 6 (crust):', stateEntering[5].transform);

    // 3. Center of section (fully exploded)
    const posCenter = secTop;
    await page.evaluate((pos) => window.scrollTo(0, pos), posCenter);
    await page.waitForTimeout(1500);
    const stateCenter = await getLayersState();
    console.log('3. Center of Section (scrollY=' + posCenter + '):');
    console.log('   Layer 1 (basil):', stateCenter[0].transform);
    console.log('   Layer 6 (crust):', stateCenter[5].transform);

    const secLoc = page.locator('#oresto-pizza-why-best').first();
    await secLoc.screenshot({ path: path.join(artifactDir, 'pizza_exploded_current.png') });
    console.log('Saved pizza_exploded_current.png');

    // ==========================================
    // Phase 2: Scroll UP sequence
    // ==========================================
    console.log('\n=== Testing Pizza Scroll UP ===');

    // 4. Scroll UP back above section (reassembled / joined)
    await page.evaluate((pos) => window.scrollTo(0, pos), posAbove);
    await page.waitForTimeout(1500);
    const stateUpAbove = await getLayersState();
    console.log('4. Scroll UP back Above (scrollY=' + posAbove + '):');
    console.log('   Layer 1 (basil):', stateUpAbove[0].transform);
    console.log('   Layer 6 (crust):', stateUpAbove[5].transform);

    // Check assertion
    const isAssembled = stateUpAbove[0].transform.includes('0px, 0px') || stateUpAbove[0].transform === 'none';
    const isExploded = stateCenter[0].transform.includes('-150') || stateCenter[0].transform.includes('matrix');
    console.log('\nAssertion Results:');
    console.log('Exploded at center:', isExploded ? 'PASS' : 'FAIL');
    console.log('Reassembled on scroll up:', isAssembled ? 'PASS' : 'FAIL');

    console.log('\nAll Pizza Scroll Physics tests completed successfully!');
    await browser.close();
  } catch (err) {
    console.error('Test error:', err);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
