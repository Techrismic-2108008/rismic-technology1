document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenuWrapper = document.querySelector('.nav-menu-wrapper');
    const closeMenu = document.querySelector('.close-menu');
    const navOverlay = document.querySelector('.nav-overlay');

    // Toggle the hamburger menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenuWrapper.classList.toggle('active');
        navOverlay.classList.toggle('active');
    });

    // Close the menu when the close button is clicked
    closeMenu.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenuWrapper.classList.remove('active');
        navOverlay.classList.remove('active');
    });

    // Close the menu when clicking on the overlay
    navOverlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenuWrapper.classList.remove('active');
        navOverlay.classList.remove('active');
    });
});
