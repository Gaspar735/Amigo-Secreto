// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];

asignarTextoElemento('h1','Amigo Secreto');
asignarTextoElemento('h2','Digite el nombre de sus amigos');


function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

agregarAmigo();

function agregarAmigo(){
        
         let nombreAmigo=document.getElementById('amigo').value;
        
         if (!nombreAmigo){
            alert('Ingrese un nombre válido');
         }
         if (amigoRepetido(amigos,nombreAmigo)){
            alert('El nombre ya está ingresado en la lista');
            limpiarCaja();
         } else{                               
            amigos.push(nombreAmigo);
            transponeLista();
            limpiarCaja();
            return console.log(amigos);
         }  
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    maximo=amigos.length;
    let numeroAleatorio=getRandomInt(0, maximo);
    document.getElementById('resultado').innerHTML = amigos[numeroAleatorio];
    }

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function limpiaLista(){
    document.getElementById('listaAmigos').innerHTML = '';
}

function transponeLista(){
    document.getElementById('listaAmigos').innerHTML = amigos.join('<br>');
}

function amigoRepetido(amigos,nombreAmigo){
    return amigos.includes(nombreAmigo);
}