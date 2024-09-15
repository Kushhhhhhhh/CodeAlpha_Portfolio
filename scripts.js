function toggleMenu() {
    const popupMenu = document.querySelector('.popup-menu');
    popupMenu.classList.toggle('active');
}

function generateRandomLightColor() {
    const r = Math.floor(Math.random() * 56) + 200; 
    const g = Math.floor(Math.random() * 56) + 200; 
    const b = Math.floor(Math.random() * 56) + 200;
    return `rgb(${r}, ${g}, ${b})`;
}

function applyBackgroundColors() {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        const randomColor = generateRandomLightColor();
        item.style.backgroundColor = randomColor;
    });
}

// Call the function after the page loads
document.addEventListener('DOMContentLoaded', applyBackgroundColors);