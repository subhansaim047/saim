const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../../public/demos/dilicious-pizza/');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
    const p = path.join(dir, f);
    let html = fs.readFileSync(p, 'utf8');
    
    // Fix asset paths
    html = html.replace(/href="css\//g, 'href="/demos/dilicious-pizza/css/');
    html = html.replace(/src="js\//g, 'src="/demos/dilicious-pizza/js/');
    html = html.replace(/src="images\//g, 'src="/demos/dilicious-pizza/images/');
    html = html.replace(/href="fonts\//g, 'href="/demos/dilicious-pizza/fonts/');
    html = html.replace(/src="fonts\//g, 'src="/demos/dilicious-pizza/fonts/');
    html = html.replace(/url\(images\//g, 'url(/demos/dilicious-pizza/images/');
    
    // Fix navigation links to use clean URLs
    html = html.replace(/href="index\.html"/g, 'href="/demos/dilicious-pizza/"');
    html = html.replace(/href="about-us\.html"/g, 'href="/demos/dilicious-pizza/about-us/"');
    html = html.replace(/href="menu\.html"/g, 'href="/demos/dilicious-pizza/menu/"');
    html = html.replace(/href="reservation\.html"/g, 'href="/demos/dilicious-pizza/reservation/"');
    html = html.replace(/href="our-services\.html"/g, 'href="/demos/dilicious-pizza/our-services/"');
    html = html.replace(/href="contact-us\.html"/g, 'href="/demos/dilicious-pizza/contact-us/"');
    html = html.replace(/href="our-team\.html"/g, 'href="/demos/dilicious-pizza/our-team/"');
    
    fs.writeFileSync(p, html);
    console.log('Fixed URLs in', f);
});
