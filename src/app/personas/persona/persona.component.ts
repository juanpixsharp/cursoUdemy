import { Component, Input } from '@angular/core';
import { PErsona } from '../../persona.model';
import { PersonasService } from '../../Personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() persona: PErsona;
  @Input() indice: number;

  constructor(private personasService: PersonasService){}

  emitirSaludo(){
    this.personasService.saludar.emit(this.indice);
  }

}
