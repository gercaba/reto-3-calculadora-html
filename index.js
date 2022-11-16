//https://www.youtube.com/watch?v=7YDagj3cVAk&ab_channel=Programaci%C3%B3nAccesible

let operando1 = '';
let operando2='';
let operacion = '';
let resultado = '';

const solve = ()=> {

    const number1 = Number.parseFloat(operando1);
    const number2 = Number.parseFloat(operando2);
    

    switch (operacion) {
        case '+': 
            resultado = number1+number2;    
            break
        case '-':
            resultado = number1-number2;
            break
        case 'x':
            resultado = number1 * number2;
            break
        case '%':
            resultado = number1 / number2;

    }

    //operando1 = resultado.toFixed(2);
    //operacion = '';
    //operando2 = '';
    pintaDisplay();
}

const clearDisplay = ()=>{
    operando1='';
    operando2='';
    operacion ='';
    resultado = '';
    pintaDisplay();

}

const addOperador = (newOperacion) => {
    operacion = newOperacion;
    pintaDisplay();
}

const addNumber = (number) => {

        if (!operacion){
            operando1 += number
            //console.log('operando1', operando1);
        }else {
            operando2 += number
            //console.log('operando2', operando2);
        }
        pintaDisplay();
}

const del =() => {
    if (operando2) {
        operando2 = operando2.slice(0, operando2.length-1);

    }else if  (operacion){
        operacion='';

    }else{
        operando1=operando1.slice(0, operando1.length-1);
    }
}

const pintaDisplay = () => {

    
    document.getElementById("valor-actual").innerHTML = operando1 + operacion + operando2


    if (resultado){
        document.getElementById("valor-anterior").innerHTML = resultado
        operando1='';
        operando2='';
        operacion ='';
        resultado = '';

    }else {
        document.getElementById("valor-anterior").innerHTML = "";

    }

    
    //console.log('concatenación de las tres cadenas', document.getElementById("valor-actual").value)
}

/*
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

});

let numClick8 = document.getElementById("boton8");
numClick8.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick8.value;
    valor1 = valor1+numClick8.value;

});

let numClick7 = document.getElementById("boton7");
numClick7.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick7.value;
    valor1 = valor1+numClick7.value;

});

let numClick6 = document.getElementById("boton6");
numClick6.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick6.value;
    valor1 = valor1+numClick6.value;

});

let numClick5 = document.getElementById("boton5");
numClick5.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick5.value;
    valor1 = valor1+numClick5.value;

});

let numClick4 = document.getElementById("boton4");
numClick4.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick4.value;
    valor1 = valor1+numClick4.value;

});

let numClick3 = document.getElementById("boton3");
numClick3.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick3.value;
    valor1 = valor1+numClick3.value;

});

let numClick2 = document.getElementById("boton2");
numClick2.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick2.value;
    valor1 = valor1+numClick2.value;

});

let numClick1 = document.getElementById("boton1");
numClick1.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick1.value;
    valor1 = valor1+numClick1.value;

});

let numClick0 = document.getElementById("boton0");
numClick0.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClick0.value;
    valor1 = valor1+numClick1.value;
 
});

let numClickDot = document.getElementById("botonDot");
numClickDot.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClickDot.value;
    valor1 = valor1+numClickDot.value

});

//botones de las operaciones
let numClickSum = document.getElementById("botonSum");
numClickSum.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClickSum.value;
    valor2=valor1;
    valor1="";

});

let numClickSubtract = document.getElementById("botonSubtract");
numClickSubtract.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClickSubtract.value;
    valor2=valor1;
    valor1="";
 
});

let numClickMult = document.getElementById("botonMult");
numClickMult.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClickMult.value;
    valor2=valor1;
    valor1="";
});

let numClickDiv = document.getElementById("botonDiv");
numClickDiv.addEventListener("click", function() {
    displayValorActual = displayValorActual + numClickDiv.value;
    valor2=valor1;
    valor1="";
});

let numClickDeleteAll = document.getElementById("botonDeleteAll");
numClickDeleteAll.addEventListener("click", function() {
    
    displayValorActual= "";
    displayValorAnterior.innerHTML="";
    valor1="";
    valor2="";

});

let numClickDelete = document.getElementById("botonDelete");
numClickDelete.addEventListener("click", function() {
    displayValorActual = displayValorActual.substring(0, displayValorActual.length-1);
    if (valor1=""){
        valor2 = valor2.substring(0, valor2.length-1);
    }else{
        valor1 = valor1.substring(0, valor1.length-1);   
    }
    
    //console.log(displayValorActual);
});

//Me permite ir pintando en el display lo que se marca de forma permanente
document.addEventListener("click", function(){
    let displayActual= document.getElementById("valor-actual")
    displayActual.innerHTML = displayValorActual;
       
});

//ejecutar las operaciones
let numClickEqual = document.getElementById("botonEqual");
numClickEqual.addEventListener("click", function() {
    if (displayValorActual.indexOf("+")>0) {
        displayValorAnterior.innerHTML=parseFloat(valor1) + parseFloat(valor2);
        displayValorActual ="";
       
        valor1="";
        valor2="";

    }else if (displayValorActual.indexOf("-")>0){
        displayValorAnterior.innerHTML=-parseFloat(valor1) + parseFloat(valor2);
        displayValorActual ="";
        
        valor1="";
        valor2="";

    }else if(displayValorActual.indexOf("x")>0){
        displayValorAnterior.innerHTML=parseFloat(valor1)*parseFloat(valor2);
        displayValorActual ="";
        
        valor1="";
        valor2="";

    }else if(displayValorActual.indexOf("%")){

        displayValorAnterior.innerHTML= round2(valor2/valor1);
        displayValorActual ="";
      
        valor1="";
        valor2="";
        
    }
});

const comaPunto =(strNumber)=>{
    return strNumber=strNumber.replace(/,/g,'.');
}

const round2 =(num) =>{
    return Math.round((num +Number.EPSILON)*100)/100;
}

// dudas --> es necesario cambiar el punto por una coma para operar? --> parece que no funciona en mi código
// ¿Cómo hacer para ejecutar todos los click con una sola función o método?
// ¿Por qué no funciona el Math.round() --> se ha realizado una función
// ¿Qué otras formas existen de realizar las operaciones?
// ¿Es posible que en las operaciones de mult y div no sea necesario convertir a número?

*/