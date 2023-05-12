"use strict";

window.addEventListener("load", () => {
  const back = document.getElementById("arrow_back");
  const forward = document.getElementById("arrow_forward");
  const products = document.getElementById("product_one");
  let index = 0;
  back.style.display = "none";
  /*   back.style.display = "none";
   */ back.addEventListener("click", function () {
    index = index - 1;
    if (index <= 0) {
      index = 0;
      back.style.display = " none";
    }
    if (index === 0) {
      products.style.animation = "first_previous 1s forwards";
    } else if (index === 1) {
      products.style.animation = "second_previous 1s forwards";
      forward.style.display = "flex";
    }
    console.log(index);
  });
  forward.addEventListener("click", () => {
    index++;
    if (index === 1) {
      products.style.animation = "first_next 1s forwards";
      back.style.display = "flex";
    } else if (index === 2) {
      products.style.animation = "second_next 1s forwards";
      forward.style.display = "none";
    }
    console.log(index);
  });
});
