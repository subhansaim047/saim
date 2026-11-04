const fs = require('fs');

const cssPath = 'public/thejacketmaker/css/styles.css';
const cssContent = `
/* ============================================================
   ENHANCED QUOTES CAROUSEL & HERO SLIDER DISPLAY FIXES
   ============================================================ */
.quotes-carousel {
  position: relative !important;
  width: 100% !important;
  max-width: 960px !important;
  margin: 0 auto !important;
  min-height: 130px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.quotes-carousel .slick-track {
  width: 100% !important;
  max-width: 850px !important;
  transform: none !important;
  margin: 0 auto !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.quotes-carousel .logo-list-content {
  width: 100% !important;
  max-width: 850px !important;
  margin: 0 auto !important;
  text-align: center !important;
  float: none !important;
}

.quotes-carousel .logo-list-content-wrap {
  font-size: 24px !important;
  line-height: 1.45 !important;
  font-weight: 500 !important;
  color: #1a1a1a !important;
  margin: 0 auto !important;
  padding: 0 45px !important;
  text-align: center !important;
}

@media screen and (max-width: 767px) {
  .quotes-carousel .logo-list-content-wrap {
    font-size: 16px !important;
    padding: 0 32px !important;
  }
}

.quotes-carousel .slick-prev-custom {
  position: absolute !important;
  left: 0 !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 10 !important;
  background: #ffffff !important;
  border: 1px solid #d1d5db !important;
  border-radius: 50% !important;
  width: 44px !important;
  height: 44px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08) !important;
  transition: all 0.2s ease !important;
}

.quotes-carousel .slick-next-custom {
  position: absolute !important;
  right: 0 !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 10 !important;
  background: #ffffff !important;
  border: 1px solid #d1d5db !important;
  border-radius: 50% !important;
  width: 44px !important;
  height: 44px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08) !important;
  transition: all 0.2s ease !important;
}

.quotes-carousel .slick-prev-custom:hover,
.quotes-carousel .slick-next-custom:hover {
  background: #111111 !important;
  color: #ffffff !important;
  border-color: #111111 !important;
}

/* Hero Slideshow Clean Display */
.slideshow .slick-track {
  display: block !important;
  width: 100% !important;
  position: relative !important;
  transform: none !important;
}

.slideshow .slide {
  width: 100% !important;
  left: 0 !important;
  top: 0 !important;
}
`;

fs.appendFileSync(cssPath, '\n' + cssContent + '\n', 'utf8');
console.log('Appended enhanced carousel & hero styles to styles.css');
