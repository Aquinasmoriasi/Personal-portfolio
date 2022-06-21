const menu = document.querySelector('.menu-icon');
const menuItems = document.querySelector('.menu-items');
const homePage = document.querySelector('.main-info');
const logo = document.querySelector('#name-logo');
const navLink = document.querySelector('.nav-link');
const navLink2 = document.querySelector('.nav-link2');
const navLink3 = document.querySelector('.nav-link3');

menu.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    menuItems.style.transition = 'all 0.3s ease-out';
    menuItems.style.top = '-200%';
    homePage.style.filter = 'blur(0)';
    logo.style.filter = 'blur(0)';
  } else {
    menu.classList.add('active');
    menuItems.style.transition = 'all 0.3s ease-in';
    menuItems.style.left = '0';
    menuItems.style.top = '0';
    menuItems.style.paddingTop = '6.5rem';
    homePage.style.filter = 'blur(7px)';
    logo.style.filter = 'blur(8px)';
  }
});

navLink.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuItems.style.transition = 'all 0.3s ease-out';
  menuItems.style.top = '-200%';
  homePage.style.filter = 'blur(0)';
  logo.style.filter = 'blur(0)';
});

navLink2.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuItems.style.transition = 'all 0.3s ease-out';
  menuItems.style.top = '-200%';
  homePage.style.filter = 'blur(0)';
  logo.style.filter = 'blur(0)';
});

navLink3.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuItems.style.transition = 'all 0.3s ease-out';
  menuItems.style.top = '-200%';
  homePage.style.filter = 'blur(0)';
  logo.style.filter = 'blur(0)';
});
