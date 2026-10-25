const https = require('https');

function checkUrl(url) {
  https.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  }, (res) => {
    console.log(`\n=== URL: ${url} (Status: ${res.statusCode}) ===`);
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Length:', data.length);
      // check for interactive elements, inputs, buttons, tables
      const hasTable = data.includes('<table');
      const hasInputs = (data.match(/<input/g) || []).length;
      const hasForm = (data.match(/<form/g) || []).length;
      console.log('Table present:', hasTable, '| Inputs:', hasInputs, '| Forms:', hasForm);
      // find title or description
      const titleMatch = data.match(/<h1[^>]*>(.*?)<\/h1>/is);
      if (titleMatch) console.log('H1:', titleMatch[1].replace(/<[^>]+>/g, '').trim());
      // Check for iframe or interactive tool widget
      const iframes = data.match(/<iframe[^>]+src="([^"]+)"/gi) || [];
      console.log('Iframes:', iframes);
      // Look for download / matrix text
      const matches = data.match(/<h2[^>]*>(.*?)<\/h2>/gi) || [];
      matches.slice(0, 10).forEach(m => console.log(' H2:', m.replace(/<[^>]+>/g, '').trim()));
    });
  });
}

checkUrl('https://www.fooddocs.com/food-safety-templates/allergy-matrix');
checkUrl('https://www.fooddocs.com/food-safety-templates/food-allergen-chart');
