// Mobile menu
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
btn.onclick = () => menu.classList.toggle("show");

// AOS
AOS.init();

// Swiper
new Swiper(".swiper", {
  autoplay: true,
  loop: true,
});