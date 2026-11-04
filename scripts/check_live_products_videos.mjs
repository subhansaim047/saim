import https from 'https';

async function fetchLive(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function checkProds() {
  const handles = [
    'don-long-black-leather-coat',
    'ionic-black-leather-jacket',
    'dean-brown-leather-biker-jacket',
    'allaric-alley-black-leather-biker-jacket',
    'agent-shadow-black-leather-bomber-jacket'
  ];

  for (const h of handles) {
    const html = await fetchLive(`https://www.thejacketmaker.pk/products/${h}`);
    const videos = [...html.matchAll(/<video[^>]*>.*?<\/video>/gis)].map(m => m[0]);
    const mp4s = [...html.matchAll(/https?:\/\/[^\s"']+\.mp4[^\s"']*/gi)].map(m => m[0]);
    console.log(`Product ${h}: ${videos.length} <video> tags, ${mp4s.length} MP4 links`);
    if (videos.length) {
      console.log('Sample video tag:', videos[0].slice(0, 300));
    }
  }
}

checkProds().catch(console.error);
