const roles = ["Web Developer", "Frontend Developer", "UI/UX Designer", "WordPress Developer"];
const typingElement = document.querySelector(".typing");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    const displayedText = currentRole.substring(0, charIndex);
    typingElement.textContent = displayedText;

    if (!isDeleting && charIndex < currentRole.length) {
        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            roleIndex = (roleIndex + 1) % roles.length;
        }
        setTimeout(typeEffect, 1000);
    }
}
typeEffect();

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navlinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const navListItems = document.querySelectorAll(".navlinks ul li a");
navListItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        const revealPoint = 150;

        if (elementTop < viewportHeight - revealPoint) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
