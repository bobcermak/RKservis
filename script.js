//Header

//Roll

document.addEventListener('DOMContentLoaded', function() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.page__header');

    window.addEventListener('scroll', function() {
        if (window.scrollY < lastScrollY) {
            header.classList.remove('page__header-hidden');
        } else {
            header.classList.add('page__header-hidden');
        }
        lastScrollY = window.scrollY;
    });
});

//Side-bar

function toggleMenu() {
    const hamburgerMenu = document.querySelector('.page__nav__hamburger-menu');
    const fixedIcon = document.querySelector('.page_nav__hamburger.page__nav__close-icon');
    hamburgerMenu.style.right = hamburgerMenu.style.right === '0px' ? '-100%' : '0';
    fixedIcon.classList.toggle('active');
}
function closeMenuOnClick() {
    const hamburgerMenu = document.querySelector('.page__nav__hamburger-menu');
    const fixedIcon = document.querySelector('.page_nav__hamburger.page__nav__close-icon');
    hamburgerMenu.style.right = '-100%';
    fixedIcon.classList.remove('active');
}
document.querySelectorAll('.page__nav__hamburger-menu a').forEach(link => {
    link.addEventListener('click', closeMenuOnClick);
});

//Color

const headerLinks = document.querySelectorAll('header a');
headerLinks.forEach(link => {
    if (link.classList.contains('activeLi')) {
        link.style.color = '#FF4605';
    }
});

//Animations

document.addEventListener("DOMContentLoaded", () => {
    const animations = [
      { element: document.querySelector(".container--ad"), delay: 600 },
      { element: document.querySelector(".cards__1"), delay: 900 },
      { element: document.querySelector(".cards__2"), delay: 1100 },
      { element: document.querySelector(".cards__3"), delay: 1300 }
    ];
  
    animations.forEach(({ element, delay }) => {
      setTimeout(() => {
        if (element) element.classList.add("animate");
      }, delay);
    });
  });