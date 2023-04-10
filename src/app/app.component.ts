import { Component } from '@angular/core';
import { PErsona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas:PErsona[] = [
    new PErsona("Juan","Martinez"),
    new PErsona("Laura","Chan"),
    new PErsona("Carlos","Merlin")
  ];

  personaAgregada(persona:PErsona){
    let existe = false;
    this.personas.forEach(personaLst => {
      existe = personaLst.igual(persona);
      if(existe) throw new Error("Persona repetida");
    });

    if(!existe){
      this.personas.push(persona);
    }
  }

}
