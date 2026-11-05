const fs = require('fs');

let html = fs.readFileSync('public/burger-garage/index.html', 'utf8');

// Remove old script
html = html.replace(/<!-- Burger Scroll Animation Script -->[\s\S]*?<\/script>/, '');

const scriptToInject = `
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
                        // index 0 = top bun, needs negative Y to go UP.
                        // index 7 = bottom bun, needs positive Y to go DOWN.
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
    </script>`;

html = html.replace('</body>', scriptToInject + '\n</body>');
fs.writeFileSync('public/burger-garage/index.html', html);
console.log('Script updated with better math.');
