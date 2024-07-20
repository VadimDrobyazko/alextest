"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = document.querySelector(".team__swiper");
  const slides = document.querySelectorAll(".team__slide");
  const prevButton = document.querySelector(".team__button--prev");
  const nextButton = document.querySelector(".team__button--next");
  const lineItems = document.querySelectorAll(".team__line-item");
  const syncElement = document.querySelector(".sync-element");

  let currentSlide = 0;
  const slideWidth = 75;

  function updateSlider() {
    swiper.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    updateButtons();
    updateLine();
    syncElement.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
  }

  function updateButtons() {
    if (currentSlide === 0) {
      prevButton.classList.add("team__button--disable");
      prevButton.classList.remove("team__button--active");
    } else {
      prevButton.classList.remove("team__button--disable");
      prevButton.classList.add("team__button--active");
    }

    if (currentSlide >= slides.length - 1) {
      nextButton.classList.add("team__button--disable");
      nextButton.classList.remove("team__button--active");
    } else {
      nextButton.classList.remove("team__button--disable");
      nextButton.classList.add("team__button--active");
    }
  }

  function updateLine() {
    lineItems.forEach((item, index) => {
      item.classList.toggle("team__line-item--active", index === currentSlide);
    });
  }

  prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlider();
    }
  });

  updateSlider();
});

document.addEventListener("DOMContentLoaded", () => {
  const cardItems = document.querySelectorAll(".card__item");

  if (cardItems.length > 0) {
    cardItems[0].classList.add("active");

    const firstItem = cardItems[0];
    const name = firstItem.getAttribute("data-name");
    const position = firstItem.getAttribute("data-position");

    document.querySelector(".partners__name").textContent = name;
    document.querySelector(".partners__position").textContent = position;
  }

  cardItems.forEach((item) => {
    item.addEventListener("click", () => {
      cardItems.forEach((el) => el.classList.remove("active"));

      item.classList.add("active");

      const name = item.getAttribute("data-name");
      const position = item.getAttribute("data-position");

      document.querySelector(".partners__name").textContent = name;
      document.querySelector(".partners__position").textContent = position;
    });
  });
});

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
});

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#nav") {
    document.body.classList.add("body--open");
  } else {
    document.body.classList.remove("body--open");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const teamItems = document.querySelectorAll(".team__item");
  const swipers = document.querySelectorAll(".team__swiper");

  teamItems.forEach((item) => {
    item.addEventListener("click", () => {
      teamItems.forEach((i) => i.classList.remove("team__item--active"));
      swipers.forEach((s) => s.classList.remove("team__swiper--active"));

      item.classList.add("team__item--active");
      const teamNumber = item.getAttribute("data-team");
      const activeSwiper = document.querySelector(
        `.team__swiper[data-team="${teamNumber}"]`
      );
      activeSwiper.classList.add("team__swiper--active");
    });
  });
});
