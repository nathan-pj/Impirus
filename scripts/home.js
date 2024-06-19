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
    h2Elements.forEach((h2, index) => {
        const scrollFraction = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const rotateX = 20 - scrollFraction / 2; // Adjust the multiplier for intensity
        const rotateY = index % 2 === 0 ? -10 + scrollFraction * 10 : 10 - scrollFraction * 10; // Alternating Y rotation

        h2.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
}

// Event listener for scroll events
window.addEventListener('scroll', adjustRotations);

// Initial adjustment on page load
adjustRotations();