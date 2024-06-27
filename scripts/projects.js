const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let imageIndex = 0;
const placedImages = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function placeImage(x, y) {
    const img = new Image();
    img.src = items[1][0][imageIndex % items[1][0].length];
    img.onload = () => {
        const imgX = x - img.width / 2;
        const imgY = y - img.height / 2;
        ctx.drawImage(img, imgX, imgY);
        placedImages.push({ img, x: imgX, y: imgY });
        imageIndex++;
        
        if (placedImages.length > 10) {
            const oldImage = placedImages.shift();
            ctx.clearRect(oldImage.x, oldImage.y, oldImage.img.width, oldImage.img.height);
            ctx.fillStyle = 'rgba(0,0,0,0)'; // Assuming white background, adjust if needed
            ctx.fillRect(oldImage.x, oldImage.y, oldImage.img.width, oldImage.img.height);
            
            // Redraw remaining images
            placedImages.forEach(({ img, x, y }) => {
                ctx.drawImage(img, x, y);
            });
        }
    };
}

canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    placeImage(x, y);
});

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const moreInfo = document.getElementById('moreInfo');
const arrowDown = document.getElementById('arrowDown');
const canvasH2 = document.getElementById('canvasH2');

function checkPhone() {
    const isMobileOrTablet = mobileAndTabletCheck();
    const canvasH2 = document.getElementById('canvasH2'); // Make sure this element exists

    if (isMobileOrTablet) {
        if (canvasH2) {
            canvasH2.innerHTML = "TAP ME";
        } else {
            console.warn("Element with id 'canvasH2' not found.");
        }
    }
}


function arrowAnimation(){
    setTimeout(() => {
        moreInfo.classList.add('fadeIn');
        moreInfo.style.display = "flex";
    }, 5000); 
    setTimeout(() => {
        arrowDown.classList.add('floatUpDown');
    }, 8000); 
}

// Function to parse URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Check if the URL contains the item parameter and open the modal with that item
document.addEventListener('DOMContentLoaded', function() {
    const itemParam = getUrlParameter('item');
    if (itemParam) {
        const itemIndex = parseInt(itemParam, 10);
        if (!isNaN(itemIndex) && itemIndex >= 0 && itemIndex < items.length) {
            updateCarousel(items[itemIndex][0], items[itemIndex][2], items[itemIndex][3])
            openModal(items[itemIndex]);
        }
    }
});