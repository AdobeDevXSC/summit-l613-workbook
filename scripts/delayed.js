// add delayed functionality here
const element = document.querySelector('.navigation');
const offset = element.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= offset) {
    element.classList.add('stuck');
  } else {
      element.classList.remove('stuck');
  }
});
