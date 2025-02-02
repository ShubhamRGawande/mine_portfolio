// Toggle Menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Scroll Reveal Animation
ScrollReveal().reveal('.home-content, .about-img, .about-content, .project h2, .project-container, .skills h2, .skill-container, .contact h2, .contact form', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
});

// Typed.js for Multiple Text
const typed = new Typed('.multiple-text', {
    strings: ['Python Full Stack Developer', 'Web Designer', 'Tech Enthusiast'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting me! I will get back to you soon.');
    form.reset();
});