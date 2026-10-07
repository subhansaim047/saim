const fs = require('fs');

let css = fs.readFileSync('public/pizzabox/css/combined_index.css', 'utf8');

// Remove the body { background-color: #000 !important } we added and replace only with specific override
css = css.replace(
`/* Fix body background - Elegencia has pure black body bg not beige */
body {
    background-color: #000 !important;
}`,
`/* Fix body background - only override for hero, not all sections */`
);

// Add the section backgrounds explicitly to maintain white/original bg
const additionalFix = `
/* RESTORE SECTION BACKGROUNDS - hero is black, rest of page should be white/original */
#custom-elegancia-hero {
    background-color: #000 !important;
}
/* Force sections after hero to have white background */
#custom-elegancia-hero ~ section,
#custom-elegancia-hero ~ .elementor-section,
.elementor-section-wrap > .elementor-section {
    background-color: #ffffff;
}
`;

// Append after the existing elegancia block
fs.writeFileSync('public/pizzabox/css/combined_index.css', css + additionalFix);
console.log('Fixed - body is no longer black globally');
