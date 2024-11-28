// Stars Animation
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = Array(100).fill().map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: Math.random() * 0.5,
}));

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
    });
    requestAnimationFrame(drawStars);
}

drawStars();

// Interactive Galaxy Message
function showGalaxy() {
    alert('Get ready to explore the wonders of the universe!');
    document.querySelector('.universe-container').style.animation = 'zoomIn 2s forwards';
}

// Shooting Star Cursor
document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    star.style.left = `${e.clientX}px`;
    star.style.top = `${e.clientY}px`;

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 500); // Matches the animation duration in CSS
});