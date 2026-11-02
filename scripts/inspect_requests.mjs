import { chromium } from "playwright";

async function inspectRequests() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const requests = [];

  page.on('request', req => {
    requests.push({
      url: req.url(),
      resourceType: req.resourceType(),
      startTime: Date.now()
    });
  });

  page.on('response', res => {
    const req = requests.find(r => r.url === res.url());
    if (req) {
      req.endTime = Date.now();
      req.status = res.status();
      req.duration = req.endTime - req.startTime;
    }
  });

  await page.goto("https://www.saimdev.site", { waitUntil: "load" });

  console.log("=== ALL LOADED RESOURCES ===");
  requests.sort((a, b) => (b.duration || 0) - (a.duration || 0));
  for (const r of requests) {
    console.log(`[${r.resourceType}] ${r.status || 'pending'} | ${r.duration || 0}ms | ${r.url.slice(0, 100)}`);
  }

  await browser.close();
}

inspectRequests().catch(console.error);
