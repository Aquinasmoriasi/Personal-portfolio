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

//popups section

// const projectOneMobile = {
//   highlight: 'img',
//   header: 'h2',
//   otherProjects: '.highlights',
//   projectDescription: '.project1-description-p',
//   techDetails: '.project1-tech-details',
//   getResume: '.resume'
// }

let project = document.querySelectorAll('.resume');
let body = document.querySelectorAll('body');
project.addEventListener('click', () => {
  document.createElement('div');
  div.classList.add('popup');
  const popup = document.querySelector('.popup');
  body.appendChild('popup');
  popup.style.width = '70vw';
  popup.style.height = '70vh';
  div.style.backgroundColor = 'red';
})

{/* <section class="project1">
           <img src="./images/project1.jpg" alt="project1-snapshot">
           <h2 id="pj1-h2">Tonic</h2>
           <h2 id="pj1-h2-alt">Facebook 360</h2>
           <p class="highlights">
             <span class="canopy4">CANOPY</span>
             <span class="canopy-alt">FACEBOOK</span>
                <span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
                </svg>
                </span>
                <span class="not-canopy4">Back End Dev</span>
                <span class="not-canopy-alt">Full Stack Dev</span>
                <span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
                </svg>
                </span>
                <span class="not-canopy4">2015</span>
                <span class="not-canopy-alt">2015</span>
           
            <div class="project1-description">
                <p class="project1-description-p">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
          <p class="project1-description-alt-p">
            Exploring the future of media in Facebook's first Virtual Reality app;
            a place to discover and enjoy 360 photos and videos on Gear VR.
          </p>
            </div>
         <div class="project1-tech-details">
            <ul class="lang-buttons">
                <li>
                    <button type="button">html</button>
                </li>
                <li>
                    <button class="pj4-alt-lang-button" type="button">Ruby on rails</button>
                </li>
                <li>
                    <button type="button">css</button>
                 </li>
                <li>
                    <button type="button">javaScript</button>
                </li>
              </ul>
         </div>   
         <div class="resume">
            <a href="#">See Project</a> 
         </div>    
       </section> */}
