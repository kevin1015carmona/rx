"use strict";

window.addEventListener("load", function () {
  const coramex = document.querySelector("#coramex");
  const gnatus = document.querySelector("#gnatus");
  const myray = document.querySelector("#myray");
  window.addEventListener("scroll", function () {
    let altura = window.pageYOffset;
    console.log(altura);
    if (altura >= 1200) {
      coramex.style.animation = "left_to_right 1s forwards";
    }
    if (altura >= 1350) {
      gnatus.style.animation = "right_to_left 1s forwards";
    }
    if (altura >= 1530) {
      myray.style.animation = "left_to_right 1s forwards";
    }
  });
});
