const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'saim_templates.ts'), 'utf8');
const match = content.match(/export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*(\[[\s\S]*?\]);/);
const saimTemplates = JSON.parse(match[1]);

const uniqueTemplates = JSON.parse(fs.readFileSync(path.join(__dirname, 'unique_templates.json'), 'utf8'));

console.log('Total Saim Templates:', saimTemplates.length);
console.log('Total Unique Upstream Templates:', uniqueTemplates.length);

const posters = saimTemplates.filter(t => t.type === 'poster');
console.log('\nTotal Posters:', posters.length);

const posterMappings = [];

for (const p of posters) {
  // Find matching upstream template
  let upstream = uniqueTemplates.find(u => u.slug === p.slug || (u.link && u.link.endsWith('/' + p.slug)));
  if (!upstream) {
    upstream = uniqueTemplates.find(u => u.title.toLowerCase().trim() === p.title.toLowerCase().trim());
  }

  let pdfUrl = upstream ? upstream.pdf : '';
  let pngUrl = '';
  if (pdfUrl) {
    pngUrl = pdfUrl.replace('.pdf', '.png');
  }

  posterMappings.push({
    id: p.id,
    slug: p.slug,
    title: p.title,
    currentImg: p.imgUrl,
    upstreamLink: upstream ? upstream.link : '',
    upstreamPdf: pdfUrl,
    posterPngUrl: pngUrl
  });
}

console.log('Sample poster mappings:');
console.log(posterMappings.slice(0, 5));

const missingPdf = posterMappings.filter(m => !m.upstreamPdf);
console.log('\nMissing upstream PDF/PNG:', missingPdf.length);
if (missingPdf.length > 0) {
  console.log('Missing items:', missingPdf);
}

fs.writeFileSync(path.join(__dirname, 'poster_mappings.json'), JSON.stringify(posterMappings, null, 2));
console.log('\nWrote scripts/poster_mappings.json');
