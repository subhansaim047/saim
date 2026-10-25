const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://www.fooddocs.com/food-safety-templates';

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Fetched status:', res.statusCode);
    console.log('HTML size:', data.length);
    fs.writeFileSync(path.join(__dirname, 'fooddocs_page.html'), data, 'utf8');
    console.log('Saved raw HTML to scripts/fooddocs_page.html');
  });
}).on('error', err => {
  console.error('Fetch error:', err.message);
});
