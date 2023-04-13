import { Component, OnInit } from '@angular/core';
import { PErsona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './Personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titulo = 'Listado de Personas';
  personas:PErsona[] = [];

  constructor(private loggingService:LoggingService, private personasService: PersonasService){}

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }


  /*
  personaAgregada(persona:PErsona){
    let existe = false;
    this.personas.forEach(personaLst => {
      existe = personaLst.igual(persona);
      if(existe) throw new Error("Persona repetida");
    });

    if(!existe){
      //this.personas.push(persona);
      this.personasService.agregarPersona(persona);
      this.loggingService.enviaMensajeAConsola("Nueva persona agregada. Nombre: "
        + persona.nombre + " | Apellido: " + persona.apellido);
    }
  }
  */

}
