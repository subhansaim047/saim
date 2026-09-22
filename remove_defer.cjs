const fs = require('fs');
const files = fs.readdirSync('public/fitbitepizza').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(`public/fitbitepizza/${file}`, 'utf8');
    
    // The scripts I deferred were:
    const heavyScripts = [
        'lottie-player.min.js',
        'gsap.min.js',
        'ScrollTrigger.js',
        'elementor.min.js',
        'frontend.min.js',
        'core.min.js',
        'swiper.min.js',
        'jquery.magnific-popup.min.js',
        'select2.full.min.js'
    ];
    
    heavyScripts.forEach(script => {
        const regex = new RegExp(`(<script[^>]*defer[^>]*src="[^"]*${script.replace('.', '\\.')}"[^>]*>)`, 'g');
        content = content.replace(regex, (match) => {
            return match.replace(/defer(="")?\s*/g, '');
        });
    });

    fs.writeFileSync(`public/fitbitepizza/${file}`, content, 'utf8');
});
console.log('Defer removed!');
