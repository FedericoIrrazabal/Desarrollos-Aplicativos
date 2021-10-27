import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 apiUrl = 'https://613fed055cb9280017a110a2.mockapi.io/usuarios'

  constructor(private http: HttpClient) { }

  login(usuario:string):Observable<Usuario[]>{
    
    return this.http.get<Usuario[]>(`${this.apiUrl}/?email=${usuario}` )
  }

 
  registroUsuario(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiUrl}`, usuario);
  }

  mostrarUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  verUsuario(id:string):Observable <Usuario>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }

  eliminarUsuario(id:string|undefined): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  actualizarUsuario(usuario:Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiUrl}/${usuario.id}`, usuario);

  }
}
