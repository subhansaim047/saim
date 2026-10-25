const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'fooddocs_page.html'), 'utf8');

// Use regex to find all <div class="template-grid__card-wrapper" ...>
const wrapperRegex = /<div class="template-grid__card-wrapper"([^>]*)>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;
let match;
const templates = [];

const singleRegex = /<div class="template-grid__card-wrapper"([^>]*)>([\s\S]*?)(?=<div class="template-grid__card-wrapper"|<\/div>\s*<\/div>\s*<\/section>)/g;

while ((match = singleRegex.exec(html)) !== null) {
  const attrs = match[1];
  const inner = match[2];

  // extract data attributes
  const typeMatch = attrs.match(/data-type="([^"]*)"/);
  const type = typeMatch ? typeMatch[1] : '';

  const actMatch = attrs.match(/data-activity="([^"]*)"/);
  const activity = actMatch ? actMatch[1] : '';

  const pdfMatch = attrs.match(/data-pdf="([^"]*)"/);
  const pdf = pdfMatch ? pdfMatch[1] : '';

  // image
  const imgMatch = inner.match(/<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/i) || inner.match(/<img[^>]+alt="([^"]*)"[^>]*src="([^"]+)"/i);
  let img = '';
  let imgAlt = '';
  if (imgMatch) {
    if (imgMatch[1].startsWith('http') || imgMatch[1].startsWith('/')) {
      img = imgMatch[1];
      imgAlt = imgMatch[2];
    } else {
      img = imgMatch[2];
      imgAlt = imgMatch[1];
    }
  }

  // target URL
  const linkMatch = inner.match(/<a[^>]+href="([^"]+)"/i);
  const link = linkMatch ? linkMatch[1] : '';

  // title
  const titleMatch = inner.match(/<h[345][^>]*>(.*?)<\/h[345]>/i) || inner.match(/<div class="template-grid__title"[^>]*>(.*?)<\/div>/i);
  let title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  // If title not found, try from alt or link
  if (!title && imgAlt) title = imgAlt;

  // preheader
  const preMatch = inner.match(/<div class="template-grid__preheader"[^>]*>(.*?)<\/div>/i);
  const preheader = preMatch ? preMatch[1].replace(/<[^>]+>/g, '').trim() : type.toUpperCase();

  // description
  const pMatch = inner.match(/<p[^>]*>(.*?)<\/p>/i);
  const desc = pMatch ? pMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  if (title || link) {
    templates.push({
      type,
      activity,
      pdf,
      img,
      link,
      title,
      preheader,
      desc
    });
  }
}

console.log('Total templates extracted:', templates.length);
console.log('Sample extracted:', JSON.stringify(templates.slice(0, 5), null, 2));

fs.writeFileSync(path.join(__dirname, 'all_fooddocs_templates.json'), JSON.stringify(templates, null, 2), 'utf8');
