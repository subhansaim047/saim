const fs = require('fs');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const matches = html.match(/href="([^"]+)"/g);
if (matches) {
    const urls = matches.map(m => m.replace('href="', '').replace('"', ''));
    const nonRes = urls.filter(u => !u.endsWith('.css') && !u.endsWith('.js') && !u.includes('fonts') && !u.endsWith('.png') && !u.endsWith('.jpg') && !u.endsWith('.svg') && !u.startsWith('#') && !u.startsWith('tel:') && !u.startsWith('mailto:'));
    console.log([...new Set(nonRes)].join('\n'));
}
