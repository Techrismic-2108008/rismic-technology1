
// Carousel functionality
const carousel = {
    currentSlide: 0,
    slides: document.querySelectorAll('.carousel-slide'),
    dots: document.querySelectorAll('.carousel-dot'),
    progressBar: document.querySelector('.progress-bar'),
    interval: 5000, // 5 seconds

    init() {
        this.dots = document.querySelectorAll('.dot');
        this.setupEventListeners();
        this.startAutoPlay();
    },

    setupEventListeners() {
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
    },

    goToSlide(index) {
        // Remove active classes
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        // Update current slide
        this.currentSlide = index;
        
        // Add active classes
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
        
        // Reset progress bar
        this.resetProgressBar();
    },

    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    },

    resetProgressBar() {
        if (this.progressBar) {
            this.progressBar.style.width = '0%';
            void this.progressBar.offsetWidth; // Force reflow
            this.progressBar.style.width = '100%';
        }
    },

    startAutoPlay() {
        setInterval(() => this.nextSlide(), this.interval);
    }
};

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    carousel.init();
});

