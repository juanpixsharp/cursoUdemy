import { Component, EventEmitter, Output } from '@angular/core';
import { PErsona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<PErsona>();
  nombreInput: string='';
  apellidoInput: string ='';

  agregarPersona(){
    if(this.nombreInput!='' && this.apellidoInput!=''){
      let nPersona = new PErsona(this.nombreInput, this.apellidoInput);
      //this.personas.push(nPersona);
      this.nombreInput = '';
      this.apellidoInput = '';
      this.personaCreada.emit(nPersona);
    }
  }

}
