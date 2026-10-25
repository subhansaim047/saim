const https = require('https');

https.get('https://www.fooddocs.com/food-safety-templates/allergy-matrix', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Look for form or download links
    const formMatch = data.match(/<form[^>]*>(.*?)<\/form>/is);
    if (formMatch) {
      console.log('Form inputs:', formMatch[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
    }
    // Look for image of the template or matrix table
    const imgMatches = data.match(/<img[^>]+src="([^"]*template[^"]*)"/gi) || [];
    console.log('Images of template:', imgMatches);
    const allImages = data.match(/<img[^>]+src="([^"]+)"/gi) || [];
    allImages.slice(0, 10).forEach(i => console.log('IMG:', i));
  });
});
