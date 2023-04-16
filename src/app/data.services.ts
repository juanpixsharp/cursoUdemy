import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core";
import { PErsona } from "./persona.model";
import { Observable, catchError } from "rxjs";


@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient){}

    guardarPersonas(personas: PErsona[]){
        this.httpClient.put('https://listado-personas-4f759-default-rtdb.firebaseio.com/datos.json', personas)
        .subscribe({
            next: (v) => console.log("Resultado de guardar personas: " + v),
            error: (e) => console.error("Error al guardar personas: " + e),
            complete: () => console.info("Guardado de personas OK")
        });
        
    }

    cargarPersonas(){
        return this.httpClient.get<PErsona[]>('https://listado-personas-4f759-default-rtdb.firebaseio.com/datos.json');
    }

    modificarPersona(index: number, persona: PErsona){
        let url: string;
        url = "https://listado-personas-4f759-default-rtdb.firebaseio.com/datos/" + index + ".json";
        this.httpClient.put(url, persona).subscribe({
            next: (v) => console.log("Resultado de modificar la persona: " + v),
            error: (e) => console.error("Error al modificar persona: " + e)
        });
    }

    eliminarPersona(index: number){
        let url: string;
        url = "https://listado-personas-4f759-default-rtdb.firebaseio.com/datos/" + index + ".json";
        this.httpClient.delete(url).subscribe({
            next: (v) => console.log("Resultado de eliminar la persona: " + v),
            error: (e) => console.error("Error al eliminar persona: " + e)
        });
    }
}