import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl: string = 'https://613fed055cb9280017a110a2.mockapi.io/productos';



  constructor(private http:HttpClient) {
  }

  mostrarProductos() : Observable <Product[]>{
   return this.http.get<Product[]>(this.apiUrl);
  }

  buscarProductos(termino:string):Observable <Product[]>{
    const url = `${this.apiUrl}?search=${termino}`;
    return this.http.get<Product[]>(url);
  }

  verProducto(id:string):Observable <Product>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  agregarProducto(producto:Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}`, producto);

  }

  actualizarProducto(producto:Product): Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/${producto.id}`, producto);

  }

  eliminarProducto(id:string|undefined): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}


