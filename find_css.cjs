const fs = require('fs');

const html = fs.readFileSync('public/hotbite/index.html', 'utf8');

function findCss(selector) {
  const re = new RegExp(selector + '[^\\{]*\\{[^\\}]*\\}', 'g');
  const matches = html.match(re) || [];
  console.log(`CSS for ${selector}:`, matches.slice(0, 3));
}

findCss('\\.framer-kigcjc');
findCss('\\.framer-1ki8liq');
findCss('\\.framer-1jxn4z1');
findCss('\\.framer-styles-preset-sfcqnr');
findCss('\\.framer-styles-preset-1c9ddh5');
findCss('\\.framer-styles-preset-1gri6wc');
findCss('\\.framer-r8yvya');
findCss('\\.framer-25oic3');
