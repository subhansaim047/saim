import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';

scrape({
  urls: ['https://dilicious-demo.pbminfotech.com/pizza/our-team-member/'],
  directory: './temp-team',
  plugins: [
    new PuppeteerPlugin({
      launchOptions: { headless: true },
      scrollToBottom: { timeout: 10000, viewportN: 10 },
      blockNavigation: true
    })
  ]
}).then(() => console.log('Scraped Team!')).catch(console.error);
