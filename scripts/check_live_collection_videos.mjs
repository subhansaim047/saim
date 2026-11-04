import https from 'https';

async function fetchLive(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const html = await fetchLive('https://www.thejacketmaker.pk/collections/mens-leather-jackets');
  console.log('Live collection HTML length:', html.length);
  
  // check for videos
  const videoMatches = [...html.matchAll(/<video[^>]*>.*?<\/video>/gis)];
  console.log('Video matches in collection:', videoMatches.length);
  for (const vm of videoMatches.slice(0, 5)) {
    console.log('VIDEO:', vm[0].slice(0, 300));
  }
  
  // check for mp4 or webm
  const mp4Matches = [...html.matchAll(/[^"'\s<>]+\.(?:mp4|webm)/gi)];
  console.log('MP4 matches in collection:', mp4Matches.length);
  for (const mm of mp4Matches.slice(0, 5)) {
    console.log('MP4:', mm[0]);
  }

  // check for data-video or hover video
  const dataVideoMatches = [...html.matchAll(/data-[a-z0-9_-]*video[a-z0-9_-]*="[^"]*"/gi)];
  console.log('data-video matches:', dataVideoMatches.length);
  for (const dm of dataVideoMatches.slice(0, 5)) {
    console.log('DATA-VIDEO:', dm[0]);
  }
}

main().catch(console.error);
