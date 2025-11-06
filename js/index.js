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
const closeIcon = document.querySelector(".left-part .info .close-icon");
console.log(closeIcon);

btnNotification.addEventListener("click",function(){
    leftPart.classList.add("responsive");
});
closeIcon.addEventListener("click",function(){
    leftPart.classList.remove("responsive");
});





//! Dropdown Btn
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }