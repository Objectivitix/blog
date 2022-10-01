const icons = document.querySelectorAll("div[data-icon]");

icons.forEach(icon => {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("xmlns", svgNS);
  svg.setAttribute("viewBox", "0 0 24 24");

  const use = document.createElementNS(svgNS, "use");
  use.setAttribute("href", `#${icon.dataset.icon}-icon`);
  svg.appendChild(use);

  icon.replaceWith(svg);
});

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("aside");

menuToggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("active");
}