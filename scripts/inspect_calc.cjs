const https = require('https');

https.get('https://www.fooddocs.com/food-safety-templates/food-cost-calculator', {
  headers: { 'User-Agent': 'Mozilla/5.0' }
}, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    // find calculator markup
    const calcMatch = d.match(/<form[^>]+id="[^"]*calc[^"]*"[^>]*>(.*?)<\/form>/is) || d.match(/<div[^>]+class="[^"]*calc[^"]*"[^>]*>(.*?)<\/div>/is);
    if (calcMatch) {
      console.log('Calculator HTML found:');
      console.log(calcMatch[0].substring(0, 1000));
    } else {
      console.log('Searching for inputs/labels in page:');
      const inputs = d.match(/<(input|select|button)[^>]*>/gi) || [];
      console.log('Inputs found:', inputs.length);
      inputs.slice(0, 20).forEach(i => console.log('  ' + i));
    }

    // Check custom scripts on the page
    const customScripts = d.match(/<script>(.*?)<\/script>/gis) || [];
    console.log('Inline script count:', customScripts.length);
    customScripts.forEach((s, idx) => {
      if (s.includes('calc') || s.includes('cost') || s.includes('margin') || s.includes('recipe')) {
        console.log(`Script ${idx} snippet:`, s.substring(0, 400));
      }
    });
  });
});
