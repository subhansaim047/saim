const fs = require('fs');
const files = fs.readdirSync('public/fitbitepizza').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(`public/fitbitepizza/${file}`, 'utf8');
    
    // Add defer to all scripts in the document that don't have defer or async or aren't inline
    // We only want to defer scripts like lottie, gsap, jquery etc. But jQuery shouldn't be deferred if there are inline scripts depending on it.
    // Instead of doing it everywhere, let's just defer the heaviest ones that are known to block render
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
        const regex = new RegExp(`(<script[^>]*src="[^"]*${script.replace('.', '\\.')}"[^>]*>)`, 'g');
        content = content.replace(regex, (match) => {
            if (!match.includes('defer') && !match.includes('async')) {
                return match.replace('<script', '<script defer');
            }
            return match;
        });
    });

    fs.writeFileSync(`public/fitbitepizza/${file}`, content, 'utf8');
});
console.log('Heavy scripts deferred!');
