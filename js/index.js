//! AOS library
AOS.init();

//! Scroll Sidebar
// <<<<<<< HEAD
// const sidebar = document.querySelector('.lisks-side-bar');
// // console.log( "sidebar" ,sidebar);
// let scrollTimer;

// sidebar.addEventListener('scroll', () => {
//     sidebar.classList.add('show-scroll');

//     clearTimeout(scrollTimer);
//     scrollTimer = setTimeout(() => {
//         sidebar.classList.remove('show-scroll');
//     }, 1000);
// });


// =======
const sidebar = document.querySelector(".lisks-side-bar");
let scrollTimer;

sidebar.addEventListener("scroll", () => {
  sidebar.classList.add("show-scroll");

  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    sidebar.classList.remove("show-scroll");
  }, 1000);
});

// >>>>>>> f186c48b4104bcc0fa63f8c1e4885398b2a3aca7
//! Button Notification
// const btnNotification = document.querySelector(".icons button.notification");
// const leftPart = document.querySelector(".left-part");
// const closeIcon = document.querySelector(".left-part .close-icon");
// // <<<<<<< HEAD
// console.log( "btnNotification" ,btnNotification);

// btnNotification.addEventListener("click",function(){
//     leftPart.classList.add("responsive");
// });
// closeIcon.addEventListener("click",function(){
//     leftPart.classList.remove("responsive");
// });



// =======
console.log(closeIcon);

btnNotification.addEventListener("click", function () {
  leftPart.classList.add("responsive");
});
closeIcon.addEventListener("click", function () {
  leftPart.classList.remove("responsive");
});

// >>>>>>> f186c48b4104bcc0fa63f8c1e4885398b2a3aca7
//! Dropdown Btn
const dropdown = document.querySelector(".dropdown");
const btn = document.getElementById("dropdownBtn");

// <<<<<<< HEAD
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







// =======
if (dropdown) {
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

// >>>>>>> f186c48b4104bcc0fa63f8c1e4885398b2a3aca7
// losts table filter
const filterBtn = document.getElementById("filter-btn");
const filterContainer = document.querySelector(".filter-container");

// <<<<<<< HEAD
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




// =======
if (filterBtn) {
  filterBtn.addEventListener("click", function () {
    filterContainer.classList.toggle("open");
  });

  window.addEventListener("click", (e) => {
    if (!filterContainer.contains(e.target) && !filterBtn.contains(e.target)) {
      filterContainer.classList.remove("open");
    }
  });
}

// >>>>>>> f186c48b4104bcc0fa63f8c1e4885398b2a3aca7
// progress
const progressBar = document.querySelector(".lost-progress .progress-bar");
const steps = document.querySelectorAll(".lost-progress .step");

// <<<<<<< HEAD
// function updateProgress() {
//     const doneCount = document.querySelectorAll(".lost-progress .step.done").length;
    
//     progressBar.classList.remove("progress-50", "progress-75", "progress-100");
    
//     if (doneCount === 1) {
//         progressBar.classList.add("progress-50");
//     } else if (doneCount === 2) {
//         progressBar.classList.add("progress-75");
//     } else if (doneCount === 3) {
//         progressBar.classList.add("progress-100");
//     }
// }

// updateProgress();


function updateProgress1() {
    // امسح أي next موجود قبل التحديث
    steps.forEach(s => s.classList.remove("next"));
// =======
if (progressBar) {
  function updateProgress() {
    const doneCount = document.querySelectorAll(
      ".lost-progress .step.done"
    ).length;

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
    steps.forEach((s) => s.classList.remove("next"));
// >>>>>>> f186c48b4104bcc0fa63f8c1e4885398b2a3aca7

    // هات آخر step واخدة done
    const doneSteps = document.querySelectorAll(".lost-progress .step.done");
    if (doneSteps.length === 0) return;

    const lastDone = doneSteps[doneSteps.length - 1]; // آخر واحدة done
    const lastDoneIndex = Array.from(steps).indexOf(lastDone);

    // أضف next للخطوة اللي بعدها بس
    const nextStep = steps[lastDoneIndex + 1];
    if (nextStep) {
// <<<<<<< HEAD
        nextStep.classList.add("next");
    }
}

updateProgress1();
// =======
      nextStep.classList.add("next");
    }
  }

  updateProgress1();
// }

// const messages = document.querySelector(
//   ".app-data .cahtsDetails .cahtsDetailsBox"
// ); // My Message
// const inputChat = document.querySelector(
//   ".app-data .cahtsDetails .inputSend input"
// ); // Input Chat
// const btnSend = document.querySelector(
//   ".app-data .cahtsDetails .inputSend button"
// ); // Btn Send
// const messageBox = document.querySelector(".app-data .cahtsDetailsBox");
// // console.log(messages, inputChat, btnSend, messageBox);

// btnSend.addEventListener("click", function () {
//   const text = inputChat.value.trim();
//   if (text !== "") {
//     const msgContainer = document.createElement("div");
//     const msgImg = document.createElement("img");
//     const msg = document.createElement("p");
//     const time = document.createElement("span");
//     messages.appendChild(msgContainer);
//     msgContainer.classList.add("message-container");
//     msgContainer.classList.add("myMessage-container");
//     msgContainer.appendChild(msgImg);
//     msgImg.src = "./assets/images/chat-user.png";
//     msgContainer.appendChild(msg);
//     msg.classList.add("myMessage");
//     const currentTime = new Date();
//     const hours = String(currentTime.getHours()).padStart(2, "0");
//     const minutes = String(currentTime.getMinutes()).padStart(2, "0");
//     time.innerText = `${hours}:${minutes}`;
//     msgContainer.appendChild(time);

//     msg.innerText = inputChat.value;
//     inputChat.value = "";

//     messageBox.scrollTop = messageBox.scrollHeight; // لما ابعت رسالة ينزل الشات تلقائى لأخر رسالة
//   }
// });



const messages = document.querySelector(
  ".app-data .cahtsDetails .cahtsDetailsBox"
); // My Message
const inputChat = document.querySelector(
  ".app-data .cahtsDetails .inputSend input"
); // Input Chat
const btnSend = document.querySelector(
  ".app-data .cahtsDetails .inputSend button"
); // Btn Send
const messageBox = document.querySelector(".app-data .cahtsDetailsBox");

// زرار الملفات + input الملف المخفي
const attachBtn = document.querySelector("#attachBtn");
const fileInput = document.querySelector("#fileInput");

// لما اضغط على زرار المرفقات يفتح input الملف
attachBtn.addEventListener("click", () => {
  fileInput.click();
});

// ========= إرسال رسالة نصية ==========
btnSend.addEventListener("click", function () {
  const text = inputChat.value.trim();
  if (text !== "") {
    sendTextMessage(text);
    inputChat.value = "";
  }
});

// Enter يرسل الرسالة
inputChat.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    btnSend.click();
  }
});

// ========== دالة إرسال الرسالة النصية ==========
function sendTextMessage(text) {
  const msgContainer = document.createElement("div");
  const msgImg = document.createElement("img");
  const msg = document.createElement("p");
  const time = document.createElement("span");

  msgContainer.classList.add("message-container", "myMessage-container");
  msgImg.src = "./assets/images/chat-user.png";

  msg.classList.add("myMessage");
  msg.innerText = text;

  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  time.innerText = `${hours}:${minutes}`;

  msgContainer.appendChild(msgImg);
  msgContainer.appendChild(msg);
  msgContainer.appendChild(time);
  messages.appendChild(msgContainer);

  messageBox.scrollTop = messageBox.scrollHeight;
}

// ========== إضافة ملف في الرسائل ==========
fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;
  sendFileMessage(file);
});

// ========== دالة إرسال ملف ==========
function sendFileMessage(file) {
  const msgContainer = document.createElement("div");
  msgContainer.classList.add("message-container", "myMessage-container");

  const msgImg = document.createElement("img");
  msgImg.src = "./assets/images/chat-user.png";

  const content = document.createElement("div");
  // لو الملف صورة
  if (file.type.startsWith("image/")) {
    const img = document.createElement("img");

    img.src = URL.createObjectURL(file);
    img.style.maxWidth = "200px";
    img.style.borderRadius = "10px";
    img.style.marginTop = "5px";
    content.appendChild(img);

  } else {
    // أي ملف تاني: pdf, doc, zip...
      content.classList.add("myFileMessage");
     const msgImg = document.createElement("img");
  msgImg.src = "./assets/images/pdf.svg";
    content.appendChild(msgImg);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = file.name;
    link.innerText = ` ${file.name}`;
    link.style.color = "#007bff";
    link.style.display = "block";
    link.style.marginTop = "5px";
    content.appendChild(link);
  }

  const time = document.createElement("span");
  const now = new Date();
  time.innerText =
    String(now.getHours()).padStart(2, "0") +
    ":" +
    String(now.getMinutes()).padStart(2, "0");

  msgContainer.appendChild(msgImg);
  msgContainer.appendChild(content);
  msgContainer.appendChild(time);

  messages.appendChild(msgContainer);

  messageBox.scrollTop = messageBox.scrollHeight;
}


// click يبعت الرسالة مش شرط Enter عشان لو عملت
inputChat.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    btnSend.click();
  }
});
// >>>>>>> f186c48b4104bcc0fa63f8c1e4885398b2a3aca7




// <<<<<<< HEAD
// =======

let listChatItem = document.querySelectorAll(".list-item .list-item-text .info-user p");

listChatItem.forEach(e => {
    const words = e.textContent.split(" ").slice(0, 3).join(" ");
    e.textContent = words;
});

// listChatItem.forEach(e => {

//     e.innerHTML.split(" ").slice(0 , 3).join("")
//     e.
// })



// display files in chat details 

const filesBtn = document.querySelectorAll(".cahtsDetails figure .filesBtn");
const filesList = document.querySelectorAll(".cahtsDetails .files-container");
const chatListOverlay = document.querySelector(".cahtsDetails .chat-overlay");
const fileBtnClose = document.querySelector(".cahtsDetails .files-container .close-files-btn");


filesBtn.forEach((btn, index) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    filesList[index].classList.toggle("close");
    chatListOverlay.classList.toggle("close");
  });
});


fileBtnClose.addEventListener("click", function (e) {
  e.preventDefault();
  filesList.forEach(file => {
    file.classList.add("close");
  });
  chatListOverlay.classList.add("close");
});

// >>>>>>> f186c48b4104bcc0fa63f8c1e4885398b2a3aca7
