const fs = require('fs');
const cheerio = require('cheerio');
['index.html', 'index_1.html', 'index_2.html', 'index_3.html', 'index_4.html'].forEach(f => {
  const html = fs.readFileSync('./temp-scrape/' + f, 'utf8');
  const $ = cheerio.load(html);
  console.log(f, $('title').text());
});
