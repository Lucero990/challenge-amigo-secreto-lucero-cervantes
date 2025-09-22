// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear una variable tipo array vacío llamado amigos.
let listaAmigos =[];

//Seleccionar el elemento con id "listaAmigos" y asignarlo a una variable llamada ulListaAmigos.
const ulListaAmigos = document.getElementById("listaAmigos");

//Seleccionar el elemento con id "amigo" y asignarlo a una variable llamada inputAmigo.
const inputAmigo = document.getElementById("amigo");


//Crear una funcion de nombre agregaAmigos
function agregarAmigos(){
    listaAmigos.push(inputAmigo.value);

    //Iner espera que le agreges codigo HTML
    ulListaAmigos.innerHTML += `<li class="name-item">${inputAmigo.value}</li>`;

    console.log(listaAmigos);

};

