const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'fooddocs_page.html'), 'utf8');

// Find the main banner / hero
const heroMatch = html.match(/<section[^>]*class="[^"]*hero[^"]*"[^>]*>([\s\S]*?)<\/section>/i) ||
                  html.match(/<div[^>]*class="[^"]*banner[^"]*"[^>]*>([\s\S]*?)<\/div>/i);

console.log('Hero match:', heroMatch ? heroMatch[0].substring(0, 600) : 'none');

// Look for filtering container
const filterMatch = html.match(/<div[^>]*class="[^"]*filtering[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
console.log('\nFilter match:', filterMatch ? filterMatch[0].substring(0, 800) : 'none');

// Look for sidebar or search
const searchMatch = html.match(/<input[^>]+class="[^"]*search[^"]*"[^>]*>/i);
console.log('\nSearch input:', searchMatch ? searchMatch[0] : 'none');

// Check the text of the headings and key takeaways
const takeaways = html.match(/<div[^>]*class="[^"]*takeaways[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
console.log('\nTakeaways:', takeaways ? takeaways[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 400) : 'none');
