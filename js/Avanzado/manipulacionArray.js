//filter 

var arreglo =[1,2,3,4,5,7,8,9,10];

var numerosPares = arreglo.filter(function(numero){
    return numero%2==0;
})

console.log(numerosPares);

var numeroImpares = arreglo.filter(function(numero){
    return numero%2!=0;
})

console.log(numeroImpares);