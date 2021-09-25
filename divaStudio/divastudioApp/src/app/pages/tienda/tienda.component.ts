import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  arrProductos:Product[] = [];


 

  constructor(private __productService:ProductService) {}

  ngOnInit(): void {
  this.obtenerDatos();
  }

  obtenerDatos(){
    this.__productService.mostrarProductos().subscribe(resp =>{
      this.arrProductos = resp;
      console.log(resp);
    })       
  }


}


