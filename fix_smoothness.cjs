const fs = require('fs');

let html = fs.readFileSync('public/burger-garage/index.html', 'utf8');

// 1. Remove red dotted circle HTML
html = html.replace('<div class="burger-red-accents"></div>', '');

// 2. Make animation perfectly smooth with RequestAnimationFrame lerping
const oldScript = `    <!-- Burger Scroll Animation Script -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var wrapper = document.querySelector('.burger-exploding-wrapper');
            var parts = document.querySelectorAll('.burger-part');
            
            // EXACT data-y-end percentages from Frenchyse website
            // These are PERCENTAGE values (relative to each element's own height)
            // matching translate(0%, Y%) used by Frenchyse's GSAP plugin
            var endPercents = [-100, -120, -30, 0, 70, 110, 160, 165];
            
            if (wrapper && parts.length > 0) {
                window.addEventListener('scroll', function() {
                    var rect = wrapper.getBoundingClientRect();
                    var windowHeight = window.innerHeight;
                    
                    // Frenchyse uses data-start-position="70%" meaning: 
                    // animation starts when element is 70% from top of viewport
                    // = when element enters from bottom at 30% progress
                    var progress = 1 - (rect.top / windowHeight);
                    
                    // Start animation when element is nicely in view (progress = 0.55)
                    // Fully exploded when element is high in viewport (progress = 0.95)
                    var animProgress = (progress - 0.55) / 0.4;
                    
                    // Clamp between 0 and 1
                    if (animProgress < 0) animProgress = 0;
                    if (animProgress > 1) animProgress = 1;
                    
                    // Ease-out cubic (matching GSAP default)
                    var easeProgress = 1 - Math.pow(1 - animProgress, 3);
                    
                    for(var index = 0; index < parts.length; index++) {
                        if (index < endPercents.length) {
                            var part = parts[index];
                            // Get element's own height to replicate percentage behavior
                            var height = part.offsetHeight;
                            // Convert percentage to pixels: exactly how GSAP translate(0%, Y%) works
                            var yOffset = (endPercents[index] / 100) * height * easeProgress;
                            part.style.transform = 'translateY(' + yOffset + 'px)';
                        }
                    }
                });
                
                // Trigger once on load to set initial state
                window.dispatchEvent(new Event('scroll'));
            }
        });
    </script>`;

const newScript = `    <!-- Burger Scroll Animation Script -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var wrapper = document.querySelector('.burger-exploding-wrapper');
            var parts = document.querySelectorAll('.burger-part');
            var endPercents = [-100, -120, -30, 0, 70, 110, 160, 165];
            
            if (wrapper && parts.length > 0) {
                var targetProgress = 0;
                var currentProgress = 0;
                var heights = [];
                
                // Cache heights to avoid layout thrashing
                setTimeout(function() {
                    for(var i=0; i<parts.length; i++) {
                        heights[i] = parts[i].offsetHeight;
                    }
                    // Initial calculation
                    calculateTarget();
                    currentProgress = targetProgress;
                    render();
                }, 100);

                function calculateTarget() {
                    var rect = wrapper.getBoundingClientRect();
                    var windowHeight = window.innerHeight;
                    var progress = 1 - (rect.top / windowHeight);
                    
                    // Timing: Start when middle of screen, end when near top
                    var animProgress = (progress - 0.45) / 0.45;
                    
                    if (animProgress < 0) animProgress = 0;
                    if (animProgress > 1) animProgress = 1;
                    
                    targetProgress = animProgress;
                }

                window.addEventListener('scroll', function() {
                    calculateTarget();
                }, { passive: true });

                function render() {
                    // Smooth lerping (interpolation) for buttery feel
                    currentProgress += (targetProgress - currentProgress) * 0.1;
                    
                    // Ease-out cubic
                    var easeProgress = 1 - Math.pow(1 - currentProgress, 3);
                    
                    for(var index = 0; index < parts.length; index++) {
                        if (index < endPercents.length && heights[index]) {
                            var part = parts[index];
                            var yOffset = (endPercents[index] / 100) * heights[index] * easeProgress;
                            part.style.transform = 'translate3d(0, ' + yOffset + 'px, 0)';
                        }
                    }
                    
                    requestAnimationFrame(render);
                }
                
                requestAnimationFrame(render);
            }
        });
    </script>`;

html = html.replace(oldScript, newScript);
fs.writeFileSync('public/burger-garage/index.html', html);

// 3. Remove CSS for red circle and CSS transition lag
let css = fs.readFileSync('public/burger-garage/assets/css/app.css', 'utf8');

css = css.replace(
`.burger-red-accents {
    position: absolute;
    width: 500px;
    height: 500px;
    z-index: 2;
    background: transparent;
    border-radius: 50%;
    border: 2px dashed #d42b2b;
    animation: rotateSlowly 25s linear infinite;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
}`, '');

css = css.replace(
`.burger-part {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    transition: transform 0.1s linear;
}`,
`.burger-part {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    will-change: transform;
}`
);

fs.writeFileSync('public/burger-garage/assets/css/app.css', css);

console.log('Fixed smoothness, timing, and removed red dashed circle.');
