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

// popups section

const projectOneCard = {
  name: 'Tonic',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featuredImage: 'src="./images/project1.jpg" alt="project1-snapshot"',
  technologies: ['html', 'css', 'javascript'],
  liveLink: 'https://aquinasmoriasi.github.io/Personal-portfolio/',
  sourceLink: 'https://github.com/Aquinasmoriasi/Personal-portfolio',
};

const projectTwoCard = {
  name: 'Muti-Post Stories',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featuredImage: 'src="./images/project2.jpg" alt="project1-snapshot"',
  technologies: ['html', 'css', 'javascript'],
  liveLink: 'https://aquinasmoriasi.github.io/Personal-portfolio/',
  sourceLink: 'https://github.com/Aquinasmoriasi/Personal-portfolio',
};

const projectThreeCard = {
  name: 'Tonic',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featuredImage: 'src="./images/project3.jpg" alt="project1-snapshot"',
  technologies: ['html', 'css', 'javascript'],
  liveLink: 'https://aquinasmoriasi.github.io/Personal-portfolio/',
  sourceLink: 'https://github.com/Aquinasmoriasi/Personal-portfolio',
};

const projectFourCard = {
  name: 'Muti-Post Stories',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featuredImage: 'src="./images/project4.jpg" alt="project1-snapshot"',
  technologies: ['html', 'css', 'javascript'],
  liveLink: 'https://aquinasmoriasi.github.io/Personal-portfolio/',
  sourceLink: 'https://github.com/Aquinasmoriasi/Personal-portfolio',
};

const projectOneCardDt = {
  name: 'Facebook 360',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ummy text of the printing and typesetting release of Lorem Ipsum has been the industry\'s  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  featuredImage: 'src="./images/project1.jpg" alt="project3-snapshot"',
  technologies: ['html', 'css', 'javascript', 'github', 'Ruby', 'Bootstrap'],
  liveLink: 'https://aquinasmoriasi.github.io/Personal-portfolio/',
  sourceLink: 'https://github.com/Aquinasmoriasi/Personal-portfolio',
};

const projectFourCardDt = {
  name: 'Multi-Post Stories',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ummy text of the printing and typesetting release of Lorem Ipsum has been the industry\'s  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  featuredImage: 'src="./images/project4.jpg" alt="project2-snapshot"',
  technologies: ['html', 'css', 'javascript', 'github', 'Ruby', 'Bootstrap'],
  liveLink: 'https://aquinasmoriasi.github.io/Personal-portfolio/',
  sourceLink: 'https://github.com/Aquinasmoriasi/Personal-portfolio',
};
const projectThreeCardDt = {
  name: 'Tonic',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ummy text of the printing and typesetting release of Lorem Ipsum has been the industry\'s  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  featuredImage: 'src="./images/project1-alt.jpg" alt="project3-snapshot"',
  technologies: ['html', 'css', 'javascript', 'github', 'Ruby', 'Bootstrap'],
  liveLink: 'https://aquinasmoriasi.github.io/Personal-portfolio/',
  sourceLink: 'https://github.com/Aquinasmoriasi/Personal-portfolio',
};
const projectTwoCardDt = {
  name: 'Uber Navigation',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ummy text of the printing and typesetting release of Lorem Ipsum has been the industry\'s  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  featuredImage: 'src="./images/project2.jpg" alt="project4-snapshot"',
  technologies: ['html', 'css', 'javascript', 'github', 'Ruby', 'Bootstrap'],
  liveLink: 'https://aquinasmoriasi.github.io/Personal-portfolio/',
  sourceLink: 'https://github.com/Aquinasmoriasi/Personal-portfolio',
};

const pj1 = `
<h2 id="pj1-h2">${projectOneCard.name}</h2>
  <span class="close-btn">&times;</span>
<div class="highlights">
    <span class="canopy4">CANOPY</span>
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
    </div>
<img ${projectOneCard.featuredImage}>
<p class="project1-description-p">${projectOneCard.description}</p>
 </div>
<div class="project1-tech-details">
 <ul id="pj1-lang-buttons">
     <li>
         <button type="button">${projectOneCard.technologies[0]}</button>
     </li>
     <li>
         <button type="button">${projectOneCard.technologies[1]}</button>
      </li>
     <li>
         <button type="button">${projectOneCard.technologies[2]}</button>
     </li>
   </ul>
</div>   
<div id="divider"></div>
<div id="link-buttons">
<button class="resume" id="live-btn" type="button" onclick="location.href='${projectOneCard.liveLink}'">See more
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="#6070FF"/>
    </svg>
  </button>   
  <button class="resume" id="source-btn" type="button" onclick="location.href='${projectOneCard.sourceLink}'">See source
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="#6070FF"/>
    </svg>
  </button>  
</div>
`;

const pj2 = `
<h2 id="pj1-h2">${projectTwoCard.name}</h2>
  <span class="close-btn">&times;</span>
<div class="highlights">
    <span class="canopy4">CANOPY</span>
       <span>
       <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
       <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
       </svg>
       </span>
       <span class="not-canopy4">Back End Dev</span>
       <span class="not-canopy-alt">Lead Developer</span>
       <span>
       <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
       <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
       </svg>
       </span>
       <span class="not-canopy4">2018</span>
    </div>
<img ${projectTwoCard.featuredImage}>
<p class="project1-description-p">${projectTwoCard.description}</p>
 </div>
<div class="project1-tech-details">
 <ul id="pj1-lang-buttons">
     <li>
         <button type="button">${projectTwoCard.technologies[0]}</button>
     </li>
     <li>
         <button type="button">${projectTwoCard.technologies[1]}</button>
      </li>
     <li>
         <button type="button">${projectTwoCard.technologies[2]}</button>
     </li>
   </ul>
</div>   
<div id="divider"></div>
<div id="link-buttons">
<button class="resume" id="live-btn" type="button" onclick="location.href='${projectTwoCard.liveLink}'">See more
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="#6070FF"/>
    </svg>
  </button>   
  <button class="resume" id="source-btn" type="button" onclick="location.href='${projectTwoCard.sourceLink}'">See source
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="#6070FF"/>
    </svg>
  </button>  
</div>
`;
const pj3 = `
<h2 id="pj1-h2">${projectThreeCard.name}</h2>
  <span class="close-btn">&times;</span>
<div class="highlights">
    <span class="canopy4">CANOPY</span>
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
    </div>
<img ${projectThreeCard.featuredImage}>
<p class="project1-description-p">${projectThreeCard.description}</p>
 </div>
<div class="project1-tech-details">
 <ul id="pj1-lang-buttons">
     <li>
         <button type="button">${projectThreeCard.technologies[0]}</button>
     </li>
     <li>
         <button type="button">${projectThreeCard.technologies[1]}</button>
      </li>
     <li>
         <button type="button">${projectThreeCard.technologies[2]}</button>
     </li>
   </ul>
</div>   
<div id="divider"></div>
<div id="link-buttons">
<button class="resume" id="live-btn" type="button" onclick="location.href='${projectThreeCard.liveLink}'">See more
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="#6070FF"/>
    </svg>
  </button>   
  <button class="resume" id="source-btn" type="button" onclick="location.href='${projectThreeCard.sourceLink}'">See source
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="#6070FF"/>
    </svg>
  </button>  
</div>
`;
const pj4 = `
<h2 id="pj1-h2">${projectFourCard.name}</h2>
  <span class="close-btn">&times;</span>
<div class="highlights">
    <span class="canopy4">CANOPY</span>
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
    </div>
<img ${projectFourCard.featuredImage}>
<p class="project1-description-p">${projectFourCard.description}</p>
 </div>
<div class="project1-tech-details">
 <ul id="pj1-lang-buttons">
     <li>
         <button type="button">${projectFourCard.technologies[0]}</button>
     </li>
     <li>
         <button type="button">${projectFourCard.technologies[1]}</button>
      </li>
     <li>
         <button type="button">${projectFourCard.technologies[2]}</button>
     </li>
   </ul>
</div>   
<div id="divider"></div>
<div id="link-buttons">
<button class="resume" id="live-btn" type="button" onclick="location.href='${projectFourCard.liveLink}'">See more
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="#6070FF"/>
    </svg>
  </button>   
  <button class="resume" id="source-btn" type="button" onclick="location.href='${projectFourCard.sourceLink}'">See source
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="#6070FF"/>
    </svg>
  </button>  
</div>
`;
const pj1Dt = `
        <h2 id="pj1-h2-dt">${projectOneCardDt.name}</h2>
        <span id="close-btn-dt" class="close-btn">&times;</span>
        <div class="highlights highlights-dt">
            <span class="canopy-alt">Facebook 360</span>
               <span>
               <svg class="not-canopy-alt1" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
               </svg>
               </span>
               <span class="not-canopy-alt">Full Stack Dev</span>
               <span>
               <svg class="not-canopy-alt1" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
               </svg>
               </span>
               <span class="not-canopy-alt">2015</span>
            </div>
            <img ${projectOneCardDt.featuredImage}>      
        <p class="project1-description-p-dt">
          ${projectOneCardDt.description}
        </p>
         </div>
        <div class="project1-tech-details project1-tech-details-dt">
         <ul id="pj1-lang-buttons-dt">
             <li>
                 <button type="button">${projectOneCardDt.technologies[0]}</button>
             </li>
             <li>
                 <button type="button">${projectOneCardDt.technologies[1]}</button>
              </li>
             <li>
                 <button type="button">${projectOneCardDt.technologies[2]}</button>
             </li>
           </ul>
        <ul id="pj1-lang-buttons-dt1">
           <li>
            <button type="button">${projectOneCardDt.technologies[3]}</button>
        </li>
        <li>
            <button type="button">${projectOneCardDt.technologies[3]}</button>
         </li>
        <li>
            <button type="button">${projectOneCardDt.technologies[4]}</button>
        </li>
       </ul>
        </div>   
        <div id="divider-dt"></div>
        <div id="link-buttons-dt">
        <button class="resume" id="live-btn-dt" type="button" onclick="location.href='${projectOneCardDt.liveLink}'">See more
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="#6070FF"/>
            </svg>
          </button>   
          <button class="resume" id="source-btn-dt" type="button" onclick="location.href='${projectOneCardDt.sourceLink}'">See source
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="#6070FF"/>
            </svg>
          </button>  
        </div>`;
const pj2Dt = `
        <h2 id="pj1-h2-dt">${projectTwoCardDt.name}</h2>
        <span id="close-btn-dt" class="close-btn">&times;</span>
        <div class="highlights highlights-dt">
            <span class="canopy-alt">CANOPY</span>
               <span>
               <svg class="not-canopy-alt1" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
               </svg>
               </span>
               <span class="not-canopy-alt">Back End Dev</span>
               <span>
               <svg class="not-canopy-alt1" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
               </svg>
               </span>
               <span class="not-canopy-alt">2015</span>
            </div>
            <img ${projectTwoCardDt.featuredImage}>      
        <p class="project1-description-p-dt">
          ${projectTwoCardDt.description}
        </p>
         </div>
        <div class="project1-tech-details project1-tech-details-dt">
         <ul id="pj1-lang-buttons-dt">
             <li>
                 <button type="button">${projectTwoCardDt.technologies[0]}</button>
             </li>
             <li>
                 <button type="button">${projectTwoCardDt.technologies[1]}</button>
              </li>
             <li>
                 <button type="button">${projectTwoCardDt.technologies[2]}</button>
             </li>
           </ul>
        <ul id="pj1-lang-buttons-dt1">
           <li>
            <button type="button">${projectTwoCardDt.technologies[3]}</button>
        </li>
        <li>
            <button type="button">${projectTwoCardDt.technologies[3]}</button>
         </li>
        <li>
            <button type="button">${projectTwoCardDt.technologies[4]}</button>
        </li>
       </ul>
        </div>   
        <div id="divider-dt"></div>
        <div id="link-buttons-dt">
        <button class="resume" id="live-btn-dt" type="button" onclick="location.href='${projectTwoCardDt.liveLink}'">See more
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="#6070FF"/>
            </svg>
          </button>   
          <button class="resume" id="source-btn-dt" type="button" onclick="location.href='${projectTwoCardDt.sourceLink}'">See source
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="#6070FF"/>
            </svg>
          </button>  
        </div>`;
const pj3Dt = `
        <h2 id="pj1-h2-dt">${projectThreeCardDt.name}</h2>
        <span id="close-btn-dt" class="close-btn">&times;</span>
        <div class="highlights highlights-dt">
            <span class="canopy-alt">CANOPY</span>
               <span>
               <svg class="not-canopy-alt1" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
               </svg>
               </span>
               <span class="not-canopy-alt">Back End Dev</span>
               <span>
               <svg class="not-canopy-alt1" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
               </svg>
               </span>
               <span class="not-canopy-alt">2015</span>
            </div>
            <img ${projectThreeCardDt.featuredImage}>      
        <p class="project1-description-p-dt">
          ${projectThreeCardDt.description}
        </p>
         </div>
        <div class="project1-tech-details project1-tech-details-dt">
         <ul id="pj1-lang-buttons-dt">
             <li>
                 <button type="button">${projectThreeCardDt.technologies[0]}</button>
             </li>
             <li>
                 <button type="button">${projectThreeCardDt.technologies[1]}</button>
              </li>
             <li>
                 <button type="button">${projectThreeCardDt.technologies[2]}</button>
             </li>
           </ul>
        <ul id="pj1-lang-buttons-dt1">
           <li>
            <button type="button">${projectThreeCardDt.technologies[3]}</button>
        </li>
        <li>
            <button type="button">${projectThreeCardDt.technologies[3]}</button>
         </li>
        <li>
            <button type="button">${projectThreeCardDt.technologies[4]}</button>
        </li>
       </ul>
        </div>   
        <div id="divider-dt"></div>
        <div id="link-buttons-dt">
        <button class="resume" id="live-btn-dt" type="button" onclick="location.href='${projectThreeCardDt.liveLink}'">See more
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="#6070FF"/>
            </svg>
          </button>   
          <button class="resume" id="source-btn-dt" type="button" onclick="location.href='${projectThreeCardDt.sourceLink}'">See source
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="#6070FF"/>
            </svg>
          </button>  
        </div>`;
const pj4Dt = `
        <h2 id="pj1-h2-dt">${projectFourCardDt.name}</h2>
        <span id="close-btn-dt" class="close-btn">&times;</span>
        <div class="highlights highlights-dt">
            <span class="canopy-alt">Facebook</span>
               <span>
               <svg class="not-canopy-alt1" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
               </svg>
               </span>
               <span class="not-canopy-alt">Full Stack Dev</span>
               <span>
               <svg class="not-canopy-alt1" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
               </svg>
               </span>
               <span class="not-canopy-alt">2015</span>
            </div>
            <img ${projectFourCardDt.featuredImage}>      
        <p class="project1-description-p-dt">
          ${projectFourCardDt.description}
        </p>
         </div>
        <div class="project1-tech-details project1-tech-details-dt">
         <ul id="pj1-lang-buttons-dt">
             <li>
                 <button type="button">${projectFourCardDt.technologies[0]}</button>
             </li>
             <li>
                 <button type="button">${projectFourCardDt.technologies[1]}</button>
              </li>
             <li>
                 <button type="button">${projectFourCardDt.technologies[2]}</button>
             </li>
           </ul>
        <ul id="pj1-lang-buttons-dt1">
           <li>
            <button type="button">${projectFourCardDt.technologies[3]}</button>
        </li>
        <li>
            <button type="button">${projectFourCardDt.technologies[3]}</button>
         </li>
        <li>
            <button type="button">${projectFourCardDt.technologies[4]}</button>
        </li>
       </ul>
        </div>   
        <div id="divider-dt"></div>
        <div id="link-buttons-dt">
        <button class="resume" id="live-btn-dt" type="button" onclick="location.href='${projectFourCardDt.liveLink}'">See more
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="#6070FF"/>
            </svg>
          </button>   
          <button class="resume" id="source-btn-dt" type="button" onclick="location.href='${projectFourCardDt.sourceLink}'">See source
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="#6070FF"/>
            </svg>
          </button>  
        </div>`;
const mediaQuery = window.matchMedia('(max-width: 768px)');

const desktopBg = document.querySelector('#bg');
const mobileBg = document.querySelector('#bg-mobile');
const projectsPage = document.querySelector('#projects');
const landingPage = document.querySelector('#landing-page');
const aboutPage = document.querySelector('#about-me');
const footer = document.querySelector('footer');
const popupBtn = document.querySelector('.project1 .resume ');
const popupBtn1 = document.querySelector('.project2 .resume ');
const popupBtn2 = document.querySelector('.project3 .resume ');
const popupBtn3 = document.querySelector('.project4 .resume ');
const section = document.createElement('section');
const body = document.querySelector('body');

function closeMenu() {
  mobileBg.style.display = 'none';
  landingPage.style.filter = 'blur(0)';
  aboutPage.style.filter = 'blur(0)';
  footer.style.filter = 'blur(0)';
  projectsPage.style.filter = 'blur(0)';
  section.style.display = 'none';
}

function closeMenuDt() {
  desktopBg.style.display = 'none';
  landingPage.style.filter = 'blur(0)';
  aboutPage.style.filter = 'blur(0)';
  footer.style.filter = 'blur(0)';
  projectsPage.style.filter = 'blur(0)';
  section.style.display = 'none';
}

if (mediaQuery.matches) {
  popupBtn.addEventListener('click', () => {
    window.scroll({ top: 0, left: 0 });
    mobileBg.style.display = 'block';
    section.innerHTML = pj1;
    section.setAttribute('id', 'pj1');
    landingPage.style.filter = 'blur(9px)';
    aboutPage.style.filter = 'blur(9px)';
    footer.style.filter = 'blur(9px)';
    projectsPage.style.filter = 'blur(9px)';
    body.append(section);
    section.style.display = 'flex';
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', closeMenu);
  });
  popupBtn1.addEventListener('click', () => {
    window.scroll({ top: 0, left: 0 });
    mobileBg.style.display = 'block';
    section.innerHTML = pj2;
    section.setAttribute('id', 'pj1');
    landingPage.style.filter = 'blur(9px)';
    aboutPage.style.filter = 'blur(9px)';
    footer.style.filter = 'blur(9px)';
    projectsPage.style.filter = 'blur(9px)';
    body.append(section);
    section.style.display = 'flex';
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', closeMenu);
  });
  popupBtn2.addEventListener('click', () => {
    window.scroll({ top: 0, left: 0 });
    mobileBg.style.display = 'block';
    section.innerHTML = pj3;
    section.setAttribute('id', 'pj1');
    landingPage.style.filter = 'blur(9px)';
    aboutPage.style.filter = 'blur(9px)';
    footer.style.filter = 'blur(9px)';
    projectsPage.style.filter = 'blur(9px)';
    body.append(section);
    section.style.display = 'flex';
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', closeMenu);
  });
  popupBtn3.addEventListener('click', () => {
    window.scroll({ top: 0, left: 0 });
    mobileBg.style.display = 'block';
    section.innerHTML = pj4;
    section.setAttribute('id', 'pj1');
    landingPage.style.filter = 'blur(9px)';
    aboutPage.style.filter = 'blur(9px)';
    footer.style.filter = 'blur(9px)';
    projectsPage.style.filter = 'blur(9px)';
    body.append(section);
    section.style.display = 'flex';
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', closeMenu);
  });
} else {
  popupBtn.addEventListener('click', () => {
    window.scroll({ top: 0, left: 0 });
    desktopBg.style.display = 'block';
    section.innerHTML = pj1Dt;
    section.setAttribute('id', 'pj1-dt');
    landingPage.style.filter = 'blur(9px)';
    aboutPage.style.filter = 'blur(9px)';
    footer.style.filter = 'blur(9px)';
    projectsPage.style.filter = 'blur(9px)';
    body.append(section);
    section.style.display = 'block';
    const closeBtnDt = document.querySelector('#close-btn-dt');
    closeBtnDt.addEventListener('click', closeMenuDt);
  });
  popupBtn1.addEventListener('click', () => {
    window.scroll({ top: 0, left: 0 });
    desktopBg.style.display = 'block';
    section.innerHTML = pj2Dt;
    section.setAttribute('id', 'pj1-dt');
    landingPage.style.filter = 'blur(9px)';
    aboutPage.style.filter = 'blur(9px)';
    footer.style.filter = 'blur(9px)';
    projectsPage.style.filter = 'blur(9px)';
    body.append(section);
    section.style.display = 'block';
    const closeBtnDt = document.querySelector('#close-btn-dt');
    closeBtnDt.addEventListener('click', closeMenuDt);
  });
  popupBtn2.addEventListener('click', () => {
    window.scroll({ top: 0, left: 0 });
    desktopBg.style.display = 'block';
    section.innerHTML = pj3Dt;
    section.setAttribute('id', 'pj1-dt');
    landingPage.style.filter = 'blur(9px)';
    aboutPage.style.filter = 'blur(9px)';
    footer.style.filter = 'blur(9px)';
    projectsPage.style.filter = 'blur(9px)';
    body.append(section);
    section.style.display = 'block';
    const closeBtnDt = document.querySelector('#close-btn-dt');
    closeBtnDt.addEventListener('click', closeMenuDt);
  });
  popupBtn3.addEventListener('click', () => {
    window.scroll({ top: 0, left: 0 });
    desktopBg.style.display = 'block';
    section.innerHTML = pj4Dt;
    section.setAttribute('id', 'pj1-dt');
    landingPage.style.filter = 'blur(9px)';
    aboutPage.style.filter = 'blur(9px)';
    footer.style.filter = 'blur(9px)';
    projectsPage.style.filter = 'blur(9px)';
    body.append(section);
    section.style.display = 'block';
    const closeBtnDt = document.querySelector('#close-btn-dt');
    closeBtnDt.addEventListener('click', closeMenuDt);
  });
}

document.querySelector('#submit').addEventListener('click', (event) => {
  const email = document.getElementById('email').value;
  const error = document.querySelector('.error');
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(email)) {
    event.preventDefault();
    error.innerHTML = 'Please write a lowercase email';
    error.style.color = 'red';
    setTimeout(() => {
      error.innerHTML = '';
    }, 5000);
  }
});
