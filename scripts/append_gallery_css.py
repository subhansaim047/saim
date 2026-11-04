css_to_add = """
/* Product Gallery Thumbnails and Video Badge */
.thumbnails .thumbnail {
  position: relative !important;
  display: inline-block !important;
  vertical-align: top !important;
  overflow: hidden !important;
  background: #f7f7f7 !important;
}

.thumbnails .thumbnail img,
.thumbnails .thumbnail .thumb__img {
  display: block !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  font-size: 0 !important;
  color: transparent !important;
  text-indent: -9999px !important;
  border: 0 !important;
}

.thumbnails .thumbnail .watchvideo {
  position: absolute !important;
  inset: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  background: rgba(0, 0, 0, 0.45) !important;
  color: #ffffff !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: 0.5px !important;
  text-transform: uppercase !important;
  text-decoration: none !important;
  pointer-events: none !important;
  z-index: 5 !important;
}

.thumbnails .thumbnail.thumb--active {
  outline: 2px solid #000000 !important;
  outline-offset: 1px !important;
}
"""

with open("public/thejacketmaker/css/styles.css", "a", encoding="utf-8") as f:
    f.write("\n" + css_to_add)

print("CSS appended successfully")
