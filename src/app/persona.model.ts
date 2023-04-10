export class PErsona{
    
    nombre: string = '';
    apellido: string = '';

    constructor(nombre: string, apellido: string){
        this.nombre=nombre;
        this.apellido = apellido;
    }


    /*
    //SINTAXIS SIMPLIFICADA PARA CREAR ATRIBUTOS
    constructor(public nombre:string, public apellido:string){}
    */
}