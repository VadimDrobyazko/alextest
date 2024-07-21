"use strict";

import Swiper from "swiper";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";

const swiperElArr = document.querySelectorAll(".swiper");
if (swiperElArr.length) {
  swiperElArr.forEach((swiperEl) => {
    if (!swiperEl.classList.contains("is-init")) {
      swiperEl.classList.add("is-init");
      const swiper = new Swiper(swiperEl, {
        modules: [Autoplay, Navigation, Scrollbar],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: swiperEl.querySelector(".swiper-section-next"),
          prevEl: swiperEl.querySelector(".swiper-section-prev"),
        },
        scrollbar: {
          el: swiperEl.querySelector(".swiper-scroll"),
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
      });
    }
  });
}
