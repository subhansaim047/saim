const fs = require('fs');
const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

const qStart = html.indexOf('class="quotes-carousel');
const qEnd = html.indexOf('class="logos-carousel');

const quotesHtml = html.slice(qStart, qEnd);
console.log('Quotes section length:', quotesHtml.length);

// Find all quotes
const quoteMatches = quotesHtml.match(/<div[^>]*class="[^"]*logo-list-content[^"]*"[\s\S]*?<\/div>/gi);
console.log('Total quote slides found:', quoteMatches ? quoteMatches.length : 0);
if (quoteMatches) {
  quoteMatches.forEach((q, i) => {
    const textMatch = q.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    const isCloned = q.includes('slick-cloned');
    console.log(`Quote ${i} [cloned=${isCloned}]:`, textMatch ? textMatch[1].trim() : 'EMPTY');
  });
}
