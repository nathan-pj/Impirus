document.addEventListener('DOMContentLoaded', function() {
    if(mobileAndTabletCheck()){
        document.getElementById("sectionBackground").remove();
    }
 });

window.addEventListener('load', function() {
    document.addEventListener('mousemove', function(e) {
        const logo = document.getElementById('landingAnimation');
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Calculate rotation angle based on mouse position
        const rotateY = (clientX - innerWidth / 2) / innerWidth * 40; // Adjust the multiplier for intensity
        
        // Calculate tilt (rotateX) based on mouse position (inverted for tilt effect)
        const rotateX = (innerHeight / 2 - clientY) / innerHeight * 40; // Adjust the multiplier for intensity
    
        // Apply the transform with rotation and tilt (rotateX)
        logo.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
});
function wrapWordsWithSpan(elementId, spanClass) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id "${elementId}" not found.`);
        return;
    }

    // Get the text content of the element
    const text = element.textContent;

    // Split the text into words (using regex to include punctuation marks)
    const words = text.split(/(\s+)/).filter(word => word.trim().length > 0);

    // Wrap each word in a span element
    const wrappedWords = words.map(word => {
        return `<span class="${spanClass}">${word}</span>`;
    }).join(' ');

    // Set the modified content back to the element
    element.innerHTML = wrappedWords;
}

// Call the function to wrap words in the element with id "content"
wrapWordsWithSpan('vslHeading', 'word');

const grayWords = document.querySelectorAll('.word');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('wordAnimation');
        } 
        /* else {
            entry.target.classList.remove('black');
        } */
    });
});

grayWords.forEach((el) => observer.observe(el));

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

// set up text to print, each item in array is new line
var review1 = [
    "'Nathan is a highly skilled 3D product animator and video editor, and he works with great efficiency and dedication. He made a 3D animated video involving complex motion design for my company's supplement products and also edited a commercial. Throughout the process, he was highly responsive to feedback and made revisions swiftly and effectively. With his expert skills, he was able to not only realise what I envisioned for the video but also exceed my expectations. The end product is worthy of a professional design studio.", 
    "I highly recommend Nathan's design services, and he is a joy to work with.'"
];

var review2 = [
    "You will get more good reviews in the future, this is allowing you to implement them in ur website :)", 
    "I dont have Wongs face yet, thats why im using mine lmao'."
];

var iSpeed = 20; // time delay of print out

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

typewriter(review1, "review1Text");

// Carousel for the otherwise empty section (not VSL section)
const secCarousel = document.getElementById('secCarousel');
let secSlides = document.querySelectorAll('.sectionCarouselSlide');
let secSlideWidth = secSlides[0].clientWidth;

let secCurrentIndex = 0;

const secLeftCNav = document.getElementById('sectionPrev');
const secRightCNav = document.getElementById('sectionNext');
const secTotalSlides = secSlides.length;

// VSL carousel
const vslCarousel = document.getElementById('vslCarousel');
let vslSlides = document.querySelectorAll('.vslCarouselSlide');
let vslSlideWidth = vslSlides[0].clientWidth;

let vslCurrentIndex = 0;

const vslLeftCNav = document.getElementById('vslPrev');
const vslRightCNav = document.getElementById('vslNext');
const vslTotalSlides = vslSlides.length;

let vslAutoSlideInterval;
let secAutoSlideInterval;

function secGoToSlide(index) {
    if (index < 0 || index >= secTotalSlides) return;

    secCarousel.style.transform = `translateX(-${index * secSlideWidth}px)`;
    secCurrentIndex = index;
}

document.addEventListener('DOMContentLoaded', function() {

    secSlideWidth = secSlides[0].clientWidth;
    secGoToSlide(secCurrentIndex);
    vslSlideWidth = vslSlides[0].clientWidth;
    vslGoToSlide(vslCurrentIndex);

    secSlideWidth = secSlides[0].clientWidth;
    secSlides = document.querySelectorAll('.sectionCarouselSlide');

    // Optional: Auto slide every 5 seconds
    secAutoSlideInterval = setInterval(() => {
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

    vslSlideWidth = vslSlides[0].clientWidth;
    vslSlides = document.querySelectorAll('.vslCarouselSlide');

    // Optional: Auto slide every 5 seconds
    vslAutoSlideInterval = setInterval(() => {
        vslCurrentIndex = (vslCurrentIndex + 1) % vslTotalSlides;
        vslGoToSlide(vslCurrentIndex);
    }, 5000);

    // Previous button click event
    vslLeftCNav.addEventListener('click', () => {
        vslCurrentIndex = (vslCurrentIndex - 1 + vslTotalSlides) % vslTotalSlides;
        vslGoToSlide(vslCurrentIndex);
    });

    // Next button click event
    vslRightCNav.addEventListener('click', () => {
        vslCurrentIndex = (vslCurrentIndex + 1) % vslTotalSlides;
        vslGoToSlide(vslCurrentIndex);
    });

    // Pause auto-slide on manual navigation
    vslLeftCNav.addEventListener('click', () => clearInterval(vslAutoSlideInterval));
    vslRightCNav.addEventListener('click', () => clearInterval(vslAutoSlideInterval));
});

// Resize event listener
window.addEventListener('resize', () => {
    secSlideWidth = secSlides[0].clientWidth;
    secGoToSlide(secCurrentIndex);
    vslSlideWidth = vslSlides[0].clientWidth;
    vslGoToSlide(vslCurrentIndex);
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



const vslCarouselBg = document.getElementById('vslImgContainer');

function vslFadeIn(){
    vslCarouselBg.classList.remove('whiteHoverAnimationEnd');
    vslCarouselBg.classList.add('whiteHoverAnimation');
}

function vslFadeOut(){
    vslCarouselBg.classList.remove('whiteHoverAnimation');
    vslCarouselBg.classList.add('whiteHoverAnimationEnd');
}

document.addEventListener('DOMContentLoaded', () => {
    vslCarouselBg.addEventListener('mouseenter', () => {
        vslFadeIn();
    });

    vslCarouselBg.addEventListener('mouseleave', () => {
        vslFadeOut();
    });
});

function initIndexHammer() {
    var element = document.getElementById("secCarousel");
    var hammertime = Hammer(element);
    hammertime.on("swiperight", function (event) {         
        secSlideWidth = secSlides[0].clientWidth;
        secGoToSlide(secCurrentIndex);
        secCurrentIndex = (secCurrentIndex - 1 + secTotalSlides) % secTotalSlides;
        secGoToSlide(secCurrentIndex);
        clearInterval(secAutoSlideInterval);  
    });
    hammertime.on("swipeleft", function (event) {         
        secSlideWidth = secSlides[0].clientWidth;
        secGoToSlide(secCurrentIndex);
        secCurrentIndex = (secCurrentIndex + 1) % secTotalSlides;
        secGoToSlide(secCurrentIndex);
        clearInterval(secAutoSlideInterval);
    });

    var element2 = document.getElementById("vslCarousel");
    var hammertime2 = new Hammer(element2);
    hammertime2.on("swiperight", function (event) {         
        vslSlideWidth = vslSlides[0].clientWidth;
        vslGoToSlide(vslCurrentIndex);
        vslCurrentIndex = (vslCurrentIndex - 1 + vslTotalSlides) % vslTotalSlides;
        vslGoToSlide(vslCurrentIndex);
        clearInterval(vslAutoSlideInterval);  
    });
    hammertime2.on("swipeleft", function (event) {         
        vslSlideWidth = vslSlides[0].clientWidth;
        vslGoToSlide(vslCurrentIndex);
        vslCurrentIndex = (vslCurrentIndex + 1) % vslTotalSlides;
        vslGoToSlide(vslCurrentIndex);
        clearInterval(vslAutoSlideInterval);
    });
}

function vslGoToSlide(index) {
    if (index < 0 || index >= vslTotalSlides) return;

    vslCarousel.style.transform = `translateX(-${index * vslSlideWidth}px)`;
    vslCurrentIndex = index;
}

secSlideWidth = secSlides[0].clientWidth;
secGoToSlide(secCurrentIndex);
vslSlideWidth = vslSlides[0].clientWidth;
vslGoToSlide(vslCurrentIndex);