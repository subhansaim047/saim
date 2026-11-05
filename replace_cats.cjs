const fs = require('fs');
let content = fs.readFileSync('public/burger-garage/index.html', 'utf8');

const startTag = '<!-- Delicious Categories Section Start -->';
const endTag = '<!-- Delicious Categories Section End -->';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const beforeSection = content.substring(0, startIndex);
    const afterSection = content.substring(endIndex + endTag.length);
    const sectionContent = content.substring(startIndex, endIndex);
    
    const rowStart = sectionContent.indexOf('<div class="row">');
    
    const newRow = `<div class="row">
                                <div class="col-lg-4 col-sm-6 mb-32 mb-lg-0">
                                    <div class="category-card-1">
                                        <div class="img-block">
                                            <img src="assets/media/products/cat_burger.jpg" alt="Burgers" style="border-radius: 20px; width: 100%; aspect-ratio: 1/1; object-fit: cover;">
                                        </div>
                                        <a href="shop-grid.html" class="h4 title">Burgers</a>
                                        <img src="assets/media/vector/cc-vector.png" alt="" class="title-bg-vec">
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 mb-32 mb-lg-0">
                                    <div class="category-card-1">
                                        <div class="img-block">
                                            <img src="assets/media/products/cat_wrap.jpg" alt="Wraps" style="border-radius: 20px; width: 100%; aspect-ratio: 1/1; object-fit: cover;">
                                        </div>
                                        <a href="shop-grid.html" class="h4 title">Wraps</a>
                                        <img src="assets/media/vector/cc-vector.png" alt="" class="title-bg-vec">
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 mb-32 mb-lg-0">
                                    <div class="category-card-1">
                                        <div class="img-block">
                                            <img src="assets/media/products/cat_ice_tea.jpg" alt="Ice Tea" style="border-radius: 20px; width: 100%; aspect-ratio: 1/1; object-fit: cover;">
                                        </div>
                                        <a href="shop-grid.html" class="h4 title">Ice Tea</a>
                                        <img src="assets/media/vector/cc-vector.png" alt="" class="title-bg-vec">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    `;
                                
    const newSection = sectionContent.substring(0, rowStart) + newRow;
    
    fs.writeFileSync('public/burger-garage/index.html', beforeSection + newSection + afterSection);
    console.log('Categories replaced successfully.');
} else {
    console.log('Section not found.');
}
