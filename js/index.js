//! AOS library
AOS.init();

//! Scroll Sidebar
const sidebar = document.querySelector('.lisks-side-bar');
let scrollTimer;

sidebar.addEventListener('scroll', () => {
    sidebar.classList.add('show-scroll');

    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
        sidebar.classList.remove('show-scroll');
    }, 1000);
});


//! Button Notification
const btnNotification = document.querySelector(".top-content .info .icons button.notification");
const leftPart = document.querySelector(".left-part");
const closeIcon = document.querySelector(".left-part .close-icon");
console.log(closeIcon);

btnNotification.addEventListener("click",function(){
    leftPart.classList.add("responsive");
});
closeIcon.addEventListener("click",function(){
    leftPart.classList.remove("responsive");
});

//! Dropdown Btn
const dropdown = document.querySelector(".dropdown");
const btn = document.getElementById("dropdownBtn");

btn.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

// يقفل القايمة لما تدوسي براها 👇
window.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
    }
});









