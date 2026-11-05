const fs = require('fs');
const html = fs.readFileSync('public/hotbite/index.html', 'utf8');

const modules = [...html.matchAll(/https:\/\/framerusercontent\.com\/sites\/[^\s"']+\.mjs/g)].map(m => m[0]);
const uniqueModules = [...new Set(modules)];
console.log('Unique modules:', uniqueModules);

async function findInModules() {
  for (const mod of uniqueModules) {
    try {
      const res = await fetch(mod);
      const txt = await res.text();
      if (txt.includes('Pepperoni') || txt.includes('PEPPERONI')) {
        console.log('MATCH FOUND IN:', mod);
      }
    } catch (e) {
      console.error('Error fetching', mod, e.message);
    }
  }
}

findInModules().catch(console.error);
