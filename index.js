//https://www.youtube.com/watch?v=7YDagj3cVAk&ab_channel=Programaci%C3%B3nAccesible
//https://fernandoruizrico.com/calculadora-basica-con-html-css-javascript/


let displayValorAnterior =document.getElementById('valor-anterior');
let displayValorActual = document.getElementById('valor-actual');
let valorResultado ='';


let numClick9 = document.getElementById("boton9");

numClick9.addEventListener("click", function() {
    valorResultado = valorResultado+numClick9.value;
    console.log(valorResultado);
});

let numClick8 = document.getElementById("boton8");

numClick8.addEventListener("click", function() {
    valorResultado = valorResultado + numClick8.value;
    console.log(valorResultado);
});

let numClick7 = document.getElementById("boton7");

numClick7.addEventListener("click", function() {
    valorResultado = valorResultado + numClick7.value;
    console.log(valorResultado);
});

let numClick6 = document.getElementById("boton6");

numClick6.addEventListener("click", function() {
    valorResultado = valorResultado + numClick6.value;
    console.log(valorResultado);
});

let numClick5 = document.getElementById("boton5");

numClick5.addEventListener("click", function() {
    valorResultado = valorResultado + numClick5.value;
    console.log(valorResultado);
});

let numClick4 = document.getElementById("boton4");

numClick4.addEventListener("click", function() {
    valorResultado = valorResultado + numClick4.value;
    console.log(valorResultado);
});

let numClick3 = document.getElementById("boton3");

numClick3.addEventListener("click", function() {
    valorResultado = valorResultado + numClick3.value;
    console.log(valorResultado);
});

let numClick2 = document.getElementById("boton2");

numClick2.addEventListener("click", function() {
    valorResultado = valorResultado + numClick2.value;
    console.log(valorResultado);
});

let numClick1 = document.getElementById("boton1");

numClick1.addEventListener("click", function() {
    valorResultado = valorResultado + numClick1.value;
    console.log(valorResultado);
});

let numClickDot = document.getElementById("botonDot");

numClickDot.addEventListener("click", function() {
    valorResultado = valorResultado + numClickDot.value;
    console.log(valorResultado);
});

//Me permite ir pintando en el display lo que se marca
document.addEventListener("click", function(){
    let displayActual= document.getElementById("valor-actual")
    displayActual.innerHTML = valorResultado;
       
});




