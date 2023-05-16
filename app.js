const process = require('process');
const calculadora = require('./calculadora');

const operaciones =['sumar','restar','multiplicar','dividir']

const operacion = process.argv[2];
const numerA = +process.argv[3];
const numerB = +process.argv[4];
let resultado = 0;

if(operaciones.includes(operacion)){// includes regresa true o false

if(operacion === "sumar"){
    resultado = calculadora.sumar(numerA,numerB)
}
else if(operacion === "restar"){
    resultado = calculadora.restar(numerA,numerB)
}
else if(operacion === "multiplicar"){
resultado = calculadora.multiplicar(numerA,numerB)
}
else if(operacion === "dividir"){
    resultado = calculadora.dividir(numerA,numerB)
}
console.log(resultado)

}else{
    console.log("Error: la operacion no es valida");
}
