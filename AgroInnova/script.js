// script.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// script.js

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(aboutSection);
});

