//filter 

var numeros =[1,2,3,4,5,7,8,9,10];
/**
var numerosPares = arreglo.filter(function(numero){
    return numero%2==0;
})

console.log(numerosPares);

var numeroImpares = arreglo.filter(function(numero){
    return numero%2!=0;
})

console.log(numeroImpares);
**/

//map 
/*
var cuadrados = numeros.map(numero=>{ return Math.pow(numero,2)})

console.log(cuadrados);
*/
//forEach
/*
numeros.forEach(numero => console.log(numero))
*/
/*
var letras =["h","o","l","a"];

var palabra = letras.reduce((suma,item)=>suma+item);
console.log(palabra)*/
/*
const nuevo=numeros.some(item=>item%2==0)
*/
const nuevo = numeros.every(item=>item%2==0);
const nuevo2=numeros.find(item =>item%2==0);
console.log(nuevo2);
console.log(nuevo);