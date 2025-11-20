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
const btnNotification = document.querySelector(".icons button.notification");
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

if(dropdown){

    
    btn.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });
    
    // يقفل القايمة لما تدوسي براها 👇
    window.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });

}    







// losts table filter
const filterBtn = document.getElementById("filter-btn");
const filterContainer = document.querySelector(".filter-container");

if(filterBtn){


    
filterBtn.addEventListener("click", function(){
    filterContainer.classList.toggle("open")
})

window.addEventListener("click", (e) => {
    if (!filterContainer.contains(e.target) && !filterBtn.contains(e.target)) {
        filterContainer.classList.remove("open");
    }
});
}




// progress 
const progressBar = document.querySelector(".lost-progress .progress-bar");
const steps = document.querySelectorAll(".lost-progress .step");

function updateProgress() {
    const doneCount = document.querySelectorAll(".lost-progress .step.done").length;
    
    progressBar.classList.remove("progress-50", "progress-75", "progress-100");
    
    if (doneCount === 1) {
        progressBar.classList.add("progress-50");
    } else if (doneCount === 2) {
        progressBar.classList.add("progress-75");
    } else if (doneCount === 3) {
        progressBar.classList.add("progress-100");
    }
}

updateProgress();


function updateProgress1() {
    // امسح أي next موجود قبل التحديث
    steps.forEach(s => s.classList.remove("next"));

    // هات آخر step واخدة done
    const doneSteps = document.querySelectorAll(".lost-progress .step.done");
    if (doneSteps.length === 0) return;

    const lastDone = doneSteps[doneSteps.length - 1]; // آخر واحدة done
    const lastDoneIndex = Array.from(steps).indexOf(lastDone);

    // أضف next للخطوة اللي بعدها بس
    const nextStep = steps[lastDoneIndex + 1];
    if (nextStep) {
        nextStep.classList.add("next");
    }
}   

updateProgress1();




