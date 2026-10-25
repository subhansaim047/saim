import { chromium } from 'playwright';
import { spawn } from 'child_process';

async function main() {
  console.log('Starting Next.js production server on port 3033...');
  const server = spawn('npx', ['next', 'start', '-p', '3033'], {
    stdio: 'pipe',
    shell: true
  });

  // Wait for server to start
  await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    const requests = [];
    page.on('request', (req) => {
      requests.push({ url: req.url(), method: req.method(), resourceType: req.resourceType() });
    });

    console.log('Navigating to http://localhost:3033/ on clean context...');
    await page.goto('http://localhost:3033/', { waitUntil: 'networkidle' });

    const cookies = await context.cookies();
    const localStorageData = await page.evaluate(() => {
      return Object.keys(localStorage).map((k) => ({ key: k, value: localStorage.getItem(k) }));
    });

    await browser.close();

    console.log('\n--- NETWORK REQUESTS ---');
    console.log(`Total requests on first load: ${requests.length}`);
    const thirdParties = requests.filter(r => !r.url.includes('localhost:3033'));
    console.log(`Third-party requests: ${thirdParties.length}`);
    thirdParties.forEach(r => console.log(`  - ${r.url}`));

    console.log('\n--- COOKIES SET ---');
    console.log(`Total cookies on first load: ${cookies.length}`);
    cookies.forEach(c => console.log(`  - ${c.name} (${c.domain})`));

    console.log('\n--- LOCAL STORAGE ON FIRST LOAD ---');
    console.log(`Total localStorage items: ${localStorageData.length}`);
    localStorageData.forEach(item => console.log(`  - ${item.key}: ${item.value}`));

    return { requests, cookies, localStorageData, thirdParties };
  } finally {
    server.kill();
  }
}

main().catch(console.error);
