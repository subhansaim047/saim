const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');
const navStart = html.indexOf('<nav class="navigation');
const navEnd = html.indexOf('</nav>', navStart);
const navHtml = html.slice(navStart, navEnd);

// Let's find the direct <ul> inside nav and its direct <li> children
const ulStart = navHtml.indexOf('<ul');
const directLiRegex = /<li\s+class="navigation__item\s+([^"]*)"/g;
let m;
while ((m = directLiRegex.exec(navHtml)) !== null) {
  // get link text
  const liSlice = navHtml.slice(m.index, m.index + 400);
  const aMatch = liSlice.match(/<a\s+class="navigation__link[^"]*"\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/i);
  if (aMatch) {
    const text = aMatch[2].replace(/<[^>]+>/g, '').trim();
    console.log(`Top item: "${text}" [${m[1]}] -> ${aMatch[1]}`);
  }
}
