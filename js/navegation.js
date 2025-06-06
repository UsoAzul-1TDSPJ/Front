let lastScrollTop = 0;
const nav = document.querySelector("nav");
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu );

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    nav.style.top = "-80px";
  } else {
    nav.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});



