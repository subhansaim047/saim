const fs = require('fs');

const menuHtml = 
                    <!-- Our Menu Section Start -->    
                    <section class="py-80">
                        <div class="container-fluid">
                            <div class="heading text-center mb-48">
                                <p class="eyebrow">- EXPLORE MENU</p>
                                <h3 class="title">Our <span class="h3">Burger Garage Menu</span></h3>
                            </div>
                            
                            <!-- Box Switching / Tabs -->
                            <ul class="nav nav-pills justify-content-center mb-48" id="menu-tabs" role="tablist" style="gap: 16px;">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active cus-btn" id="burgers-tab" data-bs-toggle="pill" data-bs-target="#burgers" type="button" role="tab" aria-selected="true">Burgers</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link cus-btn" id="wraps-tab" data-bs-toggle="pill" data-bs-target="#wraps" type="button" role="tab" aria-selected="false">Wraps</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link cus-btn" id="starters-tab" data-bs-toggle="pill" data-bs-target="#starters" type="button" role="tab" aria-selected="false">Engine Starters</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link cus-btn" id="nuggets-tab" data-bs-toggle="pill" data-bs-target="#nuggets" type="button" role="tab" aria-selected="false">Chicken Nuggets</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link cus-btn" id="sauces-tab" data-bs-toggle="pill" data-bs-target="#sauces" type="button" role="tab" aria-selected="false">Engine Oil</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link cus-btn" id="drinks-tab" data-bs-toggle="pill" data-bs-target="#drinks" type="button" role="tab" aria-selected="false">Ice Tea</button>
                                </li>
                            </ul>
                            
                            <!-- Tab Content -->
                            <div class="tab-content" id="menu-tabContent">
                                
                                <!-- Burgers -->
                                <div class="tab-pane fade show active" id="burgers" role="tabpanel" aria-labelledby="burgers-tab">
                                    <div class="row">
                                        <!-- Corolla Zinger -->
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <div class="product-img mb-16" style="height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 20px;">
                                                    <img src="assets/media/products/corolla_zinger_1791396318458.jpg" alt="Corolla Zinger" style="max-height: 100%; object-fit: cover;">
                                                </div>
                                                <a href="#" class="h5 title">Corolla Zinger</a>
                                                <p class="desc">Crispy zinger, melted cheese & black olives</p>
                                                <h5 class="price mt-3">M: Rs 440 | L: Rs 680</h5>
                                            </div>
                                        </div>
                                        <!-- Civic Grill -->
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <div class="product-img mb-16" style="height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 20px;">
                                                    <img src="assets/media/products/p_1.png" alt="Civic Grill" style="max-height: 100%; object-fit: cover;">
                                                </div>
                                                <a href="#" class="h5 title">Civic Grill</a>
                                                <p class="desc">Grilled chicken, jalapenos & red pepperoni</p>
                                                <h5 class="price mt-3">M: Rs 440 | L: Rs 710</h5>
                                            </div>
                                        </div>
                                        <!-- Hillux Fillet -->
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <div class="product-img mb-16" style="height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 20px;">
                                                    <img src="assets/media/products/p_2.png" alt="Hillux Fillet" style="max-height: 100%; object-fit: cover;">
                                                </div>
                                                <a href="#" class="h5 title">Hillux Fillet</a>
                                                <p class="desc">Crispy chicken fillet with red jalapenos</p>
                                                <h5 class="price mt-3">M: Rs 440 | L: Rs 700</h5>
                                            </div>
                                        </div>
                                        <!-- Picanto Chapli -->
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <div class="product-img mb-16" style="height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 20px;">
                                                    <img src="assets/media/products/p_3.png" alt="Picanto Chapli" style="max-height: 100%; object-fit: cover;">
                                                </div>
                                                <a href="#" class="h5 title">Picanto Chapli</a>
                                                <p class="desc">Chapli kabab with red onions & sauce</p>
                                                <h5 class="price mt-3">M: Rs 360 | L: Rs 600</h5>
                                            </div>
                                        </div>
                                        <!-- Alto Patty -->
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <div class="product-img mb-16" style="height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 20px;">
                                                    <img src="assets/media/products/p_4.png" alt="Alto Patty" style="max-height: 100%; object-fit: cover;">
                                                </div>
                                                <a href="#" class="h5 title">Alto Patty</a>
                                                <p class="desc">Classic chicken patty with cheese</p>
                                                <h5 class="price mt-3">M: Rs 320 | L: Rs 580</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Wraps -->
                                <div class="tab-pane fade" id="wraps" role="tabpanel" aria-labelledby="wraps-tab">
                                    <div class="row">
                                        <!-- 22 Wheeler -->
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <div class="product-img mb-16" style="height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 20px;">
                                                    <img src="assets/media/products/pd_1.png" alt="22 Wheeler" style="max-height: 100%; object-fit: cover;">
                                                </div>
                                                <a href="#" class="h5 title">22 Wheeler</a>
                                                <p class="desc">Grilled chicken & fries inside</p>
                                                <h5 class="price mt-3">M: Rs 500 | L: Rs 780</h5>
                                            </div>
                                        </div>
                                        <!-- 24 Wheeler -->
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <div class="product-img mb-16" style="height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 20px;">
                                                    <img src="assets/media/products/pd_2.png" alt="24 Wheeler" style="max-height: 100%; object-fit: cover;">
                                                </div>
                                                <a href="#" class="h5 title">24 Wheeler</a>
                                                <p class="desc">Crispy zinger chicken wrap</p>
                                                <h5 class="price mt-3">M: Rs 500 | L: Rs 770</h5>
                                            </div>
                                        </div>
                                        <!-- 28 Wheeler -->
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <div class="product-img mb-16" style="height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 20px;">
                                                    <img src="assets/media/products/pd_3.png" alt="28 Wheeler" style="max-height: 100%; object-fit: cover;">
                                                </div>
                                                <a href="#" class="h5 title">28 Wheeler</a>
                                                <p class="desc">Spicy chicken, jalapenos & olives</p>
                                                <h5 class="price mt-3">M: Rs 500 | L: Rs 820</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Engine Starters -->
                                <div class="tab-pane fade" id="starters" role="tabpanel" aria-labelledby="starters-tab">
                                    <div class="row">
                                        <!-- Loaded Fries -->
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <div class="product-img mb-16" style="height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 20px;">
                                                    <img src="assets/media/products/c_3.png" alt="Loaded Fries" style="max-height: 100%; object-fit: cover;">
                                                </div>
                                                <a href="#" class="h5 title">Loaded Fries</a>
                                                <p class="desc">Fries with jalapenos, cheese, chicken chunks</p>
                                                <h5 class="price mt-3">Mini: 700 | S: 1050 | M: 1450 | L: 1850</h5>
                                            </div>
                                        </div>
                                        <!-- French Fries -->
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <div class="product-img mb-16" style="height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 20px;">
                                                    <img src="assets/media/products/c_4.png" alt="French Fries" style="max-height: 100%; object-fit: cover;">
                                                </div>
                                                <a href="#" class="h5 title">French Fries</a>
                                                <p class="desc">Crispy plain french fries</p>
                                                <h5 class="price mt-3">S: Rs 320 | M: Rs 420 | L: Rs 520</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Chicken Nuggets -->
                                <div class="tab-pane fade" id="nuggets" role="tabpanel" aria-labelledby="nuggets-tab">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <div class="product-img mb-16" style="height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 20px;">
                                                    <img src="assets/media/products/c_1.png" alt="Chicken Nuggets" style="max-height: 100%; object-fit: cover;">
                                                </div>
                                                <a href="#" class="h5 title">Chicken Nuggets</a>
                                                <p class="desc">Crispy fried chicken nuggets</p>
                                                <h5 class="price mt-3">6 Pcs: 450 | 9 Pcs: 650 | 12 Pcs: 850</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Engine Oil -->
                                <div class="tab-pane fade" id="sauces" role="tabpanel" aria-labelledby="sauces-tab">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <a href="#" class="h5 title mt-4">Kixx Chipotle</a>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <a href="#" class="h5 title mt-4">Zic Atomic</a>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <a href="#" class="h5 title mt-4">Helix Garlic</a>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <a href="#" class="h5 title mt-4">Havoline B.B.Q</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Ice Tea -->
                                <div class="tab-pane fade" id="drinks" role="tabpanel" aria-labelledby="drinks-tab">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-4 col-sm-6 mb-32">
                                            <div class="product-card text-center" style="height: 100%;">
                                                <div class="product-img mb-16" style="height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 20px;">
                                                    <img src="assets/media/products/c_2.png" alt="Peach Ice Tea" style="max-height: 100%; object-fit: cover;">
                                                </div>
                                                <a href="#" class="h5 title">Peach Ice Tea</a>
                                                <p class="desc">Refreshing peach iced tea</p>
                                                <h5 class="price mt-3">Rs: 199/-</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <!-- Our Menu Section End -->   
;

let content = fs.readFileSync('public/burger-garage/index.html', 'utf8');
const startTag = '<!-- Popular Items Section Start -->';
const endTag = '<!-- Popular Items Section End -->';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if(startIndex !== -1 && endIndex !== -1) {
    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex + endTag.length);
    const newContent = before + menuHtml + after;
    fs.writeFileSync('public/burger-garage/index.html', newContent);
    console.log('Successfully replaced Popular Items with Tabbed Menu');
} else {
    console.log('Tags not found');
}
