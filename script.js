let tarefas = [];

const lista = document.querySelector("#lista");
let listaItem = document.querySelectorAll(".listaItem");
const addButton = document.querySelector("button");

function addField(){
    const newItem = listaItem[listaItem.length-1].cloneNode(true);
    lista.appendChild(newItem);   
    listaItem = document.querySelectorAll(".listaItem");

}

addButton.addEventListener("click", addField);