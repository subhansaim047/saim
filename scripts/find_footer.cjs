const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');
let idx = 0;
while ((idx = html.indexOf('footer', idx)) !== -1) {
  const snippet = html.slice(Math.max(0, idx - 100), idx + 200);
  if (snippet.includes('<footer') || snippet.includes('class="') && snippet.includes('footer')) {
    console.log(`Match at ${idx}:`, snippet.replace(/\n/g, ' '));
  }
  idx += 6;
}
