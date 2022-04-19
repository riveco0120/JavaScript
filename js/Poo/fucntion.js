var numeros = [1,2,3,4,5];

var cuadrados = numeros.map((n=>Math.pow(n,2)));
console.log(cuadrados);

function tutor(){
    this.nombre = "Richard";

    setTimeout(()=>{
        console.log(this);
        this.nombre= "Codigo facilitimo";
    },500);
}

var nuevoTutor = new tutor();
console.log(tutor.nombre);