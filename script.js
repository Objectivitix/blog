const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("aside");

menuToggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("active");
}