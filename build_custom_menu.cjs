const fs = require('fs');

const menuStyles = `
<style id="hotbite-custom-menu-styles">
  /* Force appear animation visible */
  .framer-28kurd, [data-framer-name="Menu Block"] {
    opacity: 1 !important;
    transform: none !important;
    visibility: visible !important;
  }

  /* Hide original hardcoded Framer menu columns and divider line in all variants */
  #Menu .framer-kigcjc > [data-framer-name="Menu Column"],
  #Menu .framer-kigcjc > [data-framer-name="Line"],
  #Menu .framer-kigcjc > .framer-1ki8liq,
  #Menu .framer-kigcjc > .framer-mf0m5n,
  #Menu .framer-kigcjc > .framer-1dofkc {
    display: none !important;
  }

  /* Custom Menu Shell inside Framer Card */
  .hb-menu-shell {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    position: relative;
    z-index: 10;
    box-sizing: border-box;
    font-family: 'Andika', sans-serif;
    color: var(--token-f373a038-e49d-4175-956d-5148d458a061, #401500);
  }

  /* Category Filter Navigation */
  .hb-category-nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 28px;
    padding-bottom: 20px;
    border-bottom: 1.5px dashed rgba(64, 21, 0, 0.2);
  }
  @media (max-width: 768px) {
    .hb-category-nav {
      flex-wrap: nowrap;
      overflow-x: auto;
      justify-content: flex-start;
      padding-bottom: 14px;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .hb-category-nav::-webkit-scrollbar {
      display: none;
    }
  }

  .hb-tab-btn {
    font-family: 'Londrina Solid', sans-serif;
    font-size: 21px;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    background: rgba(64, 21, 0, 0.05);
    color: var(--token-f373a038-e49d-4175-956d-5148d458a061, #401500);
    border: 1.5px solid rgba(64, 21, 0, 0.2);
    border-radius: 100px;
    padding: 7px 20px;
    cursor: pointer;
    transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }
  .hb-tab-btn:hover {
    background: rgba(255, 149, 0, 0.2);
    border-color: #ff9500;
    transform: translateY(-2px);
  }
  .hb-tab-btn.active {
    background: var(--token-72edd52a-1845-4a6c-8ea5-20f4955a7586, #ff9500);
    color: #401500;
    border-color: #ff9500;
    box-shadow: 0 4px 16px rgba(255, 149, 0, 0.35);
    font-weight: 700;
  }

  /* Pizza Size & Pricing Banner */
  .hb-pizza-banner {
    background: rgba(64, 21, 0, 0.04);
    border: 1px solid rgba(64, 21, 0, 0.15);
    border-radius: 20px;
    padding: 18px 24px;
    margin-bottom: 36px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  @media (max-width: 600px) {
    .hb-pizza-banner {
      padding: 14px 16px;
      margin-bottom: 24px;
    }
  }

  .hb-pizza-banner-title {
    font-family: 'Londrina Solid', sans-serif;
    font-size: 24px;
    text-transform: uppercase;
    color: #401500;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .hb-pizza-sizes-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }
  .hb-size-pill {
    background: #ffefd9;
    border: 1.5px solid rgba(64, 21, 0, 0.25);
    border-radius: 100px;
    padding: 6px 16px;
    font-size: 15px;
    font-weight: 700;
    color: #401500;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  @media (max-width: 600px) {
    .hb-size-pill {
      font-size: 13px;
      padding: 4px 10px;
    }
  }

  .hb-size-pill span {
    color: #d14900;
  }
  .hb-crust-note {
    width: 100%;
    font-size: 13.5px;
    color: rgba(64, 21, 0, 0.8);
    border-top: 1px dashed rgba(64, 21, 0, 0.18);
    padding-top: 12px;
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
  }

  /* 2-Column Responsive Grid */
  .hb-menu-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    position: relative;
    width: 100%;
  }
  @media (max-width: 960px) {
    .hb-menu-grid {
      grid-template-columns: 1fr;
      gap: 36px;
    }
  }

  /* Column divider line */
  .hb-menu-grid::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1px;
    background: rgba(64, 21, 0, 0.15);
    transform: translateX(-50%);
  }
  @media (max-width: 960px) {
    .hb-menu-grid::before {
      display: none;
    }
  }

  /* Filtered Mode: Single Center Column */
  .hb-menu-grid.is-filtered {
    grid-template-columns: 1fr !important;
    gap: 0 !important;
  }
  .hb-menu-grid.is-filtered::before {
    display: none !important;
  }
  .hb-menu-grid.is-filtered .hb-menu-col {
    width: 100%;
  }
  .hb-menu-grid.is-filtered .hb-category-block {
    max-width: 820px;
    margin: 0 auto 40px auto;
  }
  .hb-menu-grid.is-filtered .hb-promo-card {
    max-width: 820px;
    margin: 20px auto 40px auto;
  }

  /* Category Block */
  .hb-category-block {
    margin-bottom: 44px;
    transition: opacity 0.3s ease;
  }
  .hb-category-title {
    font-family: 'Londrina Solid', sans-serif;
    font-size: 42px;
    text-transform: uppercase;
    color: var(--token-f373a038-e49d-4175-956d-5148d458a061, #401500);
    line-height: 0.9;
    letter-spacing: -0.02em;
    margin: 0 0 24px 0;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  @media (max-width: 600px) {
    .hb-category-title {
      font-size: 32px;
      margin-bottom: 18px;
    }
  }

  .hb-category-badge {
    font-family: 'Andika', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    background: #ff9500;
    color: #401500;
    padding: 3px 12px;
    border-radius: 100px;
  }

  /* Menu Item Row */
  .hb-item-row {
    display: flex;
    align-items: baseline;
    gap: 10px;
    width: 100%;
    margin-bottom: 18px;
    transition: transform 0.2s ease;
  }
  .hb-item-row:hover {
    transform: translateX(4px);
  }
  .hb-item-info {
    flex: 0 1 auto;
    max-width: 68%;
  }
  @media (max-width: 600px) {
    .hb-item-info {
      max-width: 62%;
    }
  }

  .hb-item-name {
    font-family: 'Londrina Solid', sans-serif;
    font-size: 25px;
    text-transform: uppercase;
    color: var(--token-f373a038-e49d-4175-956d-5148d458a061, #401500);
    line-height: 1.1;
    letter-spacing: -0.01em;
    margin: 0;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  @media (max-width: 600px) {
    .hb-item-name {
      font-size: 20px;
    }
  }

  .hb-item-desc {
    font-family: 'Andika', sans-serif;
    font-size: 13.5px;
    line-height: 1.4;
    color: rgba(64, 21, 0, 0.75);
    margin: 3px 0 0 0;
  }
  @media (max-width: 600px) {
    .hb-item-desc {
      font-size: 12px;
      line-height: 1.3;
    }
  }

  .hb-item-line {
    flex: 1 1 0;
    height: 1px;
    border-bottom: 1.5px dashed rgba(64, 21, 0, 0.22);
    min-width: 12px;
  }
  .hb-item-price {
    flex: 0 0 auto;
    font-family: 'Andika', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: var(--token-f373a038-e49d-4175-956d-5148d458a061, #401500);
    background: rgba(64, 21, 0, 0.08);
    border: 1px solid var(--token-f373a038-e49d-4175-956d-5148d458a061, #401500);
    border-radius: 100px;
    padding: 3px 14px;
    white-space: nowrap;
    letter-spacing: -0.01em;
  }
  @media (max-width: 600px) {
    .hb-item-price {
      font-size: 13px;
      padding: 2px 10px;
    }
  }

  /* Orange Featured Card (Midnight Deal) */
  .hb-promo-card {
    background-color: var(--token-72edd52a-1845-4a6c-8ea5-20f4955a7586, #ff9500);
    border-radius: 20px;
    padding: 28px 24px;
    margin: 32px 0;
    color: #401500;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 0 8px 24px rgba(255, 149, 0, 0.25);
  }
  @media (max-width: 600px) {
    .hb-promo-card {
      padding: 20px 18px;
      border-radius: 16px;
    }
  }

  .hb-promo-badge {
    font-family: 'Andika', sans-serif;
    font-size: 13px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(64, 21, 0, 0.12);
    padding: 4px 12px;
    border-radius: 100px;
    width: fit-content;
  }
  .hb-promo-title {
    font-family: 'Londrina Solid', sans-serif;
    font-size: 34px;
    line-height: 0.95;
    text-transform: uppercase;
    color: #401500;
    margin: 0;
    letter-spacing: -0.02em;
  }
  @media (max-width: 600px) {
    .hb-promo-title {
      font-size: 26px;
    }
  }

  .hb-promo-subtitle {
    font-size: 14.5px;
    line-height: 1.4;
    color: rgba(64, 21, 0, 0.88);
    margin: 0;
  }
  .hb-promo-pricing {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
  }
  .hb-promo-pill {
    background: #ffefd9;
    border-radius: 100px;
    padding: 4px 14px;
    font-size: 13.5px;
    font-weight: 700;
    color: #401500;
  }
  .hb-promo-btn {
    align-self: flex-start;
    margin-top: 8px;
    background: #401500;
    color: #ffefd9;
    font-family: 'Londrina Solid', sans-serif;
    font-size: 19px;
    text-transform: uppercase;
    padding: 10px 24px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  .hb-promo-btn:hover {
    background: #270e02;
    transform: scale(1.04);
  }
</style>
`;

const menuHTML = `
<div class="hb-menu-shell">
  <!-- Category Navigation Tabs -->
  <div class="hb-category-nav">
    <button class="hb-tab-btn active" data-filter="all">🔥 All Menu</button>
    <button class="hb-tab-btn" data-filter="pizzas">🍕 Pizzas</button>
    <button class="hb-tab-btn" data-filter="broast">🍗 Spicy Broast</button>
    <button class="hb-tab-btn" data-filter="burgers">🍔 Burgers & Grill</button>
    <button class="hb-tab-btn" data-filter="starters">🍟 Starters & Sides</button>
    <button class="hb-tab-btn" data-filter="deals">⭐ Value Deals</button>
    <button class="hb-tab-btn" data-filter="drinks">🍹 Beverages & Bar</button>
  </div>

  <!-- Pizza Size & Crust Information Banner -->
  <div class="hb-pizza-banner" data-category-group="pizzas">
    <div class="hb-pizza-banner-title">
      🍕 Pizza Sizes & Pricing
    </div>
    <div class="hb-pizza-sizes-list">
      <div class="hb-size-pill">SMALL <span>Rs. 550</span></div>
      <div class="hb-size-pill">REGULAR <span>Rs. 1,200</span></div>
      <div class="hb-size-pill">LARGE <span>Rs. 1,650</span></div>
      <div class="hb-size-pill">X-LARGE <span>Rs. 2,300</span></div>
    </div>
    <div class="hb-crust-note">
      <div>🧀 <strong>Select Crust:</strong> Cheese or Kabab Crust (Reg: +Rs. 199 | Large: +Rs. 250 | XL: +Rs. 350)</div>
      <div>✨ <strong>Extra Topping:</strong> Small +Rs. 100 | Reg +Rs. 200 | Large +Rs. 300 | XL +Rs. 400</div>
      <div>🥣 <strong>Sauces:</strong> Garlic Mayo Rs. 69 | Malai / Peri Peri Rs. 99</div>
    </div>
  </div>

  <!-- 2-Column Menu Layout -->
  <div class="hb-menu-grid">
    
    <!-- LEFT COLUMN -->
    <div class="hb-menu-col hb-col-left">
      
      <!-- 1. PIZZAS -->
      <div class="hb-category-block" data-cat="pizzas">
        <h3 class="hb-category-title">
          Pizza Flavors <span class="hb-category-badge">17 Flavors</span>
        </h3>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">O'Resto Creamy Melt ⭐</h4>
            <p class="hb-item-desc">Garlic sauce base, capsicum, special chicken & rich creamy sauce top</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Malai Boti 🌶️</h4>
            <p class="hb-item-desc">Malai sauce base & top, mozzarella, tender malai boti, onion & jalapeno</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Chicken Fajita 🌶️</h4>
            <p class="hb-item-desc">Spicy Mexican seasoning, mozzarella, spiced fajita chicken, onion & capsicum</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Chicken Arabian</h4>
            <p class="hb-item-desc">Mild & aromatic smoke chicken, onion, capsicum & fresh tomatoes</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Oresto Special 🌟</h4>
            <p class="hb-item-desc">Tikka & malai chicken, black pepper, olives, mushrooms, jalapeno & sweet corn</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Behari Kabab 🌶️</h4>
            <p class="hb-item-desc">Chicken tikka, traditional seekh kabab chunks, jalapeno & malai drizzle</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Classic Pepperoni</h4>
            <p class="hb-item-desc">Rich Italian tomato pizza sauce, pure mozzarella & beef pepperoni slices</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">The Corn Lover</h4>
            <p class="hb-item-desc">Signature sauce, molten cheese blend & juicy sweet golden corn</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Chicken Tikka</h4>
            <p class="hb-item-desc">Charcoal-grilled tikka chunks, crisp diced onions & mozzarella</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Cheese Lover / Mint</h4>
            <p class="hb-item-desc">Vegetarian delight — double molten mozzarella infused with mint herbal touch</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Fajita Sicilian 🌶️</h4>
            <p class="hb-item-desc">Zesty fajita topping, fiery jalapenos, onions & signature malai sauce</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Chicken Supreme</h4>
            <p class="hb-item-desc">Tikka chicken, black olives, sliced mushrooms, bell peppers & tomatoes</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Chili Chicken 🌶️</h4>
            <p class="hb-item-desc">Crushed red chili flakes, fajita chicken chunks, hot jalapeno slices</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Peri Peri 🌶️</h4>
            <p class="hb-item-desc">Signature peri-peri base & drizzle with marinated chicken & capsicum</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Very Veggie</h4>
            <p class="hb-item-desc">Onions, bell peppers, tomatoes, black olives, mushrooms & sweet corn</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Afghani Tikka</h4>
            <p class="hb-item-desc">Creamy Afghani spiced chicken pieces, crunchy onions & sweet capsicum</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Special Malai Donner</h4>
            <p class="hb-item-desc">Slow-roasted donner meat in malai sauce (R: Rs. 1,300 | L: Rs. 1,850 | XL: Rs. 2,390)</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 1,300</div>
        </div>
      </div>

      <!-- 2. BURGERS & GRILL -->
      <div class="hb-category-block" data-cat="burgers">
        <h3 class="hb-category-title">
          Burgers & Grill <span class="hb-category-badge">Fresh & Juicy</span>
        </h3>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Crispy Patty Burger</h4>
            <p class="hb-item-desc">Classic fried chicken patty with lettuce and burger sauce</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 300</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Zinger Burger 🌶️</h4>
            <p class="hb-item-desc">Crispy golden zinger fillet, shredded lettuce & secret mayo</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 420</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Mighty Thunder Burger 🍔</h4>
            <p class="hb-item-desc">Double crispy fillet, melted cheese slice, signature spicy dressing</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 680</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Grill Burger Single (F)</h4>
            <p class="hb-item-desc">Charcoal-grilled juicy chicken patty, cheese & smoky relish</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 650</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Mexican Sandwich</h4>
            <p class="hb-item-desc">Toasted bread filled with Mexican spiced chicken & melted cheese</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 660</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Grill Burger Double (F)</h4>
            <p class="hb-item-desc">Double flame-grilled patties, double cheddar & grilled onions</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 790</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Grill Burger Triple (F)</h4>
            <p class="hb-item-desc">Ultimate triple grilled patties layered with molten cheese</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 860</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">O'Resto Special Wrap</h4>
            <p class="hb-item-desc">Crispy fried strips rolled in warm tortilla with secret sauces</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 580</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">O'Resto Grill Wrap</h4>
            <p class="hb-item-desc">Grilled succulent strips rolled with veggies and garlic dressing</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 580</div>
        </div>
      </div>

      <!-- 3. VALUE DEALS -->
      <div class="hb-category-block" data-cat="deals">
        <h3 class="hb-category-title">
          Value Deals <span class="hb-category-badge">Combos</span>
        </h3>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Regular Deal</h4>
            <p class="hb-item-desc">1 Zinger Burger + Regular Fries + Regular Soft Drink</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 700</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Double Deal</h4>
            <p class="hb-item-desc">2 Zinger Burgers + Regular Soft Drink</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 850</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Hunger Deal 🔥</h4>
            <p class="hb-item-desc">1 Mighty Thunder Burger + Regular Fries + Regular Drink</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 880</div>
        </div>
      </div>

    </div>

    <!-- RIGHT COLUMN -->
    <div class="hb-menu-col hb-col-right">

      <!-- 4. SPICY BROAST -->
      <div class="hb-category-block" data-cat="broast">
        <h3 class="hb-category-title">
          Spicy Broast <span class="hb-category-badge">Golden Crisp</span>
        </h3>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Quarter Spicy Broast</h4>
            <p class="hb-item-desc">1 Leg, 1 Thigh, 1 Bun, Fries, Garlic & Fry Dip, 0.5L Drink</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 750</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Half Spicy Broast</h4>
            <p class="hb-item-desc">2 Leg, 2 Thigh, 1 Bun, Fries, Garlic & Fry Dip, 0.5L Drink</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 1,199</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Full Spicy Broast</h4>
            <p class="hb-item-desc">4 Leg, 4 Thigh, 2 Buns, Fries, 2 Garlic & Fry Dips, 1.5L Drink</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 2,350</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Elite Family Feast 👑</h4>
            <p class="hb-item-desc">1 Large Creamy Pizza, 10 Nuggets, 1 Full Spicy Broast, 2 Buns, Fries, Dips & 1.5L Drink</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 4,250</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Supreme Family Feast 👑</h4>
            <p class="hb-item-desc">2 Full Spicy Broast (8 Leg, 8 Thigh), 4 Buns, Fries, 4 Dips & 1.5L Drink</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 4,550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Extra Broast Bun</h4>
            <p class="hb-item-desc">Freshly steamed sesame dinner roll</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 40</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Special Dips (Garlic / Fiery / Oresto)</h4>
            <p class="hb-item-desc">Signature homemade dip sauces (per cup)</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 70</div>
        </div>
      </div>

      <!-- 5. STARTERS & SIDES -->
      <div class="hb-category-block" data-cat="starters">
        <h3 class="hb-category-title">
          Starters & Sides <span class="hb-category-badge">Munchies</span>
        </h3>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Oven Baked Wings</h4>
            <p class="hb-item-desc">Tender oven roasted wings (6 Pcs Rs. 370 | 12 Pcs Rs. 690)</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 370</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Chicken Strips</h4>
            <p class="hb-item-desc">100% tenderloin breast strips (5 Pcs Rs. 520 | 10 Pcs Rs. 950)</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 520</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Mozzarella Cheese Sticks</h4>
            <p class="hb-item-desc">Golden breaded cheese pulls (Small Rs. 550 | Med Rs. 1,200 | Lg Rs. 1,650)</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Chicken Spin Roll</h4>
            <p class="hb-item-desc">Stuffed pastry rolls with spiced filling (3 Pcs Rs. 300 | 6 Pcs Rs. 550)</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 300</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Pasta Spin Roll</h4>
            <p class="hb-item-desc">Rich cheesy creamy pasta stuffed roll</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 700</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Loaded Cheese Fries</h4>
            <p class="hb-item-desc">Crispy fries drenched in cheese & chicken chunks (Med Rs. 650 | Lg Rs. 750)</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 650</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Classic French Fries</h4>
            <p class="hb-item-desc">Lightly salted golden fries (Regular Rs. 220 | Large Rs. 320)</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 220</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Crispy Nuggets</h4>
            <p class="hb-item-desc">Bite-sized chicken nuggets (5 Pcs Rs. 300 | 10 Pcs Rs. 580)</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 300</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Trio Platter ⭐</h4>
            <p class="hb-item-desc">6 Wings + 3 Spin Rolls + Regular Fries + Dip Sauce</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 750</div>
        </div>
      </div>

      <!-- FEATURED ORANGE PROMO CARD: MIDNIGHT DEAL -->
      <div class="hb-promo-card" data-cat="deals">
        <div class="hb-promo-badge">🌙 Starts 10:00 PM Every Night</div>
        <h3 class="hb-promo-title">MIDNIGHT DOUBLE MASTI DEAL</h3>
        <p class="hb-promo-subtitle">Craving late night feast? Get ANY 2 PIZZAS at incredible midnight discount!</p>
        <div class="hb-promo-pricing">
          <div class="hb-promo-pill">2 SMALL: Rs. 950</div>
          <div class="hb-promo-pill">2 REGULAR: Rs. 2,000</div>
          <div class="hb-promo-pill">2 LARGE: Rs. 2,800</div>
          <div class="hb-promo-pill">2 XL: Rs. 4,000</div>
        </div>
        <a href="#Contact" class="hb-promo-btn">Order Midnight Deal</a>
      </div>

      <!-- 6. BEVERAGES & BAR -->
      <div class="hb-category-block" data-cat="drinks">
        <h3 class="hb-category-title">
          Drink Me Fresh! <span class="hb-category-badge">Bar & Shakes</span>
        </h3>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Ice Shakes</h4>
            <p class="hb-item-desc">Oreo, Vanilla, Coffee, Chocolate, Pistachio, Praline, Caramel, Kulfa, Mango</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 500</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">O'Resto Special Shake / Iced Coffee</h4>
            <p class="hb-item-desc">Signature loaded shake or chilled iced caramel latte</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 550</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Chilled Fresh Limes</h4>
            <p class="hb-item-desc">Fresh Lime, Sting Lime, or Mountain Dew Lime</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 200</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Fruity Margaritas</h4>
            <p class="hb-item-desc">Mint Margarita, Pineapple Margarita, or Strawberry Margarita</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 220</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Tea & Fresh Coffee</h4>
            <p class="hb-item-desc">Cardamom Tea (Rs. 200), Cafe Latte (Rs. 250), Fresh Brewed Coffee (Rs. 350)</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 200</div>
        </div>

        <div class="hb-item-row">
          <div class="hb-item-info">
            <h4 class="hb-item-name">Desserts & Ice Cream</h4>
            <p class="hb-item-desc">Gourmet Ice Cream (Rs. 250), Molten Lava (Rs. 350), Sizzling Brownie (Rs. 250)</p>
          </div>
          <div class="hb-item-line"></div>
          <div class="hb-item-price">Rs. 250</div>
        </div>
      </div>

    </div>

  </div>
</div>
`;

const menuScript = `
<script id="hotbite-custom-menu-script">
(function() {
  function initCustomMenu(container) {
    const tabs = container.querySelectorAll('.hb-tab-btn');
    const grid = container.querySelector('.hb-menu-grid');
    const blocks = container.querySelectorAll('.hb-category-block, .hb-promo-card');
    const pizzaBanner = container.querySelector('.hb-pizza-banner');

    if (!tabs.length || !grid) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.getAttribute('data-filter');

        if (filter === 'all') {
          grid.classList.remove('is-filtered');
          blocks.forEach(b => b.style.display = 'block');
          if (pizzaBanner) pizzaBanner.style.display = 'flex';
        } else {
          grid.classList.add('is-filtered');
          blocks.forEach(b => {
            const cat = b.getAttribute('data-cat');
            if (cat === filter) {
              b.style.display = 'block';
            } else {
              b.style.display = 'none';
            }
          });
          if (pizzaBanner) {
            pizzaBanner.style.display = (filter === 'pizzas') ? 'flex' : 'none';
          }
        }
      });
    });
  }

  function mountMenu() {
    const menuGrids = document.querySelectorAll('#Menu .framer-kigcjc');
    if (!menuGrids.length) return false;

    let mountedAny = false;
    menuGrids.forEach((menuGrid, idx) => {
      if (!menuGrid.querySelector('.hb-menu-shell')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'hb-custom-menu-wrapper';
        wrapper.style.gridColumn = '1 / -1';
        wrapper.style.width = '100%';
        wrapper.style.position = 'relative';
        wrapper.style.zIndex = '5';
        wrapper.innerHTML = \`${menuHTML.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`;
        menuGrid.appendChild(wrapper);

        initCustomMenu(wrapper);
        mountedAny = true;
      }
    });

    if (mountedAny) {
      console.log('[Hotbite Menu] Successfully mounted custom menu into all grids!');
    }
    return true;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountMenu);
  } else {
    mountMenu();
  }

  let attempts = 0;
  const mountTimer = setInterval(() => {
    attempts++;
    const wrappers = document.querySelectorAll('#Menu .hb-custom-menu-wrapper');
    const grids = document.querySelectorAll('#Menu .framer-kigcjc');
    if (wrappers.length < grids.length) {
      mountMenu();
    }
    if (attempts > 30) clearInterval(mountTimer);
  }, 150);
})();
</script>
`;

module.exports = {
  menuStyles,
  menuHTML,
  menuScript
};
