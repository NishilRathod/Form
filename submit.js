
function openPopup(){
    let popup = document.getElementById("popup1");
    popup.classList.add("open-popup");  
}
function openPopup2(){
    let popup = document.getElementById("popup2");
    popup.classList.add("open-popup");  
}
function closePopup(){
    let popup = document.getElementById("popup1");
    popup.classList.remove("open-popup");
}
function closePopup2(){
    let popup = document.getElementById("popup2");
    popup.classList.remove("open-popup");
}

function clicked(){
    window.location.href="thanks.html";
}
