const fs = require('fs');

const target = `<div style="position:relative;display:inline-block;"><div style="position: relative; display: inline-block; transform: translate(0px, 0px); opacity: 1;">P</div><div style="position: relative; display: inline-block; transform: translate(0px, 0px); opacity: 1;">i</div><div style="position: relative; display: inline-block; transform: translate(0px, 0px); opacity: 1;">z</div><div style="position: relative; display: inline-block; transform: translate(0px, 0px); opacity: 1;">z</div><div style="position: relative; display: inline-block; transform: translate(0px, 0px); opacity: 1;">a</div><div style="position: relative; display: inline-block; transform: translate(0px, 0px); opacity: 1;">,</div></div>`;
const replacement = `<div style="position:relative;display:inline-block;"><div style="position: relative; display: inline-block; transform: translate(0px, 0px); opacity: 1;">F</div><div style="position: relative; display: inline-block; transform: translate(0px, 0px); opacity: 1;">o</div><div style="position: relative; display: inline-block; transform: translate(0px, 0px); opacity: 1;">o</div><div style="position: relative; display: inline-block; transform: translate(0px, 0px); opacity: 1;">d</div><div style="position: relative; display: inline-block; transform: translate(0px, 0px); opacity: 1;">,</div></div>`;

const files = fs.readdirSync('public/fitbitepizza').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let html = fs.readFileSync(`public/fitbitepizza/${file}`, 'utf8');
    if (html.includes(target)) {
        html = html.replace(target, replacement);
        fs.writeFileSync(`public/fitbitepizza/${file}`, html, 'utf8');
        console.log(`Replaced in ${file}`);
    }
});
