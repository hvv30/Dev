// Modern Typewriter Effect
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Initialize modern effects when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect for main heading
    const mainHeading = document.querySelector('header h1');
    if (mainHeading) {
        typeWriter(mainHeading, mainHeading.textContent, 80);
    }

    // Enhanced smooth scrolling with offset
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    // Current year for footer
    document.querySelector('footer p').innerHTML = `© ${new Date().getFullYear()} My Personal Blog`;

    // Modern scroll animations with GSAP-like effects
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.style.filter = 'blur(0)';
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px) scale(0.95)';
        section.style.filter = 'blur(2px)';
        section.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(section);
    });

    // Parallax effect for header
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('header');
        if (header) {
            header.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });
});
