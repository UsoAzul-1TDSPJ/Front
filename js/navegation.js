const nav = document.getElementById("nav");
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  nav.classList.toggle("active");
  const isActive = nav.classList.contains("active");
  btnMobile.setAttribute("aria-expanded", isActive);
}

if (btnMobile) {
  btnMobile.addEventListener("click", toggleMenu);
}

// Ocultar nav ao rolar
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    nav.style.top = "-80px";
  } else {
    nav.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
