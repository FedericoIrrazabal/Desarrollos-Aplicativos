import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/tienda/interfaces/comment.interface';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl:string ='https://613fed055cb9280017a110a2.mockapi.io/comments'

  constructor(private http:HttpClient) { }

  mostrarComentarios(idProducto:string):Observable<Comment[]>{
    const url:string = `${this.apiUrl}?idProducto=${idProducto}`
    return this.http.get<Comment[]>(url);
  }
  agregarComentario(comentario:Comment):Observable<Comment>{
    return this.http.post<Comment>(`${this.apiUrl}`, comentario);
  }


}

