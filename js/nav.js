document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    // Set animation delays for menu items
    links.forEach((link, index) => {
        link.style.setProperty('--i', index);
    });

    // Toggle menu
    menuIcon.addEventListener('click', () => {
        // Toggle active classes
        menuIcon.classList.toggle('active');
        navLinks.classList.toggle('active');

        // Toggle body scroll
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking links
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuIcon.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuIcon.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            menuIcon.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Add box shadow on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        navbar.style.boxShadow = window.scrollY > 0 ? '0 2px 10px rgba(0,0,0,0.1)' : 'none';
    });
});
