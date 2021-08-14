"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    769: {
      slidesPerView: 3
    }
  }
});
AOS.init({
  offset: 140,
  duration: 1500,
  once: true
});
//# sourceMappingURL=all.js.map
