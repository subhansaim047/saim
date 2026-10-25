const fs = require('fs');
const path = require('path');
const https = require('https');
const cheerio = require('cheerio');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) redirectUrl = 'https://www.fooddocs.com' + redirectUrl;
        return fetchUrl(redirectUrl).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, finalUrl: url, data }));
    }).on('error', reject);
  });
}

const urls = [
  'https://www.fooddocs.com/haccp-plan-template/allergy-matrix',
  'https://www.fooddocs.com/food-safety-templates/recipe-calculator',
  'https://www.fooddocs.com/food-safety-templates/food-cost-calculator',
  'https://www.fooddocs.com/food-safety-templates/recipe-card-generator',
  'https://www.fooddocs.com/food-safety-quiz',
  'https://www.fooddocs.com/food-safety-templates/freezer-temperature-chart'
];

async function run() {
  const outputDir = path.join(__dirname, 'upstream_tools');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  for (const url of urls) {
    const slug = url.split('/').pop().replace(/\.html$/, '');
    console.log(`\nFetching: ${url}`);
    try {
      const res = await fetchUrl(url);
      console.log(`Status: ${res.status}, Length: ${res.data.length}`);
      const filePath = path.join(outputDir, `${slug}.html`);
      fs.writeFileSync(filePath, res.data, 'utf8');

      // Analyze page with Cheerio
      const $ = cheerio.load(res.data);
      const title = $('title').text().trim();
      const h1 = $('h1').first().text().replace(/\s+/g, ' ').trim();
      console.log(`Title: ${title}`);
      console.log(`H1: ${h1}`);

      // Check forms, inputs, interactive widgets, embeds
      const forms = $('form').length;
      const inputs = $('input, select, textarea').length;
      const tables = $('table').length;
      const iframes = $('iframe').length;
      const toolContainers = $('[class*="calc"], [class*="matrix"], [class*="tool"], [class*="quiz"], [class*="generator"], [id*="calc"], [id*="matrix"], [id*="tool"]').length;
      console.log(`Forms: ${forms}, Inputs: ${inputs}, Tables: ${tables}, Iframes: ${iframes}, Tool containers: ${toolContainers}`);

      // List all classes containing tool/calc/matrix/quiz
      const specificClasses = [];
      $('[class]').each((_, el) => {
        const cls = $(el).attr('class') || '';
        cls.split(/\s+/).forEach(c => {
          if (/tool|calc|matrix|quiz|generator|recipe/i.test(c) && !specificClasses.includes(c)) {
            specificClasses.push(c);
          }
        });
      });
      console.log(`Matching classes (${specificClasses.length}):`, specificClasses.slice(0, 10));

    } catch (e) {
      console.error(`Error fetching ${url}:`, e.message);
    }
  }
}

run();
