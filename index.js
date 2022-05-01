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
const hero = document.querySelector('.hero');
const heroContainer = document.querySelector('.hero__container');
const heroText = Array.from(heroContainer.children);

// FUNCTION TO MOVE SLIDE
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

  // logic to change texts
  const active = document.querySelector('.active');
  active.classList.remove('active');

  if (active.nextElementSibling) {
    active.nextElementSibling.classList.add('active');
  } else {
    heroText[0].classList.add('active');
  }

  moveSlide();
};

// move to previous slide
const prevSlide = () => {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  // logic to change texts
  const active = document.querySelector('.active');
  active.classList.remove('active');

  if (active.previousElementSibling) {
    active.previousElementSibling.classList.add('active');
  } else {
    heroText[heroText.length - 1].classList.add('active');
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
