const https = require('https');

https.get('https://www.fooddocs.com/food-safety-templates', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find all links inside article or main content
    const re = /<a[^>]+href="(\/food-safety-templates\/[^"]+)"[^>]*>(.*?)<\/a>/gis;
    let match;
    const items = [];
    while ((match = re.exec(data)) !== null) {
      const url = match[1].split('?')[0];
      const text = match[2].replace(/<[^>]+>/g, '').trim();
      if (text && !text.includes('Products') && !text.includes('Template Pack')) {
        items.push({ url, title: text });
      }
    }
    console.log('Total items found:', items.length);
    items.forEach(it => console.log(`${it.title} -> ${it.url}`));

    // Also look for smart tools specifically
    const smartToolsMatch = data.match(/Smart tools for more efficient food safety management.*?<\/section>/is);
    if (smartToolsMatch) {
      console.log('\n--- SMART TOOLS SECTION ---');
      console.log(smartToolsMatch[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
    }
  });
});
