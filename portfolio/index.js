"use strict"

let burger = document.querySelector(".burger");
let navList = document.querySelector(".nav-list"); 

burger.addEventListener ("click", mobileMenu);

function mobileMenu() {
    burger.classList.toggle("active");
    navList.classList.toggle("active");
}