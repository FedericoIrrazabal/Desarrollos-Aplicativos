import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/tienda/interfaces/product.interface';
import { ProductService } from 'src/app/tienda/services/product.service';

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
    this._route.params.pipe(switchMap( ({termino}) => this.__busqueda.buscarProductos(termino))).subscribe(productos =>{
      this.productos = productos;
    });
  }


}