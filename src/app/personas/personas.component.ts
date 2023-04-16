import { Component } from '@angular/core';
import { PErsona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../Personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  personas:PErsona[] = [];

  constructor(
    private personasService: PersonasService,
    private router: Router){}

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  agregar(){
    this.router.navigate(
    ["personas/agregar"]
    )
  }

}
