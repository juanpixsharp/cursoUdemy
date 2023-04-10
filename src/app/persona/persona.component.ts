import { Component, Input } from '@angular/core';
import { PErsona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() persona: PErsona;
  @Input() indice: number;

}
