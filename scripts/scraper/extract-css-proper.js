const fs = require('fs');
const css = require('css');

const cssContent = fs.readFileSync('post-1972.css', 'utf8');
const ast = css.parse(cssContent);

// We need to keep rules that match our burger section's IDs.
// Let's get the IDs.
const cheerio = require('cheerio');
const html = fs.readFileSync('burger.html', 'utf8');
const $ = cheerio.load(html);
const section = $('*:contains("Our Pizza Do The Talking")').last().closest('.elementor-top-section');

const ids = [];
section.find('.elementor-element').each((i, el) => {
    ids.push($(el).attr('data-id'));
});
ids.push(section.attr('data-id'));
console.log('Target IDs:', ids.length);

function filterRules(rules) {
    const kept = [];
    for (const rule of rules) {
        if (rule.type === 'rule') {
            const newSelectors = rule.selectors.filter(sel => {
                // If the selector contains any of our target IDs
                return ids.some(id => sel.includes(id)) || sel.includes('burger-part');
            }).map(sel => sel.replace(/\.elementor-1972/g, '.elementor-1124'));
            
            if (newSelectors.length > 0) {
                rule.selectors = newSelectors;
                kept.push(rule);
            }
        } else if (rule.type === 'media') {
            const keptMediaRules = filterRules(rule.rules);
            if (keptMediaRules.length > 0) {
                rule.rules = keptMediaRules;
                kept.push(rule);
            }
        } else if (rule.type === 'font-face' || rule.type === 'keyframes') {
            // Keep animations if they are related? Let's just keep all keyframes to be safe.
            if (rule.type === 'keyframes') kept.push(rule);
        }
    }
    return kept;
}

ast.stylesheet.rules = filterRules(ast.stylesheet.rules);

const extractedCss = css.stringify(ast);
fs.writeFileSync('burger-final.css', extractedCss);
console.log('Extracted CSS length:', extractedCss.length);
