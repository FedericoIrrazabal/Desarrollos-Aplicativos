import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  termino :string | null ="";

  productos:Product[] = [];
  
  constructor(private __busqueda:ProductService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.termino = this._route.snapshot.paramMap.get('termino');

    this.buscarProductos();

  }

  buscarProductos(){
    this.__busqueda.buscarProductos(this.termino!).subscribe(productos => {
      this.productos = productos;
    });
  }


}
