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
    const applyAnimations = (animations) => {
      animations.forEach(({ element, delay }) => {
        setTimeout(() => {
          if (element) element.classList.add("animate");
        }, delay);
      });
    };
  
    const animationOffers = [
      { element: document.querySelector(".container--ad"), delay: 400 },
      { element: document.querySelector(".cards__1"), delay: 700 },
      { element: document.querySelector(".cards__2"), delay: 900 },
      { element: document.querySelector(".cards__3"), delay: 1100 },
    ];
  
    const animationLocation = [
      { element: document.querySelector(".container--ad--another-pages"), delay: 400 },
      { element: document.querySelector(".page__iframe"), delay: 700 },
    ];
  
    applyAnimations([...animationOffers, ...animationLocation]);
});  
document.addEventListener("DOMContentLoaded", function () {
    const animateElements = (elements) => {
        elements.forEach(({ element, delay }) => {
            if (element) {
                setTimeout(() => {
                    element.classList.add("animate");
                }, delay);
            }
        });
    };
    const getThreshold = () => {
        const width = window.innerWidth;
        if (width <= 480) return .025;
        else if (width <= 768) return .10;
        else return .15;
    };
    const createObserver = (sectionSelector, animationData) => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateElements(animationData);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: getThreshold() });
        const section = document.querySelector(sectionSelector);
        if (section) {
            observer.observe(section);
        }
    };
    const aboutAnimationData = [
        { element: document.querySelector(".header-about"), delay: 200 },
        { element: document.querySelector(".container--about"), delay: 400 },
        { element: document.querySelector(".footer-about"), delay: 600 },
    ];
    createObserver(".page__about", aboutAnimationData);
    const skillsAnimationData = [
        { element: document.querySelector(".container--skills-header-main"), delay: 200 },
        { element: document.querySelector(".footer-skills__c-1"), delay: 400 },
        { element: document.querySelector(".footer-skills__c-2"), delay: 600 },
        { element: document.querySelector(".footer-skills__c-3"), delay: 800 },
        { element: document.querySelector(".footer-skills__c-4"), delay: 1000 },
        { element: document.querySelector(".footer-skills__c-5"), delay: 1200 },
        { element: document.querySelector(".footer-skills__c-6"), delay: 1400 },
    ];
    createObserver(".page__skills", skillsAnimationData);
    const reviewsAnimationData = [
        { element: document.querySelector(".header-reviews"), delay: 200 },
        { element: document.querySelector(".container--reviews"), delay: 400 },
        { element: document.querySelector(".footer-reviews__c-1"), delay: 600 },
        { element: document.querySelector(".footer-reviews__c-2"), delay: 800 },
        { element: document.querySelector(".footer-reviews__c-3"), delay: 1000 },
    ];
    createObserver(".page__reviews", reviewsAnimationData);
});

//Footer

document.getElementById("year").textContent = new Date().getFullYear();