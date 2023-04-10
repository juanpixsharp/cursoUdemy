export class PErsona{
    
    nombre: string = '';
    apellido: string = '';

    constructor(nombre: string, apellido: string){
        this.nombre=nombre;
        this.apellido = apellido;
    }

    igual(nPersona:PErsona):boolean{
        return (
            this.nombre.toUpperCase()==nPersona.nombre.toUpperCase() &&
            this.apellido.toUpperCase()==nPersona.apellido.toUpperCase()
        );
    }

    /*
    //SINTAXIS SIMPLIFICADA PARA CREAR ATRIBUTOS
    constructor(public nombre:string, public apellido:string){}
    */
}