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
            updateScrollbarWidth(this);
          },
          resize: function () {
            updateScrollbarWidth(this);
          },
          slideChange: function () {
            updateScrollbarWidth(this);
          },
          afterInit: function () {
            updateScrollbarWidth(this);
          },
        },
      });

      function updateScrollbarWidth(swiper) {
        const totalSlides = swiper.slides.length;
        if (totalSlides > 0) {
          let slidesPerView = swiper.params.slidesPerView;

          if (typeof slidesPerView === "object") {
            const activeBreakpoint = Object.keys(swiper.params.breakpoints)
              .reverse()
              .find((breakpoint) => window.innerWidth >= breakpoint);
            console.log(`Active Breakpoint: ${activeBreakpoint}`);
            if (activeBreakpoint) {
              slidesPerView =
                swiper.params.breakpoints[activeBreakpoint].slidesPerView;
            }
          }

          const scrollbar = swiper.scrollbar.el;
          const scrollbarWidth = scrollbar.offsetWidth;
          const dragWidth = scrollbarWidth * (slidesPerView / totalSlides);
          scrollbar.style.setProperty(
            "--scrollbar-drag-width",
            `${dragWidth}px`
          );
        }
      }
    }
  });
}
