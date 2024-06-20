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

// Carousel
const secCarousel = document.querySelector('.sectionCarousel');
let secSlides = document.querySelectorAll('.sectionCarouselSlide');
let secSlideWidth = secSlides[0].clientWidth;

let secCurrentIndex = 0;

const secLeftCNav = document.getElementById('sectionPrev');
const secRightCNav = document.getElementById('sectionNext');
const secTotalSlides = slides.length;

function secGoToSlide(index) {
    if (index < 0 || index >= secTotalSlides) return;

    secCarousel.style.transform = `translateX(-${index * secSlideWidth}px)`;
    secCurrentIndex = index;
}

document.addEventListener('DOMContentLoaded', function() {

    secSlideWidth = secSlides[0].clientWidth;
    secSlides = document.querySelectorAll('.sectionCarouselSlide');

    // Optional: Auto slide every 5 seconds
    const secAutoSlideInterval = setInterval(() => {
        secCurrentIndex = (secCurrentIndex + 1) % secTotalSlides;
        secGoToSlide(secCurrentIndex);
    }, 5000);

    // Previous button click event
    secLeftCNav.addEventListener('click', () => {
        secCurrentIndex = (secCurrentIndex - 1 + secTotalSlides) % secTotalSlides;
        secGoToSlide(secCurrentIndex);
    });

    // Next button click event
    secRightCNav.addEventListener('click', () => {
        secCurrentIndex = (secCurrentIndex + 1) % secTotalSlides;
        secGoToSlide(secCurrentIndex);
    });

    // Pause auto-slide on manual navigation
    secLeftCNav.addEventListener('click', () => clearInterval(secAutoSlideInterval));
    secRightCNav.addEventListener('click', () => clearInterval(secAutoSlideInterval));
});

// Resize event listener
window.addEventListener('resize', () => {
    secSlideWidth = secSlides[0].clientWidth;
    secGoToSlide(secCurrentIndex);
});

secSlideWidth = secSlides[0].clientWidth;
secGoToSlide(secCurrentIndex);

const carouselBg = document.getElementById('whoAreWeImgContainer');

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