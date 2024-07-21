"use strict";

import Swiper from "swiper";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";

const swiperElArr = document.querySelectorAll(".swiper");
if (swiperElArr.length) {
  swiperElArr.forEach((swiperEl) => {
    const swiper = new Swiper(swiperEl, {
      modules: [Autoplay, Navigation, Scrollbar],
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
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
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
      on: {
        init: function () {
          updateScrollbarWidth(swiper);
        },
        resize: function () {
          updateScrollbarWidth(swiper);
        },
        slideChange: function () {
          updateScrollbarWidth(swiper);
        },
      },
    });

    function updateScrollbarWidth(swiper) {
      const totalSlides = swiper.slides.length;
      const slidesPerView = swiper.params.slidesPerView;
      const scrollbar = swiper.scrollbar.el;
      const drag = scrollbar.querySelector(".swiper-scrollbar-drag");
      const scrollbarWidth = scrollbar.offsetWidth;

      const dragWidth = scrollbarWidth * (slidesPerView / totalSlides);
      drag.style.width = `${dragWidth}px`;
    }
  });
}
