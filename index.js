const menuBar = document.querySelector('.menu');
const headerContent = document.querySelector('.header__content-nav');
const logo = document.querySelector('.logo');
const navMenu = document.querySelector('.nav__menu');
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider__container');
const slides = Array.from(sliderContainer.children);
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slideSize = slider.offsetWidth;
let currentSlide = 0;

// move the slides
const moveSlide = () => {
  sliderContainer.style.transform = `translateX(-${
    currentSlide * slideSize
  }px)`;
};

// move to next slide
const nextSlide = () => {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }

  moveSlide();
};

// move to previous slide
const prevSlide = () => {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  moveSlide();
};

// Event listeners for sliders
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// toggle menu on click
menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('active');
  headerContent.classList.toggle('active');
  logo.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.querySelector('.header').classList.toggle('active');
});
