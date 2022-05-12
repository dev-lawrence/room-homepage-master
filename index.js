// RELOAD PAGE
window.onload = function () {
  if (!window.location.hash) {
    window.location = window.location + '#loaded';
    window.location.reload();
  }
};

const menuBar = document.querySelector('.menu');
const headerContent = document.querySelector('.header__content-nav');
const logo = document.querySelector('.logo');
const navMenu = document.querySelector('.nav__menu');
const navLinks = Array.from(navMenu.children);
const carousel = document.querySelector('.carousel');
const carouselSlides = Array.from(carousel.children);
const imgLength = carouselSlides.length;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slideSize = carouselSlides[0].clientWidth;
let currentSlide = 0;
const hero = document.querySelector('.hero');
const heroContainer = document.querySelector('.hero__container');
const heroText = Array.from(heroContainer.children);
const body = document.querySelector('body');
const overLay = document.querySelector('.overlay');

// MENU
const menuFunction = () => {
  menuBar.classList.toggle('active');
  headerContent.classList.toggle('active');
  logo.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('show');
  overLay.classList.toggle('show');
};

// toggle menu on click
menuBar.addEventListener('click', () => {
  menuFunction();
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuFunction();
  });
});

// CAROUSEL DEMO
// set up the slider
const reset = () => {
  carouselSlides.forEach((slide, i) => {
    slide.style.left = i * 100 + '%';
  });

  carouselSlides[0];
};

reset();

// move slide
const moveSlide = () => {
  carousel.style.transform = `translateX(-${currentSlide * slideSize}px)`;
};

//move to next slide
const nextSlide = () => {
  currentSlide++;

  if (currentSlide > imgLength - 1) {
    currentSlide = 0;
  }

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
    currentSlide = imgLength - 1;
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

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
