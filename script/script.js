const navBar = document.querySelector("nav");
const menu = document.querySelector(".navbar-toggler-icon");
const logo = document.querySelector(".navbar-brand");
const link = document.querySelectorAll(".navbar-nav a");
const login = document.querySelector(".login");
menu.addEventListener("click", function () {
  navBar.classList.toggle("top");
});

let stop = 0;
window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    navBar.classList.add("active");
    // logo.style.color = "#3E3E3E";
    // link.forEach(function (element) {
    //   element.style.color = "#3E3E3E";
    // });
    // login.style.color = "#3E3E3E";
  } else if (window.scrollY === 0) {
    navBar.classList.remove("active");
    // logo.style.color = "";
    // link.forEach(function (element) {
    //   element.style.color = "";
    // });
    // login.style.color = "";
  }
});
