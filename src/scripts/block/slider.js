"use strict";

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-section-next",
    prevEl: ".swiper-section-prev",
  },
  scrollbar: {
    el: ".swiper-scroll",
    draggable: true,
  },
  breakpoints: {
    375: {
      spaceBetween: 20,
      slidesPerView: 1,
      loop: true,
    },
    451: {
      spaceBetween: 20,
      slidesPerView: 1.5,
    },
    651: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    901: {
      spaceBetween: 16,
      slidesPerView: 2,
    },
    1025: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 20,
      slidesPerView: 2,
      loop: false,
    },
    1700: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
  },
});

swiperObserve(swiper);

export default swiper;
