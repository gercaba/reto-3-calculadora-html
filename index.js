//https://www.youtube.com/watch?v=7YDagj3cVAk&ab_channel=Programaci%C3%B3nAccesible
//https://fernandoruizrico.com/calculadora-basica-con-html-css-javascript/


let displayValorAnterior =document.getElementById('valor-anterior');
let displayValorActual = document.getElementById('valor-actual');
let valor1 ='';
let valor2='';

displayValorActual = ""

//Obtener en una variable el valor de cada número

let numClick9 = document.getElementById("boton9");
numClick9.addEventListener("click", function() {
    displayValorActual = displayValorActual+numClick9.value
    valor1 = valor1+numClick9.value;
    //console.log(displayValorActual);
});

let numClick8 = document.getElementById("boton8");
numClick8.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick8.value;
    valor1 = valor1+numClick8.value;
    //console.log(displayValorActual);
});

let numClick7 = document.getElementById("boton7");
numClick7.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick7.value;
    valor1 = valor1+numClick7.value;
    //console.log(displayValorActual);
});

let numClick6 = document.getElementById("boton6");
numClick6.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick6.value;
    valor1 = valor1+numClick6.value;
    //console.log(displayValorActual);
});

let numClick5 = document.getElementById("boton5");
numClick5.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick5.value;
    valor1 = valor1+numClick5.value;
    //console.log(displayValorActual);
});

let numClick4 = document.getElementById("boton4");
numClick4.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick4.value;
    valor1 = valor1+numClick4.value;
    //console.log(displayValorActual);
});

let numClick3 = document.getElementById("boton3");
numClick3.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick3.value;
    valor1 = valor1+numClick3.value;
    //console.log(displayValorActual);
});

let numClick2 = document.getElementById("boton2");
numClick2.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick2.value;
    valor1 = valor1+numClick2.value;
    //console.log(displayValorActual);
});

let numClick1 = document.getElementById("boton1");
numClick1.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick1.value;
    valor1 = valor1+numClick1.value;
    console.log(displayValorActual);
});

let numClickDot = document.getElementById("botonDot");
numClickDot.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClickDot.value;
    console.log(displayValorActual);
});

//botones de las operaciones
let numClickSum = document.getElementById("botonSum");
numClickSum.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClickSum.value;
    valor2=valor1;
    valor1="";
    console.log('DisplayActual',displayValorActual);
    console.log('valor1', valor1);
    console.log('valor2',valor2);
});

let numClickSubtract = document.getElementById("botonSubtract");
numClickSubtract.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClickSubtract.value;
    console.log(displayValorActual);
});

let numClickMult = document.getElementById("botonMult");
numClickMult.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClickMult.value;
    console.log(displayValorActual);
});

let numClickDiv = document.getElementById("botonDiv");
numClickDiv.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClickDiv.value;
    console.log(displayValorActual);
});

let numClickDeleteAll = document.getElementById("botonDeleteAll");
numClickDeleteAll.addEventListener("click", function() {
    
    displayValorActual= "";
    displayValorAnterior.innerHTML="";
    valor1="";
    valor2="";

    console.log(displayValorActual);
    console.log(displayValorAnterior);
});

let numClickDelete = document.getElementById("botonDelete");
numClickDelete.addEventListener("click", function() {
    displayValorActual = displayValorActual.substring(0, displayValorActual.length-1);
    console.log(displayValorActual);
});

//Me permite ir pintando en el display lo que se marca
document.addEventListener("click", function(){
    let displayActual= document.getElementById("valor-actual")
    displayActual.innerHTML = displayValorActual;
       
});

//ejecutar las operaciones
let numClickEqual = document.getElementById("botonEqual");
numClickEqual.addEventListener("click", function() {
    displayValorAnterior.innerHTML=parseFloat(comaPunto(valor1)) + parseFloat(comaPunto(valor2));
});

const comaPunto =(strNumber)=>{
    return strNumber=strNumber.replace(/,/g,'.');
}