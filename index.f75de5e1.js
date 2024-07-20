"use strict";
const form = document.getElementById("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    e.target.reset();
});
window.addEventListener("hashchange", ()=>{
    if (window.location.hash === "#nav") document.body.classList.add("body--open");
    else document.body.classList.remove("body--open");
});
document.addEventListener("DOMContentLoaded", ()=>{
    const cardItems = document.querySelectorAll(".card__item");
    if (cardItems.length > 0) {
        cardItems[0].classList.add("active");
        const firstItem = cardItems[0];
        const name = firstItem.getAttribute("data-name");
        const position = firstItem.getAttribute("data-position");
        document.querySelector(".partners__name").textContent = name;
        document.querySelector(".partners__position").textContent = position;
    }
    cardItems.forEach((item)=>{
        item.addEventListener("click", ()=>{
            cardItems.forEach((el)=>el.classList.remove("active"));
            item.classList.add("active");
            const name = item.getAttribute("data-name");
            const position = item.getAttribute("data-position");
            document.querySelector(".partners__name").textContent = name;
            document.querySelector(".partners__position").textContent = position;
        });
    });
});

//# sourceMappingURL=index.f75de5e1.js.map
