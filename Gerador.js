
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let tamanhoSenha = document.querySelector("#valor");
let senhaElement = document.querySelector("#senha");

let containerSenha = document.querySelector("#container-senha");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@&$";
let novaSenha = "";

tamanhoSenha.innerHTML = sliderElement.value;

slider.oninput = function(){
    tamanhoSenha.innerHTML = this.value;
}

function gerarSenha(){
    let pass = "";
    for(let i =0 , n = charset.length; i < sliderElement.value; i++){
       pass += charset.charAt(Math.floor(Math.random()*n));
    }   
    containerSenha.classList.remove("hide");
    senhaElement.innerHTML = pass;
    novaSenha = pass;
}

function copiarSenha(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}

