// Side Navigation Functions
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

// Space Animation Background
const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const shootingStars = [];

function createStars(count) {
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5,
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';

    stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        star.x -= star.speed;
        if (star.x < 0) star.x = canvas.width;
    });

    requestAnimationFrame(drawStars);
}

createStars(150);
drawStars();

// Shooting Star Cursor
const shootingStar = document.createElement('div');
shootingStar.id = 'shooting-star';
document.body.appendChild(shootingStar);

document.addEventListener('mousemove', (e) => {
    shootingStar.style.left = `${e.pageX}px`;
    shootingStar.style.top = `${e.pageY}px`;
});

