import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { PErsona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<PErsona>();
  @ViewChild('nombreRef') nombreInput: ElementRef;
  @ViewChild('apellidoRef') apellidoInput: ElementRef;





  agregarPersona(){

    if(this.nombreInput.nativeElement.value!='' && this.apellidoInput.nativeElement.value!=''){
      this.personaCreada.emit(
        new PErsona(this.nombreInput.nativeElement.value,
          this.apellidoInput.nativeElement.value)
        );
        this.nombreInput.nativeElement.value =
        this.apellidoInput.nativeElement.value = "";
        this.nombreInput.nativeElement.focus();
    }
  }
}