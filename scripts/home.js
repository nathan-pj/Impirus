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
const secTotalSlides = secSlides.length;

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


// set up text to print, each item in array is new line
var review1 = [
    "'Nathan is a highly skilled 3D product animator and video editor, and he works with great efficiency and dedication. He made a 3D animated video involving complex motion design for my company's supplement products and also edited a commercial. Throughout the process, he was highly responsive to feedback and made revisions swiftly and effectively. With his expert skills, he was able to not only realise what I envisioned for the video but also exceed my expectations. The end product is worthy of a professional design studio.", 
    "I highly recommend Nathan's design services, and he is a joy to work with.'
    [SEE DOME HEALTH COMMERCIAL(we can put link here to the project page?)]"
    
];

var review2 = [
    "You will get more good reviews in the future, this is allowing you to implement them in ur website :)", 
    "I dont have Wongs face yet, thats why im using mine lmao'."
];

var iSpeed = 100; // time delay of print out

function typewriter(textArray, elementId) {
    var iIndex = 0; // start printing array at this position
    var iArrLength = textArray[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row

    function type() {
        sContents = ' ';
        iRow = Math.max(0, iIndex - iScrollAt);
        var destination = document.getElementById(elementId);
        
        while (iRow < iIndex) {
            sContents += textArray[iRow++] + '<br />';
        }
        destination.innerHTML = sContents + textArray[iIndex].substring(0, iTextPos) + "_";
        if (iTextPos++ == iArrLength) {
            iTextPos = 0;
            iIndex++;
            if (iIndex != textArray.length) {
                iArrLength = textArray[iIndex].length;
                setTimeout(type, 500);
            }
        } else {
            setTimeout(type, iSpeed);
        }
    }

    type();
}

// Call the function for both elements
typewriter(review1, "review1Text");
//typewriter(review2, "review2Text");

/* Contact video speed */
/* 
let vid = document.getElementById("contactBackground");
vid.playbackRate = 0.2; 
*/
