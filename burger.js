let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let homeBtn = document.getElementById("home-btn");
let aboutBtn = document.getElementById("about-me-btn");
let skillsBtn = document.getElementById("skills-btn");
let portfolioBtn = document.getElementById("portfolio-btn");
let fon = document.querySelector(".fon-burger-menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");

  fon.classList.toggle("active");
});
