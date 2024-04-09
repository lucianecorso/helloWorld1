let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuario");

while (nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome?");
}

if(nomeUsuário == null){
    element.textContent = "seja bem-vindo";
}else{
    elemento.textContent = nomeUsuário;
}

