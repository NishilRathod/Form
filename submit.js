    let inputs = document.querySelectorAll('input');
    let buttonSend1 = document.getElementById('button1');
    let buttonSend2 = document.getElementById('button2');
    let inputValidator = {
    "username": false,
    "email": false,
    "phoneno": false,
    "age":false,
    "gender": false
    }

inputs.forEach((input) => {
  input.addEventListener('change', (event) => {
    let name = event.target.name;
    if (event.target.value.length > 0) {
      inputValidator[name] = true;
    } else {
      inputValidator[name] = false;
    };

    let allTrue = Object.keys(inputValidator).every((item) => {
      return inputValidator[item] === true
    });

    if (allTrue) {
      buttonSend1.disabled = false;
      buttonSend2.disabled = false;
    } else {
      buttonSend1.disabled = true;
      buttonSend2.disabled = true;
    }
  })
})

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
