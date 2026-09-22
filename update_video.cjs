const fs = require('fs');
let indexHtml = fs.readFileSync('public/fitbitepizza/index.html', 'utf8');

const overlayTag = '<div class="elementor-background-overlay"></div>';
const videoTag = '<video autoplay loop muted playsinline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; opacity: 0.8; pointer-events: none;"><source src="/fitbitepizza/images/hero-video.mp4" type="video/mp4"></video>';

if (indexHtml.includes(overlayTag)) {
    const parts = indexHtml.split(overlayTag);
    const newHtml = parts[0] + overlayTag + videoTag + parts.slice(1).join(overlayTag);
    fs.writeFileSync('public/fitbitepizza/index.html', newHtml, 'utf8');
    console.log('Video background successfully injected!');
} else {
    console.log('Failed to find the overlay tag.');
}
