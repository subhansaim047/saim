const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

const menIdx = html.indexOf('MEN');
console.log('MEN index:', menIdx);

// Look backwards from MEN
const snippetBefore = html.slice(menIdx - 600, menIdx + 1500);
console.log('--- SNIPPET AROUND MEN ---');
console.log(snippetBefore);
