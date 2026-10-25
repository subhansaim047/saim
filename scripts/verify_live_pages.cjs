const http = require('http');

function get(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function run() {
  const page = await get('http://localhost:3010/food-safety-templates/kitchen-opening-and-closing-checklist');
  console.log('Opening Checklist Status:', page.status);
  console.log('Contains Verification Log?:', page.data.includes('Daily Commercial Kitchen Verification Log'));
}

run();
