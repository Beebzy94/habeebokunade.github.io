const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
  hamburger.classList.toggle('open');
});

// get the current year
document.getElementById('year').textContent = new Date().getFullYear();