$(document).ready(function () {
  try {
    if ($(".flatlayslider").length && !$(".flatlayslider").hasClass("slick-initialized")) {
      $(".flatlayslider").slick({
        dots: true,
        arrows: true,
        infinite: true,
        centerMode: false,
        nextArrow: '<button type="button" data-role="none" class="slick-next-custom slick-arrow" aria-label="Next"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#reuse-arrow-thin-right"></use></svg></button>',
        prevArrow: '<button type="button" data-role="none" class="slick-prev-custom slick-arrow" aria-label="Previous"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#reuse-arrow-thin-left"></use></svg></button>'
      });
    }
    if (window.Fancybox && document.querySelector('[data-fancybox="images"]')) {
      Fancybox.bind('[data-fancybox="images"]', { Thumbs: false });
    }
    if ($(".trucarry-slider-wrapper").length && !$(".trucarry-slider-wrapper").hasClass("slick-initialized")) {
      $(".trucarry-slider-wrapper").slick({ dots: true });
    }
  } catch (e) {}

  function syncResponsiveSliders() {
    try {
      var isMob = $(window).width() <= 750;
      var $tc = $(".tc-grid-container");
      if ($tc.length) {
        if (isMob && !$tc.hasClass("slick-initialized")) {
          $tc.slick({ arrows: true, dots: true, slidesToShow: 2, slidesToScroll: 2 });
        } else if (!isMob && $tc.hasClass("slick-initialized")) {
          $tc.slick("unslick");
        }
      }
      var $ev = $(".ev-grid-container");
      if ($ev.length) {
        if (isMob && !$ev.hasClass("slick-initialized")) {
          $ev.slick({ arrows: true, dots: true, slidesToShow: 2, slidesToScroll: 2 });
        } else if (!isMob && $ev.hasClass("slick-initialized")) {
          $ev.slick("unslick");
        }
      }
    } catch (e) {}
  }

  syncResponsiveSliders();
  var lastWinWidth = $(window).width();
  $(window).on("resize", function () {
    var w = $(window).width();
    if (w !== lastWinWidth) {
      lastWinWidth = w;
      syncResponsiveSliders();
    }
  });
});
