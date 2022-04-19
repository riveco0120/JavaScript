const persona={
    nombre:"Richard",
    edad:29,
    profesion:"Ingeniero de materiales",

    mostrarInformacion(){
        return "Nombre: " +this.nombre + "tiene: " + this.edad + " Y su profesion es: " + this.profesion;

    },

    getNombre:function(){
        return this.nombre;
    },

    setNombre:function(nombre){
        this.nombre = nombre;
    }
    

}