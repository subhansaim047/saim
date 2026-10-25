const fs = require('fs');
const path = require('path');
const https = require('https');

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      // Follow redirect if 301/302
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) redirectUrl = 'https://www.fooddocs.com' + redirectUrl;
        return fetchHtml(redirectUrl).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, finalUrl: url, data }));
    }).on('error', reject);
  });
}

// Find all cards from fooddocs_page.html
const cheerio = require('cheerio');
const html = fs.readFileSync(path.join(__dirname, 'fooddocs_page.html'), 'utf8');
const $ = cheerio.load(html);

const toolCards = [];
$('.template-grid__card').each((i, el) => {
  const type = $(el).attr('data-type') || '';
  const pre = $(el).find('.template-grid__preheader').text().trim();
  const href = $(el).find('a').first().attr('href') || '';
  const title = $(el).find('img').attr('alt') || pre;

  if (type === 'smart_tool' || type === 'quiz' || href.includes('calc') || href.includes('generator') || href.includes('matrix') || href.includes('plan') || href.includes('builder') || href.includes('flow-chart')) {
    toolCards.push({ index: i, type, pre, title, href });
  }
});

console.log(`Found ${toolCards.length} specialized/smart tools.`);
fs.writeFileSync(path.join(__dirname, 'smart_tools_list.json'), JSON.stringify(toolCards, null, 2), 'utf8');
console.table(toolCards.slice(0, 20));
