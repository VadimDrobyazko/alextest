"use strict";

const initDOM = () => {
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
};

document.addEventListener("DOMContentLoaded", initDOM);

export default initDOM;
