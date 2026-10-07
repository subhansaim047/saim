const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/frenchyse/index.html', 'utf8');
const $ = cheerio.load(html, { recognizeSelfClosing: true, decodeEntities: false });

const widgetContainer = $('.elementor-widget-pbmit_testimonial_element .elementor-widget-container');

// I will keep the header part "Our Testimonials" and "Why People Choose Frenchyse" 
// (or whatever it says in h2), but remove the slider/carousel part and inject the script.

const carousel = widgetContainer.find('.pbmit-element-inner > div:not(.pbmit-ele-header-area)');
console.log("Removing elements count:", carousel.length);

carousel.remove();

const scriptTag = `<div style="margin-top: 40px; text-align: center;"><script defer async src='https://cdn.trustindex.io/loader.js?c9e53e082bbe37394996ba29931'></script></div>`;
widgetContainer.find('.pbmit-element-inner').append(scriptTag);

fs.writeFileSync('public/frenchyse/index.html', $.html(), 'utf8');
console.log("Injected script");
