const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

// Find all top-level links inside .navigation--main > .navigation__tier-1 > li > a
const tier1Regex = /<ul class="navigation__tier-1">([\s\S]*?)<\/ul>\s*<\/div>\s*<\/div>\s*<\/div>/i;
const tier1Match = html.match(tier1Regex);

if (tier1Match) {
  const content = tier1Match[1];
  // Find each <li class="navigation__item ...">
  const liRegex = /<li class="navigation__item([^"]*)">[\s\S]*?<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  console.log('--- TOP-LEVEL NAVIGATION BUTTONS ---');
  while ((match = liRegex.exec(content)) !== null) {
    const title = match[3].replace(/<[^>]+>/g, '').trim();
    if (title && !title.includes('Toggle menu')) {
      const url = match[2];
      const localPath = 'public' + url.split('?')[0];
      const exists = fs.existsSync(localPath);
      console.log(`Button: "${title}" -> href="${url}" [exists=${exists}]`);
    }
  }
} else {
  console.log('tier-1 not matched');
}
