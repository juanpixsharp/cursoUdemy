import { LoggingService } from "./LoggingService.service";
import { DataServices } from "./data.services";
import { PErsona } from "./persona.model";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class PersonasService{
  
  personas:PErsona[] = [];

  saludar = new EventEmitter<number>();

  constructor(private logginService: LoggingService, private dataService: DataServices){}

  setPersonas(personas: PErsona[]){
    this.personas = personas;
  }

  obhtenerPersonas(){
    return this.dataService.cargarPersonas();
  }

  agregarPersona(persona:PErsona){

    this.logginService.enviaMensajeAConsola("Persona recibida: " + persona.nombre + " " + persona.apellido);
    if(this.personas==null){
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);

  }

  encontrarPersona(index: number){
    let persona: PErsona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: PErsona){
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(index:number){
    this.personas.splice(index,1);
  }

}