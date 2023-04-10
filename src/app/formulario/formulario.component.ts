import { Component, EventEmitter, Output } from '@angular/core';
import { PErsona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<PErsona>();

  agregarPersona(nombre:HTMLInputElement, apellido:HTMLInputElement){

    if(nombre.value!='' && apellido.value!=''){
      this.personaCreada.emit(
        new PErsona(nombre.value, apellido.value)
        );
      nombre.value = apellido.value = '';
      nombre.focus();
    }
  }
}