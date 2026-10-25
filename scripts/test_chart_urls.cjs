const fs = require('fs');
const https = require('https');

const charts = JSON.parse(fs.readFileSync('scripts/chart_matches.json', 'utf8'));

function checkUrl(url) {
  return new Promise((resolve) => {
    if (!url) return resolve({ url, status: 0 });
    const req = https.request(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve({ url, status: res.statusCode });
    });
    req.on('error', () => resolve({ url, status: 500 }));
    req.setTimeout(5000, () => { req.destroy(); resolve({ url, status: 408 }); });
    req.end();
  });
}

async function testAll() {
  console.log(`Testing image availability for 45 charts...`);
  const tested = [];

  for (const c of charts) {
    let pdfUrl = c.matchedUpstream ? c.matchedUpstream.pdf : '';
    let pngCandidate = pdfUrl ? pdfUrl.replace(/\.pdf$/i, '.png') : '';
    let svgUrl = c.matchedUpstream ? c.matchedUpstream.img : '';

    const pngRes = await checkUrl(pngCandidate);
    const pdfRes = await checkUrl(pdfUrl);

    tested.push({
      id: c.id,
      title: c.title,
      slug: c.slug,
      pngUrl: pngCandidate,
      pngStatus: pngRes.status,
      pdfUrl: pdfUrl,
      pdfStatus: pdfRes.status,
      svgUrl: svgUrl
    });
    console.log(`[${c.id}] ${c.title.padEnd(35)} -> PNG: ${pngRes.status}, PDF: ${pdfRes.status}`);
  }

  fs.writeFileSync('scripts/chart_url_status.json', JSON.stringify(tested, null, 2));
  const png200 = tested.filter(t => t.pngStatus === 200).length;
  const pdf200 = tested.filter(t => t.pdfStatus === 200).length;
  console.log(`\nSummary: PNG 200: ${png200}/45, PDF 200: ${pdf200}/45`);
}

testAll();
