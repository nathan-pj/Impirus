// Get the modal
var modal = document.getElementById("modal");
let modalActive = false;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Carousel

const carousel = document.getElementById('carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let slides;
let slideWidth;
let totalSlides;
let currentIndex = 0;

// Initialisation to avoid errors
let newImages = [
    '../assets/livingThings/wl.png',
    '../assets/livingThings/pbo.png',
    '../assets/livingThings/lg.png',
    // Add more image paths as needed
];

// Example usage:
const webDev = [
    '../assets/webDeveloper.png'
];

const webDevText = "<p>Hello!<br><br>My name is Moa, and this website was developed by me. Web design credits go to both Impirus Studio and me, Moa Myrén. If you want a similar website made for you, i.e. for partnership, please contact me through E-mail. <br><br>Thank you for viewing my work, as well as Impirus Studio<br><br>- Moa Myrén<br><br><b>For contact:</b></p><a href='mailto: moamyrs@gmail.com' class='webDevButtons'>Mail: moamyrs@gmail.com</a><a href='' class='webDevButtons'>LinkedIn: moamyrs@gmail.com</a>";

function openModal(heading, text) {
    modal.style.display = "block";
    modalActive = true;
    slideWidth = slides[0].clientWidth;
    goToSlide(currentIndex);
    if(document.getElementById('mouseOverlay') != null){
        document.getElementById('mouseOverlay').style.display = "none"; 
    }
    document.getElementById('modalH3').innerHTML = heading;
    document.getElementById('modalPar').innerHTML = text;
    prevButton.style.display = "flex"; 
    nextButton.style.display = "flex"; 
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

function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    carousel.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
}

/* NOTE TO SELF, HAMMERTIME IS NEEDED FOR MOBILE SWIPING */

document.addEventListener('DOMContentLoaded', function() {

    initialiseCarousel();

    // Optional: Auto slide every 5 seconds
    const autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    }, 5000);

    // Previous button click event
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(currentIndex);
        clearInterval(autoSlideInterval); // Pause auto-slide on manual navigation
    });

    // Next button click event
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
        clearInterval(autoSlideInterval); // Pause auto-slide on manual navigation
    });
});

// Resize event listener
window.addEventListener('resize', () => {
    if (slides.length > 0) {
        slideWidth = slides[0].clientWidth;
        goToSlide(currentIndex);
    }
});

function resize(){
    if (slides.length > 0) {
        slideWidth = slides[0].clientWidth;
        goToSlide(currentIndex);
    }
}

function updateCarousel(images) {
    
    // Clear current slides
    carousel.innerHTML = '';

    // Loop through the images array and create new slides
    images.forEach(imageSrc => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = 'Carousel Image';

        slide.appendChild(img);
        carousel.appendChild(slide);
    });
    
    // Update slides and slideWidth after updating carousel
    slides = document.querySelectorAll('.carousel-slide');
    totalSlides = slides.length;
    if (totalSlides > 0) {
        slideWidth = slides[0].clientWidth;
    }
}

function initialiseCarousel() {
    updateCarousel(newImages);
    goToSlide(0); // Start at the first slide
}

function  hideCarouselNav(){
    prevButton.style.display = "none"; 
    nextButton.style.display = "none"; 
}