const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const slides = document.querySelectorAll(".announcement-slide");
const prevBtn = document.querySelector(".announcement-arrow.prev");
const nextBtn = document.querySelector(".announcement-arrow.next");
const announcementBar = document.querySelector(".announcement-bar");

let currentSlide = 0;
let slideTimer;

function setMenu(open) {
  mobileMenu.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", open);
}

menuToggle.addEventListener("click", () => {
  setMenu(!mobileMenu.classList.contains("active"));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

function showSlide(index) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function startSlider() {
  slideTimer = setInterval(() => showSlide(currentSlide + 1), 4000);
}

function resetSlider() {
  clearInterval(slideTimer);
  startSlider();
}

prevBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
  resetSlider();
});

nextBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
  resetSlider();
});

announcementBar.addEventListener("mouseenter", () => clearInterval(slideTimer));
announcementBar.addEventListener("mouseleave", startSlider);

startSlider();
