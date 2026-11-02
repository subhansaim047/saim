import * as chromeLauncher from 'chrome-launcher';
import lighthouse from 'lighthouse';

async function diagnose() {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  try {
    const res = await lighthouse('https://www.saimdev.site', {
      port: chrome.port,
      output: 'json',
      onlyCategories: ['accessibility'],
      logLevel: 'error'
    });
    const audits = res.lhr.audits;
    console.log("ACCESSIBILITY SCORE:", res.lhr.categories.accessibility.score * 100);
    for (const [key, audit] of Object.entries(audits)) {
      if (audit.score !== null && audit.score < 1) {
        console.log(`\nFAIL: [${key}] - ${audit.title}`);
        console.log(`Description: ${audit.description}`);
        if (audit.details && audit.details.items) {
          console.log(`Items flagged:`, JSON.stringify(audit.details.items.slice(0, 5), null, 2));
        }
      }
    }
  } finally {
    await chrome.kill();
  }
}

diagnose().catch(console.error);
