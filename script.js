// Toggle mobile menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

let currentSlide = 0;

// Determine how many items to show per slide based on screen width
function getItemsPerSlide() {
  return window.innerWidth <= 768 ? 1 : 4;
}

function showSlide(index) {
  const cards = document.querySelectorAll(".project-card");
  const slider = document.getElementById("slider");

  if (!slider || cards.length === 0) return;

  const itemsPerSlide = getItemsPerSlide();
  const totalSlides = Math.ceil(cards.length / itemsPerSlide);

  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  const slideWidth = 100 / itemsPerSlide;
  slider.style.transform = `translateX(-${index * 100}%)`;
  currentSlide = index;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Recalculate slides on window resize
window.addEventListener("resize", () => {
  showSlide(currentSlide);
});

// Initialize slider after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
  setInterval(nextSlide, 6000); // Auto-slide every 6 seconds
});
