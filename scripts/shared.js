function expandNavbar() {
    const burger = document.getElementById("burgerExpanded");
    burger.style.display = "flex";
    burger.classList.add("burgerOpenAnimation");
    burger.classList.remove("burgerCloseAnimation");
}

function closeNavbar() {
    const burger = document.getElementById("burgerExpanded");
    burger.classList.add("burgerCloseAnimation");
    burger.classList.remove("burgerOpenAnimation");
    setTimeout(() => {
        burger.style.display = "none";
    }, 900); 
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.burgerLink, .navLink, .navbarCompanyName, .footerLink').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.remove('menuDeselect');
            item.classList.add('menuSelect');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('menuSelect');
            item.classList.add('menuDeselect');
        });
    });

    const burgerCloseBtn = document.getElementById("burgerClose");
    burgerCloseBtn.addEventListener('mouseenter', () => {
        burgerCloseBtn.classList.remove('menuDeselect');
        burgerCloseBtn.classList.add('menuSelect');
    });

    burgerCloseBtn.addEventListener('mouseleave', () => {
        burgerCloseBtn.classList.remove('menuSelect');
        burgerCloseBtn.classList.add('menuDeselect');
    });

    const footerLogo = document.getElementById("footerLogo");
    
    footerLogo.addEventListener('mouseenter', () => {
        footerLogo.classList.remove('footerLogoDeselect');
        footerLogo.classList.add('footerLogoSelect');
    });

    footerLogo.addEventListener('mouseleave', () => {
        footerLogo.classList.remove('footerLogoSelect');
        footerLogo.classList.add('footerLogoDeselect');
    });
});

function redirectTo(url) {
    let transOut = document.querySelector('.transOut');
    transOut.classList.add('blackTransOut');
    setTimeout(() => {
        window.location.href = url;
    }, 900); 
}

// Carousel

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let slides = document.querySelectorAll('.carousel-slide');
let slideWidth = slides[0].clientWidth;

let currentIndex = 0;

const leftCNav = document.getElementById('prev');
const rightCNav = document.getElementById('next');
const totalSlides = slides.length;

function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;

    carousel.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
}

/* NOTE TO SELF, HAMMERTIME IS NEEDED FOR MOBILE SWIPING */

document.addEventListener('DOMContentLoaded', function() {

    slideWidth = slides[0].clientWidth;
    slides = document.querySelectorAll('.carousel-slide');

    // Optional: Auto slide every 5 seconds
    const autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    }, 5000);

    // Previous button click event
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(currentIndex);
    });

    // Next button click event
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    });

    // Pause auto-slide on manual navigation
    prevButton.addEventListener('click', () => clearInterval(autoSlideInterval));
    nextButton.addEventListener('click', () => clearInterval(autoSlideInterval));
});

// Resize event listener
window.addEventListener('resize', () => {
    slideWidth = slides[0].clientWidth;
    goToSlide(currentIndex);
});

slideWidth = slides[0].clientWidth;
goToSlide(currentIndex);