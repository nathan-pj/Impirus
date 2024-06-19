document.addEventListener('mousemove', function(e) {
    const h2 = document.getElementById('nameStretch');
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate rotation angle based on mouse position
    const rotateY = (clientX - innerWidth / 2) / innerWidth * 20; // Adjust the multiplier for intensity
    
    // Calculate tilt (rotateX) based on mouse position (inverted for tilt effect)
    const rotateX = (innerHeight / 2 - clientY) / innerHeight * 20; // Adjust the multiplier for intensity
    
    // WITHOUT TRANSFORM X
    //h2.style.transform = `perspective(1000px) rotateY(${rotateY}deg)`;

    // Apply the transform with rotation and tilt (rotateX)
    h2.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});


// Function to adjust rotation based on scroll position
function adjustRotations() {
    const h2Elements = document.querySelectorAll('#whoAreWe h2');
    const maxScroll = 1200; // The scroll position at which the rotation should be 0
    const startRotationX = 20; // Initial X rotation in degrees
    const startRotationY = -20; // Initial Y rotation in degrees

    // Get the current scroll position
    const scrollTop = window.scrollY;

    // Calculate the new rotation based on scroll position
    let rotationX = startRotationX;
    let rotationY = startRotationY;

    if (scrollTop >= maxScroll) {
        // If the scroll position is greater than or equal to maxScroll, set rotation to 0
        rotationX = 0;
        rotationY = 0;
    } else {
        // Otherwise, calculate the rotation based on the scroll position
        rotationX = startRotationX - (scrollTop / maxScroll) * startRotationX;
        rotationY = startRotationY - (scrollTop / maxScroll) * startRotationY;
    }

    // Apply the calculated rotation to each h2 element
    h2Elements.forEach((h2) => {
        h2.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });
}

// Add an event listener for the scroll event
window.addEventListener('scroll', adjustRotations);

// Initial call to set the rotation based on the initial scroll position
adjustRotations();

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slides = document.querySelectorAll('.carousel-slide');
let slideWidth = slides[0].clientWidth;

let currentIndex = 0;
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

const carouselBg = document.getElementById('whoAreWeImgContainer');
const leftCNav = document.getElementById('prev');
const rightCNav = document.getElementById('next');

function fadeIn(){
        carouselBg.classList.remove('grayHoverAnimationEnd');
        carouselBg.classList.add('grayHoverAnimation');
}

function fadeOut(){
    carouselBg.classList.remove('grayHoverAnimation');
    carouselBg.classList.add('grayHoverAnimationEnd');
}

document.addEventListener('DOMContentLoaded', () => {
        carouselBg.addEventListener('mouseenter', () => {
            fadeIn();
        });

        carouselBg.addEventListener('mouseleave', () => {
            fadeOut();
        });
    });