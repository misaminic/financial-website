const navbar = document.querySelector('#navbar');
let scrolled = false;

window.onscroll = () => {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    scrolled = true;
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
};
