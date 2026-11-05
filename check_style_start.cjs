const fs = require('fs');
const html = fs.readFileSync('public/hotbite/index.html', 'utf8');

const start = html.indexOf('<style id="oresto-custom-menu-styles">');
const end = html.indexOf('</style>', start);
console.log(html.slice(start, start + 300));
