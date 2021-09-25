import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http:HttpClient) {
  }

  mostrarProductos() : Observable <Product[]>{
   return this.http.get<Product[]>('https://613fed055cb9280017a110a2.mockapi.io/productos');
  }

}

// .subscribe ((resp :any) => {
  // this.productos = resp;

