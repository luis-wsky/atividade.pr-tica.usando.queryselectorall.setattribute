let cards = document.getElementsByClassName("card");
for(const elemento of cards){
    elemento.setAttribute("style", "background-color: #E16E0E");
}
let titulosCriados = ["MEU CARD", "MEU CARD", "MEU CARD", "MEU CARD", "MEU CARD"]
let tituloDoHTML = document.querySelectorAll(".titulo-card");
for (let i=0; i<tituloDoHTML.length; i++){
    tituloDoHTML[i].setAttribute("style", "color: #2b385b");
    tituloDoHTML[i].innerHTML = `${titulosCriados[i]}`;
}
let descricaoCriada = ["Descrição modificada pelo JS", "Descrição modificada pelo JS", "Descrição modificada pelo JS", "Descrição modificada pelo JS", "Descrição modificada pelo JS"];
let descricaoHTML = document.getElementsByClassName("descricao-card");
for(let i = 0; i<descricaoHTML.length; i++){
    descricaoHTML[i].setAttribute("style", "color: white; font-size: 14px; padding: 25px 0 25px 0");
    descricaoHTML[i].innerHTML = `${descricaoCriada[i]}`;
}
let botaoCriado = document.querySelectorAll(".botao-editar");
for(const elemento of botaoCriado){
    elemento.setAttribute("style", "background-color: green; border: 0; border-radius: 10px; color: white; padding: 10px; cursor: pointer");
    elemento.setAttribute("onclick", "editarCard()");
}
let botaoApagar = document.querySelectorAll(".botao-apagar");
for(const elemento of botaoApagar){
    elemento.setAttribute("style", "background-color: red; border: 0; border-radius: 10px; color: white; padding: 10px; cursor: pointer");
    elemento.setAttribute("onclick", "editarCard()");
}
function editarCard(){
    window.alert("Clicou em Editar");
}
function apagarCard(){
   const excluir = window.confirm("Você tem certeza da exclusão do card?")
   if(excluir){
    window.alert("Confirmou")
}else{
    window.alert("Cancelou")
}
}
