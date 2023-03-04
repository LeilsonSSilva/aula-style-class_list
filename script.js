let titulo = document.querySelector("h2");

console.log(titulo);


titulo.style.color = "blue";
titulo.style.fontSize = "4rem";

// Primeira interação com o usuário: errou o username

let username = document.getElementById("login-usuario");
let errorText = document.querySelectorAll(".error-text");

username.classList.add("error");
errorText[0].classList.add("visible");

console.log(errorText);


// Segunda interação: acerta o username e erra a senha

let senha = document.getElementById("login-senha");

username.classList.remove("error");
errorText[0].classList.remove("visible");

username.classList.add("correct");
senha.classList.add("error");

errorText[1].classList.add("visible");

