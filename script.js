const menu = document.querySelector('.menu-icon');
const menuItems = document.querySelector('.menu-items');
const homePage = document.querySelector('.main-info');
const logo = document.querySelector('.logo a');
const navBars = document.querySelectorAll('.bar');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuItems.style.transition = 'all 0.2s ease-in';
  menuItems.style.left = '0';
  menuItems.style.top = '0';
  menuItems.style.paddingTop = '4rem';
  homePage.style.filter = 'blur(8px)';
  logo.style.filter = 'blur(8px)';
  navBars.style.backgroundColor = 'white';
});