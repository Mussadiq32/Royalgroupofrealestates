document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburgerMenu.contains(e.target) && !navList.contains(e.target)) {
            hamburgerMenu.classList.remove('active');
            navList.classList.remove('active');
        }
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburgerMenu.classList.remove('active');
            navList.classList.remove('active');
        }
    });
});