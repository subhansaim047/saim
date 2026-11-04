const fs = require('fs');

let css = fs.readFileSync('public/thejacketmaker/css/styles.css', 'utf8');

const targetResponsiveRules = `

/* ============================================================
   HQ LEATHERCON VERTICAL BRANDING & MOBILE RESPONSIVE ENGINE
   ============================================================ */
.logo__link {
  display: inline-flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-decoration: none !important;
  text-align: center !important;
  padding: 4px 0 !important;
}

.logo__image {
  height: 48px !important;
  max-height: 52px !important;
  width: auto !important;
  object-fit: contain !important;
  margin: 0 auto 4px auto !important;
  display: block !important;
}

.logo__brand-title {
  font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif !important;
  font-size: 15px !important;
  font-weight: 800 !important;
  letter-spacing: 0.12em !important;
  color: #111111 !important;
  text-transform: uppercase !important;
  white-space: nowrap !important;
  line-height: 1 !important;
  display: block !important;
  text-align: center !important;
}

@media screen and (max-width: 767px) {
  .logo-area.container {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .logo-area__middle {
    flex: 2 1 auto !important;
  }
  .logo__image {
    height: 34px !important;
    max-height: 36px !important;
    margin: 0 auto 2px auto !important;
  }
  .logo__brand-title {
    font-size: 11px !important;
    letter-spacing: 0.08em !important;
  }

  /* Mobile product gallery: clean horizontal thumbnail strip below photo */
  .product-gallery .product-gallery__thumbnails,
  .product-gallery--with-thumbnails .product-gallery__thumbnails {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    display: flex !important;
    flex-direction: row !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch !important;
    justify-content: flex-start !important;
    margin: 10px 0 6px 0 !important;
    padding: 4px 10px !important;
    z-index: 5 !important;
    gap: 8px !important;
  }
  .product-gallery .product-gallery__thumbnails .product-gallery__thumbnail {
    width: 54px !important;
    height: 54px !important;
    margin: 0 !important;
    flex: 0 0 54px !important;
    border-radius: 4px !important;
    overflow: hidden !important;
  }

  /* Quotes Carousel on mobile */
  .quotes-carousel {
    max-width: 100% !important;
    padding: 0 10px !important;
  }
  .quotes-carousel .slick-track {
    max-width: 100% !important;
  }
  .quotes-carousel .logo-list-content {
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 35px !important;
  }
  .quotes-carousel .logo-list-content-wrap {
    font-size: 15px !important;
    line-height: 1.4 !important;
    padding: 0 10px !important;
    height: auto !important;
    min-height: 55px !important;
  }
  .quotes-carousel .slick-prev-custom {
    left: 0 !important;
    width: 36px !important;
    height: 36px !important;
  }
  .quotes-carousel .slick-next-custom {
    right: 0 !important;
    width: 36px !important;
    height: 36px !important;
  }

  /* Mobile page bottom padding for sticky cart bar */
  body.template-product,
  main#content {
    padding-bottom: 75px !important;
  }
}
`;

// Remove older logo css override if present
if (css.includes('/* ============================================================\n   HQ LEATHERCON VERTICAL BRANDING & MOBILE RESPONSIVE ENGINE')) {
  const start = css.indexOf('/* ============================================================\n   HQ LEATHERCON VERTICAL BRANDING & MOBILE RESPONSIVE ENGINE');
  css = css.slice(0, start) + targetResponsiveRules;
} else {
  css += targetResponsiveRules;
}

fs.writeFileSync('public/thejacketmaker/css/styles.css', css, 'utf8');
console.log('Successfully appended vertical branding and mobile responsive rules to styles.css!');
