import { PErsona } from "./persona.model";

export class PersonasService{
    
  personas:PErsona[] = [
    new PErsona("Juan","Martinez"),
    new PErsona("Laura","Chan"),
    new PErsona("Carlos","Merlin")
  ];

  agregarPersona(persona:PErsona){
    let existe:boolean = false;

    this.personas.forEach(personaLst => {
      existe = personaLst.igual(persona);
      if(existe) throw new Error("Persona repetida");
    });

    if(!existe) this.personas.push(persona);
  }

}