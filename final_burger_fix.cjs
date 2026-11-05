const fs = require('fs');

// 1. Fix CSS
let css = fs.readFileSync('public/burger-garage/assets/css/app.css', 'utf8');

css = css.replace(/\.burger-part-8 \{ top: 0px; z-index: 8; \}[\s\S]*?\.burger-part-1 \{ top: 240px; z-index: 1; \}/g, `
.burger-part-1 { top: 0px; z-index: 8; }
.burger-part-2 { top: 40px; z-index: 7; }
.burger-part-3 { top: 70px; z-index: 6; }
.burger-part-4 { top: 100px; z-index: 5; }
.burger-part-5 { top: 130px; z-index: 4; }
.burger-part-6 { top: 170px; z-index: 3; }
.burger-part-7 { top: 210px; z-index: 2; }
.burger-part-8 { top: 240px; z-index: 1; }
`);

fs.writeFileSync('public/burger-garage/assets/css/app.css', css);

// 2. Fix JS in HTML
let html = fs.readFileSync('public/burger-garage/index.html', 'utf8');

html = html.replace(/<!-- Burger Scroll Animation Script -->[\s\S]*?<\/script>/, `
    <!-- Burger Scroll Animation Script -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const wrapper = document.querySelector('.burger-exploding-wrapper');
            const parts = document.querySelectorAll('.burger-part');
            
            if (wrapper && parts.length > 0) {
                window.addEventListener('scroll', function() {
                    const rect = wrapper.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    // Calculate visibility progress
                    // 0 when top of wrapper is at bottom of screen
                    // 1 when bottom of wrapper is at top of screen
                    let progress = 1 - ((rect.top + rect.height/2) / windowHeight);
                    if (progress < 0) progress = 0;
                    if (progress > 1) progress = 1;
                    
                    parts.forEach((part, index) => {
                        // index 0 = part-1 (Top Bun), needs negative Y to go UP.
                        // index 7 = part-8 (Bottom Bun), needs positive Y to go DOWN.
                        // When index = 0 -> (0 - 3.5) = -3.5. So factor is negative.
                        const factor = (index - 3.5) * 50; 
                        
                        // Math.abs(progress - 0.5) is 0.5 at edges, 0 at center.
                        // Multiply by 2 so it goes from 1 (edges) to 0 (center).
                        const multiplier = Math.abs(progress - 0.5) * 2;
                        
                        // Add some rotation for extra flavor!
                        const rotation = (index % 2 === 0 ? 1 : -1) * factor * 0.05 * multiplier;
                        
                        const yOffset = factor * multiplier;
                        
                        part.style.transform = \`translateY(\${yOffset}px) rotate(\${rotation}deg)\`;
                    });
                });
            }
        });
    </script>`);

fs.writeFileSync('public/burger-garage/index.html', html);
console.log('Fix applied successfully.');
