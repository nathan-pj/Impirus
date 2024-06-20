const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const images = [
    '../assets/lg.png',
    '../assets/pbo.png',
    '../assets/wl.png',
    '../assets/rp.png'
];
let imageIndex = 0;
const placedImages = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function placeImage(x, y) {
    const img = new Image();
    img.src = images[imageIndex % images.length];
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

function arrowAnimation(){
    setTimeout(() => {
        moreInfo.classList.add('fadeIn');
        moreInfo.style.display = "flex";
    }, 5000); 
    setTimeout(() => {
        arrowDown.classList.add('floatUpDown');
    }, 8000); 

}
