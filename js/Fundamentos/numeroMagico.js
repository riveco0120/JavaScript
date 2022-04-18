


    let max =100;
    let min =1;
    var numeroSecreto = Math.random()*(max -min) + min;
    numeroSecreto = parseInt(numeroSecreto);
    console.log(numeroSecreto);


function probar(){
    let numero = document.getElementById("texto").value;
    if(numero==""){
        
    alert("Agregue un numero");
    }
    else{
        if(numero==numeroSecreto){

            alert("Felicidades encontraste el numero secreto")
        }
        else{
            if(numero<numeroSecreto){
                alert("El numero ingresado es menor")
            }
            else{
                alert("El numero ingresado es mayor")
            }
        }

    }
    }


