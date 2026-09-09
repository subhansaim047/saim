const fs = require('fs');

const css = fs.readFileSync('post-1972.css', 'utf8');

// A very naive regex to extract rules containing f3401e1 or other elements inside the burger section.
// This is an Elementor generated CSS file, which is usually minified.
// Let's just output it to see.
console.log('CSS length:', css.length);

const burgerClasses = ['f3401e1', 'e2deafc', 'eb3db64', '593f64c', 'fcfb159', 'd8d8fc8', '11835df', 'e0915f0', '8d120a2', 'b4df9d1', 'c9cd2cd', 'a9ff085', '077ad6f', 'cd2a16c', '34f0732', '3e3a479'];
// Those are some Elementor element IDs that might be inside. I will just search for f3401e1.

const rules = css.split('}');
const matchedRules = [];

for (let rule of rules) {
    if (rule.includes('f3401e1') || rule.includes('burger')) {
        matchedRules.push(rule + '}');
    }
}

// Actually, the section has ID f3401e1. All child widgets have their own elementor-element-XXXXXXX classes.
// I need ALL rules that apply to descendants of .elementor-element-f3401e1!
// But Elementor CSS is written like .elementor-1972 .elementor-element.elementor-element-XXXXXXX
// I should extract the HTML of the section, find ALL data-id values, and extract those rules!

const cheerio = require('cheerio');
const html = fs.readFileSync('burger.html', 'utf8');
const $ = cheerio.load(html);
const section = $('*:contains("Our Pizza Do The Talking")').last().closest('.elementor-top-section');

const ids = [];
section.find('.elementor-element').each((i, el) => {
    ids.push($(el).attr('data-id'));
});
ids.push(section.attr('data-id'));

console.log('Found IDs:', ids.length);

for (let rule of rules) {
    let matched = false;
    for (let id of ids) {
        if (rule.includes(id)) {
            matched = true;
            break;
        }
    }
    if (matched) {
        matchedRules.push(rule.trim() + '}');
    }
}

fs.writeFileSync('extracted-burger.css', matchedRules.join('\n'));
console.log('Wrote extracted-burger.css with length', matchedRules.join('\n').length);
