const fs = require('fs');

let html = fs.readFileSync('public/burger-garage/index.html', 'utf8');

// FIX 1: Animation timing
// Frenchyse data-start-position="70%" means:
// Animation starts when element's TOP is at 70% from top of viewport
// = when rect.top / windowHeight = 0.7  => progress = 1 - 0.7 = 0.3
// But this is from the ELEMENT'S perspective, not wrapper.
// The wrapper is tall (620px), so when it first enters:
//   - rect.top starts at ~windowHeight (progress ~= 0)
//   - We want animation to START at progress = 0.5 (element center near bottom)
//   - We want animation to END at progress = 0.9 (element near top of viewport)

const oldTiming = `                    // Start at 70% from top (progress = 0.3 since it's from bottom)
                    // Fully exploded when element center passes viewport center
                    var animProgress = (progress - 0.3) / 0.5;`;

const newTiming = `                    // Start animation when element is nicely in view (progress = 0.55)
                    // Fully exploded when element is high in viewport (progress = 0.95)
                    var animProgress = (progress - 0.55) / 0.4;`;

if (html.includes(oldTiming)) {
    html = html.replace(oldTiming, newTiming);
    console.log('Timing fixed!');
} else {
    console.log('Timing string not found! Looking for current value...');
    const idx = html.indexOf('animProgress = (progress -');
    if (idx > -1) {
        console.log('Found at:', html.substring(idx - 20, idx + 80));
    }
}

fs.writeFileSync('public/burger-garage/index.html', html);
