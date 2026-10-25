const https = require('https');

https.get('https://www.fooddocs.com/food-safety-templates', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Length:', data.length);
    // Find template titles or links
    const matches = data.match(/<h[234][^>]*>(.*?)<\/h[234]>/gi) || [];
    console.log('Headings found:', matches.length);
    matches.slice(0, 30).forEach(m => console.log(' - ' + m.replace(/<[^>]+>/g, '').trim()));
    
    // Check links
    const linkMatches = data.match(/href="(\/[^"]*template[^"]*)"/gi) || [];
    console.log('\nTemplate links found:', linkMatches.length);
    const uniqueLinks = [...new Set(linkMatches.map(l => l.replace(/href="|"/g, '')))];
    uniqueLinks.slice(0, 25).forEach(l => console.log(' - ' + l));
  });
}).on('error', err => {
  console.error('Error:', err.message);
});
