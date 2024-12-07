//Header

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