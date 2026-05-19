// Handle navbar scroll effect
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header-index');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.classList.remove('scrolled');
        header.style.background = 'rgba(255, 255, 255, 1)';
    }
});

// Enhanced carousel functionality
const carousel = {
    slides: document.querySelectorAll('.carousel-slide'),
    dots: document.querySelectorAll('.dot'),
    progressBar: document.querySelector('.progress-bar'),
    currentSlide: 0,
    duration: 5000,
    interval: null,

    init() {
        this.showSlide(this.currentSlide);
        this.startProgress();
        this.startAutoplay();
        this.addEventListeners();
    },

    showSlide(index) {
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
        
        // Reset and start progress bar
        this.progressBar.style.transition = 'none';
        this.progressBar.style.width = '0';
        setTimeout(() => {
            this.progressBar.style.transition = 'width 5s linear';
            this.progressBar.style.width = '100%';
        }, 50);
    },

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    },

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
    },

    startProgress() {
        this.progressBar.style.width = '100%';
    },

    startAutoplay() {
        this.interval = setInterval(() => this.nextSlide(), this.duration);
    },

    stopAutoplay() {
        clearInterval(this.interval);
    },

    addEventListeners() {
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.currentSlide = index;
                this.showSlide(index);
                this.stopAutoplay();
                this.startAutoplay();
            });
        });

        // Pause on hover
        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.addEventListener('mouseenter', () => this.stopAutoplay());
        carouselContainer.addEventListener('mouseleave', () => this.startAutoplay());

        // Touch events for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        carouselContainer.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carouselContainer.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                this.nextSlide();
            } else if (touchEndX - touchStartX > 50) {
                this.prevSlide();
            }
        });
    }
};

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    carousel.init();

    // Add loading animation
    const loading = document.createElement('div');
    loading.className = 'loading-animation';
    document.body.appendChild(loading);

    // Add smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});
