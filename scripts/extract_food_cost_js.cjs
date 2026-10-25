const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'upstream_tools', 'food-cost-calculator.html'), 'utf8');

// Find all script blocks
const scripts = html.match(/<script[^>]*>([\s\S]*?)<\/script>/gi) || [];
for (const s of scripts) {
  if (s.includes('cost-total') || s.includes('cost-margin') || s.includes('kalkulaator')) {
    console.log('--- FOUND CALCULATOR SCRIPT ---');
    console.log(s.replace(/<[^>]+>/g, '').slice(0, 3000));
  }
}
