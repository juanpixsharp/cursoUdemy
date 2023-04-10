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

  nombreInput: string='';
  apellidoInput: string ='';

  agregarPersona(){
    if(this.nombreInput!='' && this.apellidoInput!=''){
      let nPersona:PErsona = new PErsona(this.nombreInput, this.apellidoInput);
      this.personas.push(nPersona);
      this.nombreInput = '';
      this.apellidoInput = '';
    }
  }

}
