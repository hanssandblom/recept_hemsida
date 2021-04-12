var skickaButton = document.getElementById("skicka");
var clearButton = document.getElementById("rensa");

function saveResponses() {

    var nameField = document.getElementById("username");
    var emailField = document.getElementById("email");

    localStorage.setItem("username", nameField.value);
    localStorage.setItem("email", emailField.value);
}

skickaButton.addEventListener("click", saveResponses);
clearButton.addEventListener("click", localStorage.clear);

document.querySelector('#name').innerHTML = localStorage.getItem('username');
document.querySelector('#mail').innerHTML = localStorage.getItem('email');

nameField.value = localStorage.getItem("username");
emailField.value = localStorage.getItem("email");