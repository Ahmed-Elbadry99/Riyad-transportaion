//! AOS library
AOS.init();


const sidebar = document.querySelector('.lisks-side-bar');
let scrollTimer;

sidebar.addEventListener('scroll', () => {
    sidebar.classList.add('show-scroll');

    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
        sidebar.classList.remove('show-scroll');
    }, 1000);
});