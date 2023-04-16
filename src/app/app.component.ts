import { Component } from '@angular/core';
import { PErsona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './Personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Listado de Personas';

}
