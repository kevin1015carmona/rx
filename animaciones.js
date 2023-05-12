"use strict";

window.addEventListener("load", function () {
  const button_menu = document.querySelector("#button_menu");
  const menu = document.querySelector("#menu");
  const bar_1 = document.querySelector("#bar_menu_1");
  const bar_2 = document.querySelector("#bar_menu_2");
  const bar_3 = document.querySelector("#bar_menu_3");
  let comprobacion = false;
  button_menu.addEventListener("click", function () {
    console.log(comprobacion);
    if (comprobacion === false) {
      menu.style.animation = "menu_expand 1s forwards";
      bar_1.style.animation = "bar_menu_1 1s forwards";
      bar_2.style.animation = "bar_menu_2 1s forwards";
      bar_3.style.animation = "bar_menu_3 1s forwards";
      comprobacion = true;
    } else {
      menu.style.animation = "menu_contract 1s forwards";
      bar_1.style.animation = "bar_menu_1_return 1s forwards";
      bar_2.style.animation = "bar_menu_2_return 1s forwards";
      bar_3.style.animation = "bar_menu_3_return 1s forwards";
      comprobacion = false;
    }
  });
});
