const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);

    const elfsightDiv = $('.elfsight-app-4d09a611-784d-450d-b59c-7627aaa679fd');
    if (elfsightDiv.length > 0) {
        // Add a ResizeObserver script right after the widget container
        const scriptToAdd = `
        <script>
            window.addEventListener('load', function() {
                // Ensure ScrollTrigger exists
                setTimeout(function() {
                    if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
                        const target = document.querySelector('.elfsight-app-4d09a611-784d-450d-b59c-7627aaa679fd');
                        if (target && typeof ResizeObserver !== 'undefined') {
                            const observer = new ResizeObserver(() => {
                                window.ScrollTrigger.refresh();
                            });
                            observer.observe(target);
                        }
                    }
                }, 2000); // Small delay to allow initial scripts to load
            });
        </script>
        `;
        
        // Remove existing fix script if we added one before (none exists, but to be safe)
        if (html.includes('ResizeObserver')) {
            console.log('Already has resize observer');
        } else {
            elfsightDiv.parent().append(scriptToAdd);
            fs.writeFileSync(file, $.html());
            console.log(`Updated ${file}`);
        }
    }
};

updateFile('public/pizzabox/index.html');
