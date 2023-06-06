"use strict";

let navItem = document.querySelector(".nav__logo--img");

navItem.addEventListener("mouseover", (e) => {
  e.target.setAttribute("src", "./dist/img/navbar-logo-hover.png");
});

navItem.addEventListener("mouseout", (e) => {
  let img = e.target;
  let startImg = img.getAttribute("data-img");
  img.setAttribute("src", startImg);
});
