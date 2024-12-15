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
function closeMenuOnClick(event) {
    const hamburgerMenu = document.querySelector('.page__nav__hamburger-menu');
    const fixedIcon = document.querySelector('.page_nav__hamburger.page__nav__close-icon');
    if (event.target.closest('.dropdown-hamburger')) {
        return;
    }
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

//Dropdown

document.addEventListener("DOMContentLoaded", function () {
    const dropdownTrigger = document.querySelector(".dropdown-hamburger > a");
    const dropdownMenu = document.querySelector(".dropdown-menu-hamburger");
    const dropdownHamburger = document.querySelector(".dropdown-hamburger");
    function toggleDropdown(event) {
        event.preventDefault()
        const isVisible = dropdownMenu.classList.contains("open");
        dropdownMenu.classList.toggle("open", !isVisible);
        dropdownHamburger.classList.toggle("active", !isVisible);
    }
    function closeDropdownOnClickOutside(event) {
        if (!event.target.closest(".dropdown-hamburger")) {
            dropdownMenu.classList.remove("open");
            dropdownHamburger.classList.remove("active");
        }
    }
    dropdownTrigger.addEventListener("click", toggleDropdown);
    document.addEventListener("click", closeDropdownOnClickOutside);
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdownHamburger = document.querySelector(".dropdown-hamburger");
    const contactMenuItem = document.querySelector("li.contact");
    dropdownHamburger.addEventListener("click", function () {
        contactMenuItem.classList.toggle("active-contact");
    });
});

document.querySelectorAll('.dropdown-hamburger').forEach(function(element) {
    element.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});


//Animations

document.addEventListener("DOMContentLoaded", () => {
    const animationoffers = [
      { element: document.querySelector(".container--ad"), delay: 400 },
      { element: document.querySelector(".cards__1"), delay: 700 },
      { element: document.querySelector(".cards__2"), delay: 900 },
      { element: document.querySelector(".cards__3"), delay: 1100 }
    ];
    animationoffers.forEach(({ element, delay }) => {
      setTimeout(() => {
        if (element) element.classList.add("animate");
      }, delay);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const animationAbout = [
                        { element: document.querySelector(".header-about"), delay: 200 },
                        { element: document.querySelector(".container--about"), delay: 400 },
                        { element: document.querySelector(".footer-about"), delay: 600 },
                    ];
                    animationAbout.forEach(({ element, delay }) => {
                        setTimeout(() => {
                            if (element) element.classList.add("animate");
                        }, delay);
                    });
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: .6 }
    );
    const section = document.querySelector(".page__about");
    if (section) {
        observer.observe(section);
    }
})