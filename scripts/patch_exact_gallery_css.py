exact_css = """
/* Saim Dev Storefront - 1:1 Exact Live Product Gallery Layout */
.gallery--layout-carousel-beside .gallery__inner {
  display: flex !important;
  flex-direction: row !important;
  align-items: flex-start !important;
}

.gallery--layout-carousel-beside .thumbnails {
  order: -1 !important;
  display: block !important;
  width: 66px !important;
  min-width: 66px !important;
  flex: 0 0 66px !important;
  margin: 0 10px 0 0 !important;
  padding: 0 !important;
  position: relative !important;
  visibility: visible !important;
  opacity: 1 !important;
  z-index: 10 !important;
}

.gallery--layout-carousel-beside .thumbnails .thumbnail {
  display: block !important;
  width: 60px !important;
  height: 60px !important;
  min-width: 60px !important;
  min-height: 60px !important;
  margin: 0 0 5px 0 !important;
  position: relative !important;
  overflow: hidden !important;
  background: #f0f0f0 !important;
  cursor: pointer !important;
  box-sizing: border-box !important;
  border-radius: 2px !important;
}

.gallery--layout-carousel-beside .thumbnails .thumbnail .rimage-outer-wrapper,
.gallery--layout-carousel-beside .thumbnails .thumbnail .rimage-wrapper {
  width: 100% !important;
  height: 100% !important;
  padding-top: 0 !important;
  position: relative !important;
}

.gallery--layout-carousel-beside .thumbnails .thumbnail img,
.gallery--layout-carousel-beside .thumbnails .thumbnail .thumb__img {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 60px !important;
  height: 60px !important;
  object-fit: cover !important;
  display: block !important;
  font-size: 0 !important;
  color: transparent !important;
  text-indent: -9999px !important;
  border: 0 !important;
}

.gallery--layout-carousel-beside .thumbnails .thumbnail .watchvideo {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  background: rgba(0, 0, 0, 0.45) !important;
  color: #ffffff !important;
  font-size: 10px !important;
  font-weight: 700 !important;
  letter-spacing: 0.5px !important;
  text-transform: uppercase !important;
  text-decoration: none !important;
  pointer-events: none !important;
  z-index: 5 !important;
  line-height: 12px !important;
}

.gallery--layout-carousel-beside .thumbnails .thumbnail.thumb--active {
  outline: 2px solid #000000 !important;
  outline-offset: 1px !important;
}

.gallery--layout-carousel-beside .main-image {
  flex: 1 1 auto !important;
  min-width: 0 !important;
  position: relative !important;
}
"""

with open("public/thejacketmaker/css/styles.css", "a", encoding="utf-8") as f:
    f.write("\n" + exact_css)

print("Exact gallery CSS patched into styles.css successfully!")
