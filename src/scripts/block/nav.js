"use strict";

const handleHashChange = () => {
  if (window.location.hash === "#nav") {
    document.body.classList.add("body--open");
    document.body.classList.add("body--no-scroll");
  } else {
    document.body.classList.remove("body--open");
    document.body.classList.remove("body--no-scroll");
  }
};

document.addEventListener("DOMContentLoaded", handleHashChange);

window.addEventListener("hashchange", handleHashChange);

export default handleHashChange;
