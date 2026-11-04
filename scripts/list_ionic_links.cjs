const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

const regex = /<a[^>]+href="[^"]*ionic-black-leather-jacket[^"]*"[^>]*>([\s\S]*?)<\/a>/gi;
let m;
let count = 0;
while ((m = regex.exec(html)) !== null) {
  count++;
  const fullTag = m[0];
  const inner = m[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  const classMatch = fullTag.match(/class="([^"]+)"/);
  console.log(`[${count}] class="${classMatch ? classMatch[1] : ''}" | text="${inner.slice(0, 60)}"`);
}
