import { Component, ViewChild, ElementRef } from '@angular/core';
import { PErsona } from '../../persona.model';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../Personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nombreInput: string;
  apellidoInput: string;
  index: number;
  modoEdicion: number;

  constructor(
    private personasService: PersonasService,
    private router:Router,
    private route: ActivatedRoute
    ){

    this.personasService.saludar.subscribe(
      (indice: number) => {alert("El indice es: " + indice);}
    )

  }

  ngOnInit(){
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    if(this.modoEdicion!= null && this.modoEdicion===1){
      let persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona(){
    let persona1 = new PErsona(this.nombreInput, this.apellidoInput);
    if(this.modoEdicion!= null && this.modoEdicion===1){
      this.personasService.modificarPersona(this.index, persona1);
    }else{
      //this.personasService.personas.push(persona1);
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(['/personas']);
  }

  eliminarPersona(){
    if(this.modoEdicion!= null && this.modoEdicion===1){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}