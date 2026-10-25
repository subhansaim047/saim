const fs = require('fs');
const list = JSON.parse(fs.readFileSync('scripts/chart_url_status.json', 'utf8'));
const non200 = list.filter(item => item.pngStatus !== 200);
console.log('Non-200 PNG charts:', JSON.stringify(non200, null, 2));
