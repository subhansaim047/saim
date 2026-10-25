import fs from 'fs';

const pagePlan = JSON.parse(fs.readFileSync('src/data/page_plan.json', 'utf8'));

const keepSlugs = Object.keys(pagePlan).filter(s => pagePlan[s].bucket === 'KEEP' || pagePlan[s].bucket === 'IMPROVE');
console.log(`Found ${keepSlugs.length} KEEP items:`);
keepSlugs.forEach((s, i) => {
  console.log(`${i + 1}. ${s}`);
});
