class Persona{
    constructor(nombre,apellido,profesion){
        this._nombre=nombre;
        this._apellido=apellido;
        this._profesion=profesion;
    }

    getNombre(){
        return this._nombre;
    }

    setNombre(nombre){
        this._nombre = nombre;
    }

    mostrarInformacion(){
        return "Nombre:" + this._nombre + " " + this._apellido + " y su profesion es " + this._profesion;
    }
}

let persona = new Persona("Richard","Vellojin","Ingeniero de materiales");

console.log(persona.mostrarInformacion());