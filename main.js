const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

adicionaElementoNalista("Primeiro");
adicionaElementoNalista("Segundo");
adicionaElementoNalista("Terceiro");

function adicionaElementoNalista(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);
}


