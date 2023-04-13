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

  //@Output() personaCreada = new EventEmitter<PErsona>();
  @ViewChild('nombreRef') nombreInput: ElementRef;
  @ViewChild('apellidoRef') apellidoInput: ElementRef;

  constructor(private logginService:LoggingService, private personasService: PersonasService){

    this.personasService.saludar.subscribe(
      (indice: number) => {alert("El indice es: " + indice);}
    )

  }

  agregarPersona(){
    if(this.nombreInput.nativeElement.value!='' && this.apellidoInput.nativeElement.value!=''){
      
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
          new PErsona(this.nombreInput.nativeElement.value,
            this.apellidoInput.nativeElement.value)
        );
        this.nombreInput.nativeElement.value =
        this.apellidoInput.nativeElement.value = "";
        this.nombreInput.nativeElement.focus();
    }
  }
}