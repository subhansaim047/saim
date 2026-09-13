const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');

    // Add media query for the floating button to collapse into a circle on mobile
    if (html.indexOf('@media (max-width: 768px)') === -1 || html.indexOf('.floating-call-btn-text') === -1) {
        // Wrap the text in a span with a specific class
        html = html.replace('<span>CALL NOW</span>', '<span class="floating-call-btn-text">CALL NOW</span>');
        
        // Add the media query to the style block
        const mq = `
@media (max-width: 768px) {
    .floating-call-btn-text {
        display: none !important;
    }
    .floating-call-btn {
        padding: 10px !important;
        border-radius: 50% !important;
        bottom: 20px !important;
        left: 20px !important;
    }
    .floating-call-btn .icon-circle {
        width: 45px !important;
        height: 45px !important;
    }
}
</style>`;
        html = html.replace('</style>\n<a href="tel:03011337766"', mq + '\n<a href="tel:03011337766"');

        fs.writeFileSync(path.join(dir, file), html);
        console.log(`Updated mobile CSS in ${file}`);
    }
});
