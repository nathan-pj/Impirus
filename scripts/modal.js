// Get the modal
var modal = document.getElementById("modal");
let modalActive = false;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
 
function openModal() {
    modal.style.display = "block";
    modalActive = true;
    slideWidth = slides[0].clientWidth;
    goToSlide(currentIndex);
    if(document.getElementById('mouseOverlay') != null){
        document.getElementById('mouseOverlay').style.display = "none"; 
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    modalActive = false;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalActive = false;
    }
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