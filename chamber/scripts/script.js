function toggleMenu() {
  document.querySelector('nav').classList.toggle('open');
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);

const navMenu = document.querySelector("nav ul");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
} else {
  console.error("Hamburger button or nav menu not found!");
}

