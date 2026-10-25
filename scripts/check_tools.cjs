const https = require('https');

function checkTool(path) {
  https.get('https://www.fooddocs.com' + path, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  }, res => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => {
      console.log(`\n=== Tool: ${path} (status: ${res.statusCode}) ===`);
      const h1 = d.match(/<h1[^>]*>(.*?)<\/h1>/i);
      console.log('H1:', h1 ? h1[1].replace(/<[^>]+>/g, '').trim() : 'none');
      // check for scripts or tool calculators
      const scripts = d.match(/<script[^>]*src="([^"]+)"/gi) || [];
      console.log('Script count:', scripts.length);
      const toolDiv = d.match(/<div[^>]+id="[^"]*(calc|tool|generator|matrix)[^"]*"[^>]*>/gi);
      console.log('Tool div:', toolDiv);
    });
  });
}

checkTool('/food-safety-templates/food-cost-calculator');
checkTool('/food-safety-templates/recipe-card-generator');
checkTool('/food-safety-templates/allergy-matrix');
