import { Component, ViewChild, ElementRef } from '@angular/core';
import { PErsona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../Personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nombreInput: string;
  apellidoInput: string;
  //@Output() personaCreada = new EventEmitter<PErsona>();
  /*
  @ViewChild('nombreRef') nombreInputRef: ElementRef;
  @ViewChild('apellidoRef') apellidoInputEleemnt: ElementRef;
  */

  

  constructor(private logginService:LoggingService, private personasService: PersonasService){

    this.personasService.saludar.subscribe(
      (indice: number) => {alert("El indice es: " + indice);}
    )

  }

  agregarPersona(){
    if(this.nombreInput!='' && this.apellidoInput!=''){
      
      /*
      this.logginService.enviaMensajeAConsola("Enviamos persona: "
        + this.nombreInput.nativeElement.value + " "
        + this.apellidoInput.nativeElement.value);
        
      this.personaCreada.emit(
        new PErsona(this.nombreInput.nativeElement.value,
          this.apellidoInput.nativeElement.value)
        );
        */
        this.personasService.agregarPersona(
          new PErsona(this.nombreInput,this.apellidoInput)
        );
        this.nombreInput = this.apellidoInput = "";
        
    }
  }
}