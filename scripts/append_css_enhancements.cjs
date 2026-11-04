const fs = require('fs');

let css = fs.readFileSync('public/thejacketmaker/css/styles.css', 'utf8');

const additionalCss = `

/* ============================================================
   HQ LEATHERCON LOGO & QUOTE ARROW ENHANCEMENTS
   ============================================================ */
.logo__link {
  display: inline-flex !important;
  align-items: center !important;
  gap: 16px !important;
  text-decoration: none !important;
}

.logo__image {
  height: 62px !important;
  max-height: 65px !important;
  width: auto !important;
  object-fit: contain !important;
  vertical-align: middle !important;
}

.logo__brand-title {
  font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif !important;
  font-size: 24px !important;
  font-weight: 800 !important;
  letter-spacing: 0.08em !important;
  color: #111111 !important;
  text-transform: uppercase !important;
  white-space: nowrap !important;
  line-height: 1 !important;
}

@media screen and (max-width: 767px) {
  .logo__link {
    gap: 10px !important;
  }
  .logo__image {
    height: 42px !important;
    max-height: 45px !important;
  }
  .logo__brand-title {
    font-size: 16px !important;
    letter-spacing: 0.04em !important;
  }
}

/* Quote Carousel Arrows & Layout */
.quotes-carousel {
  position: relative !important;
  width: 100% !important;
  max-width: 960px !important;
  margin: 0 auto !important;
}

.quotes-carousel .slick-prev-custom,
.quotes-carousel .slick-next-custom {
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 20 !important;
  background: #ffffff !important;
  border: 1px solid #d1d5db !important;
  border-radius: 50% !important;
  width: 44px !important;
  height: 44px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  color: #111111 !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12) !important;
  transition: all 0.2s ease !important;
  outline: none !important;
}

.quotes-carousel .slick-prev-custom {
  left: 0 !important;
}

.quotes-carousel .slick-next-custom {
  right: 0 !important;
}

.quotes-carousel .slick-prev-custom:hover,
.quotes-carousel .slick-next-custom:hover {
  background: #111111 !important;
  color: #ffffff !important;
  border-color: #111111 !important;
}

.quotes-carousel .slick-prev-custom svg,
.quotes-carousel .slick-next-custom svg {
  display: block !important;
  width: 18px !important;
  height: 18px !important;
  stroke: currentColor !important;
  fill: none !important;
  pointer-events: none !important;
}
`;

css += additionalCss;
fs.writeFileSync('public/thejacketmaker/css/styles.css', css, 'utf8');
console.log('Appended logo & quotes CSS enhancements to styles.css!');
