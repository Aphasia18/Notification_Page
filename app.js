const unread1 = document.getElementById("unread-notification_1");
const unread2 = document.getElementById("unread-notification_2");
const unread3 = document.getElementById("unread-notification_3");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");

unread1.addEventListener("click", function(){
    console.log("clicked")
    unread1.style.backgroundColor = "white";
    dot1.style.display = "none";
})

unread2.addEventListener("click", function(){
    console.log("clicked")
    unread2.style.backgroundColor = "white";
    dot2.style.display = "none";
})

unread3.addEventListener("click", function(){
    console.log("clicked")
    unread3.style.backgroundColor = "white";
    dot3.style.display = "none";
})


// makes notifactions toggle

// unread1.onclick = function () {
//     unread1.classList.toggle("active")
//     dot1.classList.toggle("active")
// }
// unread2.onclick = function () {
//     unread2.classList.toggle("active")
//     dot2.classList.toggle("active")
// }
// unread3.onclick = function () {
//     unread3.classList.toggle("active")
//     dot3.classList.toggle("active")
// }