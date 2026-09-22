const fs = require('fs');
const path = require('path');

const preloaderHTML = `
<div id="site-preloader" style="position:fixed;top:0;left:0;width:100%;height:100%;background:#1b1b1b;z-index:999999;display:flex;align-items:center;justify-content:center;transition:opacity 0.4s ease-out;">
  <img src="/fitbitepizza/images/anzaar-logo.png" style="width: 150px; animation: pulse 1.5s infinite;">
</div>
<style>
@keyframes pulse {
  0% { transform: scale(0.9); opacity: 0.8; }
  50% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0.8; }
}
</style>
<script>
window.addEventListener('load', function() {
    const p = document.getElementById('site-preloader');
    if(p) {
        p.style.opacity = '0';
        setTimeout(() => p.remove(), 400);
    }
});
</script>
`;

const dir = 'public/fitbitepizza';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const htmlPath = path.join(dir, file);
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Check if preloader already added
    if (!html.includes('site-preloader')) {
        // Find the <body ...> tag and inject preloader right after it
        html = html.replace(/(<body[^>]*>)/i, `$1\n${preloaderHTML}\n`);
        fs.writeFileSync(htmlPath, html, 'utf8');
        console.log(`Added preloader to ${file}`);
    }
});
