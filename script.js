// Responsive header offset for smooth scrolling
function getHeaderOffset() {
    return window.innerWidth < 768 ? 60 : 100; // Smaller offset for mobile
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = getHeaderOffset();
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Responsive scroll reveal animation
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: window.innerWidth < 768 ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.project-card, .skill-item, .testimonial-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = window.innerWidth < 768 ? 'translateY(20px)' : 'translateY(50px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Responsive mobile menu functionality
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    let lastScroll = 0;

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('open');
        });
    }

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (window.innerWidth < 768) {
            // Hide navbar on scroll down for mobile
            if (currentScroll > lastScroll && currentScroll > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        } else {
            // Desktop behavior
            if (currentScroll > lastScroll && currentScroll > 100) {
                navbar.style.transform = 'translateX(-50%) translateY(-100%)';
            } else {
                navbar.style.transform = 'translateX(-50%) translateY(0)';
            }
        }
        lastScroll = currentScroll;
    });
}

// Responsive particles (optional)
function createParticles() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);

    function resizeCanvas() {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    }
    resizeCanvas();

    const particles = [];
    const particleCount = window.innerWidth < 768 ? 20 : 50;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width / window.devicePixelRatio;
            this.y = Math.random() * canvas.height / window.devicePixelRatio;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width / window.devicePixelRatio) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height / window.devicePixelRatio) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
        resizeCanvas();
    });
}

// Call these functions as needed
// createParticles();

// Make sure to add a hamburger icon in your HTML for mobile menu:
// <div class="hamburger"><span></span><span></span><span></span></div>
