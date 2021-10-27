import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turno } from '../interfaces/turn.interface';

@Injectable({
  providedIn: 'root'
})
export class TurnService {

  apiUrl = "https://613fed055cb9280017a110a2.mockapi.io/turnos"

  constructor(private http:HttpClient) { }


  mostrarTurnos():Observable<Turno[]>{
    return this.http.get<Turno[]>(this.apiUrl);
  }

  agregarTurno(turno:Turno):Observable<Turno>{
    return this.http.post<Turno>(`${this.apiUrl}`, turno);

  }

  verTurno(id:string):Observable <Turno>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Turno>(url);
  }

  eliminarTurno(id:string|undefined): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  actualizarTurno(turno:Turno): Observable<Turno>{
    return this.http.put<Turno>(`${this.apiUrl}/${turno.id}`, turno);

  }
}
