
let container = document.getElementById("container");
let closeBtn = document.getElementById("close");
let openBtn = document.getElementById("open");

// first way
// closeBtn.onclick = function(){
//     openBtn.classList.remove("hide")
//     container.classList.add("hide")
//     closeBtn.classList.add("hide")
// }

// امر اخفاء اول مااحمل الصفحه
window.onload = function(){
    openBtn.classList.add("hide")
}

openBtn.onclick = function(){
    openBtn.classList.add("hide")
    container.classList.remove("hide")
    closeBtn.classList.remove("hide")
}

closeBtn.addEventListener ("click" , function(){
    openBtn.classList.remove("hide")
    container.classList.add("hide")
    closeBtn.classList.add("hide")
})
