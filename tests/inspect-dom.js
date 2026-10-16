import fs from 'fs';

const html = fs.readFileSync('public/hotbite/index.html', 'utf8');

function findTagWithId(id) {
  const needle = `id="${id}"`;
  const idx = html.indexOf(needle);
  if (idx === -1) {
    console.log(`id="${id}" not found`);
    return;
  }
  const tagStart = html.lastIndexOf('<', idx);
  const tagEnd = html.indexOf('>', idx);
  console.log(`Tag for ${id}:`, html.substring(tagStart, tagEnd + 1));
}

findTagWithId('Testimonials');
findTagWithId('Gallery');
findTagWithId('Benefits');
findTagWithId('Menu');
