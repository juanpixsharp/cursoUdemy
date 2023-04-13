import { LoggingService } from "./LoggingService.service";
import { PErsona } from "./persona.model";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class PersonasService{
    
  personas:PErsona[] = [
    new PErsona("Juan","Martinez"),
    new PErsona("Laura","Chan"),
    new PErsona("Carlos","Merlin")
  ];

  saludar = new EventEmitter<number>();

  constructor(private logginService: LoggingService){}

  agregarPersona(persona:PErsona){

    this.logginService.enviaMensajeAConsola("Persona recibida: " + persona.nombre + " " + persona.apellido);

    let existe:boolean = false;

    this.personas.forEach(personaLst => {
      existe = personaLst.igual(persona);
      if(existe) throw new Error("Persona repetida");
    });

    if(!existe) this.personas.push(persona);
  }

}