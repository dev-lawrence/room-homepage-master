const menuBar = document.querySelector('.menu');
const headerContent = document.querySelector('.header__content-nav');
const logo = document.querySelector('.logo');
const navMenu = document.querySelector('.nav__menu');

// toggle menu on click
menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('active');
  headerContent.classList.toggle('active');
  logo.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.querySelector('.header').classList.toggle('active');
});
