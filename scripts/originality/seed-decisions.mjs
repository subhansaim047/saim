import fs from 'fs';
import path from 'path';

const REVIEW_DIR = path.join(process.cwd(), 'review');
const TEXT_CSV = path.join(REVIEW_DIR, 'originality-text.csv');
const IMAGES_CSV = path.join(REVIEW_DIR, 'originality-images.csv');
const LICENCES_CSV = path.join(REVIEW_DIR, 'licences.csv');
const OUTPUT_CSV = path.join(REVIEW_DIR, 'originality-decisions.csv');

function escapeCsv(str) {
  if (str === undefined || str === null) return '""';
  return `"${String(str).replace(/"/g, '""')}"`;
}

const rows = [];

// 1. Routes from originality-text.csv
if (fs.existsSync(TEXT_CSV)) {
  const textContent = fs.readFileSync(TEXT_CSV, 'utf8');
  const lines = textContent.split(/\r?\n/).filter(Boolean);
  // Skip header
  for (let i = 1; i < lines.length; i++) {
    const match = lines[i].match(/^"([^"]+)"/);
    if (!match) continue;
    const route = match[1];
    
    let type = 'text';
    let status = 'original';
    let notes = 'Bespoke agency page';
    
    if (route.startsWith('/food-safety-templates/')) {
      if (['/food-safety-templates/food-allergen-chart', '/food-safety-templates/recipe-calculator', '/food-safety-templates/food-cost-calculator', '/food-safety-templates/haccp-plan-builder', '/food-safety-templates/food-safety-quiz'].includes(route)) {
        type = 'tool';
        status = 'original';
        notes = 'Interactive client-side web application';
      } else {
        type = 'text';
        status = 'derived';
        notes = 'Kitchen operational checklist template';
      }
    } else if (route.startsWith('/blog/')) {
      type = 'text';
      status = 'original';
      notes = 'Commercial kitchen & agency editorial';
    }
    
    rows.push({
      asset_or_route: route,
      type,
      status,
      notes,
      action_owner: 'Saim Dev'
    });
  }
}

// 2. Packages & Fonts from licences.csv
if (fs.existsSync(LICENCES_CSV)) {
  const licContent = fs.readFileSync(LICENCES_CSV, 'utf8');
  const lines = licContent.split(/\r?\n/).filter(Boolean);
  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(',');
    const name = parts[0]?.replace(/"/g, '');
    if (!name) continue;
    const isFont = name.includes('(Font)');
    rows.push({
      asset_or_route: name,
      type: isFont ? 'font' : 'package',
      status: 'licensed',
      notes: parts[2]?.replace(/"/g, '') + ' license via ' + parts[3]?.replace(/"/g, ''),
      action_owner: 'Saim Dev'
    });
  }
}

// 3. Images from originality-images.csv
if (fs.existsSync(IMAGES_CSV)) {
  const imgContent = fs.readFileSync(IMAGES_CSV, 'utf8');
  const lines = imgContent.split(/\r?\n/).filter(Boolean);
  for (let i = 1; i < lines.length; i++) {
    const match = lines[i].match(/^"([^"]+)"/);
    if (!match) continue;
    const imgPath = match[1];
    
    let status = 'original';
    let notes = 'Public site visual asset';
    
    if (imgPath.startsWith('/templates/svg/')) {
      status = 'derived';
      notes = 'Vector kitchen checklist document';
    } else if (imgPath.includes('/anzaar/') || imgPath.includes('/demo/')) {
      status = 'licensed';
      notes = 'Demo template asset';
    }
    
    rows.push({
      asset_or_route: imgPath,
      type: 'image',
      status,
      notes,
      action_owner: 'Saim Dev'
    });
  }
}

const header = 'asset_or_route,type,status,notes,action_owner\n';
const content = rows.map(r => {
  return `${escapeCsv(r.asset_or_route)},${escapeCsv(r.type)},${escapeCsv(r.status)},${escapeCsv(r.notes)},${escapeCsv(r.action_owner)}`;
}).join('\n');

fs.writeFileSync(OUTPUT_CSV, header + content + '\n', 'utf8');
console.log(`Successfully seeded ${rows.length} decisions to ${OUTPUT_CSV}`);
