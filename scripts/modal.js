// Get the modal
var modal = document.getElementById("modal");
let modalActive = false;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Carousel
const carousel = document.getElementById('carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let autoSlideInterval;
let slides;
let slideWidth;
let totalSlides;
let currentIndex = 0;
const itemsClickMe = [ [
        ['../assets/webDeveloper.png'], 
        "Meet the Web Developer", 
        ["<p>Hello!<br><br>My name is Moa, and this website was developed by me. Web design credits go to both Impirus Studio and me, Moa Myrén. If you want a similar website made for you, i.e. for partnership, please contact me through E-mail. <br><br>Thank you for viewing my work, as well as Impirus Studio<br><br>- Moa Myrén<br><br><b>For contact:</b></p><a href='mailto: moamyrs@gmail.com' class='webDevButtons'>Mail: moamyrs@gmail.com</a><a href='https://www.linkedin.com/in/moa-myr%C3%A9n-449947316/' class='webDevButtons'>LinkedIn: moamyrs@gmail.com</a>"],
        "A photo of the web developer"
    ], [
       ['
    '../assets/based/4.png',
    '../assets/111skin.jpg',
    
    '../assets/glasses.png',
    '../assets/livingThings/pbo.png',
    '../assets/livingThings/rp.png',
    '../assets/livingThings/lg.png',
    '../assets/based/whitebg.png',
    '../assets/LaPerse_still.jpg',
    '../assets/based/6.png',
    '../assets/BasedBalm_still.jpg',
    '../assets/21.jpeg',
    '../assets/dolce.jpg',
    '../assets/based/usp.png',
    '../assets/livingThings/wl.png',
    '../assets/vr.jpg',
    '../assets/based/peelfinal.png',
    '../assets/based/3comp.png'
']]
const items = [
    [
        ['../assets/webDeveloper.png'], 
        "Meet the Web Developer", 
        ["<p>Hello!<br><br>My name is Moa, and this website was developed by me. Web design credits go to both Impirus Studio and me, Moa Myrén. If you want a similar website made for you, i.e. for partnership, please contact me through E-mail. <br><br>Thank you for viewing my work, as well as Impirus Studio<br><br>- Moa Myrén<br><br><b>For contact:</b></p><a href='mailto: moamyrs@gmail.com' class='webDevButtons'>Mail: moamyrs@gmail.com</a><a href='https://www.linkedin.com/in/moa-myr%C3%A9n-449947316/' class='webDevButtons'>LinkedIn: moamyrs@gmail.com</a>"],
        "A photo of the web developer"
    ],
    [
        ['../assets/livingThings/lg.png',
        '../assets/livingThings/pbo.png', 
        '../assets/livingThings/rp.png',
        '../assets/livingThings/wl.png'], 
        "Living Things Renders", 
        [
            "Description for first living thing render",
            "Description for second living thing render",
            "Description for third living thing render",
            "Description for fourth living thing render"
        ],
        "3D renders for Living Things"
    ],
    [
        ['../assets/based/3comp.png',
        '../assets/based/4.png', 
        '../assets/based/6.png',
        '../assets/based/peelfinal.png',
        '../assets/based/usp.png',
        '../assets/based/whitebg.png'], 
        "Based Bodyworks", 
        [
            "A bathroom setting featuring a showcase of shampoo ingredients.",
            "In a jungle setting, reviews showcase a shampoo and conditioner bundle with product ingredients subtly in the background",
            "Bundle products displayed on an ancient pillar against a dramatic sky and clouds backdrop. This composition exudes a sense of timeless elegance and distinction, ideal for highlighting unique selling points.",
            "Texture powder presented against a gradient background, featuring a transparent coating delicately peeling off the product, revealing its unique texture and appeal.",
            "Texture powder on a pillar, surrounded by ethereal floating rocks. The powder is depicted in motion, with a captivating visual of particles dispersing from its base, evoking a sense of dynamic energy and unique textural quality.",
            " Conditioner gently tilted against a backdrop of soft light. Ideal for a striking product listing that highlights the product's elegant presentation."
        ],
        "3D renders for Based Bodyworks"
    ],
    [
        ['../assets/21.jpeg'], 
        "LANEIGE", 
        [""],
        "3D render for LANEIGE"
    ],
    [
        ['../assets/111skin.jpg'], 
        "111 Skin", 
        ["Minimalist image showcasing a detailed mesh and texturing."],
        "3D render for 111 Skin"
    ],
    [
        ['../assets/BasedBalm_still.jpg'], 
        "Based Balm", 
        ["Image for a natural skin care brand in a jungle setting to emphasise the products all natural ingredients"],
        "3D render for Based Balm"
    ],
    [
        ['../assets/videos/apple_animation.mp4', '../assets/vr.jpg', ], 
        "VR", 
        ["Apple Pro Vision virtual headset", "second description"],
        "3D renders of Apple Vision Pro"
    ],
    [
        ['../assets/LaPerse_still.jpg'], 
        "LA PERSE", 
        ["Usage of moody lighting and light rays with detailed texturing of the rocks exemplify the products feel of being rustic"],
        "3D render for LA PERSE"
    ],
    [
        ['../assets/glasses.png'], 
        "Glasses", 
        ["Blue light glasses"],
        "3D render of a pair of glasses"
    ],
    [
        ['../assets/dolce.jpg'], 
        "DOLCE & GABBANA", 
        ["A cologne bottle atop a mountain under a picturesque sky, its product droplets creating ripples in water below, surrounded by lush vegetation."],
        "3D render of a perfume from Dolce & Gabbana"
    ],
    [
        ['../assets/videos/naturateVertical.mp4'], 
        "NATURATE animation", 
        ["Description"],
        "A 3D animation of a product from Naturate with floating rocks."
    ],
    [
        ['../assets/videos/dome.mp4'], 
        "Dome Health animation", 
        ["Description for dome commercial"],
        "A 3D Animation for a product from Dome Health and Theia Bio"
    ],
    [
        ['../assets/videos/soulbrew.mp4'], 
        "Animation for Soulbrew", 
        ["Description"],
        "A 3D Animation for a product from Soulbrew"
    ],
    [
        ['../assets/videos/sphereVid.mp4'], 
        "LUXE SPHERE 3", 
        ["Description"],
        "An abstract animation of a textured sphere"
    ]
];

function closeModal(){
    document.body.style.overflowY = "scroll";
    modal.style.display = "none";
    modalActive = false;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    closeModal();
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Add a key listener for the Escape button to close the modal
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modalActive) {
        closeModal();
    }
});

function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    carousel.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;

    // Update the visible paragraph
    const paragraphs = document.querySelectorAll('.carousel-paragraph');
    paragraphs.forEach((paragraph, idx) => {
        paragraph.style.display = idx === index ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Optional: Auto slide every 5 seconds
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    }, 5000);

    // Previous button click event
    prevButton.addEventListener('click', () => {
        resize();
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(currentIndex);
        clearInterval(autoSlideInterval); // Pause auto-slide on manual navigation
    });

    // Next button click event
    nextButton.addEventListener('click', () => {
        resize();
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
        clearInterval(autoSlideInterval); // Pause auto-slide on manual navigation
    });

    initHammer(); // Initialize hammer
});

// Resize event listener
window.addEventListener('resize', () => {
    if(slides != null){
        resize();
    }
});

function resize(){
    if (slides.length > 0) {
        slideWidth = slides[0].clientWidth;
        goToSlide(currentIndex);
    }
}

function initialiseCarousel() {
    if(!modalActive){
        updateCarousel(items[1][0], items[1][2], items[1][3]);
    }
    goToSlide(0); // Start at the first slide
}

function hideCarouselNav(){
    prevButton.style.display = "none"; 
    nextButton.style.display = "none"; 
}

function updateCarousel(images, descriptions, alt) {
    console.log('updateCarousel called with:', images, descriptions);
    console.log('Is images an array?', Array.isArray(images));
    if (!Array.isArray(images)) {
        console.error('updateCarousel expected an array, but received:', images);
        return;
    }
    
    // Clear current slides
    carousel.innerHTML = '';
    const paragraphContainer = document.getElementById('modalPar');
    paragraphContainer.innerHTML = ''; // Clear current paragraphs

    // Loop through the images array and create new slides
    images.forEach((imageSrc, index) => {
        let project;
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';

        if (imageSrc.includes("mp4") || imageSrc.includes("mov") || imageSrc.includes("webm")) {
            project = document.createElement('video');
            project.src = imageSrc;
            project.controls = true;
            project.preload = "none";
        } else {
            project = document.createElement('img');
            project.src = imageSrc;
            project.alt = alt;
        }
        slide.appendChild(project);
        carousel.appendChild(slide);

        // Create and append paragraph for this slide
        const paragraph = document.createElement('div');
        paragraph.className = 'carousel-paragraph';
        paragraph.innerHTML = descriptions[index] || 'No description available';
        paragraphContainer.appendChild(paragraph);
    });
    
    // Update slides and slideWidth after updating carousel
    slides = document.querySelectorAll('.carousel-slide');
    totalSlides = slides.length;
    currentIndex = 0; // Reset currentIndex to 0
    if (totalSlides > 0) {
        slideWidth = slides[0].clientWidth;
    }
    resize(); // Call resize to adjust carousel
}

function openModal(item) {
    document.body.style.overflowY = "hidden";
    console.log('openModal called with:', item);
    updateCarousel(item[0], item[2], item[3]);
    modal.style.display = "block";
    modalActive = true;
    goToSlide(0); // Reset to the first slide
    if (document.getElementById('mouseOverlay') != null) {
        document.getElementById('mouseOverlay').style.display = "none";
    }
    document.getElementById('modalTitle').innerHTML = item[1];
    document.getElementById('modalH3').innerHTML = item[1];
    prevButton.style.display = "flex";
    nextButton.style.display = "flex";
    if (item[0].length <= 1) {
        hideCarouselNav();
    }
}

function initHammer() {
    var element = document.getElementById("carousel");
    var hammertime = new Hammer(element);
    hammertime.on("swiperight", function (event) {         
        resize();
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(currentIndex);
        clearInterval(autoSlideInterval);  
    });
    hammertime.on("swipeleft", function (event) {         
        resize();
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
        clearInterval(autoSlideInterval);
    });
}
