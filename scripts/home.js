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

/*
// Function to adjust rotation based on scroll position
function adjustRotations() {
    const h2Elements = document.querySelectorAll('#whoAreWe h2');
    h2Elements.forEach((h2, index) => {
        const scrollFraction = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const rotateX = 20 - scrollFraction * 30; // Adjust the multiplier for intensity
        const rotateY = index % 2 === 0 ? -10 + scrollFraction * 10 : 10 - scrollFraction * 10; // Alternating Y rotation

        h2.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
}

// Event listener for scroll events
window.addEventListener('scroll', adjustRotations);

// Initial adjustment on page load
adjustRotations();
*/
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
        /* leftCNav.style.display = "flex";
        rightCNav.style.display = "flex"; */
        /*
        rightCNav.classList.remove('navFadeOut');
        leftCNav.classList.remove('navFadeOut');
        rightCNav.classList.add('navFadeIn');
        leftCNav.classList.add('navFadeIn');
        */
}

function fadeOut(){
    carouselBg.classList.remove('grayHoverAnimation');
    carouselBg.classList.add('grayHoverAnimationEnd');
    /*
    rightCNav.classList.add('navFadeOut');
    leftCNav.classList.add('navFadeOut');
    leftCNav.classList.remove('navFadeIn');
    rightCNav.classList.remove('navFadeIn');
    */
    setTimeout(() => {
        /* leftCNav.style.display = "none";
        rightCNav.style.display = "none"; */
    }, 900); 
}

document.addEventListener('DOMContentLoaded', () => {
        carouselBg.addEventListener('mouseenter', () => {
            fadeIn();
        });

        carouselBg.addEventListener('mouseleave', () => {
            fadeOut();
        });
    });