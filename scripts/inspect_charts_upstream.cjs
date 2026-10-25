const fs = require('fs');
const path = require('path');

const allFoodDocs = JSON.parse(fs.readFileSync('scripts/all_fooddocs_templates.json', 'utf8'));
const saimContent = fs.readFileSync('src/data/saim_templates.ts', 'utf8');
const jsonMatch = saimContent.match(/export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate\[\] = (\[[\s\S]*?\]);/);
const saimTemplates = JSON.parse(jsonMatch[1]);

const charts = saimTemplates.filter(t => t.type === 'chart');
console.log(`Analyzing ${charts.length} chart templates...`);

const results = [];

charts.forEach(c => {
  // match with allFoodDocs by title or slug
  const match = allFoodDocs.find(item => {
    const slugMatch = item.link && item.link.endsWith('/' + c.slug);
    const titleMatch = item.title && item.title.toLowerCase().trim() === c.title.toLowerCase().trim();
    return slugMatch || titleMatch;
  });

  results.push({
    id: c.id,
    title: c.title,
    slug: c.slug,
    localImg: c.imgUrl,
    matchedUpstream: match ? {
      title: match.title,
      link: match.link,
      img: match.img,
      pdf: match.pdf
    } : null
  });
});

console.log(`Matched ${results.filter(r => r.matchedUpstream).length} of ${results.length} charts to upstream.`);
fs.writeFileSync('scripts/chart_matches.json', JSON.stringify(results, null, 2));

results.forEach((r, i) => {
  if (r.matchedUpstream) {
    console.log(`${i+1}. [${r.id}] ${r.title}`);
    console.log(`   PDF: ${r.matchedUpstream.pdf}`);
    console.log(`   IMG: ${r.matchedUpstream.img}`);
  } else {
    console.log(`${i+1}. [${r.id}] ${r.title} --> NO MATCH FOUND`);
  }
});
