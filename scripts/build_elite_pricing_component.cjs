// Script to test and generate the Elite Mobile Detailing pricing cards and chemical banner

const basicDetail = {
  title: "BASIC DETAIL",
  subtitle: "A FRESH CLEAN INSIDE AND OUT.",
  price: "PKR 6,000 – 8,000",
  popular: false,
  exterior: [
    "Exterior wash",
    "Tyre and rim cleaning"
  ],
  interior: [
    "Full interior vacuum",
    "Dashboard and upholstery clean"
  ]
};

const premiumDetail = {
  title: "PREMIUM FULL DETAIL",
  subtitle: "A DEEP CLEAN INSIDE AND OUT WITH ADDED PROTECTION.",
  price: "PKR 11,000 – 14,000",
  popular: true,
  exterior: [
    "3-stage wash",
    "Wheel decontamination",
    "Tyre and wheel clean",
    "Plastics restorer",
    "Plastics protectant",
    "Exterior spray on polish"
  ],
  interior: [
    "Full wet and dry vacuum",
    "Steam cleaned",
    "Dashboard and interior plastics cleaned and protected",
    "Plastics protectant",
    "Leather protectant"
  ]
};

function generatePricingHtml() {
  return `
  <section class="section-gap elite-pricing-section" id="pricing-section" style="background: #0b120e; padding: 100px 0; color: #ffffff;">
    <div class="w-layout-blockcontainer container w-container">
      <div class="heading-subtitle center" style="text-align: center; margin-bottom: 50px;">
        <div class="subtitle-head-wrap" style="display: inline-flex; align-items: center; gap: 8px; background: rgba(46, 163, 120, 0.15); border: 1px solid rgba(46, 163, 120, 0.4); padding: 6px 18px; border-radius: 30px; margin-bottom: 16px;">
          <span style="color: #2ea378; font-size: 14px;">👑</span>
          <div class="subtitle-head" style="color: #2ea378; font-size: 13px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">TRANSPARENT DETAILING PACKAGES</div>
        </div>
        <div class="heading-title-animation">
          <h2 class="heading-title" style="color: #ffffff; font-size: 42px; font-weight: 800; letter-spacing: -0.5px; margin: 0 0 12px 0;">Precision Care For Every Ride</h2>
          <p style="color: #94a3b8; font-size: 16px; max-width: 620px; margin: 0 auto;">Choose between our foundational maintenance wash or our comprehensive showroom deep clean.</p>
        </div>
      </div>

      <div class="elite-pricing-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px; max-width: 1100px; margin: 0 auto 60px auto;">
        
        <!-- CARD 1: BASIC DETAIL -->
        <div class="elite-pricing-card" style="background: #111a14; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 24px; padding: 36px 32px; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.3s ease; position: relative;">
          <div>
            <div style="margin-bottom: 24px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 24px;">
              <h3 style="font-size: 26px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; margin: 0 0 6px 0;">BASIC DETAIL</h3>
              <p style="color: #94a3b8; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; margin: 0 0 16px 0;">A FRESH CLEAN INSIDE AND OUT.</p>
              <div style="display: flex; align-items: baseline; gap: 8px;">
                <span style="font-size: 28px; font-weight: 800; color: #2ea378; letter-spacing: -0.5px;">PKR 6,000 – 8,000</span>
              </div>
            </div>

            <!-- Features Breakdown -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 32px;">
              <!-- Exterior -->
              <div>
                <h4 style="font-size: 12px; font-weight: 800; color: #2ea378; letter-spacing: 1.5px; text-transform: uppercase; margin: 0 0 12px 0;">EXTERIOR</h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;">
                    <span style="color: #2ea378; font-weight: bold;">✔</span> Exterior wash
                  </li>
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;">
                    <span style="color: #2ea378; font-weight: bold;">✔</span> Tyre & rim cleaning
                  </li>
                </ul>
              </div>
              <!-- Interior -->
              <div>
                <h4 style="font-size: 12px; font-weight: 800; color: #2ea378; letter-spacing: 1.5px; text-transform: uppercase; margin: 0 0 12px 0;">INTERIOR</h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;">
                    <span style="color: #2ea378; font-weight: bold;">✔</span> Full interior vacuum
                  </li>
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;">
                    <span style="color: #2ea378; font-weight: bold;">✔</span> Dashboard & upholstery clean
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <a href="#contact" class="button-link elite-btn" style="width: 100%; justify-content: center; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 40px; padding: 14px 24px; text-decoration: none; color: #ffffff; font-weight: 700; font-size: 14px;">
            <div class="button-link-wrap">
              <span class="button-text">Book Basic Detail</span>
              <span class="button-text-hover">Book Basic Detail</span>
            </div>
            <div class="button-arrow-wrap">
              <img alt="arrow" class="button-arrow" src="/demos/woshico/fonts/68d4d14bee0c86c977c72735_up-right.svg" />
              <img alt="arrow" class="button-arrow-hover" src="/demos/woshico/fonts/68d4d14bee0c86c977c72735_up-right.svg" />
            </div>
          </a>
        </div>

        <!-- CARD 2: PREMIUM FULL DETAIL (MOST POPULAR) -->
        <div class="elite-pricing-card popular" style="background: #111a14; border: 2px solid #2ea378; border-radius: 24px; padding: 36px 32px; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.3s ease; position: relative; box-shadow: 0 16px 40px rgba(46, 163, 120, 0.2);">
          
          <!-- Badge -->
          <div style="position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #2ea378; color: #0b120e; padding: 6px 18px; border-radius: 30px; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px rgba(46, 163, 120, 0.4);">
            <span>👑</span> MOST POPULAR
          </div>

          <div>
            <div style="margin-bottom: 24px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 24px;">
              <h3 style="font-size: 26px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; margin: 0 0 6px 0;">PREMIUM FULL DETAIL</h3>
              <p style="color: #94a3b8; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; margin: 0 0 16px 0;">A DEEP CLEAN INSIDE AND OUT WITH ADDED PROTECTION.</p>
              <div style="display: flex; align-items: baseline; gap: 8px;">
                <span style="font-size: 28px; font-weight: 800; color: #2ea378; letter-spacing: -0.5px;">PKR 11,000 – 14,000</span>
              </div>
            </div>

            <!-- Features Breakdown -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 32px;">
              <!-- Exterior -->
              <div>
                <h4 style="font-size: 12px; font-weight: 800; color: #2ea378; letter-spacing: 1.5px; text-transform: uppercase; margin: 0 0 12px 0;">EXTERIOR</h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;"><span style="color: #2ea378; font-weight: bold;">✔</span> 3-stage wash</li>
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;"><span style="color: #2ea378; font-weight: bold;">✔</span> Wheel decontamination</li>
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;"><span style="color: #2ea378; font-weight: bold;">✔</span> Tyre & wheel clean</li>
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;"><span style="color: #2ea378; font-weight: bold;">✔</span> Plastics restorer</li>
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;"><span style="color: #2ea378; font-weight: bold;">✔</span> Plastics protectant</li>
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;"><span style="color: #2ea378; font-weight: bold;">✔</span> Exterior spray on polish</li>
                </ul>
              </div>
              <!-- Interior -->
              <div>
                <h4 style="font-size: 12px; font-weight: 800; color: #2ea378; letter-spacing: 1.5px; text-transform: uppercase; margin: 0 0 12px 0;">INTERIOR</h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;"><span style="color: #2ea378; font-weight: bold;">✔</span> Full wet & dry vacuum</li>
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;"><span style="color: #2ea378; font-weight: bold;">✔</span> Steam cleaned</li>
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;"><span style="color: #2ea378; font-weight: bold;">✔</span> Plastics cleaned & protected</li>
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;"><span style="color: #2ea378; font-weight: bold;">✔</span> Plastics protectant</li>
                  <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #e2e8f0;"><span style="color: #2ea378; font-weight: bold;">✔</span> Leather protectant</li>
                </ul>
              </div>
            </div>
          </div>

          <a href="#contact" class="button-link elite-btn" style="width: 100%; justify-content: center; background: #2ea378; border: none; border-radius: 40px; padding: 14px 24px; text-decoration: none; color: #0b120e; font-weight: 800; font-size: 14px; box-shadow: 0 6px 20px rgba(46, 163, 120, 0.4);">
            <div class="button-link-wrap">
              <span class="button-text" style="color: #0b120e;">Book Premium Detail</span>
              <span class="button-text-hover" style="color: #ffffff;">Book Premium Detail</span>
            </div>
            <div class="button-arrow-wrap">
              <img alt="arrow" class="button-arrow" src="/demos/woshico/fonts/68d4d14bee0c86c977c72735_up-right.svg" />
              <img alt="arrow" class="button-arrow-hover" src="/demos/woshico/fonts/68d4d14bee0c86c977c72735_up-right.svg" />
            </div>
          </a>
        </div>

      </div>

      <!-- CHEMICAL BRANDS & PROTECTANTS BANNER -->
      <div class="chemical-brands-banner" style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(46, 163, 120, 0.3); border-radius: 20px; padding: 28px 32px; max-width: 1100px; margin: 0 auto; text-align: center;">
        <div style="font-size: 12px; font-weight: 800; letter-spacing: 2px; color: #2ea378; text-transform: uppercase; margin-bottom: 8px;">
          WE USE THE WORLD'S LEADING CHEMICAL BRANDS & PROTECTANTS
        </div>
        <div style="font-size: 11px; font-weight: 600; letter-spacing: 1px; color: #94a3b8; text-transform: uppercase; margin-bottom: 24px;">
          PROFESSIONAL PRODUCTS. PREMIUM RESULTS.
        </div>
        <div class="chemical-logos-grid" style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 36px;">
          <div style="font-family: system-ui, -apple-system, sans-serif; font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: 1px; display: flex; flex-direction: column; line-height: 1.1;">
            <span>KochChemie®</span>
            <span style="font-size: 9px; font-weight: 500; color: #94a3b8; letter-spacing: 1px;">EXCELLENCE FOR EXPERTS</span>
          </div>
          <div style="font-family: system-ui, -apple-system, sans-serif; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: 2px;">
            CARPRO
          </div>
          <div style="font-family: system-ui, -apple-system, sans-serif; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: 3px;">
            GYEON
          </div>
          <div style="font-family: 'Brush Script MT', cursive, sans-serif; font-size: 26px; font-weight: bold; color: #ffffff; font-style: italic; letter-spacing: 1px;">
            Meguiar's
          </div>
        </div>
      </div>

    </div>
  </section>
  `;
}

module.exports = { generatePricingHtml };
