// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear una variable tipo array vacío llamado amigos.
const listaAmigos =[];

//Seleccionar el elemento con id "amigo" y asignarlo a una variable llamada inputAmigo.
const inputAmigo = document.getElementById("amigo");

//Seleccionar el elemento con id "listaAmigos" y asignarlo a una variable llamada ulListaAmigos.
const ulListaAmigos = document.getElementById("listaAmigos");

const ulResultado = document.getElementById("resultado");


//Crear una funcion de nombre agregaAmigos
function agregarAmigos(){

    //Validar que el input no esté vacío. Si está vacío, mostrar una alerta que diga "Coloca un nombre válido".
    if(!inputAmigo.value ){
        alert("Coloca un nombre valido");
    }

    listaAmigos.push(inputAmigo.value);

    //Inner espera que le agreges codigo HTML
    ulListaAmigos.innerHTML += `<li class="name-item">${inputAmigo.value}</li>`;


    //Limpiar el input
    inputAmigo.value = "";


};

//Crear una función de nombre sortearAmigo
function sortearAmigo(){1
    const random= Math.floor(Math.random() * listaAmigos.length);
    //Seleccionar un amigo al azar del array amigos y mostrarlo en el elemento con id "resultado".
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
};
