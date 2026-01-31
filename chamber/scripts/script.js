function toggleMenu() {
  document.querySelector('nav').classList.toggle('open');
}

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const navMenu = document.querySelector("nav ul");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
} else {
  console.error("Hamburger button or nav menu not found!");
}

