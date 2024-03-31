let NomeUsuário = "";
let elemento = document.querySelector ("#nome-usuário");

while (NomeUsuário == "") {
    NomeUsuário = prompt ("Qual é o seu nome?");
}
if (NomeUsuário == null) {
    elemento.textContent = "Seja muito bem-vido."; 
} else {
    elemento.textContent = NomeUsuário; 
}